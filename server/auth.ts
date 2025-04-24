import passport from "passport";
import { Strategy as GitHubStrategy, Profile } from "passport-github2";
import { Express } from "express";
import session from "express-session";
import { storage } from "./storage";
import { User as SelectUser } from "@shared/schema";
import { nanoid } from "nanoid";
import { VerifyCallback } from "passport-oauth2";

declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

export function setupAuth(app: Express) {
  const sessionSettings: session.SessionOptions = {
    secret: "my-temporary-secret", 
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000 
    }
  };

  app.set("trust proxy", 1);
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || "placeholder-client-id",
      clientSecret: process.env.GITHUB_TOKEN || "placeholder-client-secret",
      callbackURL: "/api/auth/github/callback"
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        let user = await storage.getUserByUsername(profile.username || "");

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
            password: nanoid(16),
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
    }
  ));

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

  app.get('/api/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

  app.get('/api/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/auth' }),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/api/user', (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    const { password, ...userWithoutPassword } = req.user as SelectUser;
    res.json(userWithoutPassword);
  });

  app.post('/api/auth/logout', (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.status(200).json({ message: 'Logged out successfully' });
    });
  });
}
