// import React, { useState, useEffect, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const CentralBankerSimulator = () => {
//   // Core economic indicators
//   const [year, setYear] = useState(0);
//   const [inflation, setInflation] = useState(2);
//   const [unemployment, setUnemployment] = useState(5);
//   const [wealthGap, setWealthGap] = useState(40);
//   const [assetBubble, setAssetBubble] = useState(0);
//   const [gdpGrowth, setGdpGrowth] = useState(2.5);
//   const [interestRate, setInterestRate] = useState(2);
//   const [publicApproval, setPublicApproval] = useState(50);
  
//   // Game state
//   const [history, setHistory] = useState({
//     inflation: [2],
//     unemployment: [5],
//     wealthGap: [40],
//     assetBubble: [0],
//     gdpGrowth: [2.5],
//     interestRate: [2],
//     publicApproval: [50],
//   });
//   const [gameOver, setGameOver] = useState(false);
//   const [eventText, setEventText] = useState('Welcome, Central Bank Governor. The economy is stable for now. What will you do?');
//   const [feedbackText, setFeedbackText] = useState('');
//   const [score, setScore] = useState(0);
//   const [difficulty, setDifficulty] = useState('normal');
//   const [selectedTab, setSelectedTab] = useState('main');
//   const [notes, setNotes] = useState('');
//   const [gameMode, setGameMode] = useState('tutorial'); // 'tutorial', 'playing', 'paused'
//   const [tutorialStep, setTutorialStep] = useState(0);
//   const [rateChangeAmount, setRateChangeAmount] = useState(0.5);
//   const [showAdvancedControls, setShowAdvancedControls] = useState(false);
  
//   // References
//   const chartRef = useRef(null);

//   const economicEvents = [
//     {
//       text: "Supply chain crisis is causing price increases across the economy.",
//       effects: { inflation: +1.5, unemployment: +0.5, gdpGrowth: -0.8 }
//     },
//     {
//       text: "Tech sector bubble is growing rapidly as investors chase returns.",
//       effects: { assetBubble: +15, wealthGap: +3, gdpGrowth: +0.5 }
//     },
//     {
//       text: "Unemployment rising as businesses struggle with higher costs.",
//       effects: { unemployment: +2, gdpGrowth: -1, publicApproval: -5 }
//     },
//     {
//       text: "Foreign investors dumping government bonds - yields rising.",
//       effects: { inflation: +0.8, interestRate: +0.3, gdpGrowth: -0.3 }
//     },
//     {
//       text: "Housing market showing signs of overheating with rising prices.",
//       effects: { assetBubble: +10, wealthGap: +2, inflation: +0.5 }
//     },
//     {
//       text: "Energy crisis causing higher production costs for businesses.",
//       effects: { inflation: +2, unemployment: +1, gdpGrowth: -1 }
//     },
//     {
//       text: "Economic growth slowing, businesses reducing hiring plans.",
//       effects: { unemployment: +1.5, gdpGrowth: -1.2, publicApproval: -5 }
//     },
//     {
//       text: "Stock market reaching all-time highs despite weak fundamentals.",
//       effects: { assetBubble: +20, wealthGap: +4, gdpGrowth: +0.5 }
//     },
//     {
//       text: "Labor shortage in key industries pushing wages higher.",
//       effects: { inflation: +1, unemployment: -0.5, gdpGrowth: +0.2 }
//     },
//     {
//       text: "Technological breakthrough increasing productivity across sectors.",
//       effects: { gdpGrowth: +1.5, unemployment: -0.5, inflation: -0.3 }
//     },
//     {
//       text: "Consumer confidence at record lows - spending decreasing.",
//       effects: { gdpGrowth: -1.5, unemployment: +1, inflation: -0.5 }
//     }
//   ];

//   const tutorialSteps = [
//     "Welcome to the Central Banker's Dilemma! You'll be making monetary policy decisions that affect the entire economy.",
//     "Your main tools are interest rates. Raising rates fights inflation but can hurt employment. Lowering rates stimulates growth but risks inflation.",
//     "Keep an eye on these key indicators: Inflation, Unemployment, GDP Growth, and Asset Bubble Risk.",
//     "The Wealth Gap shows inequality in society. Public Approval reflects how citizens view your performance.",
//     "Each year, you'll face economic events that will challenge your decision-making.",
//     "Your goal is to maintain a stable economy with balanced growth, low inflation, and high employment.",
//     "Let's begin! Make your first decision to start the simulation."
//   ];

  
// // Type definitions
// const difficultySettings = {
//   easy: {
//     volatility: 0.6,
//     eventFrequency: 0.5,
//     forgiveness: 1.5,
//   },
//   normal: {
//     volatility: 1.0,
//     eventFrequency: 0.7,
//     forgiveness: 1.0,
//   },
//   hard: {
//     volatility: 1.5,
//     eventFrequency: 0.9,
//     forgiveness: 0.7,
//   }
// } as const;

// type DifficultyLevel = keyof typeof difficultySettings;
// type DifficultySettings = typeof difficultySettings[DifficultyLevel];

