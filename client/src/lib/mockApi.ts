// Mock API implementation for frontend-only mode
// Intercepts fetch calls to API endpoints and returns mock data

console.log("Mock API initialized for frontend-only mode");

// Mock data for realms
const mockRealms = [
  {
    id: 1,
    name: "Realm of Origins",
    description: "Learn about the foundations of money",
    moduleNumber: 1,
    imageUrl: "/assets/realms/origins.png",
    isLocked: false
  },
  {
    id: 2,
    name: "The Central Citadel",
    description: "Discover how governments control the monetary system",
    moduleNumber: 2,
    imageUrl: "/assets/realms/central.png",
    isLocked: false
  },
  {
    id: 3,
    name: "The Forest of Sparks",
    description: "Explore Bitcoin's birth and early development",
    moduleNumber: 3,
    imageUrl: "/assets/realms/forest.png",
    isLocked: false
  },
  {
    id: 4,
    name: "The Mountain Forge",
    description: "Understand how Bitcoin mining works",
    moduleNumber: 4,
    imageUrl: "/assets/realms/mountain.png",
    isLocked: false
  },
  {
    id: 5,
    name: "The Council of Forks",
    description: "Learn about Bitcoin's governance and consensus",
    moduleNumber: 5,
    imageUrl: "/assets/realms/council.png",
    isLocked: false
  },
  {
    id: 6,
    name: "The Ubuntu Village",
    description: "Discover Bitcoin's practical applications in Africa",
    moduleNumber: 6,
    imageUrl: "/assets/realms/ubuntu.png",
    isLocked: false
  },
  {
    id: 7,
    name: "The Summit of Knowledge",
    description: "Test your comprehensive understanding of Bitcoin",
    moduleNumber: 7,
    imageUrl: "/assets/realms/summit.png",
    isLocked: false
  }
];

// Mock data for missions
const mockMissions = {
  1: [
    {
      id: 101,
      realmId: 1,
      title: "The Barter System",
      description: "Discover how trade began before money existed",
      imageUrl: "/assets/missions/barter.png",
      order: 1,
      content: {
        sections: [
          {
            type: "text",
            content: "Before money existed, people traded goods directly with each other through bartering."
          },
          {
            type: "image",
            src: "/assets/missions/barter-illustration.png",
            alt: "Illustration of barter trade"
          }
        ]
      }
    },
    {
      id: 102,
      realmId: 1,
      title: "The Cowrie Shell Market",
      description: "Explore how shells became an early form of money in Africa",
      imageUrl: "/assets/missions/cowrie.png",
      order: 2,
      content: {
        sections: [
          {
            type: "text",
            content: "Cowrie shells were one of the earliest forms of currency in many parts of Africa."
          }
        ]
      }
    },
    {
      id: 103,
      realmId: 1,
      title: "Properties of Good Money",
      description: "Discover what makes something suitable to be used as money",
      imageUrl: "/assets/missions/properties.png",
      order: 3,
      content: {
        sections: [
          {
            type: "text",
            content: "Good money should be durable, portable, divisible, uniform, limited in supply, and accepted."
          }
        ]
      }
    }
  ],
  // Add more missions for other realms as needed
};

// Mock data for the user
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

// Mock badge data
const mockBadges = [
  {
    id: 1,
    name: "Origins Explorer",
    description: "Completed all missions in the Realm of Origins",
    imageUrl: "/assets/badges/origins.png",
    realmId: 1
  },
  {
    id: 2,
    name: "Central Authority",
    description: "Mastered the central banking system in The Central Citadel",
    imageUrl: "/assets/badges/central.png",
    realmId: 2
  }
];

// Original fetch implementation
const originalFetch = window.fetch;

// Replace fetch with our mock implementation
window.fetch = async function(input: RequestInfo | URL, init?: RequestInit) {
  const url = typeof input === 'string' ? input : input.toString();
  
  console.log(`Intercepted fetch to: ${url}`);
  
  // API endpoint handling
  if (url.includes('/api/realms')) {
    if (url.match(/\/api\/realms\/\d+$/)) {
      // Handle specific realm request
      const realmId = parseInt(url.split('/').pop() || "0", 10);
      const realm = mockRealms.find(r => r.id === realmId);
      
      return new Response(JSON.stringify(realm || null), {
        status: realm ? 200 : 404,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      // Return all realms
      return new Response(JSON.stringify(mockRealms), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  if (url.includes('/api/missions')) {
    if (url.match(/\/api\/missions\/\d+$/)) {
      // Handle specific mission request
      const missionId = parseInt(url.split('/').pop() || "0", 10);
      let foundMission = null;
      
      // Search through all realms
      for (const realmId in mockMissions) {
        const missions = mockMissions[realmId as keyof typeof mockMissions];
        const mission = missions.find(m => m.id === missionId);
        if (mission) {
          foundMission = mission;
          break;
        }
      }
      
      return new Response(JSON.stringify(foundMission || null), {
        status: foundMission ? 200 : 404,
        headers: { 'Content-Type': 'application/json' }
      });
    } else if (url.includes('/api/missions/realm/')) {
      // Handle missions by realm
      const realmId = parseInt(url.split('/').pop() || "0", 10);
      const missions = mockMissions[realmId as keyof typeof mockMissions] || [];
      
      return new Response(JSON.stringify(missions), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  if (url.includes('/api/badges')) {
    return new Response(JSON.stringify(mockBadges), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  if (url === '/api/user') {
    // Return user data for authenticated requests
    return new Response(JSON.stringify(mockUser), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  if (url === '/api/login' && init?.method === 'POST') {
    // Mock login endpoint
    const body = init.body ? JSON.parse(init.body.toString()) : {};
    
    if (body.username === 'demouser' && body.password === 'password') {
      return new Response(JSON.stringify(mockUser), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ message: 'Invalid username or password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  if (url === '/api/register' && init?.method === 'POST') {
    // Mock register endpoint - always succeeds in frontend-only mode
    return new Response(JSON.stringify(mockUser), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  if (url === '/api/logout' && init?.method === 'POST') {
    // Mock logout endpoint
    return new Response(null, {
      status: 200
    });
  }
  
  // Fall back to original fetch for non-API requests
  return originalFetch(input, init);
};