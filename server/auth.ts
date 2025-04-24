import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Express } from "express";
import session from "express-session";
import { storage } from "./storage";
import { User as SelectUser } from "@shared/schema";
import { nanoid } from "nanoid";

declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

export function setupAuth(app: Express) {
  const sessionSettings: session.SessionOptions = {
    secret: process.env.GITHUB_TOKEN!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    }
  };

  app.set("trust proxy", 1);
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  // GitHub strategy configuration
  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID || "placeholder-client-id",
    clientSecret: process.env.GITHUB_TOKEN || "placeholder-client-secret",
    callbackURL: "/api/auth/github/callback"
  },
  async (accessToken: any, refreshToken: any, profile: any, done: any) => {
    try {
      // Check if user exists
      let user = await storage.getUserByUsername(profile.username || "");
      
      // If user doesn't exist, create new user
      if (!user) {
        const initialProgress = {
          currentRealm: 1,
          completedRealms: [],
          chain: { progress: 0, lastUpdated: new Date().toISOString() }
        };
        
        const initialRewards = {
          badges: [],
          tokens: 0
        };
        
        user = await storage.createUser({
          username: profile.username || `github-${profile.id}`,
          email: profile.emails?.[0]?.value,
          password: nanoid(16), // Generate a random password for OAuth users
          githubId: profile.id,
          avatarUrl: profile.photos?.[0]?.value,
          progress: initialProgress,
          rewards: initialRewards
        });
      }
      
      return done(null, user);
    } catch (error) {
      return done(error as Error);
    }
  }));

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

  // GitHub authentication routes
  app.get('/api/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }));

  app.get('/api/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/auth' }),
    (req, res) => {
      // Successful authentication, redirect to home page
      res.redirect('/');
    });

  // Get the current user if authenticated
  app.get('/api/user', (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    
    // Return user without password
    const { password, ...userWithoutPassword } = req.user as SelectUser;
    res.json(userWithoutPassword);
  });

  // Logout route
  app.post('/api/auth/logout', (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.status(200).json({ message: 'Logged out successfully' });
    });
  });
}