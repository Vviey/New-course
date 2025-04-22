import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "@shared/schema";
import { env } from 'node:process';

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });