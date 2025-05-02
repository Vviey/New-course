import { v4 as uuidv4 } from 'uuid';
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { EmailService } from './email';
import { storage } from '../storage';
import { User } from '@shared/schema';
import { config } from '../config';

const scryptAsync = promisify(scrypt);

/**
 * Authentication service for handling user operations
 */
export class AuthService {
  /**
   * Hash a password with a randomly generated salt
   * 
   * @param password Plain text password to hash
   * @returns Promise<string> Hashed password with salt
   */
  static async hashPassword(password: string): Promise<string> {
    const salt = randomBytes(16).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buf.toString("hex")}.${salt}`;
  }

  /**
   * Compare a supplied password with a stored hashed password
   * 
   * @param supplied Plain text password to check
   * @param stored Hashed password from database
   * @returns Promise<boolean> Whether passwords match
   */
  static async comparePasswords(supplied: string, stored: string): Promise<boolean> {
    const [hashed, salt] = stored.split(".");
    const hashedBuf = Buffer.from(hashed, "hex");
    const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
    return timingSafeEqual(hashedBuf, suppliedBuf);
  }

  /**
   * Generate a random verification code
   * 
   * @returns string 6-digit verification code
   */
  static generateVerificationCode(): string {
    // Generate a 6-digit code
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  /**
   * Register a new user
   * 
   * @param username Username for the new account
   * @param password Password for the new account
   * @param email Optional email for the new account
   * @returns Promise<{user: User, verificationSent: boolean}> 
   */
  static async registerUser(username: string, password: string, email?: string): Promise<{user: User, verificationSent: boolean}> {
    // Check if username already exists
    const existingUser = await storage.getUserByUsername(username);
    if (existingUser) {
      throw new Error('Username already exists');
    }

    // Check if email already exists if provided
    if (email) {
      const emailUser = await storage.getUserByEmail(email);
      if (emailUser) {
        throw new Error('Email already in use');
      }
    }

    // Generate verification code if email provided
    let verificationCode: string | undefined;
    let verificationCodeExpiry: string | undefined;
    let verificationSent = false;

    if (email) {
      verificationCode = this.generateVerificationCode();
      verificationCodeExpiry = new Date(Date.now() + config.auth.verificationCodeExpiry).toISOString();
      
      // Send verification email
      verificationSent = await EmailService.sendVerificationCode(email, verificationCode);
    }

    // Create user in database
    const user = await storage.createUser({
      userId: uuidv4(),
      username,
      password: await this.hashPassword(password),
      email,
      emailVerified: false,
      verificationCode,
      verificationCodeExpiry,
      progress: {
        currentRealm: 1,
        completedRealms: [],
        chain: {
          progress: 0,
          lastUpdated: new Date().toISOString()
        }
      },
      rewards: {
        badges: [],
        tokens: 0
      }
    });

    return {
      user,
      verificationSent
    };
  }

  /**
   * Verify a user's email with the provided code
   * 
   * @param userId User ID of the account to verify
   * @param code Verification code
   * @returns Promise<boolean> Whether verification was successful
   */
  static async verifyEmail(userId: string, code: string): Promise<boolean> {
    // Get the user
    const user = await storage.getUserByUserId(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Check if already verified
    if (user.emailVerified) {
      return true;
    }

    // Check if code matches and is not expired
    if (!user.verificationCode || user.verificationCode !== code) {
      throw new Error('Invalid verification code');
    }

    if (!user.verificationCodeExpiry || new Date(user.verificationCodeExpiry) < new Date()) {
      throw new Error('Verification code expired');
    }

    // Mark as verified and clear verification code
    const updatedUser = await storage.updateUser(userId, {
      emailVerified: true,
      verificationCode: null,
      verificationCodeExpiry: null
    });

    // Send welcome email
    if (updatedUser && updatedUser.email) {
      await EmailService.sendWelcomeEmail(updatedUser.email, updatedUser.username);
    }

    return true;
  }

  /**
   * Resend verification code to user's email
   * 
   * @param userId User ID of the account
   * @returns Promise<boolean> Whether the code was sent successfully
   */
  static async resendVerificationCode(userId: string): Promise<boolean> {
    // Get the user
    const user = await storage.getUserByUserId(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Check if email exists
    if (!user.email) {
      throw new Error('No email associated with account');
    }

    // Check if already verified
    if (user.emailVerified) {
      return true;
    }

    // Generate new verification code
    const verificationCode = this.generateVerificationCode();
    const verificationCodeExpiry = new Date(Date.now() + config.auth.verificationCodeExpiry).toISOString();

    // Update user with new code
    await storage.updateUser(userId, {
      verificationCode,
      verificationCodeExpiry
    });

    // Send verification email
    return await EmailService.sendVerificationCode(user.email, verificationCode);
  }

  /**
   * Request a password reset by generating a reset token
   * 
   * @param email Email of the account
   * @returns Promise<boolean> Whether the reset email was sent
   */
  static async requestPasswordReset(email: string): Promise<boolean> {
    // Find user by email
    const user = await storage.getUserByEmail(email);
    if (!user) {
      // For security, don't reveal if email exists
      return false;
    }

    // Generate reset token
    const resetToken = uuidv4();
    const resetTokenExpiry = new Date(Date.now() + config.auth.resetTokenExpiry).toISOString();

    // Update user with reset token
    await storage.updateUser(user.userId, {
      resetToken,
      resetTokenExpiry
    });

    // Send reset email
    return await EmailService.sendPasswordResetLink(email, resetToken, user.userId);
  }

  /**
   * Reset a user's password using a reset token
   * 
   * @param userId User ID of the account
   * @param token Reset token
   * @param newPassword New password
   * @returns Promise<boolean> Whether the password was reset
   */
  static async resetPassword(userId: string, token: string, newPassword: string): Promise<boolean> {
    // Get the user
    const user = await storage.getUserByUserId(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Check if token matches and is not expired
    if (!user.resetToken || user.resetToken !== token) {
      throw new Error('Invalid reset token');
    }

    if (!user.resetTokenExpiry || new Date(user.resetTokenExpiry) < new Date()) {
      throw new Error('Reset token expired');
    }

    // Update password and clear reset token
    await storage.updateUser(userId, {
      password: await this.hashPassword(newPassword),
      resetToken: null,
      resetTokenExpiry: null
    });

    return true;
  }

  /**
   * Find user account by userId for account recovery
   * 
   * @param userId User ID for recovery
   * @returns Promise<User | undefined> Found user or undefined
   */
  static async findAccountByUserId(userId: string): Promise<User | undefined> {
    return await storage.getUserByUserId(userId);
  }

  /**
   * Update a user's last login timestamp
   * 
   * @param userId User ID of the account
   * @returns Promise<User | undefined> Updated user
   */
  static async updateLastLogin(userId: string): Promise<User | undefined> {
    return await storage.updateUser(userId, {
      lastLogin: new Date().toISOString()
    });
  }
}