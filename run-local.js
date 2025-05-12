/**
 * Local Development Runner
 * 
 * This script runs the application locally without Replit dependencies
 * by modifying environment variables rather than changing files.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Create .env file if it doesn't exist
if (!fs.existsSync('.env')) {
  console.log('Creating default .env file from .env.example...');
  if (fs.existsSync('.env.example')) {
    fs.copyFileSync('.env.example', '.env');
  } else {
    console.log('No .env.example found, creating minimal .env file...');
    fs.writeFileSync('.env', `NODE_ENV=development
LOCAL_DEV=true
SKIP_REPLIT=true
VITE_ALLOWED_HOSTS=all
VITE_APP_ENV=development
SESSION_SECRET=local-development-secret`);
  }
}

console.log(`
=====================================================
  STARTING LOCAL DEVELOPMENT ENVIRONMENT
=====================================================
`);

// Start the backend server
const backendProcess = spawn('npx', ['tsx', 'server/index.ts'], {
  stdio: 'pipe',
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: 'development',
    LOCAL_DEV: 'true',
    SKIP_REPLIT: 'true'
  }
});

// Start the frontend server
const frontendProcess = spawn('npx', ['vite', '--host'], {
  stdio: 'pipe',
  shell: true,
  cwd: path.join(process.cwd(), 'client'),
  env: {
    ...process.env,
    NODE_ENV: 'development',
    LOCAL_DEV: 'true',
    SKIP_REPLIT: 'true'
  }
});

// Handle frontend process output
frontendProcess.stdout.on('data', (data) => {
  console.log(`\x1b[36m[Frontend]\x1b[0m ${data.toString().trim()}`);
});

frontendProcess.stderr.on('data', (data) => {
  console.error(`\x1b[31m[Frontend ERROR]\x1b[0m ${data.toString().trim()}`);
});

frontendProcess.on('error', (error) => {
  console.error('\x1b[31m[Frontend ERROR]\x1b[0m Failed to start:', error);
});

frontendProcess.on('exit', (code) => {
  console.log(`\x1b[31m[Frontend]\x1b[0m Process exited with code ${code}`);
  backendProcess.kill();
  process.exit(code || 0);
});

// Handle backend process output
backendProcess.stdout.on('data', (data) => {
  console.log(`\x1b[32m[Backend]\x1b[0m ${data.toString().trim()}`);
});

backendProcess.stderr.on('data', (data) => {
  console.error(`\x1b[31m[Backend ERROR]\x1b[0m ${data.toString().trim()}`);
});

backendProcess.on('error', (error) => {
  console.error('\x1b[31m[Backend ERROR]\x1b[0m Failed to start:', error);
});

backendProcess.on('exit', (code) => {
  console.log(`\x1b[31m[Backend]\x1b[0m Process exited with code ${code}`);
  frontendProcess.kill();
  process.exit(code || 0);
});

// Clean up processes on exit
process.on('SIGINT', () => {
  console.log('\nShutting down development servers...');
  frontendProcess.kill();
  backendProcess.kill();
  process.exit(0);
});

console.log(`
\x1b[33m[Info]\x1b[0m Backend server will be available at: http://localhost:5000
\x1b[33m[Info]\x1b[0m Frontend dev server will be available at: http://localhost:5173
\x1b[33m[Info]\x1b[0m Press Ctrl+C to stop both servers
`);