import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { createUseStyles } from 'react-jss';
import RealmLayout from '../components/RealmLayout';
import { useCommonStyles } from '../styles/missionStyles';
import PrivacySimulator from './PrivacySimulator';
import TransactionTracker from './TransactionTracker';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Shield, Eye, Lock, Search, Database } from 'lucide-react';
import theme from '../styles/theme';

const MISSION_STEPS = [
  {
    id: 1,
    title: 'Digital Footprints',
    description: 'Discover how your digital transactions are tracked in the surveillance economy',
    icon: <Eye size={24} />,
    component: PrivacySimulator,
  },
  {
    id: 2,
    title: 'Transaction Surveillance',
    description: 'See how financial transactions can be monitored and analyzed',
    icon: <Database size={24} />,
    component: TransactionTracker,
  },
  {
    id: 3,
    title: 'Conclusion',
    description: 'Understand why financial privacy is a critical human right',
    icon: <Shield size={24} />,
    component: null, // Will render the conclusion component directly
  }
];

const useStyles = createUseStyles({
  missionContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 0',
  },
  missionHeader: {
    marginBottom: '30px',
  },
  missionTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: theme.colors.textLight,
    margin: '0 0 15px 0',
    textShadow: '0 2px 10px rgba(198, 40, 40, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  missionDescription: {
    fontSize: '1.1rem',
    color: theme.colors.softContrast,
    lineHeight: '1.6',
    maxWidth: '800px',
  },
  stepsContainer: {
    marginBottom: '30px',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  stepCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
      borderColor: `${theme.colors.primary}60`,
    },
  },
  activeStepCard: {
    backgroundColor: `rgba(198, 40, 40, 0.15)`,
    borderColor: `${theme.colors.primary}80`,
  },
  completedStepCard: {
    borderColor: 'rgba(76, 175, 80, 0.5)',
    '&:after': {
      content: '"✓"',
      position: 'absolute',
      top: '15px',
      right: '15px',
      color: '#4caf50',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  stepIcon: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: '0 0 5px 0',
  },
  stepDescription: {
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
  },
  contentContainer: {
    marginTop: '20px',
  },
  conclusionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    padding: '30px',
    border: `1px solid ${theme.colors.primary}40`,
    marginTop: '20px',
  },
  conclusionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  conclusionIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
  },
  conclusionTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: theme.colors.textLight,
    margin: 0,
  },
  conclusionContent: {
    color: theme.colors.softContrast,
    fontSize: '1.05rem',
    lineHeight: '1.7',
  },
  highlightText: {
    color: theme.colors.primary,
    fontWeight: 600,
  },
  insightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '25px',
  },
  insightCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  insightIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.accent1,
  },
  insightTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: 0,
  },
  insightText: {
    fontSize: '0.95rem',
    color: theme.colors.softContrast,
    lineHeight: '1.6',
  },
  completeButton: {
    padding: '12px 25px',
    backgroundColor: '#4caf50',
    color: 'white',
    fontWeight: 600,
    border: 'none',
    borderRadius: theme.borderRadius.button,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '30px',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#3d9140',
    },
  },
});

