import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, MessageCircle, Award } from 'lucide-react';
import { citadelTheme } from '@/lib/realm-themes';

interface Option {
  id: string;
  text: string;
  outcome: string;
  consequences: string[];
  isOptimal: boolean;
}

interface Scenario {
  id: number;
  title: string;
  description: string;
  options: Option[];
}

interface RolePlaySimulatorProps {
  scenarios: Scenario[];
  onComplete?: () => void;
}

export function RolePlaySimulator({ scenarios = [], onComplete }: RolePlaySimulatorProps) {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showOutcome, setShowOutcome] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  
  const currentScenario = scenarios[currentScenarioIndex];
  
  // Handle option selection
  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setShowOutcome(true);
    
    // Add current scenario to completed list
    if (!completedScenarios.includes(currentScenario.id)) {
      setCompletedScenarios([...completedScenarios, currentScenario.id]);
    }
  };
  
  // Move to next scenario
  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedOption(null);
      setShowOutcome(false);
    } else {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  };
  
  // Move to previous scenario
  const handlePreviousScenario = () => {
    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex(currentScenarioIndex - 1);
      setSelectedOption(null);
      setShowOutcome(false);
    }
  };
  
  // If there are no scenarios, show an error
  if (!currentScenario) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">No scenarios available for this simulation.</p>
      </div>
    );
  }
  
  // If the simulation is complete, show completion screen
  if (isComplete) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="text-center mb-8">
          <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Central Banker Experience Complete</h2>
          <p className="text-gray-600">
            You've experienced the challenges and trade-offs that central bankers face when making monetary policy decisions.
          </p>
        </div>
        
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Key Lessons:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Monetary policy involves difficult trade-offs between inflation, unemployment, and economic growth.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Central bankers have significant power but limited tools to address complex economic challenges.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Political pressures and public expectations can complicate optimal policy decision-making.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Money supply changes have far-reaching and sometimes unexpected consequences.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Bitcoin Alternative Perspective:</h3>
          <p className="text-gray-700">
            Bitcoin offers a decentralized alternative to central banking with a fixed supply of 21 million coins. 
            Unlike central bank money, no single authority can change Bitcoin's monetary policy rules, 
            removing the human judgment element that can lead to policy errors or be influenced by political pressures.
          </p>
        </div>
        
        <div className="text-center">
          <Button
            onClick={onComplete}
            style={{
              background: citadelTheme.gradients.blue,
              boxShadow: citadelTheme.shadows.button,
            }}
          >
            Complete Mission <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-medium text-gray-500">
            Scenario {currentScenarioIndex + 1} of {scenarios.length}
          </div>
          <div className="flex space-x-1">
            {scenarios.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 w-2 rounded-full ${
                  completedScenarios.includes(scenarios[index].id)
                    ? 'bg-green-500'
                    : index === currentScenarioIndex
                    ? 'bg-blue-500'
                    : 'bg-gray-200'
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-blue-800 mb-2">
          {currentScenario.title}
        </h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <div className="flex items-start">
            <MessageCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">{currentScenario.description}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {!showOutcome ? (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700 mb-2">What policy action will you take?</h3>
            {currentScenario.options.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="cursor-pointer hover:border-blue-300 transition-colors"
                  onClick={() => handleOptionSelect(option)}
                >
                  <CardHeader className="py-4 px-5">
                    <CardTitle className="text-md font-medium text-blue-700">
                      Option {option.id.toUpperCase()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-0 px-5">
                    <p className="text-gray-700">{option.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Your Decision:</h3>
              <p className="text-gray-700 mb-4">{selectedOption?.text}</p>
              
              <h3 className="font-semibold text-blue-800 mb-2">Outcome:</h3>
              <p className="text-gray-700 mb-4">{selectedOption?.outcome}</p>
              
              <h3 className="font-semibold text-blue-800 mb-2">Economic Consequences:</h3>
              <ul className="space-y-1">
                {selectedOption?.consequences.map((consequence, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{consequence}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {selectedOption?.isOptimal && (
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-1">Optimal Policy Choice</h3>
                <p className="text-green-700 text-sm">
                  Your decision reflects the balance most central bankers would attempt to achieve in this scenario.
                </p>
              </div>
            )}
            
            {!selectedOption?.isOptimal && (
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-1">Policy Trade-off</h3>
                <p className="text-amber-700 text-sm">
                  Your decision prioritized certain economic factors over others. Central banking always involves difficult trade-offs.
                </p>
              </div>
            )}
            
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePreviousScenario}
                disabled={currentScenarioIndex === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous Scenario
              </Button>
              
              <Button
                onClick={handleNextScenario}
                style={{
                  background: citadelTheme.gradients.blue,
                  boxShadow: citadelTheme.shadows.button,
                }}
              >
                {currentScenarioIndex < scenarios.length - 1 ? 'Next Scenario' : 'Complete Simulation'} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}