import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import theme from '../styles/theme';
import { useCommonStyles } from '../styles/missionStyles';
import { useMission1Styles } from '../styles/missionStyles';
import RealmLayout from '../components/RealmLayout';
import CentralBankerSimulator from './CentralBankerSimulator';
import { Info, HelpCircle, Maximize2, Minimize2 } from 'lucide-react';

const useStyles = createUseStyles({
  missionContainer: {
    marginBottom: '40px',
  },
  introduction: {
    backgroundColor: theme.colors.cardBackground,
    padding: '25px',
    borderRadius: theme.borderRadius.default,
    boxShadow: theme.shadows.card,
    marginBottom: '30px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  missionTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '15px',
    color: theme.colors.textLight,
    fontFamily: theme.fonts.heading,
  },
  missionDescription: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: theme.colors.softContrast,
    marginBottom: '20px',
  },
  infoBox: {
    backgroundColor: 'rgba(84, 110, 122, 0.1)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    border: '1px solid rgba(84, 110, 122, 0.2)',
  },
  infoIcon: {
    color: theme.colors.secondary,
    flexShrink: 0,
    marginTop: '2px',
  },
  infoContent: {
    fontSize: '0.95rem',
    color: theme.colors.softContrast,
    lineHeight: 1.5,
  },
  redText: {
    color: theme.colors.primary,
    fontWeight: 500,
  },
  highlightText: {
    color: theme.colors.accent1,
    fontWeight: 500,
  },
  simulationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  simulationTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    fontFamily: theme.fonts.heading,
  },
  controlButtons: {
    display: 'flex',
    gap: '10px',
  },
  iconButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: theme.colors.textLight,
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  helpPopup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    padding: '30px',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    maxWidth: '500px',
    width: '90%',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  helpTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '15px',
    color: theme.colors.textLight,
    fontFamily: theme.fonts.heading,
  },
  helpText: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: theme.colors.softContrast,
    marginBottom: '20px',
  },
  closeButton: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: theme.borderRadius.default,
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.colors.primaryAccent,
    },
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
  },
  fullScreenContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.background,
    zIndex: 1000,
    padding: '20px',
    overflow: 'auto',
  },
  fullScreenHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  fullScreenTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    fontFamily: theme.fonts.heading,
  },
});

const Mission1: React.FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const missionStyles = useMission1Styles();
  
  const [showHelp, setShowHelp] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };
  
  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <RealmLayout 
      title="Mission 2.1: Who Controls the Money?" 
      subtitle="Surveillance City - Central Banking & Power Module"
    >
      <div className={classes.missionContainer}>
        <div className={classes.introduction}>
          <h1 className={classes.missionTitle}>Who Controls the Money?</h1>
          <p className={classes.missionDescription}>
            In the heart of the Central Citadel, powerful entities control the flow of money, influencing inflation, unemployment, and wealth distribution. As you explore the mechanics of central banking, you'll discover how monetary decisions shape the lives of citizens across the globe.
          </p>
          
          <div className={classes.infoBox}>
            <Info className={classes.infoIcon} size={24} />
            <div className={classes.infoContent}>
              Central banks are powerful institutions that control the money supply and interest rates in most economies. Their decisions can benefit some groups while harming others. In this mission, you'll step into the role of a central banker to understand how these decisions impact different segments of society.
            </div>
          </div>
          
          <p className={classes.missionDescription}>
            Your first task is to use the <span className={classes.highlightText}>Central Bank Simulator</span> to explore how monetary policy decisions affect economic indicators and different groups in society. You'll discover the inherent trade-offs that central bankers face and who benefits or suffers from each decision.
          </p>
          
          <p className={classes.missionDescription}>
            Pay attention to how decisions that seem "good" for the economy as a whole might actually <span className={classes.redText}>increase inequality</span> or harm vulnerable populations. This tension is at the heart of monetary control systems.
          </p>
        </div>
        
        <div className={classes.simulationHeader}>
          <h2 className={classes.simulationTitle}>Central Bank Simulator</h2>
          <div className={classes.controlButtons}>
            <button className={classes.iconButton} onClick={toggleHelp} aria-label="Help">
              <HelpCircle size={18} />
            </button>
            <button className={classes.iconButton} onClick={toggleFullScreen} aria-label="Toggle fullscreen">
              {fullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>
        </div>
        
        {/* Main simulation component */}
        <CentralBankerSimulator />
      </div>
      
      {/* Help popup */}
      {showHelp && (
        <>
          <div className={classes.overlay} onClick={toggleHelp} />
          <div className={classes.helpPopup}>
            <h3 className={classes.helpTitle}>How to Use the Central Bank Simulator</h3>
            <div className={classes.helpText}>
              <p>In this simulation, you take on the role of a central banker making key monetary policy decisions:</p>
              <ul>
                <li><strong>Print Money</strong> - Increase the money supply, which can stimulate economic growth but may increase inflation.</li>
                <li><strong>Raise Interest Rates</strong> - Make borrowing more expensive, which can combat inflation but may slow growth and increase unemployment.</li>
                <li><strong>Lower Interest Rates</strong> - Make borrowing cheaper, which can stimulate economic activity but may increase inflation and asset bubbles.</li>
                <li><strong>No Action</strong> - Maintain current policy, allowing existing trends to continue.</li>
              </ul>
              <p>After each decision, you'll see how it affects:</p>
              <ul>
                <li>Inflation Rate</li>
                <li>Unemployment Rate</li>
                <li>Economic Growth</li>
                <li>Wealth Gap Index</li>
              </ul>
              <p>Pay special attention to which groups benefit and which suffer from your decisions. This reveals the power dynamics inherent in central banking.</p>
            </div>
            <button className={classes.closeButton} onClick={toggleHelp}>Close</button>
          </div>
        </>
      )}
      
      {/* Full screen mode */}
      {fullScreen && (
        <div className={classes.fullScreenContainer}>
          <div className={classes.fullScreenHeader}>
            <h2 className={classes.fullScreenTitle}>Central Bank Simulator</h2>
            <button className={classes.iconButton} onClick={toggleFullScreen}>
              <Minimize2 size={18} />
            </button>
          </div>
          
          <CentralBankerSimulator />
        </div>
      )}
    </RealmLayout>
  );
};

export default Mission1;