// const [difficulty, setDifficulty] = useState<DifficultyLevel>('normal');

// // // Set difficulty with strict typing
// // const [difficulty, setDifficulty] = useState<DifficultyLevel>('normal');


//   // Check for game over conditions
//   useEffect(() => {
//     if (gameMode === 'playing') {
//       const settings: DifficultySettings = difficultySettings[difficulty];
  
//       if (
//         inflation > 12 / settings.forgiveness ||
//         unemployment > 18 / settings.forgiveness ||
//         assetBubble > 95 / settings.forgiveness ||
//         gdpGrowth < -5 / settings.forgiveness ||
//         publicApproval < 15
//       ) {
//         setGameOver(true);
//         setFeedbackText(getGameOverReason());
//       }
//     }
//   }, [inflation, unemployment, assetBubble, gdpGrowth, publicApproval, difficulty, gameMode]);
  
  

//   const getGameOverReason = () => {
//     if (inflation > 12) return "Economic crisis! Hyperinflation has destroyed public confidence. Your term as Governor has ended prematurely.";
//     if (unemployment > 18) return "Economic crisis! Mass unemployment has led to social unrest. The government has replaced you.";
//     if (assetBubble > 95) return "Economic crisis! The asset bubble has burst catastrophically. Financial markets are in freefall.";
//     if (gdpGrowth < -5) return "Economic crisis! Severe recession has destroyed confidence in your leadership.";
//     if (publicApproval < 15) return "Political crisis! The public has lost all confidence in your management. You've been asked to resign.";
//     return "Your term as Governor has ended prematurely.";
//   };

//   const advanceTutorial = () => {
//     if (tutorialStep < tutorialSteps.length - 1) {
//       setTutorialStep(tutorialStep + 1);
//     } else {
//       setGameMode('playing');
//     }
//   };

//   const applyRandomVariation = (baseChange, volatility = 1.0) => {
//     const settings = difficultySettings[difficulty];
//     const variationRange = 0.5 * settings.volatility * volatility;
//     return baseChange + (Math.random() * variationRange * 2 - variationRange);
//   };

//   const calculatePublicApproval = (newInflation, newUnemployment, newGdpGrowth) => {
//     // People dislike high inflation and unemployment, like growth
//     const inflationImpact = Math.max(-10, 5 - newInflation * 2);
//     const unemploymentImpact = Math.max(-10, 5 - newUnemployment);
//     const growthImpact = Math.min(5, newGdpGrowth * 1.5);
    
//     const totalImpact = inflationImpact + unemploymentImpact + growthImpact;
//     return Math.min(100, Math.max(0, publicApproval + totalImpact/3));
//   };

//   const handleRateChange = (amount) => {
//     if (gameMode !== 'playing') return;
    
//     // Update interest rate
//     const newInterestRate = Math.max(0, Math.min(20, interestRate + amount));
    
//     // Effect of interest rate change - immediate and lag effects
//     const inflationEffect = -0.3 * amount * (1 + assetBubble/100); // Higher rates reduce inflation, more so if there's a bubble
//     const unemploymentEffect = 0.4 * amount; // Higher rates increase unemployment
//     const assetBubbleEffect = -5 * amount; // Higher rates reduce asset bubbles
//     const wealthGapEffect = -0.5 * amount; // Higher rates can reduce wealth inequality by slowing asset price growth
//     const gdpGrowthEffect = -0.5 * amount; // Higher rates slow economic growth
    
//     // Apply randomness based on difficulty
//     const newInflation = Math.max(0, inflation + applyRandomVariation(inflationEffect));
//     const newUnemployment = Math.max(0, unemployment + applyRandomVariation(unemploymentEffect));
//     const newWealthGap = Math.max(0, wealthGap + applyRandomVariation(wealthGapEffect, 2.0));
//     const newAssetBubble = Math.max(0, assetBubble + applyRandomVariation(assetBubbleEffect, 1.5));
//     const newGdpGrowth = gdpGrowth + applyRandomVariation(gdpGrowthEffect);
    
//     // Text feedback based on direction of change
//     const direction = amount > 0 ? "increased" : "decreased";
//     const magnitude = Math.abs(amount) >= 1 ? "significantly" : "slightly";
    
//     updateEconomy({
//       inflation: newInflation,
//       unemployment: newUnemployment,
//       wealthGap: newWealthGap,
//       assetBubble: newAssetBubble,
//       gdpGrowth: newGdpGrowth,
//       interestRate: newInterestRate
//     });
    
//     setFeedbackText(`Interest rates ${direction} ${magnitude}. This will likely slow inflation ` +
//       `but may impact growth and employment over time.`);
//   };

//   const triggerRandomEvent = () => {
//     const settings = difficultySettings[difficulty];
//     if (Math.random() < settings.eventFrequency) {
//       const eventIndex = Math.floor(Math.random() * economicEvents.length);
//       const event = economicEvents[eventIndex];
      
//       setEventText(event.text);
      
//       // Apply event effects to the economy
//       return event.effects;
//     }
//     return {};
//   };

//   const updateEconomy = (newValues) => {
//     // Trigger random economic event
//     const eventEffects = triggerRandomEvent();
    
//     // Combine base changes with random event effects
//     const updatedValues = {
//       inflation: Math.max(0, (newValues.inflation || inflation) + (eventEffects.inflation || 0)),
//       unemployment: Math.max(0, (newValues.unemployment || unemployment) + (eventEffects.unemployment || 0)),
//       wealthGap: Math.max(0, (newValues.wealthGap || wealthGap) + (eventEffects.wealthGap || 0)),
//       assetBubble: Math.max(0, (newValues.assetBubble || assetBubble) + (eventEffects.assetBubble || 0)),
//       gdpGrowth: (newValues.gdpGrowth || gdpGrowth) + (eventEffects.gdpGrowth || 0),
//       interestRate: Math.max(0, (newValues.interestRate || interestRate) + (eventEffects.interestRate || 0))
//     };
    
//     // Calculate public approval based on economic performance
//     const newPublicApproval = calculatePublicApproval(
//       updatedValues.inflation, 
//       updatedValues.unemployment, 
//       updatedValues.gdpGrowth
//     );
    
//     // Update all state values
//     setInflation(parseFloat(updatedValues.inflation.toFixed(1)));
//     setUnemployment(parseFloat(updatedValues.unemployment.toFixed(1)));
//     setWealthGap(parseFloat(updatedValues.wealthGap.toFixed(1)));
//     setAssetBubble(parseFloat(updatedValues.assetBubble.toFixed(1)));
//     setGdpGrowth(parseFloat(updatedValues.gdpGrowth.toFixed(1)));
//     setInterestRate(parseFloat(updatedValues.interestRate.toFixed(1)));
//     setPublicApproval(parseFloat(newPublicApproval.toFixed(1)));
    
//     // Update history for charts
//     setHistory({
//       inflation: [...history.inflation, parseFloat(updatedValues.inflation.toFixed(1))],
//       unemployment: [...history.unemployment, parseFloat(updatedValues.unemployment.toFixed(1))],
//       wealthGap: [...history.wealthGap, parseFloat(updatedValues.wealthGap.toFixed(1))],
//       assetBubble: [...history.assetBubble, parseFloat(updatedValues.assetBubble.toFixed(1))],
//       gdpGrowth: [...history.gdpGrowth, parseFloat(updatedValues.gdpGrowth.toFixed(1))],
//       interestRate: [...history.interestRate, parseFloat(updatedValues.interestRate.toFixed(1))],
//       publicApproval: [...history.publicApproval, parseFloat(newPublicApproval.toFixed(1))],
//     });
    
//     setYear(year + 1);
    
//     // Update score based on balanced economy
//     const balanceScore = 10 - 
//       (Math.abs(updatedValues.inflation - 2) * 1.5 + 
//        Math.abs(updatedValues.unemployment - 5) + 
//        Math.abs(updatedValues.gdpGrowth - 2.5) * 1.5);
    
//     setScore(score + Math.round(Math.max(0, balanceScore)));
//   };

//   const resetSimulation = () => {
//     setYear(0);
//     setInflation(2);
//     setUnemployment(5);
//     setWealthGap(40);
//     setAssetBubble(0);
//     setGdpGrowth(2.5);
//     setInterestRate(2);
//     setPublicApproval(50);
//     setHistory({
//       inflation: [2],
//       unemployment: [5],
//       wealthGap: [40],
//       assetBubble: [0],
//       gdpGrowth: [2.5],
//       interestRate: [2],
//       publicApproval: [50],
//     });
//     setGameOver(false);
//     setEventText('Welcome, Central Bank Governor. The economy is stable for now. What will you do?');
//     setFeedbackText('');
//     setScore(0);
//     setGameMode('tutorial');
//     setTutorialStep(0);
//     setNotes('');
//   };

//   const getScoreCategory = () => {
//     if (score < 50) return { text: "Novice", color: "#dc3545" };
//     if (score < 100) return { text: "Competent", color: "#ffc107" };
//     if (score < 150) return { text: "Skilled", color: "#28a745" };
//     if (score < 200) return { text: "Expert", color: "#17a2b8" };
//     return { text: "Legendary", color: "#9c27b0" };
//   };

//   // Generate chart data
//   const chartData = {
//     labels: Array.from({ length: history.inflation.length }, (_, i) => `Year ${i}`),
//     datasets: [
//       {
//         label: 'Inflation (%)',
//         data: history.inflation,
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Unemployment (%)',
//         data: history.unemployment,
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//       {
//         label: 'GDP Growth (%)',
//         data: history.gdpGrowth,
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.5)',
//       },
//       {
//         label: 'Interest Rate (%)',
//         data: history.interestRate,
//         borderColor: 'rgb(153, 102, 255)',
//         backgroundColor: 'rgba(153, 102, 255, 0.5)',
//       }
//     ],
//   };

//   const secondaryChartData = {
//     labels: Array.from({ length: history.inflation.length }, (_, i) => `Year ${i}`),
//     datasets: [
//       {
//         label: 'Wealth Gap Index',
//         data: history.wealthGap,
//         borderColor: 'rgb(255, 159, 64)',
//         backgroundColor: 'rgba(255, 159, 64, 0.5)',
//       },
//       {
//         label: 'Asset Bubble Risk (%)',
//         data: history.assetBubble,
//         borderColor: 'rgb(255, 205, 86)',
//         backgroundColor: 'rgba(255, 205, 86, 0.5)',
//       },
//       {
//         label: 'Public Approval (%)',
//         data: history.publicApproval,
//         borderColor: 'rgb(54, 162, 235)',
//         backgroundColor: 'rgba(54, 162, 235, 0.5)',
//       }
//     ],
//   };

//   // Styling
//   const styles = {
//     container: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '20px',
//       fontFamily: '"Roboto", "Segoe UI", Arial, sans-serif',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '10px',
//       boxShadow: '0 0 15px rgba(0,0,0,0.1)',
//     },
//     header: {
//       textAlign: 'center',
//       color: '#343a40',
//       borderBottom: '2px solid #dee2e6',
//       paddingBottom: '15px',
//       marginBottom: '20px',
//     },
//     statsPanel: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//       gap: '15px',
//       marginBottom: '20px',
//     },
//     statCard: {
//       padding: '15px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//       flex: '1 1 180px',
//       display: 'flex',
//       flexDirection: 'column',
//       backgroundColor: 'white',
//     },
//     statTitle: {
//       margin: '0 0 5px 0',
//       fontSize: '16px',
//       color: '#6c757d',
//     },
//     statValue: {
//       margin: '0',
//       fontSize: '24px',
//       fontWeight: 'bold',
//     },
//     yearDisplay: {
//       textAlign: 'center',
//       padding: '10px',
//       backgroundColor: '#343a40',
//       color: 'white',
//       borderRadius: '8px',
//       marginBottom: '20px',
//       display: 'flex',
//       justifyContent: 'space-between',
//     },
//     eventPanel: {
//       padding: '20px',
//       backgroundColor: 'white',
//       borderRadius: '8px',
//       border: '1px solid #dee2e6',
//       marginBottom: '20px',
//       boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
//     },
//     chartContainer: {
//       height: '350px',
//       padding: '15px',
//       backgroundColor: 'white',
//       borderRadius: '8px',
//       boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
//       marginBottom: '20px',
//     },
//     actionPanel: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '15px',
//       padding: '20px',
//       backgroundColor: 'white',
//       borderRadius: '8px',
//       boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
//       marginBottom: '20px',
//     },
//     buttonRow: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '10px',
//       justifyContent: 'center',
//     },
//     button: {
//       padding: '12px 20px',
//       fontSize: '16px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontWeight: '500',
//       transition: 'all 0.2s ease',
//     },
//     hikeButton: {
//       backgroundColor: '#dc3545',
//       color: 'white',
//     },
//     cutButton: {
//       backgroundColor: '#28a745',
//       color: 'white',
//     },
//     neutralButton: {
//       backgroundColor: '#6c757d',
//       color: 'white',
//     },
//     resetButton: {
//       backgroundColor: '#17a2b8',
//       color: 'white',
//     },
//     rateControlSlider: {
//       width: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       gap: '10px',
//     },
//     slider: {
//       width: '80%',
//       margin: '0 auto',
//     },
//     sliderValue: {
//       fontWeight: 'bold',
//       fontSize: '18px',
//     },
//     reflectionPanel: {
//       marginTop: '20px',
//       padding: '20px',
//       backgroundColor: 'white',
//       borderRadius: '8px',
//       boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
//     },
//     tab: {
//       padding: '10px 20px',
//       cursor: 'pointer',
//       border: 'none',
//       backgroundColor: '#f8f9fa',
//       borderBottom: '2px solid transparent',
//       transition: 'all 0.2s ease',
//     },
//     activeTab: {
//       borderBottom: '2px solid #007bff',
//       fontWeight: 'bold',
//       color: '#007bff',
//     },
//     tabContent: {
//       padding: '20px',
//       backgroundColor: 'white',
//       borderRadius: '0 0 8px 8px',
//       boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
//     },
//     modal: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0,0,0,0.7)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       zIndex: 1000,
//     },
//     modalContent: {
//       backgroundColor: 'white',
//       padding: '30px',
//       borderRadius: '10px',
//       maxWidth: '600px',
//       width: '90%',
//       maxHeight: '80vh',
//       overflow: 'auto',
//       position: 'relative',
//     },
//     closeButton: {
//       position: 'absolute',
//       top: '10px',
//       right: '10px',
//       border: 'none',
//       background: 'none',
//       fontSize: '20px',
//       cursor: 'pointer',
//     },
//     tutorialPanel: {
//       backgroundColor: '#e9f7fe',
//       padding: '20px',
//       borderRadius: '8px',
//       borderLeft: '4px solid #17a2b8',
//       marginBottom: '20px',
//     },
//     gridContainer: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '20px',
//       marginBottom: '20px',
//     },
//     tooltip: {
//       position: 'relative',
//       display: 'inline-block',
//       borderBottom: '1px dotted #6c757d',
//       cursor: 'help',
//     },
//     tooltipText: {
//       visibility: 'hidden',
//       width: '200px',
//       backgroundColor: '#343a40',
//       color: 'white',
//       textAlign: 'center',
//       borderRadius: '6px',
//       padding: '10px',
//       position: 'absolute',
//       zIndex: '1',
//       bottom: '125%',
//       left: '50%',
//       marginLeft: '-100px',
//       opacity: '0',
//       transition: 'opacity 0.3s',
//     },
//     badge: {
//       display: 'inline-block',
//       padding: '3px 10px',
//       fontSize: '12px',
//       fontWeight: 'bold',
//       lineHeight: '1',
//       textAlign: 'center',
//       whiteSpace: 'nowrap',
//       verticalAlign: 'baseline',
//       borderRadius: '10px',
//       marginLeft: '10px',
//     },
//     toggleSwitch: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '10px',
//       margin: '10px 0',
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Central Banker's Dilemma <span style={{fontSize: '16px', color: '#6c757d'}}>{difficulty} mode</span></h1>
      
//       {gameMode === 'tutorial' && (
//         <div style={styles.tutorialPanel}>
//           <h3>Tutorial - Step {tutorialStep + 1}/{tutorialSteps.length}</h3>
//           <p>{tutorialSteps[tutorialStep]}</p>
//           <button 
//             style={{...styles.button, backgroundColor: '#17a2b8'}}
//             onClick={advanceTutorial}
//           >
//             {tutorialStep < tutorialSteps.length - 1 ? 'Next' : 'Start Simulation'}
//           </button>
//         </div>
//       )}
      
//       <div style={{display: 'flex', gap: '15px', marginBottom: '20px'}}>
//         <button 
//           style={{...styles.tab, ...(selectedTab === 'main' ? styles.activeTab : {})}}
//           onClick={() => setSelectedTab('main')}
//         >
//           Dashboard
//         </button>
//         <button 
//           style={{...styles.tab, ...(selectedTab === 'advanced' ? styles.activeTab : {})}}
//           onClick={() => setSelectedTab('advanced')}
//         >
//           Advanced Metrics
//         </button>
//         <button 
//           style={{...styles.tab, ...(selectedTab === 'notes' ? styles.activeTab : {})}}
//           onClick={() => setSelectedTab('notes')}
//         >
//           Governor's Notes
//         </button>
//         <button 
//           style={{...styles.tab, ...(selectedTab === 'settings' ? styles.activeTab : {})}}
//           onClick={() => setSelectedTab('settings')}
//         >
//           Settings
//         </button>
//       </div>
      
//       {selectedTab === 'main' && (
//         <>
//           <div style={styles.statsPanel}>
//             <div style={styles.statCard}>
//               <h3 style={styles.statTitle}>Inflation Rate</h3>
//               <p style={{...styles.statValue, color: inflation > 5 ? '#dc3545' : inflation < 1 ? '#ffc107' : '#28a745'}}>
//                 {inflation.toFixed(1)}%
//               </p>
//               <p style={{margin: '5px 0 0 0', fontSize: '12px', color: '#6c757d'}}>
//                 Target: 2.0%
//               </p>
//             </div>
//             <div style={styles.statCard}>
//               <h3 style={styles.statTitle}>Unemployment</h3>
//               <p style={{...styles.statValue, color: unemployment > 8 ? '#dc3545' : unemployment < 3 ? '#ffc107' : '#28a745'}}>
//                 {unemployment.toFixed(1)}%
//               </p>
//               <p style={{margin: '5px 0 0 0', fontSize: '12px', color: '#6c757d'}}>
//                 Target: 4.0-5.0%
//               </p>
//             </div>
//             <div style={styles.statCard}>
//               <h3 style={styles.statTitle}>GDP Growth</h3>
//               <p style={{...styles.statValue, color: gdpGrowth < 0 ? '#dc3545' : gdpGrowth > 4 ? '#ffc107' : '#28a745'}}>
//                 {gdpGrowth.toFixed(1)}%
//               </p>
//               <p style={{margin: '5px 0 0 0', fontSize: '12px', color: '#6c757d'}}>
//                 Target: 2.0-3.0%
//               </p>
//             </div>
//             <div style={styles.statCard}>
//               <h3 style={styles.statTitle}>Interest Rate</h3>
//               <p style={{...styles.statValue, color: interestRate > 10 ? '#dc3545' : interestRate < 0.5 ? '#ffc107' : '#343a40'}}>
//                 {interestRate.toFixed(1)}%
//               </p>
//               <p style={{margin: '5px 0 0 0', fontSize: '12px', color: '#6c757d'}}>
//                 Your policy tool
//               </p>
//             </div>
//           </div>
          
