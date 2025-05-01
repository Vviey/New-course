import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import theme from '../styles/theme';
import { useCommonStyles } from '../styles/missionStyles';

interface SimulationFrameProps {
  children: ReactNode;
  title: string;
  description?: string;
  securityLevel?: 'low' | 'medium' | 'high';
  isMonitored?: boolean;
}

const useStyles = createUseStyles({
  simulationContainer: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    padding: '10px',
    boxShadow: theme.shadows.card,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    margin: '20px 0',
    overflow: 'hidden',
    position: 'relative',
  },
  simulationHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderTopLeftRadius: theme.borderRadius.default,
    borderTopRightRadius: theme.borderRadius.default,
  },
  simulationTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    fontFamily: theme.fonts.heading,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  simulationDescription: {
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
    marginBottom: '15px',
    padding: '15px 15px 0 15px',
  },
  simulationContent: {
    padding: '15px',
    position: 'relative',
  },
  securityBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: 500,
  },
  lowSecurity: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    color: '#4caf50',
  },
  mediumSecurity: {
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
    color: theme.colors.accent1,
  },
  highSecurity: {
    backgroundColor: 'rgba(255, 82, 82, 0.1)',
    color: theme.colors.primary,
  },
  monitoredBadge: {
    backgroundColor: 'rgba(255, 82, 82, 0.1)',
    color: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: 500,
  },
  blinkingDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    animation: '$pulse 2s infinite',
  },
  scanLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    backgroundImage: `linear-gradient(90deg, ${theme.colors.primary}00, ${theme.colors.primary}, ${theme.colors.primary}00)`,
    animation: '$scanline 3s linear infinite',
    opacity: 0.6,
    zIndex: 10,
    pointerEvents: 'none',
  },
  '@keyframes scanline': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(100vh)' },
  },
  '@keyframes pulse': {
    '0%': { opacity: 0.4 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.4 },
  },
});

const SimulationFrame: React.FC<SimulationFrameProps> = ({
  children,
  title,
  description,
  securityLevel = 'medium',
  isMonitored = false,
}) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  
  // Get the security badge class based on security level
  const getSecurityBadgeClass = () => {
    switch (securityLevel) {
      case 'low':
        return classes.lowSecurity;
      case 'medium':
        return classes.mediumSecurity;
      case 'high':
        return classes.highSecurity;
      default:
        return classes.mediumSecurity;
    }
  };
  
  // Get security label text
  const getSecurityLabel = () => {
    switch (securityLevel) {
      case 'low':
        return 'Low Security';
      case 'medium':
        return 'Medium Security';
      case 'high':
        return 'High Security';
      default:
        return 'Medium Security';
    }
  };

  return (
    <div className={classes.simulationContainer}>
      <div className={classes.simulationHeader}>
        <h3 className={classes.simulationTitle}>
          <span>{title}</span>
        </h3>
        <div className={commonClasses.flexRow}>
          <div className={`${classes.securityBadge} ${getSecurityBadgeClass()}`}>
            <span>{getSecurityLabel()}</span>
          </div>
          
          {isMonitored && (
            <div className={classes.monitoredBadge} style={{ marginLeft: '10px' }}>
              <div className={classes.blinkingDot} />
              <span>MONITORING ACTIVE</span>
            </div>
          )}
        </div>
      </div>
      
      {description && (
        <div className={classes.simulationDescription}>
          {description}
        </div>
      )}
      
      <div className={classes.simulationContent}>
        {children}
      </div>
      
      {isMonitored && <div className={classes.scanLine} />}
    </div>
  );
};

export default SimulationFrame;