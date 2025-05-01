import { createUseStyles } from 'react-jss';
import theme from './theme';

// Common styles for all Realm 2 missions
export const useCommonStyles = createUseStyles({
  '@global': {
    '@import': [
      "url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap')",
      "url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap')",
      "url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap')"
    ],
    'body': {
      margin: 0,
      padding: 0,
      fontFamily: theme.fonts.body,
      backgroundColor: theme.colors.background,
      color: theme.colors.textLight,
      overflowX: 'hidden',
    },
    '*': {
      boxSizing: 'border-box',
    }
  },

  // Layout components
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  
  mainContent: {
    minHeight: 'calc(100vh - 80px)',
    padding: '20px 0',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  
  surveillanceBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `${theme.patterns.grid}, ${theme.backgroundTexture}`,
    backgroundSize: '40px 40px, 100px 100px',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    opacity: 0.15,
    zIndex: -1,
  },
  
  // Card components
  card: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    boxShadow: theme.shadows.card,
    padding: '20px',
    margin: '20px 0',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.07)',
    },
  },
  
  glowCard: {
    extend: 'card',
    boxShadow: theme.shadows.neon,
    border: `1px solid ${theme.colors.primary}40`,
    '&:hover': {
      boxShadow: `0 0 20px ${theme.colors.primary}80, 0 0 40px ${theme.colors.primary}40`,
    },
  },
  
  securityCard: {
    extend: 'card',
    border: `1px solid ${theme.colors.accent1}40`,
    backgroundColor: `${theme.colors.background}`,
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'repeating-linear-gradient(45deg, rgba(255,171,0,0.05), rgba(255,171,0,0.05) 10px, transparent 10px, transparent 20px)',
      borderRadius: theme.borderRadius.default,
      zIndex: -1,
    },
  },
  
  // Typography
  heading: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.textLight,
    margin: '0 0 20px 0',
    letterSpacing: '1px',
  },
  
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: theme.colors.textLight,
    marginBottom: '1rem',
    fontFamily: theme.fonts.heading,
    letterSpacing: '1px',
  },
  
  subtitle: {
    fontSize: '1.2rem',
    color: theme.colors.softContrast,
    marginBottom: '2rem',
    fontWeight: 400,
  },
  
  paragraph: {
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    color: theme.colors.textLight,
    fontSize: '1rem',
  },
  
  codeText: {
    fontFamily: theme.fonts.mono,
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: '0.2em 0.4em',
    borderRadius: '3px',
    fontSize: '0.9em',
    color: theme.colors.accent1,
  },
  
  // Buttons
  button: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: theme.borderRadius.default,
    cursor: 'pointer',
    fontFamily: theme.fonts.body,
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s',
    boxShadow: theme.shadows.button,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    '&:hover': {
      backgroundColor: theme.colors.primaryAccent,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
    '&:disabled': {
      backgroundColor: theme.colors.secondaryAccent,
      cursor: 'not-allowed',
      opacity: 0.7,
    }
  },
  
  outlineButton: {
    backgroundColor: 'transparent',
    color: theme.colors.primary,
    border: `2px solid ${theme.colors.primary}`,
    padding: '10px 22px',
    borderRadius: theme.borderRadius.default,
    cursor: 'pointer',
    fontFamily: theme.fonts.body,
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'color 0.3s, border-color 0.3s, transform 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    '&:hover': {
      color: theme.colors.accent1,
      borderColor: theme.colors.accent1,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
  },
  
  // Alert and status elements
  alert: {
    padding: '15px 20px',
    borderRadius: theme.borderRadius.default,
    marginBottom: '20px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '0.95rem',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '4px',
      height: '100%',
      borderTopLeftRadius: theme.borderRadius.default,
      borderBottomLeftRadius: theme.borderRadius.default,
    }
  },
  
  errorMessage: {
    backgroundColor: 'rgba(255, 82, 82, 0.1)',
    color: theme.colors.primary,
    padding: '10px 15px',
    borderRadius: theme.borderRadius.default,
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '0.9rem',
    border: `1px solid ${theme.colors.primary}40`,
  },
  
  simulationIntro: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    marginBottom: '25px',
    color: theme.colors.textLight,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '15px 20px',
    borderRadius: theme.borderRadius.default,
    borderLeft: `4px solid ${theme.colors.primary}`,
  },
  
  warningAlert: {
    extend: 'alert',
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
    color: theme.colors.accent1,
    '&:before': {
      backgroundColor: theme.colors.accent1,
    }
  },
  
  dangerAlert: {
    extend: 'alert',
    backgroundColor: 'rgba(255, 82, 82, 0.1)',
    color: theme.colors.highlight,
    '&:before': {
      backgroundColor: theme.colors.highlight,
    }
  },
  
  infoAlert: {
    extend: 'alert',
    backgroundColor: 'rgba(84, 110, 122, 0.1)',
    color: theme.colors.softContrast,
    '&:before': {
      backgroundColor: theme.colors.softContrast,
    }
  },
  
  // Navigation
  navigationBar: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '15px 0',
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.header,
  },
  
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  navLogo: {
    fontFamily: theme.fonts.heading,
    fontSize: '1.5rem',
    color: theme.colors.textLight,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  
  navLinks: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  
  navLink: {
    color: theme.colors.softContrast,
    textDecoration: 'none',
    transition: 'color 0.3s',
    fontSize: '0.95rem',
    fontWeight: 500,
    padding: '5px 10px',
    borderRadius: theme.borderRadius.small,
    '&:hover': {
      color: theme.colors.textLight,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    '&.active': {
      color: theme.colors.accent1,
    }
  },
  
  // Utility classes
  flexRow: {
    display: 'flex',
    alignItems: 'center',
  },
  
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  textCenter: {
    textAlign: 'center',
  },
  
  mb1: { marginBottom: '0.5rem' },
  mb2: { marginBottom: '1rem' },
  mb3: { marginBottom: '1.5rem' },
  mb4: { marginBottom: '2rem' },
  mb5: { marginBottom: '3rem' },
  
  mt1: { marginTop: '0.5rem' },
  mt2: { marginTop: '1rem' },
  mt3: { marginTop: '1.5rem' },
  mt4: { marginTop: '2rem' },
  mt5: { marginTop: '3rem' },
  
  // Surveillance-specific elements
  surveillanceCamera: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:after': {
      content: '""',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'black',
      animation: '$pulse 2s infinite',
    }
  },
  
  securityBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 10px',
    borderRadius: theme.borderRadius.full,
    fontSize: '0.85rem',
    fontWeight: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    gap: '5px',
  },
  
  redactedText: {
    backgroundColor: 'rgba(255, 82, 82, 0.2)',
    color: 'transparent',
    padding: '0 5px',
    borderRadius: '2px',
    userSelect: 'none',
    position: 'relative',
    '&:after': {
      content: '"REDACTED"',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'rgba(255, 82, 82, 0.6)',
      fontSize: '0.7em',
      fontFamily: theme.fonts.mono,
      letterSpacing: '1px',
    }
  },
  
  terminal: {
    backgroundColor: '#121212',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    fontFamily: theme.fonts.mono,
    fontSize: '0.9rem',
    color: '#a0a0a0',
    lineHeight: 1.5,
    marginBottom: '20px',
    overflowX: 'auto',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '24px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderTopLeftRadius: theme.borderRadius.default,
      borderTopRightRadius: theme.borderRadius.default,
    }
  },
  
  cameraMonitor: {
    width: '100%',
    aspectRatio: '16/9',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: theme.borderRadius.default,
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 50%)',
      backgroundSize: '100% 4px',
      pointerEvents: 'none',
      animation: '$scanline 8s linear infinite',
    }
  },
  
  '@keyframes pulse': {
    '0%': { opacity: 0.6 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.6 },
  },
  
  '@keyframes scanline': {
    '0%': { transform: 'translateY(-100%)' },
    '100%': { transform: 'translateY(100%)' },
  },
  
  '@keyframes flicker': {
    '0%': { opacity: 0.8 },
    '5%': { opacity: 0.5 },
    '10%': { opacity: 0.8 },
    '15%': { opacity: 0.9 },
    '20%': { opacity: 0.7 },
    '25%': { opacity: 0.8 },
    '30%': { opacity: 1 },
    '100%': { opacity: 0.8 },
  },

  // Grid and layout
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  
  twoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  
  threeColumnGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

