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

export function setupAuth(app: Express) {
  // Configure session
  const sessionSettings: session.SessionOptions = {
    secret: process.env.SESSION_SECRET || "bitcoin-education-journey-secret",
    resave: false,
    saveUninitialized: false,
    store: storage.sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    }
  };

  app.set("trust proxy", 1);
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  // Configure Passport local strategy
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        
        const isValidPassword = await comparePasswords(password, user.password);
        
        if (!isValidPassword) {
          return done(null, false, { message: "Incorrect password" });
        }
        
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }),
  );

  // Configure Passport serialization
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Register route
  app.post("/api/register", async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(req.body.username);
      
      if (existingUser) {
        return res.status(400).send("Username already exists");
      }
      
      // Check email if provided
      if (req.body.email) {
        const userWithEmail = await storage.getUserByEmail(req.body.email);
        
        if (userWithEmail) {
          return res.status(400).send("Email already in use");
        }
      }
      
      // Create user with hashed password
      const user = await storage.createUser({
        userId: uuidv4(),
        username: req.body.username,
        password: await hashPassword(req.body.password),
        email: req.body.email || null,
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

      // Login the newly created user
      req.login(user, (err) => {
        if (err) return next(err);
        
        // Return user without sensitive information
        const { password, ...safeUser } = user;
        res.status(201).json(safeUser);
      });
    } catch (error) {
      next(error);
    }
  });

  // Login route
  app.post("/api/login", (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", (err: Error, user: SelectUser, info: { message: string }) => {
      if (err) return next(err);
      
      if (!user) {
        return res.status(401).send(info?.message || "Authentication failed");
      }
      
      req.login(user, (err) => {
        if (err) return next(err);
        
        // Return user without sensitive information
        const { password, ...safeUser } = user;
        res.status(200).json(safeUser);
      });
    })(req, res, next);
  });

  // Logout route
  app.post("/api/logout", (req: Request, res: Response, next: NextFunction) => {
    req.logout((err) => {
      if (err) return next(err);
      req.session.destroy((err) => {
        if (err) return next(err);
        res.clearCookie('connect.sid');
        res.sendStatus(200);
      });
    });
  });

  // Get current user
  app.get("/api/user", (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Unauthorized");
    }
    
    // Return user without sensitive information
    const { password, ...safeUser } = req.user as SelectUser;
    res.json(safeUser);
  });

  // Update user profile
  app.patch("/api/user", async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).send("Unauthorized");
      }
      
      const user = req.user as SelectUser;
      const { username, email } = req.body;
      
      // Verify username uniqueness if changing
      if (username && username !== user.username) {
        const existingUser = await storage.getUserByUsername(username);
        
        if (existingUser) {
          return res.status(400).send("Username already exists");
        }
      }
      
      // Verify email uniqueness if changing
      if (email && email !== user.email) {
        const userWithEmail = await storage.getUserByEmail(email);
        
        if (userWithEmail) {
          return res.status(400).send("Email already in use");
        }
      }
      
      // Update user profile
      const updatedUser = await storage.updateUser(user.userId, {
        username: username || user.username,
        email: email || user.email
      });
      
      if (!updatedUser) {
        return res.status(500).send("Failed to update user profile");
      }
      
      // Return updated user without sensitive information
      const { password, ...safeUser } = updatedUser;
      res.status(200).json(safeUser);
    } catch (error) {
      next(error);
    }
  });

  // Update user progress
  app.patch("/api/user/progress", async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).send("Unauthorized");
      }
      
      const user = req.user as SelectUser;
      const progress = req.body;
      
      // Update user progress
      const updatedUser = await storage.updateUserProgress(user.userId, progress);
      
      if (!updatedUser) {
        return res.status(500).send("Failed to update user progress");
      }
      
      // Return updated user without sensitive information
      const { password, ...safeUser } = updatedUser;
      res.status(200).json(safeUser);
    } catch (error) {
      next(error);
    }
  });
}