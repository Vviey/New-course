import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import {
  Eye,
  CreditCard,
  CircleDollarSign,
  BadgePercent,
  Building,
  Lock,
  AlertTriangle,
  Shield,
  ChevronRight,
  Star
} from 'lucide-react';
import theme from './styles/theme';

interface Mission {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  unlocked: boolean;
  completed: boolean;
  bonus?: boolean;
}

const useStyles = createUseStyles({
  realmContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  realmHeader: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  realmTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    color: theme.colors.textLight,
    margin: '0 0 15px 0',
    textShadow: '0 2px 10px rgba(198, 40, 40, 0.2)',
    fontFamily: theme.fonts.heading,
  },
  realmSubtitle: {
    fontSize: '1.1rem',
    color: theme.colors.softContrast,
    maxWidth: '800px',
    margin: '0 auto 20px auto',
    lineHeight: '1.6',
  },
  surveillanceNote: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 15px',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    borderRadius: theme.borderRadius.default,
    color: theme.colors.primary,
    fontSize: '0.9rem',
    margin: '15px 0',
    border: `1px solid ${theme.colors.primary}40`,
  },
  missionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
  missionCard: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.default,
    overflow: 'hidden',
    boxShadow: theme.shadows.card,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.07)',
      '&:not($lockedMission) $cardOverlay': {
        opacity: 1,
      },
    },
  },
  completedMission: {
    borderColor: 'rgba(76, 175, 80, 0.3)',
    '&:after': {
      content: '"✓"',
      position: 'absolute',
      top: '15px',
      right: '15px',
      width: '30px',
      height: '30px',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      color: '#4caf50',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      zIndex: 2,
    },
  },
  bonusMission: {
    borderColor: 'rgba(255, 193, 7, 0.3)',
    '&:before': {
      content: '"★"',
      position: 'absolute',
      top: '15px',
      left: '15px',
      width: '30px',
      height: '30px',
      backgroundColor: 'rgba(255, 193, 7, 0.2)',
      color: '#ffc107',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      zIndex: 2,
    },
  },
  lockedMission: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1,
    },
  },
  cardBody: {
    padding: '20px',
    position: 'relative',
    zIndex: 1,
  },
  missionIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 15px 0',
    color: theme.colors.primary,
  },
  missionTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: '0 0 10px 0',
    fontFamily: theme.fonts.heading,
  },
  missionSubtitle: {
    color: theme.colors.primary,
    fontSize: '0.9rem',
    marginBottom: '10px',
    fontWeight: 500,
  },
  missionDescription: {
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  startButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    backgroundColor: 'rgba(198, 40, 40, 0.2)',
    border: 'none',
    borderRadius: theme.borderRadius.button,
    color: theme.colors.primary,
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(198, 40, 40, 0.3)',
    },
  },
  lockedIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'rgba(255, 255, 255, 0.3)',
    zIndex: 2,
    fontSize: '3rem',
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(198, 40, 40, 0.0), rgba(198, 40, 40, 0.1))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 0,
  },
  realmProgress: {
    maxWidth: '600px',
    margin: '0 auto 30px auto',
  },
  progressContainer: {
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.full,
    margin: '10px 0',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.full,
    transition: 'width 0.5s ease-out',
  },
  progressText: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.colors.softContrast,
    fontSize: '0.9rem',
  },
  securityLevels: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '15px',
  },
  securityBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 15px',
    borderRadius: theme.borderRadius.full,
    fontSize: '0.85rem',
    fontWeight: 500,
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
});

