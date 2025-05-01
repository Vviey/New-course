import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { Percent, Calculator, TrendingUp, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import theme from '../styles/theme';
import { useCommonStyles } from '../styles/missionStyles';
import SimulationFrame from '../components/SimulationFrame';

interface InflationCalculatorProps {
  activeCharacter: string;
  completeStep: (step: number) => void;
  updateProgress: (progress: number) => void;
}

interface CalculationResults {
  startAmount: number;
  endAmount: number;
  years: number;
  annualInflation: number;
  purchasingPowerLoss: number;
  equivalentAmount: number;
}

const useStyles = createUseStyles({
  simulationContainer: {
    padding: '20px',
  },
  calculatorForm: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  formLabel: {
    color: theme.colors.textLight,
    marginBottom: '10px',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  formInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.input,
    padding: '12px 15px',
    color: theme.colors.textLight,
    fontSize: '1rem',
    width: '100%',
    transition: 'border-color 0.3s',
    '&:focus': {
      outline: 'none',
      borderColor: `${theme.colors.primary}80`,
    },
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.3)',
    },
  },
  calculateButton: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: theme.borderRadius.button,
    padding: '12px 20px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'background-color 0.3s',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: `${theme.colors.primary}e0`,
    },
    '&:disabled': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.3)',
      cursor: 'not-allowed',
    },
  },
  resultsContainer: {
    marginTop: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  resultsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  resultsTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: 0,
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  resultCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  resultLabel: {
    color: theme.colors.softContrast,
    fontSize: '0.9rem',
  },
  resultValue: {
    color: theme.colors.textLight,
    fontSize: '1.4rem',
    fontWeight: 700,
  },
  purchasingPowerLoss: {
    color: theme.colors.danger,
  },
  visualizationContainer: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  visualizationHeader: {
    fontSize: '1.2rem',
    color: theme.colors.textLight,
    fontWeight: 600,
  },
  timelineContainer: {
    position: 'relative',
    height: '100px',
    marginTop: '30px',
    marginBottom: '50px',
  },
  timeline: {
    position: 'absolute',
    top: '50%',
    left: '0',
    width: '100%',
    height: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    zIndex: 1,
  },
  timelineMarker: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    zIndex: 2,
  },
  timelineLabel: {
    position: 'absolute',
    top: 'calc(50% + 30px)',
    transform: 'translateX(-50%)',
    color: theme.colors.textLight,
    fontSize: '1rem',
    fontWeight: 500,
  },
  timelineValue: {
    position: 'absolute',
    top: 'calc(50% - 40px)',
    transform: 'translateX(-50%)',
    color: theme.colors.textLight,
    fontSize: '1.1rem',
    fontWeight: 700,
  },
  continueButton: {
    backgroundColor: theme.colors.accent1,
    color: theme.colors.textDark,
    border: 'none',
    borderRadius: theme.borderRadius.button,
    padding: '12px 25px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'background-color 0.3s',
    marginTop: '40px',
    alignSelf: 'flex-end',
    '&:hover': {
      backgroundColor: `${theme.colors.accent1}e0`,
    },
  },
  errorMessage: {
    color: theme.colors.danger,
    marginTop: '5px',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  explanation: {
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    marginTop: '30px',
    border: `1px solid ${theme.colors.primary}40`,
  },
  explanationTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  explanationText: {
    color: theme.colors.softContrast,
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  '@keyframes pulse': {
    '0%': { opacity: 0.6 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.6 }
  },
  animatedValue: {
    animation: '$pulse 2s infinite'
  }
});

