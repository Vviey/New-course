import { useEffect, useState, lazy, Suspense } from 'react';
import { useLocation, useParams } from 'wouter';
import { ChevronRight } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { realm3Missions } from '@/lib/realm3-missions';
import { Mission } from '@/components/ui/mission';
import { bioluminescentTheme } from '@/lib/realm-themes';

// Lazy load simulation components to improve performance
const CryptographySimulator = lazy(() => import('./cryptography-simulator'));
const HashingSimulator = lazy(() => import('./hashing-simulator'));
const MerkleTreeSimulator = lazy(() => import('./merkle-tree-simulator'));
const ConsensusSimulator = lazy(() => import('./consensus-simulator'));

export default function Realm3Missions() {
  const [, setLocation] = useLocation();
  const { missionId } = useParams<{ missionId: string }>();
  const { user, error, isLoading } = useAuth();
  const [missionComplete, setMissionComplete] = useState(false);
  
  // Parse mission ID from URL
  const missionNumber = parseInt(missionId || '1');
  const missionDataId = 300 + missionNumber;
  
  // Current mission data
  const missionData = realm3Missions.find(m => m.id === missionNumber);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      setLocation('/auth');
    }
  }, [user, isLoading, setLocation]);
  
  // Generate social media sharing message based on mission
  const generateSharingMessage = () => {
    if (!missionData) return '';
    
    let message = '';
    
    switch(missionData.simulationType) {
      case 'cryptography':
        message = `🔐 Today I learned about cryptography and how it secures Bitcoin transactions. The digital money of the future relies on strong encryption! #BitcoinQuest #Cryptography`;
        break;
      case 'hash':
        message = `#️⃣ Just explored how hash functions create digital fingerprints in Bitcoin's blockchain. These one-way functions are the foundation of blockchain security! #BitcoinQuest #Blockchain`;
        break;
      case 'merkle':
        message = `🌳 Learning about Merkle Trees and how they efficiently organize data in Bitcoin's blockchain. Such an elegant data structure! #BitcoinQuest #MerkleTrees`;
        break;
      case 'consensus':
        message = `🤝 Today I explored how Bitcoin's consensus mechanism achieves agreement without central authority. Proof-of-Work is revolutionary! #BitcoinQuest #Consensus`;
        break;
      default:
        message = `🧠 Learning about the cryptographic foundations of Bitcoin in my Bitcoin Quest journey! #BitcoinEducation #Cryptography`;
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
      setLocation('/realm/3');
    }, 2000);
  };
  
  // This function is used by simulation components to trigger the sharing modal
  const handleChallengeComplete = () => {
    setShareContent(generateShareContent());
    setShowShareModal(true);
    
    // In a real application, we would update the user's progress here
    // updateUserProgress(user.id, { completedMissions: [...user.completedMissions, missionDataId] })
  };
  
  // State to track if mission content has been read
  const [contentRead, setContentRead] = useState(false);
  
  // State for social media sharing content
  const [shareContent, setShareContent] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);
  
  // Generate social media sharing content based on mission
  const generateShareContent = () => {
    if (!missionData) return '';
    
    // Generate a tailored message based on the mission
    return generateSharingMessage();
  };
  
  // Handle starting the challenge after reading content
  const handleStartChallenge = () => {
    setContentRead(true);
  };
  
  // Render appropriate simulation based on mission type
  const renderSimulation = () => {
    if (!missionData) return null;
    
    return (
      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" style={{ color: bioluminescentTheme.colors.primary }} />
        </div>
      }>
        {(() => {
          switch(missionData.simulationType) {
            case 'cryptography':
              return <CryptographySimulator onComplete={handleChallengeComplete} />;
            case 'hash':
              return <HashingSimulator onComplete={handleChallengeComplete} />;
            case 'merkle':
              return <MerkleTreeSimulator onComplete={handleChallengeComplete} />;
            case 'consensus':
              return <ConsensusSimulator onComplete={handleChallengeComplete} />;
            default:
              return <div className="text-center py-10" style={{ color: bioluminescentTheme.colors.secondary }}>
                <p>Challenge not found for this mission type.</p>
              </div>;
          }
        })()}
      </Suspense>
    );
  };
  
  if (isLoading || !missionData) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: `linear-gradient(to bottom, ${bioluminescentTheme.colors.background}, ${bioluminescentTheme.colors.backgroundLight})`
        }}
      >
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-32 w-32 rounded-full mb-4" style={{ backgroundColor: bioluminescentTheme.colors.primary }}></div>
          <div className="h-6 w-48 rounded-full" style={{ backgroundColor: bioluminescentTheme.colors.primary }}></div>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="min-h-screen py-8 px-4"
      style={{
        background: `linear-gradient(to bottom, ${bioluminescentTheme.colors.background}, ${bioluminescentTheme.colors.backgroundLight})`,
        color: "#eaeaea",
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(6, 214, 160, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(17, 138, 178, 0.05) 0%, transparent 40%)"
      }}
    >
      {/* Mission navigation header */}
      <header className="max-w-4xl mx-auto mb-6">
        <button 
          onClick={() => setLocation('/realm/3')} 
          className="flex items-center transition-colors font-medium"
          style={{ color: bioluminescentTheme.colors.secondary }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Missions
        </button>
      </header>
      
      {/* Mission completion message */}
      {missionComplete && (
        <div className="fixed top-0 left-0 right-0 text-white p-3 text-center z-50"
          style={{ backgroundColor: bioluminescentTheme.colors.success }}
        >
          Mission complete! Great job! Redirecting to Realm...
        </div>
      )}
      
      {/* Mission content */}
      <main className="max-w-4xl mx-auto">
        {!contentRead ? (
          <div className="bg-black/40 p-8 rounded-xl border-2 shadow-xl"
            style={{ borderColor: `${bioluminescentTheme.colors.primary}40` }}
          >
            <Mission 
              mission={missionData}
              onComplete={handleMissionComplete}
              realmTheme="teal"
            />
            
            {/* Challenge button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleStartChallenge}
                className="px-6 py-3 text-white font-semibold rounded-lg transition-colors shadow-lg flex items-center group"
                style={{ 
                  background: bioluminescentTheme.gradients.glow,
                  boxShadow: bioluminescentTheme.shadows.button
                }}
              >
                Start Challenge
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Challenge section */}
            <div className="bg-black/40 p-8 rounded-xl border-2 shadow-xl"
              style={{ borderColor: `${bioluminescentTheme.colors.primary}40` }}
            >
              <h2 className="text-2xl font-bold mb-4"
                style={{ color: bioluminescentTheme.colors.primary }}
              >
                Challenge: {missionData?.title}
              </h2>
              
              <p className="text-gray-300 mb-6">
                Complete this challenge to unlock the next mission and continue your journey through the Bioluminescent Forest.
              </p>
              
              {/* Render appropriate simulation component */}
              <div className="mt-4">
                {renderSimulation()}
              </div>
            </div>
            
            {/* Social media sharing section */}
            {showShareModal && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-black/90 rounded-xl p-6 max-w-md w-full border"
                  style={{ borderColor: `${bioluminescentTheme.colors.primary}40` }}
                >
                  <h3 className="text-2xl font-bold mb-4"
                    style={{ color: bioluminescentTheme.colors.primary }}
                  >
                    Share Your Insight
                  </h3>
                  <textarea
                    className="w-full p-3 bg-black/60 text-gray-200 rounded-lg border-2 mb-4"
                    style={{ borderColor: `${bioluminescentTheme.colors.primary}30` }}
                    rows={5}
                    value={shareContent}
                    onChange={(e) => setShareContent(e.target.value)}
                  />
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">X (Twitter)</button>
                    <button className="px-4 py-2 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-900 transition-colors">Facebook</button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors">WhatsApp</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">Telegram</button>
                    <button className="px-4 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition-colors">Nostr</button>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      onClick={() => setShowShareModal(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition-colors mr-3"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleMissionComplete}
                      className="px-4 py-2 text-white rounded-lg shadow-md transition-colors"
                      style={{ 
                        background: bioluminescentTheme.gradients.glow,
                        boxShadow: bioluminescentTheme.shadows.button
                      }}
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