<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Mission } from '@/components/missions/Mission';
import { realm1Missions } from '@/lib/realm1-missions';
import { useAuth } from '@/context/AuthContext';
import { originTheme } from '@/lib/realm-themes';

export default function Mission1() {
  const [, setLocation] = useLocation();
  const { user, loading } = useAuth();
  const [missionComplete, setMissionComplete] = useState(false);
  
  // Current mission data
  const missionData = realm1Missions.find(m => m.id === 101);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      setLocation('/auth');
    }
  }, [user, loading, setLocation]);
  
  // Handle mission completion
  const handleMissionComplete = () => {
    setMissionComplete(true);
    // In a real application, we would update the user's progress here
    // with something like:
    // updateUserProgress(user.id, { completedMissions: [...user.completedMissions, 101] })
    
    // Redirect to realm page after a delay
    setTimeout(() => {
      setLocation('/realm/1');
    }, 2000);
  };
  
  if (loading || !missionData) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: originTheme.colors.background
        }}
      >
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-32 w-32 bg-amber-600 rounded-full mb-4"></div>
          <div className="h-6 w-48 bg-amber-600 rounded-full"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="min-h-screen py-8 px-4"
      style={{
        backgroundColor: originTheme.colors.background,
        color: originTheme.colors.textLight
      }}
    >
      {/* Mission navigation header */}
      <header className="max-w-4xl mx-auto mb-6">
        <button 
          onClick={() => setLocation('/realm/1')} 
          className="flex items-center text-amber-300 hover:text-amber-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Realm
        </button>
      </header>
      
      {/* Mission completion message */}
      {missionComplete && (
        <div className="fixed top-0 left-0 right-0 bg-green-600 text-white p-3 text-center z-50">
          Mission complete! Redirecting to Realm...
        </div>
      )}
      
      {/* Mission content */}
      <main>
        <Mission 
          mission={missionData}
          onComplete={handleMissionComplete}
        />
=======
import { useState } from 'react';
import { useLocation } from 'wouter';
import { originTheme } from '@/lib/realm-themes';

