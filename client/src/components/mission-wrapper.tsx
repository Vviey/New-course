import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { Loader2 } from 'lucide-react';
import MissionLayout from './mission-layout';
import { getRealmName } from '@/lib/realm-utils';

// Updated loading component with light/dark mode support
const Loading = () => (
  <div className="flex items-center justify-center min-h-[80vh]">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
    <span className="ml-2 text-foreground">Loading mission...</span>
  </div>
);

// Updated error component with modern styling
const ErrorMessage = ({ realmId, missionId }: { realmId: string; missionId: string }) => {
  const [, setLocation] = useLocation();
  
  const realmIdNumber = parseInt(realmId);
  const validRealmId = !isNaN(realmIdNumber) && realmIdNumber >= 1 && realmIdNumber <= 7;
  const realmName = validRealmId ? getRealmName(realmIdNumber) : "the Map";
  const returnPath = validRealmId ? `/realm/${realmId}` : "/map";
  
  let errorMessage = "";
  
  if (!realmId || isNaN(Number(realmId))) {
    errorMessage = "Invalid realm specified. Please return to the map and select a valid realm.";
  } else if (!missionId || isNaN(Number(missionId))) {
    errorMessage = "Invalid mission specified. Please return to the realm and select a valid mission.";  
  } else {
    errorMessage = `We couldn't find mission ${missionId} in ${realmName}. It may have been moved or doesn't exist.`;
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <h1 className="text-2xl font-bold mb-4 text-destructive">Mission not found</h1>
      <p className="mb-6 text-center max-w-md text-muted-foreground">
        {errorMessage}
      </p>
      <button
        onClick={() => setLocation(returnPath)}
        className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-md text-primary-foreground transition-colors"
      >
        Return to {realmName}
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
  const params = useParams<{ realmId: string; missionId: string }>();
  const [, setLocation] = useLocation();
  
  const realmId = params.realmId;
  const missionId = params.missionId;
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [missionData, setMissionData] = useState<MissionData | null>(null);
  const [MissionComponent, setMissionComponent] = useState<React.ComponentType | null>(null);

  const getMissionInfo = (missionId: string, realmId: string) => {
    let idToUse = Number(missionId);
    const realmNum = Number(realmId);
    
    if (realmNum >= 1 && realmNum <= 2) {
      idToUse = realmNum * 100 + Number(missionId);
    }
    
    return { 
      title: `Mission ${missionId}`, 
      subtitle: `A learning journey in ${getRealmName(Number(realmId))}`,
      fullMissionId: idToUse
    };
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    setMissionComponent(null);
    setMissionData(null);
    
    let isMounted = true;
    
    if (!realmId || isNaN(Number(realmId)) || !missionId || isNaN(Number(missionId))) {
      console.error('Invalid realm or mission ID:', { realmId, missionId });
      setError(true);
      setLoading(false);
      return;
    }
    
    const loadMission = async () => {
      try {
        let missionModule;
        const realmNum = Number(realmId);
        const missionNum = Number(missionId);
        
        if (realmNum < 1 || realmNum > 7) {
          throw new Error(`Realm ${realmNum} is out of valid range (1-7)`);
        }
        
        let loadPaths = [];
        
        if (realmNum === 4) {
          loadPaths = [
            `../pages/realm${realmNum}/mission.tsx`,
            `../pages/realm${realmNum}/missions.tsx`,
            `../pages/realm${realmNum}/mining-simulator.tsx`,
            `../pages/realm${realmNum}/consensus-simulator.tsx`,
            `../pages/realm${realmNum}/energy-simulator.tsx`,
            `../pages/realm${realmNum}/africa-simulator.tsx`,
            `../pages/realm${realmNum}/knowledge-simulator.tsx`,
            `../pages/realm${realmNum}/halving-simulator.tsx`,
          ];
        } else {
          loadPaths = [
            `../pages/realm${realmNum}/mission${missionNum}.tsx`,
            `../pages/realm${realmNum}/mission.tsx`,
            `../pages/realm${realmNum}/missions.tsx`,
            `../pages/realm${realmNum}/barter-web-challenge.tsx`,
            `../pages/realm${realmNum}/currency-value-simulator.tsx`,
            `../pages/realm${realmNum}/inflation-simulator.tsx`,
          ];
        }
        
        loadPaths.push(`../realms/Realm${realmNum}/Mission${missionNum}/index.tsx`);
        
        for (const path of loadPaths) {
          if (!path) continue;
          
          try {
            // @vite-ignore
            missionModule = await import(path);
            break;
          } catch (error) {
            continue;
          }
        }
        
        if (!missionModule) {
          throw new Error(`Mission ${missionId} in Realm ${realmId} not found.`);
        }
        
        if (isMounted) {
          setMissionComponent(() => missionModule.default);
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

  if (loading) return <Loading />;
  if (error || !MissionComponent) return <ErrorMessage realmId={realmId} missionId={missionId} />;

  if (Object.prototype.hasOwnProperty.call(MissionComponent, 'useCustomLayout') || 
     (missionId === '1' && realmId === '1')) {
    return <MissionComponent />;
  }

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