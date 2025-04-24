import { useEffect, useState, lazy, Suspense } from 'react';
import { useLocation, useParams } from 'wouter';
import { Mission } from '@/components/missions/Mission';
import { realm1Missions } from '@/lib/realm1-missions';
import { useAuth } from '@/context/AuthContext';
import { originTheme } from '@/lib/realm-themes';
import { Loader2 } from 'lucide-react';

// Lazy load simulation components to improve performance
const BarterWebChallenge = lazy(() => import('./barter-web-challenge'));
const TimelineBuilder = lazy(() => import('./timeline-builder'));
const InflationSimulator = lazy(() => import('./inflation-simulator'));
const AfricanCurrencyEducation = lazy(() => import('./african-currency-education'));

export default function Realm1Mission() {
  const [, setLocation] = useLocation();
  const { missionId } = useParams<{ missionId: string }>();
  const { user, loading } = useAuth();
  const [missionComplete, setMissionComplete] = useState(false);
  
  // Parse mission ID from URL
  const missionNumber = parseInt(missionId || '1');
  const missionDataId = 100 + missionNumber;
  
  // Current mission data
  const missionData = realm1Missions.find(m => m.id === missionDataId);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      setLocation('/auth');
    }
  }, [user, loading, setLocation]);
  
  // Generate social media sharing message based on mission content
  const generateSharingMessage = () => {
    if (!missionData) return '';
    
    let message = '';
    
    switch(missionData.simulationType) {
      case 'barter':
        message = `🔄 Today I learned about barter trade in ancient Africa and how direct exchange presented unique challenges. Did you know that before money, people had to find someone who both wanted their goods AND had what they needed? #BitcoinQuest #AfricanEconomicHistory`;
        break;
      case 'timeline':
        message = `⏳ Fascinating journey through monetary evolution in Africa! From cowrie shells to gold dust, our ancestors created sophisticated currency systems long before coins. I'm exploring this history in the Bitcoin Quest educational journey. #AfricanMoneyHistory #BitcoinQuest`;
        break;
      case 'inflation':
        message = `📉 Learning about inflation's devastating impact on Zimbabwe in 2008, where a loaf of bread cost billions of dollars. Understanding why Bitcoin's limited supply is a revolutionary concept! #BitcoinQuest #FinancialLiteracy`;
        break;
      case 'quiz':
        message = `🧠 Just tested my knowledge on the six key properties of sound money! Understanding what makes money valuable is essential to appreciating Bitcoin's innovation. #BitcoinEducation #BitcoinQuest`;
        break;
      case 'map':
        message = `🗺️ Explored ancient African trade routes and how money facilitated commerce across vast distances. From Timbuktu to Great Zimbabwe, currencies like gold dust and cowrie shells connected civilizations! #AfricanHistory #BitcoinQuest`;
        break;
      case 'reflection':
        message = `💭 "Money is just the beginning. The true journey is understanding value." Reflecting on African monetary systems and how they connect to modern digital currencies. #BitcoinQuest #AfricanWisdom`;
        break;
      default:
        message = `📚 Exploring the fascinating history of money through African civilization in my Bitcoin Quest journey! #BitcoinEducation #AfricanHistory`;
    }
    
    return message;
  };

  // Handle mission completion
  const handleMissionComplete = () => {
    setMissionComplete(true);
    // In a real application, we would update the user's progress here
    // with something like:
    // updateUserProgress(user.id, { completedMissions: [...user.completedMissions, missionDataId] })
    
    // Redirect to realm page after a delay
    setTimeout(() => {
      setLocation('/realm/1/home');
    }, 2000);
  };
  
  // Render appropriate simulation based on mission type
  const renderSimulation = () => {
    if (!missionData) return null;
    
    return (
      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
        </div>
      }>
        {(() => {
          switch(missionData.simulationType) {
            case 'barter':
              return <BarterWebChallenge onComplete={handleChallengeComplete} />;
            case 'timeline':
              return <TimelineBuilder onComplete={handleChallengeComplete} />;
            case 'inflation':
              return <InflationSimulator onComplete={handleChallengeComplete} />;
            case 'reflection':
              return <AfricanCurrencyEducation onComplete={handleChallengeComplete} />;
            case 'quiz':
              return <QuizChallenge questions={missionData.simulationData?.questions || []} onComplete={handleChallengeComplete} />;
            case 'map':
              return <TradeRouteMap 
                cities={missionData.simulationData?.cities || []} 
                routes={missionData.simulationData?.routes || []} 
                onComplete={handleChallengeComplete} 
              />;
            default:
              return <div className="text-center text-amber-300 py-10">
                <p>Challenge not found for this mission type.</p>
              </div>;
          }
        })()}
      </Suspense>
    );
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
  
  // State to track if mission content has been read
  const [contentRead, setContentRead] = useState(false);
  
  // State for social media sharing content
  const [shareContent, setShareContent] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);
  
  // This function is now used by simulation components to trigger the sharing modal
  const handleChallengeComplete = () => {
    setShareContent(generateShareContent());
    setShowShareModal(true);
    
    // In a real application, we would update the user's progress here
    // updateUserProgress(user.id, { completedMissions: [...user.completedMissions, missionDataId] })
  };
  
  // Generate social media sharing content based on mission
  const generateShareContent = () => {
    if (!missionData) return '';
    
    const hashtags = "#Bitcoin #AfricanMoneyHistory #Learning";
    let content = '';
    
    switch(missionData.simulationType) {
      case 'barter':
        content = `I just learned about ancient barter systems in Africa! Before money, people traded directly - but it wasn't always easy. ${hashtags}`;
        break;
      case 'timeline':
        content = `Did you know that cowrie shells were used as currency in Africa for centuries? I'm exploring money's evolution through time! ${hashtags}`;
        break;
      case 'inflation':
        content = `Just explored how inflation affected Zimbabwe in 2008 - when everyday items cost billions! Learning about money's value through history. ${hashtags}`;
        break;
      case 'quiz':
        content = `Testing my knowledge about African monetary systems and the properties of sound money. Learning journey continues! ${hashtags}`;
        break;
      case 'map':
        content = `Discovered how trade routes across Africa were transformed by standardized currencies. Amazing how money changed commerce! ${hashtags}`;
        break;
      case 'reflection':
        content = `Reflecting on African monetary systems - from barter to shells to colonial disruption. So much wisdom in traditional economic systems! ${hashtags}`;
        break;
      default:
        content = `Learning about the fascinating history of money in Africa! ${hashtags}`;
    }
    
    return content;
  };
  
  // Handle starting the challenge after reading content
  const handleStartChallenge = () => {
    setContentRead(true);
  };
  
  return (
    <div 
      className="min-h-screen py-8 px-4"
      style={{
        backgroundColor: originTheme.colors.background,
        color: originTheme.colors.textLight,
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(238, 114, 11, 0.1) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(255, 197, 103, 0.1) 0%, transparent 60%)"
      }}
    >
      {/* Mission navigation header */}
      <header className="max-w-4xl mx-auto mb-6">
        <button 
          onClick={() => setLocation('/realm/1/home')} 
          className="flex items-center text-amber-300 hover:text-amber-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Missions
        </button>
      </header>
      
      {/* Mission completion message */}
      {missionComplete && (
        <div className="fixed top-0 left-0 right-0 bg-green-600 text-white p-3 text-center z-50">
          Mission complete! Great job! Redirecting to Realm...
        </div>
      )}
      
      {/* Mission content */}
      <main className="max-w-4xl mx-auto">
        {!contentRead ? (
          <div className="bg-amber-900/30 backdrop-blur-sm p-8 rounded-xl border-2 border-amber-600/40 shadow-xl">
            <Mission 
              mission={missionData}
              onComplete={handleMissionComplete}
            />
            
            {/* Challenge button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleStartChallenge}
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold rounded-lg transition-colors shadow-lg flex items-center group"
              >
                Start Challenge
                <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Challenge section */}
            <div className="bg-amber-900/30 backdrop-blur-sm p-8 rounded-xl border-2 border-amber-600/40 shadow-xl">
              <h2 className="text-2xl font-bold text-amber-300 mb-4">
                Challenge: {missionData?.title}
              </h2>
              
              <p className="text-amber-100 mb-6">
                Complete this challenge to unlock the next mission and continue your journey through the Realm of Origins.
              </p>
              
              {/* Render appropriate simulation component */}
              <div className="mt-4">
                {renderSimulation()}
              </div>
            </div>
            
            {/* Social media sharing section */}
            {showShareModal && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-amber-900 rounded-xl p-6 max-w-md w-full">
                  <h3 className="text-xl font-bold text-amber-300 mb-4">Share Your Insight</h3>
                  <textarea
                    className="w-full p-3 bg-amber-800 text-amber-100 rounded-lg border border-amber-600 mb-4"
                    rows={5}
                    value={shareContent}
                    onChange={(e) => setShareContent(e.target.value)}
                  />
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded">X (Twitter)</button>
                    <button className="px-4 py-2 bg-blue-800 text-white rounded">Facebook</button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded">WhatsApp</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Telegram</button>
                    <button className="px-4 py-2 bg-purple-700 text-white rounded">Nostr</button>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      onClick={() => setShowShareModal(false)}
                      className="px-4 py-2 bg-gray-600 text-white rounded mr-3"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleMissionComplete}
                      className="px-4 py-2 bg-amber-600 text-white rounded"
                    >
                      Continue Journey
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}