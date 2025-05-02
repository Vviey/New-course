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
  
  // Handle root path with static HTML
  app.get('/', (req, res, next) => {
    // Check for API requests
    if (req.accepts('html')) {
      console.log('[DEBUG] Serving static HTML for root path');
      // Return a static HTML page that doesn't rely on Vite
      return res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Asha's Journey - Bitcoin Education</title>
          <meta name="description" content="Learn about Bitcoin through an interactive, narrative-driven educational experience with African cultural influences.">
          <style>
            body { margin: 0; padding: 0; font-family: system-ui, sans-serif; background: #1E1814; color: #f5f5f5; }
            .loading { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
            .loading h1 { color: #FFC867; margin-bottom: 0.5rem; font-size: 2rem; }
            .loading p { color: #B9A595; margin-bottom: 2rem; }
            .spinner { width: 50px; height: 50px; border: 5px solid rgba(255, 200, 103, 0.2); border-radius: 50%; 
                      border-top-color: #FFC867; animation: spin 1s linear infinite; margin-bottom: 1rem; }
            .btn { background: #FFC867; color: #1E1814; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; 
                  font-weight: bold; cursor: pointer; text-decoration: none; display: inline-block; }
            .btn:hover { background: #E5B45D; }
            .btn-alt { background: transparent; color: #FFC867; border: 1px solid #FFC867; margin-left: 1rem; }
            .btn-alt:hover { background: rgba(255, 200, 103, 0.1); }
            @keyframes spin { to { transform: rotate(360deg); } }
          </style>
        </head>
        <body>
          <div id="root">
            <div class="loading">
              <div class="spinner"></div>
              <h1>Asha's Journey</h1>
              <p>Discover the story of money through an African perspective</p>
              <div>
                <a href="/direct" class="btn">Enter Journey</a>
                <a href="/home" class="btn btn-alt">Go to Dashboard</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `);
    }
    return next();
  });

  // Map page static HTML
  app.get('/map', (req, res, next) => {
    if (req.accepts('html')) {
      console.log('[DEBUG] Serving static HTML for map page');
      return res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Asha's Journey - Map</title>
          <meta name="description" content="Explore the map of Asha's Journey through the Realms of Money.">
          <style>
            body { margin: 0; padding: 0; font-family: system-ui, sans-serif; background: #1E1814; color: #f5f5f5; }
            .app { display: flex; flex-direction: column; min-height: 100vh; }
            header { background: #292420; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; }
            .logo { color: #FFC867; font-size: 1.5rem; font-weight: bold; text-decoration: none; }
            nav { display: flex; gap: 1.5rem; }
            nav a { color: #B9A595; text-decoration: none; font-weight: 500; transition: color 0.2s; }
            nav a:hover, nav a.active { color: #FFC867; }
            main { flex: 1; padding: 2rem; max-width: 1200px; margin: 0 auto; width: 100%; }
            .map-title { text-align: center; margin-bottom: 2rem; }
            .map-title h1 { color: #FFC867; font-size: 2.5rem; margin-bottom: 0.5rem; }
            .map-title p { color: #B9A595; max-width: 600px; margin: 0 auto; font-size: 1.1rem; }
            .map-container { background: #292420; border-radius: 1rem; padding: 2rem; position: relative; min-height: 500px; }
            .journey-path { position: relative; max-width: 800px; margin: 0 auto; padding: 2rem 0; }
            .path-line { position: absolute; top: 0; bottom: 0; left: 50%; width: 6px; background: #3A3530; border-radius: 3px; transform: translateX(-50%); z-index: 1; }
            .realm-stop { position: relative; margin-bottom: 4rem; display: flex; align-items: center; }
            .realm-stop:nth-child(odd) { flex-direction: row; }
            .realm-stop:nth-child(even) { flex-direction: row-reverse; }
            .realm-dot { width: 24px; height: 24px; border-radius: 50%; background: #FFC867; border: 4px solid #292420; z-index: 2; position: absolute; left: 50%; transform: translateX(-50%); }
            .realm-content { width: 45%; background: #3A3530; padding: 1.5rem; border-radius: 0.75rem; }
            .realm-content h3 { color: #FFC867; margin-top: 0; margin-bottom: 0.5rem; }
            .realm-content p { color: #B9A595; margin-bottom: 1rem; font-size: 0.9rem; }
            .realm-link { display: inline-block; color: #FFC867; text-decoration: none; font-size: 0.9rem; font-weight: 500; padding: 0.5rem 1rem; background: rgba(255, 200, 103, 0.1); border-radius: 0.5rem; }
            .realm-link:hover { background: rgba(255, 200, 103, 0.2); }
            footer { background: #292420; padding: 2rem; text-align: center; color: #B9A595; font-size: 0.9rem; }
          </style>
        </head>
        <body>
          <div class="app">
            <header>
              <a href="/home" class="logo">Asha's Journey</a>
              <nav>
                <a href="/home">Home</a>
                <a href="/map" class="active">Map</a>
                <a href="/journey">Progress</a>
                <a href="/badges">Badges</a>
              </nav>
            </header>
            <main>
              <div class="map-title">
                <h1>Journey Map</h1>
                <p>Follow Asha's path through the seven realms of monetary knowledge</p>
              </div>
              <div class="map-container">
                <div class="journey-path">
                  <div class="path-line"></div>
                  
                  <div class="realm-stop">
                    <div class="realm-dot"></div>
                    <div class="realm-content">
                      <h3>1. Realm of Origins</h3>
                      <p>Begin your journey by discovering the history of money, from early trade systems to the first currencies.</p>
                      <a href="/realm/1" class="realm-link">Start Realm</a>
                    </div>
                  </div>
                  
                  <div class="realm-stop">
                    <div class="realm-dot"></div>
                    <div class="realm-content">
                      <h3>2. The Central Citadel</h3>
                      <p>Explore how governments and central banks control modern monetary systems.</p>
                      <a href="/realm/2" class="realm-link">Continue Journey</a>
                    </div>
                  </div>
                  
                  <div class="realm-stop">
                    <div class="realm-dot"></div>
                    <div class="realm-content">
                      <h3>3. The Forest of Sparks</h3>
                      <p>Witness the birth of Bitcoin and understand the vision of Satoshi Nakamoto.</p>
                      <a href="/realm/3" class="realm-link">Continue Journey</a>
                    </div>
                  </div>
                  
                  <div class="realm-stop">
                    <div class="realm-dot"></div>
                    <div class="realm-content">
                      <h3>4. The Mountain Forge</h3>
                      <p>Learn about Bitcoin mining and how the blockchain network achieves consensus.</p>
                      <a href="/realm/4" class="realm-link">Continue Journey</a>
                    </div>
                  </div>
                  
                  <div class="realm-stop">
                    <div class="realm-dot"></div>
                    <div class="realm-content">
                      <h3>5. The Council of Forks</h3>
                      <p>Understand how Bitcoin governance works and how protocol changes are implemented.</p>
                      <a href="/realm/5" class="realm-link">Continue Journey</a>
                    </div>
                  </div>
                  
                  <div class="realm-stop">
                    <div class="realm-dot"></div>
                    <div class="realm-content">
                      <h3>6. The Ubuntu Village</h3>
                      <p>Discover real-world applications of Bitcoin in African communities and economies.</p>
                      <a href="/realm/6" class="realm-link">Continue Journey</a>
                    </div>
                  </div>
                  
                  <div class="realm-stop">
                    <div class="realm-dot"></div>
                    <div class="realm-content">
                      <h3>7. The Summit of Knowledge</h3>
                      <p>Test your comprehensive understanding of Bitcoin and monetary systems.</p>
                      <a href="/realm/7" class="realm-link">Final Challenge</a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer>
              <p>Asha's Journey Through the Realms of Money - A gamified Bitcoin education platform</p>
            </footer>
          </div>
        </body>
        </html>
      `);
    }
    return next();
  });

  // Home page static HTML
  app.get('/home', (req, res, next) => {
    if (req.accepts('html')) {
      console.log('[DEBUG] Serving static HTML for home page');
      return res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Asha's Journey - Home</title>
          <meta name="description" content="Learn about Bitcoin through an interactive, narrative-driven educational experience with African cultural influences.">
          <style>
            body { margin: 0; padding: 0; font-family: system-ui, sans-serif; background: #1E1814; color: #f5f5f5; }
            .app { display: flex; flex-direction: column; min-height: 100vh; }
            header { background: #292420; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; }
            .logo { color: #FFC867; font-size: 1.5rem; font-weight: bold; text-decoration: none; }
            nav { display: flex; gap: 1.5rem; }
            nav a { color: #B9A595; text-decoration: none; font-weight: 500; transition: color 0.2s; }
            nav a:hover { color: #FFC867; }
            main { flex: 1; padding: 2rem; max-width: 1200px; margin: 0 auto; width: 100%; }
            .hero { margin-bottom: 3rem; text-align: center; }
            .hero h1 { color: #FFC867; font-size: 2.5rem; margin-bottom: 1rem; }
            .hero p { color: #B9A595; max-width: 600px; margin: 0 auto 2rem; font-size: 1.1rem; line-height: 1.5; }
            .realms { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem; }
            .realm-card { background: #292420; border-radius: 0.75rem; overflow: hidden; transition: transform 0.2s; }
            .realm-card:hover { transform: translateY(-5px); }
            .realm-img { height: 160px; background: #3A3530; display: flex; align-items: center; justify-content: center; }
            .realm-img svg { width: 64px; height: 64px; color: #FFC867; }
            .realm-content { padding: 1.5rem; }
            .realm-content h3 { color: #FFC867; margin-top: 0; margin-bottom: 0.5rem; }
            .realm-content p { color: #B9A595; margin-bottom: 1rem; font-size: 0.9rem; }
            .realm-link { display: inline-block; color: #FFC867; text-decoration: none; font-size: 0.9rem; font-weight: 500; }
            .realm-link:hover { text-decoration: underline; }
            footer { background: #292420; padding: 2rem; text-align: center; color: #B9A595; font-size: 0.9rem; }
            .btn { background: #FFC867; color: #1E1814; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; 
                  font-weight: bold; cursor: pointer; text-decoration: none; display: inline-block; }
            .btn:hover { background: #E5B45D; }
          </style>
        </head>
        <body>
          <div class="app">
            <header>
              <a href="/home" class="logo">Asha's Journey</a>
              <nav>
                <a href="/home">Home</a>
                <a href="/map">Map</a>
                <a href="/journey">Progress</a>
                <a href="/badges">Badges</a>
              </nav>
            </header>
            <main>
              <div class="hero">
                <h1>Begin Your Journey Through the Realms of Money</h1>
                <p>Follow Asha's adventure as she explores the history and future of money through an African perspective. Complete missions, earn badges, and master the world of Bitcoin.</p>
                <a href="/map" class="btn">View Journey Map</a>
              </div>
              <div class="realms">
                <div class="realm-card">
                  <div class="realm-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                  </div>
                  <div class="realm-content">
                    <h3>Realm of Origins</h3>
                    <p>Learn about the earliest forms of money and exchange systems that shaped human civilization.</p>
                    <a href="/realm/1" class="realm-link">Enter Realm →</a>
                  </div>
                </div>
                <div class="realm-card">
                  <div class="realm-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3-5 3V6a2 2 0 0 1 2-2z"/>
                    </svg>
                  </div>
                  <div class="realm-content">
                    <h3>The Central Citadel</h3>
                    <p>Discover how governments control the monetary system and the evolution of central banking.</p>
                    <a href="/realm/2" class="realm-link">Enter Realm →</a>
                  </div>
                </div>
                <div class="realm-card">
                  <div class="realm-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13z"/>
                      <circle cx="12" cy="8" r="2"/>
                    </svg>
                  </div>
                  <div class="realm-content">
                    <h3>The Forest of Sparks</h3>
                    <p>Explore Bitcoin's birth and early development through the vision of Satoshi Nakamoto.</p>
                    <a href="/realm/3" class="realm-link">Enter Realm →</a>
                  </div>
                </div>
                <div class="realm-card">
                  <div class="realm-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 12h4l3-9 3 9h4l-6 7z"/>
                    </svg>
                  </div>
                  <div class="realm-content">
                    <h3>The Mountain Forge</h3>
                    <p>Learn about Bitcoin mining and how network consensus maintains the blockchain.</p>
                    <a href="/realm/4" class="realm-link">Enter Realm →</a>
                  </div>
                </div>
                <div class="realm-card">
                  <div class="realm-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v4M12 16h.01"/>
                    </svg>
                  </div>
                  <div class="realm-content">
                    <h3>The Council of Forks</h3>
                    <p>Understand Bitcoin governance and how protocol changes are implemented.</p>
                    <a href="/realm/5" class="realm-link">Enter Realm →</a>
                  </div>
                </div>
                <div class="realm-card">
                  <div class="realm-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 3a9 9 0 1 0 9 9M12 3v6M12 9h6"/>
                    </svg>
                  </div>
                  <div class="realm-content">
                    <h3>The Ubuntu Village</h3>
                    <p>Discover practical applications of Bitcoin in African communities and economies.</p>
                    <a href="/realm/6" class="realm-link">Enter Realm →</a>
                  </div>
                </div>
                <div class="realm-card">
                  <div class="realm-img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div class="realm-content">
                    <h3>The Summit of Knowledge</h3>
                    <p>Test your comprehensive understanding of Bitcoin and monetary systems.</p>
                    <a href="/realm/7" class="realm-link">Enter Realm →</a>
                  </div>
                </div>
              </div>
            </main>
            <footer>
              <p>Asha's Journey Through the Realms of Money - A gamified Bitcoin education platform</p>
            </footer>
          </div>
        </body>
        </html>
      `);
    }
    return next();
  });

  // Realm 1 page (dynamic routing not working due to Vite issues)
  app.get('/realm/1', (req, res, next) => {
    if (req.accepts('html')) {
      console.log('[DEBUG] Serving static HTML for Realm 1');
      return res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Realm of Origins - Asha's Journey</title>
          <meta name="description" content="Begin your journey in the Realm of Origins and learn about the foundations of money.">
          <style>
            body { margin: 0; padding: 0; font-family: system-ui, sans-serif; background: #1E1814; color: #f5f5f5; }
            .app { display: flex; flex-direction: column; min-height: 100vh; }
            header { background: #292420; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; }
            .logo { color: #FFC867; font-size: 1.5rem; font-weight: bold; text-decoration: none; }
            nav { display: flex; gap: 1.5rem; }
            nav a { color: #B9A595; text-decoration: none; font-weight: 500; transition: color 0.2s; }
            nav a:hover { color: #FFC867; }
            main { flex: 1; padding: 2rem; max-width: 1200px; margin: 0 auto; width: 100%; }
            .realm-header { display: flex; align-items: center; margin-bottom: 3rem; }
            .realm-icon { width: 80px; height: 80px; background: #3A3530; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 2rem; }
            .realm-icon svg { width: 40px; height: 40px; color: #FFC867; }
            .realm-title h1 { color: #FFC867; font-size: 2.5rem; margin: 0 0 0.5rem 0; }
            .realm-title p { color: #B9A595; font-size: 1.1rem; margin: 0; }
            .realm-content { background: #292420; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; }
            .realm-description { line-height: 1.6; color: #D1C7BC; font-size: 1.1rem; margin-bottom: 2rem; }
            .realm-description p { margin-bottom: 1.5rem; }
            .missions-title { color: #FFC867; font-size: 1.8rem; margin: 0 0 1.5rem 0; }
            .missions-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
            .mission-card { background: #3A3530; border-radius: 0.75rem; overflow: hidden; transition: transform 0.2s; }
            .mission-card:hover { transform: translateY(-5px); }
            .mission-img { height: 120px; background: #292420; display: flex; align-items: center; justify-content: center; }
            .mission-img svg { width: 40px; height: 40px; color: #FFC867; }
            .mission-content { padding: 1.5rem; }
            .mission-content h3 { color: #FFC867; margin-top: 0; margin-bottom: 0.5rem; }
            .mission-content p { color: #B9A595; margin-bottom: 1rem; font-size: 0.9rem; }
            .mission-tag { display: inline-block; padding: 0.25rem 0.75rem; background: rgba(255, 200, 103, 0.1); color: #FFC867; 
                        border-radius: 1rem; font-size: 0.8rem; margin-bottom: 1rem; }
            .mission-link { display: inline-block; color: #FFC867; text-decoration: none; font-size: 0.9rem; font-weight: 500; padding: 0.5rem 1rem; 
                         background: rgba(255, 200, 103, 0.1); border-radius: 0.5rem; }
            .mission-link:hover { background: rgba(255, 200, 103, 0.2); }
            footer { background: #292420; padding: 2rem; text-align: center; color: #B9A595; font-size: 0.9rem; }
          </style>
        </head>
        <body>
          <div class="app">
            <header>
              <a href="/home" class="logo">Asha's Journey</a>
              <nav>
                <a href="/home">Home</a>
                <a href="/map">Map</a>
                <a href="/journey">Progress</a>
                <a href="/badges">Badges</a>
              </nav>
            </header>
            <main>
              <div class="realm-header">
                <div class="realm-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2v20M2 12h20"/>
                  </svg>
                </div>
                <div class="realm-title">
                  <h1>Realm of Origins</h1>
                  <p>The foundations of money and trade throughout history</p>
                </div>
              </div>
              
              <div class="realm-content">
                <div class="realm-description">
                  <p>Welcome to the first step of your journey with Asha! In the Realm of Origins, you'll explore the very beginnings of money and exchange systems that shaped human civilization.</p>
                  <p>Before coins, bills, or digital currencies existed, people used various objects and systems to trade goods and services. Through this realm, you'll discover how shells, beads, and other objects became the first forms of money in Africa and around the world.</p>
                  <p>Join Asha as she learns from her grandmother Odu about the foundations of value, trade, and the properties that make something suitable to be used as money.</p>
                </div>
                
                <h2 class="missions-title">Realm Missions</h2>
                <div class="missions-list">
                  <div class="mission-card">
                    <div class="mission-img">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2v20M2 12h20"/>
                      </svg>
                    </div>
                    <div class="mission-content">
                      <span class="mission-tag">Story</span>
                      <h3>The Dawn of Exchange</h3>
                      <p>Learn about the earliest forms of trade and barter through Asha's conversation with her grandmother.</p>
                      <a href="/realm/1/mission/101" class="mission-link">Start Mission</a>
                    </div>
                  </div>
                  
                  <div class="mission-card">
                    <div class="mission-img">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 11A8 8 0 0 0 4.93 8M4 13a8 8 0 0 0 15.16 2"/>
                        <path d="M18 2v6h-6M6 22v-6h6"/>
                      </svg>
                    </div>
                    <div class="mission-content">
                      <span class="mission-tag">Interactive</span>
                      <h3>The Cowrie Shell Market</h3>
                      <p>Explore how shells became an early form of money in Africa through an interactive simulation.</p>
                      <a href="/realm/1/mission/102" class="mission-link">Start Mission</a>
                    </div>
                  </div>
                  
                  <div class="mission-card">
                    <div class="mission-img">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 11l3 3 8-8"/>
                        <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"/>
                      </svg>
                    </div>
                    <div class="mission-content">
                      <span class="mission-tag">Quiz</span>
                      <h3>Properties of Good Money</h3>
                      <p>Test your knowledge about what makes something suitable to be used as money.</p>
                      <a href="/realm/1/mission/103" class="mission-link">Start Mission</a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer>
              <p>Asha's Journey Through the Realms of Money - A gamified Bitcoin education platform</p>
            </footer>
          </div>
        </body>
        </html>
      `);
    }
    return next();
  });

  // Realm 1 Mission 1 (The Dawn of Exchange)
  app.get('/realm/1/mission/101', (req, res, next) => {
    if (req.accepts('html')) {
      console.log('[DEBUG] Serving static HTML for Realm 1, Mission 1');
      return res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>The Dawn of Exchange - Asha's Journey</title>
          <meta name="description" content="Learn about the earliest forms of trade and barter through Asha's conversation with her grandmother.">
          <style>
            body { margin: 0; padding: 0; font-family: system-ui, sans-serif; background: #1E1814; color: #f5f5f5; }
            .app { display: flex; flex-direction: column; min-height: 100vh; }
            header { background: #292420; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; }
            .logo { color: #FFC867; font-size: 1.5rem; font-weight: bold; text-decoration: none; }
            nav { display: flex; gap: 1.5rem; }
            nav a { color: #B9A595; text-decoration: none; font-weight: 500; transition: color 0.2s; }
            nav a:hover { color: #FFC867; }
            main { flex: 1; padding: 2rem; max-width: 900px; margin: 0 auto; width: 100%; }
            .mission-header { display: flex; align-items: center; margin-bottom: 2rem; }
            .back-link { color: #B9A595; text-decoration: none; display: flex; align-items: center; margin-right: 2rem; font-size: 0.9rem; }
            .back-link:hover { color: #FFC867; }
            .back-icon { margin-right: 0.5rem; }
            .mission-tag { display: inline-block; padding: 0.25rem 0.75rem; background: rgba(255, 200, 103, 0.1); color: #FFC867; 
                        border-radius: 1rem; font-size: 0.8rem; margin-left: auto; }
            .mission-content { background: #292420; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; }
            .mission-title { color: #FFC867; font-size: 2rem; margin-top: 0; margin-bottom: 1rem; }
            .mission-intro { color: #D1C7BC; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }
            .story-container { background: #3A3530; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem; }
            .story-scene { margin-bottom: 2rem; }
            .story-heading { color: #FFC867; font-size: 1.3rem; margin: 0 0 1rem 0; }
            .character { display: flex; margin-bottom: 1.5rem; }
            .character-avatar { width: 50px; height: 50px; border-radius: 50%; background: #292420; margin-right: 1rem; display: flex; align-items: center; justify-content: center; }
            .character-avatar svg { width: 28px; height: 28px; color: #FFC867; }
            .character-speech { flex: 1; }
            .character-name { color: #FFC867; font-weight: bold; margin-bottom: 0.5rem; }
            .character-text { color: #E5DDD1; line-height: 1.5; }
            .story-image { height: 200px; background: #292420; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; border-radius: 0.5rem; }
            .story-image svg { width: 64px; height: 64px; color: #FFC867; }
            .story-description { color: #D1C7BC; line-height: 1.5; margin-bottom: 1.5rem; }
            .navigation { display: flex; justify-content: space-between; margin-top: 2rem; }
            .nav-button { background: rgba(255, 200, 103, 0.1); color: #FFC867; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; 
                        font-weight: 500; cursor: pointer; text-decoration: none; font-size: 0.9rem; }
            .nav-button:hover { background: rgba(255, 200, 103, 0.2); }
            .nav-button.primary { background: #FFC867; color: #1E1814; }
            .nav-button.primary:hover { background: #E5B45D; }
            footer { background: #292420; padding: 2rem; text-align: center; color: #B9A595; font-size: 0.9rem; }
          </style>
        </head>
        <body>
          <div class="app">
            <header>
              <a href="/home" class="logo">Asha's Journey</a>
              <nav>
                <a href="/home">Home</a>
                <a href="/map">Map</a>
                <a href="/journey">Progress</a>
                <a href="/badges">Badges</a>
              </nav>
            </header>
            <main>
              <div class="mission-header">
                <a href="/realm/1" class="back-link">
                  <span class="back-icon">←</span>
                  Back to Realm of Origins
                </a>
                <span class="mission-tag">Story Mission</span>
              </div>
              
              <div class="mission-content">
                <h1 class="mission-title">The Dawn of Exchange</h1>
                <p class="mission-intro">Join Asha as she learns from her grandmother Odu about the earliest forms of trade and the origins of money in ancient African societies.</p>
                
                <div class="story-container">
                  <div class="story-scene">
                    <h2 class="story-heading">Scene 1: The Village Market</h2>
                    <div class="story-image">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                    </div>
                    <p class="story-description">The warm African sun casts long shadows across the village market as Asha follows her grandmother Odu through the bustling stalls. Colorful fabrics, handcrafted pottery, and fresh produce create a vibrant tapestry around them.</p>
                    
                    <div class="character">
                      <div class="character-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div class="character-speech">
                        <div class="character-name">Asha</div>
                        <div class="character-text">Grandmother, why is everyone exchanging different things? Some are giving cloth for food, others beads for tools. It seems so... complicated.</div>
                      </div>
                    </div>
                    
                    <div class="character">
                      <div class="character-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div class="character-speech">
                        <div class="character-name">Odu</div>
                        <div class="character-text">Ah, Asha, you're witnessing one of humanity's oldest practices - the art of barter. Before money existed, this is how our ancestors traded. What you're seeing is the foundation of all economies.</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="story-scene">
                    <h2 class="story-heading">Scene 2: The Barter Problem</h2>
                    <div class="story-image">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 11A8 8 0 0 0 4.93 8M4 13a8 8 0 0 0 15.16 2"/>
                        <path d="M18 2v6h-6M6 22v-6h6"/>
                      </svg>
                    </div>
                    <p class="story-description">Odu guides Asha to a stall where a woman is trying to trade a large clay pot for some grain. The grain seller seems hesitant, examining the pot with uncertainty.</p>
                    
                    <div class="character">
                      <div class="character-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div class="character-speech">
                        <div class="character-name">Odu</div>
                        <div class="character-text">Do you see the challenge here? The grain seller needs to decide if this pot is worth his grain. But what if he doesn't need a pot? This is the problem of barter - the double coincidence of wants.</div>
                      </div>
                    </div>
                    
                    <div class="character">
                      <div class="character-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div class="character-speech">
                        <div class="character-name">Asha</div>
                        <div class="character-text">Double coincidence of wants? What does that mean?</div>
                      </div>
                    </div>
                    
                    <div class="character">
                      <div class="character-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div class="character-speech">
                        <div class="character-name">Odu</div>
                        <div class="character-text">It means both parties must want exactly what the other has to offer. The pot maker needs grain, but the grain seller may not need a pot. This makes trade difficult and inefficient.</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="story-scene">
                    <h2 class="story-heading">Scene 3: The First Money</h2>
                    <div class="story-image">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    </div>
                    <p class="story-description">Odu leads Asha to another part of the market where a woman is trading small, polished cowrie shells for various goods. Everyone seems eager to accept these shells in exchange.</p>
                    
                    <div class="character">
                      <div class="character-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div class="character-speech">
                        <div class="character-name">Asha</div>
                        <div class="character-text">Everyone wants those shells! But they don't seem useful for anything practical...</div>
                      </div>
                    </div>
                    
                    <div class="character">
                      <div class="character-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div class="character-speech">
                        <div class="character-name">Odu</div>
                        <div class="character-text">That's exactly the point! These cowrie shells represent one of humanity's earliest forms of money. They're accepted not because they're useful themselves, but because everyone agrees they have value for trading.</div>
                      </div>
                    </div>
                    
                    <div class="character">
                      <div class="character-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div class="character-speech">
                        <div class="character-name">Odu</div>
                        <div class="character-text">These shells are scarce, durable, portable, and hard to fake. In many parts of Africa, cowrie shells were used as money for hundreds of years. They solved the double coincidence of wants problem we just saw.</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="navigation">
                  <a href="/realm/1" class="nav-button">Back to Realm</a>
                  <a href="/realm/1/mission/102" class="nav-button primary">Next Mission</a>
                </div>
              </div>
            </main>
            <footer>
              <p>Asha's Journey Through the Realms of Money - A gamified Bitcoin education platform</p>
            </footer>
          </div>
        </body>
        </html>
      `);
    }
    return next();
  });
  
  // Direct HTML entry point to bypass Vite host issues
  app.get('/direct', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Asha's Journey - Bitcoin Education</title>
        <meta name="description" content="Learn about Bitcoin through an interactive, narrative-driven educational experience with African cultural influences.">
        <style>
          body { margin: 0; padding: 0; font-family: system-ui, sans-serif; background: #1E1814; color: #f5f5f5; }
          .loading { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
          .loading h1 { color: #FFC867; margin-bottom: 0.5rem; }
          .loading p { color: #B9A595; }
          .spinner { width: 50px; height: 50px; border: 5px solid rgba(255, 200, 103, 0.2); border-radius: 50%; 
                     border-top-color: #FFC867; animation: spin 1s linear infinite; margin-bottom: 1rem; }
          @keyframes spin { to { transform: rotate(360deg); } }
        </style>
        <script>
          // Load the app directly from the client bundle URL to avoid host restrictions
          function loadApp() {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = '/src/main.tsx';
            document.body.appendChild(script);
            console.log('Loading application directly...');
          }
          
          // Auto-redirect after a short delay
          setTimeout(() => {
            window.location.href = '/';
          }, 1500);
        </script>
      </head>
      <body>
        <div id="root">
          <div class="loading">
            <div class="spinner"></div>
            <h1>Asha's Journey</h1>
            <p>Loading the adventure...</p>
          </div>
        </div>
        <script>loadApp();</script>
      </body>
      </html>
    `);
  });

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