export const InflationCalculator: React.FC<InflationCalculatorProps> = ({
  activeCharacter,
  completeStep,
  updateProgress
}) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  
  // Form state
  const [startingAmount, setStartingAmount] = useState<string>('1000');
  const [inflationRate, setInflationRate] = useState<string>('7');
  const [timeYears, setTimeYears] = useState<string>('10');
  
  // Results state
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [calculationComplete, setCalculationComplete] = useState<boolean>(false);
  
  // Calculate inflation effects
  const calculateInflation = () => {
    // Validate inputs
    const newErrors: {[key: string]: string} = {};
    
    if (!startingAmount || isNaN(Number(startingAmount)) || Number(startingAmount) <= 0) {
      newErrors.startingAmount = 'Please enter a valid amount greater than 0';
    }
    
    if (!inflationRate || isNaN(Number(inflationRate)) || Number(inflationRate) < 0 || Number(inflationRate) > 100) {
      newErrors.inflationRate = 'Please enter a valid rate between 0 and 100';
    }
    
    if (!timeYears || isNaN(Number(timeYears)) || Number(timeYears) <= 0 || !Number.isInteger(Number(timeYears))) {
      newErrors.timeYears = 'Please enter a valid number of years (whole number)';
    }
    
    setErrors(newErrors);
    
    // If no errors, calculate
    if (Object.keys(newErrors).length === 0) {
      const amount = Number(startingAmount);
      const rate = Number(inflationRate) / 100;
      const years = Number(timeYears);
      
      // Calculate future value with inflation
      // Formula: FV = PV * (1 + r)^n
      const futureValue = amount * Math.pow(1 + rate, years);
      
      // Calculate purchasing power loss as a percentage
      const purchasingPowerLoss = ((amount - futureValue) / amount) * 100;
      
      // Calculate the equivalent amount needed in the future to match today's purchasing power
      const equivalentAmount = amount * Math.pow(1 + rate, years);
      
      setResults({
        startAmount: amount,
        endAmount: futureValue,
        years: years,
        annualInflation: rate * 100,
        purchasingPowerLoss: Math.abs(purchasingPowerLoss),
        equivalentAmount: equivalentAmount
      });
      
      // Mark calculation as complete for progress tracking
      setCalculationComplete(true);
      updateProgress(50); // Update progress to 50%
    }
  };
  
  // Continue to next step
  const handleContinue = () => {
    completeStep(1); // Complete step 1
  };
  
  return (
    <SimulationFrame 
      title="Inflation Calculator" 
      description="Calculate how inflation erodes the value of money over time"
      securityLevel="low"
    >
      <div className={classes.simulationContainer}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={commonClasses.simulationIntro}>
            Inflation is a sustained increase in the general price level of goods and services in an economy over time.
            When prices rise, each unit of currency buys fewer goods and services, effectively reducing the purchasing
            power of money. Use this calculator to see the impact of inflation on your money.
          </p>
          
          <div className={classes.calculatorForm}>
            <div className={classes.formGroup}>
              <label className={classes.formLabel}>
                <Calculator size={18} />
                Starting Amount ($)
              </label>
              <input
                type="text"
                value={startingAmount}
                onChange={(e) => setStartingAmount(e.target.value)}
                className={classes.formInput}
                placeholder="1000"
              />
              {errors.startingAmount && (
                <div className={classes.errorMessage}>
                  <AlertCircle size={14} />
                  {errors.startingAmount}
                </div>
              )}
            </div>
            
            <div className={classes.formGroup}>
              <label className={classes.formLabel}>
                <Percent size={18} />
                Annual Inflation Rate (%)
              </label>
              <input
                type="text"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
                className={classes.formInput}
                placeholder="7"
              />
              {errors.inflationRate && (
                <div className={classes.errorMessage}>
                  <AlertCircle size={14} />
                  {errors.inflationRate}
                </div>
              )}
            </div>
            
            <div className={classes.formGroup}>
              <label className={classes.formLabel}>
                <Clock size={18} />
                Time Period (Years)
              </label>
              <input
                type="text"
                value={timeYears}
                onChange={(e) => setTimeYears(e.target.value)}
                className={classes.formInput}
                placeholder="10"
              />
              {errors.timeYears && (
                <div className={classes.errorMessage}>
                  <AlertCircle size={14} />
                  {errors.timeYears}
                </div>
              )}
            </div>
          </div>
          
          <button 
            className={classes.calculateButton}
            onClick={calculateInflation}
          >
            <Calculator size={18} />
            Calculate Inflation Impact
          </button>
          
          {results && (
            <motion.div 
              className={classes.resultsContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={classes.resultsHeader}>
                <h3 className={classes.resultsTitle}>
                  <TrendingUp size={20} />
                  Inflation Impact Results
                </h3>
              </div>
              
              <div className={classes.resultsGrid}>
                <div className={classes.resultCard}>
                  <div className={classes.resultLabel}>Starting Amount</div>
                  <div className={classes.resultValue}>${results.startAmount.toFixed(2)}</div>
                </div>
                
                <div className={classes.resultCard}>
                  <div className={classes.resultLabel}>Future Value (After Inflation)</div>
                  <div className={classes.resultValue}>${results.endAmount.toFixed(2)}</div>
                </div>
                
                <div className={classes.resultCard}>
                  <div className={classes.resultLabel}>Purchasing Power Loss</div>
                  <div className={`${classes.resultValue} ${classes.purchasingPowerLoss}`}>
                    {results.purchasingPowerLoss.toFixed(2)}%
                  </div>
                </div>
                
                <div className={classes.resultCard}>
                  <div className={classes.resultLabel}>To Maintain Today's Purchasing Power</div>
                  <div className={classes.resultValue}>${results.equivalentAmount.toFixed(2)}</div>
                </div>
              </div>
              
              <div className={classes.visualizationContainer}>
                <div className={classes.visualizationHeader}>
                  Value of ${results.startAmount.toFixed(0)} over {results.years} years with {results.annualInflation}% inflation
                </div>
                
                <div className={classes.timelineContainer}>
                  <div className={classes.timeline}></div>
                  {/* Start marker */}
                  <div className={classes.timelineMarker} style={{ left: '0%' }}></div>
                  <div className={classes.timelineLabel} style={{ left: '0%' }}>Today</div>
                  <div className={classes.timelineValue} style={{ left: '0%' }}>${results.startAmount.toFixed(0)}</div>
                  
                  {/* Middle marker - halfway point */}
                  <div className={classes.timelineMarker} style={{ left: '50%' }}></div>
                  <div className={classes.timelineLabel} style={{ left: '50%' }}>{Math.floor(results.years / 2)} years</div>
                  <div className={classes.timelineValue} style={{ left: '50%' }}>
                    ${(results.startAmount * Math.pow(1 + results.annualInflation / 100, Math.floor(results.years / 2))).toFixed(0)}
                  </div>
                  
                  {/* End marker */}
                  <div className={classes.timelineMarker} style={{ left: '100%' }}></div>
                  <div className={classes.timelineLabel} style={{ left: '100%' }}>{results.years} years</div>
                  <div className={classes.timelineValue} style={{ left: '100%' }}>${results.endAmount.toFixed(0)}</div>
                </div>
              </div>
              
              <div className={classes.explanation}>
                <div className={classes.explanationTitle}>
                  <AlertCircle size={18} />
                  What This Means
                </div>
                <div className={classes.explanationText}>
                  <p>
                    If you held ${results.startAmount.toFixed(0)} for {results.years} years with an annual inflation rate of {results.annualInflation}%, 
                    your money would effectively be worth only ${(results.startAmount - (results.startAmount * (results.purchasingPowerLoss / 100))).toFixed(2)} in today's purchasing power.
                  </p>
                  <p>
                    This means you would need ${results.equivalentAmount.toFixed(2)} in {results.years} years to buy what ${results.startAmount.toFixed(0)} buys today.
                    This is why inflation is often called a "silent tax" - it quietly erodes the value of your savings over time.
                  </p>
                </div>
              </div>
              
              <button 
                className={classes.continueButton}
                onClick={handleContinue}
              >
                Continue to Next Step
                <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </SimulationFrame>
  );
};

export default InflationCalculator;