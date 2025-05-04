/**
 * Replit-specific configuration settings
 * 
 * This file handles any Replit-specific configuration to ensure the application
 * works smoothly in the Replit environment.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Extract the Replit domain from the environment
 * @returns The current Replit domain if available, or null
 */
export function getReplitDomain(): string | null {
  // Try to read from .replit/id file
  try {
    const replitIdPath = path.join(__dirname, '..', '.replit', 'id');
    if (fs.existsSync(replitIdPath)) {
      const replId = fs.readFileSync(replitIdPath, 'utf8').trim();
      return `${replId}-00-icw0rstl9wue.kirk.replit.dev`;
    }
  } catch (error) {
    console.error('Failed to read Replit ID:', error);
  }
  
  // Try to get from environment variables
  const replitHostname = process.env.REPL_SLUG || process.env.REPL_ID;
  if (replitHostname) {
    return `${replitHostname}.replit.dev`;
  }
  
  return null;
}

/**
 * Get the list of allowed hosts for the Vite development server
 * @returns Array of allowed host patterns
 */
export function getAllowedHosts(): string[] {
  const hosts = [
    'localhost',
    '.replit.dev', 
    '.repl.co',
    '.replit.app',
    'workspace'
  ];
  
  // Add the specific Replit domain if available
  const replitDomain = getReplitDomain();
  if (replitDomain) {
    hosts.push(replitDomain);
  }
  
  return hosts;
}

/**
 * Write necessary configuration to the HTML template for client-side usage
 * @param template HTML template content
 * @returns Updated HTML with configuration
 */
export function injectReplitConfig(template: string): string {
  const replitDomain = getReplitDomain();
  if (!replitDomain) return template;
  
  // Add meta tags for allowed hosts
  const metaTags = `
    <meta name="vite-allowed-host" content="${replitDomain}">
    <script>
      window.__REPLIT_HOST = "${replitDomain}";
      window.__VITE_ALLOWED_HOSTS = window.__VITE_ALLOWED_HOSTS || [];
      window.__VITE_ALLOWED_HOSTS.push("${replitDomain}");
    </script>
  `;
  
  return template.replace('</head>', `${metaTags}</head>`);
}