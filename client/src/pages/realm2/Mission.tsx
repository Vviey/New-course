import { useState, useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Mission as MissionComponent } from '@/components/missions/Mission';
import { realm2Missions } from '@/lib/realm2-missions';
import { citadelTheme } from '@/lib/realm-themes';
import { MissionContent } from '@/lib/realm1-missions';

export default function MissionPage() {
  const [_, params] = useRoute('/realm2/mission/:id');
  const missionId = params?.id ? parseInt(params.id) : null;
  const [mission, setMission] = useState<MissionContent | null>(null);
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    if (missionId) {
      const foundMission = realm2Missions.find(m => m.id === missionId);
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
          background: `linear-gradient(to bottom, ${citadelTheme.colors.background}, ${citadelTheme.colors.backgroundLight})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-blue-100">Mission not found</h1>
          <Link href="/realm2">
            <Button 
              className="inline-flex items-center"
              style={{
                background: citadelTheme.gradients.blue,
                boxShadow: citadelTheme.shadows.button,
              }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Realm 2
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
          background: `linear-gradient(to bottom, ${citadelTheme.colors.background}, ${citadelTheme.colors.backgroundLight})`,
        }}
      >
        <div className="max-w-2xl mx-auto bg-opacity-80 bg-black backdrop-blur rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text"
            style={{ backgroundImage: citadelTheme.gradients.blue }}
          >
            Mission Complete!
          </h1>
          
          <p className="text-blue-100 mb-8">
            You've successfully completed the {mission.title} mission. The knowledge from this mission will help you understand the challenges of centralized monetary control and surveillance.
          </p>
          
          {missionId !== null && missionId < realm2Missions[realm2Missions.length - 1].id ? (
            <div className="space-y-4">
              <p className="text-blue-300 font-medium">Ready for your next challenge?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/realm2/mission/${missionId !== null ? missionId + 1 : 1}`}>
                  <Button
                    className="w-full sm:w-auto"
                    style={{
                      background: citadelTheme.gradients.blue,
                      boxShadow: citadelTheme.shadows.button,
                    }}
                  >
                    Next Mission
                  </Button>
                </Link>
                
                <Link href="/realm2">
                  <Button variant="outline" className="w-full sm:w-auto border-blue-500 text-blue-400">
                    Return to Realm 2
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-blue-300 font-medium">You've completed all missions in the Surveillance City!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/map">
                  <Button
                    className="w-full sm:w-auto"
                    style={{
                      background: citadelTheme.gradients.blue,
                      boxShadow: citadelTheme.shadows.button,
                    }}
                  >
                    Return to Map
                  </Button>
                </Link>
                
                <Link href="/realm2">
                  <Button variant="outline" className="w-full sm:w-auto border-blue-500 text-blue-400">
                    Return to Realm 2
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
        background: `linear-gradient(to bottom, ${citadelTheme.colors.background}, ${citadelTheme.colors.backgroundLight})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/realm2">
            <a className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span>Back to Realm 2</span>
            </a>
          </Link>
          
          <div className="text-blue-300 text-sm font-medium">
            Mission {missionId !== null ? missionId % 200 : 0} of {realm2Missions.length}
          </div>
        </div>
        
        <div className="relative">
          {/* City grid background */}
          <div className="absolute inset-0 opacity-5" 
            style={{ 
              backgroundImage: citadelTheme.patterns.circuits,
              backgroundSize: '200px 200px',
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