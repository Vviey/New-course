// Mock API Implementation for testing frontend without backend
import { User, Realm, Mission, Badge } from "@shared/schema";
import { v4 as uuid } from "uuid";

// In-memory store of data for testing
const store = {
  user: null as User | null,
  realms: [
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
  ] as Realm[],
  missions: [] as Mission[],
  badges: [] as Badge[]
};

// Mock API Handlers
export const mockHandlers = {
  // Auth Endpoints
  "/api/login": async (credentials: { username: string, password: string }) => {
    // Simple login simulation - in a real app would verify password
    if (credentials.username.length < 3) {
      throw new Error("Username must be at least 3 characters");
    }

    // Create a mock user
    const user: User = {
      id: 1,
      userId: uuid(),
      username: credentials.username,
      password: "hashed-password", // never expose real passwords
      email: `${credentials.username}@example.com`,
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

    // Store the user in our mock store
    store.user = user;
    return user;
  },

  "/api/register": async (userData: { username: string, password: string, email?: string }) => {
    // Simple registration validation
    if (userData.username.length < 3) {
      throw new Error("Username must be at least 3 characters");
    }
    if (userData.password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    // Create a mock user
    const user: User = {
      id: 1,
      userId: uuid(),
      username: userData.username,
      password: "hashed-password", // never expose real passwords
      email: userData.email || null,
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

    // Store the user in our mock store
    store.user = user;
    return user;
  },

  "/api/logout": async () => {
    // Simply clear the user from store
    store.user = null;
    return true;
  },

  "/api/user": async () => {
    // Return the current user or null if not logged in
    return store.user;
  },

  // Realm Endpoints
  "/api/realms": async () => {
    return store.realms;
  },

  "/api/realms/:id": async (params: { id: string }) => {
    const realmId = parseInt(params.id);
    const realm = store.realms.find(r => r.id === realmId);
    if (!realm) {
      throw new Error(`Realm ${realmId} not found`);
    }
    return realm;
  },

  // Mission Endpoints
  "/api/realms/:realmId/missions": async (params: { realmId: string }) => {
    const realmId = parseInt(params.realmId);
    // Generate some mock missions for this realm
    return Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `Mission ${i + 1}`,
      description: `This is mission ${i + 1} of realm ${realmId}`,
      imageUrl: `https://bitcoiners.africa/wp-content/uploads/2025/04/mission-${i + 1}.png`,
      realmId,
      order: i + 1,
      content: {
        type: "quiz",
        sections: [
          {
            title: "Introduction",
            content: "This is the introduction to the mission."
          },
          {
            title: "Challenge",
            content: "This is the challenge part of the mission."
          }
        ]
      }
    }));
  }
};

// Helper to extract URL parameters
const extractParams = (pattern: string, url: string) => {
  const paramNames: string[] = [];
  const regexPattern = pattern.replace(/:[^/]+/g, match => {
    paramNames.push(match.substring(1));
    return "([^/]+)";
  });
  
  const regex = new RegExp(`^${regexPattern}$`);
  const matches = url.match(regex);
  
  if (!matches) return null;
  
  const params: Record<string, string> = {};
  for (let i = 0; i < paramNames.length; i++) {
    params[paramNames[i]] = matches[i + 1];
  }
  
  return params;
};

// Mock fetch implementation to intercept API calls
const originalFetch = window.fetch;
window.fetch = async (url: RequestInfo | URL, init?: RequestInit) => {
  const urlStr = url.toString();
  
  // Only intercept API calls
  if (!urlStr.startsWith('/api/')) {
    return originalFetch(url, init);
  }
  
  console.log(`[Mock API] ${init?.method || 'GET'} ${urlStr}`);
  
  // Find matching handler
  for (const [pattern, handler] of Object.entries(mockHandlers)) {
    const params = extractParams(pattern, urlStr);
    if (params) {
      try {
        // For simplicity, all handlers return success responses
        let body = null;
        if (init?.method !== 'GET' && init?.body) {
          body = JSON.parse(init.body.toString());
        }
        
        const result = await handler(body || params);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (error: any) {
        // Return error as the API would
        return new Response(error.message || 'Unknown error', {
          status: 400,
          statusText: error.message || 'Unknown error'
        });
      }
    }
  }
  
  // If no matching handler, return 404
  return new Response('Not found', { status: 404 });
};

// Export the mock store for direct manipulation in tests
export { store };