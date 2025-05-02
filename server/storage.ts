import { v4 as uuidv4 } from 'uuid';
import { users, type User, type InsertUser, realms, type Realm, type InsertRealm } from "@shared/schema";
import session from "express-session";
import { db, pool } from './db';

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUserId(userId: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: Partial<InsertUser>): Promise<User>;
  updateUser(userId: string, userData: Partial<User>): Promise<User | undefined>;
  updateUserProgress(userId: string, progress: any): Promise<User | undefined>;
  getRealms(): Promise<Realm[]>;
  getRealmById(id: number): Promise<Realm | undefined>;
  initializeRealms(): Promise<void>;
  sessionStore: session.Store;
}

import createMemoryStore from "memorystore";
const MemoryStore = createMemoryStore(session);

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private realmsList: Map<number, Realm>;
  currentId: number;
  realmId: number;
  sessionStore: session.Store;

  constructor() {
    this.users = new Map();
    this.realmsList = new Map();
    this.currentId = 1;
    this.realmId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    });
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

  async getUserByEmail(email: string): Promise<User | undefined> {
    if (!email) return undefined;
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUserData: Partial<InsertUser>): Promise<User> {
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

  async updateUser(userId: string, userData: Partial<User>): Promise<User | undefined> {
    const user = await this.getUserByUserId(userId);
    if (!user) return undefined;
    
    const updatedUser = {
      ...user,
      ...userData
    } as User;
    
    this.users.set(user.id, updatedUser);
    return updatedUser;
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
    try {
      // Add initial realms data
      const realmsData = [
        {
          name: "Realm of Origins",
          description: "Discover how money began and evolved from shells to bills in this foundational chapter.",
          moduleNumber: 1,
          imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-1.png",
          isLocked: false
        },
        {
          name: "The Central Citadel",
          description: "Explore the towers of power where monetary decisions echo through the lands.",
          moduleNumber: 2,
          imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-2.png",
          isLocked: true
        },
        {
          name: "The Forest of Sparks",
          description: "Enter the mystical forest where the spark of Bitcoin was first ignited.",
          moduleNumber: 3,
          imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-3.png",
          isLocked: true
        },
        {
          name: "The Mountain Forge",
          description: "Delve into the depths where miners create new blocks through proof of work.",
          moduleNumber: 4,
          imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-4.png",
          isLocked: true
        },
        {
          name: "The Council of Forks",
          description: "Witness the debates that shape the path of digital currencies at the Council.",
          moduleNumber: 5,
          imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-5.png",
          isLocked: true
        },
        {
          name: "The Ubuntu Village",
          description: "Discover how Bitcoin weaves into African traditions of community and shared prosperity.",
          moduleNumber: 6,
          imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-6.png",
          isLocked: true
        },
        {
          name: "The Summit of Knowledge",
          description: "Complete your journey and demonstrate your mastery of Bitcoin concepts.",
          moduleNumber: 7,
          imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-7.png",
          isLocked: true
        }
      ];

      realmsData.forEach((realm) => {
        const id = this.realmId++;
        this.realmsList.set(id, { ...realm, id } as Realm);
      });
      
      console.log('Memory realms initialized successfully');
    } catch (error) {
      console.error('Failed to initialize memory realms:', error);
    }
  }
}



import { db, pool } from './db';
import { eq } from 'drizzle-orm';
import connectPg from "connect-pg-simple";

const PostgresSessionStore = connectPg(session);

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;
  
  constructor() {
    this.sessionStore = new PostgresSessionStore({
      pool,
      createTableIfMissing: true
    });
  }
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUserId(userId: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.userId, userId));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    if (!email) return undefined;
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUserData: Partial<InsertUser>): Promise<User> {
    const userId = insertUserData.userId || uuidv4();
    
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
    
    const userData = {
      userId,
      username: insertUserData.username || '',
      password: insertUserData.password || '',
      email: insertUserData.email,
      progress: insertUserData.progress || initialProgress,
      rewards: insertUserData.rewards || initialRewards
    };
    
    const [user] = await db.insert(users).values([userData] as any).returning();
    return user;
  }

  async updateUser(userId: string, userData: Partial<User>): Promise<User | undefined> {
    const user = await this.getUserByUserId(userId);
    if (!user) return undefined;
    
    const [updatedUser] = await db
      .update(users)
      .set(userData)
      .where(eq(users.userId, userId))
      .returning();
    
    return updatedUser;
  }

  async updateUserProgress(userId: string, progress: any): Promise<User | undefined> {
    const user = await this.getUserByUserId(userId);
    if (!user) return undefined;
    
    const updatedProgress = {
      ...(user.progress || {}),
      ...progress
    };
    
    const [updatedUser] = await db
      .update(users)
      .set({ progress: updatedProgress })
      .where(eq(users.userId, userId))
      .returning();
    
    return updatedUser;
  }

  async getRealms(): Promise<Realm[]> {
    return await db.select().from(realms);
  }

  async getRealmById(id: number): Promise<Realm | undefined> {
    const [realm] = await db.select().from(realms).where(eq(realms.id, id));
    return realm;
  }

  async initializeRealms(): Promise<void> {
    try {
      // Check if realms table is empty
      const existingRealms = await db.select().from(realms);
      if (existingRealms.length > 0) {
        console.log('Realms already initialized, skipping');
        return;
      }
      
      // Add initial realms data using raw SQL to bypass column name issues
      await pool.query(`
        INSERT INTO realms (name, description, "moduleNumber", "imageUrl", "isLocked")
        VALUES 
          ('Realm of Origins', 'Discover how money began and evolved from shells to bills in this foundational chapter.', 1, 'https://bitcoiners.africa/wp-content/uploads/2025/04/realm-1.png', false),
          ('The Central Citadel', 'Explore the towers of power where monetary decisions echo through the lands.', 2, 'https://bitcoiners.africa/wp-content/uploads/2025/04/realm-2.png', true),
          ('The Forest of Sparks', 'Enter the mystical forest where the spark of Bitcoin was first ignited.', 3, 'https://bitcoiners.africa/wp-content/uploads/2025/04/realm-3.png', true),
          ('The Mountain Forge', 'Delve into the depths where miners create new blocks through proof of work.', 4, 'https://bitcoiners.africa/wp-content/uploads/2025/04/realm-4.png', true),
          ('The Council of Forks', 'Witness the debates that shape the path of digital currencies at the Council.', 5, 'https://bitcoiners.africa/wp-content/uploads/2025/04/realm-5.png', true),
          ('The Ubuntu Village', 'Discover how Bitcoin weaves into African traditions of community and shared prosperity.', 6, 'https://bitcoiners.africa/wp-content/uploads/2025/04/realm-6.png', true),
          ('The Summit of Knowledge', 'Complete your journey and demonstrate your mastery of Bitcoin concepts.', 7, 'https://bitcoiners.africa/wp-content/uploads/2025/04/realm-7.png', true)
      `);
      
      console.log('Realms initialized successfully');
    } catch (error) {
      console.error('Failed to initialize realms:', error);
      throw error;
    }
  }
}

// Check if database connection is available to decide which storage implementation to use
const isDbAvailable = (() => {
  try {
    return pool !== null && db !== null;
  } catch {
    return false;
  }
})();

// Use DatabaseStorage if database is available, otherwise fall back to MemStorage
export const storage = isDbAvailable ? new DatabaseStorage() : new MemStorage();

// Initialize realms data
storage.initializeRealms().catch(err => {
  console.error('Failed to initialize realms:', err);
});