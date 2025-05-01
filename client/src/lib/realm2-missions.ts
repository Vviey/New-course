/**
 * Configuration for Realm 2 missions
 * 
 * These missions focus on the surveillance city theme, exploring
 * centralized control and power dynamics in financial systems.
 */

export interface Realm2Mission {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  type: 'simulation' | 'interactive' | 'quiz' | 'story';
  duration: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
  isLocked?: boolean;
  prerequisites?: number[];
}

export const realm2Missions: Realm2Mission[] = [
  {
    id: 201,
    title: "Central Banking & Monetary Control",
    subtitle: "Experience the power dynamics of central banking",
    description: "Step into the shoes of a central banker to understand how monetary policy affects citizens and why it matters that Bitcoin removes this control point.",
    type: "simulation",
    duration: 15,
    difficulty: "medium",
  },
  {
    id: 202,
    title: "Financial Surveillance Systems",
    subtitle: "Explore how money becomes a tracking tool",
    description: "Learn how financial surveillance works in practice, what data is collected about you, and why Bitcoin's privacy features matter.",
    type: "interactive",
    duration: 20,
    difficulty: "medium",
    isLocked: true,
    prerequisites: [201],
  },
  {
    id: 203,
    title: "Censorship & Control",
    subtitle: "When your money can be turned off",
    description: "Through real-world examples, see how payment censorship works and why Bitcoin's censorship resistance is a critical feature.",
    type: "story",
    duration: 15,
    difficulty: "easy",
    isLocked: true,
    prerequisites: [201],
  },
  {
    id: 204,
    title: "Peer-to-Peer Networks",
    subtitle: "Building systems without central points of control",
    description: "Explore how peer-to-peer networks operate differently from centralized systems, and why this architecture matters for Bitcoin.",
    type: "interactive",
    duration: 25,
    difficulty: "hard",
    isLocked: true,
    prerequisites: [201, 202],
  },
  {
    id: 205,
    title: "Keys to Freedom",
    subtitle: "Understanding public key cryptography",
    description: "Learn how cryptographic keys work, why they provide security, and how they enable Bitcoin ownership without centralized control.",
    type: "interactive",
    duration: 20,
    difficulty: "medium",
    isLocked: true,
    prerequisites: [204],
  },
  {
    id: 206,
    title: "The Great Debasement",
    subtitle: "Historical perspectives on currency manipulation",
    description: "Through historical examples, see how money has been debased throughout history and why Bitcoin's fixed supply is revolutionary.",
    type: "quiz",
    duration: 15,
    difficulty: "easy",
    isLocked: true,
    prerequisites: [201],
  },
  {
    id: 207,
    title: "Global Monetary Game Theory",
    subtitle: "How currencies compete on the world stage",
    description: "Explore the game theory behind global monetary competition and Bitcoin's position as a neutral, borderless alternative.",
    type: "simulation",
    duration: 30,
    difficulty: "hard",
    isLocked: true,
    prerequisites: [201, 206],
  },
  {
    id: 208,
    title: "Realm Challenge: Escape the Surveillance City",
    subtitle: "Put your knowledge to the test",
    description: "Apply everything you've learned about central banking, surveillance, and Bitcoin to help citizens escape financial control in this final challenge.",
    type: "interactive",
    duration: 35,
    difficulty: "hard",
    isLocked: true,
    prerequisites: [201, 202, 203, 204, 205, 206, 207],
  },
];