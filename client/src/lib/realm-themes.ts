<<<<<<< HEAD
export const originTheme = {
  name: "Origin Theme",
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
};

export const forestTheme = {
  name: "Forest Theme",
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

export const citadelTheme = {
  name: "Citadel Theme",
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
    scan: "scan 3s infinite",
  },
  borderRadius: {
    small: "0.25rem",
    default: "0.5rem",
    large: "0.75rem",
    full: "9999px",
  },
};

export const forksTheme = {
  name: "Forks Theme",
  colors: {
    primary: "#7B1FA2", // Purple
    secondary: "#E1BEE7", // Light purple
    background: "#2A0934", // Dark purple
    backgroundLight: "#4A148C", // Medium purple
    cardBackground: "#F9F0FC", // Very light purple
    textDark: "#2A0934", // Dark text
    textLight: "#F9F0FC", // Light text
    accent1: "#00BCD4", // Cyan accent
    accent2: "#CE93D8", // Light purple accent
  },
  // Other theme properties similar to originTheme
};

export const ubuntuTheme = {
  name: "Ubuntu Theme",
  colors: {
    primary: "#E53935", // Red
    secondary: "#FFCDD2", // Light red
    background: "#3E0000", // Dark red
    backgroundLight: "#5D0000", // Medium red
    cardBackground: "#FFF5F5", // Very light red
    textDark: "#3E0000", // Dark text
    textLight: "#FFF5F5", // Light text
    accent1: "#43A047", // Green accent
    accent2: "#EF9A9A", // Light red accent
  },
  // Other theme properties similar to originTheme
};

export const groveTheme = {
  name: "Grove Theme",
  colors: {
    primary: "#00695C", // Teal
    secondary: "#B2DFDB", // Light teal
    background: "#003D33", // Dark teal
    backgroundLight: "#00796B", // Medium teal
    cardBackground: "#E0F2F1", // Very light teal
    textDark: "#003D33", // Dark text
    textLight: "#E0F2F1", // Light text
    accent1: "#FFC107", // Amber accent
    accent2: "#4DB6AC", // Light teal accent
  },
  // Other theme properties similar to originTheme
};

export const bioluminescentTheme = {
  name: "Bioluminescent Forest Theme",
  colors: {
    primary: "#06D6A0", // Vibrant teal/mint
    secondary: "#22CAAF", // Lighter teal
    background: "#073B4C", // Dark blue-green
    backgroundLight: "#118AB2", // Medium blue
    cardBackground: "#F0FFF4", // Very light mint
    textDark: "#073B4C", // Dark text
    textLight: "#F0FFF4", // Light text
    accent1: "#7209B7", // Purple accent
    accent2: "#4CC9F0", // Cyan accent
    highlight: "#06D6A0", // Mint highlight
    warning: "#FFD166", // Amber warning
  },
  patterns: {
    grid: `linear-gradient(rgba(6, 214, 160, 0.1) 1px, transparent 1px),
    linear-gradient(to right, rgba(6, 214, 160, 0.1) 1px, transparent 1px)`,
    leaves: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,20 C40,10 60,10 80,20 C90,40 90,60 80,80 C60,90 40,90 20,80 C10,60 10,40 20,20 Z' fill='none' stroke='rgba(6, 214, 160, 0.1)' stroke-width='1'/%3E%3C/svg%3E")`,
    dots: `radial-gradient(rgba(6, 214, 160, 0.2) 1px, transparent 1px)`,
    code: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,30 L10,50 L30,70 M70,30 L90,50 L70,70 M40,20 L60,80' fill='none' stroke='rgba(6, 214, 160, 0.1)' stroke-width='1'/%3E%3C/svg%3E")`,
  },
  gradients: {
    glow: "linear-gradient(to right, #06D6A0, #4CC9F0)",
    purple: "linear-gradient(to right, #7209B7, #4CC9F0)",
    aurora: "linear-gradient(135deg, #073B4C 0%, #118AB2 50%, #06D6A0 100%)",
    radial: "radial-gradient(circle, rgba(6, 214, 160, 0.2) 0%, transparent 70%)",
  },
  shadows: {
    card: "0 4px 12px rgba(7, 59, 76, 0.15), 0 1px 3px rgba(7, 59, 76, 0.1)",
    button: "0 2px 4px rgba(6, 214, 160, 0.2), 0 0 10px rgba(6, 214, 160, 0.1)",
    glow: "0 0 15px rgba(6, 214, 160, 0.3)",
    inner: "inset 0 2px 4px rgba(7, 59, 76, 0.05)",
  },
  animations: {
    pulse: "pulse 3s infinite",
    float: "float 6s ease-in-out infinite",
    shimmer: "shimmer 2.5s linear infinite",
  },
  borderRadius: {
    small: "0.375rem",
    default: "0.75rem",
    large: "1rem",
    full: "9999px",
  },
};

