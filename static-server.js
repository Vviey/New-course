// Simple static file server to bypass Vite host configuration issues
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve client files
app.use('/client', express.static(path.join(__dirname, 'client')));

// Serve placeholder index.html if real one doesn't exist
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    // Generate a placeholder HTML that redirects to the actual server
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Asha's Bitcoin Journey</title>
        <style>
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f5f5f5;
            color: #333;
          }
          .container {
            max-width: 600px;
            padding: 2rem;
            text-align: center;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #f59e0b;
            margin-bottom: 1rem;
          }
          p {
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }
          .button {
            display: inline-block;
            background-color: #f59e0b;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            transition: background-color 0.2s;
          }
          .button:hover {
            background-color: #d97706;
          }
          .loading {
            margin-top: 2rem;
            font-size: 0.9rem;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Asha's Bitcoin Journey</h1>
          <p>Welcome to the gamified Bitcoin education platform. Your journey through the realms of cryptocurrency knowledge begins here.</p>
          <a href="/api/health" class="button">Check Server Status</a>
          <div class="loading">
            <p>If the application doesn't load automatically, please try refreshing the page.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    res.send(html);
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Static server is running',
    timestamp: new Date().toISOString()
  });
});

// Catch-all route for other pages
app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static server running on http://0.0.0.0:${PORT}`);
});