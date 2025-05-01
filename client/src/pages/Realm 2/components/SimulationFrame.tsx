import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import theme from '../styles/theme';
import { useCommonStyles } from '../styles/missionStyles';
import { Shield, AlertTriangle, Lock, Eye } from 'lucide-react';

interface SimulationFrameProps {
  children: ReactNode;
  title: string;
  description?: string;
  securityLevel?: 'low' | 'medium' | 'high';
}

const useStyles = createUseStyles({
  simulationContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: theme.shadows.card,
    marginBottom: '20px',
  },
  simulationHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  simulationTitle: {
    color: theme.colors.textLight,
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: 600,
    fontFamily: theme.fonts.heading,
  },
  simulationDescription: {
    color: theme.colors.softContrast,
    fontSize: '0.85rem',
    margin: 0,
  },
  securityBadge: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 10px',
    borderRadius: theme.borderRadius.full,
    fontSize: '0.8rem',
    fontWeight: 500,
    gap: '5px',
  },
  lowSecurity: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    border: '1px solid rgba(76, 175, 80, 0.2)',
    color: '#4caf50',
  },
  mediumSecurity: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    border: '1px solid rgba(255, 193, 7, 0.2)',
    color: '#ffc107',
  },
  highSecurity: {
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    border: '1px solid rgba(198, 40, 40, 0.2)',
    color: theme.colors.primary,
  },
  simulationContent: {
    padding: '20px',
  },
  controlPanel: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    display: 'flex',
    gap: '5px',
  },
  controlButton: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    color: theme.colors.softContrast,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: theme.colors.textLight,
    },
  },
  cameraIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    top: '15px',
    right: '15px',
    boxShadow: `0 0 5px ${theme.colors.primary}80`,
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': { opacity: 0.6, boxShadow: `0 0 3px ${theme.colors.primary}40` },
    '50%': { opacity: 1, boxShadow: `0 0 8px ${theme.colors.primary}80` },
    '100%': { opacity: 0.6, boxShadow: `0 0 3px ${theme.colors.primary}40` },
  },
});

const SimulationFrame: React.FC<SimulationFrameProps> = ({
  children,
  title,
  description,
  securityLevel = 'medium'
}) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  
  const getSecurityIcon = () => {
    switch (securityLevel) {
      case 'low':
        return <Shield size={14} />;
      case 'medium':
        return <AlertTriangle size={14} />;
      case 'high':
        return <Lock size={14} />;
      default:
        return <Shield size={14} />;
    }
  };
  
  const getSecurityClass = () => {
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
  
  const getSecurityText = () => {
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
        <div className={classes.titleSection}>
          <h3 className={classes.simulationTitle}>{title}</h3>
          {description && <p className={classes.simulationDescription}>{description}</p>}
        </div>
        
        <div className={`${classes.securityBadge} ${getSecurityClass()}`}>
          {getSecurityIcon()}
          <span>{getSecurityText()}</span>
        </div>
      </div>
      
      <div className={classes.cameraIndicator} />
      
      <div className={classes.simulationContent}>
        {children}
      </div>
    </div>
  );
};

export default SimulationFrame;