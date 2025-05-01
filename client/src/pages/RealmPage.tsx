<<<<<<< HEAD
import { useParams, useLocation } from 'wouter';
import { MissionCard } from '@/components/ui/mission-card';
import { RealmData } from '@/lib/realm-data';
import { realm1Missions } from '@/lib/realm1-missions';
import { useAuth } from '@/context/AuthContext';
import { originTheme } from '@/lib/realm-themes';
import { useEffect } from 'react';

// Transform realm1Missions data to match MissionCard props
const getMissionsForRealm = (realmId: number) => {
  switch(realmId) {
    case 1:
      return realm1Missions.map((mission, index) => ({
        title: mission.title,
        description: mission.subtitle,
        missionId: mission.id,
        isCompleted: false, // This would come from user progress data in a real app
        isLocked: false // All missions are accessible for demo purposes
      }));
    default:
      // For other realms, use placeholder missions
      return [
        {
          title: 'Coming Soon',
          description: 'This realm is under construction',
          missionId: realmId * 100 + 1,
          isCompleted: false,
          isLocked: true
        }
      ];
  }
};

export default function RealmPage() {
  const { id } = useParams<{ id: string }>();
  const realmId = parseInt(id || '1');
  const [, setLocation] = useLocation();
  const { user, loading } = useAuth();
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      setLocation('/auth');
    }
  }, [user, loading, setLocation]);
  
  // Get realm-specific data 
  const currentRealm = RealmData.find(realm => realm.id === realmId) || RealmData[0];
  
  // Get missions for this realm
  const missions = getMissionsForRealm(realmId);
  
  // Custom mission path generator
  const getMissionPath = (missionId: number) => {
    // Format consistent with architecture diagram
    if (missionId === 100) { // Special case for bonus mission
      return `/realm/${realmId}/mission/bonus`;
    }
    return `/realm/${realmId}/mission/${missionId % 100}`;
  };
  
  // Get theme and styles for the current realm
  const getRealmTheme = () => {
    switch(realmId) {
      case 1:
        return originTheme;
      default:
        return originTheme; // Default to Origin theme for now
    }
  };
  
  const currentTheme = getRealmTheme();
  
  // Handle mission card click
  const handleMissionClick = (missionId: number) => {
    // For Realm 1, redirect to story intro first if it's the first mission
    if (realmId === 1 && missionId === 101) {
      setLocation('/realm/1/story');
    } else {
      setLocation(getMissionPath(missionId));
    }
  };

  if (loading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: currentTheme.colors.background
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
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundColor: currentTheme.colors.background,
        color: currentTheme.colors.textLight
      }}
    >
      {/* Header with back button and title */}
      <header className="pt-6 px-6 pb-4">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setLocation('/home')} 
            className="flex items-center text-amber-300 hover:text-amber-200 transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Realms
          </button>
          
          <h1 className="text-4xl font-bold text-amber-300 text-center font-serif">
            {currentRealm.name}
          </h1>
        </div>
      </header>
      
      {/* Realm description */}
      <div className="px-6 py-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-200 italic">{currentRealm.description}</p>
        </div>
      </div>
      
      {/* Main content - grid of missions */}
      <main className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission) => (
              <div 
                key={mission.missionId}
                onClick={() => !mission.isLocked && handleMissionClick(mission.missionId)}
              >
                <MissionCard
                  title={mission.title}
                  description={mission.description}
                  isCompleted={mission.isCompleted}
                  isLocked={mission.isLocked}
                  missionId={mission.missionId}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Bottom navigation */}
      <footer className="fixed bottom-4 left-0 right-0 flex justify-center space-x-6">
        <button 
          className="px-5 py-2 bg-amber-800 rounded-full text-amber-200 font-semibold hover:bg-amber-700 transition-colors shadow-lg flex items-center space-x-2"
          onClick={() => setLocation('/map')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
          </svg>
          <span>Journey Map</span>
        </button>
        
        <button 
          className="px-5 py-2 bg-amber-800 rounded-full text-amber-200 font-semibold hover:bg-amber-700 transition-colors shadow-lg flex items-center space-x-2"
          onClick={() => setLocation('/home')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span>Realms</span>
        </button>
      </footer>
=======
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
>>>>>>> 0652a0db822258f9bfa7da88533be0a2088f509a
    </div>
  );
}