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
  
  // Mission routes
  app.get("/api/realms/:realmId/missions", async (req, res) => {
    try {
      const realmId = parseInt(req.params.realmId, 10);
      if (isNaN(realmId)) {
        return res.status(400).json({ message: "Invalid realm ID" });
      }
      
      const missions = await storage.getMissions(realmId);
      res.status(200).json(missions);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  app.get("/api/missions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid mission ID" });
      }
      
      const mission = await storage.getMissionById(id);
      if (!mission) {
        return res.status(404).json({ message: "Mission not found" });
      }
      
      res.status(200).json(mission);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  // Mission creation (admin only)
  app.post("/api/missions", async (req, res) => {
    try {
      // Check authentication and admin role in a real application
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      
      const missionData = req.body;
      const mission = await storage.createMission(missionData);
      
      res.status(201).json(mission);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  // Mission update (admin only)
  app.patch("/api/missions/:id", async (req, res) => {
    try {
      // Check authentication and admin role in a real application
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid mission ID" });
      }
      
      const missionData = req.body;
      const mission = await storage.updateMission(id, missionData);
      
      if (!mission) {
        return res.status(404).json({ message: "Mission not found" });
      }
      
      res.status(200).json(mission);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  // Badge routes
  app.get("/api/badges", async (req, res) => {
    try {
      const badges = await storage.getBadges();
      res.status(200).json(badges);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  app.get("/api/realms/:realmId/badges", async (req, res) => {
    try {
      const realmId = parseInt(req.params.realmId, 10);
      if (isNaN(realmId)) {
        return res.status(400).json({ message: "Invalid realm ID" });
      }
      
      const badges = await storage.getBadgesByRealm(realmId);
      res.status(200).json(badges);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  app.get("/api/badges/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid badge ID" });
      }
      
      const badge = await storage.getBadgeById(id);
      if (!badge) {
        return res.status(404).json({ message: "Badge not found" });
      }
      
      res.status(200).json(badge);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  // User badge routes
  app.get("/api/user/badges", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      
      const userId = req.user!.userId;
      const badges = await storage.getUserBadges(userId);
      
      res.status(200).json(badges);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });
  
  // Award badge to user (admin only or through completion logic)
  app.post("/api/user/badges", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      
      const userId = req.user!.userId;
      const { badgeId } = req.body;
      
      if (!badgeId) {
        return res.status(400).json({ message: "Badge ID is required" });
      }
      
      const userBadge = await storage.awardBadgeToUser(userId, badgeId);
      res.status(201).json(userBadge);
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