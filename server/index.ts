import express from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";
import path from "path";

// Print available environment variables (not their values)
console.log('Available environment variables:', {
  PGUSER: process.env.PGUSER ? 'Set' : 'Not set',
  PGDATABASE: process.env.PGDATABASE ? 'Set' : 'Not set',
  PGPASSWORD: process.env.PGPASSWORD ? 'Set' : 'Not set',
  PGHOST: process.env.PGHOST ? 'Set' : 'Not set',
  PGPORT: process.env.PGPORT ? 'Set' : 'Not set',
  DATABASE_URL: process.env.DATABASE_URL ? 'Set' : 'Not set'
});

const app = express();
// Explicitly set up CORS with very permissive settings
app.use(cors({
  origin: '*', // Allow all origins
  credentials: true, // Allow credentials (cookies, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow essential headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static assets from public directory, but don't serve index.html
console.log('[DEBUG] Serving static files from:', path.resolve('./public'));
app.use(express.static(path.resolve('./public'), {
  index: false // Disable automatic serving of index.html
}));

(async () => {
  // Register routes with mock data
  const server = await registerRoutes(app);
  
  // Handle all non-API routes by letting Vite serve the React application
  app.use('*', (req, res, next) => {
    // Skip API routes
    if (req.originalUrl.startsWith('/api')) {
      return next();
    }
    
    // Log the non-API route being handled
    console.log('[DEBUG] Forwarding to React app:', req.originalUrl);
    
    // Let Vite handle all non-API routes
    return next();
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  const port = 5000;
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