// The Grand Bazaar mission in the Realm of Origins
export default function Mission1() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  
  // Use the Origins theme
  const theme = originTheme;
  
  // Helper function to handle mission completion
  const handleComplete = () => {
    setCompleted(true);
    // In a real app, this would update progress in the database
    setTimeout(() => {
      setLocation('/realm/1');
    }, 3000);
  };
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.backgroundLight }}>
      {/* Mission header */}
      <header 
        className="relative overflow-hidden" 
        style={{ 
          background: `linear-gradient(to bottom, ${theme.colors.gradientStart}, ${theme.colors.gradientEnd})`,
          minHeight: "180px"
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 origins-pattern opacity-20"></div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <button 
            onClick={() => setLocation('/realm/1')}
            className="flex items-center text-white hover:text-amber-200 transition-colors mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back to Realm</span>
          </button>
          
          <h1 className="text-3xl font-bold text-white mb-2 font-lora">The Grand Bazaar</h1>
          <p className="text-xl text-amber-100 max-w-2xl">
            Join Asha at the festive market to discover how people traded before money existed.
          </p>
          
          {/* Progress indicator */}
          <div className="mt-4 origins-progress-bar w-full max-w-xl">
            <div 
              className="origins-progress-fill" 
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Mission content */}
      <main className="container mx-auto px-4 py-8">
        {completed ? (
          <div className="text-center py-16 origins-complete-animation bg-origins-card rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h2 className="text-3xl font-bold mt-4 font-lora" style={{ color: theme.colors.darkText }}>
              Mission Complete!
            </h2>
            <p className="mt-2 text-lg" style={{ color: theme.colors.darkText }}>
              You've earned 50 points and a deeper understanding of early trade systems.
            </p>
            <p className="mt-4" style={{ color: theme.colors.darkText }}>
              Returning to the Realm of Origins...
            </p>
          </div>
        ) : (
          <div className="bg-origins-card p-6 rounded-xl">
            <div style={{ color: theme.colors.darkText }}>
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 font-lora">Welcome to the Grand Bazaar</h2>
                  
                  <div className="mb-6 prose prose-lg max-w-none">
                    <p>
                      Asha steps into the vibrant marketplace, surrounded by traders from different villages. 
                      The marketplace is alive with activity - people trading goods directly with one another.
                    </p>
                    
                    <p className="mt-4">
                      A woman approaches Asha. "Welcome to the Grand Bazaar! My name is Zara. Here, we exchange goods directly 
                      - what you have for what you need. Before coins or paper money, this is how all trade happened."
                    </p>
                    
                    <p className="mt-4">
                      Zara gestures around the marketplace. "Look around and notice how people are trading. 
                      Some trade is easy, while other exchanges require multiple trades to get what they want."
                    </p>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <button 
                      className="btn-origins"
                      onClick={() => setStep(2)}
                    >
                      Explore the Marketplace
                    </button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 font-lora">The Challenge of Barter</h2>
                  
                  <div className="mb-6 prose prose-lg max-w-none">
                    <p>
                      Asha observes a farmer trying to trade his grain for a new clay pot. The potter, however, 
                      has no need for grain right now. She needs fish for her family's dinner.
                    </p>
                    
                    <p className="mt-4">
                      "This is the double coincidence of wants problem," explains Zara. "For direct trade to work, 
                      each person must want exactly what the other has to offer. When that doesn't happen, trade becomes complicated."
                    </p>
                    
                    <p className="mt-4">
                      Asha watches as the farmer must now find someone with fish who wants grain, 
                      just so he can then trade the fish to the potter. This requires multiple transactions 
                      and much more time than a simple direct exchange.
                    </p>
                  </div>
                  
                  <div className="my-8 p-4 border border-amber-300 rounded-lg bg-amber-50">
                    <h3 className="font-bold text-lg mb-2">Key Concept: Double Coincidence of Wants</h3>
                    <p>
                      The requirement in a barter system that both parties must want what the other has to offer 
                      for an exchange to take place. This limitation made trading inefficient and complex.
                    </p>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <button 
                      className="btn-origins"
                      onClick={() => setStep(3)}
                    >
                      Continue Learning
                    </button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 font-lora">Valuable Trade Items</h2>
                  
                  <div className="mb-6 prose prose-lg max-w-none">
                    <p>
                      As they walk through the marketplace, Asha notices certain items being accepted more readily in trades than others.
                      Beautiful cowrie shells, salt, and small metal tools seem to change hands frequently.
                    </p>
                    
                    <p className="mt-4">
                      "These items have special qualities," Zara points out. "They're durable, portable, widely desired, 
                      and somewhat scarce. Because of this, people started accepting them even if they didn't need 
                      the item itself, knowing they could easily trade it later for something they did need."
                    </p>
                    
                    <p className="mt-4">
                      "This is how commodity money was born," continues Zara. "These special trade items gradually 
                      became a medium of exchange - an early form of money, before standardized coins existed."
                    </p>
                  </div>
                  
                  <div className="my-8 p-4 border border-amber-300 rounded-lg bg-amber-50">
                    <h3 className="font-bold text-lg mb-2">Key Concept: Commodity Money</h3>
                    <p>
                      Physical items that are valuable in themselves and also used as a medium of exchange.
                      Good commodity money is durable, portable, divisible, and has consistent value.
                    </p>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <button 
                      className="btn-origins"
                      onClick={() => setStep(4)}
                    >
                      Final Step
                    </button>
                  </div>
                </div>
              )}
              
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 font-lora">The Birth of Trade Networks</h2>
                  
                  <div className="mb-6 prose prose-lg max-w-none">
                    <p>
                      At the edge of the marketplace, Asha meets traders who have traveled from distant lands,
                      bringing exotic goods from far away. They speak different languages but are still able to trade
                      using commonly accepted valuable items.
                    </p>
                    
                    <p className="mt-4">
                      "Trade networks connected distant communities long before modern transportation," Zara explains.
                      "These routes carried not just goods, but also ideas, technologies, and cultural practices across vast distances."
                    </p>
                    
                    <p className="mt-4">
                      "The challenges of barter led people to develop more sophisticated exchange systems, which eventually
                      evolved into the monetary systems we know today," concludes Zara. "But it all began with simple 
                      direct exchanges like the ones you see here."
                    </p>
                  </div>
                  
                  <div className="my-8 p-6 bg-amber-800 text-amber-100 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Mission Summary</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Barter required a "double coincidence of wants" to work effectively</li>
                      <li>This limitation made trade complicated and inefficient</li>
                      <li>Certain valuable commodities emerged as commonly accepted trade items</li>
                      <li>These commodity monies were an early solution to barter's limitations</li>
                      <li>Trade networks connected distant communities and spread cultural practices</li>
                    </ul>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <button 
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-bold transition-colors shadow-lg"
                      onClick={handleComplete}
                    >
                      Complete Mission
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
>>>>>>> 0652a0db822258f9bfa7da88533be0a2088f509a
      </main>
    </div>
  );
}