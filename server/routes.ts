import express, { type Express, type Request, type Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add a middleware to log all incoming requests for debugging
  app.use((req, res, next) => {
    console.log(`[DEBUG] Received request: ${req.method} ${req.url}`);
    next();
  });

  // Explicitly serve static files from the public directory before any other routes
  const staticPath = path.resolve('./public');
  console.log(`[DEBUG] Serving static files from: ${staticPath}`);
  
  app.use(express.static(staticPath));
  
  // Root route - direct access landing page
  app.get('/', (req, res) => {
    console.log('[DEBUG] Serving root route');
    res.sendFile('index.html', { root: path.resolve('./public') });
  });

  // Serve demo page
  app.get('/demo', (req, res) => {
    console.log('[DEBUG] Serving demo route');
    res.sendFile('demo.html', { root: path.resolve('./public') });
  });
  
  // Create explicit routes for each HTML file with absolute paths
  const staticFiles = [
    'demo.html',
    'realm2-mission4.html',
    'realm2-mission5.html',
    'realm2-mission6.html',
    'realm2-missionbonus.html'
  ];
  
  staticFiles.forEach(file => {
    const absolutePath = path.resolve('./public', file);
    app.get(`/${file}`, (req, res) => {
      console.log(`[DEBUG] Serving static file: ${file}`);
      if (fs.existsSync(absolutePath)) {
        res.sendFile(absolutePath);
      } else {
        console.error(`[ERROR] File not found: ${absolutePath}`);
        res.status(404).send('File not found');
      }
    });
  });
  
  // Serve the African Currency Education demo page
  app.get('/african-currency-demo', (req, res) => {
    res.sendFile('african-currency-demo.html', { root: './public' });
  });
  
  // Add a simple health check endpoint
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });
  
  // Special route for parallax journey (direct access)
  app.get('/parallax', (req, res) => {
    const clientDir = path.resolve('./client');
    const parallaxPath = path.join(clientDir, 'parallax-entry.html');
    
    if (fs.existsSync(parallaxPath)) {
      res.sendFile(parallaxPath);
    } else {
      res.redirect('/');
    }
  });
  
  // Set up authentication with GitHub OAuth
  setupAuth(app);
  
  // Initialize realms data
  await storage.initializeRealms();

  // User routes
  app.post('/api/auth/signup', async (req, res) => {
    try {
      const userData = req.body;
      
      // Validate user data
      const validatedData = insertUserSchema
        .omit({ userId: true })
        .safeParse(userData);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: 'Invalid user data', 
          errors: validatedData.error.errors 
        });
      }
      
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

  // Get user by userId
  app.get('/api/users/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await storage.getUserByUserId(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Return user without password
      const { password, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ message: 'Error getting user' });
    }
  });

  // Update user progress
  app.put('/api/users/:userId/progress', async (req, res) => {
    try {
      const { userId } = req.params;
      const progress = req.body;
      
      const updatedUser = await storage.updateUserProgress(userId, progress);
      
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Return user without password
      const { password, ...userWithoutPassword } = updatedUser;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error('Error updating user progress:', error);
      res.status(500).json({ message: 'Error updating user progress' });
    }
  });

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

  const httpServer = createServer(app);
  return httpServer;
}