import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { createUseStyles } from 'react-jss';
import RealmLayout from '../components/RealmLayout';
import { useCommonStyles } from '../styles/missionStyles';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Smartphone, Coins, Zap, Activity, Globe } from 'lucide-react';
import theme from '../styles/theme';

const MISSION_STEPS = [
  {
    id: 1,
    title: 'Lightning Network Basics',
    description: 'Understand how the Lightning Network extends Bitcoin functionality',
    icon: <Zap size={24} />,
  },
  {
    id: 2,
    title: 'Payment Channels',
    description: 'Learn how payment channels make Bitcoin transactions faster and cheaper',
    icon: <Activity size={24} />,
  },
  {
    id: 3,
    title: 'The Future of Bitcoin',
    description: 'Explore upcoming innovations in the Bitcoin ecosystem',
    icon: <Sparkles size={24} />,
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
  infoBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    marginTop: '20px',
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
  diagramContainer: {
    position: 'relative',
    width: '100%',
    height: '400px',
    marginTop: '30px',
    marginBottom: '30px',
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
  diagramNode: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.textLight,
    padding: '10px',
    textAlign: 'center',
    border: `2px solid ${theme.colors.primary}80`,
    boxShadow: `0 0 15px ${theme.colors.primary}40`,
  },
  diagramArrow: {
    position: 'absolute',
    height: '3px',
    backgroundColor: `${theme.colors.primary}80`,
    transformOrigin: 'left',
    '&:after': {
      content: '""',
      position: 'absolute',
      right: '0',
      top: '-4px',
      width: '10px',
      height: '10px',
      borderTop: `3px solid ${theme.colors.primary}80`,
      borderRight: `3px solid ${theme.colors.primary}80`,
      transform: 'rotate(45deg)',
    },
  },
  diagramChannel: {
    position: 'absolute',
    height: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 215, 0, 0.5)',
    boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)',
  },
  channelState: {
    position: 'absolute',
    padding: '8px 12px',
    borderRadius: theme.borderRadius.small,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: theme.colors.textLight,
    fontSize: '0.8rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  featureCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  featureHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  featureIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
  },
  featureTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: 0,
  },
  featureDescription: {
    color: theme.colors.softContrast,
    fontSize: '1rem',
    lineHeight: '1.6',
    flex: 1,
  },
  timelineContainer: {
    margin: '40px 0',
    position: 'relative',
    padding: '20px 0',
  },
  timelineLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: 'rgba(198, 40, 40, 0.3)',
    transform: 'translateX(-50%)',
  },
  timelineItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '50px',
    position: 'relative',
    width: '100%',
  },
  timelineItemRight: {
    justifyContent: 'flex-end',
  },
  timelineContent: {
    width: '45%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  timelineDate: {
    position: 'absolute',
    top: '-30px',
    fontWeight: 600,
    color: theme.colors.primary,
  },
  timelineDot: {
    position: 'absolute',
    left: '50%',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
    transform: 'translateX(-50%)',
    boxShadow: `0 0 10px ${theme.colors.primary}80`,
  },
  timelineArrow: {
    position: 'absolute',
    top: '20px',
    width: '20px',
    height: '20px',
  },
  timelineTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginTop: 0,
    marginBottom: '10px',
  },
  timelineDescription: {
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
    lineHeight: '1.5',
    margin: 0,
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

const MissionBonus: React.FC = () => {
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
      title="Bonus Mission: Bitcoin's Evolution" 
      subtitle="Explore the Lightning Network and future Bitcoin innovations"
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
            <Sparkles size={32} />
            Beyond The Blockchain: Bitcoin's Evolving Ecosystem
          </h1>
          <p className={classes.missionDescription}>
            The Bitcoin network is constantly evolving with new technologies and improvements.
            In this bonus mission, we'll explore the Lightning Network and other innovations
            that are expanding Bitcoin's capabilities and potential uses.
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
                <Zap size={24} />
                The Lightning Network: Bitcoin's Second Layer
              </h2>
              
              <p>
                While Bitcoin's blockchain provides exceptional security and decentralization, it faces
                challenges with scalability and transaction fees. The Lightning Network was developed as a
                "layer 2" solution that operates on top of the Bitcoin blockchain to address these limitations.
              </p>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <Zap size={20} />
                  What is the Lightning Network?
                </h3>
                <div className={classes.infoContent}>
                  <p>
                    The Lightning Network is a decentralized network of payment channels that allows for near-instant, 
                    low-cost Bitcoin transactions. It works by creating private payment channels between users that can 
                    remain open for extended periods, with only the final balances being recorded on the Bitcoin blockchain.
                  </p>
                </div>
              </div>
              
              <table className={classes.comparisonTable}>
                <thead>
                  <tr>
                    <th className={classes.tableHeader}>Feature</th>
                    <th className={classes.tableHeader}>Bitcoin Base Layer</th>
                    <th className={classes.tableHeader}>Lightning Network</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.tableCell}>Transaction Speed</td>
                    <td className={classes.tableCell}>
                      ~10 minutes for first confirmation, often waiting for multiple confirmations (30-60 minutes)
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Near-instant (milliseconds)
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Transaction Fees</td>
                    <td className={classes.tableCell}>
                      Variable, can range from $0.50 to $50+ during high congestion periods
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Typically less than $0.01, often fractions of a cent
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Scalability</td>
                    <td className={classes.tableCell}>
                      Limited to ~7 transactions per second with current block size limits
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Theoretically millions to billions of transactions per second
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Privacy</td>
                    <td className={classes.tableCell}>
                      Pseudonymous; all transactions are public on the blockchain
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Improved privacy; only channel open/close transactions are recorded on-chain
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Use Cases</td>
                    <td className={classes.tableCell}>
                      Better for large value transfers and final settlement
                    </td>
                    <td className={`${classes.tableCell} ${classes.highlightCell}`}>
                      Ideal for small payments, micropayments, and frequent transactions
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div className={classes.diagramContainer}>
                <h3 className={classes.diagramTitle}>How the Lightning Network Works</h3>
                
                {/* Alice Node */}
                <div 
                  className={classes.diagramNode}
                  style={{ left: '15%', top: '50%', transform: 'translateY(-50%)' }}
                >
                  <Smartphone size={24} style={{ marginBottom: '5px' }} />
                  <div style={{ fontSize: '0.9rem' }}>Alice</div>
                </div>
                
                {/* Bob Node */}
                <div 
                  className={classes.diagramNode}
                  style={{ right: '15%', top: '50%', transform: 'translateY(-50%)' }}
                >
                  <Smartphone size={24} style={{ marginBottom: '5px' }} />
                  <div style={{ fontSize: '0.9rem' }}>Bob</div>
                </div>
                
                {/* Payment Channel */}
                <div 
                  className={classes.diagramChannel}
                  style={{ 
                    left: '22%', 
                    right: '22%', 
                    top: '50%', 
                    transform: 'translateY(-50%)' 
                  }}
                />
                
                {/* Channel States */}
                <div 
                  className={classes.channelState}
                  style={{ left: '25%', top: '30%' }}
                >
                  Step 1: Open Channel<br />
                  Alice: 0.1 BTC<br />
                  Bob: 0 BTC
                </div>
                
                <div 
                  className={classes.channelState}
                  style={{ left: '45%', top: '30%' }}
                >
                  Step 2: Payment<br />
                  Alice: 0.08 BTC<br />
                  Bob: 0.02 BTC
                </div>
                
                <div 
                  className={classes.channelState}
                  style={{ right: '25%', top: '30%' }}
                >
                  Step 3: Close Channel<br />
                  Final balances recorded<br />
                  on Bitcoin blockchain
                </div>
              </div>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <Activity size={20} />
                  Key Innovations of the Lightning Network
                </h3>
                <div className={classes.infoContent}>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>
                      <strong>Payment Channels:</strong> Two-party ledger entries that allow multiple transactions without committing to the blockchain
                    </li>
                    <li>
                      <strong>Multi-Hop Payments:</strong> Ability to route payments through multiple channels, enabling payments between users without direct channels
                    </li>
                    <li>
                      <strong>Hash Time-Locked Contracts (HTLCs):</strong> Smart contracts that ensure payment security across multiple hops
                    </li>
                    <li>
                      <strong>Onion Routing:</strong> Privacy technique where each node in a payment path only knows the previous and next nodes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleContinue}
            >
              Continue to Payment Channels
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
                <Activity size={24} />
                Lightning Payment Channels: A Deeper Look
              </h2>
              
              <p>
                The fundamental building block of the Lightning Network is the payment channel. Let's explore 
                how these channels work, and why they're so revolutionary for Bitcoin's scalability.
              </p>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <Coins size={20} />
                  How Payment Channels Work
                </h3>
                <div className={classes.infoContent}>
                  <ol style={{ paddingLeft: '20px' }}>
                    <li>
                      <strong>Channel Opening:</strong> Two parties create a multi-signature address on the Bitcoin blockchain and commit funds to it. This requires an on-chain transaction.
                    </li>
                    <li>
                      <strong>Channel Operations:</strong> The parties can now exchange Bitcoin numerous times by updating the balances between them. Each update creates a new "commitment transaction" that reflects the current balance split.
                    </li>
                    <li>
                      <strong>Channel Closing:</strong> When finished, either party can close the channel, publishing the final balances to the blockchain. This requires a second on-chain transaction.
                    </li>
                  </ol>
                  <p>
                    The key innovation is that while the channel is open, thousands of transactions can occur between the parties without touching the blockchain, requiring no mining, and incurring minimal fees.
                  </p>
                </div>
              </div>
              
              <div className={classes.cardGrid}>
                <div className={classes.featureCard}>
                  <div className={classes.featureHeader}>
                    <div className={classes.featureIcon}>
                      <Zap size={28} />
                    </div>
                    <h3 className={classes.featureTitle}>Micropayments</h3>
                  </div>
                  <div className={classes.featureDescription}>
                    <p>
                      The Lightning Network enables extremely small payments (even fractions of a cent) that would be uneconomical on the main Bitcoin blockchain due to transaction fees.
                    </p>
                    <p>
                      This opens up new business models like pay-per-second media streaming, paying for individual articles instead of subscriptions, or tiny tips for content creators.
                    </p>
                  </div>
                </div>
                
                <div className={classes.featureCard}>
                  <div className={classes.featureHeader}>
                    <div className={classes.featureIcon}>
                      <Globe size={28} />
                    </div>
                    <h3 className={classes.featureTitle}>Global Payments</h3>
                  </div>
                  <div className={classes.featureDescription}>
                    <p>
                      Lightning transactions can be routed through multiple channels, creating a global, interconnected payment network that works across borders without intermediaries.
                    </p>
                    <p>
                      This allows for instant, low-cost international payments without the need for currency conversion or traditional banking rails.
                    </p>
                  </div>
                </div>
                
                <div className={classes.featureCard}>
                  <div className={classes.featureHeader}>
                    <div className={classes.featureIcon}>
                      <Zap size={28} />
                    </div>
                    <h3 className={classes.featureTitle}>Preserving Bitcoin's Core Principles</h3>
                  </div>
                  <div className={classes.featureDescription}>
                    <p>
                      The Lightning Network extends Bitcoin's capabilities without compromising its core principles of decentralization, censorship resistance, and limited supply.
                    </p>
                    <p>
                      It represents a complementary solution that leverages Bitcoin's security while addressing its scaling challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <Smartphone size={20} />
                  Using the Lightning Network Today
                </h3>
                <div className={classes.infoContent}>
                  <p>
                    The Lightning Network has moved from theoretical concept to practical reality. Today, users can:
                  </p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>Use Lightning-enabled wallets like Muun, Phoenix, or Blue Wallet</li>
                    <li>Make instant payments to merchants that accept Lightning payments</li>
                    <li>Receive tips or payments for content and services</li>
                    <li>Play Lightning-powered games and use applications built on this technology</li>
                  </ul>
                  <p>
                    While still in development, the network continues to grow, with thousands of nodes and millions of dollars in capacity already deployed.
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleContinue}
            >
              Continue to Future Innovations
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
                <Sparkles size={24} />
                The Future of Bitcoin: Emerging Innovations
              </h2>
              
              <p>
                Bitcoin continues to evolve through careful, deliberate upgrades that maintain its core principles.
                Let's explore some of the most important innovations in development or recently implemented.
              </p>
              
              <div className={classes.timelineContainer}>
                <div className={classes.timelineLine}></div>
                
                <div className={classes.timelineItem}>
                  <div className={classes.timelineDot} style={{ top: '20px' }}></div>
                  <div className={classes.timelineContent}>
                    <div className={classes.timelineDate}>2017</div>
                    <h3 className={classes.timelineTitle}>SegWit (Segregated Witness)</h3>
                    <p className={classes.timelineDescription}>
                      Implemented in 2017, SegWit separated (segregated) transaction signatures (witnesses) from transaction data, 
                      increasing block capacity and fixing transaction malleability, which was essential for the Lightning Network.
                    </p>
                  </div>
                </div>
                
                <div className={`${classes.timelineItem} ${classes.timelineItemRight}`}>
                  <div className={classes.timelineDot} style={{ top: '20px' }}></div>
                  <div className={classes.timelineContent}>
                    <div className={classes.timelineDate}>2021</div>
                    <h3 className={classes.timelineTitle}>Taproot</h3>
                    <p className={classes.timelineDescription}>
                      Activated in November 2021, Taproot improved privacy, efficiency, and smart contract functionality 
                      through Schnorr signatures and MAST (Merklized Abstract Syntax Trees), enabling more complex 
                      Bitcoin applications.
                    </p>
                  </div>
                </div>
                
                <div className={classes.timelineItem}>
                  <div className={classes.timelineDot} style={{ top: '20px' }}></div>
                  <div className={classes.timelineContent}>
                    <div className={classes.timelineDate}>In Development</div>
                    <h3 className={classes.timelineTitle}>Schnorr Signatures</h3>
                    <p className={classes.timelineDescription}>
                      Implemented as part of Taproot, Schnorr signatures offer improved efficiency and privacy. 
                      They enable key aggregation, allowing multiple signatures to be combined into one, 
                      reducing transaction size and increasing privacy.
                    </p>
                  </div>
                </div>
                
                <div className={`${classes.timelineItem} ${classes.timelineItemRight}`}>
                  <div className={classes.timelineDot} style={{ top: '20px' }}></div>
                  <div className={classes.timelineContent}>
                    <div className={classes.timelineDate}>In Research</div>
                    <h3 className={classes.timelineTitle}>Scriptless Scripts</h3>
                    <p className={classes.timelineDescription}>
                      A technique for expressing complex smart contracts as simple digital signatures, improving privacy 
                      and efficiency. This allows sophisticated contract logic without revealing it on the blockchain.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={classes.infoBox}>
                <h3 className={classes.infoTitle}>
                  <Sparkles size={20} />
                  Emerging Applications
                </h3>
                <div className={classes.infoContent}>
                  <p>
                    These technological improvements are enabling a new generation of Bitcoin applications:
                  </p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>
                      <strong>Decentralized Finance (DeFi):</strong> Lending, borrowing, and trading platforms built on Bitcoin sidechains or layer 2 solutions
                    </li>
                    <li>
                      <strong>Non-Custodial Services:</strong> Financial services that don't require trusting a third party with your funds
                    </li>
                    <li>
                      <strong>Decentralized Identity Systems:</strong> Self-sovereign identity solutions built on Bitcoin's secure foundation
                    </li>
                    <li>
                      <strong>Asset Tokenization:</strong> Representing real-world assets like real estate or stocks on Bitcoin-adjacent platforms
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className={classes.conclusionBox}>
                <h3 className={classes.conclusionTitle}>The Long Road Ahead</h3>
                <p className={classes.conclusionText}>
                  Bitcoin's development follows a careful, conservative approach that prioritizes security and stability over 
                  rapid feature development. This measured pace helps ensure that Bitcoin remains a reliable, secure system 
                  for storing and transferring value.
                </p>
                <p className={classes.conclusionText}>
                  While newer cryptocurrencies often promise faster innovation and more features, Bitcoin's methodical 
                  evolution has consistently delivered improvements without compromising its core value proposition. This 
                  conservative approach to development is a feature, not a bug—it's what makes Bitcoin trustworthy as a 
                  long-term store of value and medium of exchange.
                </p>
                <p className={classes.conclusionText}>
                  As Bitcoin continues to evolve, it will likely become the foundation of a new financial stack, with the 
                  base layer providing ultimate security and settlement, while second-layer solutions like Lightning Network 
                  enable fast, low-cost transactions and innovative applications.
                </p>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleCompleteMission}
            >
              Complete Bonus Mission
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>
    </RealmLayout>
  );
};

export default MissionBonus;