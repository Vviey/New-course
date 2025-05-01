// import React, { useState, useEffect } from 'react';

// const PaymentPrivacySimulator = () => {
//   const [currentScenario, setCurrentScenario] = useState(0);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
//   const [heatmapVisible, setHeatmapVisible] = useState(false);
//   const [scenarioCompleted, setScenarioCompleted] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const [privacyScore, setPrivacyScore] = useState(0);
//   const [completedScenarios, setCompletedScenarios] = useState([]);
//   const [allScenariosCompleted, setAllScenariosCompleted] = useState(false);

//   const paymentMethods = [
//     {
//       id: 'credit_card',
//       name: 'Credit Card',
//       icon: '💳',
//       dataExposed: {
//         bank: 100,
//         merchant: 80,
//         government: 90,
//         adNetworks: 70,
//         databrokers: 60,
//       },
//       description: 'Traditional payment card issued by banks',
//       privacyRating: 1
//     },
//     {
//       id: 'bank_transfer',
//       name: 'Bank Transfer',
//       icon: '🏦',
//       dataExposed: {
//         bank: 100,
//         merchant: 70,
//         government: 90,
//         adNetworks: 30,
//         databrokers: 40,
//       },
//       description: 'Direct bank-to-bank money transfer',
//       privacyRating: 2
//     },
//     {
//       id: 'mobile_money',
//       name: 'Mobile Money',
//       icon: '📱',
//       dataExposed: {
//         bank: 90,
//         merchant: 80,
//         government: 90,
//         adNetworks: 80,
//         databrokers: 70,
//       },
//       description: 'Phone-based money transfer service',
//       privacyRating: 1
//     },
//     {
//       id: 'bitcoin_onchain',
//       name: 'Bitcoin (On-chain)',
//       icon: '₿',
//       dataExposed: {
//         bank: 20,
//         merchant: 50,
//         government: 60,
//         adNetworks: 10,
//         databrokers: 40,
//       },
//       description: 'Public blockchain cryptocurrency transaction',
//       privacyRating: 3
//     },
//     {
//       id: 'lightning_network',
//       name: 'Lightning Network',
//       icon: '⚡',
//       dataExposed: {
//         bank: 10,
//         merchant: 30,
//         government: 40,
//         adNetworks: 0,
//         databrokers: 20,
//       },
//       description: 'Bitcoin Layer 2 payment channel',
//       privacyRating: 4
//     },
//     {
//       id: 'cash',
//       name: 'Cash',
//       icon: '💵',
//       dataExposed: {
//         bank: 0,
//         merchant: 20,
//         government: 30,
//         adNetworks: 0,
//         databrokers: 10,
//       },
//       description: 'Physical paper currency',
//       privacyRating: 5
//     }
//   ];

//   const scenarios = [
//     {
//       id: 'groceries',
//       title: 'Buying Groceries',
//       description: 'You need to buy weekly groceries including medicine and food items',
//       question: 'Which payment method would ensure your purchasing habits are not tracked?',
//       stakeholders: ['Merchant', 'Ad Networks', 'Data Brokers'],
//       riskLevel: 'Medium',
//       riskDescription: 'Your purchasing habits can be used to create a profile that reveals health conditions, dietary preferences, and lifestyle choices'
//     },
//     {
//       id: 'political_donation',
//       title: 'Political Donation',
//       description: 'You want to donate to a political cause you believe in',
//       question: 'Which payment method would best protect your political affiliations?',
//       stakeholders: ['Government', 'Employers', 'Data Brokers'],
//       riskLevel: 'High',
//       riskDescription: 'Your political affiliations could affect job opportunities, social standing, or make you a target in politically volatile environments'
//     },
//     {
//       id: 'international_transfer',
//       title: 'International Money Transfer',
//       description: 'You need to send money to family in another country',
//       question: 'Which payment method would ensure low fees and privacy?',
//       stakeholders: ['Banks', 'Government', 'Surveillance Systems'],
//       riskLevel: 'High',
//       riskDescription: 'International transfers are heavily monitored, may be blocked, and often come with high fees'
//     },
//     {
//       id: 'online_purchase',
//       title: 'Online Purchase',
//       description: 'You want to buy a gift online without targeted ads following you',
//       question: 'Which payment method would minimize data collection for advertising?',
//       stakeholders: ['Merchant', 'Ad Networks', 'Data Brokers'],
//       riskLevel: 'Medium',
//       riskDescription: 'Online purchases create extensive data trails that feed into advertising systems and may reveal personal preferences'
//     },
//   ];

//   useEffect(() => {
//     if (completedScenarios.length === scenarios.length) {
//       setAllScenariosCompleted(true);
//     }
//   }, [completedScenarios, scenarios.length]);

//   const selectPaymentMethod = (method) => {
//     setSelectedPaymentMethod(method);
//     setHeatmapVisible(true);
//   };

//   const completeScenario = () => {
//     if (selectedPaymentMethod) {
//       // Add to privacy score based on the selected method's privacy rating
//       setPrivacyScore(prevScore => prevScore + selectedPaymentMethod.privacyRating);
      
//       // Mark this scenario as completed
//       setCompletedScenarios([...completedScenarios, scenarios[currentScenario].id]);
      
//       setScenarioCompleted(true);
//       setShowResults(true);
//     }
//   };

//   const nextScenario = () => {
//     if (currentScenario < scenarios.length - 1) {
//       setCurrentScenario(currentScenario + 1);
//       resetScenario();
//     } else {
//       setAllScenariosCompleted(true);
//     }
//   };

//   const resetScenario = () => {
//     setSelectedPaymentMethod(null);
//     setHeatmapVisible(false);
//     setScenarioCompleted(false);
//     setShowResults(false);
//   };

//   const restartSimulation = () => {
//     setCurrentScenario(0);
//     setSelectedPaymentMethod(null);
//     setHeatmapVisible(false);
//     setScenarioCompleted(false);
//     setShowResults(false);
//     setPrivacyScore(0);
//     setCompletedScenarios([]);
//     setAllScenariosCompleted(false);
//   };

//   const getHeatmapColor = (value) => {
//     // Red gradient based on data exposure level
//     const r = Math.floor(255 * (value / 100));
//     const g = Math.floor(255 * (1 - value / 100));
//     const b = 0;
//     return `rgb(${r}, ${g}, ${b})`;
//   };

//   const getPrivacyRating = () => {
//     const maxPossibleScore = scenarios.length * 5; // 5 is the highest privacy rating
//     const percentage = (privacyScore / maxPossibleScore) * 100;
    
//     if (percentage >= 80) return { rating: 'Excellent', description: 'You prioritize privacy in your payment choices!' };
//     if (percentage >= 60) return { rating: 'Good', description: 'You make some privacy-conscious decisions.' };
//     if (percentage >= 40) return { rating: 'Average', description: 'Your privacy could be improved with better payment choices.' };
//     if (percentage >= 20) return { rating: 'Poor', description: 'Your payment choices expose a lot of personal data.' };
//     return { rating: 'Very Poor', description: 'Your payment choices provide almost no privacy protection.' };
//   };

//   const currentScenarioData = scenarios[currentScenario];

//   return (
//     <div className="payment-privacy-simulator" style={{ 
//       maxWidth: '1000px', 
//       margin: '0 auto', 
//       padding: '20px', 
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '10px',
//       boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
//     }}>
//       <h1 style={{ textAlign: 'center', color: '#343a40' }}>Payment Privacy Simulator</h1>
//       <div className="progress-bar" style={{ 
//         height: '10px', 
//         backgroundColor: '#e9ecef', 
//         borderRadius: '5px', 
//         margin: '20px 0', 
//         overflow: 'hidden' 
//       }}>
//         <div style={{ 
//           height: '100%', 
//           width: `${(completedScenarios.length / scenarios.length) * 100}%`,
//           backgroundColor: '#4263eb',
//           transition: 'width 0.5s ease-in-out'
//         }}></div>
//       </div>
      
//       {!allScenariosCompleted ? (
//         <div className="scenario-container">
//           <div className="scenario-header" style={{ 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center',
//             backgroundColor: '#4263eb',
//             color: 'white',
//             padding: '15px',
//             borderRadius: '8px',
//             marginBottom: '20px'
//           }}>
//             <h2 style={{ margin: 0 }}>Scenario {currentScenario + 1}: {currentScenarioData.title}</h2>
//             <div className="risk-badge" style={{ 
//               backgroundColor: currentScenarioData.riskLevel === 'High' ? '#e03131' : '#fd7e14',
//               padding: '5px 10px',
//               borderRadius: '5px',
//               fontSize: '14px',
//               fontWeight: 'bold'
//             }}>
//               {currentScenarioData.riskLevel} Risk
//             </div>
//           </div>
          
//           <div className="scenario-details" style={{ 
//             backgroundColor: 'white', 
//             padding: '20px', 
//             borderRadius: '8px',
//             marginBottom: '20px'
//           }}>
//             <p style={{ fontSize: '18px', marginBottom: '15px' }}>{currentScenarioData.description}</p>
//             <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>{currentScenarioData.question}</p>
            
//             <div className="stakeholders" style={{ marginBottom: '15px' }}>
//               <h4 style={{ marginBottom: '5px' }}>Key Stakeholders Who May Access Your Data:</h4>
//               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                 {currentScenarioData.stakeholders.map((stakeholder, index) => (
//                   <span key={index} style={{ 
//                     backgroundColor: '#e9ecef',
//                     padding: '5px 10px',
//                     borderRadius: '15px',
//                     fontSize: '14px'
//                   }}>
//                     {stakeholder}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <div className="risk-description" style={{ 
//               backgroundColor: '#fff9db', 
//               padding: '10px', 
//               borderRadius: '5px', 
//               borderLeft: '4px solid #fd7e14',
//               marginBottom: '15px'
//             }}>
//               <p style={{ margin: 0 }}><strong>Privacy Risk:</strong> {currentScenarioData.riskDescription}</p>
//             </div>
//           </div>
          
//           {!scenarioCompleted ? (
//             <>
//               <h3 style={{ marginBottom: '15px' }}>Select a Payment Method:</h3>
//               <div className="payment-methods" style={{ 
//                 display: 'grid', 
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
//                 gap: '15px',
//                 marginBottom: '30px'
//               }}>
//                 {paymentMethods.map(method => (
//                   <div 
//                     key={method.id}
//                     className={`payment-method ${selectedPaymentMethod?.id === method.id ? 'selected' : ''}`}
//                     onClick={() => selectPaymentMethod(method)}
//                     style={{ 
//                       padding: '15px', 
//                       backgroundColor: selectedPaymentMethod?.id === method.id ? '#e7f5ff' : 'white', 
//                       borderRadius: '8px',
//                       border: selectedPaymentMethod?.id === method.id ? '2px solid #4263eb' : '1px solid #dee2e6',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s ease-in-out'
//                     }}
//                   >
//                     <div style={{ fontSize: '30px', marginBottom: '10px' }}>{method.icon}</div>
//                     <h4 style={{ margin: '0 0 5px 0' }}>{method.name}</h4>
//                     <p style={{ margin: 0, fontSize: '14px', color: '#6c757d' }}>{method.description}</p>
//                   </div>
//                 ))}
//               </div>
              
//               {heatmapVisible && selectedPaymentMethod && (
//                 <div className="data-exposure-heatmap" style={{ 
//                   backgroundColor: 'white',
//                   padding: '20px',
//                   borderRadius: '8px',
//                   marginBottom: '20px'
//                 }}>
//                   <h3 style={{ marginBottom: '15px' }}>Data Exposure Heatmap</h3>
//                   <p style={{ marginBottom: '15px' }}>
//                     See how much data is exposed to different entities when using {selectedPaymentMethod.name}:
//                   </p>
                  
//                   <div className="heatmap-grid" style={{ marginBottom: '20px' }}>
//                     {Object.entries(selectedPaymentMethod.dataExposed).map(([entity, value]) => (
//                       <div key={entity} style={{ 
//                         display: 'flex', 
//                         alignItems: 'center',
//                         marginBottom: '10px'
//                       }}>
//                         <div style={{ width: '150px', fontWeight: 'bold', textTransform: 'capitalize' }}>
//                           {entity.replace('_', ' ')}:
//                         </div>
//                         <div style={{ 
//                           flex: 1,
//                           height: '30px',
//                           backgroundColor: '#f1f3f5',
//                           borderRadius: '5px',
//                           overflow: 'hidden',
//                           position: 'relative'
//                         }}>
//                           <div style={{ 
//                             width: `${value}%`,
//                             height: '100%',
//                             backgroundColor: getHeatmapColor(value),
//                             transition: 'width 0.5s ease-in-out'
//                           }}></div>
//                           <div style={{ 
//                             position: 'absolute',
//                             top: '50%',
//                             left: '50%',
//                             transform: 'translate(-50%, -50%)',
//                             color: value > 50 ? 'white' : 'black',
//                             fontWeight: 'bold'
//                           }}>
//                             {value}%
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="heatmap-legend" style={{ 
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '10px',
//                     marginBottom: '20px'
//                   }}>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '20px', height: '20px', backgroundColor: 'rgb(0, 255, 0)', marginRight: '5px' }}></div>
//                       <span>Low Exposure</span>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '20px', height: '20px', backgroundColor: 'rgb(255, 255, 0)', marginRight: '5px' }}></div>
//                       <span>Medium Exposure</span>
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '20px', height: '20px', backgroundColor: 'rgb(255, 0, 0)', marginRight: '5px' }}></div>
//                       <span>High Exposure</span>
//                     </div>
//                   </div>
                  
//                   <div style={{ textAlign: 'center' }}>
//                     <button 
//                       onClick={completeScenario}
//                       style={{ 
//                         padding: '12px 25px',
//                         backgroundColor: '#4263eb',
//                         color: 'white',
//                         border: 'none',
//                         borderRadius: '5px',
//                         fontSize: '16px',
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Confirm Selection
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className="results-panel" style={{ 
//               backgroundColor: 'white',
//               padding: '20px',
//               borderRadius: '8px',
//               marginBottom: '20px'
//             }}>
//               <h3 style={{ marginBottom: '15px', color: '#4263eb' }}>Results</h3>
              
//               <div className="selected-method" style={{ 
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '15px',
//                 backgroundColor: '#e7f5ff',
//                 padding: '15px',
//                 borderRadius: '8px',
//                 marginBottom: '20px'
//               }}>
//                 <div style={{ fontSize: '40px' }}>{selectedPaymentMethod.icon}</div>
//                 <div>
//                   <h4 style={{ margin: '0 0 5px 0' }}>You selected: {selectedPaymentMethod.name}</h4>
//                   <p style={{ margin: 0, color: '#495057' }}>Privacy Rating: {Array(selectedPaymentMethod.privacyRating).fill('🔒').join('')}</p>
//                 </div>
//               </div>
              
//               <div className="privacy-implications" style={{ 
//                 backgroundColor: '#f8f9fa',
//                 padding: '15px',
//                 borderRadius: '8px',
//                 marginBottom: '20px'
//               }}>
//                 <h4 style={{ marginBottom: '10px' }}>Privacy Implications</h4>
//                 <ul style={{ paddingLeft: '20px' }}>
//                   {selectedPaymentMethod.privacyRating >= 4 && (
//                     <li>Excellent choice for privacy! Very limited data exposure.</li>
//                   )}
//                   {selectedPaymentMethod.privacyRating === 3 && (
//                     <li>Good privacy choice, though some transaction details may still be visible.</li>
//                   )}
//                   {selectedPaymentMethod.privacyRating === 2 && (
//                     <li>Moderate privacy - your data is visible to several parties.</li>
//                   )}
//                   {selectedPaymentMethod.privacyRating <= 1 && (
//                     <>
//                       <li>High data exposure - almost all transaction details are tracked.</li>
//                       <li>Your purchasing patterns may be used for profiling.</li>
//                       <li>Consider more private alternatives for sensitive transactions.</li>
//                     </>
//                   )}
//                 </ul>
//               </div>
              
//               <div style={{ textAlign: 'center' }}>
//                 <button 
//                   onClick={nextScenario}
//                   style={{ 
//                     padding: '12px 25px',
//                     backgroundColor: '#4263eb',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px',
//                     fontSize: '16px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Next Scenario
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="completion-screen" style={{ 
//           backgroundColor: 'white',
//           padding: '30px',
//           borderRadius: '8px',
//           textAlign: 'center'
//         }}>
//           <h2 style={{ color: '#4263eb', marginBottom: '20px' }}>Simulation Complete!</h2>
          
//           <div style={{ fontSize: '60px', marginBottom: '20px' }}>🔒</div>
          
//           <div className="final-score" style={{ 
//             backgroundColor: '#e7f5ff',
//             padding: '20px',
//             borderRadius: '8px',
//             marginBottom: '30px',
//             display: 'inline-block',
//             minWidth: '300px'
//           }}>
//             <h3 style={{ marginBottom: '10px' }}>Your Privacy Rating</h3>
//             <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>
//               {getPrivacyRating().rating}
//             </p>
//             <p style={{ margin: 0 }}>{getPrivacyRating().description}</p>
//           </div>
          
//           <div className="privacy-insights" style={{ 
//             backgroundColor: '#f8f9fa',
//             padding: '20px',
//             borderRadius: '8px',
//             marginBottom: '30px',
//             textAlign: 'left'
//           }}>
//             <h3 style={{ marginBottom: '15px' }}>Key Privacy Insights</h3>
//             <ul style={{ paddingLeft: '20px' }}>
//               <li style={{ marginBottom: '10px' }}>Traditional payment systems (credit cards, bank transfers) expose your data to numerous third parties.</li>
//               <li style={{ marginBottom: '10px' }}>Mobile payment apps often have the worst privacy due to additional data collection for advertising.</li>
//               <li style={{ marginBottom: '10px' }}>Cash remains one of the most private payment methods but is limited to in-person transactions.</li>
//               <li style={{ marginBottom: '10px' }}>Bitcoin and Lightning Network can offer greater privacy for certain types of transactions when used correctly.</li>
//               <li>The privacy impact of your payment choice depends greatly on the context and sensitivity of your transaction.</li>
//             </ul>
//           </div>
          
//           <div className="reflection-question" style={{ 
//             backgroundColor: '#fff9db',
//             padding: '20px',
//             borderRadius: '8px',
//             marginBottom: '30px',
//             textAlign: 'left'
//           }}>
//             <h3 style={{ marginBottom: '10px' }}>Reflection Question</h3>
//             <p style={{ marginBottom: '15px' }}>What aspects of your life could be monitored through your payment history?</p>
//             <textarea 
//               rows="4" 
//               placeholder="Enter your thoughts here..."
//               style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #dee2e6' }}
//             ></textarea>
//           </div>
          
//           <button 
//             onClick={restartSimulation}
//             style={{ 
//               padding: '12px 25px',
//               backgroundColor: '#4263eb',
//               color: 'white',
//               border: 'none',
//               borderRadius: '5px',
//               fontSize: '16px',
//               cursor: 'pointer'
//             }}
//           >
//             Restart Simulation
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPrivacySimulator;