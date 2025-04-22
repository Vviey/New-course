
import { useLocation } from 'wouter';
import { MissionCard } from '@/components/ui/mission-card';
import { missionData } from '@/lib/realm-data';

export default function Realm1Page() {
  const [, setLocation] = useLocation();
  
  // Filter missions for Realm 1
  const realmMissions = missionData.filter(mission => mission.realmId === 1);

  return (
    <div 
      className="min-h-screen bg-cover bg-center text-amber-100"
      style={{
        backgroundImage: "url('https://bitcoiners.africa/wp-content/uploads/2025/04/realm-1.png')",
        backgroundColor: "#B45309"
      }}
    >
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
            Realm of Origins
          </h1>
        </div>
      </header>
      
      <main className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {realmMissions.map((mission) => (
              <MissionCard
                key={mission.id}
                title={mission.title}
                description={mission.description}
                isCompleted={mission.isCompleted}
                isLocked={false}
                missionId={mission.id}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
