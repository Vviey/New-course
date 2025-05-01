// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [currentMission, setCurrentMission] = useState(0);
//   const [currentStep, setCurrentStep] = useState('content'); // content, challenge, quiz, or complete
//   const [playerXP, setPlayerXP] = useState(0);
//   const [badges, setBadges] = useState([]);
//   const [loreFragments, setLoreFragments] = useState([]);
//   const [cipherInput, setCipherInput] = useState('');
//   const [quizAnswers, setQuizAnswers] = useState({});
//   const [showForestTransformation, setShowForestTransformation] = useState(false);
//   const [seedWords, setSeedWords] = useState([]);
//   const [originalSeedOrder, setOriginalSeedOrder] = useState([]);
//   const [riddleAnswers, setRiddleAnswers] = useState(['', '', '']);
//   const [phishingOwlActive, setPhishingOwlActive] = useState(false);
//   const [owlAttempts, setOwlAttempts] = useState(0);

//   const missions = [
//     {
//       id: 1,
//       title: "The Spark of Satoshi",
//       goal: "Ignite the \"Flame of Decentralization\" by learning Bitcoin's origin.",
//       content: {
//         title: "Interactive Timeline",
//         description: "The 2008 financial crisis led to a revolutionary idea. Satoshi Nakamoto published a whitepaper that would change the world.",
//         companionMessage: "Satoshi's spark was a protest--a way to rebuild trust without kings or corporations."
//       },
//       challenge: {
//         title: "Cipher of Revolution",
//         description: "Decrypt Satoshi's whitepaper snippets using the substitution cipher.",
//         task: "Decode: 'B31k5 = 🔒' should become 'N0d35 = 🌐'",
//         solution: "Nodes = 🌐"
//       },
//       quiz: [
//         {
//           question: "Why was Bitcoin created?",
//           options: [
//             "To make programmers rich",
//             "To remove financial intermediaries",
//             "To help banks improve security",
//             "To create new government currencies"
//           ],
//           answer: 1
//         },
//         {
//           question: "What year did Satoshi publish the whitepaper?",
//           options: ["2007", "2008", "2009", "2010"],
//           answer: 1
//         }
//       ],
//       rewards: {
//         xp: 50,
//         badge: "Whitepaper Scholar"
//       }
//     },
//     {
//       id: 2,
//       title: "The Genesis Block",
//       goal: "Unearth the hidden message in Bitcoin's first block.",
//       content: {
//         title: "3D Block Exploration",
//         description: "The Genesis Block contains more than just code. It holds a message - a timestamp that forever links Bitcoin to the financial crisis that spawned it.",
//         companionMessage: "Touch the glowing cracks to reveal the secrets hidden within."
//       },
//       challenge: {
//         title: "Time Capsule Decryption",
//         description: "Reassemble the fragmented newspaper clippings to reveal the headline.",
//         task: "Arrange the fragments in the correct order.",
//         fragments: ["second", "Chancellor", "on", "brink", "of", "bailout", "for", "banks"],
//         solution: "Chancellor on brink of second bailout for banks"
//       },
//       quiz: [
//         {
//           question: "What headline is embedded in the Genesis Block?",
//           options: [
//             "Bitcoin launches revolutionary currency",
//             "Digital gold created by anonymous programmer",
//             "The Times, Jan 3, 2009",
//             "Central banks lose control of money"
//           ],
//           answer: 2
//         },
//         {
//           question: "What does the Genesis Block symbolize?",
//           options: [
//             "The beginning of blockchain technology",
//             "Rebellion against centralized systems",
//             "The first Bitcoin transaction",
//             "The creation of digital scarcity"
//           ],
//           answer: 1
//         }
//       ],
//       rewards: {
//         xp: 75,
//         badge: "Genesis Guardian"
//       }
//     },
//     {
//       id: 3,
//       title: "What Makes Bitcoin Different?",
//       goal: "Strengthen the forest's \"Roots of Decentralization.\"",
//       content: {
//         title: "Bank Ledgers vs. Blockchain",
//         description: "Traditional banks maintain a single ledger controlled by one entity. Bitcoin's blockchain is maintained by thousands of nodes worldwide.",
//         companionMessage: "Notice how centralized systems have single points of failure, while decentralized networks remain resilient."
//       },
//       challenge: {
//         title: "Trust Maze",
//         description: "Navigate the maze with two paths: Red (Banks) and Blue (Blockchain).",
//         task: "The Red Path is faster but may collapse. The Blue Path is slower but more reliable.",
//         solution: "blue" // Player should choose the blue path
//       },
//       quiz: [
//         {
//           question: "What replaces banks in Bitcoin's system?",
//           options: [
//             "A network of nodes",
//             "Government regulators",
//             "Mining companies",
//             "Software developers"
//           ],
//           answer: 0
//         },
//         {
//           question: "What is proof-of-work?",
//           options: [
//             "A job application for miners",
//             "A consensus mechanism to validate transactions",
//             "A digital signature",
//             "A type of cryptocurrency"
//           ],
//           answer: 1
//         }
//       ],
//       rewards: {
//         xp: 100,
//         badge: "Decentralized Defender"
//       }
//     },
//     {
//       id: 4,
//       title: "Private Keys & Digital Sovereignty",
//       goal: "Grow a \"Wallet Grove\" by securing seeds (private keys).",
//       content: {
//         title: "The Key to Your Kingdom",
//         description: "A private key is like the deed to your digital land. If lost, that land is forever abandoned.",
//         companionMessage: "Your keys = Your coins. Lose them, and the forest forgets."
//       },
//       challenge: {
//         title: "Seed Phrase Scramble",
//         description: "Reorder the 12 seed words while avoiding phishing owls.",
//         task: "Drag and drop the words in the correct sequence.",
//         seedWords: ["abandon", "ability", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account"],
//         maxAttempts: 3
//       },
//       quiz: [
//         {
//           question: "What happens if you lose your private key?",
//           options: [
//             "You can request a new one from Bitcoin support",
//             "Your Bitcoin is lost forever",
//             "The blockchain will recover it automatically",
//             "Your wallet provider can reset it"
//           ],
//           answer: 1
//         },
//         {
//           question: "True/False: Banks can freeze your Bitcoin.",
//           options: ["True", "False (if self-custodied)"],
//           answer: 1
//         }
//       ],
//       rewards: {
//         xp: 150,
//         badge: "Key Guardian"
//       }
//     },
//     {
//       id: 5,
//       title: "Final Boss Quiz -- Bitcoin's Birthright",
//       goal: "Defeat the \"Centralization Shadow\" by proving mastery.",
//       content: {
//         title: "Face Your Final Challenge",
//         description: "The Centralization Shadow looms before you, threatening to engulf the forest in darkness.",
//         companionMessage: "Your knowledge is your weapon. Use it wisely to restore light to the forest."
//       },
//       challenge: {
//         title: "Tree of Consensus Riddles",
//         description: "Answer the three riddles posed by the ancient tree with glowing red eyes.",
//         riddles: [
//           "I am a ledger all can read, but no one owns. What am I?",
//           "Born in crisis, I carry a headline. What am I?",
//           "I am 12 words that hold your treasure. What am I?"
//         ],
//         answers: ["Blockchain", "Genesis Block", "Seed phrase"]
//       },
//       rewards: {
//         xp: 200,
//         badge: "Sovereignty Spark"
//       }
//     }
//   ];

