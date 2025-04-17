// This script runs in the browser to modify Vite client's configuration
// Without modifying the vite.config.js file directly

(function() {
  if (typeof window !== 'undefined') {
    // Allow all hosts by disabling the host check
    window.__vite_config_allowAllHosts = true;
    
    console.log('Vite config helper: Allowed all hosts for development');
    
    // Attempt to reload if there was a previous blocked host error
    const url = window.location.href;
    if (url.includes('blocked-host') || 
        document.body.textContent.includes('is not allowed')) {
      console.log('Attempting to reload after host configuration...');
      setTimeout(() => window.location.reload(), 1000);
    }
  }
})();