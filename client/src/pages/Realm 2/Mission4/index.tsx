import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { createUseStyles } from 'react-jss';
import RealmLayout from '../components/RealmLayout';
import { useCommonStyles } from '../styles/missionStyles';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Key, LockKeyhole, Shield, FileKey } from 'lucide-react';
import theme from '../styles/theme';

const MISSION_STEPS = [
  {
    id: 1,
    title: 'Cryptography Basics',
    description: 'Learn the core concepts of cryptography that secure digital currencies',
    icon: <Key size={24} />,
  },
  {
    id: 2,
    title: 'Key Applications',
    description: 'Discover how public and private keys are used in Bitcoin',
    icon: <FileKey size={24} />,
  },
  {
    id: 3,
    title: 'The Security Advantage',
    description: 'Understand why cryptography makes Bitcoin more secure than traditional money',
    icon: <Shield size={24} />,
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
  conceptGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  conceptCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  conceptHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  conceptIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
  },
  conceptTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: 0,
  },
  conceptDescription: {
    color: theme.colors.softContrast,
    fontSize: '1rem',
    lineHeight: '1.6',
    flex: 1,
  },
  cryptoDiagram: {
    width: '100%',
    marginTop: '30px',
    marginBottom: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  diagramTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginBottom: '20px',
    textAlign: 'center',
  },
  diagramContent: {
    width: '100%',
    position: 'relative',
    height: '300px',
  },
  diagramNode: {
    position: 'absolute',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: `2px solid ${theme.colors.primary}`,
    color: theme.colors.textLight,
    padding: '10px',
    textAlign: 'center',
  },
  diagramArrow: {
    position: 'absolute',
    height: '2px',
    backgroundColor: theme.colors.primary,
    '&:after': {
      content: '""',
      position: 'absolute',
      right: '0',
      top: '-4px',
      width: '10px',
      height: '10px',
      borderTop: `2px solid ${theme.colors.primary}`,
      borderRight: `2px solid ${theme.colors.primary}`,
      transform: 'rotate(45deg)',
    },
  },
  exampleBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    marginTop: '20px',
    border: `1px solid ${theme.colors.primary}40`,
  },
  exampleTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginTop: 0,
    marginBottom: '15px',
  },
  exampleContent: {
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
  codeBlock: {
    fontFamily: theme.fonts.mono,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '15px',
    borderRadius: theme.borderRadius.default,
    color: theme.colors.accent1,
    fontSize: '0.9rem',
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
    marginTop: '15px',
    marginBottom: '15px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
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
  },
  advantagesList: {
    margin: '20px 0',
    padding: 0,
    listStyle: 'none',
  },
  advantageItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '20px',
  },
  advantageIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
    flexShrink: 0,
  },
  advantageContent: {
    flex: 1,
  },
  advantageTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: '0 0 5px 0',
  },
  advantageDescription: {
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
    lineHeight: '1.6',
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

const Mission4: React.FC = () => {
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
      title="Mission 4: The Cryptographic Shield" 
      subtitle="Discover how cryptography secures Bitcoin and enables digital ownership"
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
            <LockKeyhole size={32} />
            The Cryptographic Shield: Securing Digital Value
          </h1>
          <p className={classes.missionDescription}>
            Cryptography is the mathematical foundation that makes Bitcoin possible.
            In this mission, you'll learn how cryptographic keys, digital signatures, and hash functions
            work together to secure ownership and transactions in the Bitcoin network.
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
                <Key size={24} />
                The Core Concepts of Cryptography
              </h2>
              
              <p>
                Cryptography is the art of securing communication in the presence of adversaries. 
                It's what enables digital ownership, secure transactions, and privacy in the digital realm.
                Bitcoin relies on several cryptographic technologies to function:
              </p>
              
              <div className={classes.conceptGrid}>
                <div className={classes.conceptCard}>
                  <div className={classes.conceptHeader}>
                    <div className={classes.conceptIcon}>
                      <FileKey size={28} />
                    </div>
                    <h3 className={classes.conceptTitle}>Public/Private Keys</h3>
                  </div>
                  <p className={classes.conceptDescription}>
                    A pair of mathematically linked keys that allow for secure communication. The private key is kept secret and is used to create digital signatures, while the public key can be shared freely and is used to verify signatures.
                  </p>
                </div>
                
                <div className={classes.conceptCard}>
                  <div className={classes.conceptHeader}>
                    <div className={classes.conceptIcon}>
                      <FileKey size={28} />
                    </div>
                    <h3 className={classes.conceptTitle}>Digital Signatures</h3>
                  </div>
                  <p className={classes.conceptDescription}>
                    A mathematical method for proving the authenticity of a digital message or document. Using a private key, you can create a signature that anyone can verify with your public key, but no one can forge without your private key.
                  </p>
                </div>
                
                <div className={classes.conceptCard}>
                  <div className={classes.conceptHeader}>
                    <div className={classes.conceptIcon}>
                      <FileKey size={28} />
                    </div>
                    <h3 className={classes.conceptTitle}>Hash Functions</h3>
                  </div>
                  <p className={classes.conceptDescription}>
                    Mathematical algorithms that convert data of any size into a fixed-size output (hash). They are one-way functions: easy to compute a hash from data, but practically impossible to reconstruct the original data from a hash.
                  </p>
                </div>
              </div>
              
              <div className={classes.cryptoDiagram}>
                <h3 className={classes.diagramTitle}>Public Key Cryptography in Action</h3>
                <div className={classes.diagramContent}>
                  {/* Alice Node */}
                  <div 
                    className={classes.diagramNode}
                    style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Alice</div>
                    <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>Has private key</div>
                  </div>
                  
                  {/* Bob Node */}
                  <div 
                    className={classes.diagramNode}
                    style={{ right: '10%', top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Bob</div>
                    <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>Has Alice's public key</div>
                  </div>
                  
                  {/* Signature Node */}
                  <div 
                    className={classes.diagramNode}
                    style={{ left: '40%', top: '20%', width: '160px', height: '100px', borderRadius: '10px' }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Digital Signature</div>
                    <div style={{ fontSize: '0.7rem', marginTop: '5px' }}>Created with Alice's private key</div>
                  </div>
                  
                  {/* Message Node */}
                  <div 
                    className={classes.diagramNode}
                    style={{ left: '40%', bottom: '20%', width: '160px', height: '100px', borderRadius: '10px' }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Message</div>
                    <div style={{ fontSize: '0.7rem', marginTop: '5px' }}>Transaction data</div>
                  </div>
                  
                  {/* Arrows */}
                  <div 
                    className={classes.diagramArrow}
                    style={{ 
                      left: '20%', 
                      top: '40%', 
                      width: '20%', 
                      transform: 'rotate(-30deg)',
                      transformOrigin: 'left center'
                    }}
                  />
                  <div 
                    className={classes.diagramArrow}
                    style={{ 
                      left: '20%', 
                      bottom: '40%', 
                      width: '20%', 
                      transform: 'rotate(30deg)',
                      transformOrigin: 'left center'
                    }}
                  />
                  <div 
                    className={classes.diagramArrow}
                    style={{ 
                      left: '60%', 
                      top: '25%', 
                      width: '20%', 
                      transform: 'rotate(30deg)',
                      transformOrigin: 'left center'
                    }}
                  />
                  <div 
                    className={classes.diagramArrow}
                    style={{ 
                      left: '60%', 
                      bottom: '25%', 
                      width: '20%', 
                      transform: 'rotate(-30deg)',
                      transformOrigin: 'left center'
                    }}
                  />
                </div>
              </div>
              
              <div className={classes.exampleBox}>
                <h3 className={classes.exampleTitle}>Understanding Keys in Bitcoin</h3>
                <div className={classes.exampleContent}>
                  <p>
                    In Bitcoin, your wallet contains one or more private keys. From these private keys, the corresponding public keys are derived,
                    and from those, your Bitcoin addresses are generated. When you want to spend bitcoins, you create a digital signature using
                    your private key, which proves to the network that you are the rightful owner without revealing your private key.
                  </p>
                  <div className={classes.codeBlock}>
                    {`// Example of a private key (never share this!)`}<br />
                    {`L2cbQBKikbJT1bSn5kudZfH3uHnxPUSvJBpTfQdJQkpjtx8KNP2V`}<br />
                    <br />
                    {`// Corresponding public key`}<br />
                    {`023cba1f47d2d618cebb76133f41d4225499adf55c7d5665d63fb80c17ae3ffdfc`}<br />
                    <br />
                    {`// Bitcoin address derived from the public key`}<br />
                    {`1ExampleAddressWyz5eGRGKEm7o9Ub9nQSUD`}
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleContinue}
            >
              Continue to Key Applications
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
                <FileKey size={24} />
                How Bitcoin Uses Cryptography
              </h2>
              
              <p>
                Bitcoin uses cryptography to solve several critical problems in digital money. Let's explore how these
                cryptographic tools are applied in Bitcoin's design:
              </p>
              
              <table className={classes.comparisonTable}>
                <thead>
                  <tr>
                    <th className={classes.tableHeader}>Problem</th>
                    <th className={classes.tableHeader}>Cryptographic Solution</th>
                    <th className={classes.tableHeader}>How It Works</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.tableCell}>Proving Ownership</td>
                    <td className={classes.tableCell}>Digital Signatures</td>
                    <td className={classes.tableCell}>
                      When you spend bitcoin, you create a digital signature using your private key. Anyone can verify this signature with your public key, confirming you authorized the transaction.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Securing the Blockchain</td>
                    <td className={classes.tableCell}>Hash Functions</td>
                    <td className={classes.tableCell}>
                      Each block contains a cryptographic hash of the previous block, creating a chain that cannot be altered without redoing the work for all subsequent blocks.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Creating Digital Scarcity</td>
                    <td className={classes.tableCell}>Proof of Work</td>
                    <td className={classes.tableCell}>
                      Miners must find a solution to a cryptographic puzzle, which requires computational work. This limits the rate at which new bitcoins can be created.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.tableCell}>Identity and Addressing</td>
                    <td className={classes.tableCell}>Public Key Hashing</td>
                    <td className={classes.tableCell}>
                      Bitcoin addresses are derived from public keys through a series of hash functions, providing an additional layer of security and improved usability.
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div className={classes.exampleBox}>
                <h3 className={classes.exampleTitle}>Making a Bitcoin Transaction: The Cryptographic Steps</h3>
                <div className={classes.exampleContent}>
                  <p>
                    When you send bitcoin to someone, several cryptographic operations occur:
                  </p>
                  <ol style={{ paddingLeft: '20px', color: theme.colors.softContrast }}>
                    <li>Your wallet software creates a transaction that includes the recipient's address, the amount, and other data.</li>
                    <li>The transaction is hashed to create a unique identifier of the transaction data.</li>
                    <li>Your private key is used to create a digital signature of this hash.</li>
                    <li>The transaction, including this signature, is broadcast to the Bitcoin network.</li>
                    <li>Nodes in the network verify the signature using your public key, confirming you authorized the transaction.</li>
                    <li>Once verified and included in a block, the transaction becomes part of the blockchain.</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleContinue}
            >
              Continue to Security Advantages
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
                <Shield size={24} />
                Bitcoin's Cryptographic Advantages
              </h2>
              
              <p>
                Bitcoin's application of cryptography creates several security advantages over traditional financial systems:
              </p>
              
              <ul className={classes.advantagesList}>
                <li className={classes.advantageItem}>
                  <div className={classes.advantageIcon}>
                    <Shield size={22} />
                  </div>
                  <div className={classes.advantageContent}>
                    <h3 className={classes.advantageTitle}>Trustless Verification</h3>
                    <p className={classes.advantageDescription}>
                      Bitcoin's cryptographic proofs allow anyone to verify transactions and the state of the network without trusting any central authority. You can independently validate that all rules are being followed.
                    </p>
                  </div>
                </li>
                
                <li className={classes.advantageItem}>
                  <div className={classes.advantageIcon}>
                    <Shield size={22} />
                  </div>
                  <div className={classes.advantageContent}>
                    <h3 className={classes.advantageTitle}>Immutable Transaction Record</h3>
                    <p className={classes.advantageDescription}>
                      Once a transaction is confirmed in the blockchain, the cryptographic linking of blocks makes it practically impossible to alter the transaction history without commanding the majority of the network's computing power.
                    </p>
                  </div>
                </li>
                
                <li className={classes.advantageItem}>
                  <div className={classes.advantageIcon}>
                    <Shield size={22} />
                  </div>
                  <div className={classes.advantageContent}>
                    <h3 className={classes.advantageTitle}>Self-Custody</h3>
                    <p className={classes.advantageDescription}>
                      With Bitcoin, ownership is defined by possession of private keys, not by entries in a bank's database. This allows for true digital ownership without relying on trusted third parties to maintain accurate records.
                    </p>
                  </div>
                </li>
                
                <li className={classes.advantageItem}>
                  <div className={classes.advantageIcon}>
                    <Shield size={22} />
                  </div>
                  <div className={classes.advantageContent}>
                    <h3 className={classes.advantageTitle}>Censorship Resistance</h3>
                    <p className={classes.advantageDescription}>
                      The decentralized and cryptographic nature of Bitcoin means that no single entity can prevent transactions from being broadcast or included in the blockchain, as long as they follow the network's rules.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className={classes.conclusionBox}>
                <h3 className={classes.conclusionTitle}>The Key Takeaway</h3>
                <p className={classes.conclusionText}>
                  Cryptography is the foundation that enables Bitcoin to function as a secure, decentralized system of value transfer.
                  It allows for digital ownership, prevents double-spending, and secures the network without requiring trusted third parties.
                </p>
                <p className={classes.conclusionText}>
                  Understanding these cryptographic principles helps explain why Bitcoin represents such a fundamental innovation: 
                  for the first time in history, we have a digital asset that can be owned and transferred with the same (or greater) 
                  security properties as physical assets, but with all the advantages of digital information.
                </p>
                <p className={classes.conclusionText}>
                  The most important thing to remember is that your private keys are your bitcoin. Anyone with access to your private keys 
                  has control over your funds. This is why secure key management is essential for using Bitcoin safely.
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

export default Mission4;