//           <div style={styles.yearDisplay}>
//             <h2 style={{margin: 0}}>Year {year}</h2>
//             <div>
//               <span>Score: {score}</span>
//               <span style={{
//                 ...styles.badge, 
//                 backgroundColor: getScoreCategory().color,
//                 color: 'white',
//               }}>
//                 {getScoreCategory().text}
//               </span>
//             </div>
//           </div>
          
//           <div style={styles.eventPanel}>
//             <h3 style={{margin: '0 0 10px 0'}}>Economic Situation:</h3>
//             <p style={{fontSize: '16px', margin: '0 0 15px 0'}}>{eventText}</p>
//             {feedbackText && (
//               <p style={{
//                 fontWeight: 'bold', 
//                 color: '#343a40', 
//                 padding: '10px', 
//                 backgroundColor: '#f8f9fa', 
//                 borderRadius: '5px',
//                 margin: '0'
//               }}>
//                 {feedbackText}
//               </p>
//             )}
//           </div>
          
//           <div style={styles.chartContainer}>
//             <Line 
//               data={chartData} 
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 scales: {
//                   y: {
//                     beginAtZero: true
//                   }
//                 },
//                 plugins: {
//                   legend: {
//                     position: 'top',
//                   },
//                   tooltip: {
//                     callbacks: {
//                       label: function(context) {
//                         return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
//                       }
//                     }
//                   }
//                 }
//               }}
//               ref={chartRef}
//             />
//           </div>
          
//           <div style={styles.actionPanel}>
//             <h3 style={{margin: '0 0 15px 0'}}>Monetary Policy Actions</h3>
            
//             <div style={styles.toggleSwitch}>
//               <input 
//                 type="checkbox" 
//                 id="advancedControls" 
//                 checked={showAdvancedControls}
//                 onChange={() => setShowAdvancedControls(!showAdvancedControls)}
//               />
//               <label htmlFor="advancedControls">Show advanced rate controls</label>
//             </div>
            
//             {showAdvancedControls ? (
//               <div style={styles.rateControlSlider}>
//                 <p>Adjust interest rate by: <span style={styles.sliderValue}>{rateChangeAmount > 0 ? '+' : ''}{rateChangeAmount.toFixed(1)}%</span></p>
//                 <input 
//                   type="range" 
//                   min="-2" 
//                   max="2" 
//                   step="0.25" 
//                   value={rateChangeAmount}
//                   onChange={(e) => setRateChangeAmount(parseFloat(e.target.value))}
//                   style={styles.slider}
//                   disabled={gameOver || gameMode !== 'playing'}
//                 />
//                 <button 
//                   onClick={() => handleRateChange(rateChangeAmount)} 
//                   style={{
//                     ...styles.button,
//                     backgroundColor: rateChangeAmount > 0 ? '#dc3545' : rateChangeAmount < 0 ? '#28a745' : '#6c757d',
//                     color: 'white',
//                     width: '50%',
//                     marginTop: '10px'
//                   }}
//                   disabled={gameOver || gameMode !== 'playing'}
//                 >
//                   {rateChangeAmount > 0 ? 'Raise' : rateChangeAmount < 0 ? 'Lower' : 'Maintain'} Interest Rate
//                 </button>
//               </div>
//             ) : (
//               <div style={styles.buttonRow}>
//                 {!gameOver && gameMode === 'playing' ? (
//                   <>
//                     <button 
//                       onClick={() => handleRateChange(1.0)} 
//                       style={{...styles.button, ...styles.hikeButton}}
//                     >
//                       Significantly Raise Interest Rate (+1.0%)
//                     </button>
//                     <button 
//                       onClick={() => handleRateChange(0.5)} 
//                       style={{...styles.button, ...styles.hikeButton, backgroundColor: '#e05d6f'}}
//                     >
//                       Slightly Raise Interest Rate (+0.5%)
//                     </button>
//                     <button 
//                       onClick={() => handleRateChange(0)} 
//                       style={{...styles.button, ...styles.neutralButton}}
//                     >
//                       Hold Current Rate
//                     </button>
//                     <button 
//                       onClick={() => handleRateChange(-0.5)} 
//                       style={{...styles.button, ...styles.cutButton, backgroundColor: '#5cb85c'}}
//                     >
//                       Slightly Lower Interest Rate (-0.5%)
//                     </button>
//                     <button 
//                       onClick={() => handleRateChange(-1.0)} 
//                       style={{...styles.button, ...styles.cutButton}}
//                     >
//                       Significantly Lower Interest Rate (-1.0%)
//                     </button>
//                   </>
//                 ) : (
//                   <button 
//                     onClick={resetSimulation} 
//                     style={{...styles.button, ...styles.resetButton}}
//                   >
//                     {gameOver ? 'Start New Term' : 'Begin Simulation'}
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
          
//           <div style={styles.reflectionPanel}>
//             <h3 style={{margin: '0 0 15px 0'}}>Policy Impact Analysis</h3>
//             <p>Consider who benefits and who suffers from your policy choices:</p>
//             <ul style={{margin: '10px 0', paddingLeft: '20px'}}>
//               <li>Higher interest rates help savers but hurt borrowers and can slow hiring</li>
//               <li>Lower interest rates stimulate growth but may lead to asset bubbles that increase inequality</li>
//               <li>Price stability is important, but at what cost to employment?</li>
//             </ul>
//             <textarea 
//               rows={4}
//               placeholder="Record your thoughts on your policy decisions and their impacts..."
//               style={{
//                 width: '100%', 
//                 padding: '10px', 
//                 marginTop: '10px', 
//                 borderRadius: '5px', 
//                 border: '1px solid #dee2e6',
//                 fontFamily: 'inherit'
//               }}
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//             ></textarea>
//           </div>
//         </>
//       )}
      
//       {selectedTab === 'advanced' && (
//         <>
//           <div style={styles.statsPanel}>
//             <div style={styles.statCard}>
//               <h3 style={styles.statTitle}>Asset Bubble Risk</h3>
//               <p style={{...styles.statValue, color: assetBubble > 50 ? '#dc3545' : assetBubble > 30 ? '#ffc107' : '#28a745'}}>
//                 {assetBubble.toFixed(1)}%
//               </p>
//             </div>
//             <div style={styles.statCard}>
//               <h3 style={styles.statTitle}>Wealth Gap Index</h3>
//               <p style={{...styles.statValue, color: wealthGap > 50 ? '#dc3545' : wealthGap > 40 ? '#ffc107' : '#28a745'}}>
//                 {wealthGap.toFixed(1)}
//               </p>
//             </div>
//             <div style={styles.statCard}>
//               <h3 style={styles.statTitle}>Public Approval</h3>
//               <p style={{...styles.statValue, color: publicApproval < 30 ? '#dc3545' : publicApproval > 70 ? '#28a745' : '#ffc107'}}>
//                 {publicApproval.toFixed(1)}%
//               </p>
//             </div>
//           </div>
          
//           <div style={styles.chartContainer}>
//             <Line 
//               data={secondaryChartData} 
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 scales: {
//                   y: {
//                     beginAtZero: true
//                   }
//                 },
//                 plugins: {
//                   legend: {
//                     position: 'top',
//                   },
//                   tooltip: {
//                     callbacks: {
//                       label: function(context) {
//                         const dataset = context.dataset.label;
//                         const value = context.parsed.y.toFixed(1);
//                         return `${dataset}: ${value}${dataset.includes('%') ? '%' : ''}`;
//                       }
//                     }
//                   }
//                 }
//               }}
//             />
//           </div>
          
//           <div style={styles.gridContainer}>
//             <div style={{...styles.eventPanel, margin: 0}}>
//               <h3>Policy Transmission Effects</h3>
//               <p>Higher interest rates typically lead to:</p>
//               <ul>
//                 <li>Reduced inflation through lower aggregate demand</li>
//                 <li>Increased unemployment as businesses cut costs</li>
//                 <li>Decreased asset prices as money becomes more expensive</li>
//                 <li>Stronger currency potentially affecting exports</li>
//               </ul>
//             </div>
            
//             <div style={{...styles.eventPanel, margin: 0}}>
//               <h3>Market Expectations</h3>
//               <p>Financial markets expect:</p>
//               <ul>
//                 <li>Inflation to {inflation > 3 ? 'decrease' : inflation < 1 ? 'increase' : 'remain stable'} over next year</li>
//                 <li>Interest rates to {interestRate > 5 ? 'remain elevated' : interestRate < 1 ? 'rise gradually' : 'adjust with economic conditions'}</li>
//                 <li>Economic growth to {gdpGrowth > 3 ? 'moderate' : gdpGrowth < 1 ? 'accelerate with supportive policy' : 'continue at sustainable pace'}</li>
//               </ul>
//             </div>
//           </div>
          
//           <div style={styles.reflectionPanel}>
//             <h3>Historical Comparison</h3>
//             <p>Your policy stance compared to historical central banking responses:</p>
//             <ul>
//               <li>Interest rate: {interestRate < 1 ? 'Highly accommodative' : interestRate < 3 ? 'Accommodative' : interestRate < 6 ? 'Neutral' : interestRate < 8 ? 'Restrictive' : 'Highly restrictive'}</li>
//               <li>Response to inflation: {(interestRate - inflation) < -2 ? 'Very dovish' : (interestRate - inflation) < 0 ? 'Dovish' : (interestRate - inflation) < 2 ? 'Balanced' : 'Hawkish'}</li>
//               <li>Growth priority: {interestRate < gdpGrowth ? 'Growth prioritized over inflation control' : 'Inflation control prioritized over growth'}</li>
//             </ul>
//           </div>
//         </>
//       )}
      
//       {selectedTab === 'notes' && (
//         <div style={styles.reflectionPanel}>
//           <h3>Governor's Notes</h3>
//           <p>Use this space to record your thoughts, strategy, and reflections on your policy decisions:</p>
//           <textarea 
//             rows="15" 
//             placeholder="Record your thoughts, strategies, and observations here..."
//             style={{
//               width: '100%', 
//               padding: '15px', 
//               marginTop: '10px', 
//               borderRadius: '5px', 
//               border: '1px solid #dee2e6',
//               fontFamily: 'inherit',
//               fontSize: '16px',
//               lineHeight: '1.5'
//             }}
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//           ></textarea>
//         </div>
//       )}
      
//       {selectedTab === 'settings' && (
//         <div style={styles.reflectionPanel}>
//           <h3>Simulation Settings</h3>
          
//           <div style={{marginBottom: '20px'}}>
//             <h4>Difficulty Level</h4>
//             <div style={{display: 'flex', gap: '10px'}}>
//               <button 
//                 onClick={() => setDifficulty('easy')} 
//                 style={{
//                   ...styles.button,
//                   backgroundColor: difficulty === 'easy' ? '#28a745' : '#f8f9fa',
//                   color: difficulty === 'easy' ? 'white' : '#343a40',
//                   border: '1px solid #dee2e6'
//                 }}
//               >
//                 Easy
//               </button>
//               <button 
//                 onClick={() => setDifficulty('normal')} 
//                 style={{
//                   ...styles.button,
//                   backgroundColor: difficulty === 'normal' ? '#007bff' : '#f8f9fa',
//                   color: difficulty === 'normal' ? 'white' : '#343a40',
//                   border: '1px solid #dee2e6'
//                 }}
//               >
//                 Normal
//               </button>
//               <button 
//                 onClick={() => setDifficulty('hard')} 
//                 style={{
//                   ...styles.button,
//                   backgroundColor: difficulty === 'hard' ? '#dc3545' : '#f8f9fa',
//                   color: difficulty === 'hard' ? 'white' : '#343a40',
//                   border: '1px solid #dee2e6'
//                 }}
//               >
//                 Hard
//               </button>
//             </div>
//             <p style={{fontSize: '14px', color: '#6c757d', marginTop: '10px'}}>
//               {difficulty === 'easy' ? 'Economic indicators respond more predictably and crises are less severe.' : 
//                difficulty === 'normal' ? 'Balanced difficulty with realistic economic responses.' : 
//                'More volatile economy with frequent crises and difficult tradeoffs.'}
//             </p>
//           </div>
          
//           <div style={{marginBottom: '20px'}}>
//             <h4>Game Controls</h4>
//             <button 
//               onClick={resetSimulation} 
//               style={{...styles.button, backgroundColor: '#17a2b8', color: 'white'}}
//             >
//               Reset Simulation
//             </button>
//           </div>
          
//           <div>
//             <h4>About This Simulation</h4>
//             <p>
//               This simulation is designed to illustrate the complex tradeoffs central bankers face 
//               when setting monetary policy. It simplifies many real-world factors but demonstrates 
//               key relationships between interest rates, inflation, employment, growth, and financial 
//               stability.
//             </p>
//             <p>
//               Your goal is to maintain economic stability by balancing these competing objectives.
//               Each policy choice affects different sectors of the economy and different groups in 
//               society in complex ways.
//             </p>
//           </div>
//         </div>
//       )}
      
//       {gameOver && (
//         <div style={styles.modal}>
//           <div style={styles.modalContent}>
//             <h2 style={{color: '#dc3545'}}>Economic Crisis!</h2>
//             <p style={{fontSize: '18px'}}>{feedbackText}</p>
            
//             <div style={{marginTop: '20px'}}>
//               <h3>Final Statistics</h3>
//               <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px'}}>
//                 <div style={{flex: '1 1 200px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px'}}>
//                   <p style={{margin: '0', fontWeight: 'bold'}}>Years in Office: {year}</p>
//                 </div>
//                 <div style={{flex: '1 1 200px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px'}}>
//                   <p style={{margin: '0', fontWeight: 'bold'}}>Final Score: {score}</p>
//                 </div>
//                 <div style={{flex: '1 1 200px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px'}}>
//                   <p style={{margin: '0', fontWeight: 'bold'}}>Performance: {getScoreCategory().text}</p>
//                 </div>
//               </div>
//             </div>
            
//             <p>Your policy decisions led to:</p>
//             <ul>
//               <li>Inflation: {inflation.toFixed(1)}% {inflation > 8 ? '(Runaway inflation)' : ''}</li>
//               <li>Unemployment: {unemployment.toFixed(1)}% {unemployment > 12 ? '(Mass unemployment)' : ''}</li>
//               <li>GDP Growth: {gdpGrowth.toFixed(1)}% {gdpGrowth < -3 ? '(Severe recession)' : ''}</li>
//               <li>Asset Bubble Risk: {assetBubble.toFixed(1)}% {assetBubble > 80 ? '(Bubble burst)' : ''}</li>
//               <li>Public Approval: {publicApproval.toFixed(1)}%</li>
//             </ul>
            
//             <div style={{marginTop: '30px', textAlign: 'center'}}>
//               <button 
//                 onClick={resetSimulation} 
//                 style={{...styles.button, backgroundColor: '#17a2b8', color: 'white', padding: '15px 30px'}}
//               >
//                 Start a New Term
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CentralBankerSimulator;