import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import runtimeErrorModal from "@replit/vite-plugin-runtime-error-modal";
import shadowTheme from "@replit/vite-plugin-shadcn-theme-json";
import { fileURLToPath } from "url";
import path from "path";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import cartographer dynamically to handle ESM/CJS compatibility issues
const cartographerPlugin = () => {
  try {
    // Try to import with named export
    const { cartographer } = require("@replit/vite-plugin-cartographer");
    return cartographer({
      mapClientSrc: { from: "./client/src", to: "@" },
      mapAssets: { from: "./attached_assets", to: "@assets" },
      mapShared: { from: "./shared", to: "@shared" },
    });
  } catch (e) {
    console.warn("Failed to load cartographer:", e);
    return [];
  }
};

export default defineConfig({
  plugins: [
    react(),
    cartographerPlugin(),
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
    allowedHosts: true, // Allow any host to access the development server
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