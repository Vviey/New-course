import React, { ReactNode } from 'react';
import { useLocation, Link } from 'wouter';
import { createUseStyles } from 'react-jss';
import theme from '../styles/theme';
import { useCommonStyles } from '../styles/missionStyles';
import { Eye, ArrowLeft, ChevronRight, Lock, Shield, Database } from 'lucide-react';

interface RealmLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  backTo?: string;
}

const useStyles = createUseStyles({
  header: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '15px 0',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  titleArea: {
    display: 'flex',
    alignItems: 'center',
  },
  backButton: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: theme.colors.textLight,
    marginRight: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  titleContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  pageTitle: {
    fontFamily: theme.fonts.heading,
    fontSize: '1.5rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: 0,
    letterSpacing: '1px',
  },
  pageSubtitle: {
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
    margin: '5px 0 0 0',
  },
  actionsArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    fontSize: '0.85rem',
    color: theme.colors.softContrast,
  },
  securityIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '20px',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    fontSize: '0.85rem',
    color: theme.colors.primary,
  },
  surveillanceCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.85rem',
    color: theme.colors.primary,
  },
  footer: {
    backgroundColor: 'rgba(26, 26, 26, 0.7)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '20px 0',
    marginTop: 'auto',
  },
  footerContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLinks: {
    display: 'flex',
    gap: '20px',
  },
  footerLink: {
    color: theme.colors.softContrast,
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.colors.textLight,
    },
  },
  footerText: {
    color: theme.colors.softContrast,
    fontSize: '0.9rem',
  },
  surveillanceIndicator: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(5px)',
    padding: '10px 15px',
    borderRadius: '30px',
    border: `1px solid ${theme.colors.primary}40`,
    zIndex: 1000,
    fontSize: '0.85rem',
    color: theme.colors.textLight,
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  blinkingDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': { opacity: 0.4 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.4 },
  },
});

const RealmLayout: React.FC<RealmLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  showBackButton = true,
  backTo = '/realm/2'
}) => {
  const commonClasses = useCommonStyles();
  const classes = useStyles();
  const [, setLocation] = useLocation();
  
  // Simulate surveillance count that slowly increases
  const [surveillanceAttempts, setSurveillanceAttempts] = React.useState(3);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSurveillanceAttempts(prev => prev + 1);
    }, 45000); // Increase every 45 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const handleBackClick = () => {
    setLocation(backTo);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: theme.colors.background,
      color: theme.colors.textLight,
      position: 'relative'
    }}>
      {/* Background with surveillance grid pattern */}
      <div className={commonClasses.surveillanceBackground} />
      
      {/* Header */}
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <div className={classes.titleArea}>
            {showBackButton && (
              <button className={classes.backButton} onClick={handleBackClick} aria-label="Go back">
                <ArrowLeft size={20} />
              </button>
            )}
            <div className={classes.titleContent}>
              <h1 className={classes.pageTitle}>{title}</h1>
              {subtitle && <p className={classes.pageSubtitle}>{subtitle}</p>}
            </div>
          </div>
          
          <div className={classes.actionsArea}>
            <div className={classes.statusIndicator}>
              <Database size={16} />
              <span>System data encrypted</span>
            </div>
            <div className={classes.securityIndicator}>
              <Shield size={16} />
              <span>Privacy Shield Active</span>
            </div>
            <div className={classes.surveillanceCount}>
              <Eye size={16} />
              <span>{surveillanceAttempts} attempts blocked</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className={commonClasses.mainContent}>
        <div className={commonClasses.container}>
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={classes.footerLinks}>
            <Link href="/home" className={classes.footerLink}>Home</Link>
            <Link href="/realm/2" className={classes.footerLink}>Realm 2 Map</Link>
            <Link href="/map" className={classes.footerLink}>Global Map</Link>
          </div>
          <div className={classes.footerText}>
            Surveillance Citadel | Central Control
          </div>
        </div>
      </footer>
      
      {/* Fixed surveillance indicator */}
      <div className={classes.surveillanceIndicator}>
        <div className={classes.blinkingDot} />
        <Lock size={14} />
        <span>Connection Encrypted</span>
        <div className={classes.blinkingDot} />
        <Shield size={14} />
        <span>Firewall Active</span>
        <div className={classes.blinkingDot} />
        <Eye size={14} />
        <span>{surveillanceAttempts} Surveillance Attempts Blocked</span>
      </div>
    </div>
  );
};

export default RealmLayout;