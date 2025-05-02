import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer } from "ws";
import { setupAuth } from "./auth";
import { storage } from "./storage";

/**
 * Register all API routes
 */
export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  setupAuth(app);
  
  // Initialize realms data
  await storage.initializeRealms();
  
  // Realm routes
  app.get("/api/realms", async (req, res) => {
    try {
      const realms = await storage.getRealms();
      res.status(200).json(realms);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  app.get("/api/realms/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid realm ID" });
      }
      
      const realm = await storage.getRealmById(id);
      if (!realm) {
        return res.status(404).json({ message: "Realm not found" });
      }
      
      res.status(200).json(realm);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  // Progress update route
  app.post("/api/progress", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      
      const userId = req.user!.userId;
      const progress = req.body;
      
      const updatedUser = await storage.updateUserProgress(userId, progress);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  // Create HTTP server
  const httpServer = createServer(app);
  
  // Setup WebSocket server
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });
  
  wss.on('connection', (ws) => {
    console.log('Client connected');
    
    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());
        console.log('Received: %s', data);
        
        // Echo back the message
        if (ws.readyState === ws.OPEN) {
          ws.send(JSON.stringify({
            type: 'echo',
            data: data
          }));
        }
      } catch (error) {
        console.error('WebSocket message error:', error);
      }
    });
    
    ws.on('close', () => {
      console.log('Client disconnected');
    });
    
    // Send welcome message
    ws.send(JSON.stringify({
      type: 'welcome',
      message: 'Connected to Bitcoin Quest'
    }));
  });
  
  return httpServer;
}