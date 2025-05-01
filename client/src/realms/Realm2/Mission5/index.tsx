import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { createUseStyles } from 'react-jss';
import RealmLayout from '../components/RealmLayout';
import { useCommonStyles } from '../styles/missionStyles';
import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, DollarSign, Settings, Lock, Banknote, Bank } from 'lucide-react';
import theme from '../styles/theme';

const MISSION_STEPS = [
  {
    id: 1,
    title: 'Central Banking System',
    description: 'Examine how central banks control monetary policy',
    icon: <Bank size={24} />,
  },
  {
    id: 2,
    title: 'Commercial Banking Layer',
    description: 'See how commercial banks extend the money supply',
    icon: <Banknote size={24} />,
  },
  {
    id: 3,
    title: 'Payment Networks',
    description: 'Understand how payment networks process transactions',
    icon: <CreditCard size={24} />,
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
  contentSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    padding: '30px',
    marginBottom: '30px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  sectionTitle: {
    fontSize: '1.4rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: '0 0 20px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  architectureDiagram: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '600px',
    marginTop: '30px',
    marginBottom: '40px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  diagramTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginBottom: '20px',
    textAlign: 'center',
  },
  tierLabel: {
    position: 'absolute',
    left: '10px',
    fontWeight: 600,
    color: theme.colors.textLight,
    padding: '5px 10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: theme.borderRadius.small,
    fontSize: '0.9rem',
  },
  tier: {
    position: 'absolute',
    left: '5%',
    right: '5%',
    height: '120px',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    borderRadius: theme.borderRadius.card,
    border: `1px solid ${theme.colors.primary}40`,
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  centralBankTier: {
    top: '70px',
  },
  commercialBankTier: {
    top: '230px',
  },
  paymentProcessorTier: {
    top: '390px',
  },
  cardIssuerTier: {
    top: '550px',
  },
  node: {
    width: '120px',
    height: '120px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
  },
  nodeTier1: {
    borderColor: `${theme.colors.primary}80`,
    boxShadow: `0 0 20px ${theme.colors.primary}40`,
  },
  nodeTier2: {
    borderColor: `rgba(64, 196, 255, 0.5)`,
    boxShadow: `0 0 20px rgba(64, 196, 255, 0.2)`,
  },
  nodeTier3: {
    borderColor: `rgba(130, 119, 23, 0.5)`,
    boxShadow: `0 0 20px rgba(255, 193, 7, 0.2)`,
  },
  nodeTier4: {
    borderColor: `rgba(76, 175, 80, 0.5)`,
    boxShadow: `0 0 20px rgba(76, 175, 80, 0.2)`,
  },
  nodeIcon: {
    marginBottom: '5px',
    color: theme.colors.textLight,
  },
  nodeLabel: {
    fontSize: '0.85rem',
    color: theme.colors.textLight,
    fontWeight: 600,
    textAlign: 'center',
  },
  arrow: {
    position: 'absolute',
    width: '2px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transformOrigin: 'top',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '-4px',
      width: '10px',
      height: '10px',
      borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
      borderRight: '2px solid rgba(255, 255, 255, 0.3)',
      transform: 'rotate(45deg)',
    },
  },
  nodeDescription: {
    position: 'absolute',
    width: '250px',
    padding: '10px 15px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: theme.borderRadius.card,
    fontSize: '0.85rem',
    color: theme.colors.textLight,
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 10,
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity 0.2s',
  },
  nodeHighlighted: {
    cursor: 'pointer',
    '&:hover $nodeDescription': {
      opacity: 1,
    },
  },
  infoBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    marginTop: '30px',
    marginBottom: '20px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  infoTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  infoContent: {
    color: theme.colors.softContrast,
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  processFlow: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  flowStep: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  stepNumber: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    flexShrink: 0,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginTop: 0,
    marginBottom: '10px',
  },
  stepDescription: {
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
  comparisonTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '30px',
    marginBottom: '30px',
  },
  tableHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '15px',
    textAlign: 'left',
    color: theme.colors.textLight,
    fontWeight: 600,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  tableCell: {
    padding: '15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    color: theme.colors.softContrast,
    verticalAlign: 'top',
  },
  highlightCell: {
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    borderRight: `1px solid ${theme.colors.primary}40`,
  },
  conclusionBox: {
    backgroundColor: `rgba(198, 40, 40, 0.1)`,
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    marginTop: '30px',
    border: `1px solid ${theme.colors.primary}40`,
  },
  conclusionTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: '0 0 15px 0',
  },
  conclusionText: {
    color: theme.colors.softContrast,
    fontSize: '1.05rem',
    lineHeight: '1.7',
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

const Mission5: React.FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const [, setLocation] = useLocation();
  
  // State for the active step and progress
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(25);
  
  // Handle completion of the mission
  const handleCompleteMission = () => {
    // Here you would update any global state/progress
    setLocation('/realm/2');
  };
  
  // Advance to next section
  const handleContinue = () => {
    if (activeStep < MISSION_STEPS.length) {
      setActiveStep(activeStep + 1);
      setProgress((activeStep + 1) / MISSION_STEPS.length * 100);
    } else {
      handleCompleteMission();
    }
  };
  
  return (
    <RealmLayout 
      title="Mission 5: Legacy Financial Architecture" 
      subtitle="Understanding traditional financial systems and how Bitcoin differs"
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
            <Bank size={32} />
            Legacy Financial Architecture: The Layered Money System
          </h1>
          <p className={classes.missionDescription}>
            To understand Bitcoin's revolutionary design, we must first understand the architecture of the traditional financial system.
            In this mission, we'll explore the layers of the current financial infrastructure and how they differ from Bitcoin's approach.
          </p>
        </motion.div>
        
        {activeStep === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={classes.contentSection}>
              <h2 className={classes.sectionTitle}>
                <Bank size={24} />
                The Central Banking Tier
              </h2>
              
              <p>
                Central banks sit at the top of the traditional financial system. They are responsible for managing monetary policy,
                issuing currency, and regulating the banking system. The decisions made at this level affect every aspect of the economy.
              </p>
              
              <div className={classes.architectureDiagram}>
                <h3 className={classes.diagramTitle}>Traditional Financial System Architecture</h3>
                
                {/* Tier 1: Central Banks */}
                <div className={`${classes.tierLabel}`} style={{ top: '50px' }}>Tier 1: Central Banking System</div>
                <div className={`${classes.tier} ${classes.centralBankTier}`}>
                  <div className={`${classes.node} ${classes.nodeTier1} ${classes.nodeHighlighted}`}>
                    <Bank size={30} className={classes.nodeIcon} />
                    <div className={classes.nodeLabel}>Central Bank</div>
                    <div className={classes.nodeDescription} style={{ top: '-90px', left: '60px' }}>
                      Issues base money, sets monetary policy, manages interest rates, and acts as lender of last resort.
                    </div>
                  </div>
                </div>
                
                {/* Tier 2: Commercial Banks */}
                <div className={`${classes.tierLabel}`} style={{ top: '210px' }}>Tier 2: Commercial Banking Layer</div>
                <div className={`${classes.tier} ${classes.commercialBankTier}`}>
                  <div className={`${classes.node} ${classes.nodeTier2} ${classes.nodeHighlighted}`}>
                    <Banknote size={30} className={classes.nodeIcon} />
                    <div className={classes.nodeLabel}>Commercial Banks</div>
                    <div className={classes.nodeDescription} style={{ top: '-90px', left: '60px' }}>
                      Create commercial bank money through fractional reserve banking, provide loans, and maintain customer accounts.
                    </div>
                  </div>
                </div>
                
                {/* Tier 3: Payment Processors */}
                <div className={`${classes.tierLabel}`} style={{ top: '370px' }}>Tier 3: Payment Network Layer</div>
                <div className={`${classes.tier} ${classes.paymentProcessorTier}`}>
                  <div className={`${classes.node} ${classes.nodeTier3} ${classes.nodeHighlighted}`}>
                    <Settings size={30} className={classes.nodeIcon} />
                    <div className={classes.nodeLabel}>Payment Networks</div>
                    <div className={classes.nodeDescription} style={{ top: '-90px', left: '60px' }}>
                      Facilitate transactions between banks and financial institutions, process card payments, and manage settlement.
                    </div>
                  </div>
                </div>
                
                {/* Tier 4: Card Issuers/Consumer Interface */}
                <div className={`${classes.tierLabel}`} style={{ top: '530px' }}>Tier 4: Consumer Financial Interface</div>
                <div className={`${classes.tier} ${classes.cardIssuerTier}`}>
                  <div className={`${classes.node} ${classes.nodeTier4} ${classes.nodeHighlighted}`}>
                    <CreditCard size={30} className={classes.nodeIcon} />
                    <div className={classes.nodeLabel}>Card Issuers & Apps</div>
                    <div className={classes.nodeDescription} style={{ top: '-90px', left: '60px' }}>
                      Provide financial services directly to consumers, including credit/debit cards, mobile apps, and payment interfaces.
                    </div>
                  </div>
                </div>
                
                {/* Connection arrows */}
                <div 
                  className={classes.arrow}
                  style={{ 
                    top: '190px', 
                    left: '50%', 
                    height: '40px'
                  }}
                />
                <div 
                  className={classes.arrow}
                  style={{ 
                    top: '350px', 
                    left: '50%', 
                    height: '40px'
                  }}
                />
                <div 
                  className={classes.arrow}
                  style={{ 
                    top: '510px', 
                    left: '50%', 
                    height: '40px'
                  }}
                />
              </div>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <DollarSign size={20} />
                  Key Responsibilities of Central Banks
                </h3>
                <div className={classes.infoContent}>
                  <ol style={{ paddingLeft: '20px' }}>
                    <li>
                      <strong>Monetary Policy:</strong> Central banks control the money supply through interest rates, 
                      open market operations, and reserve requirements to influence economic outcomes like inflation and employment.
                    </li>
                    <li>
                      <strong>Currency Issuance:</strong> They are responsible for printing physical currency and issuing base money
                      (reserves) to the banking system, which forms the foundation of the broader money supply.
                    </li>
                    <li>
                      <strong>Financial Stability:</strong> Central banks act as "lenders of last resort" during financial crises,
                      providing liquidity to prevent bank runs and systemic collapse.
                    </li>
                    <li>
                      <strong>Banking Supervision:</strong> Many central banks regulate and supervise the banking system to ensure
                      compliance with laws and maintain stability.
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <Lock size={20} />
                  Centralization of Control
                </h3>
                <div className={classes.infoContent}>
                  <p>
                    The central banking system represents a highly centralized model of monetary control. Key decisions about 
                    the money supply and interest rates are made by a small group of individuals who are either politically appointed 
                    or otherwise unelected. While this allows for coordinated policy responses during crises, it also creates 
                    a single point of failure and vulnerability to political influence.
                  </p>
                  <p>
                    This centralization stands in stark contrast to Bitcoin's decentralized consensus mechanism, where no single
                    entity has control over the monetary policy, and changes to the system require broad consensus among participants.
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleContinue}
            >
              Continue to Commercial Banking
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
        
        {activeStep === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={classes.contentSection}>
              <h2 className={classes.sectionTitle}>
                <Banknote size={24} />
                The Commercial Banking Layer
              </h2>
              
              <p>
                Commercial banks form the second tier of the financial system. They serve as intermediaries between central 
                banks and the public, creating what economists call "commercial bank money" through the process of fractional reserve banking.
              </p>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <Banknote size={20} />
                  Fractional Reserve Banking
                </h3>
                <div className={classes.infoContent}>
                  <p>
                    In the fractional reserve system, banks are only required to hold a small percentage (the "reserve requirement") 
                    of their deposit liabilities as reserves. The rest can be lent out, creating new deposits in the banking system 
                    and effectively expanding the money supply.
                  </p>
                  <p>
                    This process creates a money multiplier effect, where the total money supply in the economy can be several times 
                    larger than the base money issued by the central bank.
                  </p>
                </div>
              </div>
              
              <div className={classes.processFlow}>
                <h3>The Money Creation Process:</h3>
                
                <div className={classes.flowStep}>
                  <div className={classes.stepNumber}>1</div>
                  <div className={classes.stepContent}>
                    <h4 className={classes.stepTitle}>Initial Deposit</h4>
                    <p className={classes.stepDescription}>
                      A customer deposits $1,000 in Bank A. This becomes a liability for the bank (they owe the depositor $1,000) 
                      and an asset (the $1,000 they now have).
                    </p>
                  </div>
                </div>
                
                <div className={classes.flowStep}>
                  <div className={classes.stepNumber}>2</div>
                  <div className={classes.stepContent}>
                    <h4 className={classes.stepTitle}>Reserve Requirement</h4>
                    <p className={classes.stepDescription}>
                      With a 10% reserve requirement, the bank must keep $100 as reserves but can lend out the remaining $900.
                    </p>
                  </div>
                </div>
                
                <div className={classes.flowStep}>
                  <div className={classes.stepNumber}>3</div>
                  <div className={classes.stepContent}>
                    <h4 className={classes.stepTitle}>Loan Creation</h4>
                    <p className={classes.stepDescription}>
                      Bank A lends $900 to a borrower, who spends it on goods or services. The seller of those goods deposits 
                      the $900 in Bank B.
                    </p>
                  </div>
                </div>
                
                <div className={classes.flowStep}>
                  <div className={classes.stepNumber}>4</div>
                  <div className={classes.stepContent}>
                    <h4 className={classes.stepTitle}>Money Multiplication</h4>
                    <p className={classes.stepDescription}>
                      Bank B must keep 10% ($90) as reserves but can lend out $810. This process continues through the banking system, 
                      potentially creating up to $10,000 in money supply from the original $1,000 deposit.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <Lock size={20} />
                  Trust-Based Model
                </h3>
                <div className={classes.infoContent}>
                  <p>
                    Commercial banking operates on a trust-based model. Depositors trust that banks will safeguard their money 
                    and allow withdrawals on demand, despite the fact that banks don't actually keep all deposits on hand. This system 
                    works efficiently under normal circumstances but can be vulnerable to bank runs during crises of confidence.
                  </p>
                  <p>
                    In contrast, Bitcoin operates on a verification-based model ("don't trust, verify"), where each transaction is 
                    cryptographically verified by the network, and there is no need to trust a third party with custody of your assets.
                  </p>
                </div>
              </div>
              
              <table className={classes.comparisonTable}>
                <thead>
                  <tr>
                    <th className={classes.tableHeader}>Feature</th>
                    <th className={classes.tableHeader}>Traditional Banking Money</th>
                    <th className={classes.tableHeader}>Bitcoin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.tableCell}>Money Creation</td>
                    <td className={classes.tableCell}>
                      Created through fractional reserve lending, expanding based on economic conditions and policy decisions
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Created on a predetermined schedule through mining; capped at 21 million units
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Ownership Model</td>
                    <td className={classes.tableCell}>
                      Custodial model where banks hold and control customer deposits, which are liabilities on their balance sheets
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Self-custodial model where users directly control their assets through private keys
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Counterparty Risk</td>
                    <td className={classes.tableCell}>
                      High - deposits depend on bank solvency (mitigated by deposit insurance to a limited extent)
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Minimal - properly secured bitcoin doesn't depend on the solvency of any third party
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleContinue}
            >
              Continue to Payment Networks
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
        
        {activeStep === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={classes.contentSection}>
              <h2 className={classes.sectionTitle}>
                <CreditCard size={24} />
                Payment Networks and Consumer Interfaces
              </h2>
              
              <p>
                The final layers of the traditional financial system consist of payment networks (like VISA, Mastercard, SWIFT) and 
                consumer-facing financial interfaces. These systems enable the movement of money between institutions and provide 
                everyday users with access to the financial system.
              </p>
              
              <div className={classes.processFlow}>
                <h3>How Payment Networks Process Transactions:</h3>
                
                <div className={classes.flowStep}>
                  <div className={classes.stepNumber}>1</div>
                  <div className={classes.stepContent}>
                    <h4 className={classes.stepTitle}>Authorization</h4>
                    <p className={classes.stepDescription}>
                      When you make a purchase with a card, the merchant's payment terminal contacts the payment network (e.g., Visa), 
                      which then contacts your card issuer to check if you have sufficient funds.
                    </p>
                  </div>
                </div>
                
                <div className={classes.flowStep}>
                  <div className={classes.stepNumber}>2</div>
                  <div className={classes.stepContent}>
                    <h4 className={classes.stepTitle}>Clearing</h4>
                    <p className={classes.stepDescription}>
                      After the transaction is approved, the payment network organizes the information about the transaction and 
                      sends it to the card issuer for processing. The issuer will then deduct the funds from your account.
                    </p>
                  </div>
                </div>
                
                <div className={classes.flowStep}>
                  <div className={classes.stepNumber}>3</div>
                  <div className={classes.stepContent}>
                    <h4 className={classes.stepTitle}>Settlement</h4>
                    <p className={classes.stepDescription}>
                      The payment network facilitates the transfer of funds between the issuing bank and the acquiring bank (merchant's bank). 
                      This typically happens in batches, not in real-time, and can take 1-3 business days to complete.
                    </p>
                  </div>
                </div>
                
                <div className={classes.flowStep}>
                  <div className={classes.stepNumber}>4</div>
                  <div className={classes.stepContent}>
                    <h4 className={classes.stepTitle}>Funding</h4>
                    <p className={classes.stepDescription}>
                      Finally, the acquiring bank deposits the funds into the merchant's account, typically after deducting fees. 
                      The entire process from authorization to funding can take several days for final settlement.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <Settings size={20} />
                  Complexity and Fees
                </h3>
                <div className={classes.infoContent}>
                  <p>
                    This complex system involves multiple intermediaries, each taking a cut of the transaction. The typical payment breakdown might include:
                  </p>
                  <ul style={{ paddingLeft: '20px', color: theme.colors.softContrast }}>
                    <li><strong>Interchange fee:</strong> 1-3% paid to the card-issuing bank</li>
                    <li><strong>Assessment fee:</strong> 0.1-0.15% paid to the card network (Visa/Mastercard)</li>
                    <li><strong>Payment processor fee:</strong> 0.5-0.75% paid to the payment processor</li>
                    <li><strong>Gateway fee:</strong> Additional fee for online transactions</li>
                  </ul>
                  <p>
                    These fees add up to significant costs for merchants, which are ultimately passed on to consumers through higher prices.
                  </p>
                </div>
              </div>
              
              <table className={classes.comparisonTable}>
                <thead>
                  <tr>
                    <th className={classes.tableHeader}>Feature</th>
                    <th className={classes.tableHeader}>Traditional Payment Networks</th>
                    <th className={classes.tableHeader}>Bitcoin Network</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.tableCell}>Settlement Time</td>
                    <td className={classes.tableCell}>
                      Card payments typically settle in 1-3 business days; wire transfers can take 1-5 business days for international transfers
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Transactions are typically confirmed in 10-60 minutes, regardless of geographic location
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Transaction Fees</td>
                    <td className={classes.tableCell}>
                      Merchants pay 2-3% on average; international transfers can cost 3-7% plus currency conversion fees
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Fees are based on network demand rather than transaction amount; typically much lower for large transfers
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Accessibility</td>
                    <td className={classes.tableCell}>
                      Requires bank accounts, credit checks, identity verification; excludes ~1.7 billion unbanked people globally
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Anyone with internet access can use Bitcoin; no permission or identity verification required
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Censorship Resistance</td>
                    <td className={classes.tableCell}>
                      Transactions can be blocked or reversed by payment networks, banks, or governments
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Once confirmed, transactions cannot be reversed or censored by any central authority
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div className={classes.conclusionBox}>
                <h3 className={classes.conclusionTitle}>Bitcoin: A Fundamental Redesign</h3>
                <p className={classes.conclusionText}>
                  Bitcoin represents not just an incremental improvement to the financial system, but a fundamental redesign. 
                  It collapses the multi-layered architecture of traditional finance into a single, integrated system where:
                </p>
                <ul style={{ color: theme.colors.softContrast, paddingLeft: '20px' }}>
                  <li>The monetary policy is predetermined and executed by code rather than committees</li>
                  <li>The payment system and settlement layer are one and the same</li>
                  <li>Users can directly custody and transfer their assets without intermediaries</li>
                  <li>Transactions are permanently settled within hours rather than days</li>
                </ul>
                <p className={classes.conclusionText}>
                  This elegant simplicity eliminates many points of failure, reduces costs, and expands access to financial services 
                  for people around the world, regardless of their socioeconomic status or location.
                </p>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleCompleteMission}
            >
              Complete Mission
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>
    </RealmLayout>
  );
};

export default Mission5;