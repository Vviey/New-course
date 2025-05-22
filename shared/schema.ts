import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull().unique(),
  username: text("username").notNull(),
  password: text("password").notNull(),
  email: text("email"),
  emailVerified: boolean("emailVerified").default(false),
  verificationCode: text("verificationCode"),
  verificationCodeExpiry: timestamp("verificationCodeExpiry"),
  resetToken: text("resetToken"),
  resetTokenExpiry: timestamp("resetTokenExpiry"),
  lastLogin: timestamp("lastLogin"),
  progress: jsonb("progress").notNull(),
  rewards: jsonb("rewards").notNull()
});

export const insertUserSchema = createInsertSchema(users).pick({
  userId: true,
  username: true,
  password: true,
  email: true,
  emailVerified: true,
  verificationCode: true,
  verificationCodeExpiry: true,
  resetToken: true,
  resetTokenExpiry: true,
  lastLogin: true,
  progress: true,
  rewards: true
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const realms = pgTable("realms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  moduleNumber: integer("moduleNumber").notNull(),
  imageUrl: text("imageUrl"),
  isLocked: boolean("isLocked")
});

export const insertRealmSchema = createInsertSchema(realms).pick({
  name: true,
  description: true,
  moduleNumber: true,
  imageUrl: true,
  isLocked: true
});

export type InsertRealm = z.infer<typeof insertRealmSchema>;
export type Realm = typeof realms.$inferSelect;

export const missions = pgTable("missions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("imageUrl"),
  realmId: integer("realmId").notNull(),
  order: integer("order").notNull(),
  content: jsonb("content").notNull()
});

export const insertMissionSchema = createInsertSchema(missions).pick({
  title: true,
  description: true,
  imageUrl: true,
  realmId: true,
  order: true,
  content: true
});

export type InsertMission = z.infer<typeof insertMissionSchema>;
export type Mission = typeof missions.$inferSelect;

export const badges = pgTable("badges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("imageUrl"),
  realmId: integer("realmId")
});

export const insertBadgeSchema = createInsertSchema(badges).pick({
  name: true,
  description: true,
  imageUrl: true,
  realmId: true
});

export type InsertBadge = z.infer<typeof insertBadgeSchema>;
export type Badge = typeof badges.$inferSelect;

export const userBadges = pgTable("user_badges", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  badgeId: integer("badge_id").notNull(),
  earned: timestamp("earned").notNull()
});

export const insertUserBadgeSchema = createInsertSchema(userBadges).pick({
  userId: true,
  badgeId: true,
  earned: true
});

export type InsertUserBadge = z.infer<typeof insertUserBadgeSchema>;
export type UserBadge = typeof userBadges.$inferSelect;