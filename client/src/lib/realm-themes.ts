// Realm-specific design tokens and themes

export interface RealmTheme {
  id?: number;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    backgroundLight: string;
    cardBackground?: string;
    textDark: string;
    textLight: string;
    accent1?: string;
    accent2?: string;
    highlight?: string;
    alert?: string;
    primaryAccent?: string;
    darkText?: string;
    secondaryAccent?: string;
    softContrast?: string;
    gradientStart?: string;
    gradientEnd?: string;
  };
  patterns?: {
    grid?: string;
    cityscape?: string;
    dots?: string;
    circuits?: string;
    adinkra?: string;
  };
  gradients?: {
    sunset?: string;
    sand?: string;
    blue?: string;
    neon?: string;
    tech?: string;
    glow?: string;
  };
  shadows?: {
    card?: string;
    button?: string;
    neon?: string;
    inner?: string;
  };
  animations?: {
    pulse?: string;
    glow?: string;
  };
  borderRadius?: {
    small?: string;
    default?: string;
    large?: string;
    full?: string;
  };
  patternClass?: string;
  backgroundTexture?: string;
  zIndex?: {
    base?: number;
    modal?: number;
    tooltip?: number;
    header?: number;
  };
  fonts?: {
    heading?: string;
    body?: string;
    mono?: string;
  };
}

// Realm of Origins Theme - Trade Festival at Sunset
export const originTheme: RealmTheme = {
  id: 1,
  name: "Realm of Origins",
  colors: {
    primary: "#EE720B", // Main orange accent
    secondary: "#FFC567", // Secondary/golden accent
    background: "#3E1E00", // Deep brown background
    backgroundLight: "#70350A", // Lighter brown
    cardBackground: "#FBF4D2", // Cream/parchment background for cards
    textDark: "#3E1E00", // Dark text color
    textLight: "#FBF4D2", // Light text color
    accent1: "#EB5A00", // Additional accent
    accent2: "#DB9D47", // Additional accent
    primaryAccent: "#EE720B",    // Sunset Orange
    darkText: "#3A2E00",         // Deep Earth Brown
    secondaryAccent: "#B34700",  // Terracotta Clay Red
    softContrast: "#31456A",     // Muted Indigo / Night Sky Blue
    gradientStart: "#B34700",    // Terracotta gradient start
    gradientEnd: "#EE720B",      // Sunset Orange gradient end
  },
  patterns: {
    // CSS pattern for use in backgrounds
    adinkra: `repeating-linear-gradient(
      45deg,
      rgba(238, 114, 11, 0.1),
      rgba(238, 114, 11, 0.1) 10px,
      rgba(238, 114, 11, 0.2) 10px,
      rgba(238, 114, 11, 0.2) 20px
    )`,
  },
  // Gradients for use in components
  gradients: {
    sunset: "linear-gradient(to right, #EE720B, #FFC567)",
    sand: "linear-gradient(to bottom, #FBF4D2, #F7E8A4)",
  },
  shadows: {
    // Shadow styles
    card: "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)",
    button: "0 2px 4px rgba(238, 114, 11, 0.3)",
  },
  // Animation properties
  animations: {
    glow: "pulse 2s infinite",
  },
  // Border radius styles
  borderRadius: {
    small: "0.375rem",
    default: "0.5rem",
    large: "1rem",
    full: "9999px",
  },
  patternClass: "origins-pattern",
  backgroundTexture: "url('/textures/woven-pattern.svg')"
};

export const forestTheme: RealmTheme = {
  name: "The Forest of Sparks",
  colors: {
    primary: "#1E8E3E", // Green
    secondary: "#D2E7D6", // Light green
    background: "#0B2C13", // Dark forest green
    backgroundLight: "#1D4D26", // Medium forest green
    cardBackground: "#F2FFF5", // Very light mint
    textDark: "#0B2C13", // Dark text
    textLight: "#F2FFF5", // Light text
    accent1: "#F9A826", // Gold accent
    accent2: "#76BA7F", // Light green accent
  },
  // Other theme properties similar to originTheme
};

