export const theme = {
  colors: {
    primary: '#c62828', // Deep red - representing surveillance and control
    secondary: '#455a64', // Blue-grey - representing urban/city feeling
    background: '#1a1a1a', // Dark background for surveillance theme
    backgroundLight: '#2a2a2a',
    cardBackground: '#262626',
    textDark: '#0d0d0d',
    textLight: '#f0f0f0',
    accent1: '#ffab00', // Amber - resistance color
    accent2: '#546e7a', // Lighter blue-grey for contrast
    highlight: '#ff5252', // Bright red for alerts
    alert: '#ff3d00',
    primaryAccent: '#b71c1c',
    darkText: '#121212',
    secondaryAccent: '#37474f',
    softContrast: '#78909c',
    gradientStart: '#1a1a1a',
    gradientEnd: '#292929',
    danger: '#ff0000', // Red for danger/error messages
  },
  patterns: {
    grid: 'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 40px)',
    cityscape: 'linear-gradient(0deg, rgba(0,0,0,0.8), transparent 80%), url("/images/city-surveillance.jpg")',
    dots: 'radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px)',
    circuits: 'url("/images/circuit-pattern.svg")',
  },
  gradients: {
    sunset: 'linear-gradient(135deg, #c62828 0%, #ff5252 100%)',
    danger: 'linear-gradient(135deg, #b71c1c 0%, #ff5252 100%)',
    blue: 'linear-gradient(135deg, #37474f 0%, #78909c 100%)',
    tech: 'linear-gradient(135deg, #263238 0%, #546e7a 100%)',
    glow: 'radial-gradient(circle at center, rgba(255, 171, 0, 0.2), transparent 70%)',
  },
  shadows: {
    card: '0 4px 20px rgba(0, 0, 0, 0.25), 0 2px 5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    button: '0 2px 10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    neon: '0 0 15px rgba(255, 82, 82, 0.5), 0 0 30px rgba(255, 82, 82, 0.3)',
    inner: 'inset 0 2px 5px rgba(0, 0, 0, 0.3)',
  },
  animations: {
    pulse: 'pulse 2s infinite',
    glow: 'glow 3s infinite',
  },
  borderRadius: {
    small: '4px',
    default: '8px',
    large: '12px',
    full: '9999px',
    input: '6px',
    button: '8px',
    card: '10px',  // Adding card border radius
  },
  patternClass: 'surveillance-pattern',
  backgroundTexture: 'url("/images/noise-texture.png")',
  zIndex: {
    base: 1,
    modal: 100,
    tooltip: 50,
    header: 10,
  },
  fonts: {
    heading: "'Orbitron', sans-serif",
    body: "'Barlow', sans-serif",
    mono: "'IBM Plex Mono', monospace",
  }
};

// CSS animations
export const keyframes = `
  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
  
  @keyframes glow {
    0% {
      box-shadow: 0 0 5px rgba(255, 82, 82, 0.5), 0 0 10px rgba(255, 82, 82, 0.3);
    }
    50% {
      box-shadow: 0 0 15px rgba(255, 82, 82, 0.8), 0 0 30px rgba(255, 82, 82, 0.5);
    }
    100% {
      box-shadow: 0 0 5px rgba(255, 82, 82, 0.5), 0 0 10px rgba(255, 82, 82, 0.3);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes scanline {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  
  @keyframes flicker {
    0% {
      opacity: 0.8;
    }
    5% {
      opacity: 0.5;
    }
    10% {
      opacity: 0.8;
    }
    15% {
      opacity: 0.9;
    }
    20% {
      opacity: 0.7;
    }
    25% {
      opacity: 0.8;
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 0.8;
    }
  }
`;

// Export the theme for use in components
export default theme;