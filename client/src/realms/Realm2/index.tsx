import React from 'react';
import { useLocation, Link } from 'wouter';
import { createUseStyles } from 'react-jss';
import theme from './styles/theme';
import { useCommonStyles } from './styles/missionStyles';
import { Eye, Shield, Lock, ArrowRight, AlertTriangle, Building2, BriefcaseBusiness, Landmark, Navigation, BarChart4 } from 'lucide-react';

interface MissionCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isCompleted?: boolean;
  isLocked?: boolean;
  onClick: () => void;
}

const useStyles = createUseStyles({
  realmContainer: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    color: theme.colors.textLight,
    position: 'relative',
    padding: '0 0 50px 0',
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
    zIndex: 0,
  },
  header: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '20px 0',
    position: 'relative',
    zIndex: 1,
  },
  headerContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
  },
  navigationRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: 'none',
    padding: '8px 15px',
    borderRadius: theme.borderRadius.default,
    color: theme.colors.textLight,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '0.9rem',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  surveillanceIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  securityBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 82, 82, 0.1)',
    fontSize: '0.85rem',
    color: theme.colors.primary,
  },
  warningBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
    fontSize: '0.85rem',
    color: theme.colors.accent1,
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '30px',
  },
  realmTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '15px',
    fontFamily: theme.fonts.heading,
    letterSpacing: '1px',
    background: theme.gradients.danger,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  realmSubtitle: {
    fontSize: '1.2rem',
    color: theme.colors.softContrast,
    maxWidth: '800px',
    margin: '0 auto 20px auto',
    lineHeight: 1.6,
  },
  contentContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    position: 'relative',
    zIndex: 1,
  },
  introCard: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    padding: '30px',
    boxShadow: theme.shadows.card,
    marginBottom: '40px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  introTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    fontFamily: theme.fonts.heading,
  },
  introParagraph: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: theme.colors.softContrast,
  },
  highlightText: {
    color: theme.colors.primary,
    fontWeight: 500,
  },
  warningBox: {
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
    border: '1px solid rgba(255, 171, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
  },
  warningIcon: {
    color: theme.colors.accent1,
    flexShrink: 0,
  },
  warningContent: {
    fontSize: '0.95rem',
    color: theme.colors.softContrast,
  },
  missionsTitle: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '20px',
    color: theme.colors.textLight,
    fontFamily: theme.fonts.heading,
  },
  missionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  missionCard: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    boxShadow: theme.shadows.card,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.07)',
    },
  },
  missionHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  missionIcon: {
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
  },
  missionNumber: {
    fontSize: '0.85rem',
    color: theme.colors.softContrast,
    marginBottom: '5px',
  },
  missionTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
  },
  missionContent: {
    padding: '15px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  missionDescription: {
    fontSize: '0.95rem',
    color: theme.colors.softContrast,
    marginBottom: '20px',
    lineHeight: 1.5,
    flexGrow: 1,
  },
  missionButton: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: theme.borderRadius.default,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 0.3s',
    marginTop: 'auto',
    '&:hover': {
      backgroundColor: theme.colors.primaryAccent,
    },
    '&:disabled': {
      backgroundColor: theme.colors.secondaryAccent,
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
  completedBadge: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    color: '#4caf50',
    padding: '4px 8px',
    borderRadius: theme.borderRadius.full,
    fontSize: '0.75rem',
    fontWeight: 500,
    marginLeft: 'auto',
  },
  lockedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(3px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 2,
    borderRadius: theme.borderRadius.default,
  },
  lockedIcon: {
    color: theme.colors.textLight,
    opacity: 0.7,
  },
  lockedText: {
    color: theme.colors.textLight,
    opacity: 0.7,
    fontSize: '0.9rem',
    fontWeight: 500,
  },
  bonusSection: {
    marginTop: '40px',
  },
  bonusTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '20px',
    color: theme.colors.textLight,
    fontFamily: theme.fonts.heading,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  bonusBadge: {
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
    color: theme.colors.accent1,
    padding: '4px 8px',
    borderRadius: theme.borderRadius.full,
    fontSize: '0.8rem',
    fontWeight: 500,
  },
  bonusCard: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    boxShadow: theme.shadows.card,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.07)',
    },
  },
  bonusHeader: {
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
    padding: '15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  bonusIcon: {
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.accent1,
  },
  bonusContent: {
    padding: '20px',
  },
  bonusDescription: {
    fontSize: '0.95rem',
    color: theme.colors.softContrast,
    marginBottom: '20px',
    lineHeight: 1.5,
  },
  bonusButton: {
    backgroundColor: theme.colors.accent1,
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: theme.borderRadius.default,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: `${theme.colors.accent1}d0`,
    },
    '&:disabled': {
      backgroundColor: theme.colors.secondaryAccent,
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
  surveillanceNotice: {
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
    zIndex: 100,
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

// Mission card component
const MissionCard: React.FC<MissionCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  isCompleted = false, 
  isLocked = false,
  onClick 
}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.missionCard} style={{ position: 'relative' }}>
      <div className={classes.missionHeader}>
        <div className={classes.missionIcon}>
          {icon}
        </div>
        <div>
          <div className={classes.missionNumber}>Mission 2.{id}</div>
          <div className={classes.missionTitle}>{title}</div>
        </div>
        {isCompleted && (
          <div className={classes.completedBadge}>Completed</div>
        )}
      </div>
      <div className={classes.missionContent}>
        <div className={classes.missionDescription}>{description}</div>
        <button 
          className={classes.missionButton} 
          onClick={onClick}
          disabled={isLocked}
        >
          Start Mission <ArrowRight size={16} />
        </button>
      </div>
      
      {isLocked && (
        <div className={classes.lockedOverlay}>
          <Lock size={24} className={classes.lockedIcon} />
          <div className={classes.lockedText}>Complete previous missions to unlock</div>
        </div>
      )}
    </div>
  );
};

