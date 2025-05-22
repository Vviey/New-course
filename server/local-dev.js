/**
 * Server-side local development script
 * This runs the backend API server for local development
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Check for a .env file and create one if it doesn't exist
const envPath = path.join(projectRoot, '.env');
if (!fs.existsSync(envPath)) {
  console.log('Creating a default .env file...');
  const defaultEnv = `# Local development environment variables
NODE_ENV=development
# Set up your local PostgreSQL connection details below
# DATABASE_URL=postgresql://username:password@localhost:5432/database_name
`;
  fs.writeFileSync(envPath, defaultEnv);
  console.log('.env file created with default settings.');
}

console.log('Starting backend API server...');

// Run the server with environment variables loaded from .env
const serverProcess = spawn('npx', [
  'tsx',
  'index.ts'
], {
  stdio: 'inherit',
  cwd: __dirname,
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: 'development'
  }
});

serverProcess.on('error', (error) => {
  console.error('Failed to start API server:', error);
  process.exit(1);
});

serverProcess.on('exit', (code) => {
  console.log(`API server exited with code ${code}`);
  process.exit(code);
});

// Handle termination signals
['SIGINT', 'SIGTERM'].forEach(signal => {
  process.on(signal, () => {
    console.log(`\nReceived ${signal}, shutting down...`);
    serverProcess.kill();
    process.exit(0);
  });
});