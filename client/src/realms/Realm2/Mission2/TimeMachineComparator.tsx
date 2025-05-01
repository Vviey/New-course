import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Clock, ShoppingCart, ArrowRight, AlertCircle, Coins } from 'lucide-react';
import theme from '../styles/theme';
import { useCommonStyles } from '../styles/missionStyles';
import SimulationFrame from '../components/SimulationFrame';

interface TimeMachineComparatorProps {
  activeCharacter: string;
  completeStep: (step: number) => void;
  updateProgress: (progress: number) => void;
}

interface HistoricalComparison {
  id: number;
  year: number;
  description: string;
  price: number;
  currentPrice: number;
  inflationFactor: number;
}

// Sample historical comparisons data
const HISTORICAL_COMPARISONS: HistoricalComparison[] = [
  {
    id: 1,
    year: 1960,
    description: "Movie Ticket",
    price: 0.69,
    currentPrice: 13.50,
    inflationFactor: 13.50 / 0.69,
  },
  {
    id: 2,
    year: 1970,
    description: "Gallon of Milk",
    price: 1.15,
    currentPrice: 4.57,
    inflationFactor: 4.57 / 1.15,
  },
  {
    id: 3,
    year: 1980,
    description: "Loaf of Bread",
    price: 0.50,
    currentPrice: 3.99,
    inflationFactor: 3.99 / 0.50,
  },
  {
    id: 4,
    year: 1990,
    description: "Gallon of Gas",
    price: 1.15,
    currentPrice: 3.85,
    inflationFactor: 3.85 / 1.15,
  },
  {
    id: 5,
    year: 2000,
    description: "One Month Apartment Rent",
    price: 600,
    currentPrice: 1800,
    inflationFactor: 1800 / 600,
  }
];

const useStyles = createUseStyles({
  simulationContainer: {
    padding: '20px',
  },
  timeMachineIntro: {
    marginBottom: '30px',
  },
  comparisonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  comparisonCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.3s, border-color 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      borderColor: `${theme.colors.primary}60`,
    },
  },
  comparisonHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  yearBadge: {
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    color: theme.colors.primary,
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.9rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  itemName: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
  },
  priceComparison: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
  },
  priceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
  },
  priceValue: {
    color: theme.colors.textLight,
    fontSize: '1.1rem',
    fontWeight: 600,
  },
  inflationFactor: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: 'rgba(198, 40, 40, 0.05)',
    borderRadius: theme.borderRadius.card,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  inflationFactorLabel: {
    color: theme.colors.softContrast,
    fontSize: '0.9rem',
  },
  inflationFactorValue: {
    color: theme.colors.primary,
    fontSize: '1.4rem',
    fontWeight: 700,
  },
  customComparisonContainer: {
    marginTop: '40px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  customComparisonTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
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
  purchasingPowerResult: {
    marginTop: '30px',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    border: `1px solid ${theme.colors.primary}40`,
  },
  resultTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  resultText: {
    color: theme.colors.softContrast,
    lineHeight: '1.6',
    fontSize: '1rem',
  },
  highlightText: {
    color: theme.colors.primary,
    fontWeight: 600,
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
    marginTop: '20px',
    '&:hover': {
      backgroundColor: `${theme.colors.primary}e0`,
    },
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
  timePeriodComparison: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginBottom: '30px',
    background: 'linear-gradient(90deg, rgba(198, 40, 40, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
    padding: '15px',
    borderRadius: theme.borderRadius.card,
    display: 'inline-block',
  }
});