// Mission 1-specific styles
export const useMission1Styles = createUseStyles({
  controlPanel: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    padding: '25px',
    boxShadow: theme.shadows.card,
    marginBottom: '30px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  
  controlRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    '&:last-child': {
      borderBottom: 'none',
      marginBottom: 0,
    },
  },
  
  controlLabel: {
    fontFamily: theme.fonts.mono,
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
  },
  
  controlValue: {
    fontFamily: theme.fonts.mono,
    fontSize: '1rem',
    color: theme.colors.textLight,
    fontWeight: 600,
  },
  
  slider: {
    width: '100%',
    height: '4px',
    background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent1})`,
    borderRadius: theme.borderRadius.full,
    appearance: 'none',
    outline: 'none',
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: theme.colors.textLight,
      cursor: 'pointer',
      border: 'none',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    },
    '&::-moz-range-thumb': {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: theme.colors.textLight,
      cursor: 'pointer',
      border: 'none',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    },
  },
  
  bankingPanel: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    padding: '25px',
    boxShadow: theme.shadows.card,
    marginBottom: '30px',
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    overflow: 'hidden',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '10px',
      right: '10px',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: theme.colors.primary,
      boxShadow: '0 0 5px rgba(255, 82, 82, 0.5)',
      animation: '$pulse 2s infinite',
    },
  },
  
  decisionButton: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.textLight,
    border: 'none',
    padding: '15px 25px',
    borderRadius: theme.borderRadius.default,
    cursor: 'pointer',
    fontFamily: theme.fonts.body,
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s',
    boxShadow: theme.shadows.button,
    margin: '10px',
    width: 'calc(50% - 20px)',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      width: '100%',
    },
    '&:hover': {
      backgroundColor: theme.colors.secondaryAccent,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
  },
  
  decisionHighlight: {
    extend: 'decisionButton',
    backgroundColor: theme.colors.primary,
    '&:hover': {
      backgroundColor: theme.colors.primaryAccent,
    },
  },
  
  outcomeDisplay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    padding: '20px',
    margin: '20px 0',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  
  economyIndicator: {
    height: '30px',
    borderRadius: theme.borderRadius.full,
    background: 'linear-gradient(to right, #f44336, #ffeb3b, #4caf50)',
    marginTop: '5px',
    position: 'relative',
    overflow: 'hidden',
  },
  
  indicatorMarker: {
    position: 'absolute',
    width: '4px',
    height: '30px',
    backgroundColor: 'white',
    top: 0,
    transition: 'left 1s ease-out',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  },
});

// Mission 2-specific styles
export const useMission2Styles = createUseStyles({
  timelineContainer: {
    position: 'relative',
    padding: '20px 0',
  },
  
  timelineLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: '4px',
    backgroundColor: theme.colors.secondary,
    transform: 'translateX(-50%)',
  },
  
  timelineEvent: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '50px 0',
  },
  
  timelineLeft: {
    width: '45%',
    textAlign: 'right',
    padding: '20px',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    boxShadow: theme.shadows.card,
    marginRight: '5%',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      right: '-15px',
      top: '50%',
      width: '15px',
      height: '15px',
      backgroundColor: theme.colors.primary,
      borderRadius: '50%',
      transform: 'translateY(-50%)',
      boxShadow: '0 0 0 4px rgba(198, 40, 40, 0.3)',
    },
  },
  
  timelineRight: {
    width: '45%',
    textAlign: 'left',
    padding: '20px',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    boxShadow: theme.shadows.card,
    marginLeft: '5%',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '-15px',
      top: '50%',
      width: '15px',
      height: '15px',
      backgroundColor: theme.colors.primary,
      borderRadius: '50%',
      transform: 'translateY(-50%)',
      boxShadow: '0 0 0 4px rgba(198, 40, 40, 0.3)',
    },
  },
  
  timelineYear: {
    fontFamily: theme.fonts.heading,
    fontSize: '1.8rem',
    color: theme.colors.primary,
    marginBottom: '5px',
  },
  
  timelineTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: theme.colors.textLight,
  },
  
  timelineContent: {
    fontSize: '0.95rem',
    color: theme.colors.softContrast,
    lineHeight: 1.5,
  },
  
  dissolveContainer: {
    position: 'relative',
    width: '100%',
    height: '200px',
    borderRadius: theme.borderRadius.default,
    backgroundColor: theme.colors.cardBackground,
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  
  dissolveImage: {
    height: '80%',
    transition: 'opacity 1.5s ease-out',
  },
  
  priceTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '30px',
    borderRadius: theme.borderRadius.default,
    overflow: 'hidden',
  },
  
  tableRow: {
    '&:nth-child(even)': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  },
  
  tableHeader: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.textLight,
    fontWeight: 600,
    textAlign: 'left',
    padding: '12px 15px',
    fontSize: '1rem',
  },
  
  tableCell: {
    padding: '12px 15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    fontSize: '0.95rem',
  },
  
  priceHighlight: {
    color: theme.colors.accent1,
    fontWeight: 600,
  },
});

// Additional styles for other missions can be defined similarly
export const useMission3Styles = createUseStyles({
  heatmapContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  
  heatmapItem: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    padding: '20px',
    boxShadow: theme.shadows.card,
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  
  heatmapTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '15px',
    color: theme.colors.textLight,
  },
  
  heatmapScale: {
    display: 'flex',
    marginTop: '15px',
  },
  
  heatmapScaleItem: {
    flex: 1,
    height: '10px',
    '&:first-child': {
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
    },
    '&:last-child': {
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
    },
  },
  
  heatmapIndicator: {
    width: '100%',
    height: '100px',
    borderRadius: theme.borderRadius.default,
    background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.5), rgba(255, 235, 59, 0.5), rgba(244, 67, 54, 0.5))',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '10px',
  },
  
  dataPoint: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0 0 5px rgba(255, 255, 255, 0.7)',
  },
  
  privacyScore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  
  privacyLabel: {
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
  },
  
  privacyValue: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    fontFamily: theme.fonts.mono,
  },
  
  flowchart: {
    width: '100%',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: theme.borderRadius.default,
    marginBottom: '30px',
  },
  
  censorshipAlert: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: '8px 15px',
    borderRadius: theme.borderRadius.default,
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    margin: '5px 0',
    animation: '$pulse 2s infinite',
  },
});

export const useMission4Styles = createUseStyles({
  // Financial Exclusion in Africa specific styles
  exclusionCard: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    padding: '25px',
    boxShadow: theme.shadows.card,
    marginBottom: '20px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent1})`,
      borderBottomLeftRadius: theme.borderRadius.default,
      borderBottomRightRadius: theme.borderRadius.default,
    },
  },
  
  personaProfile: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  
  personaAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: theme.colors.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 600,
    color: 'white',
    flexShrink: 0,
  },
  
  personaInfo: {
    flex: 1,
  },
  
  personaName: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '5px',
    color: theme.colors.textLight,
  },
  
  personaLocation: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: theme.colors.softContrast,
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  
  barrier: {
    padding: '8px 15px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.default,
    fontSize: '0.9rem',
    marginBottom: '10px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: theme.colors.softContrast,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  
  barrierActive: {
    extend: 'barrier',
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
    color: theme.colors.accent1,
    borderColor: 'rgba(255, 171, 0, 0.2)',
  },
  
  connectionLine: {
    position: 'absolute',
    background: theme.colors.accent1,
    zIndex: -1,
    opacity: 0.5,
    transition: 'opacity 0.3s ease',
  },
  
  affectedGroup: {
    padding: '15px',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    boxShadow: theme.shadows.card,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    marginBottom: '15px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.07)',
    },
  },
  
  affectedGroupActive: {
    extend: 'affectedGroup',
    borderColor: theme.colors.accent1,
    boxShadow: `0 0 10px ${theme.colors.accent1}50`,
  },
  
  statBlock: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    marginBottom: '15px',
  },
  
  statValue: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: theme.colors.accent1,
    marginBottom: '5px',
    fontFamily: theme.fonts.heading,
  },
  
  statLabel: {
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
  },
});

export const useMission5Styles = createUseStyles({
  // Knowledge Test styles
  quizContainer: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    padding: '30px',
    boxShadow: theme.shadows.card,
    marginBottom: '30px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  
  questionNumber: {
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
    marginBottom: '10px',
    fontFamily: theme.fonts.mono,
  },
  
  questionText: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '20px',
    color: theme.colors.textLight,
    lineHeight: 1.4,
  },
  
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  
  option: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
  },
  
  optionSelected: {
    extend: 'option',
    borderColor: theme.colors.accent1,
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
  },
  
  optionCorrect: {
    extend: 'option',
    borderColor: '#4caf50',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
  
  optionIncorrect: {
    extend: 'option',
    borderColor: theme.colors.primary,
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
  },
  
  feedback: {
    padding: '15px',
    borderRadius: theme.borderRadius.default,
    marginTop: '15px',
    marginBottom: '25px',
  },
  
  feedbackCorrect: {
    extend: 'feedback',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderLeft: '4px solid #4caf50',
  },
  
  feedbackIncorrect: {
    extend: 'feedback',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    borderLeft: '4px solid #c62828',
  },
  
  reflectionArea: {
    width: '100%',
    minHeight: '150px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    fontFamily: theme.fonts.body,
    fontSize: '1rem',
    color: theme.colors.textLight,
    marginBottom: '20px',
    resize: 'vertical',
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.accent1,
    },
  },
  
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.full,
    marginBottom: '30px',
    position: 'relative',
    overflow: 'hidden',
  },
  
  progressFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: theme.colors.accent1,
    borderRadius: theme.borderRadius.full,
    transition: 'width 0.5s ease',
  },
});

export const useMission6Styles = createUseStyles({
  // The Rise of the Dollar styles
  globalMapContainer: {
    position: 'relative',
    width: '100%',
    height: '600px',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    overflow: 'hidden',
    marginBottom: '30px',
    boxShadow: theme.shadows.card,
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  
  mapControls: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  
  mapControl: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.default,
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  },
  
  timelineSelector: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 10,
  },
  
  timelineTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginBottom: '10px',
  },
  
  timelineTrack: {
    width: '100%',
    height: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: theme.borderRadius.full,
    position: 'relative',
  },
  
  timelineThumbnail: {
    width: '16px',
    height: '16px',
    backgroundColor: theme.colors.accent1,
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translate(-50%, -50%) scale(1.2)',
    },
  },
  
  timelineMarkers: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    fontSize: '0.8rem',
    color: theme.colors.softContrast,
  },
  
  connectionLine: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 171, 0, 0.3)',
    zIndex: 5,
    pointerEvents: 'none',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 171, 0, 0.8), transparent)',
      animation: '$flow 2s infinite linear',
    },
  },
  
  countryNode: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    zIndex: 10,
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
    },
  },
  
  countryNodeActive: {
    extend: 'countryNode',
    borderColor: theme.colors.accent1,
    boxShadow: `0 0 20px ${theme.colors.accent1}80`,
  },
  
  countryIcon: {
    width: '70%',
    height: '70%',
    objectFit: 'contain',
  },
  
  infoPanel: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    padding: '20px',
    boxShadow: theme.shadows.card,
    marginBottom: '30px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  
  historyEvent: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    padding: '20px',
    marginBottom: '20px',
    borderLeft: `4px solid ${theme.colors.primary}`,
  },
  
  eventDate: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: theme.colors.primary,
    marginBottom: '10px',
    fontFamily: theme.fonts.heading,
  },
  
  eventTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: theme.colors.textLight,
  },
  
  eventDescription: {
    fontSize: '0.95rem',
    color: theme.colors.softContrast,
    lineHeight: 1.5,
  },
  
  '@keyframes flow': {
    '0%': { backgroundPosition: '0% 0%' },
    '100%': { backgroundPosition: '200% 0%' },
  },
});

