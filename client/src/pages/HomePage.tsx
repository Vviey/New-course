import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { ThemeContainer, ThemeHeading, GradientButton, OutlineButton } from '@/components/ui/theme';
import { NavBar } from '@/components/ui/nav-bar';
import { RealmCard } from '@/components/ui/realm-card';
import { useAuth } from '@/context/AuthContext';
import { INITIAL_REALMS } from '@/lib/constants';

export default function HomePage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  // Fetch realms from API
  const { data: realms = INITIAL_REALMS, isLoading, error } = useQuery<typeof INITIAL_REALMS>({
    queryKey: ['/api/realms'],
    enabled: !!user
  });

  return (
    <ThemeContainer className="bg-darkBg min-h-screen">
      <NavBar />
      
      {/* Main heading - matching the UI from image */}
      <header className="container mx-auto px-4 py-8 text-center">
        <ThemeHeading level={1} className="text-4xl md:text-5xl lg:text-6xl">
          Asha's Journey Through the Realms of Money
        </ThemeHeading>
      </header>
      
      {/* Realm Grid - similar to the image provided */}
      <section className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="text-center py-10">
            <p>Loading realms...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-400">
            <p>Error loading realms. Please try again.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {realms.map((realm: { id: number, name: string, imageUrl: string, isLocked: boolean, moduleNumber: number }) => (
              <div key={realm.id} className="realm-item flex flex-col h-full">
                <div className="relative rounded-lg overflow-hidden mb-3 aspect-[4/3]">
                  <img 
                    src={realm.imageUrl} 
                    alt={realm.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBg to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="text-center">
                      <h3 className="text-xl font-cinzel font-bold text-secondary">{realm.name}</h3>
                    </div>
                    <div className="bg-darkBg bg-opacity-70 p-2 rounded text-center">
                      <span className={`text-xs ${realm.isLocked ? 'text-gray-400' : 'text-primary'} font-medium`}>
                        {realm.moduleNumber}. {realm.isLocked ? 'Locked' : 'Available'}
                      </span>
                    </div>
                  </div>
                </div>
                
                {!realm.isLocked && (
                  <Link to={`/realm/${realm.id}`} className="mt-auto">
                    <GradientButton className="w-full">
                      Enter Realm
                    </GradientButton>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Map button section */}
      <section className="container mx-auto px-4 py-8 mb-12 text-center">
        <div className="max-w-md mx-auto">
          <Link to="/map">
            <OutlineButton className="w-full py-4 text-lg">
              View Journey Map
            </OutlineButton>
          </Link>
          <p className="text-lightText/60 mt-2 text-sm">
            See your progress through Asha's story
          </p>
        </div>
      </section>
      
      {/* Character bio */}
      <section className="container mx-auto px-4 py-8 mb-12">
        <div className="max-w-4xl mx-auto bg-darkBg border border-secondary/20 rounded-lg p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3">
              <img 
                src="/asha-portrait.svg" 
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
      </section>
    </ThemeContainer>
  );
}
