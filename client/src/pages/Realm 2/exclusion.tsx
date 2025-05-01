// import React, { useState } from 'react';

// const ExclusionGame = () => {
//   const [score, setScore] = useState(0);
//   const [matches, setMatches] = useState([]);
//   const [feedback, setFeedback] = useState('Match barriers to affected groups');

//   const barriers = [
//     { id: 'id', text: 'No ID', icon: '📄' },
//     { id: 'location', text: 'Rural Location', icon: '🏡' },
//     { id: 'digital', text: 'Low Digital Literacy', icon: '📱' }
//   ];

//   const groups = [
//     { id: 'refugees', text: 'Refugees', icon: '🧳' }, 
//     { id: 'farmers', text: 'Rural Farmers', icon: '🌾' },
//     { id: 'elderly', text: 'Elderly', icon: '👵' }
//   ];

//   const correctMatches = [
//     { barrier: 'id', group: 'refugees' },
//     { barrier: 'location', group: 'farmers' },
//     { barrier: 'digital', group: 'elderly' }
//   ];

//   const handleMatch = (barrierId, groupId) => {
//     const isCorrect = correctMatches.some(m => 
//       m.barrier === barrierId && m.group === groupId
//     );

//     setMatches([...matches, { barrier: barrierId, group: groupId }]);
    
//     if (isCorrect) {
//       setScore(score + 10);
//       setFeedback('Correct match!');
//     } else {
//       setFeedback('Try again');
//     }
//   };

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Financial Exclusion Challenge</h1>
      
//       <div className="mb-4 p-2 bg-blue-100 rounded">
//         Score: {score} | {feedback}
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <h2 className="font-bold mb-2">Barriers</h2>
//           {barriers.map(b => (
//             <div key={b.id}
//               className="p-2 bg-white rounded shadow mb-2 cursor-pointer"
//               onClick={() => {/* Add drag logic */}}
//             >
//               {b.icon} {b.text}
//             </div>
//           ))}
//         </div>

//         <div>
//           <h2 className="font-bold mb-2">Affected Groups</h2>
//           {groups.map(g => (
//             <div key={g.id} 
//               className="p-2 bg-white rounded shadow mb-2"
//               onClick={() => {/* Add drop logic */}}
//             >
//               {g.icon} {g.text}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExclusionGame;