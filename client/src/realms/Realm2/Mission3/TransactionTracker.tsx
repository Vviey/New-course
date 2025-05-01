import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { 
  Search, ArrowRight, Shield, DollarSign, ChevronDown, ChevronUp,
  PieChart, BarChart, Eye, AlertCircle, UserCheck, Fingerprint, Zap
} from 'lucide-react';
import theme from '../styles/theme';
import { useCommonStyles } from '../styles/missionStyles';
import SimulationFrame from '../components/SimulationFrame';

interface TransactionTrackerProps {
  activeCharacter: string;
  completeStep: (step: number) => void;
  updateProgress: (progress: number) => void;
}

interface Transaction {
  id: string;
  date: string;
  merchant: string;
  category: string;
  amount: number;
  location: string;
  time: string;
  flags: string[];
  riskScore: number;
}

interface FlagAlert {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  severity: 'low' | 'medium' | 'high';
  riskIncrease: number;
}

const useStyles = createUseStyles({
  simulationContainer: {
    padding: '20px',
  },
  transactionListContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
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
  searchContainer: {
    position: 'relative',
    width: '250px',
  },
  searchInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.input,
    padding: '10px 15px 10px 40px',
    color: theme.colors.textLight,
    fontSize: '0.9rem',
    width: '100%',
    '&:focus': {
      outline: 'none',
      borderColor: `${theme.colors.primary}80`,
    },
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.3)',
    },
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.colors.softContrast,
  },
  transactionTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    padding: '12px 15px',
    textAlign: 'left',
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
    fontWeight: 500,
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'relative',
    cursor: 'pointer',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.colors.textLight,
    },
  },
  tableHeaderActive: {
    color: theme.colors.primary,
  },
  sortIcon: {
    marginLeft: '5px',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  tableCell: {
    padding: '12px 15px',
    fontSize: '0.95rem',
    color: theme.colors.textLight,
    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
  },
  merchantCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  merchantIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  merchantName: {
    fontWeight: 500,
  },
  amountCell: {
    fontFamily: theme.fonts.mono,
    fontWeight: 600,
  },
  flagsCell: {
    display: 'flex',
    gap: '5px',
  },
  flagItem: {
    padding: '3px 8px',
    borderRadius: theme.borderRadius.full,
    fontSize: '0.75rem',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    color: theme.colors.primary,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
  },
  riskScoreCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  riskIndicator: {
    width: '50px',
    height: '8px',
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  riskBar: {
    height: '100%',
    transition: 'width 0.3s, background-color 0.3s',
  },
  lowRisk: {
    backgroundColor: '#4caf50',
  },
  mediumRisk: {
    backgroundColor: '#ff9800',
  },
  highRisk: {
    backgroundColor: '#f44336',
  },
  detailsButton: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '5px',
    borderRadius: theme.borderRadius.small,
    cursor: 'pointer',
    color: theme.colors.softContrast,
    transition: 'color 0.3s, background-color 0.3s',
    '&:hover': {
      color: theme.colors.textLight,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  },
  transactionDetails: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    borderRadius: theme.borderRadius.small,
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
    border: '1px solid rgba(255, 255, 255, 0.03)',
  },
  detailsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  detailsLabel: {
    color: theme.colors.textLight,
    fontWeight: 500,
  },
  alertsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    marginTop: '30px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  alertTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: '0 0 20px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  alertsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '15px',
  },
  alertCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  alertHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  lowSeverity: {
    color: '#4caf50',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
  mediumSeverity: {
    color: '#ff9800',
    backgroundColor: 'rgba(255, 152, 0, 0.1)',
  },
  highSeverity: {
    color: '#f44336',
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
  },
  alertIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertCardTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: 0,
  },
  alertDescription: {
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '15px',
  },
  riskImpact: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '5px 10px',
    borderRadius: theme.borderRadius.small,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    fontSize: '0.85rem',
    color: theme.colors.softContrast,
  },
  insightsContainer: {
    backgroundColor: `rgba(198, 40, 40, 0.1)`,
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    marginTop: '30px',
    border: `1px solid ${theme.colors.primary}40`,
  },
  insightsTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginTop: 0,
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  insightsList: {
    margin: '15px 0',
    padding: 0,
    listStyle: 'none',
  },
  insightItem: {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  insightIcon: {
    color: theme.colors.primary,
    marginTop: '3px',
  },
  insightText: {
    color: theme.colors.softContrast,
    lineHeight: '1.5',
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
});