export const citadelTheme: RealmTheme = {
  name: "The Central Citadel",
  colors: {
    primary: "#2563EB", // Vibrant blue
    secondary: "#38BDF8", // Light blue
    background: "#0F172A", // Dark tech blue (almost black)
    backgroundLight: "#1E293B", // Slate blue
    cardBackground: "#F8FAFC", // Light grayish blue
    textDark: "#1E293B", // Dark text
    textLight: "#F8FAFC", // Light text
    accent1: "#FB7185", // Red-pink accent
    accent2: "#60A5FA", // Medium blue accent
    highlight: "#10B981", // Green accent for success/completion
    alert: "#F43F5E", // Red accent for warnings
  },
  patterns: {
    grid: `linear-gradient(rgba(30, 41, 59, 0.3) 1px, transparent 1px),
    linear-gradient(to right, rgba(30, 41, 59, 0.3) 1px, transparent 1px)`,
    cityscape: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 v10 h10 v-5 h5 v5 h5 v-10 h5 v10 h5 v-5 h10 v5 h5 v-10 h10 v5 h5 v5 h5 v-10 h5 v10 h10 v-5 h5 v-5 h10 v10 h5 v-5 h5' fill='none' stroke='rgba(30, 41, 59, 0.2)' stroke-width='1'/%3E%3C/svg%3E")`,
    dots: `radial-gradient(rgba(30, 41, 59, 0.4) 1px, transparent 1px)`,
    circuits: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,10 h20 v20 h20 v20 h-20 v20 h-20 z M60,10 h20 v20 h-20 z M60,50 h20 v20 h-20 z' fill='none' stroke='rgba(30, 41, 59, 0.15)' stroke-width='1'/%3E%3C/svg%3E")`,
  },
  gradients: {
    blue: "linear-gradient(to right, #2563EB, #38BDF8)",
    neon: "linear-gradient(to right, #FB7185, #60A5FA)",
    tech: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    glow: "linear-gradient(to bottom, rgba(56, 189, 248, 0.1), transparent)",
  },
  shadows: {
    card: "0 4px 12px rgba(15, 23, 42, 0.2), 0 1px 3px rgba(15, 23, 42, 0.1)",
    button: "0 2px 4px rgba(37, 99, 235, 0.25), 0 0 10px rgba(56, 189, 248, 0.1)",
    neon: "0 0 15px rgba(56, 189, 248, 0.3)",
    inner: "inset 0 2px 4px rgba(15, 23, 42, 0.1)",
  },
  animations: {
    pulse: "pulse 2s infinite",
    glow: "glow 4s infinite alternate",
  },
};

export const forksTheme: RealmTheme = {
  name: "The Council of Forks",
  colors: {
    primary: "#8B5CF6", // Purple
    secondary: "#C4B5FD", // Light purple
    background: "#2E1065", // Deep purple
    backgroundLight: "#4C1D95", // Medium purple
    textDark: "#2E1065", // Dark text
    textLight: "#EDE9FE", // Light text
    accent1: "#EC4899", // Pink accent
    accent2: "#A78BFA", // Medium purple
  },
};

export const ubuntuTheme: RealmTheme = {
  name: "The Ubuntu Village",
  colors: {
    primary: "#E9791D", // Ubuntu orange
    secondary: "#77216F", // Ubuntu purple
    background: "#2C001E", // Deep ubuntu purple
    backgroundLight: "#5E2750", // Lighter ubuntu purple
    textDark: "#2C001E", // Dark text
    textLight: "#FFF6DD", // Light text
    accent1: "#F1CB69", // Gold accent
    accent2: "#AEA79F", // Ubuntu warm grey
  },
};

export const groveTheme: RealmTheme = {
  name: "The Summit of Knowledge",
  colors: {
    primary: "#10B981", // Green
    secondary: "#D1FAE5", // Light green
    background: "#064E3B", // Deep green
    backgroundLight: "#065F46", // Medium green
    textDark: "#064E3B", // Dark text
    textLight: "#ECFDF5", // Light text
    accent1: "#FBBF24", // Yellow accent
    accent2: "#34D399", // Teal accent
  },
};

export const bioluminescentTheme: RealmTheme = {
  name: "The Forest of Sparks",
  colors: {
    primary: "#06B6D4", // Cyan
    secondary: "#67E8F9", // Light cyan
    background: "#042F2E", // Deep teal
    backgroundLight: "#134E4A", // Medium teal
    textDark: "#042F2E", // Dark text
    textLight: "#CCFBF1", // Light text
    accent1: "#22D3EE", // Bright cyan
    accent2: "#2DD4BF", // Teal
  },
};

export const mountainForgeTheme: RealmTheme = {
  name: "The Mountain Forge",
  colors: {
    primary: "#DB2777", // Pink
    secondary: "#F9A8D4", // Light pink
    background: "#5A0938", // Deep magenta
    backgroundLight: "#831843", // Medium magenta
    textDark: "#5A0938", // Dark text
    textLight: "#FDF2F8", // Light text
    accent1: "#F59E0B", // Amber accent
    accent2: "#E11D48", // Red accent
  },
};

// Collection of all realm themes
export const realmThemes: Record<number, RealmTheme> = {
  1: originTheme,      // Realm of Origins
  2: citadelTheme,     // The Central Citadel
  3: bioluminescentTheme, // The Forest of Sparks
  4: mountainForgeTheme,  // The Mountain Forge
  5: forksTheme,       // The Council of Forks
  6: ubuntuTheme,      // The Ubuntu Village
  7: groveTheme,       // The Summit of Knowledge
};

// Get a theme by realm ID, with fallback to a default
export function getRealmTheme(realmId: number): RealmTheme {
  return realmThemes[realmId] || originTheme;
}