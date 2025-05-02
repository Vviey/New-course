import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Log environment variables for debugging without revealing actual values
console.log('Available environment variables:', {
  PGUSER: process.env.PGUSER ? 'Set' : 'Not set',
  PGDATABASE: process.env.PGDATABASE ? 'Set' : 'Not set',
  PGPASSWORD: process.env.PGPASSWORD ? 'Set' : 'Not set',
  PGHOST: process.env.PGHOST ? 'Set' : 'Not set',
  PGPORT: process.env.PGPORT ? 'Set' : 'Not set',
  DATABASE_URL: process.env.DATABASE_URL ? 'Set' : 'Not set',
});

// Check if running in Replit (DATABASE_URL should be provided)
const isReplit = process.env.REPL_ID || process.env.REPL_SLUG;

// Generate a DATABASE_URL from individual parts if available and DATABASE_URL is missing
if (!process.env.DATABASE_URL && 
    process.env.PGUSER && 
    process.env.PGDATABASE && 
    process.env.PGPASSWORD && 
    process.env.PGHOST && 
    process.env.PGPORT) {
  process.env.DATABASE_URL = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;
  console.log('DATABASE_URL generated from environment variables');
}

// Create dummy implementations for local development without a database
class DummyPool {
  query() { return Promise.resolve({ rows: [] }); }
  connect() { return Promise.resolve(this); }
  release() {}
  end() { return Promise.resolve(); }
}

const dummyDb = {
  select: () => ({ from: () => ({ where: () => Promise.resolve([]) }) }),
  insert: () => ({ values: () => ({ returning: () => Promise.resolve([]) }) }),
  update: () => ({ set: () => ({ where: () => ({ returning: () => Promise.resolve([]) }) }) }),
  delete: () => ({ where: () => ({ returning: () => Promise.resolve([]) }) }),
};

// Export actual or dummy implementations based on DATABASE_URL availability
let pool;
let db;

if (!process.env.DATABASE_URL) {
  if (isReplit) {
    throw new Error(
      "DATABASE_URL must be set. Did you forget to provision a database?",
    );
  } else {
    // Fall back to in-memory storage for local development or testing
    console.warn('DATABASE_URL not set, using in-memory storage for development purposes');
    pool = new DummyPool();
    db = dummyDb;
  }
} else {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
}

export { pool, db };