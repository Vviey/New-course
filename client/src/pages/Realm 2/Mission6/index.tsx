import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { createUseStyles } from 'react-jss';
import RealmLayout from '../components/RealmLayout';
import { useCommonStyles } from '../styles/missionStyles';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Globe, Lock, Users, BookOpen, ShieldCheck } from 'lucide-react';
import theme from '../styles/theme';

const MISSION_STEPS = [
  {
    id: 1,
    title: 'Bitcoin Fundamentals Review',
    description: 'Consolidate your understanding of Bitcoin core concepts',
    icon: <BookOpen size={24} />,
  },
  {
    id: 2,
    title: 'Challenges & Questions',
    description: 'Test your knowledge with interactive challenges',
    icon: <Lightbulb size={24} />,
  },
  {
    id: 3,
    title: 'Your Bitcoin Journey',
    description: 'Prepare for the next steps in your Bitcoin education',
    icon: <Globe size={24} />,
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
  knowledgeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  topicCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  topicHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  topicIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
  },
  topicTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: 0,
  },
  topicDescription: {
    color: theme.colors.softContrast,
    fontSize: '1rem',
    lineHeight: '1.6',
    flex: 1,
  },
  keyPointsList: {
    margin: '15px 0',
    padding: 0,
    listStyle: 'none',
  },
  keyPoint: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '15px',
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  keyPointIcon: {
    color: theme.colors.primary,
    flexShrink: 0,
    marginTop: '2px',
  },
  quizSection: {
    marginTop: '30px',
  },
  quizQuestion: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    marginBottom: '25px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  questionText: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginTop: 0,
    marginBottom: '20px',
  },
  optionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '20px',
  },
  optionItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  optionSelected: {
    borderColor: `${theme.colors.primary}80`,
    backgroundColor: `rgba(198, 40, 40, 0.1)`,
  },
  optionCorrect: {
    borderColor: 'rgba(76, 175, 80, 0.5)',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
  optionIncorrect: {
    borderColor: 'rgba(244, 67, 54, 0.5)',
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
  },
  optionRadio: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    marginRight: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  optionRadioSelected: {
    border: `2px solid ${theme.colors.primary}`,
  },
  optionRadioInner: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: theme.colors.primary,
  },
  optionLabel: {
    color: theme.colors.textLight,
    fontSize: '1rem',
    flex: 1,
  },
  explanationBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    padding: '15px',
    marginTop: '15px',
    fontSize: '0.95rem',
    color: theme.colors.softContrast,
    lineHeight: '1.5',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  resourcesSection: {
    marginTop: '40px',
  },
  resourceCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '20px',
    marginBottom: '20px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
  },
  resourceIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    backgroundColor: 'rgba(198, 40, 40, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
    flexShrink: 0,
  },
  resourceContent: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginTop: 0,
    marginBottom: '10px',
  },
  resourceDescription: {
    color: theme.colors.softContrast,
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '15px',
  },
  resourceLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: theme.colors.accent1,
    fontSize: '0.9rem',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  challengeSection: {
    marginTop: '40px',
  },
  challengeCard: {
    backgroundColor: `rgba(198, 40, 40, 0.1)`,
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    marginBottom: '25px',
    border: `1px solid ${theme.colors.primary}40`,
  },
  challengeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  challengeIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.primary,
    flexShrink: 0,
  },
  challengeTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    margin: 0,
  },
  challengeDescription: {
    color: theme.colors.softContrast,
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  journeySection: {
    marginTop: '40px',
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
  progressTracker: {
    marginTop: '30px',
    marginBottom: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.borderRadius.card,
    padding: '25px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  progressTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.colors.textLight,
    marginTop: 0,
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  progressItems: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  progressItem: {
    flex: '1 1 180px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: theme.borderRadius.default,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  progressNumber: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: theme.colors.primary,
    marginBottom: '10px',
  },
  progressLabel: {
    fontSize: '0.9rem',
    color: theme.colors.softContrast,
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

// Quiz question data
const quizQuestions = [
  {
    id: 1,
    question: "What aspect of traditional banking does Bitcoin's design eliminate?",
    options: [
      { id: 'a', text: "The need for secure storage of value" },
      { id: 'b', text: "The need for trusted third-party intermediaries" },
      { id: 'c', text: "The concept of digital scarcity" },
      { id: 'd', text: "The ability to transact globally" }
    ],
    correctOption: 'b',
    explanation: "Bitcoin's design eliminates the need for trusted third-party intermediaries (like banks) by using cryptography and a distributed ledger (blockchain) to verify and record transactions. This allows for peer-to-peer transactions without a central authority."
  },
  {
    id: 2,
    question: "Which cryptographic element ensures that only the rightful owner can spend their bitcoin?",
    options: [
      { id: 'a', text: "Public keys" },
      { id: 'b', text: "Hash functions" },
      { id: 'c', text: "Digital signatures" },
      { id: 'd', text: "Merkle trees" }
    ],
    correctOption: 'c',
    explanation: "Digital signatures created using a user's private key prove ownership and authorize transactions in Bitcoin. Only someone with access to the private key can create valid signatures, ensuring that only the rightful owner can spend their bitcoin."
  },
  {
    id: 3,
    question: "What is a key difference between Bitcoin's monetary policy and that of central banks?",
    options: [
      { id: 'a', text: "Bitcoin's supply is predetermined and limited to 21 million coins" },
      { id: 'b', text: "Bitcoin's monetary policy changes based on economic conditions" },
      { id: 'c', text: "Bitcoin can adjust interest rates to control inflation" },
      { id: 'd', text: "Bitcoin is controlled by elected officials" }
    ],
    correctOption: 'a',
    explanation: "Bitcoin has a predetermined and limited supply of 21 million coins, with a transparent and immutable issuance schedule. This contrasts with central banks, which can adjust money supply based on economic conditions, policy decisions, or political influences."
  }
];

const Mission6: React.FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const [, setLocation] = useLocation();
  
  // State for the active step and progress
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(25);
  
  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});
  
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
  
  // Handle quiz answer selection
  const handleAnswerSelect = (questionId: number, optionId: string) => {
    if (!quizSubmitted[questionId]) {
      setQuizAnswers(prev => ({
        ...prev,
        [questionId]: optionId
      }));
    }
  };
  
  // Handle quiz submission
  const handleQuizSubmit = (questionId: number) => {
    setQuizSubmitted(prev => ({
      ...prev,
      [questionId]: true
    }));
  };
  
  // Check if option is correct
  const isCorrectOption = (questionId: number, optionId: string) => {
    const question = quizQuestions.find(q => q.id === questionId);
    return question?.correctOption === optionId;
  };
  
  // Get class for quiz option
  const getOptionClass = (questionId: number, optionId: string) => {
    if (!quizSubmitted[questionId]) {
      return quizAnswers[questionId] === optionId ? classes.optionSelected : '';
    } else {
      if (isCorrectOption(questionId, optionId)) {
        return classes.optionCorrect;
      } else if (quizAnswers[questionId] === optionId) {
        return classes.optionIncorrect;
      }
      return '';
    }
  };
  
  return (
    <RealmLayout 
      title="Mission 6: Realm Challenge - Master Your Knowledge" 
      subtitle="Review, test, and expand your understanding of Bitcoin concepts"
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
            <Lightbulb size={32} />
            Mastering the Surveillance City: Knowledge Review
          </h1>
          <p className={classes.missionDescription}>
            You've gained valuable insights about Bitcoin and traditional financial systems in this realm.
            Now it's time to solidify your understanding through review, challenges, and preparation for
            the next steps in your Bitcoin journey.
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
                <BookOpen size={24} />
                Key Concepts Review
              </h2>
              
              <p>
                Throughout this realm, you've explored several critical aspects of Bitcoin and the traditional
                financial system. Let's review the key concepts you've learned:
              </p>
              
              <div className={classes.knowledgeGrid}>
                <div className={classes.topicCard}>
                  <div className={classes.topicHeader}>
                    <div className={classes.topicIcon}>
                      <Users size={28} />
                    </div>
                    <h3 className={classes.topicTitle}>Control vs. Freedom</h3>
                  </div>
                  <div className={classes.topicDescription}>
                    <p>
                      We explored the centralized control mechanisms in traditional finance and how Bitcoin offers an alternative model.
                    </p>
                    <ul className={classes.keyPointsList}>
                      <li className={classes.keyPoint}>
                        <div className={classes.keyPointIcon}>
                          <ArrowRight size={16} />
                        </div>
                        <span>Central banks control monetary supply based on policy decisions made by a small group</span>
                      </li>
                      <li className={classes.keyPoint}>
                        <div className={classes.keyPointIcon}>
                          <ArrowRight size={16} />
                        </div>
                        <span>Bitcoin has a predetermined, transparent monetary policy that isn't subject to human intervention</span>
                      </li>
                      <li className={classes.keyPoint}>
                        <div className={classes.keyPointIcon}>
                          <ArrowRight size={16} />
                        </div>
                        <span>Financial surveillance is embedded in traditional systems but optional in Bitcoin</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className={classes.topicCard}>
                  <div className={classes.topicHeader}>
                    <div className={classes.topicIcon}>
                      <Lock size={28} />
                    </div>
                    <h3 className={classes.topicTitle}>Cryptographic Foundations</h3>
                  </div>
                  <div className={classes.topicDescription}>
                    <p>
                      You learned how cryptography enables Bitcoin's security and functionality.
                    </p>
                    <ul className={classes.keyPointsList}>
                      <li className={classes.keyPoint}>
                        <div className={classes.keyPointIcon}>
                          <ArrowRight size={16} />
                        </div>
                        <span>Public/private key pairs enable digital ownership and secure transactions</span>
                      </li>
                      <li className={classes.keyPoint}>
                        <div className={classes.keyPointIcon}>
                          <ArrowRight size={16} />
                        </div>
                        <span>Digital signatures prove ownership without revealing private keys</span>
                      </li>
                      <li className={classes.keyPoint}>
                        <div className={classes.keyPointIcon}>
                          <ArrowRight size={16} />
                        </div>
                        <span>Hash functions secure the blockchain and create tamper-evident history</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className={classes.topicCard}>
                  <div className={classes.topicHeader}>
                    <div className={classes.topicIcon}>
                      <ShieldCheck size={28} />
                    </div>
                    <h3 className={classes.topicTitle}>Financial Privacy</h3>
                  </div>
                  <div className={classes.topicDescription}>
                    <p>
                      We explored the importance of financial privacy and the surveillance mechanisms in traditional finance.
                    </p>
                    <ul className={classes.keyPointsList}>
                      <li className={classes.keyPoint}>
                        <div className={classes.keyPointIcon}>
                          <ArrowRight size={16} />
                        </div>
                        <span>Traditional financial systems track extensive personal and transaction data</span>
                      </li>
                      <li className={classes.keyPoint}>
                        <div className={classes.keyPointIcon}>
                          <ArrowRight size={16} />
                        </div>
                        <span>Data from financial transactions is used for profiling and can affect access to services</span>
                      </li>
                      <li className={classes.keyPoint}>
                        <div className={classes.keyPointIcon}>
                          <ArrowRight size={16} />
                        </div>
                        <span>Bitcoin offers the potential for greater financial privacy with proper usage techniques</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={classes.progressTracker}>
                <h3 className={classes.progressTitle}>
                  <Globe size={24} />
                  Your Learning Progress
                </h3>
                <div className={classes.progressItems}>
                  <div className={classes.progressItem}>
                    <div className={classes.progressNumber}>5</div>
                    <div className={classes.progressLabel}>Missions Completed</div>
                  </div>
                  <div className={classes.progressItem}>
                    <div className={classes.progressNumber}>12</div>
                    <div className={classes.progressLabel}>Key Concepts Learned</div>
                  </div>
                  <div className={classes.progressItem}>
                    <div className={classes.progressNumber}>3</div>
                    <div className={classes.progressLabel}>Interactive Simulations</div>
                  </div>
                  <div className={classes.progressItem}>
                    <div className={classes.progressNumber}>2</div>
                    <div className={classes.progressLabel}>Realms Completed</div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleContinue}
            >
              Continue to Challenges
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
                <Lightbulb size={24} />
                Knowledge Check Challenge
              </h2>
              
              <p>
                Test your understanding of key Bitcoin concepts with these challenge questions.
                Choose the best answer for each question and check your knowledge.
              </p>
              
              <div className={classes.quizSection}>
                {quizQuestions.map(question => (
                  <div key={question.id} className={classes.quizQuestion}>
                    <h3 className={classes.questionText}>{question.question}</h3>
                    <div className={classes.optionsList}>
                      {question.options.map(option => (
                        <div 
                          key={option.id}
                          className={`${classes.optionItem} ${getOptionClass(question.id, option.id)}`}
                          onClick={() => handleAnswerSelect(question.id, option.id)}
                        >
                          <div className={`${classes.optionRadio} ${quizAnswers[question.id] === option.id ? classes.optionRadioSelected : ''}`}>
                            {quizAnswers[question.id] === option.id && (
                              <div className={classes.optionRadioInner} />
                            )}
                          </div>
                          <div className={classes.optionLabel}>{option.text}</div>
                        </div>
                      ))}
                    </div>
                    
                    {!quizSubmitted[question.id] && quizAnswers[question.id] && (
                      <button 
                        className={classes.continueButton}
                        style={{ marginTop: '20px' }}
                        onClick={() => handleQuizSubmit(question.id)}
                      >
                        Check Answer
                      </button>
                    )}
                    
                    {quizSubmitted[question.id] && (
                      <div className={classes.explanationBox}>
                        <strong>Explanation: </strong>
                        {question.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className={classes.challengeSection}>
                <h3 className={classes.sectionTitle}>
                  <Globe size={24} />
                  Real-World Application Challenges
                </h3>
                
                <div className={classes.challengeCard}>
                  <div className={classes.challengeHeader}>
                    <div className={classes.challengeIcon}>
                      <Lock size={26} />
                    </div>
                    <h4 className={classes.challengeTitle}>Financial Privacy Assessment</h4>
                  </div>
                  <p className={classes.challengeDescription}>
                    Analyze your current financial interactions (banking, payments, online purchases) and identify at least three ways 
                    your financial data is being collected and potentially used. Then, consider ways you could increase your 
                    financial privacy in at least one of these areas.
                  </p>
                </div>
                
                <div className={classes.challengeCard}>
                  <div className={classes.challengeHeader}>
                    <div className={classes.challengeIcon}>
                      <ShieldCheck size={26} />
                    </div>
                    <h4 className={classes.challengeTitle}>Bitcoin Security Analysis</h4>
                  </div>
                  <p className={classes.challengeDescription}>
                    Research and compare different methods of Bitcoin storage (hardware wallets, software wallets, custodial services). 
                    Analyze the security tradeoffs of each approach and determine which might be most appropriate for different 
                    usage scenarios (small savings, large holdings, frequent transactions).
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleContinue}
            >
              Continue to Your Journey
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
                <Globe size={24} />
                Your Bitcoin Learning Journey
              </h2>
              
              <p>
                As you complete this realm, you're ready to continue your Bitcoin education journey.
                Here are resources and next steps to help you deepen your understanding.
              </p>
              
              <div className={classes.resourcesSection}>
                <h3>Recommended Resources:</h3>
                
                <div className={classes.resourceCard}>
                  <div className={classes.resourceIcon}>
                    <BookOpen size={30} />
                  </div>
                  <div className={classes.resourceContent}>
                    <h4 className={classes.resourceTitle}>The Bitcoin Standard</h4>
                    <p className={classes.resourceDescription}>
                      By Saifedean Ammous. An essential book that explains Bitcoin's value proposition from an 
                      economic and historical perspective, examining the evolution of money.
                    </p>
                  </div>
                </div>
                
                <div className={classes.resourceCard}>
                  <div className={classes.resourceIcon}>
                    <Globe size={30} />
                  </div>
                  <div className={classes.resourceContent}>
                    <h4 className={classes.resourceTitle}>Bitcoin.org</h4>
                    <p className={classes.resourceDescription}>
                      The original Bitcoin website with comprehensive documentation, resources, and guides 
                      for beginners and advanced users alike.
                    </p>
                  </div>
                </div>
                
                <div className={classes.resourceCard}>
                  <div className={classes.resourceIcon}>
                    <Users size={30} />
                  </div>
                  <div className={classes.resourceContent}>
                    <h4 className={classes.resourceTitle}>Bitcoin Meetups</h4>
                    <p className={classes.resourceDescription}>
                      Local Bitcoin meetups are invaluable for learning, networking, and experiencing the 
                      community aspect of Bitcoin. Find a local meetup to continue your learning journey with others.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={classes.conclusionBox}>
                <h3 className={classes.conclusionTitle}>What's Next: The Realm of Code</h3>
                <p className={classes.conclusionText}>
                  In the next realm, you'll dive into Bitcoin's technological foundations. You'll explore the codebase, understand 
                  how transactions work on a deeper level, and learn about Bitcoin's consensus mechanism.
                </p>
                <p className={classes.conclusionText}>
                  This realm will take you beyond theoretical concepts and into the actual implementation of Bitcoin, helping you 
                  understand how code and cryptography come together to create a decentralized monetary system.
                </p>
                <p className={classes.conclusionText}>
                  By completing the Surveillance City realm, you've built a solid understanding of Bitcoin's value proposition 
                  and how it differs from traditional financial systems. This foundation will serve you well as you continue 
                  your Bitcoin journey through the remaining realms.
                </p>
              </div>
            </div>
            
            <button 
              className={classes.continueButton}
              onClick={handleCompleteMission}
            >
              Complete Mission & Realm
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>
    </RealmLayout>
  );
};

export default Mission6;