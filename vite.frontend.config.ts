import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cartographer from "@replit/vite-plugin-cartographer";
import runtimeErrorModal from "@replit/vite-plugin-runtime-error-modal";
import shadowTheme from "@replit/vite-plugin-shadcn-theme-json";
import { VitePluginOptions as CartographerOptions } from "@replit/vite-plugin-cartographer";
import { fileURLToPath } from "url";
import path from "path";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cartographerOptions: CartographerOptions = {
  // Expose client folder via @
  mapClientSrc: {
    from: "./client/src",
    to: "@",
  },
  // Expose assets via @assets
  mapAssets: {
    from: "./attached_assets",
    to: "@assets",
  },
  // Map shared folder
  mapShared: {
    from: "./shared",
    to: "@shared",
  },
};

export default defineConfig({
  plugins: [
    react(),
    cartographer(cartographerOptions),
    runtimeErrorModal(),
    shadowTheme(),
  ],
  root: "./client",
  publicDir: "../public",
  server: {
    host: "0.0.0.0", // Make server accessible externally
    strictPort: false,
    hmr: {
      clientPort: 443, // Use HTTPS port for WebSocket in Replit
    },
    allowedHosts: [
      'all', 
      '.replit.dev',
      'a8c171c4-768d-425a-b69b-4cd1ad4c1947-00-icw0rst19wue.kirk.replit.dev'
    ], // Allow any host to access the development server
  },
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});