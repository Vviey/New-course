import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { createUseStyles } from 'react-jss';
import RealmLayout from '../components/RealmLayout';
import { useCommonStyles } from '../styles/missionStyles';
import InflationCalculator from './InflationCalculator';
import TimeMachineComparator from './TimeMachineComparator';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calculator, Clock, Shield, Coins, CircleDollarSign } from 'lucide-react';
import theme from '../styles/theme';

const MISSION_STEPS = [
  {
    id: 1,
    title: 'Understanding Inflation',
    description: 'Calculate and visualize how inflation erodes the value of money over time',
    icon: <Calculator size={24} />,
    component: InflationCalculator,
  },
  {
    id: 2,
    title: 'The Time Machine',
    description: 'Compare the purchasing power of money across different time periods',
    icon: <Clock size={24} />,
    component: TimeMachineComparator,
  },
  {
    id: 3,
    title: 'Conclusion',
    description: 'Understand why inflation is often called "the silent tax"',
    icon: <CircleDollarSign size={24} />,
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
    borderRadius: theme.borderRadius.default,
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
    borderRadius: theme.borderRadius.default,
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
    borderRadius: theme.borderRadius.default,
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
  navigationButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  backButton: {
    padding: '12px 25px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: theme.colors.textLight,
    border: 'none',
    borderRadius: theme.borderRadius.button,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
  },
  nextButton: {
    padding: '12px 25px',
    backgroundColor: theme.colors.accent1,
    color: theme.colors.textDark,
    fontWeight: 600,
    border: 'none',
    borderRadius: theme.borderRadius.button,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: `${theme.colors.accent1}d0`,
    },
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

const Mission2: React.FC = () => {
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
      title="Mission 2: The Silent Tax — Inflation" 
      subtitle="Discover how inflation erodes the value of money over time"
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
            <BookOpen size={32} />
            The Silent Tax: Understanding Inflation
          </h1>
          <p className={classes.missionDescription}>
            Inflation is a silent force that erodes the purchasing power of money over time. 
            In this mission, you'll learn how central banks create inflation through monetary policy and 
            how it affects everyday life. Discover why some consider Bitcoin as a potential hedge against inflation.
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
                  <CircleDollarSign size={28} />
                </div>
                <h2 className={classes.conclusionTitle}>The True Cost of Inflation</h2>
              </div>
              
              <div className={classes.conclusionContent}>
                <p>
                  You've now seen firsthand how inflation systematically erodes the purchasing power of money over time. 
                  This phenomenon is often called the <span className={classes.highlightText}>"silent tax"</span> because 
                  it quietly reduces your wealth without you explicitly seeing it happen.
                </p>
                
                <p>
                  When central banks increase the money supply, they effectively dilute the value of every existing unit of 
                  currency. Prices rise not because goods become more valuable, but because the currency becomes less valuable. 
                  This is why saving in traditional currency becomes problematic over long periods.
                </p>
                
                <p>
                  Bitcoin presents an alternative monetary model with a fixed supply and predictable issuance schedule. 
                  Unlike fiat currencies that can be created at will by central authorities, Bitcoin has a capped supply of 
                  21 million coins. This scarcity is programmatically enforced, making it resistant to inflation by design.
                </p>
                
                <div className={classes.insightsGrid}>
                  <div className={classes.insightCard}>
                    <div className={classes.insightIcon}>
                      <Coins size={20} />
                    </div>
                    <h4 className={classes.insightTitle}>Fiat Money Inflation</h4>
                    <p className={classes.insightText}>
                      Central banks can create unlimited amounts of currency, inevitably leading to inflation over time as the 
                      money supply grows faster than economic output.
                    </p>
                  </div>
                  
                  <div className={classes.insightCard}>
                    <div className={classes.insightIcon}>
                      <Shield size={20} />
                    </div>
                    <h4 className={classes.insightTitle}>Bitcoin's Fixed Supply</h4>
                    <p className={classes.insightText}>
                      With a maximum of 21 million coins, Bitcoin's fixed supply means it can't be inflated away through 
                      arbitrary creation, potentially preserving purchasing power.
                    </p>
                  </div>
                  
                  <div className={classes.insightCard}>
                    <div className={classes.insightIcon}>
                      <Clock size={20} />
                    </div>
                    <h4 className={classes.insightTitle}>Long-term Thinking</h4>
                    <p className={classes.insightText}>
                      Understanding money's inflation vulnerability changes how people think about saving 
                      and investing for the future, emphasizing assets that preserve value.
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

export default Mission2;