export const mountainForgeTheme = {
  name: "Mountain Forge Theme",
  colors: {
    primary: "#D97706", // Amber/gold
    secondary: "#F59E0B", // Lighter amber
    background: "#292524", // Dark brown/charcoal
    backgroundLight: "#44403C", // Medium brown
    cardBackground: "#FFFBEB", // Very light amber
    textDark: "#292524", // Dark text
    textLight: "#FFFBEB", // Light text
    accent1: "#B91C1C", // Fiery red accent
    accent2: "#FBBF24", // Yellow accent
    highlight: "#D97706", // Amber highlight
    warning: "#DC2626", // Red warning
  },
  patterns: {
    grid: `linear-gradient(rgba(217, 119, 6, 0.1) 1px, transparent 1px),
    linear-gradient(to right, rgba(217, 119, 6, 0.1) 1px, transparent 1px)`,
    mountains: `url("data:image/svg+xml,%3Csvg width='100' height='50' viewBox='0 0 100 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 L20,15 L40,35 L60,5 L80,30 L100,20 L100,50 Z' fill='rgba(217, 119, 6, 0.05)'/%3E%3C/svg%3E")`,
    dots: `radial-gradient(rgba(217, 119, 6, 0.2) 1px, transparent 1px)`,
    forge: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,70 L30,30 L70,30 L70,70 Z M40,40 L60,40 L60,60 L40,60 Z' fill='none' stroke='rgba(217, 119, 6, 0.1)' stroke-width='1'/%3E%3C/svg%3E")`,
    circuits: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,10 h20 v20 h20 v20 h-20 v20 h-20 z M60,10 h20 v20 h-20 z M60,50 h20 v20 h-20 z' fill='none' stroke='rgba(217, 119, 6, 0.1)' stroke-width='1'/%3E%3C/svg%3E")`,
  },
  gradients: {
    amber: "linear-gradient(to right, #D97706, #FBBF24)",
    fire: "linear-gradient(to right, #B91C1C, #F59E0B)",
    forge: "linear-gradient(135deg, #292524 0%, #44403C 50%, #78350F 100%)",
    radial: "radial-gradient(circle, rgba(217, 119, 6, 0.2) 0%, transparent 70%)",
    warmGlow: "linear-gradient(to bottom, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.05))",
  },
  shadows: {
    card: "0 4px 12px rgba(41, 37, 36, 0.15), 0 1px 3px rgba(41, 37, 36, 0.1)",
    button: "0 2px 4px rgba(217, 119, 6, 0.25), 0 0 10px rgba(251, 191, 36, 0.1)",
    glow: "0 0 15px rgba(217, 119, 6, 0.3)",
    inner: "inset 0 2px 4px rgba(41, 37, 36, 0.1)",
    ambient: "0 8px 30px rgba(185, 28, 28, 0.1)",
  },
  animations: {
    pulse: "pulse 3s infinite",
    float: "float 6s ease-in-out infinite",
    flicker: "flicker 5s ease-in-out infinite",
    forge: "forge 3s ease-in-out infinite",
  },
  borderRadius: {
    small: "0.25rem",
    default: "0.5rem",
    large: "0.75rem",
    full: "9999px",
  },
};
=======
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
>>>>>>> 0652a0db822258f9bfa7da88533be0a2088f509a