const Realm2: React.FC = () => {
  const classes = useStyles();
  const [, setLocation] = useLocation();
  // In a real implementation, this progress would be fetched from a global state or API
  const [progress, setProgress] = useState({
    completedMissions: [1],
    totalMissions: 7,
    highestUnlockedMission: 2
  });
  
  const missions: Mission[] = [
    {
      id: 1,
      title: "Central Banking Control",
      subtitle: "Money Printers & Monetary Policy",
      description: "Take control of a central bank and witness firsthand how monetary policy decisions impact an economy and the value of currency.",
      icon: <Building size={24} />,
      path: "/realm/2/mission/1",
      unlocked: true,
      completed: progress.completedMissions.includes(1)
    },
    {
      id: 2,
      title: "The Silent Tax",
      subtitle: "Understanding Inflation",
      description: "Explore how inflation erodes purchasing power over time and why it's considered a hidden tax that affects everyone.",
      icon: <CircleDollarSign size={24} />,
      path: "/realm/2/mission/2",
      unlocked: progress.highestUnlockedMission >= 2,
      completed: progress.completedMissions.includes(2)
    },
    {
      id: 3,
      title: "Digital Surveillance",
      subtitle: "Finance in the Surveillance Age",
      description: "Discover how traditional financial systems enable surveillance and how this impacts privacy and freedom.",
      icon: <Eye size={24} />,
      path: "/realm/2/mission/3",
      unlocked: progress.highestUnlockedMission >= 3,
      completed: progress.completedMissions.includes(3)
    },
    {
      id: 4,
      title: "The Hidden Costs",
      subtitle: "Banking Fees & Access",
      description: "Uncover the often hidden costs of traditional banking and how they create barriers to financial inclusion.",
      icon: <CreditCard size={24} />,
      path: "/realm/2/mission/4",
      unlocked: progress.highestUnlockedMission >= 4,
      completed: progress.completedMissions.includes(4)
    },
    {
      id: 5,
      title: "Confiscation Risk",
      subtitle: "Asset Seizure & Bail-ins",
      description: "Learn about the risks of having assets in traditional financial systems, including seizures, bail-ins, and capital controls.",
      icon: <AlertTriangle size={24} />,
      path: "/realm/2/mission/5",
      unlocked: progress.highestUnlockedMission >= 5,
      completed: progress.completedMissions.includes(5)
    },
    {
      id: 6,
      title: "The Alternative",
      subtitle: "Bitcoin's Value Proposition",
      description: "Explore how Bitcoin provides an alternative to surveillance-based financial systems and protection against monetary policy.",
      icon: <Shield size={24} />,
      path: "/realm/2/mission/6",
      unlocked: progress.highestUnlockedMission >= 6,
      completed: progress.completedMissions.includes(6)
    },
    {
      id: 7,
      title: "Financial Sovereignty",
      subtitle: "BONUS: Taking Control",
      description: "A special challenge to test your understanding of financial sovereignty and how to maintain privacy in the digital age.",
      icon: <Star size={24} />,
      path: "/realm/2/mission/bonus",
      unlocked: progress.highestUnlockedMission >= 7,
      completed: progress.completedMissions.includes(7),
      bonus: true
    }
  ];
  
  const calculateProgress = (): number => {
    return (progress.completedMissions.length / progress.totalMissions) * 100;
  };
  
  const handleMissionClick = (mission: Mission) => {
    if (mission.unlocked) {
      setLocation(mission.path);
    }
  };
  
  return (
    <div className={classes.realmContainer}>
      <motion.div 
        className={classes.realmHeader}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={classes.realmTitle}>Realm 2: The Surveillance City</h1>
        <p className={classes.realmSubtitle}>
          Welcome to Neo-Surveillance, where financial control and monetary policy rule the day.
          In this realm, you'll explore how traditional financial systems enable surveillance and control,
          and how this impacts your freedom and privacy.
        </p>
        
        <div className={classes.surveillanceNote}>
          <Eye size={18} />
          <span>Your activities in this realm are being monitored by the Central Authority</span>
        </div>
        
        <div className={classes.securityLevels}>
          <div className={`${classes.securityBadge} ${classes.lowSecurity}`}>
            <Shield size={14} />
            <span>Low Security Level</span>
          </div>
          
          <div className={`${classes.securityBadge} ${classes.mediumSecurity}`}>
            <AlertTriangle size={14} />
            <span>Medium Security Level</span>
          </div>
          
          <div className={`${classes.securityBadge} ${classes.highSecurity}`}>
            <Lock size={14} />
            <span>High Security Level</span>
          </div>
        </div>
        
        <div className={classes.realmProgress}>
          <div className={classes.progressContainer}>
            <div 
              className={classes.progressBar} 
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
          <div className={classes.progressText}>
            <span>Progress: {progress.completedMissions.length}/{progress.totalMissions} missions</span>
            <span>{calculateProgress().toFixed(0)}% complete</span>
          </div>
        </div>
      </motion.div>
      
      <div className={classes.missionsGrid}>
        {missions.map((mission) => (
          <motion.div 
            key={mission.id}
            className={`
              ${classes.missionCard}
              ${mission.completed ? classes.completedMission : ''}
              ${mission.bonus ? classes.bonusMission : ''}
              ${!mission.unlocked ? classes.lockedMission : ''}
            `}
            onClick={() => handleMissionClick(mission)}
            whileHover={mission.unlocked ? { scale: 1.03 } : {}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: mission.id * 0.1 }}
          >
            <div className={classes.cardOverlay} />
            
            {!mission.unlocked && (
              <div className={classes.lockedIcon}>
                <Lock size={50} />
              </div>
            )}
            
            <div className={classes.cardBody}>
              <div className={classes.missionIcon}>
                {mission.icon}
              </div>
              <h3 className={classes.missionTitle}>Mission {mission.id}: {mission.title}</h3>
              <div className={classes.missionSubtitle}>{mission.subtitle}</div>
              <p className={classes.missionDescription}>{mission.description}</p>
              
              {mission.unlocked && (
                <button className={classes.startButton}>
                  {mission.completed ? 'Replay Mission' : 'Start Mission'}
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Realm2;