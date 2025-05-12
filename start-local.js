/**
 * Combined local development startup script
 * 
 * This script launches both the frontend and backend development servers
 * for local development without any Replit dependencies.
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { createInterface } from 'readline';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.log('Creating default .env file...');
  fs.writeFileSync(envPath, `# Local development environment
NODE_ENV=development

# PostgreSQL database connection details
# Update these with your local database information
# DATABASE_URL=postgresql://username:password@localhost:5432/database_name
`);
}

// Create directory for public assets if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Make sure the local HTML file exists for the client
const localIndexPath = path.join(__dirname, 'client', 'index.local.html');
if (!fs.existsSync(localIndexPath)) {
  console.log('Creating local index.html...');
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asha's Journey - Bitcoin Education</title>
  <meta name="description" content="Learn about Bitcoin through an interactive, narrative-driven educational experience with African cultural influences.">
  <link rel="icon" href="/favicon.ico">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
  fs.writeFileSync(localIndexPath, htmlContent);
}

// Update Vite configuration for local development
const localViteConfigPath = path.join(__dirname, 'client', 'vite.local.config.js');
if (!fs.existsSync(localViteConfigPath)) {
  console.log('Creating local Vite configuration...');
  const viteConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(projectRoot, "shared"),
      "@assets": path.resolve(projectRoot, "attached_assets"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: path.resolve(projectRoot, "dist/public"),
    emptyOutDir: true,
  }
});`;
  fs.writeFileSync(localViteConfigPath, viteConfig);
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
    NODE_ENV: 'development'
  }
});

// Start the frontend server (with a delay to ensure backend starts first)
setTimeout(() => {
  const frontendProcess = spawn('npx', ['vite', '--config', 'client/vite.local.config.js'], {
    stdio: 'pipe',
    shell: true,
    cwd: __dirname
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

  // Clean up processes on exit
  process.on('SIGINT', () => {
    console.log('\nShutting down development servers...');
    frontendProcess.kill();
    backendProcess.kill();
    process.exit(0);
  });
}, 2000);

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
  process.exit(code || 0);
});

// Create interface for user input
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
\x1b[33m[Info]\x1b[0m Backend server will be available at: http://localhost:5000
\x1b[33m[Info]\x1b[0m Frontend dev server will be available at: http://localhost:5173
\x1b[33m[Info]\x1b[0m Press Ctrl+C to stop both servers
`);