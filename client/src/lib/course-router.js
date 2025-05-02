/**
 * Helper utilities for course navigation and fallbacks
 */

/**
 * Get static HTML fallback URL for a specific mission
 * This is used when the React router fails to load the mission
 * 
 * @param {string|number} realmId - The realm ID
 * @param {string|number} missionId - The mission ID
 * @returns {string} The fallback URL
 */
export function getStaticFallbackUrl(realmId, missionId) {
  // Special case for bonus missions
  if (missionId.toString().toLowerCase() === 'bonus') {
    return `/realm${realmId}-missionbonus.html`;
  }
  
  // Regular mission fallback
  return `/realm${realmId}-mission${missionId}.html`;
}

/**
 * Determine if the current host is allowed in Vite's configuration
 * This is used to decide whether to use the React router or fallback to static HTML
 * 
 * @returns {boolean} True if the host is allowed
 */
export function isHostAllowed() {
  // In production mode or when explicitly set, force allowed mode
  if (window.__vite_config_allowAllHosts === true) {
    return true;
  }
  
  // Check current host against allowed patterns
  const hostname = window.location.hostname;
  
  // Always allow localhost, standard IP, and all Replit domains
  if (hostname === 'localhost' || 
      hostname === '127.0.0.1' || 
      hostname.endsWith('.replit.dev') ||
      hostname.endsWith('.replit.app') ||
      hostname.includes('.repl.co')) {
    return true;
  }

  // For all other hosts, consider them allowed to avoid excessive fallback
  // This ensures our app works in more environments
  return true;
}

/**
 * Redirect to a mission page with fallback handling
 * 
 * @param {string|number} realmId - The realm ID
 * @param {string|number} missionId - The mission ID
 * @param {Function} setLocation - The wouter setLocation function
 */
export function navigateToMission(realmId, missionId, setLocation) {
  if (isHostAllowed()) {
    // Use React router if the host is allowed
    setLocation(`/realm/${realmId}/mission/${missionId}`);
  } else {
    // Fallback to static HTML if the host is not allowed
    window.location.href = getStaticFallbackUrl(realmId, missionId);
  }
}

/**
 * Helper to handle both React router and direct HTML navigation
 */
export function setupFallbackNavigation() {
  // Set up global navigation helper
  window.navigateToMission = (realmId, missionId) => {
    // Always try to use the React router by default
    try {
      // Check if the root element exists
      if (document.getElementById("root")) {
        window.location.href = `/realm/${realmId}/mission/${missionId}`;
      } else {
        // If no root element, use fallback
        window.location.href = getStaticFallbackUrl(realmId, missionId);
      }
    } catch (e) {
      console.error("Navigation error:", e);
      window.location.href = getStaticFallbackUrl(realmId, missionId);
    }
  };
  
  // Add event listener for 403 errors and other issues
  window.addEventListener('load', function() {
    // Check for error conditions in body text
    const bodyText = document.body ? document.body.textContent || '' : '';
    const hasError = bodyText.includes('403 Forbidden') || 
                     bodyText.includes('Host is not allowed') || 
                     bodyText.includes('blocked-host');
    
    // Check if React app root is missing (failed to mount)
    const rootElement = document.getElementById("root");
    const appFailedToMount = rootElement && 
                            (!rootElement.childNodes || 
                             rootElement.childNodes.length === 0);
    
    if (hasError || appFailedToMount) {
      console.warn("Application error detected, activating fallback mechanism");
      
      // Extract realm and mission IDs from the URL
      const pathParts = window.location.pathname.split('/');
      let realmId, missionId;
      
      for (let i = 0; i < pathParts.length; i++) {
        if ((pathParts[i] === 'realm' || pathParts[i].toLowerCase().startsWith('realm')) && i+1 < pathParts.length) {
          realmId = pathParts[i+1];
          // Handle case where the realm part includes the number (e.g., "realm2")
          if (realmId && !isNaN(parseInt(realmId))) {
            realmId = parseInt(realmId);
          } else if (pathParts[i].toLowerCase().startsWith('realm') && pathParts[i].length > 5) {
            // Extract number from "realm2" format
            realmId = parseInt(pathParts[i].substring(5));
          }
        }
        
        if ((pathParts[i] === 'mission' || pathParts[i].toLowerCase().startsWith('mission')) && i+1 < pathParts.length) {
          missionId = pathParts[i+1];
          // Handle case where the mission part includes the number
          if (missionId && !isNaN(parseInt(missionId))) {
            missionId = parseInt(missionId);
          } else if (pathParts[i].toLowerCase().startsWith('mission') && pathParts[i].length > 7) {
            // Extract number from "mission1" format
            missionId = parseInt(pathParts[i].substring(7));
          }
        }
      }
      
      // If we found realm and mission IDs, redirect to the appropriate fallback
      if (realmId && missionId) {
        const fallbackUrl = getStaticFallbackUrl(realmId, missionId);
        
        // Create user-friendly loading message
        const message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.top = '0';
        message.style.left = '0';
        message.style.width = '100%';
        message.style.height = '100%';
        message.style.backgroundColor = '#1a1a1a';
        message.style.color = '#fff';
        message.style.display = 'flex';
        message.style.flexDirection = 'column';
        message.style.alignItems = 'center';
        message.style.justifyContent = 'center';
        message.style.zIndex = '9999';
        message.style.fontFamily = 'system-ui, sans-serif';
        
        message.innerHTML = `
          <div style="text-align: center; max-width: 500px; padding: 2rem;">
            <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #d162db;">Loading Mission Content</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">Preparing your educational journey...</p>
            <div style="width: 50px; height: 50px; border: 5px solid rgba(255,255,255,0.1); border-radius: 50%; border-top-color: #d162db; animation: spin 1s linear infinite;"></div>
          </div>
          <style>
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          </style>
        `;
        
        document.body.appendChild(message);
        
        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = fallbackUrl;
        }, 800);
      } else {
        // If we can't determine the mission, redirect to home
        window.location.href = '/';
      }
    }
  });
}