// Helper script to modify Vite configuration at runtime
// This ensures the app works in Replit environment

// Apply host configuration for Replit
(function configureViteForReplit() {
  console.log("Vite config helper: Starting enhanced host configuration");
  
  // Force document.domain to be the same as the current hostname
  // This helps with cross-origin issues in Replit environment
  try {
    document.domain = document.domain.split('.').slice(-2).join('.');
  } catch (e) {
    console.log("Unable to set document.domain, continuing anyway:", e);
  }
  
  // Get current hostname and protocol
  const currentHostname = window.location.hostname;
  const currentProtocol = window.location.protocol;
  console.log("Current hostname:", currentHostname);
  console.log("Current protocol:", currentProtocol);
  
  // Add specific host to allowed hosts
  window.__VITE_ALLOWED_HOSTS = window.__VITE_ALLOWED_HOSTS || [];
  window.__VITE_ALLOWED_HOSTS.push(currentHostname);
  
  // Check if we're in Replit environment
  const isReplit = currentHostname.includes('.replit.dev') || 
                  currentHostname.includes('.repl.co') ||
                  currentHostname.includes('.kirk.replit.dev') ||
                  currentHostname.includes('replit.com');
  
  if (isReplit) {
    console.log("Detected Replit environment, applying special configuration");
    
    // Add meta tag to declare host as allowed
    const meta = document.createElement('meta');
    meta.name = 'vite-allowed-host';
    meta.content = currentHostname;
    document.head.appendChild(meta);
    
    // Dynamically inject base tag to ensure all paths are resolved correctly
    const base = document.createElement('base');
    base.href = `${currentProtocol}//${currentHostname}/`;
    document.head.prepend(base);
  }
  
  // Find and process all script elements with vite in src
  const scripts = document.querySelectorAll('script[src*="vite"], script[src*="/@vite"], script[src*="/@react"], script[src*="/src"]');
  scripts.forEach(processScriptNode);
  
  // Replace localhost with current hostname in script sources
  function processScriptNode(script) {
    const originalSrc = script.getAttribute('src');
    if (!originalSrc) return;
    
    if (originalSrc.includes('localhost') || originalSrc.startsWith('/')) {
      let newSrc = originalSrc;
      
      // If it's a relative path starting with slash but not with double slash
      if (originalSrc.startsWith('/') && !originalSrc.startsWith('//')) {
        newSrc = `${currentProtocol}//${currentHostname}${originalSrc}`;
      } 
      // If it includes localhost
      else if (originalSrc.includes('localhost')) {
        newSrc = originalSrc.replace(/https?:\/\/localhost:[0-9]+/g, `${currentProtocol}//${currentHostname}`);
      }
      
      if (newSrc !== originalSrc) {
        script.setAttribute('src', newSrc);
        console.log(`Updated script src from ${originalSrc} to ${newSrc}`);
      }
    }
  }
  
  // Patch WebSocket to support Replit domains
  const originalWebSocket = window.WebSocket;
  window.WebSocket = function(url, protocols) {
    let newUrl = url;
    
    // Replace localhost with current hostname in WebSocket connections
    if (url.includes('localhost')) {
      // Extract the port and path from the original URL
      const match = url.match(/wss?:\/\/localhost:([0-9]+)(.*)/);
      if (match) {
        const [, port, path] = match;
        // Use secure websocket if page is on https
        const wsProtocol = currentProtocol === 'https:' ? 'wss:' : 'ws:';
        // Include port 5173 (Vite dev server port) explicitly
        newUrl = `${wsProtocol}//${currentHostname}:5173${path}`;
        console.log(`Patched WebSocket URL from ${url} to ${newUrl}`);
      }
    }
    
    return new originalWebSocket(newUrl, protocols);
  };
  
  // Monkey patch fetch to fix potential CORS issues
  const originalFetch = window.fetch;
  window.fetch = function(resource, options) {
    if (typeof resource === 'string' && resource.includes('localhost')) {
      resource = resource.replace(/https?:\/\/localhost:[0-9]+/g, `${currentProtocol}//${currentHostname}:5173`);
      console.log(`Patched fetch URL to ${resource}`);
    }
    return originalFetch(resource, options);
  };
  
  console.log("Vite host configuration complete");
})();