import { useEffect } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { ThemeContainer, ThemeHeading, GradientButton, OutlineButton } from '@/components/ui/theme';
import { NavBar } from '@/components/ui/nav-bar';
import { RealmCard } from '@/components/ui/realm-card';
import { useAuth } from '@/context/AuthContext';
import { INITIAL_REALMS } from '@/lib/constants';

export default function HomePage() {
  const { user } = useAuth();

  // Fetch realms from API
  const { data: realms = INITIAL_REALMS, isLoading, error } = useQuery({
    queryKey: ['/api/realms'],
    enabled: !!user
  });

  return (
    <ThemeContainer>
      <NavBar />
      
      {/* Hero section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598077230333-4f52afb389fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
            alt="African landscape" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-transparent to-darkBg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <ThemeHeading level={1} className="mb-4">
              Asha's Journey Through the Realms of Money
            </ThemeHeading>
            <p className="text-lg text-lightText/90 mb-8">
              Walk alongside Asha as she discovers the truth about money, guided by the wisdom of Odu, through vibrant African towns where tradition and technology meet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="#realms">
                <GradientButton className="px-6">
                  Begin the Journey
                </GradientButton>
              </Link>
              <Link to="/map">
                <OutlineButton>
                  View the Path
                </OutlineButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Realms Section */}
      <section id="realms" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <ThemeHeading level={2} className="mb-3">The Realms of Discovery</ThemeHeading>
            <p className="text-lightText/80 max-w-2xl mx-auto">
              Each realm represents a chapter in Asha's journey to understanding money's past, present, and future.
            </p>
          </div>
          
          {isLoading ? (
            <div className="text-center py-10">
              <p>Loading realms...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-400">
              <p>Error loading realms. Please try again.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realms.map((realm) => (
                <RealmCard key={realm.id} realm={realm} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Story Preview */}
      <section className="py-12 sm:py-16 bg-darkBg/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-darkBg border border-secondary/20 rounded-lg p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1623941715531-03a8574005b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Asha's portrait" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <ThemeHeading level={2} className="mb-4">Meet Asha</ThemeHeading>
                <p className="text-lightText/90 mb-4">
                  "In a town where tradition and technology live side by side, Asha noticed small changes when her country began shifting from cash to digital systems. Questions began to form in her curious mind..."
                </p>
                <p className="text-lightText/90 mb-4">
                  "Who controls our money? What do we give up when everything becomes digital? Is there another way?"
                </p>
                <p className="text-lightText/90">
                  Join Asha on her quest for answers, guided by the mysterious elder Odu, who doesn't give her answers—but helps her find them herself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quest Map Preview */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <ThemeHeading level={2} className="mb-3">Your Quest Map</ThemeHeading>
          <p className="text-lightText/80 max-w-2xl mx-auto mb-8">
            Track your progress, see unlocked paths, and collect rewards as you journey through the realms.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Link to="/map">
              <div className="block relative bg-darkBg border border-secondary/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1536387242010-3c6479d91cea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Map preview" 
                  className="w-full h-60 object-cover opacity-30"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="bg-darkBg/80 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-xl font-cinzel font-bold text-secondary mb-2">Quest Map</h3>
                    <p className="text-lightText/80 mb-3">See your journey's path and progress</p>
                    <GradientButton className="py-2 px-4 text-sm">
                      View Full Map
                    </GradientButton>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </ThemeContainer>
  );
}
