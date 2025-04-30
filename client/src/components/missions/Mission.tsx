import { useState } from 'react';
import { MissionContent } from '@/lib/realm1-missions';

// Import Realm 1 simulation components
import { BarterWebChallenge } from '@/components/simulations/BarterWebChallenge';
import { TimelineChallenge } from '@/components/simulations/TimelineChallenge';
import { InflationSimulator } from '@/components/simulations/InflationSimulator';
import { QuizChallenge } from '@/components/simulations/QuizChallenge';
import { TradeRouteMap } from '@/components/simulations/TradeRouteMap';
import { ReflectionExercise } from '@/components/simulations/ReflectionExercise';

// Note: Realm 2 and Realm 3 simulation components are dynamically imported in the renderSimulation function

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
      // New simulation types for Realm 2
      case 'roleplay':
        const { RolePlaySimulator } = require('@/components/simulations/RolePlaySimulator');
        return (
          <RolePlaySimulator
            scenarios={mission.simulationData?.scenarios || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'privacy':
        const { PaymentPrivacySimulator } = require('@/components/simulations/PaymentPrivacySimulator');
        return (
          <PaymentPrivacySimulator
            paymentOptions={mission.simulationData?.paymentOptions || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'exclusion':
        const { ExclusionWebGame } = require('@/components/simulations/ExclusionWebGame');
        return (
          <ExclusionWebGame
            barriers={mission.simulationData?.barriers || []}
            groups={mission.simulationData?.groups || []}
            correctMatches={mission.simulationData?.correctMatches || []}
            stats={mission.simulationData?.stats || []}
            caseStudies={mission.simulationData?.caseStudies || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'globalflow':
        const { GlobalMoneyWebSimulation } = require('@/components/simulations/GlobalMoneyWebSimulation');
        return (
          <GlobalMoneyWebSimulation
            globalFlow={mission.simulationData?.globalFlow || { nodes: [], correctConnections: [] }}
            dollarShock={mission.simulationData?.dollarShock || { initialYear: 1971, events: [] }}
            onComplete={handleSimulationComplete}
          />
        );
      case 'escape':
        const { EscapeSurveillanceGame } = require('@/components/simulations/EscapeSurveillanceGame');
        return (
          <EscapeSurveillanceGame
            playerStartFunds={mission.simulationData?.playerStartFunds || 1000}
            routes={mission.simulationData?.routes || {}}
            resistanceNetworks={mission.simulationData?.resistanceNetworks || []}
            onComplete={handleSimulationComplete}
          />
        );
      
      // Realm 3 simulation types
      case 'cryptography':
        const { CryptographySimulator } = require('@/components/simulations/CryptographySimulator');
        return (
          <CryptographySimulator
            challenges={mission.simulationData?.challenges || []}
            visualExplanations={mission.simulationData?.visualExplanations || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'hash':
        const { HashFunctionSimulator } = require('@/components/simulations/HashFunctionSimulator');
        return (
          <HashFunctionSimulator
            challenges={mission.simulationData?.challenges || []}
            visualizations={mission.simulationData?.visualizations || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'merkle':
        const { MerkleTreeSimulator } = require('@/components/simulations/MerkleTreeSimulator');
        return (
          <MerkleTreeSimulator
            explanation={mission.simulationData?.explanation}
            transactionData={mission.simulationData?.transactionData || []}
            challenges={mission.simulationData?.challenges || []}
            visualization={mission.simulationData?.visualization}
            onComplete={handleSimulationComplete}
          />
        );
      case 'consensus':
        const { ConsensusSimulator } = require('@/components/simulations/ConsensusSimulator');
        return (
          <ConsensusSimulator
            scenarios={mission.simulationData?.scenarios || []}
            quizQuestions={mission.simulationData?.quizQuestions || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'network':
        const { NetworkSimulator } = require('@/components/simulations/NetworkSimulator');
        return (
          <NetworkSimulator
            network={mission.simulationData?.network || { nodes: 50, connections: "random" }}
            scenarios={mission.simulationData?.scenarios || []}
            interactiveTests={mission.simulationData?.interactiveTests || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'code':
        const { ScriptingSimulator } = require('@/components/simulations/ScriptingSimulator');
        return (
          <ScriptingSimulator
            explanation={mission.simulationData?.explanation}
            basics={mission.simulationData?.basics || []}
            challenges={mission.simulationData?.challenges || []}
            advanced={mission.simulationData?.advanced || []}
            onComplete={handleSimulationComplete}
          />
        );
      case 'lightning':
        const { LightningNetworkSimulator } = require('@/components/simulations/LightningNetworkSimulator');
        return (
          <LightningNetworkSimulator
            explanation={mission.simulationData?.explanation}
            scaling={mission.simulationData?.scaling}
            interactive={mission.simulationData?.interactive || {}}
            concepts={mission.simulationData?.concepts || []}
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
            
            {/* Display content for all missions */}
            <div className="mt-4 space-y-4">
              {mission.id === 101 && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800">Understanding Barter Systems</h3>
                  <p className="text-gray-700">
                    Before money existed, communities used barter systems to trade goods and services directly. In ancient Africa, communities would exchange valuable commodities like salt, gold, livestock, and textiles.
                  </p>
                  <p className="text-gray-700">
                    However, barter systems faced significant challenges:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Double coincidence of wants</strong>: Both parties needed to want what the other offered.</li>
                    <li><strong>Indivisibility</strong>: Some goods couldn't be divided into smaller units.</li>
                    <li><strong>Standardization</strong>: No standardized way to determine value.</li>
                    <li><strong>Storage</strong>: Perishable goods couldn't store value over time.</li>
                  </ul>
                  <p className="text-gray-700">
                    These limitations led to the development of commodity money and eventually currency systems that simplified trade across the continent.
                  </p>
                </>
              )}
              
              {mission.id === 102 && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800">From Shells to Metal Coins</h3>
                  <p className="text-gray-700">
                    As African societies began to recognize the limitations of barter, they developed commodity money - items that had intrinsic value but also served as a medium of exchange. Cowrie shells became one of the most successful forms of currency across the continent.
                  </p>
                  <p className="text-gray-700">
                    Cowrie shells were ideal as currency because:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Scarcity</strong>: The shells were not locally available in many regions, making them difficult to counterfeit</li>
                    <li><strong>Durability</strong>: Their hard surface meant they wouldn't deteriorate over time</li>
                    <li><strong>Portability</strong>: Their small size made them easy to carry for trade</li>
                    <li><strong>Divisibility</strong>: They could be counted in any quantity needed for exchange</li>
                  </ul>
                  <p className="text-gray-700">
                    By the early medieval period, kingdoms like Axum (in present-day Ethiopia) were minting their own coins, demonstrating Africa's independent development of advanced monetary systems.
                  </p>
                </>
              )}
              
              {mission.id === 103 && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800">Understanding Inflation Over Time</h3>
                  <p className="text-gray-700">
                    Money's value isn't fixed - it changes over time through inflation. In Africa, we've seen how inflation can drastically impact economies and ordinary people's lives.
                  </p>
                  <p className="text-gray-700">
                    Zimbabwe provides a powerful example of hyperinflation's devastation. In 2008-2009, inflation reached over 79.6 billion percent, causing:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Prices that doubled nearly every day</li>
                    <li>Money that became essentially worthless</li>
                    <li>The need to carry billions or trillions of dollars for basic purchases</li>
                    <li>Widespread economic collapse and hardship</li>
                  </ul>
                  <p className="text-gray-700">
                    This example shows why money supply matters. When governments print too much money, each unit buys less, demonstrating how scarcity helps maintain value - a principle central to understanding Bitcoin's design.
                  </p>
                </>
              )}
              
              {mission.id === 104 && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800">What Makes Good Money?</h3>
                  <p className="text-gray-700">
                    Throughout history, many items have been used as money - from salt blocks in Ethiopia to gold dust in West Africa. But what makes some forms of money more effective than others?
                  </p>
                  <p className="text-gray-700">
                    The six key properties of sound money are:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Durability</strong>: Money should last over time without deteriorating</li>
                    <li><strong>Portability</strong>: It should be easy to carry and transport</li>
                    <li><strong>Divisibility</strong>: It should be easily divided into smaller units</li>
                    <li><strong>Fungibility</strong>: Each unit should be interchangeable with other units</li>
                    <li><strong>Scarcity</strong>: The supply should be limited and difficult to increase rapidly</li>
                    <li><strong>Verifiability</strong>: It should be easy to authenticate and difficult to counterfeit</li>
                  </ul>
                  <p className="text-gray-700">
                    Understanding these properties explains why gold became valuable worldwide and why many African societies used rare shells, beads, and metals as currency.
                  </p>
                </>
              )}
              
              {mission.id === 105 && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800">How Money Facilitates Trade</h3>
                  <p className="text-gray-700">
                    Africa's vast trade networks once connected the continent from the Mediterranean to the Cape, and from the Atlantic to the Indian Ocean. Money was the innovation that made this extensive trade possible.
                  </p>
                  <p className="text-gray-700">
                    Key African trade routes included:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Trans-Saharan routes</strong>: Connecting West Africa's gold-producing regions to North Africa and beyond</li>
                    <li><strong>East African coastal network</strong>: Linking Swahili city-states like Kilwa and Mombasa to the Arabian Peninsula and India</li>
                    <li><strong>Inland routes</strong>: Connecting Great Zimbabwe and other interior kingdoms to coastal trading centers</li>
                  </ul>
                  <p className="text-gray-700">
                    With standardized currency, traders no longer needed to find someone who specifically wanted their goods. Money acted as an intermediary, dramatically increasing trading efficiency and allowing for more complex economic systems to develop.
                  </p>
                </>
              )}
              
              {mission.id === 106 && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800">Ubuntu: Trust-Based Economics</h3>
                  <p className="text-gray-700">
                    While monetary systems evolved across Africa, many societies developed sophisticated economic systems based on trust and communal values rather than currency alone. This philosophy, known as Ubuntu, can be summarized as "I am because we are."
                  </p>
                  <p className="text-gray-700">
                    Ubuntu economics was characterized by:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Collective resource management</strong>: Communities would share land, water, and other natural resources based on need rather than individual ownership</li>
                    <li><strong>Gift economies</strong>: Goods and services were often provided without expectation of immediate repayment, but with the understanding that the community would support you when needed</li>
                    <li><strong>Labor exchange systems</strong>: Communities would collectively work on farms, construction, and other major projects without monetary payment</li>
                    <li><strong>Mutual aid networks</strong>: Formalized systems for supporting community members during hardship, illness, or celebration</li>
                  </ul>
                  <p className="text-gray-700">
                    This trust-based approach didn't replace money but complemented it. Even in societies using currency, Ubuntu systems created resilience by ensuring resources flowed to those who needed them regardless of ability to pay.
                  </p>
                  <p className="text-gray-700">
                    Modern mutual credit systems, time banks, and community currencies draw inspiration from these African economic models, demonstrating their continued relevance in creating sustainable and inclusive economies.
                  </p>
                </>
              )}
              
              {mission.id === 107 && (
                <>
                  <h3 className="text-xl font-semibold text-amber-800">Reflection on Money's Evolution</h3>
                  <p className="text-gray-700">
                    As we've explored the journey of money through African history, we can recognize patterns that help us understand today's monetary innovations, including Bitcoin.
                  </p>
                  <p className="text-gray-700">
                    Key insights from Africa's monetary history include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Money evolves to solve real economic problems, not by decree</li>
                    <li>Societies independently developed similar solutions to the limitations of barter</li>
                    <li>Trade networks expand dramatically when money is introduced</li>
                    <li>Currency debasement and inflation have affected African economies throughout history</li>
                    <li>Effective money must be durable, portable, divisible, fungible, scarce, and verifiable</li>
                    <li>Trust-based systems like Ubuntu can provide economic resilience beyond what money alone offers</li>
                  </ul>
                  <p className="text-gray-700">
                    These historical patterns provide context for understanding modern digital currencies and why they might represent the next step in money's evolution.
                  </p>
                </>
              )}
              
              {/* Only show start challenge button for missions that are not Ubuntu or African Currency Education */}
              {mission.id !== 106 && mission.id !== 107 && (
                <button
                  className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors mt-4"
                  onClick={startSimulation}
                >
                  Start {mission.simulationType === 'barter' ? 'Barter' : 
                          mission.simulationType === 'timeline' ? 'Timeline' : 
                          mission.simulationType === 'inflation' ? 'Inflation' : 
                          mission.simulationType === 'quiz' ? 'Quiz' : 
                          mission.simulationType === 'map' ? 'Map' : 
                          'Reflection'} Challenge
                </button>
              )}
              
              {/* For Ubuntu mission and African Currency Education, show Continue button */}
              {(mission.id === 106 || mission.id === 107) && (
                <button
                  className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors mt-4"
                  onClick={handleReflectionComplete}
                >
                  Continue Journey
                </button>
              )}
            </div>
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