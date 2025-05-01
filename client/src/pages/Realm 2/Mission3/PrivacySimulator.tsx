import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { 
  Eye, ArrowRight, ShoppingCart, CreditCard, Coffee, Truck, 
  HomeIcon, Gift, Smartphone, DollarSign, AlertCircle, User
} from 'lucide-react';
import theme from '../styles/theme';
import { useCommonStyles } from '../styles/missionStyles';
import SimulationFrame from '../components/SimulationFrame';

interface PrivacySimulatorProps {
  activeCharacter: string;
  completeStep: (step: number) => void;
  updateProgress: (progress: number) => void;
}

type TransactionType = 
  | 'coffee' 
  | 'restaurant' 
  | 'groceries' 
  | 'gas' 
  | 'streaming' 
  | 'shopping' 
  | 'rent' 
  | 'gift';

interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  merchant: string;
  date: Date;
  location: string;
  category: string;
  isPrivate: boolean;
}

interface DataCollector {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  dataPieces: string[];
  color: string;
}

const useStyles = createUseStyles({
  simulationContainer: {
    padding: '20px',
  },
  transactionWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    marginBottom: '30px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  transactionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  transactionTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: 0,
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  label: {
    color: theme.colors.softContrast,
    marginBottom: '8px',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.input,
    padding: '12px 15px',
    color: theme.colors.textLight,
    fontSize: '1rem',
    '&:focus': {
      outline: 'none',
      borderColor: `${theme.colors.primary}80`,
    },
  },
  select: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.input,
    padding: '12px 15px',
    color: theme.colors.textLight,
    fontSize: '1rem',
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 15px top 50%',
    backgroundSize: '12px auto',
    '&:focus': {
      outline: 'none',
      borderColor: `${theme.colors.primary}80`,
    },
  },
  button: {
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
    '&:hover': {
      backgroundColor: `${theme.colors.primary}d0`,
    },
  },
  transactionDisplay: {
    marginTop: '30px',
  },
  animationContainer: {
    position: 'relative',
    height: '300px',
    marginTop: '30px',
    marginBottom: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  userIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
  },
  transactionIcon: {
    position: 'absolute',
    left: '50%',
    top: '30%',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: theme.colors.accent1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.textDark,
    zIndex: 2,
    boxShadow: '0 0 15px rgba(255, 171, 0, 0.5)',
  },
  dataCollectorIcon: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
  },
  dataPointBubble: {
    position: 'absolute',
    padding: '8px 12px',
    borderRadius: theme.borderRadius.full,
    fontSize: '0.85rem',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: theme.colors.textLight,
    whiteSpace: 'nowrap',
    zIndex: 3,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
  dataCollectorsList: {
    marginTop: '30px',
  },
  collectorCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    marginBottom: '15px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  collectorHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  collectorIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  collectorTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: 0,
  },
  collectorDescription: {
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '15px',
  },
  dataPieceList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '15px',
  },
  dataPiece: {
    padding: '6px 12px',
    borderRadius: theme.borderRadius.full,
    fontSize: '0.85rem',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  findingsTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: '40px 0 20px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  findingsContent: {
    backgroundColor: `rgba(198, 40, 40, 0.1)`,
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    border: `1px solid ${theme.colors.primary}40`,
  },
  findingsList: {
    margin: '15px 0',
    padding: 0,
    listStylePosition: 'inside',
  },
  findingsItem: {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    color: theme.colors.softContrast,
    '&:before': {
      content: '"•"',
      color: theme.colors.primary,
      fontWeight: 'bold',
    }
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
  animationLinks: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: '2px',
  },
});

const getTransactionIcon = (type: TransactionType): React.ReactNode => {
  switch (type) {
    case 'coffee':
      return <Coffee size={22} />;
    case 'restaurant':
      return <Truck size={22} />;
    case 'groceries':
      return <ShoppingCart size={22} />;
    case 'gas':
      return <Truck size={22} />;
    case 'streaming':
      return <Smartphone size={22} />;
    case 'shopping':
      return <ShoppingCart size={22} />;
    case 'rent':
      return <HomeIcon size={22} />;
    case 'gift':
      return <Gift size={22} />;
    default:
      return <DollarSign size={22} />;
  }
};

