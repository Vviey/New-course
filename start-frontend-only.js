/**
 * Script for running the existing application without a database
 * Note: This doesn't create any new pages or components
 */
import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const httpServer = createServer(app);

// Enable CORS for all routes
app.use(cors());

// Add JSON middleware to parse request bodies
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock user for authentication
const mockUser = {
  id: 1,
  userId: "mock-user-id",
  username: "demo_user",
  email: "demo@example.com",
  progress: {
    currentRealm: 1,
    completedRealms: [],
    chain: {
      progress: 0,
      lastUpdated: new Date().toISOString()
    }
  },
  rewards: {
    badges: [],
    tokens: 0
  }
};

// Auth API endpoints
app.post('/api/register', (req, res) => {
  res.status(201).json(mockUser);
});

app.post('/api/login', (req, res) => {
  res.status(200).json(mockUser);
});

app.post('/api/logout', (req, res) => {
  res.sendStatus(200);
});

app.get('/api/user', (req, res) => {
  res.json(mockUser);
});

// Mock realms API
app.get('/api/realms', (req, res) => {
  const realmsData = [
    {
      id: 1,
      name: "Realm of Origins",
      description: "Discover how money began and evolved from shells to bills in this foundational chapter.",
      moduleNumber: 1,
      imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-1.png",
      isLocked: false
    },
    {
      id: 2,
      name: "The Central Citadel",
      description: "Explore the towers of power where monetary decisions echo through the lands.",
      moduleNumber: 2,
      imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-2.png", 
      isLocked: true
    },
    {
      id: 3,
      name: "The Forest of Sparks",
      description: "Enter the mystical forest where the spark of Bitcoin was first ignited.",
      moduleNumber: 3,
      imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-3.png",
      isLocked: true
    },
    {
      id: 4,
      name: "The Mountain Forge",
      description: "Delve into the depths where miners create new blocks through proof of work.",
      moduleNumber: 4,
      imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-4.png",
      isLocked: true
    },
    {
      id: 5,
      name: "The Council of Forks",
      description: "Witness the debates that shape the path of digital currencies at the Council.",
      moduleNumber: 5,
      imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-5.png",
      isLocked: true
    },
    {
      id: 6,
      name: "The Ubuntu Village",
      description: "Discover how Bitcoin weaves into African traditions of community and shared prosperity.",
      moduleNumber: 6,
      imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-6.png",
      isLocked: true
    },
    {
      id: 7,
      name: "The Summit of Knowledge",
      description: "Complete your journey and demonstrate your mastery of Bitcoin concepts.",
      moduleNumber: 7,
      imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-7.png",
      isLocked: true
    }
  ];
  
  res.json(realmsData);
});

// Mock missions API
app.get('/api/realms/:realmId/missions', (req, res) => {
  const realmId = parseInt(req.params.realmId);
  const missionsData = [
    {
      id: 1,
      title: `Mission 1 for Realm ${realmId}`,
      description: "Introductory mission",
      realmId: realmId,
      order: 1,
      content: {
        type: "text",
        text: "This is the content for Mission 1"
      }
    },
    {
      id: 2,
      title: `Mission 2 for Realm ${realmId}`,
      description: "Intermediate mission",
      realmId: realmId,
      order: 2,
      content: {
        type: "quiz",
        questions: [
          {
            id: 1,
            text: "What is Bitcoin?",
            options: [
              { id: 1, text: "A digital currency" },
              { id: 2, text: "A social media platform" },
              { id: 3, text: "A type of computer" }
            ],
            correctOption: 1
          }
        ]
      }
    }
  ];
  
  res.json(missionsData);
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    // Create a fallback HTML if index.html doesn't exist
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Asha's Bitcoin Journey - Frontend Only Mode</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          line-height: 1.6;
        }
        .header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .logo {
          font-size: 2rem;
          font-weight: 700;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }
        .subtitle {
          color: #6b7280;
        }
        .content {
          background-color: #f9fafb;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .banner {
          background-color: #fef3c7;
          border-left: 4px solid #f59e0b;
          padding: 1rem;
          margin-bottom: 2rem;
        }
        .realms {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }
        .realm-card {
          background-color: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .realm-title {
          font-weight: 600;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">Asha's Bitcoin Journey</div>
        <div class="subtitle">A Gamified Bitcoin Education Platform</div>
      </div>
      
      <div class="content">
        <div class="banner">
          <strong>Frontend-only Mode</strong>
          <p>This application is running in frontend-only mode with mock data. No database is required.</p>
        </div>
        
        <h2>Available Realms</h2>
        <div class="realms">
          <div class="realm-card">
            <div class="realm-title">Realm of Origins</div>
            <p>Discover how money began and evolved from shells to bills.</p>
          </div>
          
          <div class="realm-card">
            <div class="realm-title">The Central Citadel</div>
            <p>Explore the towers of power where monetary decisions echo.</p>
          </div>
          
          <div class="realm-card">
            <div class="realm-title">The Forest of Sparks</div>
            <p>Enter the mystical forest where Bitcoin was first ignited.</p>
          </div>
          
          <!-- More realm cards would be added here -->
        </div>
      </div>
    </body>
    </html>
    `;
    
    res.send(html);
  }
});

// Start server
httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend-only version running on port ${PORT}`);
  console.log('Frontend-only version starting with mock data');
  console.log('No database required for this mode');
});