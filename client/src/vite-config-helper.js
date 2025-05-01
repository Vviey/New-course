// This script runs in the browser to modify Vite client's configuration
// Without modifying the vite.config.js file directly

(function() {
  if (typeof window !== 'undefined') {
    // More aggressive approach to allow all hosts
    window.__vite_allow_origin__ = '*';
    window.__vite_config_allowAllHosts = true;
    
    // Override Vite's WebSocket connection for HMR
    const originalWebSocket = window.WebSocket;
    window.WebSocket = function(url, protocols) {
      // Parse the URL
      try {
        const wsUrl = new URL(url);
        
        // Get the current host and replace it in the WS URL
        const currentHost = window.location.hostname;
        wsUrl.hostname = currentHost;
        
        // Reconstruct the URL
        url = wsUrl.toString();
        console.log('Vite config helper: Redirecting WebSocket to', url);
      } catch (e) {
        console.error('Error parsing WebSocket URL:', e);
      }
      
      return new originalWebSocket(url, protocols);
    };
    
    console.log('Vite config helper: Enhanced host configuration applied');
    
    // Attempt to reload if there was a previous blocked host error
    const url = window.location.href;
    const bodyText = document.body ? document.body.textContent : '';
    if (url.includes('blocked-host') || 
        bodyText.includes('is not allowed') || 
        bodyText.includes('403 Forbidden')) {
      console.log('Attempting to reload after host configuration...');
      setTimeout(() => window.location.reload(), 1500);
    }
  }
})();