import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { getRealmTheme } from '@/lib/realm-themes';
import { RealmData, missionData } from '@/lib/realm-data';
import { useOffline } from '@/context/OfflineContext';

interface Mission {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isCompleted: boolean;
  isLocked: boolean;
  realmId: number;
}

export default function RealmPage() {
  const { realmId } = useParams();
  const [, setLocation] = useLocation();
  const [missions, setMissions] = useState<Mission[]>([]);
  const [realm, setRealm] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { isOffline, hasCachedContent } = useOffline();

  // Get realm theme
  const realmIdNumber = parseInt(realmId || '1');
  const theme = getRealmTheme(realmIdNumber);

  useEffect(() => {
    // Simulate loading data - in production this would be a fetch request
    setLoading(true);
    
    // Find the realm data
    const realmData = RealmData.find(r => r.id === realmIdNumber);
    
    if (realmData) {
      setRealm(realmData);
      
      // Filter missions for this realm
      const realmMissions = missionData
        .filter(m => m.realmId === realmIdNumber)
        .map((mission, index) => ({
          ...mission,
          isCompleted: index < 2, // For demo, make first two completed
          isLocked: index > 2     // For demo, lock missions after the third
        }));
      
      setMissions(realmMissions);
    }
    
    setLoading(false);
  }, [realmIdNumber]);

  // Helper function to calculate progress percentage
  const calculateProgress = () => {
    if (!missions.length) return 0;
    const completedMissions = missions.filter(m => m.isCompleted).length;
    return (completedMissions / missions.length) * 100;
  };

  // Navigate to a mission
  const handleMissionClick = (missionId: number, isLocked: boolean) => {
    if (!isLocked) {
      setLocation(`/mission/${missionId}`);
    }
  };

  // Dynamic styles based on the realm theme
  const headerStyle = {
    backgroundImage: `linear-gradient(to bottom, ${theme.colors.gradientStart}, ${theme.colors.gradientEnd})`,
    color: theme.colors.backgroundLight
  };

  const missionCardStyle = (isCompleted: boolean, isLocked: boolean) => {
    if (isLocked) {
      return {
        backgroundColor: '#64646430',
        borderColor: '#64646470',
        color: '#a9a9a970',
      };
    }
    
    if (isCompleted) {
      return {
        backgroundColor: theme.colors.backgroundLight,
        borderColor: theme.colors.highlight,
        boxShadow: `0 0 10px ${theme.colors.primaryAccent}40`,
        color: theme.colors.darkText
      };
    }
    
    return {
      backgroundColor: theme.colors.backgroundLight,
      borderColor: theme.colors.primaryAccent,
      color: theme.colors.darkText
    };
  };

  // Background pattern style 
  const patternStyle = {
    backgroundImage: theme.backgroundTexture || 'none',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-amber-900 text-amber-100">
      {/* Header with realm info */}
      <header 
        style={headerStyle} 
        className="py-8 px-4 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-20" 
          style={patternStyle}
        ></div>
        
        <div className="container mx-auto relative z-10">
          <button 
            onClick={() => setLocation('/')}
            className="mb-6 flex items-center text-amber-200 hover:text-amber-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back to Home</span>
          </button>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-lora mb-2">
                {realm?.name || 'Loading...'}
              </h1>
              <p className="text-lg opacity-90 max-w-lg">
                {realm?.description || 'Loading realm information...'}
              </p>
            </div>
            
            {/* Backpack/offline icon */}
            <div className="mt-4 sm:mt-0">
              <button 
                className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
                  isOffline 
                    ? 'bg-red-700 text-white' 
                    : hasCachedContent 
                      ? 'bg-green-700 text-white' 
                      : 'bg-amber-600 text-white'
                }`}
                onClick={() => setLocation('/offline-settings')}
              >
                {isOffline ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88a3 3 0 01.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8.303-.14.597-.226.882a1 1 0 001.893.632c.062-.187.12-.38.19-.579a.988.988 0 00.076-.419z" />
                    </svg>
                    <span>Offline Mode</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                    <span>{hasCachedContent ? 'Cached Content' : 'Download Realm'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Realm Progress</span>
              <span>{calculateProgress().toFixed(0)}% Complete</span>
            </div>
            <div className="origins-progress-bar">
              <div 
                className="origins-progress-fill" 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Missions grid */}
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6 font-lora">Available Missions</h2>
        
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-300"></div>
            <p className="mt-4">Loading missions...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission) => (
              <div
                key={mission.id}
                className={`mission-card border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                  mission.isCompleted 
                    ? 'origins-complete-animation' 
                    : mission.isLocked 
                      ? 'opacity-70 grayscale' 
                      : 'hover:scale-105'
                }`}
                style={missionCardStyle(mission.isCompleted, mission.isLocked)}
                onClick={() => handleMissionClick(mission.id, mission.isLocked)}
              >
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${mission.imageUrl})` }}
                >
                  {mission.isCompleted && (
                    <div className="bg-green-600 text-white px-3 py-1 inline-block rounded-br-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Completed</span>
                    </div>
                  )}
                  
                  {mission.isLocked && (
                    <div className="bg-gray-600 text-white px-3 py-1 inline-block rounded-br-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span>Locked</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                  <p className="text-sm opacity-80">{mission.description}</p>
                  
                  <div className="mt-4 flex justify-end">
                    <button 
                      className={`px-4 py-2 rounded-full ${
                        mission.isLocked 
                          ? 'bg-gray-500 cursor-not-allowed' 
                          : mission.isCompleted
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'btn-origins'
                      }`}
                      disabled={mission.isLocked}
                    >
                      {mission.isCompleted 
                        ? 'Revisit Mission' 
                        : mission.isLocked 
                          ? 'Locked' 
                          : 'Start Mission'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}