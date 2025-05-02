/**
 * Script for running the existing application without a database
 * Note: This doesn't create any new pages or components
 */
import { exec } from 'child_process';

// Simply run the regular npm dev command with environment variables that indicate no database
// Use the local Vite config to handle host issues
const command = 'NODE_ENV=development VITE_CONFIG_PATH=./client/vite.config.local.js npm run dev';

console.log('Starting application in frontend-only mode (no database required)...');
console.log('This will use the existing application code with MemStorage');

// Execute the npm run dev command
const process = exec(command);

// Forward all output to the console
process.stdout.on('data', (data) => {
  console.log(data);
});

process.stderr.on('data', (data) => {
  console.error(data);
});

process.on('exit', (code) => {
  console.log(`Process exited with code ${code}`);
});