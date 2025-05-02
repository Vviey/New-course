import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Mock API endpoints for frontend-only mode
app.get('/api/realms', (req, res) => {
  // Mock realms data
  const realms = [
    {
      id: 1,
      name: "Realm of Origins",
      description: "Foundations of Money",
      status: "unlocked",
      progress: 0,
      image: "/assets/realms/realm1.jpg"
    },
    {
      id: 2,
      name: "The Central Citadel",
      description: "Governance",
      status: "unlocked",
      progress: 0,
      image: "/assets/realms/realm2.jpg"
    },
    {
      id: 3,
      name: "The Forest of Sparks",
      description: "Bitcoin's Birth",
      status: "unlocked",
      progress: 0,
      image: "/assets/realms/realm3.jpg"
    },
    {
      id: 4,
      name: "The Mountain Forge",
      description: "Mining and Consensus",
      status: "unlocked",
      progress: 0,
      image: "/assets/realms/realm4.jpg"
    },
    {
      id: 5,
      name: "The Council of Forks",
      description: "Bitcoin Governance and Forks",
      status: "unlocked",
      progress: 0,
      image: "/assets/realms/realm5.jpg"
    },
    {
      id: 6,
      name: "The Ubuntu Village",
      description: "Bitcoin in Africa",
      status: "unlocked",
      progress: 0,
      image: "/assets/realms/realm6.jpg"
    },
    {
      id: 7,
      name: "The Summit of Knowledge",
      description: "Comprehensive Bitcoin Mastery",
      status: "unlocked",
      progress: 0,
      image: "/assets/realms/realm7.jpg"
    }
  ];
  
  res.json(realms);
});

// Mock missions endpoint
app.get('/api/realm/:realmId/missions', (req, res) => {
  const realmId = parseInt(req.params.realmId);
  
  // Mock missions data based on realm
  const missions = Array(5).fill(0).map((_, index) => ({
    id: index + 1,
    realmId,
    title: `Mission ${index + 1}`,
    description: `This is a description for mission ${index + 1} in realm ${realmId}`,
    status: "unlocked",
    progress: 0,
    type: index % 2 === 0 ? 'interactive' : 'quiz',
    xp: 100,
    timeEstimate: '10 min'
  }));
  
  res.json(missions);
});

// For all other requests, serve the index.html file
app.get('*', (req, res) => {
  // Create a simple HTML file that loads the frontend-only build
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asha's Bitcoin Journey - Frontend Only Mode</title>
    <meta name="description" content="A gamified Bitcoin education platform">
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.ico">
    <!-- Preload fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import { createElement } from 'react';
      import { createRoot } from 'react-dom/client';
      import './src/frontend-only-main.tsx';
    </script>
  </body>
  </html>
  `;
  
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Frontend-only server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the app`);
});