const Realm2: React.FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const [, setLocation] = useLocation();
  
  // Mission data
  const missions = [
    {
      id: 1,
      title: "Who Controls the Money?",
      description: "Explore central banking systems and how monetary policy decisions impact different groups in society. Experience the power dynamics of controlling a nation's money supply.",
      icon: <Landmark size={20} />,
      path: "/realm2/mission/1",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 2,
      title: "The Silent Tax — Inflation",
      description: "Understand how inflation erodes savings and functions as a hidden tax. Witness how monetary debasement affects different social classes over time.",
      icon: <BarChart4 size={20} />,
      path: "/realm2/mission/2", 
      isCompleted: false,
      isLocked: true
    },
    {
      id: 3,
      title: "Surveillance & Censorship",
      description: "Discover how digital payment systems enable financial surveillance and censorship. Trace the flow of sensitive transaction data through the financial system.",
      icon: <Eye size={20} />,
      path: "/realm2/mission/3",
      isCompleted: false,
      isLocked: true
    },
    {
      id: 4,
      title: "Financial Exclusion in Africa",
      description: "Learn about who is locked out of banking systems and why. Connect barriers to financial access with affected populations across the continent.",
      icon: <Building2 size={20} />,
      path: "/realm2/mission/4",
      isCompleted: false,
      isLocked: true
    },
    {
      id: 5,
      title: "Knowledge Test — Fiat vs Freedom",
      description: "Test your knowledge of fiat money vulnerabilities and their impact on personal sovereignty through challenging scenario-based questions.",
      icon: <BriefcaseBusiness size={20} />,
      path: "/realm2/mission/5",
      isCompleted: false,
      isLocked: true
    },
    {
      id: 6,
      title: "The Rise of the Dollar",
      description: "Trace the global dominance of the dollar from Bretton Woods to the petrodollar system. Visualize international money flows and power dynamics.",
      icon: <Navigation size={20} />,
      path: "/realm2/mission/6",
      isCompleted: false,
      isLocked: true
    },
  ];
  
  const handleBack = () => {
    setLocation('/home');
  };
  
  const handleMissionClick = (path: string) => {
    setLocation(path);
  };
  
  const handleBonusMissionClick = () => {
    setLocation('/realm2/mission/bonus');
  };

  return (
    <div className={classes.realmContainer}>
      {/* Background with surveillance grid pattern */}
      <div className={classes.surveillanceBackground} />
      
      {/* Header */}
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <div className={classes.navigationRow}>
            <button className={classes.backButton} onClick={handleBack}>
              ← Back to Home
            </button>
            
            <div className={classes.surveillanceIndicator}>
              <div className={classes.securityBadge}>
                <Shield size={14} />
                <span>Privacy Mode Active</span>
              </div>
              <div className={classes.warningBadge}>
                <AlertTriangle size={14} />
                <span>Surveillance Zone</span>
              </div>
            </div>
          </div>
          
          <div className={classes.headerContent}>
            <h1 className={classes.realmTitle}>The Central Citadel</h1>
            <p className={classes.realmSubtitle}>
              Navigate the panopticon of financial control using ancestral wisdom and crypto tools. In this surveillance city, you'll discover how money is controlled, monitored, and weaponized — and how to resist these systems.
            </p>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className={classes.contentContainer}>
        {/* Introduction */}
        <div className={classes.introCard}>
          <h2 className={classes.introTitle}>Welcome to the Surveillance City</h2>
          <p className={classes.introParagraph}>
            In this realm, you will navigate a dystopian city where financial control systems are fully deployed. Central authorities monitor and control the flow of money, creating both winners and losers through their policies. You'll learn how inflation silently erodes savings, how surveillance systems track financial movements, and how these systems exclude many from participation.
          </p>
          <p className={classes.introParagraph}>
            But more importantly, you'll discover tools and strategies to <span className={classes.highlightText}>protect your financial sovereignty</span> in such a world. Each mission will reveal both the challenges and the solutions available to those who seek financial freedom.
          </p>
          
          <div className={classes.warningBox}>
            <AlertTriangle className={classes.warningIcon} size={24} />
            <div className={classes.warningContent}>
              <strong>Security Alert:</strong> This realm contains sensitive information about financial control systems. Be aware that knowledge of these systems may change how you view the existing financial order. Proceed with caution and an open mind.
            </div>
          </div>
        </div>
        
        {/* Missions */}
        <h2 className={classes.missionsTitle}>Available Missions</h2>
        <div className={classes.missionsGrid}>
          {missions.map((mission) => (
            <MissionCard
              key={mission.id}
              id={mission.id}
              title={mission.title}
              description={mission.description}
              icon={mission.icon}
              isCompleted={mission.isCompleted}
              isLocked={mission.isLocked}
              onClick={() => handleMissionClick(mission.path)}
            />
          ))}
        </div>
        
        {/* Bonus Mission */}
        <div className={classes.bonusSection}>
          <h2 className={classes.bonusTitle}>
            Bonus Mission <span className={classes.bonusBadge}>Special Challenge</span>
          </h2>
          
          <div className={classes.bonusCard}>
            <div className={classes.bonusHeader}>
              <div className={classes.bonusIcon}>
                <Shield size={20} />
              </div>
              <div>
                <div className={classes.missionNumber}>Special Challenge</div>
                <div className={classes.missionTitle}>Whisper Networks: Escape the Surveillance</div>
              </div>
            </div>
            <div className={classes.bonusContent}>
              <div className={classes.bonusDescription}>
                Discover how people resist financial control through informal networks. Help Asha route a remittance through Bitcoin or Hawala systems while dodging censorship traps. Learn about traditional and modern ways communities route around financial control.
              </div>
              <button 
                className={classes.bonusButton} 
                onClick={handleBonusMissionClick}
                disabled={true} // Locked until main missions are completed
              >
                Unlock Challenge <Lock size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Fixed surveillance indicator */}
      <div className={classes.surveillanceNotice}>
        <div className={classes.blinkingDot} />
        <Lock size={14} />
        <span>Connection Encrypted</span>
        <div className={classes.blinkingDot} />
        <Shield size={14} />
        <span>Firewall Active</span>
        <div className={classes.blinkingDot} />
        <Eye size={14} />
        <span>3 Surveillance Attempts Blocked</span>
      </div>
    </div>
  );
};

export default Realm2;