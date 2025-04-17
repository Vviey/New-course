import { v4 as uuidv4 } from 'uuid';
import { users, type User, type InsertUser, realms, type Realm, type InsertRealm } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUserId(userId: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: Omit<InsertUser, 'userId'>): Promise<User>;
  updateUserProgress(userId: string, progress: any): Promise<User | undefined>;
  getRealms(): Promise<Realm[]>;
  getRealmById(id: number): Promise<Realm | undefined>;
  initializeRealms(): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private realmsList: Map<number, Realm>;
  currentId: number;
  realmId: number;

  constructor() {
    this.users = new Map();
    this.realmsList = new Map();
    this.currentId = 1;
    this.realmId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUserId(userId: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.userId === userId,
    );
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUserData: Omit<InsertUser, 'userId'>): Promise<User> {
    const id = this.currentId++;
    const userId = uuidv4();
    
    const initialProgress = {
      currentRealm: 1,
      completedRealms: [],
      chain: {
        progress: 0,
        lastUpdated: new Date().toISOString()
      }
    };
    
    const initialRewards = {
      badges: [],
      tokens: 0
    };
    
    const user = {
      ...insertUserData,
      id,
      userId,
      progress: insertUserData.progress || initialProgress,
      rewards: insertUserData.rewards || initialRewards
    } as User;
    
    // Save user to the map
    this.users.set(id, user);
    
    return user;
  }

  async updateUserProgress(userId: string, progress: any): Promise<User | undefined> {
    const user = await this.getUserByUserId(userId);
    if (!user) return undefined;
    
    const updatedUser = {
      ...user,
      progress: {
        ...(user.progress || {}),
        ...progress
      }
    } as User;
    
    
    this.users.set(user.id, updatedUser);
    return updatedUser;
  }

  async getRealms(): Promise<Realm[]> {
    return Array.from(this.realmsList.values());
  }

  async getRealmById(id: number): Promise<Realm | undefined> {
    return this.realmsList.get(id);
  }

  async initializeRealms(): Promise<void> {
    // Add initial realms data
    const realmsData: InsertRealm[] = [
      {
        name: "Realm of Origins",
        description: "Discover how money began and evolved from shells to bills in this foundational chapter.",
        moduleNumber: 1,
        imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-1.png",
        isLocked: false
      },
      {
        name: "The Forest of Sparks",
        description: "Enter the mystical forest where the spark of Bitcoin was first ignited.",
        moduleNumber: 2,
        imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-2.png",
        isLocked: true
      },
      {
        name: "The Central Citadel",
        description: "Explore the towers of power where monetary decisions echo through the lands.",
        moduleNumber: 3,
        imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-3.png",
        isLocked: true
      },
      {
        name: "The Council of Forks",
        description: "Witness the debates that shape the path of digital currencies at the Council.",
        moduleNumber: 4,
        imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-4.png",
        isLocked: true
      },
      {
        name: "The Ubuntu Village",
        description: "Discover how Bitcoin weaves into African traditions of community and shared prosperity.",
        moduleNumber: 5,
        imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-5.png",
        isLocked: true
      },
      {
        name: "The Grove of Becoming",
        description: "Complete your journey and discover your role in the future of money.",
        moduleNumber: 6,
        imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-6.png",
        isLocked: true
      }
    ];

    realmsData.forEach((realm, index) => {
      const id = this.realmId++;
      this.realmsList.set(id, { ...realm, id } as Realm);
    });
  }
}



export const storage = new MemStorage();
// Initialize realms data
storage.initializeRealms();