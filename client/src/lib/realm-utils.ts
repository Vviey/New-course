/**
 * Utility function to get the standardized realm name based on realm number
 * 
 * @param realm - The realm number (1-7)
 * @returns The standardized realm name as string
 */
export function getRealmName(realm: number): string {
  switch (realm) {
    case 1:
      return "Realm of Origins";
    case 2:
      return "The Central Citadel";  
    case 3:
      return "The Forest of Sparks";
    case 4:
      return "The Mountain Forge";
    case 5:
      return "The Council of Forks";
    case 6:
      return "The Ubuntu Village";
    case 7:
      return "The Summit of Knowledge";
    default:
      return `Realm ${realm}`;
  }
}

/**
 * Get the realm description based on realm number
 * 
 * @param realm - The realm number (1-7)
 * @returns The realm description as string
 */
export function getRealmDescription(realm: number): string {
  switch (realm) {
    case 1:
      return "Foundations of Money";
    case 2:
      return "Governance";
    case 3:
      return "Bitcoin's Birth";
    case 4:
      return "Mining and Consensus";
    case 5:
      return "Bitcoin Governance and Forks";
    case 6:
      return "Bitcoin in Africa";
    case 7:
      return "Comprehensive Bitcoin Mastery";
    default:
      return "";
  }
}