import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import { GlowingChain } from '@/components/ui/glowing-chain';
import { RealmData } from '@/lib/realm-data';

export default function MapPage() {
  const [, setLocation] = useLocation();

  // Get realm data from our lib
  const { data: realms = RealmData, isLoading: realmsLoading } = useQuery({
    queryKey: ['/api/realms'],
    queryFn: () => Promise.resolve(RealmData),
    enabled: true
  });

  // For the demo, we'll set realm 1 as completed and realm 2 as active
  const progress = 33; // 33% complete - 2 of 6 realms started
  const completedRealms = [1];
  const currentRealmId = 2;

  const handleNodeClick = (nodeId: number) => {
    if (completedRealms.includes(nodeId) || nodeId === currentRealmId) {
      setLocation(`/realm/${nodeId}`);
    } else {
      // We could add a toast notification here
      console.log("This realm is still locked. Complete previous realms to unlock.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-amber-100 py-8 px-4">
      {/* Header with back button */}
      <header className="max-w-6xl mx-auto mb-8">
        <button 
          onClick={() => setLocation('/home')} 
          className="flex items-center text-amber-300 hover:text-amber-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </button>
      </header>
      
      {/* Map Content */}
      <div className="max-w-6xl mx-auto">
        {realmsLoading ? (
          <div className="text-center py-10">
            <p>Loading journey map...</p>
          </div>
        ) : (
          <div className="chain-container w-full">
            <GlowingChain 
              progress={progress}
              nodes={realms.map(realm => ({
                id: realm.id,
                label: realm.name,
                realmId: realm.id,
                status: completedRealms.includes(realm.id) 
                  ? 'completed' 
                  : realm.id === currentRealmId 
                    ? 'active' 
                    : 'locked'
              }))}
              onNodeClick={handleNodeClick}
              className="w-full"
            />
          </div>
        )}
        
        {/* Additional info */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-medium text-amber-200 mb-3">Your Journey</h2>
          <p className="text-sm text-amber-100/70 mb-6">
            Follow the chain to navigate through Asha's journey across the realms of money. 
            Each link represents a chapter in her quest for understanding.
          </p>
          
          <div className="flex justify-center space-x-8 mt-8">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-400 mr-2"></div>
              <span className="text-amber-200 text-sm">Completed</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse mr-2"></div>
              <span className="text-amber-200 text-sm">Current</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-700 mr-2"></div>
              <span className="text-amber-200 text-sm">Locked</span>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => setLocation('/home')}
            className="px-5 py-2 bg-amber-800 rounded-full text-amber-200 font-semibold hover:bg-amber-700 transition-colors shadow-lg mx-2"
          >
            Return to Realms
          </button>
          
          <button 
            onClick={() => setLocation(`/realm/${currentRealmId}`)}
            className="px-5 py-2 bg-amber-600 rounded-full text-amber-100 font-semibold hover:bg-amber-500 transition-colors shadow-lg mx-2"
          >
            Continue Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
