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
    </div>
  );
}