//   useEffect(() => {
//     if (currentMission === 4 && currentStep === 'challenge') {
//       const originalOrder = [...missions[3].challenge.seedWords];
//       setOriginalSeedOrder(originalOrder);
      
//       // Shuffle the seed words for the challenge
//       const shuffled = [...originalOrder].sort(() => Math.random() - 0.5);
//       setSeedWords(shuffled);
//     }
//   }, [currentMission, currentStep]);

//   const handleCipherSubmit = (e) => {
//     e.preventDefault();
//     if (cipherInput.toLowerCase() === missions[0].challenge.solution.toLowerCase()) {
//       setCurrentStep('quiz');
//     } else {
//       alert("That's not quite right. Try again!");
//     }
//   };

//   const handleFragmentAssembly = (assembled) => {
//     if (assembled.join(' ').toLowerCase() === missions[1].challenge.solution.toLowerCase()) {
//       setCurrentStep('quiz');
//     } else {
//       alert("The headline doesn't look right. Try rearranging the fragments.");
//     }
//   };

//   const handleMazeChoice = (path) => {
//     if (path === missions[2].challenge.solution) {
//       setCurrentStep('quiz');
//     } else {
//       alert("The path collapsed! Try the other route.");
//     }
//   };

//   const handleSeedPhraseReorder = (orderedWords) => {
//     // Check if the words are in the original order
//     const isCorrect = orderedWords.every((word, index) => word === originalSeedOrder[index]);
    
