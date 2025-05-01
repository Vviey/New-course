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
  
  // Function to handle mission selection
  const handleMissionClick = (missionId: number, isLocked: boolean) => {
    if (!isLocked) {
      setLocation(`/realm/${realmId}/mission/${missionId}`);
    }
  };
  
  const handleBackClick = () => {
    setLocation('/home');
  };
  
  // Set theme based on realm
  const theme = originTheme; // Later we'll select different themes based on realm

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-amber-900 text-amber-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-200"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-800 to-amber-950 text-amber-100 pb-16">
      {/* Header */}
      <header className="relative p-6 flex items-center">
        <button 
          onClick={handleBackClick}
          className="mr-4 w-10 h-10 rounded-full bg-amber-800/50 flex items-center justify-center hover:bg-amber-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{currentRealm.name}</h1>
          <p className="text-amber-300 text-sm">Module {currentRealm.moduleNumber}: {currentRealm.focus || 'Money & Value'}</p>
        </div>
      </header>
      
      {/* Realm description */}
      <div className="px-6 py-3">
        <div className="bg-amber-900/30 border border-amber-700/30 rounded-xl p-4 mb-8">
          <p>{currentRealm.description}</p>
        </div>
      </div>
      
      {/* Missions list */}
      <div className="px-6">
        <h2 className="text-xl font-semibold mb-4">Available Missions</h2>
        <div className="space-y-3">
          {missions.map((mission) => (
            <MissionCard
              key={mission.missionId}
              title={mission.title}
              description={mission.description}
              isCompleted={mission.isCompleted}
              isLocked={mission.isLocked}
              onClick={() => handleMissionClick(mission.missionId, mission.isLocked)}
            />
          ))}
        </div>
      </div>
      
      {/* Realm info */}
      <div className="px-6 mt-12">
        <h2 className="text-xl font-semibold mb-4">About This Realm</h2>
        <div className="bg-amber-900/30 border border-amber-700/30 rounded-xl p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <img 
                src={currentRealm.imageUrl || `/images/realm${realmId}-detail.jpg`} 
                alt={currentRealm.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-lg font-semibold text-amber-300 mb-2">Learning Objectives</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Understand the foundations of money and its historical evolution</li>
                <li>Explore the properties that make effective money systems</li>
                <li>Discover how monetary systems are intertwined with cultural values</li>
                <li>Learn the historical context of early trade and currency systems</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-amber-300 mb-2">Key Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {['Scarcity', 'Trade', 'History of Money', 'Value', 'Barter', 'Currency Systems'].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-amber-800/50 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}