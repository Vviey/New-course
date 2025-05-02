import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create root element if it doesn't exist
const rootElement = document.getElementById("root") || (() => {
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  return el;
})();

// Log the initial load
console.log("Frontend-only version starting - initializing React...");

// Render the React app
try {
  // Directly mount the App component - no additional providers needed
  createRoot(rootElement).render(<App />);
  console.log("Frontend-only React app rendered successfully");
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