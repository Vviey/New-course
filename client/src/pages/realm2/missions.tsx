import { useEffect, useState, lazy, Suspense } from 'react';
import { useLocation, useParams } from 'wouter';
import { ChevronRight } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { realm2Missions } from '@/lib/realm2-missions';
import { Mission } from '@/components/ui/mission';
import { citadelTheme } from '@/lib/realm-themes';

// Lazy load simulation components
const SurveillanceSimulator = lazy(() => import('./surveillance-simulator'));
const PrivacyBalanceSimulator = lazy(() => import('./privacy-balance-simulator'));
const CBDCSimulator = lazy(() => import('./cbdc-simulator'));
const LightningNetworkSimulator = lazy(() => import('./lightning-network-simulator'));
const SelfCustodySimulator = lazy(() => import('./self-custody-simulator'));

export default function Realm2Missions() {
  const [, setLocation] = useLocation();
  const { missionId } = useParams<{ missionId: string }>();
  const { user, loading } = useAuth();
  const [missionComplete, setMissionComplete] = useState(false);
  const [contentRead, setContentRead] = useState(false);
  const [shareContent, setShareContent] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);

  // Mission data handling
  const missionNumber = parseInt(missionId || '1');
  const missionDataId = 200 + missionNumber;
  const missionData = realm2Missions.find(m => m.id === missionDataId);
  const missionWithContent = missionData ? {
    ...missionData,
    content: typeof missionData.description === 'string' ? missionData.description : ''
  } : null;

  // Theme colors with fallbacks
  const bgColor = citadelTheme?.colors?.background || "#00243F";
  const primaryColor = citadelTheme?.colors?.primary || "#00589B";
  const secondaryColor = citadelTheme?.colors?.secondary || "#0076CE";

  // Background image configuration
  const backgroundStyles = {
    backgroundImage: `url('https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-2-The-Citadel-Shados.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  useEffect(() => {
    if (!loading && !user) {
      setLocation('/auth');
    }
  }, [user, loading, setLocation]);

  const generateSharingMessage = () => {
    if (!missionData) return '';
    
    const messages = {
      surveillance: `🔍 Today I learned about financial surveillance in centralized monetary systems and why privacy matters. #BitcoinQuest`,
      privacy: `⚖️ Exploring the balance between privacy and transparency in financial systems. #BitcoinQuest`,
      cbdc: `💸 Learning about Central Bank Digital Currencies and their implications. #CBDCs`,
      lightning: `⚡ The Lightning Network adds speed and privacy to Bitcoin! #LightningNetwork`,
      selfcustody: `🔑 "Not your keys, not your coins." Learning about self-custody in Bitcoin. #SelfCustody`,
      default: `🧠 Learning about Bitcoin and financial privacy. #BitcoinEducation`
    };

    return messages[missionData.simulationType as keyof typeof messages] || messages.default;
  };

  const handleMissionComplete = () => {
    setMissionComplete(true);
    setTimeout(() => setLocation('/realm/2'), 2000);
  };

  const handleChallengeComplete = () => {
    setShareContent(generateSharingMessage());
    setShowShareModal(true);
  };

  const handleStartChallenge = () => {
    setContentRead(true);
  };

  const renderSimulation = () => {
    if (!missionData) return null;
    
    const components = {
      surveillance: <SurveillanceSimulator onComplete={handleChallengeComplete} />,
      privacy: <PrivacyBalanceSimulator onComplete={handleChallengeComplete} />,
      cbdc: <CBDCSimulator onComplete={handleChallengeComplete} />,
      lightning: <LightningNetworkSimulator onComplete={handleChallengeComplete} />,
      selfcustody: <SelfCustodySimulator onComplete={handleChallengeComplete} />
    };

    return (
      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
        </div>
      }>
        {components[missionData.simulationType as keyof typeof components] || (
          <div className="text-center text-purple-300 py-10">
            <p>Challenge not found for this mission type.</p>
          </div>
        )}
      </Suspense>
    );
  };

  if (loading || !missionData) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-32 w-32 rounded-full mb-4" style={{ backgroundColor: primaryColor }}></div>
          <div className="h-6 w-48 rounded-full" style={{ backgroundColor: primaryColor }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 relative" style={backgroundStyles}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Mission header */}
      <header className="max-w-4xl mx-auto mb-6 relative z-10">
        <button 
          onClick={() => setLocation('/realm/2')} 
          className="flex items-center font-medium hover:text-purple-300 transition-colors"
          style={{ color: secondaryColor }}
        >
          <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
          Back to Missions
        </button>
      </header>

      {/* Mission completion banner */}
      {missionComplete && (
        <div className="fixed top-0 left-0 right-0 bg-green-600/90 text-white p-3 text-center z-50 backdrop-blur-sm">
          Mission complete! Redirecting...
        </div>
      )}

      <main className="max-w-4xl mx-auto relative z-10">
        {!contentRead ? (
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 shadow-xl">
            <Mission 
              mission={missionWithContent as any}
              onComplete={handleMissionComplete}
              realmTheme="purple"
            />
            
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleStartChallenge}
                className="px-6 py-3 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg flex items-center group"
                style={{ 
                  background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                  boxShadow: `0 0 15px ${primaryColor}80`
                }}
              >
                Start Challenge
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 shadow-xl">
              <h2 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
                Challenge: {missionData.title}
              </h2>
              
              <p className="text-gray-300 mb-6">
                Complete this challenge to unlock the next mission.
              </p>
              
              <div className="mt-4">
                {renderSimulation()}
              </div>
            </div>
            
            {showShareModal && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-gray-900/90 backdrop-blur-md rounded-xl p-6 max-w-md w-full border border-purple-500/30">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
                    Share Your Achievement
                  </h3>
                  <textarea
                    className="w-full p-3 bg-gray-800/70 text-gray-200 rounded-lg border border-purple-500/30 mb-4"
                    rows={5}
                    value={shareContent}
                    onChange={(e) => setShareContent(e.target.value)}
                  />
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {['Twitter', 'Facebook', 'WhatsApp', 'Telegram', 'Nostr'].map((platform) => (
                      <button 
                        key={platform}
                        className="px-4 py-2 bg-purple-600/80 hover:bg-purple-500 text-white rounded-lg transition-colors"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <button 
                      onClick={() => setShowShareModal(false)}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleMissionComplete}
                      className="px-4 py-2 text-white rounded-lg transition-all hover:scale-105"
                      style={{ 
                        background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                        boxShadow: `0 0 15px ${primaryColor}80`
                      }}
                    >
                      Continue
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