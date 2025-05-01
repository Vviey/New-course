// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const ForestOfSparks = () => {
//   const [currentMission, setCurrentMission] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [feedback, setFeedback] = useState('');

//   const missions = [
//     {
//       id: 1,
//       title: "The Spark of Satoshi",
//       description: "Follow the cryptographic trail to discover Bitcoin's origins",
//       challenge: "Decode Satoshi's original message hidden in binary trees",
//       quiz: [
//         {
//           question: "What year was Bitcoin's whitepaper published?",
//           options: ["2007", "2008", "2009", "2010"],
//           answer: 1
//         }
//       ]
//     },
//     {
//       id: 2, 
//       title: "The Genesis Block",
//       description: "Uncover the first Bitcoin block's hidden message",
//       challenge: "Decrypt the Times headline using a blockchain cipher",
//       quiz: [
//         {
//           question: "What was embedded in the Genesis Block?",
//           options: [
//             "A love letter",
//             "The Times headline about bank bailouts",
//             "A random number",
//             "The Bitcoin logo"
//           ],
//           answer: 1
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: "Bitcoin's Architecture",
//       description: "Navigate the decentralized network",
//       challenge: "Connect nodes to form a valid blockchain",
//       quiz: [
//         {
//           question: "What makes Bitcoin decentralized?",
//           options: [
//             "It's controlled by banks",
//             "It runs on a single computer",
//             "The network is distributed across many nodes",
//             "Satoshi controls it"
//           ],
//           answer: 2
//         }
//       ]
//     }
//   ];

//   const handleAnswer = (questionIndex, selectedOption) => {
//     const correct = missions[currentMission].quiz[questionIndex].answer === selectedOption;
//     if (correct) {
//       setScore(score + 10);
//       setFeedback('Correct! The forest glows brighter with your knowledge.');
//     } else {
//       setFeedback('Try again. The truth lies deeper in the forest.');
//     }
//   };

//   const progressToNextMission = () => {
//     if (currentMission < missions.length - 1) {
//       setCurrentMission(currentMission + 1);
//       setShowQuiz(false);
//       setFeedback('');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-900 to-blue-900 p-8">
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="max-w-4xl mx-auto"
//       >
//         <h1 className="text-4xl font-bold text-green-400 mb-8">
//           The Forest of Sparks: Digital Money Revolution
//         </h1>

//         <div className="bg-black/50 p-6 rounded-lg mb-8">
//           <h2 className="text-2xl text-green-300 mb-4">
//             {missions[currentMission].title}
//           </h2>
          
//           <p className="text-green-100 mb-4">
//             {missions[currentMission].description}
//           </p>

//           <div className="border border-green-500 p-4 rounded-lg mb-6">
//             <h3 className="text-xl text-green-400 mb-2">Challenge:</h3>
//             <p className="text-green-200">
//               {missions[currentMission].challenge}
//             </p>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-green-600 text-white px-6 py-2 rounded-lg"
//             onClick={() => setShowQuiz(true)}
//           >
//             Take the Challenge
//           </motion.button>
//         </div>

//         {showQuiz && (
//           <motion.div 
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="bg-black/50 p-6 rounded-lg"
//           >
//             {missions[currentMission].quiz.map((q, i) => (
//               <div key={i} className="mb-6">
//                 <h3 className="text-xl text-green-300 mb-4">{q.question}</h3>
//                 <div className="grid grid-cols-1 gap-4">
//                   {q.options.map((option, j) => (
//                     <button
//                       key={j}
//                       onClick={() => handleAnswer(i, j)}
//                       className="bg-green-800 hover:bg-green-700 text-green-100 p-3 rounded-lg"
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}

//             {feedback && (
//               <div className="text-green-400 mt-4 p-4 bg-black/30 rounded-lg">
//                 {feedback}
//               </div>
//             )}

//             {score >= (currentMission + 1) * 10 && (
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={progressToNextMission}
//                 className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg"
//               >
//                 Continue Deeper into the Forest
//               </motion.button>
//             )}
//           </motion.div>
//         )}

//         <div className="fixed bottom-4 right-4 bg-black/50 p-4 rounded-lg">
//           <p className="text-green-400">Score: {score}</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ForestOfSparks;