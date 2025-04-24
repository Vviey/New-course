import { useState } from 'react';
import { MissionContent } from '@/lib/realm1-missions';

// Import simulation components
import { BarterWebChallenge } from '@/components/simulations/BarterWebChallenge';
import { TimelineChallenge } from '@/components/simulations/TimelineChallenge';
import { InflationSimulator } from '@/components/simulations/InflationSimulator';
import { QuizChallenge } from '@/components/simulations/QuizChallenge';
import { TradeRouteMap } from '@/components/simulations/TradeRouteMap';
import { ReflectionExercise } from '@/components/simulations/ReflectionExercise';

interface MissionProps {
  mission: MissionContent;
  onComplete?: () => void;
}

export function Mission({ mission, onComplete }: MissionProps) {
  const [isSimulationComplete, setIsSimulationComplete] = useState(false);
  const [currentSection, setCurrentSection] = useState<'intro' | 'simulation' | 'reflection'>('intro');
  
  // Handle completion of the simulation
  const handleSimulationComplete = () => {
    setIsSimulationComplete(true);
    setCurrentSection('reflection');
  };
  
  // Handle completion of the mission
  const handleReflectionComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };
  
  // Function to start the simulation
  const startSimulation = () => {
    setCurrentSection('simulation');
  };
  
  // Render the correct simulation based on mission type
  const renderSimulation = () => {
    switch (mission.simulationType) {
      case 'barter':
        return (
          <BarterWebChallenge 
            traders={mission.simulationData?.traders || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'timeline':
        return (
          <TimelineChallenge 
            events={mission.simulationData?.events || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'inflation':
        return (
          <InflationSimulator 
            basicItems={mission.simulationData?.basicItems || []}
            events={mission.simulationData?.events || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'quiz':
        return (
          <QuizChallenge 
            questions={mission.simulationData?.questions || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'map':
        return (
          <TradeRouteMap 
            routes={mission.simulationData?.routes || []}
            cities={mission.simulationData?.cities || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'reflection':
        return (
          <ReflectionExercise 
            question={mission.reflectionQuestion || 'Reflect on what you have learned in this mission.'}
            onComplete={handleSimulationComplete}
          />
        );
      default:
        return (
          <div className="bg-red-100 p-4 rounded-lg text-red-800">
            Unknown simulation type
          </div>
        );
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      {currentSection === 'intro' && (
        <div className="bg-white bg-opacity-90 rounded-xl overflow-hidden shadow-lg">
          {/* Mission header with image if available */}
          {mission.imagePath && (
            <div className="h-48 overflow-hidden">
              <img
                src={mission.imagePath}
                alt={mission.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Mission content */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold text-amber-900">{mission.title}</h2>
                <p className="text-amber-700">{mission.subtitle}</p>
              </div>
              <div className="bg-amber-100 px-3 py-1 rounded-full text-amber-800 text-sm font-medium">
                Mission {mission.id % 100}
              </div>
            </div>
            
            {/* Mission description */}
            <div className="prose prose-amber mb-6">
              <p className="text-gray-700">{mission.description}</p>
            </div>
            
            {/* Objectives */}
            <div className="mb-6">
              <h3 className="font-semibold text-amber-900 mb-2">Mission Objectives:</h3>
              <ul className="space-y-1">
                {mission.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Start button */}
            <button
              className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              onClick={startSimulation}
            >
              Begin Challenge
            </button>
          </div>
        </div>
      )}
      
      {currentSection === 'simulation' && (
        <div>
          {renderSimulation()}
        </div>
      )}
      
      {currentSection === 'reflection' && !mission.reflectionQuestion && mission.simulationType !== 'reflection' && (
        <div className="bg-white bg-opacity-90 rounded-xl overflow-hidden shadow-lg p-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Mission Complete!</h2>
          <p className="text-gray-700 mb-6">
            You've successfully completed the "{mission.title}" mission. You've gained valuable knowledge about {mission.subtitle.toLowerCase()}.
          </p>
          <button
            className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            onClick={handleReflectionComplete}
          >
            Continue Journey
          </button>
        </div>
      )}
      
      {currentSection === 'reflection' && (mission.reflectionQuestion || mission.simulationType === 'reflection') && (
        <ReflectionExercise 
          question={mission.reflectionQuestion || 'Reflect on what you have learned in this mission.'}
          onComplete={handleReflectionComplete}
        />
      )}
    </div>
  );
}