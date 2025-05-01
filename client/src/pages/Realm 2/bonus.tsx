// import React, { useState, useContext, ChangeEvent } from 'react';
// import { useDrag } from 'react-dnd';
// import { createUseStyles } from 'react-jss';
// import { RealmData } from '@/lib/realm-data';

// const useStyles = createUseStyles({
//   container: {
//     backgroundColor: '#FBF4D2',
//     padding: '2rem',
//     borderRadius: '8px',
//     margin: '1rem 0',
//   },
//   scenarioCard: {
//     border: `2px solid #EE720B`,
//     padding: '1.5rem',
//     margin: '1rem 0',
//     borderRadius: '8px',
//   },
//   optionButton: {
//     backgroundColor: '#EE720B',
//     color: '#FBF4D2',
//     padding: '0.8rem 1.5rem',
//     margin: '0.5rem',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     '&:hover': {
//       backgroundColor: '#FFC567',
//     },
//   },
//   networkNode: {
//     backgroundColor: '#EE720B',
//     color: '#FBF4D2',
//     padding: '1rem',
//     borderRadius: '50%',
//     width: '80px',
//     height: '80px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'move',
//   },
//   connectionLine: {
//     stroke: '#FFC567',
//     strokeWidth: 2,
//   },
//   timelineEvent: {
//     borderLeft: `4px solid #EE720B`,
//     padding: '1rem',
//     margin: '1rem 0',
//   },
// });

// const EscapeGame = () => {
//   const classes = useStyles();
//   const [currentStep, setCurrentStep] = useState(0);
//   const { addBadge } = useContext(RealmData);

//   const scenarios = [
//     {
//       description: "Political unrest! Banks are closed. How does Asha send money?",
//       options: [
//         { text: "Use Hawala network", result: "Funds sent via trusted merchants", next: 1 },
//         { text: "Wait for banks to reopen", result: "Family faces emergency without funds", next: -1 },
//       ]
//     },
//     {
//       description: "Border controls tightened! How to receive funds?",
//       options: [
//         { text: "Use Bitcoin P2P exchange", result: "Funds received via local crypto market", next: 2 },
//         { text: "Use traditional courier", result: "Funds intercepted at border", next: -1 },
//       ]
//     }
//   ];

//   const handleChoice = (outcome: string, nextStep: number) => {
//     if (nextStep === -1) {
//       alert(`Game Over: ${outcome}`);
//       setCurrentStep(0);
//     } else {
//       setCurrentStep(nextStep);
//       if (nextStep >= scenarios.length) {
//         addBadge('Surveillance Evader');
//       }
//     }
//   };

//   return (
//     <div className={classes.container}>
//       <h2>Escape the Surveillance Net</h2>
//       {currentStep < scenarios.length ? (
//         <div className={classes.scenarioCard}>
//           <p>{scenarios[currentStep].description}</p>
//           {scenarios[currentStep].options.map((option, index) => (
//             <button
//               key={index}
//               className={classes.optionButton}
//               onClick={() => handleChoice(option.result, option.next)}
//             >
//               {option.text}
//             </button>
//           ))}
//         </div>
//       ) : (
//         <div className={classes.scenarioCard}>
//           <h3>Success! Funds delivered securely 🎉</h3>
//           <button className={classes.optionButton} onClick={() => setCurrentStep(0)}>
//             Play Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const TrustNetworkBuilder = () => {
//   const classes = useStyles();
//   const [nodes] = useState([
//     { id: 1, x: 100, y: 100 },
//     { id: 2, x: 300, y: 100 },
//   ]);
//   const [connections] = useState<{ from: { x: number; y: number }; to: { x: number; y: number } }[]>([]);

//   const Node = ({ id, label }: { id: number; label: string }) => {
//     const [{ isDragging }, drag] = useDrag(() => ({
//       type: 'node',
//       item: { id },
//       collect: (monitor) => ({
//         isDragging: !!monitor.isDragging(),
//       }),
//     }));

//     return (
//       <div
//         ref={drag}
//         className={classes.networkNode}
//         style={{ opacity: isDragging ? 0.5 : 1 }}
//       >
//         {label}
//       </div>
//     );
//   };

//   return (
//     <div className={classes.container}>
//       <h2>Build Your Trust Network</h2>
//       <div style={{ position: 'relative', height: '400px' }}>
//         {nodes.map(node => (
//           <Node key={node.id} id={node.id} label={`Member ${node.id}`} />
//         ))}
//         <svg width="100%" height="100%">
//           {connections.map((conn, index) => (
//             <line
//               key={index}
//               className={classes.connectionLine}
//               x1={conn.from.x}
//               y1={conn.from.y}
//               x2={conn.to.x}
//               y2={conn.to.y}
//             />
//           ))}
//         </svg>
//       </div>
//     </div>
//   );
// };

// const ResistanceTimeline = () => {
//   const classes = useStyles();
//   const { addBadge } = useContext(RealmContext);
//   const [collectedBadges, setCollectedBadges] = useState<string[]>([]);

//   const timelineEvents = [
//     {
//       year: '1000 CE',
//       title: 'Hawala Networks',
//       description: 'Merchant-based value transfer system across Silk Road',
//       badge: 'Ancient Trader'
//     },
//     {
//       year: '1700s',
//       title: 'Tontines',
//       description: 'Community investment circles in West Africa',
//       badge: 'Community Builder'
//     },
//     {
//       year: '2009',
//       title: 'Bitcoin Genesis',
//       description: 'Peer-to-peer electronic cash system launched',
//       badge: 'Crypto Pioneer'
//     }
//   ];

//   const collectBadge = (badge: string) => {
//     if (!collectedBadges.includes(badge)) {
//       setCollectedBadges(prev => [...prev, badge]);
//       addBadge(badge);
//     }
//   };

//   return (
//     <div className={classes.container}>
//       <h2>Financial Resistance History</h2>
//       {timelineEvents.map((event, index) => (
//         <div key={index} className={classes.timelineEvent}>
//           <h3>{event.year} - {event.title}</h3>
//           <p>{event.description}</p>
//           <button
//             className={classes.optionButton}
//             onClick={() => collectBadge(event.badge)}
//             disabled={collectedBadges.includes(event.badge)}
//           >
//             {collectedBadges.includes(event.badge) ? '✓ Collected' : 'Collect Badge'}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// const WhisperNetworksMission = () => {
//   return (
//     <div>
//       <EscapeGame />
//       <TrustNetworkBuilder />
//       <ResistanceTimeline />
//     </div>
//   );
// };

// export default WhisperNetworksMission;
