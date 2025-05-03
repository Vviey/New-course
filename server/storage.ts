import { v4 as uuidv4 } from 'uuid';
import { users, type User, type InsertUser, realms, type Realm, type InsertRealm, missions, type Mission, badges, type Badge, userBadges, type UserBadge } from "@shared/schema";
import session from "express-session";
import { eq } from 'drizzle-orm';
import { db, pool } from './db';

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUserId(userId: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: Partial<InsertUser>): Promise<User>;
  updateUser(userId: string, userData: Partial<User>): Promise<User | undefined>;
  updateUserProgress(userId: string, progress: any): Promise<User | undefined>;
  
  // Realm methods
  getRealms(): Promise<Realm[]>;
  getRealmById(id: number): Promise<Realm | undefined>;
  initializeRealms(): Promise<void>;
  
  // Mission methods
  getMissions(realmId: number): Promise<Mission[]>;
  getMissionById(id: number): Promise<Mission | undefined>;
  createMission(mission: Partial<Mission>): Promise<Mission>;
  updateMission(id: number, mission: Partial<Mission>): Promise<Mission | undefined>;
  
  // Badge methods
  getBadges(): Promise<Badge[]>;
  getBadgesByRealm(realmId: number): Promise<Badge[]>;
  getBadgeById(id: number): Promise<Badge | undefined>;
  createBadge(badge: Partial<Badge>): Promise<Badge>;
  
  // User badge methods
  getUserBadges(userId: string): Promise<UserBadge[]>;
  awardBadgeToUser(userId: string, badgeId: number): Promise<UserBadge>;
  
  sessionStore: session.Store;
}

import createMemoryStore from "memorystore";
const MemoryStore = createMemoryStore(session);

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private realmsList: Map<number, Realm>;
  private missionsList: Map<number, Mission>;
  private badgesList: Map<number, Badge>;
  private userBadgesList: Map<number, UserBadge>;
  
  currentId: number;
  realmId: number;
  missionId: number;
  badgeId: number;
  userBadgeId: number;
  
  sessionStore: session.Store;

  constructor() {
    this.users = new Map();
    this.realmsList = new Map();
    this.missionsList = new Map();
    this.badgesList = new Map();
    this.userBadgesList = new Map();
    
    this.currentId = 1;
    this.realmId = 1;
    this.missionId = 1;
    this.badgeId = 1;
    this.userBadgeId = 1;
    
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
  
  // Mission methods
  async getMissions(realmId: number): Promise<Mission[]> {
    return Array.from(this.missionsList.values()).filter(
      (mission) => mission.realmId === realmId
    );
  }

  async getMissionById(id: number): Promise<Mission | undefined> {
    return this.missionsList.get(id);
  }

  async createMission(missionData: Partial<Mission>): Promise<Mission> {
    const id = this.missionId++;
    
    const mission = {
      ...missionData,
      id,
      title: missionData.title || '',
      description: missionData.description || '',
      realmId: missionData.realmId || 1,
      order: missionData.order || 1,
      content: missionData.content || {}
    } as Mission;
    
    this.missionsList.set(id, mission);
    return mission;
  }

  async updateMission(id: number, missionData: Partial<Mission>): Promise<Mission | undefined> {
    const mission = this.missionsList.get(id);
    if (!mission) return undefined;
    
    const updatedMission = {
      ...mission,
      ...missionData
    } as Mission;
    
    this.missionsList.set(id, updatedMission);
    return updatedMission;
  }

  // Badge methods
  async getBadges(): Promise<Badge[]> {
    return Array.from(this.badgesList.values());
  }

  async getBadgesByRealm(realmId: number): Promise<Badge[]> {
    return Array.from(this.badgesList.values()).filter(
      (badge) => badge.realmId === realmId
    );
  }

  async getBadgeById(id: number): Promise<Badge | undefined> {
    return this.badgesList.get(id);
  }

  async createBadge(badgeData: Partial<Badge>): Promise<Badge> {
    const id = this.badgeId++;
    
    const badge = {
      ...badgeData,
      id,
      name: badgeData.name || '',
      description: badgeData.description || '',
      realmId: badgeData.realmId
    } as Badge;
    
    this.badgesList.set(id, badge);
    return badge;
  }

  // User badge methods
  async getUserBadges(userId: string): Promise<UserBadge[]> {
    return Array.from(this.userBadgesList.values()).filter((userBadge) => {
      const user = this.users.get(userBadge.userId);
      return user?.userId === userId;
    });
  }

  async awardBadgeToUser(userId: string, badgeId: number): Promise<UserBadge> {
    const id = this.userBadgeId++;
    const user = await this.getUserByUserId(userId);
    
    if (!user) {
      throw new Error('User not found');
    }
    
    const badge = this.badgesList.get(badgeId);
    if (!badge) {
      throw new Error('Badge not found');
    }
    
    const userBadge = {
      id,
      userId: user.id,
      badgeId,
      earned: new Date()
    } as UserBadge;
    
    this.userBadgesList.set(id, userBadge);
    
    // Update user rewards
    const rewards = (user.rewards as { badges: number[], tokens: number }) || { badges: [], tokens: 0 };
    const updatedRewards = {
      ...rewards,
      badges: [...(rewards.badges || []), badgeId]
    };
    
    await this.updateUser(userId, { rewards: updatedRewards });
    
    return userBadge;
  }
}

import connectPg from "connect-pg-simple";

const PostgresSessionStore = connectPg(session);

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;
  
  constructor() {
    this.sessionStore = new PostgresSessionStore({
      pool: pool as any, // Type assertion to fix Pool compatibility issue
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
    const result = await db.select().from(realms);
    return result as unknown as Realm[];
  }

  async getRealmById(id: number): Promise<Realm | undefined> {
    const [realm] = await db.select().from(realms).where(eq(realms.id, id));
    return realm;
  }

  async initializeRealms(): Promise<void> {
    try {
      // Check if realms table is empty
      const existingRealms = await db.select().from(realms);
      if ((existingRealms as unknown as any[]).length > 0) {
        console.log('Realms already initialized, skipping');
        return;
      }
      
      // Add initial realms data using raw SQL to bypass column name issues
      // Type assertion to resolve the expected 0 arguments error
      await (pool.query as any)(`
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
  
  // Mission methods
  async getMissions(realmId: number): Promise<Mission[]> {
    const result = await db.select().from(missions).where(eq(missions.realmId, realmId));
    return result as unknown as Mission[];
  }

  async getMissionById(id: number): Promise<Mission | undefined> {
    const [mission] = await db.select().from(missions).where(eq(missions.id, id));
    return mission;
  }

  async createMission(missionData: Partial<Mission>): Promise<Mission> {
    const data = {
      title: missionData.title || '',
      description: missionData.description || '',
      imageUrl: missionData.imageUrl,
      realmId: missionData.realmId || 1,
      order: missionData.order || 1,
      content: missionData.content || {}
    };
    
    const [mission] = await db.insert(missions).values([data] as any).returning();
    return mission;
  }

  async updateMission(id: number, missionData: Partial<Mission>): Promise<Mission | undefined> {
    const mission = await this.getMissionById(id);
    if (!mission) return undefined;
    
    const [updatedMission] = await db
      .update(missions)
      .set(missionData)
      .where(eq(missions.id, id))
      .returning();
    
    return updatedMission;
  }

  // Badge methods
  async getBadges(): Promise<Badge[]> {
    const result = await db.select().from(badges);
    return result as unknown as Badge[];
  }

  async getBadgesByRealm(realmId: number): Promise<Badge[]> {
    const result = await db.select().from(badges).where(eq(badges.realmId, realmId));
    return result as unknown as Badge[];
  }

  async getBadgeById(id: number): Promise<Badge | undefined> {
    const [badge] = await db.select().from(badges).where(eq(badges.id, id));
    return badge;
  }

  async createBadge(badgeData: Partial<Badge>): Promise<Badge> {
    const data = {
      name: badgeData.name || '',
      description: badgeData.description || '',
      imageUrl: badgeData.imageUrl,
      realmId: badgeData.realmId
    };
    
    const [badge] = await db.insert(badges).values([data] as any).returning();
    return badge;
  }

  // User badge methods
  async getUserBadges(userId: string): Promise<UserBadge[]> {
    const user = await this.getUserByUserId(userId);
    if (!user) return [];
    
    const result = await db
      .select()
      .from(userBadges)
      .where(eq(userBadges.userId, user.id));
    return result as unknown as UserBadge[];
  }

  async awardBadgeToUser(userId: string, badgeId: number): Promise<UserBadge> {
    const user = await this.getUserByUserId(userId);
    if (!user) {
      throw new Error('User not found');
    }
    
    const badge = await this.getBadgeById(badgeId);
    if (!badge) {
      throw new Error('Badge not found');
    }
    
    // Insert the badge assignment
    const [userBadge] = await db
      .insert(userBadges)
      .values([{
        userId: user.id,
        badgeId: badge.id,
        earned: new Date()
      }] as any)
      .returning();
    
    // Update user rewards
    const rewards = (user.rewards as { badges: number[], tokens: number }) || { badges: [], tokens: 0 };
    const updatedRewards = {
      ...rewards,
      badges: [...(rewards.badges || []), badgeId]
    };
    
    await this.updateUser(userId, { rewards: updatedRewards });
    
    return userBadge;
  }
}

// Always use in-memory storage for frontend-only mode
console.log('Using in-memory storage (MemStorage) for frontend-only mode');
export const storage = new MemStorage();

// Initialize realms data
storage.initializeRealms().catch(err => {
  console.error('Failed to initialize realms:', err);
});