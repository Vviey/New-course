import { useQuery } from '@tanstack/react-query';
import { ThemeContainer, ThemeHeading, ThemeCard, GradientButton } from '@/components/ui/theme';
import { NavBar } from '@/components/ui/nav-bar';
import { ProgressChain } from '@/components/ui/progress-chain';
import { useAuth } from '@/context/AuthContext';
import { INITIAL_REALMS, REWARDS } from '@/lib/constants';
import { Link } from 'wouter';

export default function MapPage() {
  const { user } = useAuth();

  // Fetch realms from API
  const { data: realms = INITIAL_REALMS, isLoading: realmsLoading } = useQuery({
    queryKey: ['/api/realms'],
    enabled: !!user
  });

  // Calculate progress based on user data
  const progress = user?.progress?.chain?.progress || 35; // Default to 35% for visual purposes
  const currentRealmId = user?.progress?.currentRealm || 3;
  const completedRealms = user?.progress?.completedRealms || [1, 2];

  // Prepare data for the progress chain
  const chainNodes = realms.map(realm => ({
    id: realm.moduleNumber,
    name: realm.name,
    status: completedRealms.includes(realm.id) 
      ? 'completed' 
      : (realm.id === currentRealmId ? 'active' : 'locked')
  }));

  // Current realm details
  const currentRealm = realms.find(realm => realm.id === currentRealmId);

  return (
    <ThemeContainer>
      <NavBar />
      
      {/* Map Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <ThemeHeading level={1} className="mb-3">Your Journey Map</ThemeHeading>
          <p className="text-lightText/80 max-w-2xl mx-auto">
            Follow the glowing chain to track your progress through the realms of money.
          </p>
        </div>
        
        {/* Progress Chain */}
        <div className="max-w-5xl mx-auto relative py-8">
          {realmsLoading ? (
            <div className="text-center py-10">
              <p>Loading map...</p>
            </div>
          ) : (
            <ProgressChain progress={progress} nodes={chainNodes} />
          )}
        </div>
        
        {/* Current Realm Details */}
        {currentRealm && (
          <ThemeCard className="max-w-4xl mx-auto mt-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src={currentRealm.imageUrl} 
                  alt={currentRealm.name} 
                  className="w-full h-48 rounded-lg object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <ThemeHeading level={2} className="mb-3">{currentRealm.name}</ThemeHeading>
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
                <Link to={`/realm/${currentRealm.id}`}>
                  <GradientButton className="inline-block w-auto px-6">
                    Continue Journey
                  </GradientButton>
                </Link>
              </div>
            </div>
          </ThemeCard>
        )}
        
        {/* Rewards Section */}
        <div className="max-w-4xl mx-auto mt-12">
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
                <div className="w-16 h-16 mx-auto mb-2">
                  {reward.imageUrl ? (
                    <img 
                      src={reward.imageUrl} 
                      alt={reward.name} 
                      className={`w-full h-full object-contain ${!reward.isEarned && 'opacity-30'}`}
                    />
                  ) : (
                    <i className="fas fa-question-circle text-lightText/20 text-5xl mt-2"></i>
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
