// import { useState } from "react";
// import { useLocation } from "wouter";
// import { citadelTheme } from "@/lib/realm-themes";
// import { realm2Missions } from "@/lib/realm2-missions";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { ChevronRight, Lock, Building2, Bank, EyeOff, Users, Globe, ArrowRight } from "lucide-react";

// export default function Realm2Home() {
//   const [, setLocation] = useLocation();
//   const [selectedMission, setSelectedMission] = useState<number | null>(null);

//   // Calculate completed missions (mock data - in a real app this would come from user state)
//   const completedMissions = [201]; // Example: mission 201 is completed

//   // Navigate to a mission
//   const goToMission = (missionId: number) => {
//     setLocation(`/realm/2/mission/${missionId % 100}`);
//   };

//   // Handle mission selection
//   const handleMissionSelect = (missionId: number) => {
//     setSelectedMission(missionId);
//   };

//   // Render mission details
//   const renderMissionDetails = () => {
//     if (selectedMission === null) {
//       return (
//         <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
//           <Building2 size={48} className="text-blue-600 mb-2" />
//           <h3 className="text-2xl font-bold text-blue-800">Welcome to The Central Citadel</h3>
//           <p className="text-blue-700">
//             In this realm, you'll explore the concepts of monetary control, sovereignty, and the financial systems that shape our world.
//           </p>
//           <p className="text-blue-600">
//             Select a mission from the left to begin your journey.
//           </p>
//         </div>
//       );
//     }

//     const mission = realm2Missions.find(m => m.id === selectedMission);
//     if (!mission) return null;

//     const isCompleted = completedMissions.includes(mission.id);
//     const isLocked = false; // In a real app, you'd have logic to determine if missions are locked

//     return (
//       <div className="p-6 h-full flex flex-col">
//         <div className="mb-4 flex items-center justify-between">
//           <div>
//             <h3 className="text-2xl font-bold text-blue-800">{mission.title}</h3>
//             <p className="text-blue-600">{mission.subtitle}</p>
//           </div>
//           <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm font-medium">
//             Mission {mission.id % 100}
//           </div>
//         </div>
        
//         <div className="prose prose-blue mb-6 text-blue-700">
//           <p>{mission.description}</p>
//         </div>
        
//         <div className="mb-6">
//           <h4 className="font-semibold text-blue-800 mb-2">Mission Objectives:</h4>
//           <ul className="space-y-1">
//             {mission.objectives.map((objective, index) => (
//               <li key={index} className="flex items-start">
//                 <span className="text-blue-600 mr-2">•</span>
//                 <span className="text-blue-700">{objective}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         <div className="mt-auto">
//           <Button 
//             className="w-full"
//             onClick={() => goToMission(mission.id)}
//             disabled={isLocked}
//             style={{
//               background: citadelTheme.gradients.blue,
//               boxShadow: citadelTheme.shadows.button,
//             }}
//           >
//             {isCompleted ? "Revisit Mission" : "Begin Mission"}
//             <ChevronRight className="ml-2 h-4 w-4" />
//           </Button>
          
//           {isLocked && (
//             <p className="text-sm text-red-500 mt-2 text-center">
//               Complete previous missions to unlock this one.
//             </p>
//           )}
//         </div>
//       </div>
//     );
//   };

//   // Mission icons based on simulation type
//   const getMissionIcon = (type: string) => {
//     switch (type) {
//       case 'roleplay': return <Bank className="h-5 w-5" />;
//       case 'inflation': return <Building2 className="h-5 w-5" />;
//       case 'privacy': return <EyeOff className="h-5 w-5" />;
//       case 'exclusion': return <Users className="h-5 w-5" />;
//       case 'quiz': return <Building2 className="h-5 w-5" />;
//       case 'globalflow': return <Globe className="h-5 w-5" />;
//       case 'escape': return <ArrowRight className="h-5 w-5" />;
//       default: return <ChevronRight className="h-5 w-5" />;
//     }
//   };

//   return (
//     <div 
//       className="min-h-screen py-8 px-4 md:py-12"
//       style={{ 
//         backgroundColor: citadelTheme.colors.background,
//         backgroundImage: `radial-gradient(circle at 90% 10%, rgba(23, 96, 135, 0.2) 0%, transparent 40%)`,
//       }}
//     >
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-white">The Central Citadel</h1>
//             <p className="text-blue-300">Control vs. Sovereignty</p>
//           </div>
//           <Button
//             variant="ghost"
//             onClick={() => setLocation("/map")}
//             className="text-blue-300 hover:text-white hover:bg-blue-800"
//           >
//             Return to Map
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left column: Mission list */}
//           <div className="space-y-4">
//             {realm2Missions.map((mission) => {
//               const isCompleted = completedMissions.includes(mission.id);
//               const isSelected = selectedMission === mission.id;
//               const isLocked = false; // Implement actual lock logic

//               return (
//                 <Card 
//                   key={mission.id}
//                   className={`
//                     transition-all cursor-pointer hover:shadow-md
//                     ${isSelected ? 'ring-2 ring-blue-500 shadow-lg' : ''}
//                     ${isLocked ? 'opacity-60' : ''}
//                   `}
//                   style={{
//                     backgroundColor: isSelected ? citadelTheme.colors.cardBackground : '#ffffff',
//                     borderColor: isSelected ? citadelTheme.colors.primary : '#e2e8f0',
//                   }}
//                   onClick={() => !isLocked && handleMissionSelect(mission.id)}
//                 >
//                   <CardHeader className="py-4 px-5">
//                     <div className="flex justify-between items-center">
//                       <CardTitle className="text-lg font-semibold text-blue-800">
//                         Mission {mission.id % 100}
//                       </CardTitle>
//                       {isLocked ? (
//                         <Lock className="h-5 w-5 text-gray-400" />
//                       ) : (
//                         isCompleted ? (
//                           <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
//                               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                             </svg>
//                           </div>
//                         ) : (
//                           getMissionIcon(mission.simulationType)
//                         )
//                       )}
//                     </div>
//                   </CardHeader>
//                   <CardContent className="py-0 px-5">
//                     <p className="text-sm font-medium text-blue-700">{mission.title}</p>
//                     <CardDescription className="text-xs mt-1 text-blue-600">
//                       {mission.subtitle}
//                     </CardDescription>
//                   </CardContent>
//                   <CardFooter className="py-3 px-5">
//                     <div className="flex justify-between items-center w-full">
//                       <span className="text-xs text-blue-600">
//                         {isCompleted ? "Completed" : "Not completed"}
//                       </span>
//                       <ChevronRight className="h-4 w-4 text-blue-500" />
//                     </div>
//                   </CardFooter>
//                 </Card>
//               );
//             })}
//           </div>

//           {/* Right column: Mission details */}
//           <div className="col-span-2">
//             <Card className="h-full" style={{ backgroundColor: citadelTheme.colors.cardBackground }}>
//               {renderMissionDetails()}
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }