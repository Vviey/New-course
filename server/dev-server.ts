import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { storage } from "./storage";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.resolve(__dirname, '../client/public')));

// Initialize realms
async function initializeData() {
  await storage.initializeRealms();
  console.log('Realms data initialized');
}

// API Routes
async function setupRoutes() {
  // Get all realms
  app.get('/api/realms', async (req, res) => {
    try {
      const realms = await storage.getRealms();
      res.status(200).json(realms);
    } catch (error) {
      console.error('Error getting realms:', error);
      res.status(500).json({ message: 'Error getting realms' });
    }
  });

  // Get realm by id
  app.get('/api/realms/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const realm = await storage.getRealmById(parseInt(id));
      
      if (!realm) {
        return res.status(404).json({ message: 'Realm not found' });
      }
      
      res.status(200).json(realm);
    } catch (error) {
      console.error('Error getting realm:', error);
      res.status(500).json({ message: 'Error getting realm' });
    }
  });

  // Auth routes
  app.post('/api/auth/signup', async (req, res) => {
    try {
      const userData = req.body;
      
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
      }
      
      const user = await storage.createUser(userData);
      
      // Return user without password
      const { password, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user' });
    }
  });

  app.post('/api/auth/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }
      
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Error logging in' });
    }
  });
}

// Serve the alternative index HTML
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index-alt.html'));
});

// Initialize data and start server
async function startDevServer() {
  await initializeData();
  await setupRoutes();
  
  const server = createServer(app);
  const PORT = 3000;
  
  server.listen(PORT, () => {
    console.log(`Dev server running at http://localhost:${PORT}`);
  });
}

// Only run if this module is executed directly
if (require.main === module) {
  startDevServer().catch(console.error);
}

export { app };