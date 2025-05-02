// A simple Express server that directly serves the React application
// This avoids the Vite host configuration issues
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3500;

// Create a simple page to display when the app is loaded
const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asha's Bitcoin Journey</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #f59e0b;
      --primary-dark: #d97706;
      --background: #f8f8f8;
      --text: #333333;
      --border: #e5e5e5;
    }
    
    body, html {
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--background);
      color: var(--text);
      line-height: 1.6;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    h1 {
      font-family: 'Lora', serif;
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .main-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    
    .card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      padding: 2rem;
      width: 100%;
      max-width: 800px;
    }
    
    .card h2 {
      font-family: 'Lora', serif;
      color: var(--primary);
      margin-top: 0;
    }
    
    .button {
      display: inline-block;
      background-color: var(--primary);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.2s;
      cursor: pointer;
      border: none;
    }
    
    .button:hover {
      background-color: var(--primary-dark);
    }
    
    .realms {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      width: 100%;
      max-width: 800px;
    }
    
    .realm-card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
    }
    
    .realm-card h3 {
      font-family: 'Lora', serif;
      color: var(--primary);
      margin-top: 0;
    }
    
    .realm-card p {
      flex-grow: 1;
      margin-bottom: 1rem;
    }
    
    footer {
      text-align: center;
      margin-top: 4rem;
      padding: 2rem;
      border-top: 1px solid var(--border);
      color: #666;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .realms {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Asha's Journey Through the Realms of Money</h1>
      <p class="subtitle">A gamified Bitcoin education platform that transforms complex cryptocurrency learning into an engaging narrative experience.</p>
    </header>
    
    <div class="main-content">
      <div class="card">
        <h2>Development Mode Active</h2>
        <p>The application is currently running in development mode. The full interactive experience with all seven realms and educational content is being developed.</p>
        <p>Here's what we're working on:</p>
        <ul>
          <li>Interactive missions across all seven realms</li>
          <li>Narrative-driven educational content</li>
          <li>Badge and achievement system</li>
          <li>African-inspired visual elements and storytelling</li>
        </ul>
        <p>The current build status:</p>
        <div id="status">Loading application status...</div>
        <div style="margin-top: 1rem;">
          <button id="checkStatus" class="button">Check Application Status</button>
        </div>
      </div>
      
      <div class="realms">
        <div class="realm-card">
          <h3>Realm of Origins</h3>
          <p>Discover the foundations of money and exchange systems.</p>
        </div>
        
        <div class="realm-card">
          <h3>The Central Citadel</h3>
          <p>Learn about centralized financial governance.</p>
        </div>
        
        <div class="realm-card">
          <h3>The Forest of Sparks</h3>
          <p>Explore Bitcoin's birth and early development.</p>
        </div>
        
        <div class="realm-card">
          <h3>The Mountain Forge</h3>
          <p>Understand Bitcoin mining and consensus.</p>
        </div>
        
        <div class="realm-card">
          <h3>The Council of Forks</h3>
          <p>Dive into Bitcoin governance and development.</p>
        </div>
        
        <div class="realm-card">
          <h3>The Ubuntu Village</h3>
          <p>See practical applications of Bitcoin in Africa.</p>
        </div>
        
        <div class="realm-card">
          <h3>The Summit of Knowledge</h3>
          <p>Comprehensive assessment of your Bitcoin journey.</p>
        </div>
      </div>
    </div>
    
    <footer>
      <p>© 2025 Asha's Bitcoin Journey. All rights reserved.</p>
    </footer>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const statusDiv = document.getElementById('status');
      const checkButton = document.getElementById('checkStatus');
      
      function updateStatus(message, isError = false) {
        statusDiv.innerHTML = message;
        statusDiv.style.color = isError ? '#e11d48' : '#16a34a';
      }
      
      // Initial status check
      fetch('/api/health')
        .then(response => response.json())
        .then(data => {
          updateStatus('✓ Server is running properly. The application is in development mode.');
        })
        .catch(error => {
          updateStatus('✗ There was an error checking the application status. API endpoint might be unavailable.', true);
        });
      
      // Check button click handler
      checkButton.addEventListener('click', () => {
        updateStatus('Checking application status...');
        
        fetch('/api/health')
          .then(response => response.json())
          .then(data => {
            updateStatus('✓ Server is running properly. The application is in development mode. Last checked: ' + new Date().toLocaleTimeString());
          })
          .catch(error => {
            updateStatus('✗ There was an error checking the application status. API endpoint might be unavailable.', true);
          });
      });
    });
  </script>
</body>
</html>
`;

// Serve static files if they exist
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for health checks
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Application server is running',
    mode: 'development',
    timestamp: new Date().toISOString()
  });
});

// Serve the index.html for all routes
app.get('*', (req, res) => {
  res.send(indexHtml);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Direct application server running on http://0.0.0.0:${PORT}`);
  console.log('This is a simplified version that bypasses Vite compilation issues');
});