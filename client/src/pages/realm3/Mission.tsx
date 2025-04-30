import { useState, useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Mission as MissionComponent } from '@/components/missions/Mission';
import { realm3Missions } from '@/lib/realm3-missions';
import { bioluminescentTheme } from '@/lib/realm-themes';
import { MissionContent } from '@/lib/realm1-missions';

export default function MissionPage() {
  const [_, params] = useRoute('/realm3/mission/:id');
  const missionId = params?.id ? parseInt(params.id) : null;
  const [mission, setMission] = useState<MissionContent | null>(null);
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    if (missionId) {
      const foundMission = realm3Missions.find(m => m.id === missionId);
      setMission(foundMission || null);
    }
  }, [missionId]);
  
  const handleMissionComplete = () => {
    setCompleted(true);
    // Here you would update user progress in a real application
  };
  
  if (!mission) {
    return (
      <div className="min-h-screen flex items-center justify-center"
        style={{
          background: `linear-gradient(to bottom, ${bioluminescentTheme.colors.background}, ${bioluminescentTheme.colors.backgroundLight})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-teal-100">Mission not found</h1>
          <Link href="/realm3">
            <Button 
              className="inline-flex items-center"
              style={{
                background: bioluminescentTheme.gradients.glow,
                boxShadow: bioluminescentTheme.shadows.button,
              }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Realm 3
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  if (completed) {
    return (
      <div className="min-h-screen py-12 px-4"
        style={{
          background: `linear-gradient(to bottom, ${bioluminescentTheme.colors.background}, ${bioluminescentTheme.colors.backgroundLight})`,
        }}
      >
        <div className="max-w-2xl mx-auto bg-opacity-80 bg-black backdrop-blur rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text"
            style={{ backgroundImage: bioluminescentTheme.gradients.glow }}
          >
            Mission Complete!
          </h1>
          
          <p className="text-teal-100 mb-8">
            You've successfully completed the {mission.title} mission. The knowledge and skills from this mission will help you understand Bitcoin's innovative technical foundation.
          </p>
          
          {missionId !== null && missionId < realm3Missions[realm3Missions.length - 1].id ? (
            <div className="space-y-4">
              <p className="text-teal-300 font-medium">Ready for your next challenge?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/realm3/mission/${missionId !== null ? missionId + 1 : 1}`}>
                  <Button
                    className="w-full sm:w-auto"
                    style={{
                      background: bioluminescentTheme.gradients.glow,
                      boxShadow: bioluminescentTheme.shadows.button,
                    }}
                  >
                    Next Mission
                  </Button>
                </Link>
                
                <Link href="/realm3">
                  <Button variant="outline" className="w-full sm:w-auto border-teal-500 text-teal-400">
                    Return to Realm 3
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-teal-300 font-medium">You've reached the edge of the Bioluminescent Forest!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/map">
                  <Button
                    className="w-full sm:w-auto"
                    style={{
                      background: bioluminescentTheme.gradients.glow,
                      boxShadow: bioluminescentTheme.shadows.button,
                    }}
                  >
                    Return to Map
                  </Button>
                </Link>
                
                <Link href="/realm3">
                  <Button variant="outline" className="w-full sm:w-auto border-teal-500 text-teal-400">
                    Return to Realm 3
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-6 pb-12 px-4"
      style={{
        background: `linear-gradient(to bottom, ${bioluminescentTheme.colors.background}, ${bioluminescentTheme.colors.backgroundLight})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/realm3">
            <a className="inline-flex items-center text-teal-300 hover:text-teal-100 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span>Back to Realm 3</span>
            </a>
          </Link>
          
          <div className="text-teal-300 text-sm font-medium">
            Mission {missionId !== null ? missionId % 300 : 0} of {realm3Missions.length}
          </div>
        </div>
        
        <div className="relative">
          {/* Glowing code pattern background */}
          <div className="absolute inset-0 opacity-5" 
            style={{ 
              backgroundImage: bioluminescentTheme.patterns.code,
              backgroundSize: '300px 300px',
              zIndex: -1 
            }}>
          </div>
          
          <MissionComponent 
            mission={mission} 
            onComplete={handleMissionComplete} 
          />
        </div>
      </div>
    </div>
  );
}