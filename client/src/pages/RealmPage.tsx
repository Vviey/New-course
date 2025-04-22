import { useParams, useLocation } from 'wouter';
import { MissionCard } from '@/components/ui/mission-card';
import { RealmData, missionData } from '@/lib/realm-data';

// For demonstration, we'll create some sample missions that match the third image
const demoMissions = [
  {
    title: 'The First Exchange',
    description: 'Learn about barter systems.',
    missionId: 101,
    isCompleted: false,
    isLocked: false
  },
  {
    title: 'Cowries and Gold Dust',
    description: 'Explore African traditional currencies',
    missionId: 102,
    isCompleted: false,
    isLocked: false
  },
  {
    title: 'Enter the Colonial Coin',
    description: 'Discover colonial currency disruption',
    missionId: 103,
    isCompleted: false,
    isLocked: false
  },
  {
    title: 'Rise of the Nation-State Currency',
    description: 'Fiat and inflation emerge',
    missionId: 104,
    isCompleted: false,
    isLocked: false
  },
  {
    title: 'Knowledge Test: Ancient to Modern Money',
    description: 'Test your knowledge of the history of money',
    missionId: 105,
    isCompleted: false,
    isLocked: false
  }
];

export default function RealmPage() {
  const { id } = useParams<{ id: string }>();
  const realmId = parseInt(id || '1');
  const [, setLocation] = useLocation();
  
  // Get realm-specific data 
  const currentRealm = RealmData.find(realm => realm.id === realmId) || RealmData[0];
  
  // Get background image based on realm ID
  const getBackgroundStyle = () => {
    switch(realmId) {
      case 1: // Origins - matched to the third image
        return { 
          backgroundImage: "url('https://bitcoiners.africa/wp-content/uploads/2025/04/realm-1.png')",
          backgroundColor: "#B45309" // amber-700 as fallback
        };
      case 2: // Forest of Sparks
        return { 
          backgroundImage: "url('https://bitcoiners.africa/wp-content/uploads/2025/04/realm-2.png')",
          backgroundColor: "#065F46" // emerald-800 as fallback
        };
      case 3: // Central Citadel
        return { 
          backgroundImage: "url('https://bitcoiners.africa/wp-content/uploads/2025/04/realm-3.png')",
          backgroundColor: "#3730A3" // indigo-800 as fallback
        };
      case 4: // Council of Forks
        return { 
          backgroundImage: "url('https://bitcoiners.africa/wp-content/uploads/2025/04/realm-4.png')",
          backgroundColor: "#5B21B6" // purple-800 as fallback
        };
      case 5: // Ubuntu Village
        return { 
          backgroundImage: "url('https://bitcoiners.africa/wp-content/uploads/2025/04/realm-5.png')",
          backgroundColor: "#B91C1C" // red-700 as fallback
        };
      default:
        return { 
          backgroundImage: "url('/backgrounds/realm-default-bg.jpg')",
          backgroundColor: "#1F2937" // gray-800 as fallback
        };
    }
  };
  
  const backgroundStyle = getBackgroundStyle();

  return (
    <div 
      className="min-h-screen bg-cover bg-center text-amber-100"
      style={{
        backgroundImage: backgroundStyle.backgroundImage,
        backgroundColor: backgroundStyle.backgroundColor
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
      
      {/* Main content - grid of missions */}
      <main className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoMissions.map((mission) => (
              <MissionCard
                key={mission.missionId}
                title={mission.title}
                description={mission.description}
                isCompleted={mission.isCompleted}
                isLocked={mission.isLocked}
                missionId={mission.missionId}
              />
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