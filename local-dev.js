/**
 * Local Development Bootstrap Script
 * 
 * This script provides instructions for running the application locally
 * without any Replit dependencies.
 */

console.log(`
=====================================================
  LOCAL DEVELOPMENT SETUP INSTRUCTIONS
=====================================================

To run this application locally without Replit dependencies:

1. Clone the repository to your local machine

2. Create a local .env file with the following variables:
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   (Adjust credentials as needed for your local PostgreSQL setup)

3. Install dependencies:
   npm install

4. For local development, you'll need to run two processes:
   
   Terminal 1 (Backend API):
   npm run dev

   Terminal 2 (Frontend Development Server):
   cd client && npm run dev

5. The frontend will be available at:
   http://localhost:5173

6. The backend API will be available at:
   http://localhost:5000/api

=====================================================
  REMOVING REPLIT DEPENDENCIES
=====================================================

Before running locally, you should remove Replit-specific files and code:

1. Remove these files (they're only needed for Replit):
   - .replit
   - replit.nix
   - client/src/vite-config-helper.js
   - client/src/replit-patch.js
   - server/replit-config.ts

2. Modify client/src/main.tsx:
   - Remove import for vite-config-helper.js
   - Remove any Replit-specific code

3. For the vite configuration, create a local vite.config.js file:
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import path from "path";
   
   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "client", "src"),
         "@shared": path.resolve(__dirname, "shared"),
         "@assets": path.resolve(__dirname, "attached_assets"),
       },
     },
     server: {
       port: 5173,
       proxy: {
         "/api": {
           target: "http://localhost:5000",
           changeOrigin: true,
         },
       },
     },
   });
`);