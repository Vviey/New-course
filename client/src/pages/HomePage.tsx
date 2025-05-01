<<<<<<< HEAD
import { Link, useLocation } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/context/AuthContext';
import { RealmData } from '@/lib/realm-data';

export default function HomePage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();

  // For now, use the static data instead of API calls
  const { data: realms = RealmData, isLoading, error } = useQuery({
    queryKey: ['/api/realms'],
    queryFn: () => Promise.resolve(RealmData),
    enabled: true
  });

  const handleRealmClick = (realmId: number, isLocked: boolean) => {
    if (!isLocked) {
      // For Realm 1, go directly to the story introduction
      if (realmId === 1) {
        setLocation('/realm/1/story');
      } else {
        setLocation(`/realm/${realmId}`);
      }
    }
  };

  // Helper function for module label display
  const getModuleLabel = (focus: string, moduleNumber: number) => {
    return `${moduleNumber}. ${focus}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-800 to-amber-950 text-amber-100 pb-16">
      {/* Top navigation icons */}
      <header className="py-4 px-6 flex justify-end items-center">
        <div className="flex space-x-4">
          <button 
            className="w-10 h-10 rounded-full bg-amber-800/50 flex items-center justify-center hover:bg-amber-800"
            onClick={() => setLocation('/map')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-amber-800/50 flex items-center justify-center hover:bg-amber-800"
            onClick={() => setLocation('/badges')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-amber-800/50 flex items-center justify-center hover:bg-amber-800"
            onClick={() => {/* Toggle sound */}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071a1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243a1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main title */}
      <div className="container mx-auto text-center mb-12 pt-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-300 font-serif">
          ASHA'S JOURNEY
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-amber-200 tracking-wider mt-2 font-serif">
          THROUGH THE REALMS OF MONEY
        </h2>
      </div>

      {/* Character image & realms grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 relative">
          {/* Character image - only shown on medium screens and up */}
          <div className="hidden md:block absolute left-0 top-0 h-full">
            <img 
              src="/asha-character.png" 
              alt="Asha" 
              className="h-full object-contain" 
            />
          </div>

          {/* Realms Grid */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 md:pl-32">
            {isLoading ? (
              <div className="text-center py-10 col-span-3">
                <p>Loading realms...</p>
              </div>
            ) : error ? (
              <div className="text-center py-10 text-red-400 col-span-3">
                <p>Error loading realms. Please try again.</p>
              </div>
            ) : (
              realms.map((realm) => (
                <div 
                  key={realm.id} 
                  className={`realm-card bg-cover bg-center rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 
                    ${realm.isLocked ? 'opacity-80 filter grayscale' : 'hover:scale-105'}`}
                  style={{ height: '200px', backgroundImage: `url('/realms/realm-${realm.id}.jpg')` }}
                  onClick={() => handleRealmClick(realm.id, realm.isLocked)}
                >
                  <div className="h-full w-full flex flex-col justify-between p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="text-center mt-2">
                      <h3 className="text-xl font-bold text-amber-300 font-serif">{realm.name}</h3>
                    </div>
                    
                    <div className={`rounded-md p-2 text-center mb-2 w-full 
                      ${realm.isLocked ? 'bg-gray-800/70' : 'bg-amber-800/70'}`}>
                      <span className={`text-sm font-medium
                        ${realm.isLocked ? 'text-gray-400' : 'text-amber-200'}`}>
                        {getModuleLabel(realm.focus, realm.moduleNumber)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom navigation buttons */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-6">
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
          onClick={() => setLocation('/badges')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>My Badges</span>
        </button>
      </div>
=======
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/hooks/use-auth';
import { originTheme } from '@/lib/realm-themes';
import { OriginsBackground } from '@/components/ui/origins-background';

interface Realm {
  id: number;
  name: string;
  description: string;
  moduleNumber: number;
  imageUrl: string;
  isLocked: boolean;
}

export default function HomePage() {
  const [, setLocation] = useLocation();
  const { user, isLoading, loginMutation } = useAuth();
  const [realms, setRealms] = useState<Realm[]>([]);
  const [loadingRealms, setLoadingRealms] = useState(true);
  const theme = originTheme;
  
  // Fetch realms when component mounts
  useEffect(() => {
    async function fetchRealms() {
      try {
        const response = await fetch('/api/realms');
        if (response.ok) {
          const data = await response.json();
          setRealms(data);
        } else {
          console.error('Failed to fetch realms');
        }
      } catch (error) {
        console.error('Error fetching realms:', error);
      } finally {
        setLoadingRealms(false);
      }
    }
    
    fetchRealms();
  }, []);
  
  // If user is logged in but has never seen the intro, redirect to intro page
  useEffect(() => {
    if (user && !localStorage.getItem('seenIntro')) {
      localStorage.setItem('seenIntro', 'true');
      setLocation('/intro');
    }
  }, [user, setLocation]);
  
  const handleRealmSelect = (realmId: number, isLocked: boolean) => {
    if (isLocked) {
      // TODO: Show "locked" message
      return;
    }
    
    setLocation(`/realm/${realmId}`);
  };
  
  const handleLogin = () => {
    setLocation('/auth');
  };
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1A1814' }}>
      {/* Hero section */}
      <OriginsBackground
        patternType="adinkra"
        opacity={0.1}
        withGradient
        className="pt-20 pb-32 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-lora">
              Bitcoin Quest
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
              Join Asha on her journey through the realms of money, from ancient trade to the future of Bitcoin in Africa
            </p>
            
            {!user && !isLoading ? (
              <div className="mt-8">
                <button 
                  onClick={handleLogin}
                  className="btn-origins text-lg py-4 px-8"
                >
                  Begin Your Journey
                </button>
              </div>
            ) : (
              <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setLocation('/journey')}
                  className="btn-origins text-lg py-4 px-8 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Explore Interactive Journey
                </button>
                <button 
                  onClick={() => setLocation('/realm/1')}
                  className="bg-transparent border-2 border-amber-500 text-amber-100 hover:bg-amber-500/20 text-lg py-4 px-8 rounded-full transition-colors"
                >
                  Start First Realm
                </button>
              </div>
            )}
          </div>
        </div>
      </OriginsBackground>
      
      {/* Realms section */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loadingRealms ? (
            // Loading placeholders
            [...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-800 animate-pulse rounded-xl h-80"
              />
            ))
          ) : (
            // Actual realm cards
            realms.map((realm) => (
              <div
                key={realm.id}
                className={`realm-card rounded-xl overflow-hidden shadow-lg ${
                  realm.isLocked && user ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
                }`}
                onClick={() => handleRealmSelect(realm.id, realm.isLocked && !!user)}
              >
                {/* Realm image */}
                <div className="h-40 bg-gray-700 relative">
                  {realm.imageUrl ? (
                    <img 
                      src={realm.imageUrl} 
                      alt={realm.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-amber-300">
                      <span>Realm {realm.moduleNumber}</span>
                    </div>
                  )}
                  
                  {/* Locked badge */}
                  {realm.isLocked && user && (
                    <div className="absolute top-3 right-3 bg-gray-800 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Locked
                    </div>
                  )}
                  
                  {/* Module number badge */}
                  <div className="absolute bottom-3 left-3 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                    Module {realm.moduleNumber}
                  </div>
                </div>
                
                {/* Realm content */}
                <div className="p-6 bg-gray-800">
                  <h3 className="text-lg font-bold mb-2 text-amber-100 font-lora">
                    {realm.name}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {realm.description}
                  </p>
                  
                  {/* View button */}
                  <div className="mt-4">
                    <button 
                      className={`w-full py-2 rounded-lg text-center text-sm font-medium 
                        ${realm.isLocked && user 
                          ? 'bg-gray-700 text-gray-400' 
                          : 'bg-amber-600 text-white hover:bg-amber-500'}
                      `}
                      disabled={realm.isLocked && !!user}
                    >
                      {realm.isLocked && user ? 'Locked' : 'Explore Realm'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Features section */}
      <div className="bg-amber-900/20 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-100 font-lora">
            Journey Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="bg-amber-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-100 font-lora">Story-Driven Learning</h3>
              <p className="text-gray-300">
                Follow Asha's journey through interactive narratives that teach complex Bitcoin concepts in an engaging way.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="bg-amber-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-100 font-lora">Earn Badges & Rewards</h3>
              <p className="text-gray-300">
                Complete missions to earn badges and rewards that track your progress through the Bitcoin knowledge journey.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="bg-amber-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-100 font-lora">Offline Learning</h3>
              <p className="text-gray-300">
                Download content for offline learning, perfect for areas with limited internet connectivity across Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>Bitcoin Quest - Asha's Journey Through the Realms of Money</p>
          <p className="text-sm mt-2">A gamified educational platform for learning about Bitcoin and monetary systems</p>
        </div>
      </footer>
>>>>>>> 0652a0db822258f9bfa7da88533be0a2088f509a
    </div>
  );
}