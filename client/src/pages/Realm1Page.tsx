import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { originTheme } from '@/lib/realm-themes';
import { missionData } from '@/lib/realm-data';
import { useOffline } from '@/context/OfflineContext';
import { MissionCard } from '@/components/ui/mission-card';
import { ProgressIndicator } from '@/components/ui/progress-indicator';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface Mission {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: number;
  points: number;
}

export default function Realm1Page() {
  const [, setLocation] = useLocation();
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<'story' | 'missions'>('story');
  const [progress, setProgress] = useState<number>(25); // Mock progress - 25% for demo
  const [activeTheme, setActiveTheme] = useState<string>('origins');
  const { isOffline, hasCachedContent } = useOffline();
  
  // Use the Origins theme colors
  const theme = originTheme;
  
  // Handle theme change
  const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme);
    // In a real app, this would apply a different theme
    console.log(`Changed theme to: ${newTheme}`);
  };

  useEffect(() => {
    // Get missions for Realm 1
    setLoading(true);
    const realm1Missions = missionData.filter(m => m.realmId === 1);
    setMissions(realm1Missions);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.backgroundLight }}>
      {/* Header with sunset gradient and pattern overlay */}
      <header className="relative overflow-hidden" style={{ 
        background: `linear-gradient(to bottom, ${theme.colors.gradientStart}, ${theme.colors.gradientEnd})`,
        height: "280px" 
      }}>
        {/* Background pattern */}
        <div className="absolute inset-0 origins-pattern opacity-20"></div>
        
        {/* Sun/circle element */}
        <div className="absolute right-10 top-10 w-40 h-40 rounded-full bg-yellow-300 opacity-70 blur-sm"></div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
          <button 
            onClick={() => setLocation('/')}
            className="absolute top-6 left-4 flex items-center text-white hover:text-amber-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back</span>
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-lora">Realm of Origins</h1>
          <p className="text-xl text-amber-100 max-w-2xl mb-6">
            Discover the foundational stories of money at the grand trade festival, where bartering and early forms of value exchange began.
          </p>
          
          {/* Progress Bar */}
          <div className="mt-2 max-w-lg">
            <ProgressIndicator 
              progress={progress} 
              label="Realm Progress" 
              theme="origins"
            />
          </div>
          
          {/* Settings/Theme area (small screens only) */}
          <div className="md:hidden mt-6 bg-amber-900/50 p-2 rounded-lg">
            <p className="text-sm text-amber-200 mb-2">Theme Style:</p>
            <ThemeToggle
              onChange={handleThemeChange}
              defaultTheme="origins"
              availableThemes={['origins']}
            />
          </div>
        </div>
      </header>

      {/* Content tabs */}
      <div className="bg-amber-900 text-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 -mb-px">
            <button
              className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                activeSection === 'story'
                  ? `border-${theme.colors.primaryAccent} text-${theme.colors.highlight}`
                  : 'border-transparent hover:border-amber-700'
              }`}
              onClick={() => setActiveSection('story')}
            >
              Realm Story
            </button>
            <button
              className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                activeSection === 'missions'
                  ? `border-${theme.colors.primaryAccent} text-${theme.colors.highlight}`
                  : 'border-transparent hover:border-amber-700'
              }`}
              onClick={() => setActiveSection('missions')}
            >
              Missions
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Theme selector - visible on medium screens and up */}
        <div className="hidden md:block mb-6">
          <div className="bg-amber-900/30 p-3 rounded-lg inline-block">
            <div className="flex items-center gap-4">
              <span className="text-sm" style={{ color: theme.colors.darkText }}>Visual Theme:</span>
              <ThemeToggle
                onChange={handleThemeChange}
                defaultTheme="origins"
                availableThemes={['origins']}
              />
            </div>
          </div>
        </div>
        
        {activeSection === 'story' ? (
          <div className="bg-origins-card p-6 rounded-xl">
            <div style={{ color: theme.colors.darkText }}>
              <h2 className="text-2xl font-semibold mb-4 font-lora">The Trade Festival at Sunset</h2>
              
              <div className="mb-6 prose prose-lg max-w-none">
                <p>
                  Asha steps into the vibrant marketplace as the warm glow of sunset bathes everything in golden light. 
                  The air is filled with the sounds of traders calling out their wares, the rhythmic beat of drums, 
                  and the laughter of children playing between stalls adorned with colorful fabrics.
                </p>
                
                <p className="mt-4">
                  At the entrance to the festival, an elder greets her. "Welcome to the Festival of Exchange, 
                  where our ancestors first learned the dance of trade," he says with a warm smile. 
                  "Before coins and paper notes, people traded directly - goods for goods, services for items."
                </p>
                
                <p className="mt-4">
                  Asha notices people exchanging beautiful shells for woven baskets, salt for metal tools, and 
                  vibrant fabrics for clay pots. Each item seems to have a different value, and people are 
                  negotiating with animated gestures and friendly debate.
                </p>
                
                <p className="mt-4">
                  "The challenge of bartering," the elder explains, "was finding someone who wanted exactly what you had to offer, 
                  and who had exactly what you wanted in return. This was called the 'double coincidence of wants'."
                </p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button 
                  className="btn-origins"
                  onClick={() => setActiveSection('missions')}
                >
                  Begin Your Journey Through The Realm
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold font-lora" style={{ color: theme.colors.darkText }}>
                Available Missions
              </h2>
              
              {/* Offline status button */}
              <button 
                className={`px-4 py-2 rounded-full flex items-center space-x-2 text-sm ${
                  isOffline 
                    ? 'bg-red-600 text-white' 
                    : hasCachedContent 
                      ? 'bg-green-600 text-white' 
                      : `bg-${theme.colors.primaryAccent} text-white`
                }`}
                onClick={() => setLocation('/offline-settings')}
              >
                {isOffline ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88a3 3 0 01.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8.303-.14.597-.226.882a1 1 0 001.893.632c.062-.187.12-.38.19-.579a.988.988 0 00.076-.419z" />
                    </svg>
                    <span>Offline Mode</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <span>{hasCachedContent ? 'Available Offline' : 'Download for Offline'}</span>
                  </>
                )}
              </button>
            </div>
            
            {loading ? (
              <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2" 
                  style={{ borderColor: theme.colors.primaryAccent }}></div>
                <p className="mt-4" style={{ color: theme.colors.darkText }}>Loading missions...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {missions.map((mission, index) => (
                  <MissionCard
                    key={mission.id}
                    id={mission.id}
                    title={mission.title}
                    description={mission.description}
                    imageUrl={mission.imageUrl}
                    duration={mission.duration}
                    points={mission.points}
                    isRecommended={index === 0}
                    isCompleted={index === 1}
                    isLocked={false}
                    realmId={1}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}