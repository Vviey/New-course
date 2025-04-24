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
    </div>
  );
}