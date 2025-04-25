import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Consequence {
  description: string;
  inflation: number;
  unemployment: number;
  growth: number;
  debt: number;
}

interface Decision {
  id: string;
  title: string;
  description: string;
  consequences: Consequence;
}

interface Scenario {
  id: number;
  title: string;
  description: string;
  decisions: Decision[];
}

interface RolePlaySimulatorProps {
  scenarios: Scenario[];
  onComplete?: () => void;
}

export function RolePlaySimulator({ scenarios, onComplete }: RolePlaySimulatorProps) {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
  const [showConsequences, setShowConsequences] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([]);
  
  const currentScenario = scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === scenarios.length - 1;
  const allScenariosCompleted = completedScenarios.length === scenarios.length;
  
  const handleDecisionSelect = (decision: Decision) => {
    if (showConsequences) return;
    setSelectedDecision(decision);
  };
  
  const handleSeeConsequences = () => {
    if (!selectedDecision) return;
    setShowConsequences(true);
    if (!completedScenarios.includes(currentScenario.id)) {
      setCompletedScenarios([...completedScenarios, currentScenario.id]);
    }
  };
  
  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedDecision(null);
      setShowConsequences(false);
    } else if (onComplete) {
      onComplete();
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 bg-amber-50">
        <h2 className="text-2xl font-bold text-amber-800 mb-2">
          Role-Play Simulator: Central Bank Decisions
        </h2>
        <p className="text-amber-700 mb-4">
          Take on the role of a central bank leader making critical decisions about monetary policy.
        </p>
        
        {/* Scenario description */}
        <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">
            {currentScenario.title}
          </h3>
          <p className="text-gray-700">
            {currentScenario.description}
          </p>
        </div>
        
        {/* Decision options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentScenario.decisions.map((decision) => (
            <div
              key={decision.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedDecision?.id === decision.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50/50'
              }`}
              onClick={() => handleDecisionSelect(decision)}
            >
              <h4 className="font-semibold text-amber-700 mb-2">{decision.title}</h4>
              <p className="text-gray-600 text-sm">{decision.description}</p>
            </div>
          ))}
        </div>
        
        {/* Action button */}
        <div className="flex justify-center">
          <button
            className={`py-3 px-6 rounded-lg font-semibold transition-colors ${
              selectedDecision && !showConsequences
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : showConsequences
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={showConsequences ? handleNextScenario : handleSeeConsequences}
            disabled={!selectedDecision && !showConsequences}
          >
            {showConsequences
              ? isLastScenario && allScenariosCompleted
                ? 'Complete Simulation'
                : 'Next Scenario'
              : 'See Consequences'}
          </button>
        </div>
      </div>
      
      {/* Consequences panel */}
      {selectedDecision && (
        <div 
          className={`p-6 bg-gray-50 transition-all duration-500 overflow-hidden ${
            showConsequences ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <h3 className="text-xl font-bold text-amber-800 mb-4">
            Consequences of Your Decision
          </h3>
          <p className="text-gray-700 mb-6">
            {selectedDecision.consequences.description}
          </p>
          
          {/* Metrics display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Inflation */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-amber-700 font-semibold mb-2">Inflation</h4>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: `${selectedDecision.consequences.inflation}%` }}
                ></div>
              </div>
              <p className="text-right text-sm mt-1 text-gray-600">
                {selectedDecision.consequences.inflation}%
              </p>
            </div>
            
            {/* Unemployment */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-amber-700 font-semibold mb-2">Unemployment</h4>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${selectedDecision.consequences.unemployment}%` }}
                ></div>
              </div>
              <p className="text-right text-sm mt-1 text-gray-600">
                {selectedDecision.consequences.unemployment}%
              </p>
            </div>
            
            {/* Economic Growth */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-amber-700 font-semibold mb-2">Economic Growth</h4>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${selectedDecision.consequences.growth}%` }}
                ></div>
              </div>
              <p className="text-right text-sm mt-1 text-gray-600">
                {selectedDecision.consequences.growth}%
              </p>
            </div>
            
            {/* Debt Level */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-amber-700 font-semibold mb-2">Debt Level</h4>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: `${selectedDecision.consequences.debt}%` }}
                ></div>
              </div>
              <p className="text-right text-sm mt-1 text-gray-600">
                {selectedDecision.consequences.debt}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}