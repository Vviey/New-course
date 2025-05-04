/**
 * Replit environment patch for Vite
 * 
 * This script runs in the browser to ensure Vite's hot module replacement and WebSocket
 * connections work correctly in the Replit environment.
 */

// Self-executing function to avoid global scope pollution
(function() {
  console.log('Applying Replit patches for Vite...');
  
  // Get current environment info
  const currentHostname = window.location.hostname;
  const currentPort = window.location.port || (window.location.protocol === 'https:' ? '443' : '80');
  const currentProtocol = window.location.protocol;
  
  // Add the current hostname to allowed hosts
  window.__VITE_ALLOWED_HOSTS = window.__VITE_ALLOWED_HOSTS || [];
  window.__VITE_ALLOWED_HOSTS.push(
    currentHostname,
    '.replit.dev',
    '.repl.co',
    '.replit.app',
    '.kirk.replit.dev'
  );
  
  console.log('Setting allowed hosts:', window.__VITE_ALLOWED_HOSTS);
  
  // Detect Replit environment
  const isReplit = 
    currentHostname.includes('.replit.dev') || 
    currentHostname.includes('.repl.co') || 
    currentHostname.includes('.replit.app') ||
    currentHostname.includes('.kirk.replit.dev');
  
  if (isReplit) {
    console.log('Replit environment detected, applying additional patches');
    
    // Patch WebSocket to work in Replit
    const OriginalWebSocket = window.WebSocket;
    window.WebSocket = function(url, protocols) {
      let patchedUrl = url;
      
      if (url.includes('localhost') || url.startsWith('ws://') || url.startsWith('wss://')) {
        // Extract path from the URL
        const wsUrl = new URL(url);
        const wsPath = wsUrl.pathname + wsUrl.search;
        
        // Create new URL using current hostname
        const wsProtocol = currentProtocol === 'https:' ? 'wss:' : 'ws:';
        patchedUrl = `${wsProtocol}//${currentHostname}${wsPath}`;
        
        console.log(`Patched WebSocket URL from ${url} to ${patchedUrl}`);
      }
      
      return new OriginalWebSocket(patchedUrl, protocols);
    };
    
    // Patch fetch API for Vite's use
    const originalFetch = window.fetch;
    window.fetch = function(resource, options) {
      if (typeof resource === 'string' && resource.includes('localhost')) {
        const newResource = resource.replace(/https?:\/\/localhost:[0-9]+/g, `${currentProtocol}//${currentHostname}`);
        console.log(`Patched fetch URL from ${resource} to ${newResource}`);
        resource = newResource;
      }
      return originalFetch(resource, options);
    };
    
    // Add meta tags to document to indicate allowed hosts
    const meta = document.createElement('meta');
    meta.name = 'vite-allowed-host';
    meta.content = currentHostname;
    document.head.appendChild(meta);
  }
  
  console.log('Replit patches applied successfully');
})();