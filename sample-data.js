// Sample data for testing the Bitcoin Quest: Asha's Journey application
// This data is used when running the application with in-memory storage

const sampleRealms = [
  {
    id: 1,
    name: "Realm of Origins",
    description: "Explore the foundations of money and trade in ancient African societies.",
    theme: "origins",
    order: 1,
    imageUrl: "/images/realms/origins.jpg",
    isActive: true
  },
  {
    id: 2,
    name: "The Central Citadel",
    description: "Understand central banking and monetary policy.",
    theme: "central",
    order: 2,
    imageUrl: "/images/realms/central.jpg",
    isActive: true
  },
  {
    id: 3,
    name: "The Forest of Sparks",
    description: "Discover the birth of Bitcoin and blockchain technology.",
    theme: "forest",
    order: 3,
    imageUrl: "/images/realms/forest.jpg",
    isActive: true
  },
  {
    id: 4,
    name: "The Mountain Forge",
    description: "Learn about Bitcoin mining and network consensus.",
    theme: "mountain",
    order: 4,
    imageUrl: "/images/realms/mountain.jpg",
    isActive: true
  },
  {
    id: 5,
    name: "The Ubuntu Village",
    description: "Explore practical applications of Bitcoin in African economies.",
    theme: "ubuntu",
    order: 5,
    imageUrl: "/images/realms/ubuntu.jpg",
    isActive: true
  }
];

const sampleMissions = [
  // Realm 1 Missions
  {
    id: 1,
    realmId: 1,
    name: "The Cowrie Shell Markets",
    description: "Discover how cowrie shells were used as currency in ancient African trade networks.",
    order: 1,
    type: "story",
    content: "In the coastal villages of ancient Africa, cowrie shells became one of the earliest forms of currency...",
    imageUrl: "/images/missions/cowrie.jpg",
    isActive: true
  },
  {
    id: 2,
    realmId: 1,
    name: "Barter Systems",
    description: "Learn about barter systems and their limitations.",
    order: 2,
    type: "interactive",
    content: "Before money, people exchanged goods directly through bartering...",
    imageUrl: "/images/missions/barter.jpg",
    isActive: true
  },
  
  // Realm 2 Missions
  {
    id: 3,
    realmId: 2,
    name: "The Birth of Central Banking",
    description: "Explore how central banks emerged to control money supply.",
    order: 1,
    type: "story",
    content: "Central banks first emerged in Europe but quickly spread around the world...",
    imageUrl: "/images/missions/central-bank.jpg",
    isActive: true
  },
  
  // More missions for other realms...
];

const sampleBadges = [
  {
    id: 1,
    name: "Shell Collector",
    description: "Completed the Cowrie Shell Markets mission",
    realmId: 1,
    imageUrl: "/images/badges/shell.svg",
    criteria: "Complete the first mission in Realm 1"
  },
  {
    id: 2,
    name: "Master Trader",
    description: "Mastered the barter system concepts",
    realmId: 1,
    imageUrl: "/images/badges/trader.svg",
    criteria: "Score 90% or higher on the barter system quiz"
  },
  // More badges...
];

// Sample user for testing (in a real app, this would be created during registration)
const sampleUser = {
  id: 1,
  userId: "user-123456",
  username: "asha_explorer",
  email: "test@example.com",
  password: "hashed_password_here", // In production, this would be properly hashed
  progress: JSON.stringify({
    completedMissions: [1, 2],
    currentRealm: 2
  }),
  createdAt: new Date(),
  isActive: true
};

// This data could be used to initialize the in-memory storage in a development environment
console.log("Sample data available for testing. This is for development purposes only.");