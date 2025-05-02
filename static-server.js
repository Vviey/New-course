// A simple static server to serve our React application without Vite host restrictions
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints for mock data
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

// Handle 404
app.use((req, res) => {
  res.status(404).send('Not found');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static server running on port ${PORT}`);
});