import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { OfflineProvider } from "./context/OfflineContext";

// Create root element if it doesn't exist
const rootElement = document.getElementById("root") || (() => {
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  return el;
})();

// Log the initial load
console.log("Application starting - initializing React...");

// Custom error handler for React rendering
const renderApp = () => {
  try {
    // Wrap the entire app in the OfflineProvider to enable offline capabilities
    createRoot(rootElement).render(
      <OfflineProvider>
        <App />
      </OfflineProvider>
    );
    console.log("React app rendered successfully");
  } catch (error) {
    console.error("Error rendering React app:", error);
    rootElement.innerHTML = `
      <div style="font-family: system-ui, -apple-system, sans-serif; padding: 2rem; text-align: center;">
        <h1>Something went wrong</h1>
        <p>We're having trouble loading the application. Please try refreshing the page.</p>
        <div style="margin: 1rem 0; color: #666; font-size: 0.9rem; text-align: left; max-width: 600px; margin: 1rem auto; padding: 1rem; background: #f7f7f7; border-radius: 0.25rem;">
          ${error?.toString() || "Unknown error"}
        </div>
        <button onclick="window.location.reload()" style="padding: 0.5rem 1rem; background: #f59e0b; color: white; border: none; border-radius: 0.25rem; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
  }
};

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

// Add a global error handler for uncaught exceptions
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

// Add unhandled promise rejection handling
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
});

// Render the React app
renderApp();