//     if (phishingOwlActive) {
//       setOwlAttempts(owlAttempts + 1);
//       if (owlAttempts >= 2) {
//         // Reset the challenge after 3 failed attempts
//         alert("The phishing owl stole your seed! Starting over...");
//         setOwlAttempts(0);
//         const shuffled = [...originalSeedOrder].sort(() => Math.random() - 0.5);
//         setSeedWords(shuffled);
//       } else {
//         alert("A phishing owl appeared and scrambled your words!");
//         const shuffled = [...orderedWords].sort(() => Math.random() - 0.5);
//         setSeedWords(shuffled);
//       }
//       setPhishingOwlActive(false);
//       return;
//     }

//     if (isCorrect) {
//       setCurrentStep('quiz');
//     } else {
//       alert("That doesn't look right. Try rearranging the words.");
//     }
//   };

//   const handleRiddleSubmit = (e) => {
//     e.preventDefault();
//     const correct = riddleAnswers.every((answer, index) => 
//       answer.toLowerCase() === missions[4].challenge.answers[index].toLowerCase()
//     );
    
//     if (correct) {
//       setCurrentStep('complete');
//       setShowForestTransformation(true);
//     } else {
//       alert("Not all answers are correct. The ancient tree rumbles in disapproval.");
//     }
//   };

//   const handleRiddleChange = (index, value) => {
//     const newAnswers = [...riddleAnswers];
//     newAnswers[index] = value;
//     setRiddleAnswers(newAnswers);
//   };

//   const handleQuizSubmit = (answers) => {
//     const currentQuiz = missions[currentMission].quiz;
//     const allCorrect = Object.entries(answers).every(
//       ([questionIndex, selectedAnswer]) => 
//         selectedAnswer === currentQuiz[questionIndex].answer
//     );
    
//     if (allCorrect) {
//       // Award XP and badge
//       setPlayerXP(playerXP + missions[currentMission].rewards.xp);
//       setBadges([...badges, missions[currentMission].rewards.badge]);
      
//       // Move to next mission or complete
//       if (currentMission < missions.length - 1) {
//         setCurrentMission(currentMission + 1);
//         setCurrentStep('content');
//       } else {
//         setCurrentStep('complete');
//       }
//     } else {
//       alert("Some answers are incorrect. Review the material and try again.");
//     }
//   };

//   const handleQuizAnswer = (questionIndex, optionIndex) => {
//     setQuizAnswers({
//       ...quizAnswers,
//       [questionIndex]: optionIndex
//     });
//   };

//   const progressToChallenge = () => {
//     setCurrentStep('challenge');
//   };

//   const randomlyActivatePhishingOwl = () => {
//     // 20% chance of owl appearing
//     if (Math.random() < 0.2) {
//       setPhishingOwlActive(true);
//     }
//   };

