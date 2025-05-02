import express, { type Express } from "express";
import { createServer, type Server } from "http";

// Mock realm data
const mockRealms = [
  {
    id: 1,
    name: "Realm of Origins",
    description: "Learn about the foundations of money",
    type: "origins",
    order: 1,
    imageUrl: "/assets/realms/origins.png",
    isLocked: false,
    isCompleted: false
  },
  {
    id: 2,
    name: "The Central Citadel",
    description: "Discover how governments control the monetary system",
    type: "central",
    order: 2,
    imageUrl: "/assets/realms/central.png",
    isLocked: false,
    isCompleted: false
  },
  {
    id: 3,
    name: "The Forest of Sparks",
    description: "Explore Bitcoin's birth and early development",
    type: "forest",
    order: 3,
    imageUrl: "/assets/realms/forest.png",
    isLocked: false,
    isCompleted: false
  },
  {
    id: 4,
    name: "The Mountain Forge",
    description: "Learn about Bitcoin mining and network consensus",
    type: "mountain",
    order: 4,
    imageUrl: "/assets/realms/mountain.png",
    isLocked: false,
    isCompleted: false
  },
  {
    id: 5,
    name: "The Council of Forks",
    description: "Understand Bitcoin governance and protocol changes",
    type: "council",
    order: 5,
    imageUrl: "/assets/realms/council.png",
    isLocked: false,
    isCompleted: false
  },
  {
    id: 6,
    name: "The Ubuntu Village",
    description: "Discover practical applications of Bitcoin in Africa",
    type: "ubuntu",
    order: 6,
    imageUrl: "/assets/realms/ubuntu.png",
    isLocked: false,
    isCompleted: false
  },
  {
    id: 7,
    name: "The Summit of Knowledge",
    description: "Test your comprehensive understanding of Bitcoin",
    type: "summit",
    order: 7,
    imageUrl: "/assets/realms/summit.png",
    isLocked: false,
    isCompleted: false
  }
];

// Type for mission data
type Mission = {
  id: number;
  realmId: number;
  name: string;
  description: string;
  type: string;
  order: number;
  isCompleted: boolean;
};

// Mock missions with numerical indices 
const mockMissions: Record<number, Mission[]> = {
  1: [
    {
      id: 101,
      realmId: 1,
      name: "The Dawn of Exchange",
      description: "Learn about the earliest forms of trade and barter",
      type: "story",
      order: 1,
      isCompleted: false
    },
    {
      id: 102,
      realmId: 1,
      name: "The Cowrie Shell Market",
      description: "Explore how shells became an early form of money in Africa",
      type: "interactive",
      order: 2,
      isCompleted: false
    },
    {
      id: 103,
      realmId: 1,
      name: "Properties of Good Money",
      description: "Discover what makes something suitable to be used as money",
      type: "quiz",
      order: 3,
      isCompleted: false
    }
  ],
  2: [
    {
      id: 201,
      realmId: 2,
      name: "The Rise of Central Banking",
      description: "Learn about the development of central banks",
      type: "story",
      order: 1,
      isCompleted: false
    },
    {
      id: 202,
      realmId: 2,
      name: "Inflation Simulator",
      description: "See how monetary policy affects the value of currency",
      type: "simulation",
      order: 2,
      isCompleted: false
    }
  ],
  3: [
    {
      id: 301,
      realmId: 3,
      name: "Satoshi's Vision",
      description: "Understand the origins of Bitcoin",
      type: "story",
      order: 1,
      isCompleted: false
    }
  ],
  4: [
    {
      id: 401,
      realmId: 4,
      name: "The Mining Process",
      description: "Learn how Bitcoin mining secures the network",
      type: "interactive",
      order: 1,
      isCompleted: false
    }
  ],
  5: [
    {
      id: 501,
      realmId: 5,
      name: "The Great Block Size Debate",
      description: "Explore how Bitcoin evolves through consensus",
      type: "story",
      order: 1,
      isCompleted: false
    }
  ],
  6: [
    {
      id: 601,
      realmId: 6,
      name: "Bitcoin in Daily Life",
      description: "Discover real-world applications of Bitcoin in African communities",
      type: "interactive",
      order: 1,
      isCompleted: false
    }
  ],
  7: [
    {
      id: 701,
      realmId: 7,
      name: "The Final Challenge",
      description: "Test your knowledge across all realms",
      type: "quiz",
      order: 1,
      isCompleted: false
    }
  ]
};

// Mock user data
const mockUser = {
  id: 1,
  userId: "demo-user-123",
  username: "demouser",
  email: "demo@example.com",
  progress: {
    currentRealm: 1,
    completedRealms: [],
    missionsCompleted: [],
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

/**
 * Register routes and serve the frontend directly
 */
export async function registerRoutes(app: Express): Promise<Server> {
  console.log("Realms already initialized, skipping");
  
  // Setup API routes
  app.get('/api/realms', (req, res) => {
    res.json(mockRealms);
  });
  
  app.get('/api/realms/:id', (req, res) => {
    const realmId = parseInt(req.params.id);
    const realm = mockRealms.find(r => r.id === realmId);
    
    if (!realm) {
      return res.status(404).json({ message: "Realm not found" });
    }
    
    res.json(realm);
  });
  
  app.get('/api/realms/:id/missions', (req, res) => {
    const realmId = parseInt(req.params.id);
    const missions = mockMissions[realmId] || [];
    
    res.json(missions);
  });
  
  app.get('/api/user', (req, res) => {
    res.json(mockUser);
  });
  
  // Create user auth endpoints for the frontend Auth context
  app.post('/api/login', (req, res) => {
    res.json(mockUser);
  });
  
  app.post('/api/register', (req, res) => {
    res.json(mockUser);
  });
  
  app.post('/api/logout', (req, res) => {
    res.status(200).json({ message: "Logged out successfully" });
  });
  
  // Create HTTP server
  const httpServer = createServer(app);
  
  return httpServer;
}