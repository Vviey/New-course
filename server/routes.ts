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

  // Serve static assets from public directory but NOT HTML files
  const staticPath = path.resolve('./public');
  console.log(`[DEBUG] Serving static assets from: ${staticPath}`);
  
  // Only serve specific asset types, not HTML files
  app.use(express.static(staticPath, {
    index: false, // Don't serve index.html automatically
    setHeaders: (res, path) => {
      // Don't serve HTML files from static directory
      if (path.endsWith('.html')) {
        return false;
      }
    }
  }));
  
  // Let all routes be handled by the React app
  // We will just log so we can see what's happening
  // No special handling needed for root route - Vite will handle it
  
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
  
  // For all app routes, let Vite/Express serve the React application
  app.get('*', (req, res, next) => {
    // Skip API routes and static assets
    if (req.path.startsWith('/api') || 
        req.path.includes('.')) {  // This will catch most file extensions
      return next();
    }
    
    // Log that we're forwarding to the React app
    console.log(`[DEBUG] Forwarding to React app: ${req.path}`);
    
    // Just pass through to the next middleware (Vite or static file server)
    return next();
  });
  
  // Set up authentication with Passport.js
  setupAuth(app);
  
  // Initialize realms data
  await storage.initializeRealms();

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