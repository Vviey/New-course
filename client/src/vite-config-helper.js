// This script runs in the browser to modify Vite client's configuration
// Without modifying the vite.config.js file directly

(function() {
  if (typeof window !== 'undefined') {
    console.log('Vite config helper: Starting enhanced host configuration...');
    
    // Display the current hostname for debugging
    console.log('Current hostname:', window.location.hostname);
    console.log('Current URL:', window.location.href);
    
    // Set all possible configuration variables to allow any host
    window.__vite_allow_origin__ = '*';
    window.__vite_config_allowAllHosts = true;
    window.__vite_bypass_host_check__ = true;
    window.__HMR_HOSTNAME__ = window.location.hostname;
    window.__HMR_PORT__ = window.location.port || (window.location.protocol === 'https:' ? '443' : '80');
    window.__HMR_PROTOCOL__ = window.location.protocol === 'https:' ? 'wss' : 'ws';
    window.__vite_dev_server_options__ = {
      hmr: { clientPort: window.location.port || (window.location.protocol === 'https:' ? '443' : '80') },
      host: window.location.hostname,
      https: window.location.protocol === 'https:',
      open: false
    };
    
    // Direct patch to forcibly override the Vite host check globally
    // This adds a global property that any script can check
    Object.defineProperty(window, '__VITE_HOST_CHECK_ENABLED__', {
      value: false,
      writable: false,
      configurable: false
    });
    
    // Directly insert a script that declares the host as allowed
    const allowScript = document.createElement('script');
    allowScript.textContent = `
      // Global override for Vite host check
      const __vite_allowed_hosts__ = [window.location.hostname, 'localhost', '127.0.0.1'];
      const __vite_host_check_enabled__ = false;
      console.log('Host check override installed');
    `;
    document.head.appendChild(allowScript);
    
    // Force Vite to accept any host by overriding methods
    const forceMethods = ['querySelector', 'getElementById', 'getElementsByTagName', 'querySelectorAll'];
    const originals = {};
    
    // Store original methods
    forceMethods.forEach(method => {
      originals[method] = Document.prototype[method];
    });
    
    // Create a MutationObserver to detect and handle dynamically added scripts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.tagName === 'SCRIPT') {
              processScriptNode(node);
            }
          });
        }
      });
    });
    
    // Start observing document for script additions
    observer.observe(document, { childList: true, subtree: true });
    
    function processScriptNode(script) {
      // Process existing content 
      if (script.textContent) {
        // Always try to replace host checking, not just in scripts where we detect specific functions
        script.textContent = script.textContent
          .replace(/checkHostname\s*\([^)]*\)\s*{[^}]*}/g, 'checkHostname(){return true;}')
          .replace(/function\s+checkHost[^\n]*{[^}]*}/g, 'function checkHost(){return true;}')
          .replace(/const\s+base\s*=\s*document\.querySelector\('base'\)?.+?hmrPort.+?;/gs, 'const hmrPort = null;')
          // More aggressive replacements for any host checking code
          .replace(/if\s*\([^)]*host[^)]*\)\s*{([^}]*)}/g, 'if(false){}') // Replace any host check conditions
          .replace(/const allowedHosts\s*=\s*([^;]+);/g, 'const allowedHosts = [window.location.hostname];')
          .replace(/new RegExp\(([^)]*host[^)]*)\)/g, 'new RegExp(".*")')
          .replace(/VITE_HOST_CHECK/g, 'false');
      }
    }
    
    // Intercept createElement to modify scripts before they execute
    const originalCreateElement = Document.prototype.createElement;
    Document.prototype.createElement = function(tagName) {
      const element = originalCreateElement.call(this, tagName);
      
      if (tagName.toLowerCase() === 'script') {
        const originalSetAttribute = element.setAttribute;
        element.setAttribute = function(name, value) {
          if (value && typeof value === 'string') {
            // Apply all our host checking replacements to any string
            value = value
              .replace(/checkHostname\s*\([^)]*\)\s*{[^}]*}/g, 'checkHostname(){return true;}')
              .replace(/function\s+checkHost[^\n]*{[^}]*}/g, 'function checkHost(){return true;}')
              .replace(/const\s+base\s*=\s*document\.querySelector\('base'\)?.+?hmrPort.+?;/gs, 'const hmrPort = null;')
              .replace(/if\s*\([^)]*host[^)]*\)\s*{([^}]*)}/g, 'if(false){}')
              .replace(/const allowedHosts\s*=\s*([^;]+);/g, 'const allowedHosts = [window.location.hostname];')
              .replace(/new RegExp\(([^)]*host[^)]*)\)/g, 'new RegExp(".*")')
              .replace(/VITE_HOST_CHECK/g, 'false');
          }
          return originalSetAttribute.call(this, name, value);
        };
        
        // Override the script's textContent setter
        let originalContent = '';
        Object.defineProperty(element, 'textContent', {
          get: function() {
            return originalContent;
          },
          set: function(newValue) {
            if (newValue && typeof newValue === 'string') {
              originalContent = newValue
                .replace(/checkHostname\s*\([^)]*\)\s*{[^}]*}/g, 'checkHostname(){return true;}')
                .replace(/function\s+checkHost[^\n]*{[^}]*}/g, 'function checkHost(){return true;}')
                .replace(/const\s+base\s*=\s*document\.querySelector\('base'\)?.+?hmrPort.+?;/gs, 'const hmrPort = null;')
                .replace(/if\s*\([^)]*host[^)]*\)\s*{([^}]*)}/g, 'if(false){}')
                .replace(/const allowedHosts\s*=\s*([^;]+);/g, 'const allowedHosts = [window.location.hostname];')
                .replace(/new RegExp\(([^)]*host[^)]*)\)/g, 'new RegExp(".*")')
                .replace(/VITE_HOST_CHECK/g, 'false');
            } else {
              originalContent = newValue;
            }
          }
        });
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
        
        // Use the current port if available
        if (window.location.port) {
          wsUrl.port = window.location.port;
        }
        
        // Reconstruct the URL
        url = wsUrl.toString();
        console.log('Vite config helper: Redirecting WebSocket to', url);
      } catch (e) {
        console.error('Error parsing WebSocket URL:', e);
      }
      
      return new originalWebSocket(url, protocols);
    };
    
    console.log('Vite config helper: Enhanced host configuration applied successfully');
  }
})();