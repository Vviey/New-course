/**
 * This is an empty file that replaces the original Replit config module.
 * It's maintained for compatibility but contains no Replit-specific code.
 */

/**
 * Always returns null for local development
 */
export function getReplitDomain(): string | null {
  return null;
}

/**
 * Get allowed hosts for local development
 */
export function getAllowedHosts(): string[] {
  return ['localhost', '127.0.0.1'];
}

/**
 * Return the template unchanged for local development
 */
export function injectReplitConfig(template: string): string {
  return template;
}