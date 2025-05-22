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
    const { cartographer } = require("@replit/vite-plugin-cartographer");
    return cartographer({
      mapClientSrc: { from: "./client/src", to: "@" },
      mapAssets: { from: "./attached_assets", to: "@assets" },
      mapShared: { from: "./shared", to: "@shared" },
    });
  } catch (e) {
    console.warn("Failed to load cartographer plugin:", e);
    return [];
  }
};

export default defineConfig({
  plugins: [react(), cartographerPlugin(), runtimeErrorModal(), shadowTheme()],
  root: "./client",
  publicDir: "../public",
  server: {
    port: 5173, // ✅ Explicit dev port to avoid "undefined" in WebSocket
    host: "0.0.0.0", // ✅ Accessible from any network (e.g. Replit)
    strictPort: true, // ✅ Use the port strictly to avoid dynamic port issues
    hmr: {
      protocol: "ws", // ✅ Explicit protocol to prevent fallback mismatch
      host: "localhost", // ✅ Use local dev host (or your container's IP if Docker)
      port: 5173, // ✅ Ensure WebSocket URL is built correctly
    },
    allowedHosts: ["all"], // ✅ Allow all hosts to connect (if needed externally)
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
