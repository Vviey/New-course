import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Mission } from '@/components/missions/Mission';
import { realm1Missions } from '@/lib/realm1-missions';
import { useAuth } from '@/context/AuthContext';
import { originTheme } from '@/lib/realm-themes';

export default function Mission2() {
  const [, setLocation] = useLocation();
  const { user, loading } = useAuth();
  const [missionComplete, setMissionComplete] = useState(false);
  
  // Current mission data
  const missionData = realm1Missions.find(m => m.id === 102);
  
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
    // updateUserProgress(user.id, { completedMissions: [...user.completedMissions, 102] })
    
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
      </main>
    </div>
  );
}