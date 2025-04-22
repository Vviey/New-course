// Realm-specific design tokens and themes

export interface RealmTheme {
  id: number;
  name: string;
  colors: {
    primaryAccent: string;
    backgroundLight: string;
    highlight: string;
    darkText: string;
    secondaryAccent: string;
    softContrast: string;
    gradientStart?: string;
    gradientEnd?: string;
  };
  patternClass?: string;
  backgroundTexture?: string;
}

// Realm of Origins Theme - Trade Festival at Sunset
export const originTheme: RealmTheme = {
  id: 1,
  name: "Realm of Origins",
  colors: {
    primaryAccent: "#EE720B",    // Sunset Orange
    backgroundLight: "#FBF4D2",  // Soft Golden Yellow (light sand)
    highlight: "#FFC567",        // Warm Gold
    darkText: "#3A2E00",         // Deep Earth Brown
    secondaryAccent: "#B34700",  // Terracotta Clay Red
    softContrast: "#31456A",     // Muted Indigo / Night Sky Blue
    gradientStart: "#B34700",    // Terracotta gradient start
    gradientEnd: "#EE720B",      // Sunset Orange gradient end
  },
  patternClass: "origins-pattern",
  backgroundTexture: "url('/textures/woven-pattern.svg')"
};

// Collection of all realm themes
export const realmThemes: Record<number, RealmTheme> = {
  1: originTheme,
  // Add more realms as they are developed
};

// Get a theme by realm ID, with fallback to a default
export function getRealmTheme(realmId: number): RealmTheme {
  return realmThemes[realmId] || originTheme;
}