//   const renderContent = () => {
//     const mission = missions[currentMission];
//     return (
//       <div className="content-section">
//         <h2>{mission.content.title}</h2>
//         <div className="content-animation">
//           {currentMission === 0 && (
//             <div className="timeline-animation">
//               <div className="financial-crisis-scene">
//                 <div className="building bank-building"></div>
//                 <div className="building corporate-building"></div>
//                 <div className="whitepaper">
//                   <div className="whitepaper-glow"></div>
//                 </div>
//                 <div className="fireflies">
//                   {Array(15).fill().map((_, i) => (
//                     <div key={i} className="firefly" style={{
//                       left: `${Math.random() * 100}%`,
//                       top: `${Math.random() * 100}%`,
//                       animationDelay: `${Math.random() * 5}s`
//                     }}></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {currentMission === 1 && (
//             <div className="genesis-block-animation">
//               <div className="genesis-block">
//                 <div className="block-face front"></div>
//                 <div className="block-face back"></div>
//                 <div className="block-face left"></div>
//                 <div className="block-face right"></div>
//                 <div className="block-face top"></div>
//                 <div className="block-face bottom"></div>
//                 {Array(5).fill().map((_, i) => (
//                   <div key={i} className="block-crack" style={{
//                     left: `${20 + Math.random() * 60}%`,
//                     top: `${20 + Math.random() * 60}%`,
//                     transform: `rotate(${Math.random() * 360}deg)`
//                   }}></div>
//                 ))}
//               </div>
//             </div>
//           )}
          
