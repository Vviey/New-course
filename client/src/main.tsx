import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { setupFallbackNavigation } from "./lib/course-router";

// Setup fallback navigation for course content
setupFallbackNavigation();

// Register service worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Handle 403 Forbidden errors by showing content directly
const bodyText = document.body ? document.body.textContent || '' : '';
if (bodyText.includes('403 Forbidden') || 
    bodyText.includes('Host is not allowed') || 
    bodyText.includes('blocked-host')) {
  console.log('Detected 403 error, fallback mechanism will handle redirection');
} else {
  // Render the app only if we're not seeing a 403 error
  createRoot(document.getElementById("root")!).render(
    <App />
  );
}