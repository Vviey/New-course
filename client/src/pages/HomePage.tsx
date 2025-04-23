import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/hooks/use-auth';
import { originTheme } from '@/lib/realm-themes';
import { OriginsBackground } from '@/components/ui/origins-background';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from '@react-spring/web';

// SVG patterns for parallax layers
const SvgPattern1 = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="adinkra1" patternUnits="userSpaceOnUse" width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="#EE720B" strokeWidth="1" fill="none" opacity="0.2"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#adinkra1)" />
  </svg>
);

const SvgPattern2 = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="adinkra2" patternUnits="userSpaceOnUse" width="80" height="80">
        <path d="M40,0 L80,40 L40,80 L0,40 Z" stroke="#FFC567" strokeWidth="1" fill="none" opacity="0.15"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#adinkra2)" />
  </svg>
);

const SvgPattern3 = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="adinkra3" patternUnits="userSpaceOnUse" width="120" height="120">
        <circle cx="60" cy="60" r="30" stroke="#FBF4D2" strokeWidth="1" fill="none" opacity="0.1"/>
        <circle cx="60" cy="60" r="20" stroke="#FBF4D2" strokeWidth="1" fill="none" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#adinkra3)" />
  </svg>
);

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
  const { user, isLoading } = useAuth();
  const [realms, setRealms] = useState<Realm[]>([]);
  const [loadingRealms, setLoadingRealms] = useState(true);
  const parallaxRef = useRef<any>(null);
  
  // Animation for title
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
    config: { tension: 180, friction: 12 }
  });
  
  // Animation for subtitle
  const subtitleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 800,
    config: { tension: 180, friction: 12 }
  });
  
  // Animation for button
  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 1300,
    config: { tension: 200, friction: 12 }
  });
  
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
  
  const scrollToRealms = () => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(1.5);
    }
  };
  
  return (
    <div style={{ 
      height: '100vh', 
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #1A1814 0%, #302922 100%)'
    }}>
      <Parallax ref={parallaxRef} pages={3} style={{ top: '0', left: '0' }}>
        {/* Background layers */}
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ 
          backgroundImage: 'linear-gradient(to bottom, #1A1814 0%, #302922 50%, #222 100%)'
        }} />
        
        <ParallaxLayer offset={0} speed={0.5} factor={1.5}>
          <SvgPattern1 />
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.3} speed={0.8} factor={1}>
          <SvgPattern2 />
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.5} speed={1.2} factor={1}>
          <SvgPattern3 />
        </ParallaxLayer>
        
        {/* Hero section */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
          }}>
          <div className="max-w-6xl mx-auto px-4 text-center" style={{ pointerEvents: 'auto' }}>
            <animated.h1 
              style={titleAnimation}
              className="text-5xl md:text-7xl font-bold mb-6 text-white font-lora drop-shadow-lg"
            >
              Bitcoin Quest
            </animated.h1>
            
            <animated.p 
              style={subtitleAnimation}
              className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto drop-shadow-md"
            >
              Join Asha on her journey through the realms of money, from ancient trade 
              to the future of Bitcoin in Africa
            </animated.p>
            
            {!user && !isLoading && (
              <animated.div style={buttonAnimation} className="mt-10">
                <button 
                  onClick={handleLogin}
                  className="btn-origins text-lg py-4 px-8 mr-4"
                >
                  Begin Your Journey
                </button>
                
                <button 
                  onClick={scrollToRealms}
                  className="btn-origins-outline text-lg py-4 px-8 border-2 border-amber-500 bg-transparent text-amber-100 hover:bg-amber-500/20"
                >
                  Explore Realms
                </button>
              </animated.div>
            )}
            
            {user && (
              <animated.div style={buttonAnimation} className="mt-10">
                <button 
                  onClick={scrollToRealms}
                  className="btn-origins text-lg py-4 px-8"
                >
                  Continue Journey
                </button>
              </animated.div>
            )}
          </div>
        </ParallaxLayer>
        
        {/* Scrolling guide */}
        <ParallaxLayer
          offset={0.85}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
          }}>
          <div className="text-center text-amber-200/50">
            <p>Scroll down to explore</p>
            <svg 
              className="w-6 h-6 mx-auto mt-2 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </ParallaxLayer>
        
        {/* Realms section */}
        <ParallaxLayer
          offset={1.35}
          speed={0.2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-amber-100 font-lora">
              Explore the Realms
            </h2>
            
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
                    className={`realm-card rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
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
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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
                          className={`w-full py-2 rounded-lg text-center text-sm font-medium transition-colors 
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
        </ParallaxLayer>
        
        {/* Features section */}
        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-amber-100 font-lora">
              Journey Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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
              
              <div className="bg-gray-800/50 p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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
              
              <div className="bg-gray-800/50 p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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
          
          {/* Footer */}
          <footer className="bg-gray-900/70 py-8 mt-12">
            <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
              <p>Bitcoin Quest - Asha's Journey Through the Realms of Money</p>
              <p className="text-sm mt-2">A gamified educational platform for learning about Bitcoin and monetary systems</p>
            </div>
          </footer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}