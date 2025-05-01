import passport from "passport";
<<<<<<< HEAD
import { Strategy as GitHubStrategy, Profile } from "passport-github2";
import { Express } from "express";
import session from "express-session";
import { storage } from "./storage";
import { User as SelectUser } from "@shared/schema";
import { nanoid } from "nanoid";
import { VerifyCallback } from "passport-oauth2";
=======
import { Strategy as LocalStrategy } from "passport-local";
import { Express } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { User as SelectUser } from "@shared/schema";
import connectPg from "connect-pg-simple";
import { pool } from "./db";
>>>>>>> 0652a0db822258f9bfa7da88533be0a2088f509a

declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

<<<<<<< HEAD
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
=======
const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function comparePasswords(supplied: string, stored: string) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

export function setupAuth(app: Express) {
  const PostgresSessionStore = connectPg(session);
  
  const sessionSettings: session.SessionOptions = {
    secret: process.env.SESSION_SECRET || 'bitcoin-quest-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new PostgresSessionStore({ 
      pool, 
      createTableIfMissing: true 
    }),
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    }
  };

>>>>>>> 0652a0db822258f9bfa7da88533be0a2088f509a
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

<<<<<<< HEAD
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

=======
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        if (!user || !(await comparePasswords(password, user.password))) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      } catch (err) {
        return done(err);
      }
    }),
  );

  passport.serializeUser((user, done) => done(null, user.id));
>>>>>>> 0652a0db822258f9bfa7da88533be0a2088f509a
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
<<<<<<< HEAD
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
=======
    } catch (err) {
      done(err);
    }
  });

  app.post("/api/register", async (req, res, next) => {
    try {
      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const user = await storage.createUser({
        ...req.body,
        password: await hashPassword(req.body.password),
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

      req.login(user, (err) => {
        if (err) return next(err);
        return res.status(201).json({
          id: user.id,
          userId: user.userId,
          username: user.username,
          email: user.email,
          progress: user.progress,
          rewards: user.rewards
        });
      });
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return next(err);
      if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      req.login(user, (err) => {
        if (err) return next(err);
        return res.json({
          id: user.id,
          userId: user.userId,
          username: user.username,
          email: user.email,
          progress: user.progress,
          rewards: user.rewards
        });
      });
    })(req, res, next);
  });

  app.post("/api/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.status(200).json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/user", (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const user = req.user as SelectUser;
    res.json({
      id: user.id,
      userId: user.userId,
      username: user.username,
      email: user.email,
      progress: user.progress,
      rewards: user.rewards
    });
  });
}
>>>>>>> 0652a0db822258f9bfa7da88533be0a2088f509a
