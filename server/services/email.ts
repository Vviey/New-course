import sgMail from '@sendgrid/mail';
import { config } from '../config';

// Initialize SendGrid with API key
if (config.sendgrid.apiKey) {
  sgMail.setApiKey(config.sendgrid.apiKey);
}

/**
 * Email service for sending verification emails, password resets, etc.
 */
export class EmailService {
  /**
   * Send an email verification code
   * 
   * @param to Recipient email address
   * @param code Verification code
   * @returns Promise<boolean> Success status
   */
  static async sendVerificationCode(to: string, code: string): Promise<boolean> {
    if (!config.sendgrid.apiKey) {
      console.warn('SendGrid API key not configured. Email not sent.');
      // In development, just log the code
      if (config.isDevelopment) {
        console.log(`[DEV MODE] Verification code for ${to}: ${code}`);
        return true;
      }
      return false;
    }

    try {
      await sgMail.send({
        to,
        from: config.sendgrid.fromEmail,
        subject: 'Verify your Bitcoin Quest account',
        text: `Your verification code is: ${code}. It will expire in 30 minutes.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f7931a;">Bitcoin Quest Account Verification</h2>
            <p>Thank you for joining Bitcoin Quest! Please use the verification code below to verify your account:</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0;">
              <h3 style="font-size: 24px; letter-spacing: 5px; margin: 0;">${code}</h3>
            </div>
            <p>This code will expire in 30 minutes.</p>
            <p>If you didn't create an account with Bitcoin Quest, please ignore this email.</p>
          </div>
        `,
      });
      return true;
    } catch (error) {
      console.error('Error sending verification email:', error);
      return false;
    }
  }

  /**
   * Send a password reset link
   * 
   * @param to Recipient email address
   * @param token Reset token
   * @param userId User ID for the reset link
   * @returns Promise<boolean> Success status
   */
  static async sendPasswordResetLink(to: string, token: string, userId: string): Promise<boolean> {
    if (!config.sendgrid.apiKey) {
      console.warn('SendGrid API key not configured. Email not sent.');
      // In development, just log the token
      if (config.isDevelopment) {
        console.log(`[DEV MODE] Password reset token for ${to}: ${token}`);
        return true;
      }
      return false;
    }

    const resetUrl = `${config.appUrl}/reset-password?token=${token}&userId=${userId}`;

    try {
      await sgMail.send({
        to,
        from: config.sendgrid.fromEmail,
        subject: 'Reset your Bitcoin Quest password',
        text: `Click the following link to reset your password: ${resetUrl}. This link will expire in 1 hour.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f7931a;">Bitcoin Quest Password Reset</h2>
            <p>We received a request to reset your password. Click the button below to reset it:</p>
            <div style="text-align: center; margin: 25px 0;">
              <a href="${resetUrl}" style="background-color: #f7931a; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
            </div>
            <p>If you didn't request a password reset, you can safely ignore this email.</p>
            <p>This link will expire in 1 hour.</p>
          </div>
        `,
      });
      return true;
    } catch (error) {
      console.error('Error sending password reset email:', error);
      return false;
    }
  }

  /**
   * Send a welcome email after account verification
   * 
   * @param to Recipient email address
   * @param username User's username
   * @returns Promise<boolean> Success status
   */
  static async sendWelcomeEmail(to: string, username: string): Promise<boolean> {
    if (!config.sendgrid.apiKey) {
      console.warn('SendGrid API key not configured. Email not sent.');
      return false;
    }

    try {
      await sgMail.send({
        to,
        from: config.sendgrid.fromEmail,
        subject: 'Welcome to Bitcoin Quest!',
        text: `Welcome to Bitcoin Quest, ${username}! Your account is now verified and you're ready to start your journey through the Realms of Money.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f7931a;">Welcome to Bitcoin Quest, ${username}!</h2>
            <p>Your account is now verified and you're ready to start your journey through the Realms of Money.</p>
            <div style="text-align: center; margin: 25px 0;">
              <a href="${config.appUrl}" style="background-color: #f7931a; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Start Your Adventure</a>
            </div>
            <p>Explore the origins of money, understand the central systems, learn about Bitcoin, and much more in this interactive adventure.</p>
            <p>Enjoy your journey!</p>
          </div>
        `,
      });
      return true;
    } catch (error) {
      console.error('Error sending welcome email:', error);
      return false;
    }
  }
}