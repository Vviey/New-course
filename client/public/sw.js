// Service Worker for Bitcoin Quest
const CACHE_NAME = 'bitcoin-quest-v1';

// Resources to cache immediately on install
const PRECACHE_RESOURCES = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/assets/index.css',
  '/assets/index.js',
  '/assets/polyfills.js',
  '/assets/vendor.js',
  '/realms/origins.jpg',
  '/realms/forest.jpg',
  '/realms/citadel.jpg',
  '/realms/forks.jpg',
  '/realms/ubuntu.jpg',
  '/asha-character.png'
];

// Content resources to cache on first use
const CONTENT_RESOURCES = [
  // Missions data
  '/api/content/realms',
  '/api/content/missions',
  // Other static assets
  '/missions/barter-systems.svg',
  '/missions/indigenous-currencies.svg',
  '/missions/colonial-disruption.svg',
  '/missions/fiat-currency.svg',
  '/missions/money-evolution.svg',
  '/missions/value-beyond-money.svg',
  '/badges/money-historian.svg',
  '/badges/crypto-defender.svg',
  '/badges/bitcoin-beginner.svg',
  '/badges/wallet-wizard.svg',
  '/badges/transaction-expert.svg',
  '/badges/network-guardian.svg',
  '/badges/bitcoin-guardian.svg',
  '/badges/decentralization-defender.svg',
  '/badges/bitcoin-ambassador.svg'
];

// Install event - cache core resources
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Pre-caching app shell and core resources');
        return cache.addAll(PRECACHE_RESOURCES);
      })
      .then(() => {
        console.log('[Service Worker] Installation complete');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Pre-cache error:', error);
      })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => {
            return cacheName !== CACHE_NAME;
          }).map(cacheName => {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
        );
      })
      .then(() => {
        console.log('[Service Worker] Now active, controlling clients');
        return self.clients.claim();
      })
  );
});

// Helper function to determine if a request is for an API route
const isApiRoute = url => {
  const urlObj = new URL(url);
  return urlObj.pathname.startsWith('/api/') && 
         !urlObj.pathname.startsWith('/api/content/'); // Exclude content API routes
};

// Helper function to determine if a request should be cached
const shouldCache = url => {
  // Check if it's a request we specifically want to cache
  const urlObj = new URL(url);
  
  // Always cache content API responses
  if (urlObj.pathname.startsWith('/api/content/')) {
    return true;
  }
  
  // Check for static resources we want to cache (including late content resources)
  const resourcePath = urlObj.pathname;
  return CONTENT_RESOURCES.some(path => resourcePath.includes(path)) ||
         resourcePath.includes('.jpg') || 
         resourcePath.includes('.png') || 
         resourcePath.includes('.svg') ||
         resourcePath.includes('.json') ||
         resourcePath.includes('/assets/');
};

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip non-cacheable API routes (those that change frequently)
  if (isApiRoute(event.request.url)) {
    return;
  }
  
  // Handle the request with appropriate strategy
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached response if available
        if (cachedResponse) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              console.log('[Service Worker] Serving from network (no cache):', event.request.url);
              return response;
            }
            
            // Clone the response - one to return, one to cache
            const responseToCache = response.clone();
            
            // Cache the response if it's a resource we want to cache
            if (shouldCache(event.request.url)) {
              caches.open(CACHE_NAME)
                .then(cache => {
                  console.log('[Service Worker] Caching new resource:', event.request.url);
                  cache.put(event.request, responseToCache);
                });
            }
            
            console.log('[Service Worker] Serving from network:', event.request.url);
            return response;
          })
          .catch(error => {
            console.error('[Service Worker] Fetch failed:', error);
            // If fetch fails, return offline fallback page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            
            // Otherwise just propagate the error
            throw error;
          });
      })
  );
});

// Handle background syncing for offline content updates
self.addEventListener('sync', event => {
  if (event.tag === 'sync-user-progress') {
    console.log('[Service Worker] Syncing user progress...');
    event.waitUntil(syncUserProgress());
  }
});

// Function to sync user progress when back online
async function syncUserProgress() {
  try {
    const db = await openDatabase();
    const pendingUpdates = await db
      .transaction('pending-updates')
      .objectStore('pending-updates')
      .getAll();
    
    // Process each pending update
    for (const update of pendingUpdates) {
      try {
        const response = await fetch(update.url, {
          method: update.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(update.data)
        });
        
        if (response.ok) {
          // If successful, remove from pending updates
          await db
            .transaction('pending-updates', 'readwrite')
            .objectStore('pending-updates')
            .delete(update.id);
          
          console.log('[Service Worker] Sync successful for:', update.url);
        }
      } catch (error) {
        console.error('[Service Worker] Sync failed for:', update.url, error);
        // Leave in pending updates to try again next time
      }
    }
  } catch (error) {
    console.error('[Service Worker] Error syncing user progress:', error);
  }
}

// Helper to open IndexedDB
function openDatabase() {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open('bitcoin-quest-offline', 1);
    
    dbRequest.onerror = () => reject(dbRequest.error);
    dbRequest.onsuccess = () => resolve(dbRequest.result);
    
    dbRequest.onupgradeneeded = event => {
      const db = event.target.result;
      // Store for offline course progress
      if (!db.objectStoreNames.contains('user-progress')) {
        db.createObjectStore('user-progress', { keyPath: 'id' });
      }
      // Store for pending API requests that need to be sent when online
      if (!db.objectStoreNames.contains('pending-updates')) {
        db.createObjectStore('pending-updates', { keyPath: 'id', autoIncrement: true });
      }
      // Store for cached content data
      if (!db.objectStoreNames.contains('content-cache')) {
        db.createObjectStore('content-cache', { keyPath: 'key' });
      }
    };
  });
}