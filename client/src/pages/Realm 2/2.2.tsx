// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const TimeMachineSimulator = () => {
//   const [currentYear, setCurrentYear] = useState(2025);
//   const [score, setScore] = useState(0);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [gameCompleted, setGameCompleted] = useState(false);
//   const [currentRound, setCurrentRound] = useState(0);
//   const [itemsMatched, setItemsMatched] = useState(0);
//   const [selectedHistoricalItem, setSelectedHistoricalItem] = useState(null);
//   const [coinAnimation, setCoinAnimation] = useState(false);
//   const [feedback, setFeedback] = useState('');

//   const historicalItems = [
//     // Year, Item, Historical Price, Current Price, Image URL
//     { year: 1970, name: 'Gallon of Milk', price: 1.15, currentPrice: 4.50, image: 'milk' },
//     { year: 1975, name: 'Movie Ticket', price: 2.05, currentPrice: 12.99, image: 'ticket' },
//     { year: 1980, name: 'New Car', price: 7210, currentPrice: 47000, image: 'car' },
//     { year: 1985, name: 'College Tuition (Public)', price: 1318, currentPrice: 10740, image: 'college' },
//     { year: 1990, name: 'House (Median)', price: 123900, currentPrice: 428700, image: 'house' },
//     { year: 1995, name: 'Loaf of Bread', price: 1.55, currentPrice: 3.99, image: 'bread' },
//     { year: 2000, name: 'Minimum Wage (hourly)', price: 5.15, currentPrice: 7.25, image: 'wage' },
//     { year: 2005, name: 'Gallon of Gas', price: 2.30, currentPrice: 3.95, image: 'gas' },
//   ];

//   const [rounds, setRounds] = useState([]);
  
//   // Calculate inflation percentage for visualization
//   const calculateInflation = (historicalPrice, currentPrice) => {
//     return ((currentPrice - historicalPrice) / historicalPrice * 100).toFixed(0);
//   };

//   // Initialize the game with shuffled items
//   const startGame = () => {
//     // Shuffle items and pick 5 for the game
//     const shuffled = [...historicalItems].sort(() => 0.5 - Math.random()).slice(0, 5);
//     setRounds(shuffled);
//     setCurrentRound(0);
//     setScore(0);
//     setItemsMatched(0);
//     setGameStarted(true);
//     setGameCompleted(false);
//     setFeedback('Match the historical item to its current price equivalent');
    
//     // Set the time machine to the year of the first item
//     setCurrentYear(shuffled[0].year);
//   };

//   // Move to the current time to see the current prices
//   const travelToPresent = () => {
//     setCurrentYear(2025);
//   };

//   // Travel to the historical year of the current item
//   const travelToPast = () => {
//     if (rounds.length > 0 && currentRound < rounds.length) {
//       setCurrentYear(rounds[currentRound].year);
//     }
//   };

//   const selectHistoricalItem = (item) => {
//     setSelectedHistoricalItem(item);
//     // When an item is selected, automatically travel to present
//     travelToPresent();
//   };

//   const matchWithCurrentPrice = (guessedPrice) => {
//     const currentItem = rounds[currentRound];
    
//     // Check if the guess is correct (using a tolerance for prices)
//     const isCorrect = Math.abs(guessedPrice - currentItem.currentPrice) / currentItem.currentPrice < 0.1;
    
//     if (isCorrect) {
//       setScore(score + 100);
//       setFeedback('Correct! The purchasing power has significantly changed.');
//       setCoinAnimation(true);
      
//       // Reset animation after 2 seconds
//       setTimeout(() => {
//         setCoinAnimation(false);
//       }, 2000);
//     } else {
//       setFeedback(`Not quite. The actual current price is $${currentItem.currentPrice.toFixed(2)}.`);
//     }
    
//     setItemsMatched(itemsMatched + 1);
    
//     // Move to next round after a delay
//     setTimeout(() => {
//       if (currentRound < rounds.length - 1) {
//         setCurrentRound(currentRound + 1);
//         setSelectedHistoricalItem(null);
//         travelToPast();
//       } else {
//         // Game completed
//         setGameCompleted(true);
//         setFeedback(`Game completed! Your score: ${score + (isCorrect ? 100 : 0)}/500`);
//       }
//     }, 2000);
//   };