//           {currentMission === 2 && (
//             <div className="comparison-animation">
//               <div className="comparison-stage">
//                 <div className="bank-tree-container">
//                   <div className="bank-tree"></div>
//                   <div className="bank-tree"></div>
//                   <div className="bank-tree withering"></div>
//                 </div>
//                 <div className="vs-symbol">VS</div>
//                 <div className="blockchain-tree-container">
//                   <div className="blockchain-tree glowing"></div>
//                   <div className="blockchain-tree glowing"></div>
//                   <div className="blockchain-tree super-glowing"></div>
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {currentMission === 3 && (
//             <div className="key-animation">
//               <div className="dying-tree">
//                 <div className="tree-trunk"></div>
//                 <div className="tree-branches"></div>
//                 <div className="tree-leaves withering"></div>
//                 <div className="key-symbol"></div>
//               </div>
//             </div>
//           )}
          
//           {currentMission === 4 && (
//             <div className="boss-animation">
//               <div className="centralization-shadow">
//                 <div className="shadow-body"></div>
//                 <div className="red-eyes"></div>
//               </div>
//             </div>
//           )}
//         </div>
//         <p className="content-description">{mission.content.description}</p>
//         <div className="companion-message">
//           <div className="firefly-companion"></div>
//           <p>"{mission.content.companionMessage}"</p>
//         </div>
//         <button className="progress-button" onClick={progressToChallenge}>Continue</button>
//       </div>
//     );
//   };

//   const renderChallenge = () => {
//     const mission = missions[currentMission];
    
//     return (
//       <div className="challenge-section">
//         <h2>{mission.challenge.title}</h2>
//         <p>{mission.challenge.description}</p>
//         <p className="task-description">{mission.challenge.task}</p>
        
//         {currentMission === 0 && (
//           <form onSubmit={handleCipherSubmit} className="cipher-challenge">
//             <p className="cipher-clue">B31k5 = 🔒</p>
//             <input 
//               type="text" 
//               value={cipherInput} 
//               onChange={(e) => setCipherInput(e.target.value)} 
//               placeholder="Decode the message"
//             />
//             <button type="submit">Submit Solution</button>
//           </form>
//         )}
        
//         {currentMission === 1 && (
//           <div className="fragment-challenge">
//             <div className="newspaper-fragments">
//               {mission.challenge.fragments.map((fragment, index) => (
//                 <div key={index} className="fragment" draggable>
//                   {fragment}
//                 </div>
//               ))}
//             </div>
//             <div className="headline-assembly-area">
//               <div className="assembly-slots">
//                 {Array(mission.challenge.fragments.length).fill().map((_, i) => (
//                   <div key={i} className="assembly-slot"></div>
//                 ))}
//               </div>
//               <button onClick={() => handleFragmentAssembly(mission.challenge.fragments)}>
//                 Check Headline
//               </button>
//             </div>
//           </div>
//         )}
        
//         {currentMission === 2 && (
//           <div className="maze-challenge">
//             <div className="maze-paths">
//               <div className="red-path">
//                 <h3>Red Path (Banks)</h3>
//                 <p>Faster, but may collapse</p>
//                 <button onClick={() => handleMazeChoice("red")}>Take Red Path</button>
//               </div>
//               <div className="blue-path">
//                 <h3>Blue Path (Blockchain)</h3>
//                 <p>Slower, but more resilient</p>
//                 <button onClick={() => handleMazeChoice("blue")}>Take Blue Path</button>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {currentMission === 3 && (
//           <div className="seed-phrase-challenge">
//             <p>Arrange the seed words in the correct order. Beware of phishing owls!</p>
//             <div className="seed-word-container">
//               {seedWords.map((word, index) => (
//                 <div 
//                   key={index} 
//                   className="seed-word"
//                   draggable
//                   onClick={() => randomlyActivatePhishingOwl()}
//                 >
//                   {word}
//                 </div>
//               ))}
//             </div>
//             {phishingOwlActive && (
//               <div className="phishing-owl">
//                 <div className="owl-body"></div>
//                 <div className="owl-eyes"></div>
//                 <div className="owl-message">Hoot! I'll take that!</div>
//               </div>
//             )}
//             <button onClick={() => handleSeedPhraseReorder(seedWords)}>
//               Check Seed Phrase
//             </button>
//             <p className="attempts-left">Attempts remaining: {3 - owlAttempts}</p>
//           </div>
//         )}
        
//         {currentMission === 4 && (
//           <form onSubmit={handleRiddleSubmit} className="riddle-challenge">
//             <div className="ancient-tree">
//               <div className="tree-trunk"></div>
//               <div className="tree-branches"></div>
//               <div className="red-eyes"></div>
//             </div>
//             {mission.challenge.riddles.map((riddle, index) => (
//               <div key={index} className="riddle">
//                 <p>"{riddle}"</p>
//                 <input 
//                   type="text" 
//                   value={riddleAnswers[index]} 
//                   onChange={(e) => handleRiddleChange(index, e.target.value)} 
//                   placeholder="Your answer"
//                 />
//               </div>
//             ))}
//             <button type="submit">Submit Answers</button>
//           </form>
//         )}
//       </div>
//     );
//   };

//   const renderQuiz = () => {
//     const mission = missions[currentMission];
    
//     return (
//       <div className="quiz-section">
//         <h2>Knowledge Check</h2>
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           handleQuizSubmit(quizAnswers);
//         }}>
//           {mission.quiz.map((question, qIndex) => (
//             <div key={qIndex} className="quiz-question">
//               <p>{question.question}</p>
//               <div className="quiz-options">
//                 {question.options.map((option, oIndex) => (
//                   <label key={oIndex}>
//                     <input 
//                       type="radio" 
//                       name={`question-${qIndex}`} 
//                       checked={quizAnswers[qIndex] === oIndex}
//                       onChange={() => handleQuizAnswer(qIndex, oIndex)}
//                     />
//                     {option}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           ))}
//           <button type="submit">Submit Answers</button>
//         </form>
//       </div>
//     );
//   };

//   const renderForestTransformation = () => {
//     return (
//       <div className="forest-transformation">
//         <h2>The Forest Awakens!</h2>
//         <div className="transformation-animation">
//           <div className="forest-background">
//             {Array(20).fill().map((_, i) => (
//               <div key={i} className="transformed-tree" style={{
//                 left: `${Math.random() * 100}%`,
//                 height: `${100 + Math.random() * 200}px`,
//                 animationDelay: `${Math.random() * 2}s`
//               }}></div>
//             ))}
//             {Array(50).fill().map((_, i) => (
//               <div key={i} className="light-particle" style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`
//               }}></div>
//             ))}
//           </div>
//         </div>
//         <p className="transformation-message">
//           The Centralization Shadow disintegrates, and the forest erupts in color and light.
//           You've proven yourself worthy as a guardian of the revolution.
//         </p>
//         <div className="final-reward">
//           <div className="seed-pendant">
//             <div className="pendant-glow"></div>
//           </div>
//           <p>You've earned the <strong>Spark of Sovereignty</strong> badge and a glowing seed phrase pendant.</p>
//           <p className="forest-whisper">"You are the guardian of this revolution."</p>
//         </div>
//       </div>
//     );
//   };

//   const renderMissionComplete = () => {
//     if (showForestTransformation) {
//       return renderForestTransformation();
//     }
    
//     return (
//       <div className="mission-complete">
//         <h2>Mission Complete!</h2>
//         <div className="reward-animation">
//           <div className="xp-reward">+{missions[currentMission].rewards.xp} XP</div>
//           <div className="badge-reward">{missions[currentMission].rewards.badge}</div>
//         </div>
//         <button 
//           onClick={() => {
//             if (currentMission < missions.length - 1) {
//               setCurrentMission(currentMission + 1);
//               setCurrentStep('content');
//               setQuizAnswers({});
//             } else {
//               // Game complete
//               setShowForestTransformation(true);
//             }
//           }}
//         >
//           {currentMission < missions.length - 1 ? "Next Mission" : "Complete Journey"}
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className="forest-of-sparks">
//       <header>
//         <h1>Realm 3: The Forest of Sparks</h1>
//         <div className="player-stats">
//           <div className="xp-counter">
//             <span className="spark-icon">✨</span>
//             <span>{playerXP} Spark Points</span>
//           </div>
//           <div className="badges-counter">
//             <span className="badge-icon">🏆</span>
//             <span>{badges.length} Badges</span>
//           </div>
//         </div>
//       </header>
      
//       <div className="progress-bar">
//         <div className="progress-track">
//           {missions.map((mission, index) => (
//             <div 
//               key={index} 
//               className={`progress-node ${index < currentMission ? 'completed' : ''} ${index === currentMission ? 'active' : ''}`}
//             >
//               <div className="node-label">{mission.title}</div>
//             </div>
//           ))}
//         </div>
//         <div 
//           className="progress-fill" 
//           style={{ width: `${(currentMission / (missions.length - 1)) * 100}%` }}
//         ></div>
//       </div>
      
//       <main className="mission-container">
//         <div className="mission-header">
//           <h2>{missions[currentMission].title}</h2>
//           <p className="mission-goal">{missions[currentMission].goal}</p>
//         </div>
        
//         {currentStep === 'content' && renderContent()}
//         {currentStep === 'challenge' && renderChallenge()}
//         {currentStep === 'quiz' && renderQuiz()}
//         {currentStep === 'complete' && renderMissionComplete()}
//       </main>
      
//       <div className="forest-background">
//         <div className="data-stream"></div>
//         <div className="data-stream"></div>
//         <div className="data-stream"></div>
//         {Array(10).fill().map((_, i) => (
//           <div key={i} className="background-tree" style={{
//             left: `${Math.random() * 100}%`,
//             height: `${100 + Math.random() * 200}px`,
//             animationDelay: `${Math.random() * 2}s`
//           }}></div>
//         ))}
//         {Array(20).fill().map((_, i) => (
//           <div key={i} className="firefly" style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 5}s`
//           }}></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;