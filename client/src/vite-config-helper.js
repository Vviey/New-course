/**
 * Vite Config Helper for Replit
 * 
 * This script helps configure Vite to work properly in the Replit environment
 * by addressing host configuration issues that may arise.
 */

function configureViteForReplit() {
  console.log("Vite config helper: Starting enhanced host configuration");
  
  try {
    // Get the current hostname and protocol
    const currentHostname = window.location.hostname;
    const currentProtocol = window.location.protocol;
    const currentPort = window.location.port || (currentProtocol === 'https:' ? '443' : '80');
    
    console.log("Current location:", window.location.href);
    console.log("Current hostname:", currentHostname);
    console.log("Current protocol:", currentProtocol);
    console.log("Current port:", currentPort);
    
    // Add this hostname to the global allowed hosts array
    window.__VITE_ALLOWED_HOSTS = window.__VITE_ALLOWED_HOSTS || [];
    
    // Add current hostname and common Replit domains
    if (!window.__VITE_ALLOWED_HOSTS.includes(currentHostname)) {
      window.__VITE_ALLOWED_HOSTS.push(
        currentHostname,
        '.replit.dev',
        '.repl.co',
        '.replit.app',
        '.kirk.replit.dev',
        'localhost'
      );
      console.log("Updated allowed hosts:", window.__VITE_ALLOWED_HOSTS);
    }
    
    // For localhost development, set up minimal configuration
    if (currentHostname === "localhost" || currentHostname === "127.0.0.1") {
      console.log("Local development detected, applying lightweight patching");
      // Add meta tag to allow local development
      let metaTag = document.querySelector('meta[name="vite-local-development"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = 'vite-local-development';
        metaTag.content = 'true';
        document.head.appendChild(metaTag);
        console.log("Added local development meta tag");
      }
      return;
    }
    
    // Find the Replit domain for host configuration
    const replitDomain = findReplitDomain();
    if (replitDomain) {
      console.log("Detected Replit domain:", replitDomain);
      
      // Create a meta tag to add our hostname to Vite's allowed hosts
      let metaTag = document.querySelector('meta[name="vite-allowed-host"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = 'vite-allowed-host';
        metaTag.content = currentHostname;
        document.head.appendChild(metaTag);
        console.log("Added Vite allowed host meta tag for:", currentHostname);
      }
      
      // Apply Replit-specific adjustments
      patchScriptSources(currentProtocol, currentHostname);
      patchFetchRequests();
      monkeyPatchWebSocketForReplit(replitDomain);
    } else {
      console.log("Not running on Replit, no special configuration needed");
    }
    
    console.log("Vite host configuration complete");
  } catch (error) {
    console.error("Error in Vite config helper:", error);
  }
}

/**
 * Attempts to find a Replit domain from the current URL
 */
function findReplitDomain() {
  const hostname = window.location.hostname;
  
  // Check for .replit.dev domains which are common in Replit
  if (hostname.includes('.replit.dev') || 
      hostname.includes('.repl.co') || 
      hostname.includes('.replit.app')) {
    return hostname;
  }
  
  return null;
}

/**
 * Patch fetch requests to handle Vite's internal requests
 */
function patchFetchRequests() {
  const originalFetch = window.fetch;
  
  window.fetch = function(resource, options) {
    if (typeof resource === 'string' && resource.includes('localhost')) {
      const currentProtocol = window.location.protocol;
      const currentHostname = window.location.hostname;
      
      const newResource = resource.replace(
        /https?:\/\/localhost:[0-9]+/g, 
        `${currentProtocol}//${currentHostname}`
      );
      
      console.log(`Patched fetch URL from ${resource} to ${newResource}`);
      resource = newResource;
    }
    
    return originalFetch(resource, options);
  };
  
  console.log("Patched fetch API for Vite's internal requests");
}

/**
 * Patch all script sources to use the correct host
 */
function patchScriptSources(protocol, hostname) {
  const scripts = document.getElementsByTagName('script');
  
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (script.src && script.src.startsWith('/')) {
      const newSrc = `${protocol}//${hostname}${script.src}`;
      console.log("Updated script src from", script.src, "to", newSrc);
      script.src = newSrc;
    }
  }
}

/**
 * Monkey patch WebSocket to work with Replit's domain structure
 */
function monkeyPatchWebSocketForReplit(replitDomain) {
  const originalWebSocket = window.WebSocket;
  
  // Replace the WebSocket constructor with our custom version
  window.WebSocket = function(url, protocols) {
    // Check if this is a Vite HMR websocket URL
    if (url && (url.includes('localhost') || url.includes('ws://') || url.includes('wss://'))) {
      try {
        // Extract WebSocket path and search params
        const wsUrl = new URL(url);
        const wsPath = wsUrl.pathname + wsUrl.search;
        
        // Create a new WebSocket URL using the current host
        const currentProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const patchedUrl = `${currentProtocol}//${replitDomain}${wsPath}`;
        
        console.log("Patched WebSocket URL from", url, "to", patchedUrl);
        return new originalWebSocket(patchedUrl, protocols);
      } catch (error) {
        console.error("Error patching WebSocket URL:", error);
        return new originalWebSocket(url, protocols);
      }
    }
    
    // For other WebSockets, use the original behavior
    return new originalWebSocket(url, protocols);
  };
  
  // Copy over static properties and prototype
  for (const prop in originalWebSocket) {
    if (Object.prototype.hasOwnProperty.call(originalWebSocket, prop)) {
      window.WebSocket[prop] = originalWebSocket[prop];
    }
  }
  window.WebSocket.prototype = originalWebSocket.prototype;
  
  console.log("Patched WebSocket for Replit compatibility");
}

// Run the configuration immediately
configureViteForReplit();

// Also run it again when the page fully loads
window.addEventListener('load', configureViteForReplit);

// Export for possible explicit usage
export { configureViteForReplit };