export const TimeMachineComparator: React.FC<TimeMachineComparatorProps> = ({ 
  activeCharacter, 
  completeStep,
  updateProgress
}) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  
  // Form state for custom comparison
  const [amount, setAmount] = useState<string>('100');
  const [year, setYear] = useState<string>('1980');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [customResult, setCustomResult] = useState<{
    originalAmount: number;
    year: number;
    currentValue: number;
    purchasingPower: number;
  } | null>(null);
  
  // Progress tracking
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  
  // Handler to calculate custom comparison
  const calculateCustomComparison = () => {
    // Validate inputs
    const newErrors: {[key: string]: string} = {};
    
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount greater than 0';
    }
    
    const currentYear = new Date().getFullYear();
    const yearNum = Number(year);
    
    if (!year || isNaN(yearNum) || yearNum < 1900 || yearNum >= currentYear) {
      newErrors.year = `Please enter a valid year between 1900 and ${currentYear - 1}`;
    }
    
    setErrors(newErrors);
    
    // If no errors, calculate
    if (Object.keys(newErrors).length === 0) {
      const amountNum = Number(amount);
      const yearNum = Number(year);
      const currentYear = new Date().getFullYear();
      
      // Simple inflation calculation for demonstration
      // In a real app, this would use actual inflation data by year
      const yearsElapsed = currentYear - yearNum;
      const averageAnnualInflation = 0.03; // 3% average annual inflation
      
      // Calculate current value using compound interest formula
      const currentValue = amountNum * Math.pow(1 + averageAnnualInflation, yearsElapsed);
      
      // Calculate purchasing power (reverse calculation)
      const purchasingPower = amountNum / Math.pow(1 + averageAnnualInflation, yearsElapsed);
      
      setCustomResult({
        originalAmount: amountNum,
        year: yearNum,
        currentValue: currentValue,
        purchasingPower: purchasingPower,
      });
      
      // Mark as interacted for progress tracking
      setHasInteracted(true);
      updateProgress(80); // Update progress to 80%
    }
  };
  
  // Continue to next step
  const handleContinue = () => {
    completeStep(2); // Complete step 2
  };
  
  return (
    <SimulationFrame 
      title="Time Machine Price Comparator" 
      description="Compare the value of money across different time periods"
      securityLevel="medium"
    >
      <div className={classes.simulationContainer}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={classes.timeMachineIntro}>
            <p className={commonClasses.simulationIntro}>
              The Time Machine Price Comparator shows you how the purchasing power of money has changed over time.
              Compare prices from different decades to today's equivalent and see how inflation has affected the
              value of currency through history.
            </p>
            
            <div className={classes.timePeriodComparison}>
              <Clock size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
              Time Travel: How prices have changed from the past to today
            </div>
          </div>
          
          <div className={classes.comparisonGrid}>
            {HISTORICAL_COMPARISONS.map(item => (
              <motion.div 
                key={item.id}
                className={classes.comparisonCard}
                whileHover={{ scale: 1.03 }}
              >
                <div className={classes.comparisonHeader}>
                  <div className={classes.yearBadge}>
                    <Calendar size={14} />
                    {item.year}
                  </div>
                  <div className={classes.itemName}>{item.description}</div>
                </div>
                
                <div className={classes.priceComparison}>
                  <div className={classes.priceRow}>
                    <div className={classes.priceLabel}>
                      <Clock size={16} />
                      Price in {item.year}
                    </div>
                    <div className={classes.priceValue}>${item.price.toFixed(2)}</div>
                  </div>
                  
                  <div className={classes.priceRow}>
                    <div className={classes.priceLabel}>
                      <ShoppingCart size={16} />
                      Price Today
                    </div>
                    <div className={classes.priceValue}>${item.currentPrice.toFixed(2)}</div>
                  </div>
                </div>
                
                <div className={classes.inflationFactor}>
                  <div className={classes.inflationFactorLabel}>Price Increase Factor</div>
                  <div className={classes.inflationFactorValue}>{item.inflationFactor.toFixed(1)}x</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className={classes.customComparisonContainer}>
            <h3 className={classes.customComparisonTitle}>
              <Coins size={22} />
              Calculate Your Own Time Comparison
            </h3>
            
            <div className={classes.formGrid}>
              <div className={classes.formGroup}>
                <label className={classes.formLabel}>
                  <DollarSign size={18} />
                  Amount in Past Currency ($)
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={classes.formInput}
                  placeholder="100"
                />
                {errors.amount && (
                  <div className={classes.errorMessage}>
                    <AlertCircle size={14} />
                    {errors.amount}
                  </div>
                )}
              </div>
              
              <div className={classes.formGroup}>
                <label className={classes.formLabel}>
                  <Calendar size={18} />
                  Year
                </label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={classes.formInput}
                  placeholder="1980"
                />
                {errors.year && (
                  <div className={classes.errorMessage}>
                    <AlertCircle size={14} />
                    {errors.year}
                  </div>
                )}
              </div>
            </div>
            
            <button 
              className={classes.calculateButton}
              onClick={calculateCustomComparison}
            >
              <Clock size={18} />
              Calculate Time Comparison
            </button>
            
            {customResult && (
              <motion.div 
                className={classes.purchasingPowerResult}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className={classes.resultTitle}>
                  <Clock size={18} />
                  Time Comparison Results
                </h4>
                
                <div className={classes.resultText}>
                  <p>
                    ${customResult.originalAmount.toFixed(2)} in {customResult.year} would be worth about
                    <span className={classes.highlightText}> ${customResult.currentValue.toFixed(2)} </span>
                    today due to inflation.
                  </p>
                  <p>
                    Conversely, $100 today would only be worth about
                    <span className={classes.highlightText}> ${(100 * (customResult.purchasingPower / customResult.originalAmount)).toFixed(2)} </span>
                    back in {customResult.year}.
                  </p>
                  <p>
                    This means that money has lost approximately
                    <span className={classes.highlightText}> {(100 - (customResult.purchasingPower / customResult.originalAmount) * 100).toFixed(1)}% </span>
                    of its purchasing power since {customResult.year}.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
          
          <button 
            className={classes.continueButton}
            onClick={handleContinue}
          >
            Continue to Conclusion
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </SimulationFrame>
  );
};

export default TimeMachineComparator;