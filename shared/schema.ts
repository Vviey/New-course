import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  username: text("username").notNull(),
  password: text("password").notNull(),
  email: text("email"),
  githubId: text("github_id"),
  avatarUrl: text("avatar_url"),
  progress: jsonb("progress").notNull(),
  rewards: jsonb("rewards").notNull()
});

export const insertUserSchema = createInsertSchema(users).pick({
  userId: true,
  username: true,
  password: true,
  email: true,
  githubId: true,
  avatarUrl: true,
  progress: true,
  rewards: true
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const realms = pgTable("realms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  moduleNumber: integer("module_number").notNull(),
  imageUrl: text("image_url").notNull(),
  isLocked: boolean("is_locked").notNull().default(true)
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