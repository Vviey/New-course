import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Express, Request, Response, NextFunction } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { User as SelectUser } from "@shared/schema";
import { v4 as uuidv4 } from 'uuid';

declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

const scryptAsync = promisify(scrypt);

// Hash a password with a random salt
async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

// Compare a supplied password with a stored hashed password
async function comparePasswords(supplied: string, stored: string): Promise<boolean> {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

// Create a development user with all realms unlocked
function createDevUser(username = "demouser", email = "demo@example.com"): SelectUser {
  return {
    id: 1,
    userId: "demo-user-123",
    username,
    password: "hashed.password",
    email,
    emailVerified: false,
    verificationCode: null,
    verificationCodeExpiry: null,
    resetToken: null,
    resetTokenExpiry: null,
    lastLogin: new Date(),
    progress: {
      currentRealm: 1,
      completedRealms: [],
      unlockedRealms: [1, 2, 3, 4, 5, 6, 7],
      missionsCompleted: [],
      chain: {
        progress: 0,
        lastUpdated: new Date().toISOString()
      }
    },
    rewards: {
      badges: [],
      tokens: 0
    }
  } as SelectUser;
}

export function setupAuth(app: Express) {
  console.log("Setting up frontend-only authentication with auto-unlocked realms");
  
  // Simple session setup for frontend-only mode
  const sessionSettings: session.SessionOptions = {
    secret: "frontend-only-secret",
    resave: false,
    saveUninitialized: false,
    store: storage.sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      httpOnly: true,
      sameSite: 'lax',
      secure: false
    }
  };

  app.set("trust proxy", 1);
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  // Simple pass-through authentication for frontend-only mode
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      // Create a development user with all realms unlocked
      return done(null, createDevUser(username));
    }),
  );

  // Simple serialization for frontend-only mode
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id: number, done) => {
    // Always return a development user with all realms unlocked
    done(null, createDevUser());
  });

  // Simplified register route for frontend-only mode
  app.post("/api/register", (req: Request, res: Response) => {
    // Return a development user with all realms unlocked
    res.status(201).json(createDevUser(req.body.username, req.body.email));
  });

  // Simplified login route for frontend-only mode
  app.post("/api/login", (req: Request, res: Response) => {
    // Return a development user with all realms unlocked
    res.status(200).json(createDevUser(req.body.username, req.body.email));
  });

  // Simplified logout route for frontend-only mode
  app.post("/api/logout", (req: Request, res: Response) => {
    res.status(200).json({ message: "Logged out successfully" });
  });

  // Simplified get current user route for frontend-only mode
  app.get("/api/user", (req: Request, res: Response) => {
    // Return a development user with all realms unlocked
    res.json(createDevUser());
  });

  // Simplified update user profile route for frontend-only mode
  app.patch("/api/user", (req: Request, res: Response) => {
    // Return updated development user with all realms unlocked
    res.status(200).json(createDevUser(req.body.username, req.body.email));
  });

  // Simplified update user progress route for frontend-only mode
  app.patch("/api/user/progress", (req: Request, res: Response) => {
    // Create progress object by merging default with request body
    const progress = {
      currentRealm: req.body.currentRealm || 1,
      completedRealms: req.body.completedRealms || [],
      unlockedRealms: [1, 2, 3, 4, 5, 6, 7], // Always unlock all realms
      missionsCompleted: req.body.missionsCompleted || [],
      chain: {
        progress: req.body.chain?.progress || 0,
        lastUpdated: new Date().toISOString()
      }
    };
    
    // Return updated development user with all realms unlocked
    const mockUser = {
      id: 1,
      userId: "demo-user-123",
      username: "demouser",
      password: "hashed.password",
      email: "demo@example.com",
      emailVerified: false,
      verificationCode: null,
      verificationCodeExpiry: null,
      resetToken: null,
      resetTokenExpiry: null,
      lastLogin: new Date(),
      progress,
      rewards: {
        badges: [],
        tokens: 0
      }
    } as SelectUser;
    
    res.status(200).json(mockUser);
  });
}