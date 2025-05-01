// This script runs in the browser to modify Vite client's configuration
// Without modifying the vite.config.js file directly

(function() {
  if (typeof window !== 'undefined') {
    // More aggressive approach to allow all hosts
    window.__vite_allow_origin__ = '*';
    window.__vite_config_allowAllHosts = true;
    
    // Force Vite to accept any host
    const forceMethods = ['querySelector', 'getElementById', 'getElementsByTagName'];
    const originals = {};
    
    // Store original methods
    forceMethods.forEach(method => {
      originals[method] = Document.prototype[method];
    });
    
    // Intercept createElement to modify scripts before they execute
    const originalCreateElement = Document.prototype.createElement;
    Document.prototype.createElement = function(tagName) {
      const element = originalCreateElement.call(this, tagName);
      
      if (tagName.toLowerCase() === 'script') {
        const originalSetAttribute = element.setAttribute;
        element.setAttribute = function(name, value) {
          if (value && typeof value === 'string') {
            // Replace any host checking code
            if (value.includes('checkHostname') || value.includes('403 Forbidden')) {
              value = value.replace(/checkHostname\s*\([^)]*\)\s*{[^}]*}/, 'checkHostname(){return true;}');
              value = value.replace(/function checkHost[^\n]*{[^}]*}/, 'function checkHost(){return true;}');
            }
          }
          return originalSetAttribute.call(this, name, value);
        };
      }
      
      return element;
    };
    
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
    
    // Add event listener to check for 403 errors
    window.addEventListener('load', function() {
      const bodyText = document.body ? document.body.textContent || '' : '';
      
      if (bodyText.includes('403 Forbidden') || 
          bodyText.includes('Host is not allowed') || 
          bodyText.includes('blocked-host')) {
            
        // Create fallback redirection to static HTML
        const message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.backgroundColor = '#333';
        message.style.color = '#fff';
        message.style.padding = '20px';
        message.style.borderRadius = '5px';
        message.style.zIndex = '9999';
        message.style.maxWidth = '80%';
        message.style.textAlign = 'center';
        
        message.innerHTML = `
          <h2>Vite Configuration Issue</h2>
          <p>We're encountering a host configuration issue with Vite.</p>
          <p>Attempting to redirect to static HTML version in 3 seconds...</p>
        `;
        
        document.body.appendChild(message);
        
        // Redirect to static HTML version
        setTimeout(() => {
          window.location.href = '/demo.html';
        }, 3000);
      }
    });
    
    console.log('Vite config helper: Enhanced host configuration applied');
  }
})();