import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Fix for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a simple Express server to serve the static application
// This bypasses the Vite dev server host restriction issues
export function setupStaticServer(app: express.Express) {
  console.log('Setting up static server bypass for development...');
  
  // Directory where your client source code is located
  const clientSrcDir = path.resolve(__dirname, '..', 'client', 'src');
  const clientDir = path.resolve(__dirname, '..', 'client');
  const publicDir = path.resolve(__dirname, '..', 'public');
  
  // Serve the authentication mode by default for the root path
  app.get('/', (req, res) => {
    const authHtmlPath = path.join(clientDir, 'public', 'auth.html');
    if (fs.existsSync(authHtmlPath)) {
      console.log('[DEBUG] Serving authentication-enabled mode HTML for root path');
      res.sendFile(authHtmlPath);
    } else {
      console.log('[ERROR] Authentication mode HTML not found at', authHtmlPath);
      res.status(404).send('Authentication mode HTML not found');
    }
  });
  
  // Serve the development mode HTML that bypasses auth and unlocks all realms
  app.get('/dev-mode', (req, res) => {
    const devHtmlPath = path.join(clientDir, 'public', 'dev.html');
    if (fs.existsSync(devHtmlPath)) {
      console.log('[DEBUG] Serving development mode HTML');
      res.sendFile(devHtmlPath);
    } else {
      console.log('[ERROR] Development mode HTML not found at', devHtmlPath);
      res.status(404).send('Development mode HTML not found');
    }
  });
  
  // Serve the auth-enabled mode HTML that requires real authentication
  app.get('/auth-mode', (req, res) => {
    const authHtmlPath = path.join(clientDir, 'public', 'auth.html');
    if (fs.existsSync(authHtmlPath)) {
      console.log('[DEBUG] Serving authentication-enabled mode HTML');
      res.sendFile(authHtmlPath);
    } else {
      console.log('[ERROR] Authentication mode HTML not found at', authHtmlPath);
      res.status(404).send('Authentication mode HTML not found');
    }
  });
  
  // Special route to get realm information directly
  app.get('/api/dev/realms', (req, res) => {
    try {
      // Import the realm data directly
      import('../client/src/lib/realm-data.js').then(module => {
        const { RealmData } = module;
        // Return all realms with isLocked set to false
        const unlockedRealms = RealmData.map((realm: any) => ({
          ...realm,
          isLocked: false
        }));
        res.json(unlockedRealms);
      }).catch(error => {
        console.error('Error importing realm data:', error);
        res.status(500).json({ error: 'Failed to load realm data' });
      });
    } catch (error) {
      console.error('Error serving realm data:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Serve static files from public directory after all other routes
  app.use(express.static(publicDir));
  
  console.log('Static server setup complete - access via / (auth mode), /dev-mode, or /auth-mode');
  return app;
}