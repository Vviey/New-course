// A simple script to start the direct server
// that bypasses all Vite host configuration issues

import { exec } from 'child_process';

const directServerCommand = 'NODE_OPTIONS="--experimental-json-modules" node direct-server.js';

console.log('Starting direct server to bypass Vite host configuration issues...');

const process = exec(directServerCommand);

// Forward stdout
process.stdout.on('data', (data) => {
  console.log(data);
});

// Forward stderr
process.stderr.on('data', (data) => {
  console.error(data);
});

// Log exit
process.on('exit', (code) => {
  console.log(`Direct server exited with code ${code}`);
});

console.log('Direct server started, connect to port 3500 instead of 5000');
console.log('Visit /?frontend-only=true to see the simplified version');