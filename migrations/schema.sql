-- Create the users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  verification_code TEXT,
  verification_code_expiry TEXT,
  reset_token TEXT,
  reset_token_expiry TEXT,
  last_login TEXT,
  github_id TEXT,
  avatar_url TEXT,
  progress JSONB NOT NULL,
  rewards JSONB NOT NULL
);

-- Create the realms table if it doesn't exist
CREATE TABLE IF NOT EXISTS realms (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  "moduleNumber" INTEGER NOT NULL,
  "imageUrl" TEXT NOT NULL,
  is_locked BOOLEAN NOT NULL DEFAULT TRUE
);

-- Create the session table for connect-pg-simple
CREATE TABLE IF NOT EXISTS "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" jsonb NOT NULL,
  "expire" timestamp(6) NOT NULL,
  CONSTRAINT "session_pkey" PRIMARY KEY ("sid")
);
CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "session" ("expire");
