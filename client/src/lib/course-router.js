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
  // Check if we're in a development environment
  const isDev = process.env.NODE_ENV === 'development';
  
  // In production, we don't need to worry about Vite's host restrictions
  if (!isDev) {
    return true;
  }
  
  // In development, we check if we're running on localhost or 127.0.0.1
  const hostname = window.location.hostname;
  return hostname === 'localhost' || 
         hostname === '127.0.0.1' || 
         hostname.endsWith('.replit.dev') ||
         hostname.includes('repl.co');
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
  // Add a global helper for mission navigation
  window.navigateToMission = (realmId, missionId) => {
    window.location.href = `/realm/${realmId}/mission/${missionId}`;
  };
  
  // Add event listener for 403 errors
  window.addEventListener('load', function() {
    const bodyText = document.body ? document.body.textContent || '' : '';
    
    if (bodyText.includes('403 Forbidden') || 
        bodyText.includes('Host is not allowed') || 
        bodyText.includes('blocked-host')) {
      
      // Get current path parts
      const pathParts = window.location.pathname.split('/');
      let realmId, missionId;
      
      // Extract realm and mission IDs from the URL
      for (let i = 0; i < pathParts.length; i++) {
        if (pathParts[i] === 'realm' && i+1 < pathParts.length) {
          realmId = pathParts[i+1];
        }
        if (pathParts[i] === 'mission' && i+1 < pathParts.length) {
          missionId = pathParts[i+1];
        }
      }
      
      // Redirect to static HTML if we have realm and mission IDs
      if (realmId && missionId) {
        const fallbackUrl = getStaticFallbackUrl(realmId, missionId);
        
        // Create message
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
          <h2>Loading Mission</h2>
          <p>Redirecting to mission content...</p>
        `;
        
        document.body.appendChild(message);
        
        // Redirect to static HTML
        setTimeout(() => {
          window.location.href = fallbackUrl;
        }, 1000);
      } else {
        // If we can't determine the mission, redirect to home
        window.location.href = '/';
      }
    }
  });
}