//   // Get current options based on game state
//   const getCurrentOptions = () => {
//     if (!gameStarted || currentRound >= rounds.length) return [];
    
//     const currentItem = rounds[currentRound];
//     const correctPrice = currentItem.currentPrice;
    
//     // Generate some reasonable but incorrect options
//     let options = [
//       correctPrice,
//       correctPrice * 0.7,
//       correctPrice * 1.3,
//       correctPrice * 0.5,
//     ];
    
//     // Shuffle options
//     return options.sort(() => 0.5 - Math.random());
//   };
  
//   const formatPrice = (price) => {
//     return price >= 1000 
//       ? `$${(price/1000).toFixed(1)}k`
//       : `$${price.toFixed(2)}`;
//   };

//   return (
//     <div className="time-machine-simulator" style={{ 
//       maxWidth: '900px', 
//       margin: '0 auto', 
//       padding: '20px', 
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#f7f7f7',
//       borderRadius: '10px',
//       boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
//     }}>
//       <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Vanishing Value: The Inflation Time Machine</h1>
      
//       {!gameStarted && !gameCompleted && (
//         <div className="start-screen" style={{ textAlign: 'center', marginTop: '50px' }}>
//           <p style={{ fontSize: '18px', marginBottom: '30px' }}>
//             Travel through time to see how inflation has eroded the purchasing power of money.
//             Match historical prices with their current equivalents.
//           </p>
//           <button 
//             onClick={startGame}
//             style={{ 
//               padding: '15px 30px', 
//               fontSize: '18px', 
//               backgroundColor: '#3498db', 
//               color: 'white', 
//               border: 'none', 
//               borderRadius: '5px',
//               cursor: 'pointer'
//             }}
//           >
//             Start Time Travel
//           </button>
//         </div>
//       )}
      
//       {gameStarted && !gameCompleted && (
//         <div className="game-container">
//           <div className="time-controls" style={{ 
//             display: 'flex', 
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             backgroundColor: '#34495e',
//             padding: '15px',
//             borderRadius: '8px',
//             color: 'white',
//             marginBottom: '20px'
//           }}>
//             <h2 style={{ margin: 0 }}>Time Machine: {currentYear}</h2>
//             <div className="control-buttons">
//               <button 
//                 onClick={travelToPast}
//                 disabled={currentYear !== 2025}
//                 style={{ 
//                   padding: '8px 15px', 
//                   marginRight: '10px',
//                   backgroundColor: currentYear !== 2025 ? '#bbb' : '#e74c3c',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: currentYear !== 2025 ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Travel to Past
//               </button>
//               <button 
//                 onClick={travelToPresent}
//                 disabled={currentYear === 2025}
//                 style={{ 
//                   padding: '8px 15px',
//                   backgroundColor: currentYear === 2025 ? '#bbb' : '#2ecc71',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: currentYear === 2025 ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Travel to 2025
//               </button>
//             </div>
//           </div>
          
//           <div className="progress-bar" style={{ 
//             height: '10px', 
//             width: '100%', 
//             backgroundColor: '#ecf0f1',
//             marginBottom: '20px',
//             borderRadius: '5px',
//             overflow: 'hidden'
//           }}>
//             <div style={{ 
//               height: '100%', 
//               width: `${(itemsMatched / rounds.length) * 100}%`,
//               backgroundColor: '#3498db',
//               transition: 'width 0.5s ease-in-out'
//             }}></div>
//           </div>
          
//           <div className="feedback-message" style={{ 
//             padding: '10px', 
//             backgroundColor: '#f9f9f9', 
//             borderRadius: '5px',
//             marginBottom: '20px',
//             textAlign: 'center',
//             fontWeight: 'bold'
//           }}>
//             {feedback}
//           </div>
          
//           {currentYear !== 2025 && currentRound < rounds.length && (
//             <div className="historical-view" style={{ 
//               backgroundColor: '#f5ecd5', 
//               padding: '20px',
//               borderRadius: '8px',
//               marginBottom: '20px'
//             }}>
//               <h3>You've traveled to {currentYear}</h3>
//               <div className="historical-items" style={{ 
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 justifyContent: 'center',
//                 gap: '15px' 
//               }}>
//                 <div 
//                   className="item-card"
//                   onClick={() => selectHistoricalItem(rounds[currentRound])}
//                   style={{ 
//                     padding: '15px',
//                     backgroundColor: 'white',
//                     borderRadius: '8px',
//                     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//                     cursor: 'pointer',
//                     width: '200px',
//                     textAlign: 'center',
//                     border: '2px solid #3498db'
//                   }}
//                 >
//                   <div className="item-image" style={{ 
//                     backgroundColor: '#f0f0f0',
//                     height: '100px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginBottom: '10px',
//                     fontSize: '40px'
//                   }}>
//                     {/* This would be an image in a real implementation */}
//                     {rounds[currentRound].image === 'milk' && '🥛'}
//                     {rounds[currentRound].image === 'ticket' && '🎟️'}
//                     {rounds[currentRound].image === 'car' && '🚗'}
//                     {rounds[currentRound].image === 'college' && '🎓'}
//                     {rounds[currentRound].image === 'house' && '🏠'}
//                     {rounds[currentRound].image === 'bread' && '🍞'}
//                     {rounds[currentRound].image === 'wage' && '💵'}
//                     {rounds[currentRound].image === 'gas' && '⛽'}
//                   </div>
//                   <h4>{rounds[currentRound].name}</h4>
//                   <p>Price: ${rounds[currentRound].price.toFixed(2)}</p>
//                   <button style={{ 
//                     padding: '8px 15px',
//                     backgroundColor: '#3498db',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px',
//                     marginTop: '10px',
//                     width: '100%'
//                   }}>
//                     Select
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {currentYear === 2025 && selectedHistoricalItem && (
//             <div className="present-view" style={{ 
//               backgroundColor: '#e8f4fc', 
//               padding: '20px',
//               borderRadius: '8px',
//               position: 'relative',
//               overflow: 'hidden'
//             }}>
//               <h3>Welcome to 2025! What's the current price?</h3>
              
//               <div className="price-comparison" style={{ 
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: '30px',
//                 marginBottom: '30px'
//               }}>
//                 <div className="historical-price" style={{ 
//                   textAlign: 'center',
//                   padding: '15px',
//                   backgroundColor: '#f5ecd5',
//                   borderRadius: '8px',
//                   position: 'relative'
//                 }}>
//                   <h4>{selectedHistoricalItem.year}</h4>
//                   <div style={{ fontSize: '40px' }}>
//                     {selectedHistoricalItem.image === 'milk' && '🥛'}
//                     {selectedHistoricalItem.image === 'ticket' && '🎟️'}
//                     {selectedHistoricalItem.image === 'car' && '🚗'}
//                     {selectedHistoricalItem.image === 'college' && '🎓'}
//                     {selectedHistoricalItem.image === 'house' && '🏠'}
//                     {selectedHistoricalItem.image === 'bread' && '🍞'}
//                     {selectedHistoricalItem.image === 'wage' && '💵'}
//                     {selectedHistoricalItem.image === 'gas' && '⛽'}
//                   </div>
//                   <p>{selectedHistoricalItem.name}</p>
//                   <p>${selectedHistoricalItem.price.toFixed(2)}</p>
                  
//                   <AnimatePresence>
//                     {coinAnimation && (
//                       <motion.div
//                         style={{
//                           position: 'absolute',
//                           top: 0,
//                           left: 0,
//                           width: '100%',
//                           height: '100%',
//                           backgroundColor: 'rgba(255, 0, 0, 0.2)',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           fontSize: '24px',
//                           fontWeight: 'bold',
//                         }}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                       >
//                         <motion.div
//                           style={{
//                             fontSize: '40px',
//                           }}
//                           initial={{ scale: 1, opacity: 1 }}
//                           animate={{ 
//                             scale: [1, 0.8, 0.6, 0.4, 0.2, 0],
//                             opacity: [1, 0.8, 0.6, 0.4, 0.2, 0],
//                             rotate: [0, 180, 360]
//                           }}
//                           transition={{ duration: 2 }}
//                         >
//                           💰
//                         </motion.div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
                
//                 <div className="arrow" style={{ fontSize: '30px' }}>➡️</div>
                
//                 <div className="current-price" style={{ 
//                   textAlign: 'center',
//                   padding: '15px',
//                   backgroundColor: '#e8f4fc',
//                   borderRadius: '8px'
//                 }}>
//                   <h4>2025</h4>
//                   <div style={{ fontSize: '40px' }}>
//                     {selectedHistoricalItem.image === 'milk' && '🥛'}
//                     {selectedHistoricalItem.image === 'ticket' && '🎟️'}
//                     {selectedHistoricalItem.image === 'car' && '🚗'}
//                     {selectedHistoricalItem.image === 'college' && '🎓'}
//                     {selectedHistoricalItem.image === 'house' && '🏠'}
//                     {selectedHistoricalItem.image === 'bread' && '🍞'}
//                     {selectedHistoricalItem.image === 'wage' && '💵'}
//                     {selectedHistoricalItem.image === 'gas' && '⛽'}
//                   </div>
//                   <p>{selectedHistoricalItem.name}</p>
//                   <p>? ? ?</p>
//                 </div>
//               </div>
              
//               <div className="price-options" style={{ 
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 justifyContent: 'center',
//                 gap: '15px',
//                 marginBottom: '20px'
//               }}>
//                 {getCurrentOptions().map((price, index) => (
//                   <button 
//                     key={index}
//                     onClick={() => matchWithCurrentPrice(price)}
//                     style={{ 
//                       padding: '10px 20px',
//                       fontSize: '16px',
//                       backgroundColor: '#2980b9',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '5px',
//                       cursor: 'pointer',
//                       minWidth: '120px'
//                     }}
//                   >
//                     {formatPrice(price)}
//                   </button>
//                 ))}
//               </div>
              
//               <div className="inflation-info" style={{ 
//                 textAlign: 'center',
//                 padding: '10px',
//                 backgroundColor: '#f9f9f9',
//                 borderRadius: '5px'
//               }}>
//                 <p>Purchasing power lost to inflation: {calculateInflation(selectedHistoricalItem.price, selectedHistoricalItem.currentPrice)}%</p>
//               </div>
//             </div>
//           )}
          
//           <div className="score-display" style={{ 
//             textAlign: 'center',
//             padding: '10px',
//             backgroundColor: '#2c3e50',
//             color: 'white',
//             borderRadius: '5px'
//           }}>
//             <h3>Score: {score}</h3>
//           </div>
//         </div>
//       )}
      
//       {gameCompleted && (
//         <div className="completion-screen" style={{ 
//           textAlign: 'center',
//           marginTop: '30px'
//         }}>
//           <h2 style={{ color: '#2c3e50' }}>Time Travel Complete!</h2>
//           <p style={{ fontSize: '18px', marginBottom: '20px' }}>
//             You've witnessed how inflation erodes purchasing power over time.
//           </p>
//           <p style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '30px' }}>
//             Final Score: {score}/500
//           </p>
          
//           <div className="reflection-question" style={{ 
//             backgroundColor: '#f9f9f9',
//             padding: '20px',
//             borderRadius: '8px',
//             marginBottom: '30px',
//             textAlign: 'left'
//           }}>
//             <h3>Reflection Question:</h3>
//             <p>If your money loses value over time, how does this change your savings strategy?</p>
//             <textarea 
//               rows="4" 
//               placeholder="Enter your thoughts here..."
//               style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
//             ></textarea>
//           </div>
          
//           <button 
//             onClick={startGame}
//             style={{ 
//               padding: '15px 30px', 
//               fontSize: '18px', 
//               backgroundColor: '#3498db', 
//               color: 'white', 
//               border: 'none', 
//               borderRadius: '5px',
//               cursor: 'pointer'
//             }}
//           >
//             Travel Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TimeMachineSimulator;