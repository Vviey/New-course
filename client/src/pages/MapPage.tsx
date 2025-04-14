import { useQuery } from '@tanstack/react-query';
import { ThemeContainer, ThemeHeading, ThemeCard, GradientButton, OutlineButton } from '@/components/ui/theme';
import { NavBar } from '@/components/ui/nav-bar';
import { INITIAL_REALMS, REWARDS } from '@/lib/constants';
import { Link, useLocation } from 'wouter';

export default function MapPage() {
  const [, setLocation] = useLocation();

  // Use mock data instead of API calls for now
  const { data: realms = INITIAL_REALMS, isLoading: realmsLoading } = useQuery<typeof INITIAL_REALMS>({
    queryKey: ['/api/realms'],
    queryFn: () => Promise.resolve(INITIAL_REALMS),
    enabled: true
  });

  // Mock progress data
  const progress = 35; // Default to 35% for visual purposes
  const currentRealmId = 3;
  const completedRealms = [1, 2];

  // Current realm details
  const currentRealm = realms.find((realm: { id: number }) => realm.id === currentRealmId);

  return (
    <ThemeContainer className="bg-darkBg">
      <NavBar />
      
      {/* Header with back button */}
      <header className="container mx-auto px-4 py-4">
        <button 
          onClick={() => setLocation('/')} 
          className="flex items-center text-secondary hover:text-primary"
        >
          <span className="mr-1">←</span> Back to Home
        </button>
      </header>
      
      {/* Map Content */}
      <div className="container mx-auto px-4 py-4">
        <div className="mb-8 text-center">
          <ThemeHeading level={1} className="mb-3">Asha's Journey Through the Realms of Money</ThemeHeading>
          <p className="text-lightText/80 max-w-2xl mx-auto">
            Follow the glowing chain to track your progress through the chapters of Asha's story
          </p>
        </div>
        
        {/* Progress Chain */}
        <div className="max-w-5xl mx-auto relative py-8">
          {realmsLoading ? (
            <div className="text-center py-10">
              <p>Loading map...</p>
            </div>
          ) : (
            <div className="chain-container w-full overflow-hidden relative">
              <img 
                src="/progress-chain.svg" 
                alt="Progress Chain" 
                className="w-full"
              />
            </div>
          )}
        </div>
        
        {/* Current Realm Details */}
        {currentRealm && (
          <ThemeCard className="max-w-4xl mx-auto mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src={currentRealm.imageUrl} 
                  alt={currentRealm.name} 
                  className="w-full h-48 rounded-lg object-contain"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <ThemeHeading level={2}>{currentRealm.name}</ThemeHeading>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Module {currentRealm.moduleNumber}</span>
                </div>
                <p className="text-lightText/90 mb-4">
                  You are currently exploring the towers of monetary power, where Asha is discovering how central banks influence the lives of everyone in her town.
                </p>
                <div className="mb-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: '35%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-lightText/60">
                    <span>Progress: 35%</span>
                    <span>2/6 Challenges Completed</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to={`/realm/${currentRealm.id}`}>
                    <GradientButton className="inline-block w-auto px-6">
                      Continue Journey
                    </GradientButton>
                  </Link>
                  <Link to="/">
                    <OutlineButton className="inline-block w-auto px-6">
                      View All Realms
                    </OutlineButton>
                  </Link>
                </div>
              </div>
            </div>
          </ThemeCard>
        )}
        
        {/* Rewards Section */}
        <div className="max-w-4xl mx-auto mt-12 mb-12">
          <ThemeHeading level={2} className="mb-6 text-center">Your Earned Rewards</ThemeHeading>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {REWARDS.map((reward) => (
              <div 
                key={reward.id}
                className={`${
                  reward.isEarned 
                    ? 'bg-darkBg border border-secondary/20' 
                    : 'bg-darkBg/50 border border-gray-700/20'
                } rounded-lg p-4 text-center`}
              >
                <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  {reward.imageUrl ? (
                    <img 
                      src={reward.imageUrl} 
                      alt={reward.name} 
                      className={`w-12 h-12 object-contain ${!reward.isEarned && 'opacity-30'}`}
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-lightText/20 text-xl">?</span>
                    </div>
                  )}
                </div>
                <h3 className={`font-cinzel ${
                  reward.isEarned ? 'text-secondary' : 'text-lightText/40'
                } font-bold text-sm`}>
                  {reward.name}
                </h3>
                <p className={`text-xs ${
                  reward.isEarned ? 'text-lightText/60' : 'text-lightText/30'
                }`}>
                  {reward.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ThemeContainer>
  );
}
