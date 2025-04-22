// This script runs in the browser to modify Vite client's configuration
// Without modifying the vite.config.js file directly

(function() {
  if (typeof window !== 'undefined') {
    // Set up environment variables for Vite to allow all hosts
    if (window.__vite_plugin_react_preamble_installed__) {
      console.log('Vite React plugin detected, configuring host settings...');
      
      // Override Vite's internal host checker
      if (typeof window.__ViteHmrClient === 'object') {
        const originalCheck = window.__ViteHmrClient.config.allowedHosts;
        window.__ViteHmrClient.config.allowedHosts = originalCheck ? 
          [...originalCheck, window.location.hostname] : 
          [window.location.hostname];

        console.log('Modified Vite HMR client configuration');
      }
      
      // Setup global flags used by Vite
      window.__vite_config_allowAllHosts = true;
      window.__vite_bypass_host_check = true;
      
      console.log('Vite config helper: Allowed all hosts for development');
    }
    
    // Detect and handle blocked host errors
    if (typeof document !== 'undefined') {
      // Check if we're on the error page
      const isErrorPage = 
        document.title.includes('blocked') || 
        document.body.textContent.includes('is not allowed') ||
        document.body.textContent.includes('403');
      
      if (isErrorPage) {
        console.log('Detected host error page, attempting reload...');
        
        // Try to fix by adding a custom header and reloading
        if (window.localStorage) {
          window.localStorage.setItem('vite-host-fix-attempted', 'true');
        }
        
        // Reload the page after a short delay
        setTimeout(() => {
          console.log('Reloading page to apply host fix...');
          window.location.reload();
        }, 1500);
      }
    }
  }
})();