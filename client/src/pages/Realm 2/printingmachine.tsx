// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { AlertCircle } from 'lucide-react';

// const CentralBankSimulator = () => {
//   const [month, setMonth] = useState(0);
//   const [interestRate, setInterestRate] = useState(2);
//   const [moneySupply, setMoneySupply] = useState(100);
//   const [metrics, setMetrics] = useState({
//     unemployment: 5,
//     inflation: 2,
//     inequality: 30,
//     data: []
//   });
//   const [isRunning, setIsRunning] = useState(false);
//   const [gameOver, setGameOver] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isRunning && !gameOver) {
//       interval = setInterval(() => {
//         setMonth(prev => {
//           if (prev >= 24) {
//             setGameOver(true);
//             setIsRunning(false);
//             return prev;
//           }
//           return prev + 1;
//         });

//         // Simulate economic impacts
//         setMetrics(prev => {
//           const unemploymentChange = (interestRate - 2) * 0.5;
//           const inflationChange = (moneySupply - 100) * 0.1 - (interestRate - 2) * 0.3;
//           const inequalityChange = (moneySupply - 100) * 0.2 + (interestRate - 2) * 0.1;

//           const newUnemployment = Math.max(1, Math.min(20, prev.unemployment + unemploymentChange));
//           const newInflation = Math.max(0, Math.min(15, prev.inflation + inflationChange));
//           const newInequality = Math.max(20, Math.min(80, prev.inequality + inequalityChange));

//           return {
//             unemployment: Number(newUnemployment.toFixed(1)),
//             inflation: Number(newInflation.toFixed(1)),
//             inequality: Number(newInequality.toFixed(1)),
//             data: [...prev.data, {
//               month: month,
//               unemployment: newUnemployment,
//               inflation: newInflation,
//               inequality: newInequality
//             }]
//           };
//         });
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning, interestRate, moneySupply, month, gameOver]);

//   const handleReset = () => {
//     setMonth(0);
//     setInterestRate(2);
//     setMoneySupply(100);
//     setMetrics({
//       unemployment: 5,
//       inflation: 2,
//       inequality: 30,
//       data: []
//     });
//     setGameOver(false);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-6">Central Bank Simulator</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div className="space-y-6">
//           <div>
//             <h3 className="font-semibold mb-2">Interest Rate: {interestRate}%</h3>
//             <input
//               type="range"
//               min="0"
//               max="10"
//               step="0.5"
//               value={interestRate}
//               onChange={(e) => setInterestRate(Number(e.target.value))}
//               className="w-full"
//               disabled={gameOver}
//             />
//           </div>

//           <div>
//             <h3 className="font-semibold mb-2">Money Supply: {moneySupply}%</h3>
//             <input
//               type="range"
//               min="50"
//               max="150"
//               value={moneySupply}
//               onChange={(e) => setMoneySupply(Number(e.target.value))}
//               className="w-full"
//               disabled={gameOver}
//             />
//           </div>

//           <div className="flex space-x-4">
//             <button
//               onClick={() => setIsRunning(!isRunning)}
//               disabled={gameOver}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
//             >
//               {isRunning ? 'Pause' : 'Start'}
//             </button>
//             <button
//               onClick={handleReset}
//               className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
//             >
//               Reset
//             </button>
//           </div>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-semibold mb-4">Current Metrics</h3>
//           <div className="space-y-2">
//             <div>Unemployment: {metrics.unemployment}%</div>
//             <div>Inflation: {metrics.inflation}%</div>
//             <div>Inequality Index: {metrics.inequality}</div>
//             <div>Month: {month}/24</div>
//           </div>
//         </div>
//       </div>

//       <div className="h-64">
//         <LineChart
//           width={800}
//           height={250}
//           data={metrics.data}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="unemployment" stroke="#8884d8" />
//           <Line type="monotone" dataKey="inflation" stroke="#82ca9d" />
//           <Line type="monotone" dataKey="inequality" stroke="#ffc658" />
//         </LineChart>
//       </div>

//       {gameOver && (
//         <div className="mt-6 p-4 bg-blue-50 rounded-lg">
//           <div className="flex items-center space-x-2">
//             <AlertCircle className="text-blue-600" />
//             <h3 className="font-semibold">Simulation Complete</h3>
//           </div>
//           <p className="mt-2">
//             Reflection: During your term as central banker, your policies led to:
//             {metrics.unemployment > 8 && " High unemployment affecting working families."}
//             {metrics.inflation > 5 && " Significant inflation eroding savings."}
//             {metrics.inequality > 40 && " Increased wealth inequality in society."}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CentralBankSimulator;