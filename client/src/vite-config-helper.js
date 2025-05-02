// Helper script to modify Vite configuration at runtime
// This ensures the app works in Replit environment

// Apply host configuration for Replit
(function configureViteForReplit() {
  console.log("Vite config helper: Starting enhanced host configuration");
  
  // Get current hostname
  const currentHostname = window.location.hostname;
  console.log("Current hostname:", currentHostname);
  
  // Find all script elements with vite in src
  const scripts = document.querySelectorAll('script[src*="vite"]');
  
  // Process each script to update HMR connections
  scripts.forEach(processScriptNode);
  
  // Setup WebSocket handler to avoid connection issues
  function processScriptNode(script) {
    const originalSrc = script.getAttribute('src');
    if (!originalSrc) return;
    
    // If script is referring to localhost, replace with current hostname
    if (originalSrc.includes('localhost')) {
      const newSrc = originalSrc.replace('localhost', currentHostname);
      script.setAttribute('src', newSrc);
      console.log(`Updated script src from ${originalSrc} to ${newSrc}`);
    }
  }
  
  // Patch WebSocket to support Replit domains
  const originalWebSocket = window.WebSocket;
  window.WebSocket = function(url, protocols) {
    // Replace localhost with current hostname in WebSocket connections
    if (url.includes('localhost')) {
      const newUrl = url.replace('localhost', currentHostname);
      console.log(`Patched WebSocket URL from ${url} to ${newUrl}`);
      return new originalWebSocket(newUrl, protocols);
    }
    return new originalWebSocket(url, protocols);
  };
})();