export const useBonusMissionStyles = createUseStyles({
  // Whisper Networks Bonus Mission styles
  gameBoard: {
    position: 'relative',
    width: '100%',
    minHeight: '500px',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    overflow: 'hidden',
    marginBottom: '30px',
    boxShadow: theme.shadows.card,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '20px',
  },
  
  playerToken: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: theme.colors.accent1,
    boxShadow: '0 0 15px rgba(255, 171, 0, 0.5)',
    zIndex: 15,
    transition: 'top 0.5s ease, left 0.5s ease',
  },
  
  gameTile: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    borderRadius: theme.borderRadius.default,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    },
  },
  
  gameTileActive: {
    extend: 'gameTile',
    borderColor: theme.colors.accent1,
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
  },
  
  gameTileDanger: {
    extend: 'gameTile',
    borderColor: theme.colors.primary,
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
  },
  
  gameControls: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  
  networkOption: {
    padding: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    cursor: 'pointer',
    flex: 1,
    marginRight: '10px',
    transition: 'background-color 0.3s',
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
  },
  
  networkOptionSelected: {
    extend: 'networkOption',
    borderColor: theme.colors.accent1,
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
  },
  
  networkName: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '5px',
    color: theme.colors.textLight,
  },
  
  networkDesc: {
    fontSize: '0.85rem',
    color: theme.colors.softContrast,
  },
  
  messagePanel: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    marginBottom: '20px',
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  
  messageSender: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: theme.colors.accent1,
    marginBottom: '5px',
  },
  
  messageContent: {
    fontSize: '0.95rem',
    color: theme.colors.textLight,
    lineHeight: 1.5,
  },
  
  securityLevel: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    position: 'absolute',
    top: '15px',
    right: '15px',
    fontSize: '0.8rem',
    color: theme.colors.accent1,
  },
});

export default useCommonStyles;