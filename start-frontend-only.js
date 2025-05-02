import { exec } from 'child_process';
import http from 'http';

// Configuration
const PORT = process.env.PORT || 3000;
const VITE_DEV_SERVER_PORT = 5173;

// Check if a port is in use
function isPortInUse(port) {
  return new Promise((resolve) => {
    const server = http.createServer();
    
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
    
    server.once('listening', () => {
      server.close();
      resolve(false);
    });
    
    server.listen(port);
  });
}

// Start the process
async function startFrontendOnly() {
  console.log('Starting frontend-only mode...');
  
  // Check if the port is available
  const portInUse = await isPortInUse(PORT);
  if (portInUse) {
    console.error(`Error: Port ${PORT} is already in use. Please close the process using that port.`);
    process.exit(1);
  }
  
  // Start Vite in development mode with our frontend-only-main.tsx entry
  const viteProcess = exec(`npx vite --port ${VITE_DEV_SERVER_PORT} --config vite.frontend.config.ts`);
  
  viteProcess.stdout.on('data', (data) => {
    console.log(`[Vite] ${data}`);
  });
  
  viteProcess.stderr.on('data', (data) => {
    console.error(`[Vite Error] ${data}`);
  });
  
  // Listen for application termination
  process.on('SIGINT', () => {
    console.log('Stopping frontend-only mode...');
    viteProcess.kill();
    process.exit();
  });
  
  // Log information for the user
  console.log('\n-----------------------------------');
  console.log(`🚀 Frontend-only mode is running!`);
  console.log(`📱 Open http://localhost:${VITE_DEV_SERVER_PORT} in your browser`);
  console.log('-----------------------------------\n');
  console.log('Press Ctrl+C to stop the server.');
}

startFrontendOnly().catch(err => {
  console.error('Error starting frontend-only mode:', err);
  process.exit(1);
});