import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { Loader2 } from 'lucide-react';
import MissionLayout from './mission-layout';
import { getRealmName } from '@/lib/realm-utils';

// Component to show while loading a mission
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-stone-900">
    <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
    <span className="ml-2 text-amber-100">Loading mission...</span>
  </div>
);

// Error state component
const ErrorMessage = ({ realmId, missionId }: { realmId: string, missionId: string }) => {
  const [, setLocation] = useLocation();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-900 text-amber-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-amber-400">Mission not found</h1>
      <p className="mb-6 text-center max-w-md">
        We couldn't find the mission you were looking for. It may have been moved or doesn't exist.
      </p>
      <button
        onClick={() => setLocation(`/realm/${realmId}`)}
        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-md text-white transition-colors"
      >
        Return to {getRealmName(Number(realmId))}
      </button>
    </div>
  );
};

interface MissionData {
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
}

export default function MissionWrapper() {
  const { realmId, missionId } = useParams<{ realmId: string, missionId: string }>();
  // Location navigation is handled by child components when needed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [missionData, setMissionData] = useState<MissionData | null>(null);
  const [MissionComponent, setMissionComponent] = useState<React.ComponentType | null>(null);

  // Get mission title and description from local data
  const getMissionInfo = (missionId: string, realmId: string) => {
    // Default values with the mission and realm information
    return { 
      title: `Mission ${missionId}`, 
      subtitle: `A learning journey in ${getRealmName(Number(realmId))}` 
    };
  };

  useEffect(() => {
    // Reset state on parameter changes
    setLoading(true);
    setError(false);
    setMissionComponent(null);
    setMissionData(null);
    
    let isMounted = true;

    // Dynamic import of mission content based on realm and mission IDs
    const loadMission = async () => {
      try {
        let missionModule;
        
        // Updated paths to match our actual file structure
        const loadPaths = [
          // Try mission-specific component if it exists
          `../pages/realm${realmId}/mission${missionId}.tsx`,
          
          // Try generic mission page with ID parameter
          `../pages/realm${realmId}/mission.tsx`,
          
          // Try fallback to related challenge or interactive components
          `../pages/realm${realmId}/barter-web-challenge.tsx`,
          `../pages/realm${realmId}/currency-value-simulator.tsx`,
          `../pages/realm${realmId}/inflation-simulator.tsx`,
          
          // For older structure compatibility
          `../realms/Realm${realmId}/Mission${missionId}/index.tsx`,
        ];
        
        console.log(`Attempting to load mission from: ${loadPaths.join(', ')}`);
        
        for (const path of loadPaths) {
          if (!path) continue;
          
          try {
            // @vite-ignore
            missionModule = await import(path);
            console.log(`Successfully loaded mission from: ${path}`);
            break; // Stop if we found a valid module
          } catch (error) {
            // Continue to next path
            console.log(`Path ${path} not found, trying next...`);
          }
        }
        
        if (!missionModule) {
          throw new Error('Mission not found');
        }
        
        if (isMounted) {
          setMissionComponent(() => missionModule.default);
          
          // Get mission info from local data
          const missionInfo = getMissionInfo(missionId, realmId);
          setMissionData({ 
            title: missionInfo.title,
            subtitle: missionInfo.subtitle 
          });
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to load mission:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    loadMission();

    return () => {
      isMounted = false;
    };
  }, [realmId, missionId]);

  if (loading) {
    return <Loading />;
  }

  if (error || !MissionComponent) {
    return <ErrorMessage realmId={realmId} missionId={missionId} />;
  }

  // Simply render the component if it uses its own layout
  if (Object.prototype.hasOwnProperty.call(MissionComponent, 'useCustomLayout') || 
     (missionId === '1' && realmId === '1')) {
    return <MissionComponent />;
  }

  // Otherwise, wrap it in our standardized layout
  return (
    <MissionLayout 
      realmId={realmId}
      title={missionData?.title || `Mission ${missionId}`}
      subtitle={missionData?.subtitle}
    >
      <MissionComponent />
    </MissionLayout>
  );
}