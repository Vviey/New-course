// import React, { useState } from 'react';
// import { Eye, EyeOff, Info } from 'lucide-react';

// const PaymentPrivacyHeatmap = () => {
//   const [selectedMethod, setSelectedMethod] = useState(null);

//   const paymentMethods = [
//     {
//       name: 'Traditional Bank',
//       surveillance: {
//         government: 'high',
//         banks: 'high',
//         merchants: 'medium',
//         public: 'low'
//       },
//       details: 'Full transaction history available to banks and government agencies.'
//     },
//     {
//       name: 'Mobile Money',
//       surveillance: {
//         government: 'high',
//         banks: 'medium',
//         merchants: 'medium',
//         public: 'low'
//       },
//       details: 'Telcos and payment providers have access to transaction data.'
//     },
//     {
//       name: 'Credit Card',
//       surveillance: {
//         government: 'high',
//         banks: 'high',
//         merchants: 'high',
//         public: 'low'
//       },
//       details: 'Extensive data collection including purchase details and location'
//     },
//     {
//       name: 'Bitcoin',
//       surveillance: {
//         government: 'medium',
//         banks: 'low',
//         merchants: 'medium',
//         public: 'high'
//       },
//       details: 'Public blockchain but with pseudonymous transactions'
//     },
//     {
//       name: 'Cash',
//       surveillance: {
//         government: 'low',
//         banks: 'low',
//         merchants: 'low',
//         public: 'low'
//       },
//       details: 'Physical transactions with minimal data trail'
//     }
//   ];

//   const getHeatmapColor = (level) => {
//     switch (level) {
//       case 'high': return 'bg-red-500';
//       case 'medium': return 'bg-yellow-500';
//       case 'low': return 'bg-green-500';
//       default: return 'bg-gray-200';
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//         <Eye className="text-blue-600" />
//         Payment Privacy Heatmap
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-4">
//           {paymentMethods.map((method) => (
//             <button
//               key={method.name}
//               className={`w-full p-4 rounded-lg text-left transition-all ${
//                 selectedMethod === method.name
//                   ? 'bg-blue-50 border-2 border-blue-500'
//                   : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
//               }`}
//               onClick={() => setSelectedMethod(method.name)}
//             >
//               <div className="flex justify-between items-center">
//                 <span className="font-medium">{method.name}</span>
//                 {selectedMethod === method.name ? (
//                   <EyeOff className="text-blue-600" />
//                 ) : (
//                   <Eye className="text-gray-400" />
//                 )}
//               </div>
//             </button>
//           ))}
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg">
//           {selectedMethod ? (
//             <div className="space-y-4">
//               <h3 className="font-semibold">{selectedMethod} Surveillance Levels</h3>
              
//               {Object.entries(paymentMethods.find(m => m.name === selectedMethod).surveillance)
//                 .map(([entity, level]) => (
//                   <div key={entity} className="flex items-center gap-2">
//                     <div className={`w-3 h-3 rounded-full ${getHeatmapColor(level)}`} />
//                     <span className="capitalize">{entity}:</span>
//                     <span className="capitalize text-gray-600">{level}</span>
//                   </div>
//                 ))}

//               <div className="mt-4 p-3 bg-blue-50 rounded-lg flex gap-2">
//                 <Info className="text-blue-600 flex-shrink-0" />
//                 <p className="text-sm text-blue-900">
//                   {paymentMethods.find(m => m.name === selectedMethod).details}
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="text-center text-gray-500">
//               Select a payment method to see surveillance details
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPrivacyHeatmap;