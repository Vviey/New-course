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
  totalCount = 0;
  idleCount = 0;
  waitingCount = 0;
  on() { return this; }
  query() { return Promise.resolve({ rows: [] }); }
  connect() { return Promise.resolve(this); }
  release() {}
  end() { return Promise.resolve(); }
  acquire() { return Promise.resolve(this); }
  // Adding missing methods from Pool interface
  removeAllListeners() { return this; }
  listeners() { return []; }
  addListener() { return this; }
  off() { return this; }
  once() { return this; }
  removeListener() { return this; }
  emit() { return true; }
  eventNames() { return []; }
  listenerCount() { return 0; }
  getMaxListeners() { return 0; }
  setMaxListeners() { return this; }
  prependListener() { return this; }
  prependOnceListener() { return this; }
  rawListeners() { return []; }
}

const dummyDb = {
  select: () => ({ 
    from: (table: any) => ({ 
      where: (condition: any) => Promise.resolve([]) 
    })
  }),
  insert: (table: any) => ({ 
    values: (data: any) => ({ 
      returning: () => Promise.resolve([]) 
    })
  }),
  update: (table: any) => ({ 
    set: (data: any) => ({ 
      where: (condition: any) => ({ 
        returning: () => Promise.resolve([]) 
      })
    })
  }),
  delete: (table: any) => ({ 
    where: (condition: any) => ({ 
      returning: () => Promise.resolve([]) 
    })
  }),
};

// Always use dummy implementations for frontend-only mode
console.log('USING IN-MEMORY STORAGE FOR FRONTEND-ONLY MODE');
const pool = new DummyPool();
const db = dummyDb;

export { pool, db };