const Mission3: React.FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const [, setLocation] = useLocation();
  
  // State for the active step
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeCharacter, setActiveCharacter] = useState('asha'); // or 'satoshi'
  
  // Get the current step component
  const currentStep = MISSION_STEPS.find(step => step.id === activeStep);
  const CurrentStepComponent = currentStep?.component;
  
  // Handler for completing a step
  const handleCompleteStep = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps(prev => [...prev, stepId]);
    }
    
    // Move to the next step
    const nextStepId = stepId + 1;
    if (nextStepId <= MISSION_STEPS.length) {
      setActiveStep(nextStepId);
    }
  };
  
  // Handler for manually navigating to a step
  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };
  
  // Progress updater
  const updateProgress = (newProgress: number) => {
    setProgress(newProgress);
  };
  
  // Handler for completing the mission
  const handleCompleteMission = () => {
    // Here you would update any global state/progress
    setLocation('/realm/2');
  };
  
  // Update the progress when steps change
  useEffect(() => {
    // Calculate overall progress based on step completion
    const totalSteps = MISSION_STEPS.length;
    const stepsCompleted = completedSteps.length;
    const baseProgress = (stepsCompleted / totalSteps) * 100;
    
    // If we're on the last step and it's not completed, show partial progress
    if (activeStep === MISSION_STEPS.length && !completedSteps.includes(activeStep)) {
      setProgress(baseProgress + (100 / totalSteps) * 0.5); // 50% of the last step
    } else {
      setProgress(baseProgress);
    }
  }, [completedSteps, activeStep]);
  
  return (
    <RealmLayout 
      title="Mission 3: The Watchful Eye — Digital Surveillance" 
      subtitle="Discover how traditional finance systems monitor your transactions"
      onBack={() => setLocation('/realm/2')}
      progress={progress}
    >
      <div className={classes.missionContainer}>
        <motion.div 
          className={classes.missionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={classes.missionTitle}>
            <Eye size={32} />
            The Watchful Eye: Understanding Financial Surveillance
          </h1>
          <p className={classes.missionDescription}>
            In the modern world, nearly every financial transaction you make is being tracked, analyzed, and stored.
            This mission explores how traditional financial systems monitor and control money flows, and why privacy
            is such a critical component of truly free money.
          </p>
        </motion.div>
        
        <div className={classes.stepsContainer}>
          <div className={classes.stepsGrid}>
            {MISSION_STEPS.map(step => (
              <motion.div 
                key={step.id}
                className={`${classes.stepCard} ${activeStep === step.id ? classes.activeStepCard : ''} ${completedSteps.includes(step.id) ? classes.completedStepCard : ''}`}
                onClick={() => handleStepClick(step.id)}
                whileHover={{ scale: 1.03 }}
                style={{ position: 'relative' }}
              >
                <div className={classes.stepHeader}>
                  <div className={classes.stepIcon}>
                    {step.icon}
                  </div>
                  <div className={classes.stepContent}>
                    <h3 className={classes.stepTitle}>Step {step.id}: {step.title}</h3>
                    <p className={classes.stepDescription}>{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className={classes.contentContainer}
          key={activeStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Render the active component */}
          {CurrentStepComponent && (
            <CurrentStepComponent 
              activeCharacter={activeCharacter}
              completeStep={handleCompleteStep}
              updateProgress={updateProgress}
            />
          )}
          
          {/* Render the conclusion if we're on the last step */}
          {activeStep === 3 && (
            <div className={classes.conclusionContainer}>
              <div className={classes.conclusionHeader}>
                <div className={classes.conclusionIcon}>
                  <Shield size={28} />
                </div>
                <h2 className={classes.conclusionTitle}>Privacy as a Fundamental Right</h2>
              </div>
              
              <div className={classes.conclusionContent}>
                <p>
                  You've seen firsthand how traditional financial systems track, monitor, and analyze your transactions. 
                  This surveillance isn't just about collecting data—it's about power and control over people's economic lives.
                </p>
                
                <p>
                  Financial privacy isn't about having something to hide; it's about having the freedom to conduct your 
                  economic affairs without constant monitoring. Just as we value privacy in our communications, our homes, 
                  and our personal relationships, <span className={classes.highlightText}>privacy in our financial transactions</span> is 
                  a fundamental component of human dignity.
                </p>
                
                <p>
                  Bitcoin offers an alternative model where transactions can be verified without revealing unnecessary personal 
                  information. While the Bitcoin blockchain is public, proper usage techniques can provide significantly 
                  improved privacy compared to traditional banking systems where every transaction is tied to your identity
                  and analyzed by multiple third parties.
                </p>
                
                <div className={classes.insightsGrid}>
                  <div className={classes.insightCard}>
                    <div className={classes.insightIcon}>
                      <Lock size={20} />
                    </div>
                    <h4 className={classes.insightTitle}>Privacy vs. Secrecy</h4>
                    <p className={classes.insightText}>
                      Privacy is a basic right that allows individuals to selectively reveal themselves to the world.
                      This differs from secrecy, which involves hiding wrongdoing. Financial privacy protects legitimate 
                      autonomy, not illegal activity.
                    </p>
                  </div>
                  
                  <div className={classes.insightCard}>
                    <div className={classes.insightIcon}>
                      <Search size={20} />
                    </div>
                    <h4 className={classes.insightTitle}>Surveillance Capitalism</h4>
                    <p className={classes.insightText}>
                      Your transaction data is extremely valuable. Banks, payment processors, and tech companies
                      monetize this information, creating detailed profiles about your habits, preferences, and financial status.
                    </p>
                  </div>
                  
                  <div className={classes.insightCard}>
                    <div className={classes.insightIcon}>
                      <Database size={20} />
                    </div>
                    <h4 className={classes.insightTitle}>Bitcoin's Approach</h4>
                    <p className={classes.insightText}>
                      Bitcoin enables verification without excessive personal data sharing. With proper techniques
                      like coin control, mixing, and non-reuse of addresses, users can achieve much greater financial privacy.
                    </p>
                  </div>
                </div>
                
                <button 
                  className={classes.completeButton}
                  onClick={handleCompleteMission}
                >
                  Complete Mission
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </RealmLayout>
  );
};

export default Mission3;