export const TransactionTracker: React.FC<TransactionTrackerProps> = ({
  activeCharacter,
  completeStep,
  updateProgress
}) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  
  // State for transaction list
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [expandedTransactionId, setExpandedTransactionId] = useState<string | null>(null);
  const [sortField, setSortField] = useState<string>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Progress tracking
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  
  // Predefined flag alerts
  const flagAlerts: FlagAlert[] = [
    {
      id: 'large-amount',
      title: 'Large Transaction Amount',
      description: 'Transaction exceeds typical spending patterns for this category. May trigger mandatory reporting.',
      icon: <DollarSign size={20} />,
      severity: 'medium',
      riskIncrease: 25,
    },
    {
      id: 'unusual-location',
      title: 'Unusual Location',
      description: 'Transaction occurred in a location that differs from your typical geographic pattern.',
      icon: <AlertCircle size={20} />,
      severity: 'medium',
      riskIncrease: 30,
    },
    {
      id: 'frequency',
      title: 'Unusual Frequency',
      description: 'Multiple similar transactions in a short time period that differ from typical behavior.',
      icon: <Zap size={20} />,
      severity: 'low',
      riskIncrease: 15,
    },
    {
      id: 'sensitive-category',
      title: 'Sensitive Purchase Category',
      description: 'Transaction in a category often used for profiling (e.g., political donations, certain medical expenses).',
      icon: <Eye size={20} />,
      severity: 'high',
      riskIncrease: 40,
    },
    {
      id: 'cross-border',
      title: 'Cross-Border Transaction',
      description: 'Transaction that crosses national boundaries, triggering additional monitoring requirements.',
      icon: <Shield size={20} />,
      severity: 'high',
      riskIncrease: 35,
    },
    {
      id: 'pattern-match',
      title: 'Pattern Matching Alert',
      description: 'Transaction matches patterns that algorithms have flagged as potentially suspicious.',
      icon: <Fingerprint size={20} />,
      severity: 'medium',
      riskIncrease: 30,
    },
    {
      id: 'id-verification',
      title: 'Identity Verification Required',
      description: 'Transaction triggered a requirement for enhanced identity verification.',
      icon: <UserCheck size={20} />,
      severity: 'medium',
      riskIncrease: 20,
    },
  ];
  
  // Generate sample transaction data
  useEffect(() => {
    const generateTransactions = (): Transaction[] => {
      const merchants = [
        'Central Marketplace', 'Global Express', 'FutureDigital', 'MetaChange',
        'CryptoTech Industries', 'Privacy Shield LLC', 'Sovereign Systems',
        'Digital Freedom Co.', 'Parallel Economy', 'Surveillance City Bank'
      ];
      
      const categories = [
        'Retail', 'Tech', 'Financial Services', 'Travel', 'Food & Dining',
        'Healthcare', 'Education', 'Entertainment', 'Political', 'Crypto'
      ];
      
      const locations = [
        'New York, NY', 'San Francisco, CA', 'Miami, FL', 'Chicago, IL',
        'Austin, TX', 'Seattle, WA', 'Toronto, CA', 'London, UK', 'Berlin, DE', 'Tokyo, JP'
      ];
      
      const possibleFlags = [
        'large-amount', 'unusual-location', 'frequency', 'sensitive-category',
        'cross-border', 'pattern-match', 'id-verification'
      ];
      
      // Generate 15 sample transactions
      const sampleTransactions: Transaction[] = Array.from({ length: 15 }, (_, i) => {
        // Generate random date within last 30 days
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
        
        // Random time
        const hours = Math.floor(Math.random() * 24).toString().padStart(2, '0');
        const minutes = Math.floor(Math.random() * 60).toString().padStart(2, '0');
        
        // Random merchant and category
        const merchantIndex = Math.floor(Math.random() * merchants.length);
        const categoryIndex = Math.floor(Math.random() * categories.length);
        
        // Random amount (between $10 and $2000)
        const amount = Math.round((10 + Math.random() * 1990) * 100) / 100;
        
        // Random location
        const locationIndex = Math.floor(Math.random() * locations.length);
        
        // Random flags (0-3 flags)
        const numFlags = Math.floor(Math.random() * 4);
        const flags: string[] = [];
        for (let j = 0; j < numFlags; j++) {
          const flagIndex = Math.floor(Math.random() * possibleFlags.length);
          const flag = possibleFlags[flagIndex];
          if (!flags.includes(flag)) {
            flags.push(flag);
          }
        }
        
        // Calculate risk score based on flags
        let riskScore = 5 + Math.floor(Math.random() * 15); // Base risk 5-20
        flags.forEach(flag => {
          const alertMatch = flagAlerts.find(alert => alert.id === flag);
          if (alertMatch) {
            riskScore += alertMatch.riskIncrease;
          }
        });
        
        // Cap risk at 100
        riskScore = Math.min(riskScore, 100);
        
        return {
          id: `tx-${i + 1}`,
          date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          merchant: merchants[merchantIndex],
          category: categories[categoryIndex],
          amount,
          location: locations[locationIndex],
          time: `${hours}:${minutes}`,
          flags,
          riskScore,
        };
      });
      
      // Sort by date (newest first)
      return sampleTransactions.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
    };
    
    setTransactions(generateTransactions());
  }, []);
  
  // Sort transactions
  const handleSort = (field: string) => {
    setHasInteracted(true);
    
    if (field === sortField) {
      // Toggle sort direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new field and default to descending
      setSortField(field);
      setSortDirection('desc');
    }
  };
  
  // Filter and sort transactions
  const filteredAndSortedTransactions = transactions
    .filter(transaction => {
      if (!searchTerm) return true;
      
      const searchLower = searchTerm.toLowerCase();
      return (
        transaction.merchant.toLowerCase().includes(searchLower) ||
        transaction.category.toLowerCase().includes(searchLower) ||
        transaction.location.toLowerCase().includes(searchLower) ||
        transaction.date.toLowerCase().includes(searchLower)
      );
    })
    .sort((a, b) => {
      let comparison = 0;
      
      switch (sortField) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'merchant':
          comparison = a.merchant.localeCompare(b.merchant);
          break;
        case 'amount':
          comparison = a.amount - b.amount;
          break;
        case 'category':
          comparison = a.category.localeCompare(b.category);
          break;
        case 'risk':
          comparison = a.riskScore - b.riskScore;
          break;
        default:
          comparison = 0;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  
  // Toggle transaction details
  const toggleTransactionDetails = (id: string) => {
    setHasInteracted(true);
    setExpandedTransactionId(expandedTransactionId === id ? null : id);
    updateProgress(66);
  };
  
  // Get risk level class
  const getRiskLevelClass = (score: number) => {
    if (score < 30) return classes.lowRisk;
    if (score < 70) return classes.mediumRisk;
    return classes.highRisk;
  };
  
  // Get severity class for alert
  const getSeverityClass = (severity: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'low':
        return classes.lowSeverity;
      case 'medium':
        return classes.mediumSeverity;
      case 'high':
        return classes.highSeverity;
      default:
        return classes.mediumSeverity;
    }
  };
  
  // Handle completion of the step
  const handleContinue = () => {
    completeStep(2);
  };
  
  // Get all unique flags used in transactions
  const allFlags = Array.from(new Set(transactions.flatMap(t => t.flags)));
  
  // Filter alerts to only show ones relevant to the transactions
  const relevantAlerts = flagAlerts.filter(alert => allFlags.includes(alert.id));
  
  return (
    <SimulationFrame 
      title="Financial Surveillance Analysis System" 
      description="Revealing how transactions are monitored and analyzed"
      securityLevel="high"
    >
      <div className={classes.simulationContainer}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={commonClasses.simulationIntro}>
            This simulation demonstrates how financial institutions and government agencies track, analyze, and flag
            transactions in traditional financial systems. The data shown represents a simplified version of the
            monitoring systems used by banks, payment processors, and regulatory agencies worldwide.
          </p>
          
          <div className={classes.transactionListContainer}>
            <div className={classes.transactionHeader}>
              <h3 className={classes.transactionTitle}>
                <BarChart size={22} />
                Transaction Surveillance Monitor
              </h3>
              
              <div className={classes.searchContainer}>
                <Search size={16} className={classes.searchIcon} />
                <input
                  type="text"
                  className={classes.searchInput}
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <table className={classes.transactionTable}>
                <thead>
                  <tr>
                    <th 
                      className={`${classes.tableHeader} ${sortField === 'date' ? classes.tableHeaderActive : ''}`}
                      onClick={() => handleSort('date')}
                    >
                      Date
                      {sortField === 'date' && (
                        <span className={classes.sortIcon}>
                          {sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </span>
                      )}
                    </th>
                    <th 
                      className={`${classes.tableHeader} ${sortField === 'merchant' ? classes.tableHeaderActive : ''}`}
                      onClick={() => handleSort('merchant')}
                    >
                      Merchant
                      {sortField === 'merchant' && (
                        <span className={classes.sortIcon}>
                          {sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </span>
                      )}
                    </th>
                    <th 
                      className={`${classes.tableHeader} ${sortField === 'category' ? classes.tableHeaderActive : ''}`}
                      onClick={() => handleSort('category')}
                    >
                      Category
                      {sortField === 'category' && (
                        <span className={classes.sortIcon}>
                          {sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </span>
                      )}
                    </th>
                    <th 
                      className={`${classes.tableHeader} ${sortField === 'amount' ? classes.tableHeaderActive : ''}`}
                      onClick={() => handleSort('amount')}
                    >
                      Amount
                      {sortField === 'amount' && (
                        <span className={classes.sortIcon}>
                          {sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </span>
                      )}
                    </th>
                    <th className={classes.tableHeader}>Flags</th>
                    <th 
                      className={`${classes.tableHeader} ${sortField === 'risk' ? classes.tableHeaderActive : ''}`}
                      onClick={() => handleSort('risk')}
                    >
                      Risk Score
                      {sortField === 'risk' && (
                        <span className={classes.sortIcon}>
                          {sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </span>
                      )}
                    </th>
                    <th className={classes.tableHeader}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedTransactions.map((transaction) => (
                    <React.Fragment key={transaction.id}>
                      <tr>
                        <td className={classes.tableCell}>{transaction.date}</td>
                        <td className={classes.tableCell}>
                          <div className={classes.merchantCell}>
                            <div className={classes.merchantIcon}>
                              <DollarSign size={16} />
                            </div>
                            <span className={classes.merchantName}>{transaction.merchant}</span>
                          </div>
                        </td>
                        <td className={classes.tableCell}>{transaction.category}</td>
                        <td className={`${classes.tableCell} ${classes.amountCell}`}>
                          ${transaction.amount.toFixed(2)}
                        </td>
                        <td className={classes.tableCell}>
                          <div className={classes.flagsCell}>
                            {transaction.flags.length > 0 ? (
                              transaction.flags.map((flag, idx) => {
                                const flagAlert = flagAlerts.find(alert => alert.id === flag);
                                return (
                                  <div key={idx} className={classes.flagItem}>
                                    {flagAlert?.icon || <AlertCircle size={12} />}
                                    {flag.replace(/-/g, ' ')}
                                  </div>
                                );
                              })
                            ) : (
                              <span style={{ color: theme.colors.softContrast, fontSize: '0.85rem' }}>None</span>
                            )}
                          </div>
                        </td>
                        <td className={classes.tableCell}>
                          <div className={classes.riskScoreCell}>
                            <div className={classes.riskIndicator}>
                              <div 
                                className={`${classes.riskBar} ${getRiskLevelClass(transaction.riskScore)}`}
                                style={{ width: `${transaction.riskScore}%` }}
                              />
                            </div>
                            <span>{transaction.riskScore}</span>
                          </div>
                        </td>
                        <td className={classes.tableCell}>
                          <button 
                            className={classes.detailsButton}
                            onClick={() => toggleTransactionDetails(transaction.id)}
                          >
                            {expandedTransactionId === transaction.id ? 
                              <ChevronUp size={18} /> : 
                              <ChevronDown size={18} />
                            }
                          </button>
                        </td>
                      </tr>
                      {expandedTransactionId === transaction.id && (
                        <tr>
                          <td colSpan={7} style={{ padding: 0 }}>
                            <motion.div 
                              className={classes.transactionDetails}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className={classes.detailsRow}>
                                <span className={classes.detailsLabel}>Transaction ID:</span>
                                <span>{transaction.id}</span>
                              </div>
                              <div className={classes.detailsRow}>
                                <span className={classes.detailsLabel}>Date & Time:</span>
                                <span>{transaction.date} at {transaction.time}</span>
                              </div>
                              <div className={classes.detailsRow}>
                                <span className={classes.detailsLabel}>Location:</span>
                                <span>{transaction.location}</span>
                              </div>
                              <div className={classes.detailsRow}>
                                <span className={classes.detailsLabel}>Risk Factors:</span>
                                <span>
                                  {transaction.flags.length > 0 
                                    ? transaction.flags.map(f => f.replace(/-/g, ' ')).join(', ')
                                    : 'No risk factors detected'
                                  }
                                </span>
                              </div>
                              <div className={classes.detailsRow}>
                                <span className={classes.detailsLabel}>Monitoring Level:</span>
                                <span>
                                  {transaction.riskScore < 30 ? 'Standard' : 
                                   transaction.riskScore < 70 ? 'Enhanced' : 'High Alert'}
                                </span>
                              </div>
                            </motion.div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className={classes.alertsContainer}>
            <h3 className={classes.alertTitle}>
              <AlertCircle size={22} />
              Surveillance Alert Categories
            </h3>
            
            <div className={classes.alertsList}>
              {relevantAlerts.map((alert) => (
                <motion.div 
                  key={alert.id}
                  className={classes.alertCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={classes.alertHeader}>
                    <div className={`${classes.alertIcon} ${getSeverityClass(alert.severity)}`}>
                      {alert.icon}
                    </div>
                    <h4 className={classes.alertCardTitle}>{alert.title}</h4>
                  </div>
                  
                  <p className={classes.alertDescription}>
                    {alert.description}
                  </p>
                  
                  <div className={classes.riskImpact}>
                    <span>Risk Impact:</span>
                    <div className={classes.riskIndicator} style={{ width: '70px' }}>
                      <div 
                        className={`${classes.riskBar} ${getSeverityClass(alert.severity)}`}
                        style={{ width: `${(alert.riskIncrease / 50) * 100}%` }}
                      />
                    </div>
                    <span>+{alert.riskIncrease} points</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className={classes.insightsContainer}>
            <h3 className={classes.insightsTitle}>
              <Eye size={24} />
              Key Insights About Transaction Surveillance
            </h3>
            
            <ul className={classes.insightsList}>
              <li className={classes.insightItem}>
                <div className={classes.insightIcon}>
                  <AlertCircle size={16} />
                </div>
                <p className={classes.insightText}>
                  Financial institutions use complex algorithms to assign "risk scores" to transactions and accounts, 
                  affecting your access to financial services and credit.
                </p>
              </li>
              <li className={classes.insightItem}>
                <div className={classes.insightIcon}>
                  <AlertCircle size={16} />
                </div>
                <p className={classes.insightText}>
                  Transactions that trigger certain flags may be reported to government agencies through systems like 
                  Suspicious Activity Reports (SARs) or Currency Transaction Reports (CTRs).
                </p>
              </li>
              <li className={classes.insightItem}>
                <div className={classes.insightIcon}>
                  <AlertCircle size={16} />
                </div>
                <p className={classes.insightText}>
                  Certain categories of purchases (political, religious, health-related) can be used to profile you, 
                  potentially leading to discrimination or restricted financial access.
                </p>
              </li>
              <li className={classes.insightItem}>
                <div className={classes.insightIcon}>
                  <AlertCircle size={16} />
                </div>
                <p className={classes.insightText}>
                  Bitcoin's peer-to-peer design allows transactions to be validated without requiring personal information 
                  or centralized surveillance, though proper usage techniques are necessary to maintain privacy.
                </p>
              </li>
            </ul>
          </div>
          
          <button 
            className={classes.continueButton}
            onClick={handleContinue}
            disabled={!hasInteracted}
          >
            Continue to Conclusion
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </SimulationFrame>
  );
};

export default TransactionTracker;