export const PrivacySimulator: React.FC<PrivacySimulatorProps> = ({
  activeCharacter,
  completeStep,
  updateProgress
}) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  
  const [transactionType, setTransactionType] = useState<TransactionType>('coffee');
  const [amount, setAmount] = useState('4.50');
  const [merchant, setMerchant] = useState('Starbucks');
  const [location, setLocation] = useState('New York, NY');
  
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Data collector entities for visualization
  const dataCollectors: DataCollector[] = [
    {
      id: 'cc-company',
      name: 'Credit Card Company',
      icon: <CreditCard size={25} />,
      description: 'Tracks all transactions to create spending profiles, detect fraud, and sell aggregated data to partners.',
      dataPieces: ['Transaction Amount', 'Merchant Name', 'Transaction Time', 'Location', 'Purchase Category'],
      color: '#3f51b5', // Blue
    },
    {
      id: 'merchant',
      name: 'Merchant',
      icon: <ShoppingCart size={25} />,
      description: 'Stores purchase history to target you with personalized marketing and build customer profiles.',
      dataPieces: ['Your Account ID', 'Purchase History', 'Time of Visit', 'Payment Method', 'Associated Email'],
      color: '#4caf50', // Green
    },
    {
      id: 'data-broker',
      name: 'Data Broker',
      icon: <Eye size={25} />,
      description: 'Aggregates data from multiple sources to build comprehensive profiles sold to advertisers, insurers, and others.',
      dataPieces: ['Combined Purchase History', 'Location Patterns', 'Behavioral Profile', 'Financial Status Estimate'],
      color: '#f44336', // Red
    },
    {
      id: 'govt-agencies',
      name: 'Government Agencies',
      icon: <AlertCircle size={25} />,
      description: 'May access financial data through regulations, court orders, or surveillance programs.',
      dataPieces: ['Transaction History', 'Financial Flows', 'Payment Patterns', 'Suspicious Activity Reports'],
      color: '#ff9800', // Orange
    },
  ];
  
  // Handle transaction creation
  const handleCreateTransaction = () => {
    const newTransaction: Transaction = {
      id: Math.random().toString(36).substring(2, 11),
      type: transactionType,
      amount: parseFloat(amount),
      merchant,
      date: new Date(),
      location,
      category: transactionType,
      isPrivate: false,
    };
    
    setTransaction(newTransaction);
    setIsAnimating(true);
    setHasInteracted(true);
    updateProgress(33);
    
    // Stop animation after 5 seconds
    setTimeout(() => {
      setIsAnimating(false);
    }, 5000);
  };
  
  // Handle completion of the step
  const handleContinue = () => {
    completeStep(1);
  };
  
  // Get the collector positions for animation
  const getCollectorPositions = () => {
    return [
      { left: '20%', top: '70%' }, // Credit Card Company
      { left: '80%', top: '70%' }, // Merchant
      { left: '30%', top: '20%' }, // Data Broker
      { left: '70%', top: '20%' }, // Government
    ];
  };
  
  const positions = getCollectorPositions();
  
  return (
    <SimulationFrame 
      title="Digital Transaction Surveillance Simulator" 
      description="See how your everyday transactions are tracked"
      securityLevel="high"
    >
      <div className={classes.simulationContainer}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={commonClasses.simulationIntro}>
            Every time you make a transaction using traditional financial systems, your data is collected,
            analyzed, and shared among multiple entities. This simulation demonstrates how a single purchase
            creates a network of surveillance around your financial life.
          </p>
          
          <div className={classes.transactionWrapper}>
            <div className={classes.transactionHeader}>
              <h3 className={classes.transactionTitle}>
                <CreditCard size={22} />
                Create a Financial Transaction
              </h3>
            </div>
            
            <div className={classes.form}>
              <div className={classes.formGroup}>
                <label className={classes.label}>
                  <ShoppingCart size={16} />
                  Transaction Type
                </label>
                <select 
                  className={classes.select}
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value as TransactionType)}
                >
                  <option value="coffee">Coffee</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="groceries">Groceries</option>
                  <option value="gas">Gas Station</option>
                  <option value="streaming">Streaming Service</option>
                  <option value="shopping">Online Shopping</option>
                  <option value="rent">Rent Payment</option>
                  <option value="gift">Gift Purchase</option>
                </select>
              </div>
              
              <div className={classes.formGroup}>
                <label className={classes.label}>
                  <DollarSign size={16} />
                  Amount ($)
                </label>
                <input
                  type="text"
                  className={classes.input}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
              </div>
              
              <div className={classes.formGroup}>
                <label className={classes.label}>
                  <Truck size={16} />
                  Merchant
                </label>
                <input
                  type="text"
                  className={classes.input}
                  value={merchant}
                  onChange={(e) => setMerchant(e.target.value)}
                  placeholder="Enter merchant name"
                />
              </div>
              
              <div className={classes.formGroup}>
                <label className={classes.label}>
                  <HomeIcon size={16} />
                  Location
                </label>
                <input
                  type="text"
                  className={classes.input}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location"
                />
              </div>
            </div>
            
            <button 
              className={classes.button}
              onClick={handleCreateTransaction}
            >
              <CreditCard size={18} />
              Process Transaction
            </button>
          </div>
          
          {transaction && (
            <motion.div 
              className={classes.transactionDisplay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={classes.animationContainer}>
                {/* User icon in the center */}
                <div className={classes.userIcon}>
                  <User size={40} color={theme.colors.textLight} />
                </div>
                
                {/* Transaction icon */}
                <motion.div 
                  className={classes.transactionIcon}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: isAnimating ? [0, 1, 1, 1] : 1,
                    y: isAnimating ? [0, -30, -30, -30] : -30,
                    opacity: isAnimating ? [0, 1, 1, 0] : 0
                  }}
                  transition={{ 
                    duration: 2, 
                    times: [0, 0.2, 0.8, 1],
                    repeat: isAnimating ? Infinity : 0,
                    repeatDelay: 3
                  }}
                >
                  {getTransactionIcon(transaction.type)}
                </motion.div>
                
                {/* Data collectors */}
                {dataCollectors.map((collector, index) => (
                  <motion.div
                    key={collector.id}
                    className={classes.dataCollectorIcon}
                    style={{
                      ...positions[index],
                      backgroundColor: collector.color,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: isAnimating ? 1 : 0,
                    }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.5 + index * 0.2
                    }}
                  >
                    {collector.icon}
                  </motion.div>
                ))}
                
                {/* Data point bubbles */}
                {isAnimating && dataCollectors.map((collector, collectorIndex) => (
                  collector.dataPieces.map((dataPiece, dataIndex) => (
                    <motion.div
                      key={`${collector.id}-data-${dataIndex}`}
                      className={classes.dataPointBubble}
                      style={{
                        backgroundColor: `${collector.color}40`,
                        border: `1px solid ${collector.color}`,
                      }}
                      initial={{ 
                        opacity: 0,
                        x: '50%',
                        y: '50%',
                      }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        x: [
                          '50%', 
                          `${parseInt(positions[collectorIndex].left as string) + (Math.random() * 10 - 5)}%`
                        ],
                        y: [
                          '50%',
                          `${parseInt(positions[collectorIndex].top as string) + (Math.random() * 10 - 5)}%`
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: 1 + collectorIndex * 0.3 + dataIndex * 0.2,
                        times: [0, 0.3, 0.7, 1]
                      }}
                    >
                      {dataPiece}
                    </motion.div>
                  ))
                ))}
                
                {/* Connection lines */}
                {isAnimating && positions.map((position, index) => (
                  <motion.div
                    key={`connection-${index}`}
                    className={classes.animationLinks}
                    style={{
                      left: '50%',
                      top: '50%',
                      backgroundColor: `${dataCollectors[index].color}80`,
                      transformOrigin: 'left center',
                    }}
                    initial={{
                      width: 0,
                      rotate: Math.atan2(
                        parseInt(position.top as string) - 50,
                        parseInt(position.left as string) - 50
                      ) * (180 / Math.PI),
                    }}
                    animate={{
                      width: Math.sqrt(
                        Math.pow(parseInt(position.left as string) - 50, 2) +
                        Math.pow(parseInt(position.top as string) - 50, 2)
                      ) + '%',
                      opacity: [0, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5 + index * 0.2,
                    }}
                  />
                ))}
              </div>
              
              <h3 className={classes.findingsTitle}>
                <Eye size={24} />
                Who's Tracking Your Transaction?
              </h3>
              
              <div className={classes.dataCollectorsList}>
                {dataCollectors.map((collector) => (
                  <motion.div 
                    key={collector.id}
                    className={classes.collectorCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={classes.collectorHeader}>
                      <div 
                        className={classes.collectorIcon}
                        style={{ backgroundColor: collector.color }}
                      >
                        {collector.icon}
                      </div>
                      <h4 className={classes.collectorTitle}>{collector.name}</h4>
                    </div>
                    
                    <p className={classes.collectorDescription}>
                      {collector.description}
                    </p>
                    
                    <div>
                      <strong>Data Collected:</strong>
                      <div className={classes.dataPieceList}>
                        {collector.dataPieces.map((piece, index) => (
                          <div 
                            key={index} 
                            className={classes.dataPiece}
                            style={{ 
                              backgroundColor: `${collector.color}20`,
                              border: `1px solid ${collector.color}40`
                            }}
                          >
                            {piece}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className={classes.findingsContent}>
                <h4 style={{ color: theme.colors.textLight, margin: '0 0 15px 0' }}>Key Insights About Financial Surveillance:</h4>
                <ul className={classes.findingsList}>
                  <li className={classes.findingsItem}>
                    A single transaction can expose your data to 20+ different entities when you use traditional payment systems.
                  </li>
                  <li className={classes.findingsItem}>
                    Your transaction history creates a detailed profile of your habits, preferences, political leanings, and even health status.
                  </li>
                  <li className={classes.findingsItem}>
                    Data is often retained for years and can be combined with other datasets to create ever more detailed profiles.
                  </li>
                  <li className={classes.findingsItem}>
                    Your financial data can influence insurance rates, credit scores, and even employment opportunities.
                  </li>
                  <li className={classes.findingsItem}>
                    Bitcoin provides an alternative model that separates identity from transactions while still maintaining verifiability.
                  </li>
                </ul>
              </div>
              
              <button 
                className={classes.continueButton}
                onClick={handleContinue}
                disabled={!hasInteracted}
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

export default PrivacySimulator;