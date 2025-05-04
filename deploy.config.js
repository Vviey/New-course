/**
 * Production deployment configuration
 * This file contains settings for deploying the Bitcoin education platform
 */

module.exports = {
  // Build configuration
  build: {
    // Entry point for the application
    entry: './client/src/main.tsx',
    
    // Output directory for the built files
    outDir: './dist',
    
    // Environment variables to inject at build time
    env: {
      // App version from package.json
      APP_VERSION: process.env.npm_package_version,
      
      // Build timestamp
      BUILD_TIME: new Date().toISOString(),
      
      // Flag for enabling/disabling analytics in production
      ENABLE_ANALYTICS: 'true',
      
      // Set production mode
      NODE_ENV: 'production',
    },
    
    // Asset handling configuration
    assets: {
      // Directory where static assets are stored
      publicDir: './public',
      
      // URL path where assets will be served from
      publicPath: '/',
      
      // Cache settings for different asset types
      cache: {
        // Cache period for images, fonts, etc. (30 days)
        static: 60 * 60 * 24 * 30,
        
        // Cache period for JS and CSS files (7 days)
        code: 60 * 60 * 24 * 7,
      },
    },
    
    // Optimization settings
    optimization: {
      // Enable code splitting
      splitChunks: true,
      
      // Enable tree shaking to remove unused code
      treeShaking: true,
      
      // Minimize output files
      minimize: true,
      
      // Configure CSS optimization
      css: {
        // Extract CSS into separate files
        extract: true,
        
        // Minimize CSS files
        minimize: true,
      },
      
      // Configure image optimization
      images: {
        // Compress images
        compress: true,
        
        // Convert images to modern formats
        modernFormats: true,
      },
    },
  },
  
  // Server configuration
  server: {
    // Port to serve the application
    port: 80,
    
    // Host to bind the server to
    host: '0.0.0.0',
    
    // Compression settings
    compression: true,
    
    // Headers to set on all responses
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },
    
    // Cache control for different types of files
    cacheControl: {
      // HTML files - no caching
      '**/*.html': 'public, max-age=0, must-revalidate',
      
      // Static assets - long-term caching with content hash in filenames
      '**/*.*': 'public, max-age=31536000, immutable',
    },
  },
};