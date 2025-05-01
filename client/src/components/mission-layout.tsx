import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, Home } from 'lucide-react';

interface MissionLayoutProps {
  children: ReactNode;
  realmId: string | number;
  title?: string;
  subtitle?: string;
  progress?: number;
}

export default function MissionLayout({
  children,
  realmId,
  title = "Mission",
  subtitle = "",
  progress = 0
}: MissionLayoutProps) {
  const [, setLocation] = useLocation();
  const [scrollProgress, setScrollProgress] = useState(progress);
  
  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage
      const scrollPercentage = Math.min(
        100,
        Math.max(0, Math.round((scrollY / (documentHeight - windowHeight)) * 100))
      );
      
      // Only update if progress is higher than current or was passed in as 0
      if (progress === 0 || scrollPercentage > scrollProgress) {
        setScrollProgress(scrollPercentage);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [progress, scrollProgress]);
  
  const navigateToRealm = () => {
    setLocation(`/realm/${realmId}`);
  };
  
  return (
    <div className="min-h-screen bg-stone-900 text-amber-100 pb-24">
      {/* Header with navigation and progress */}
      <header className="bg-stone-900/80 backdrop-blur-md sticky top-0 z-10 border-b border-amber-900/30">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <button 
              onClick={navigateToRealm}
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Realm {realmId}</span>
            </button>
            
            <button 
              onClick={() => setLocation('/home')} 
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors text-sm"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1 mt-3 bg-amber-900/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-500 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </header>
      
      {/* Mission title section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">{title}</h1>
          {subtitle && <p className="text-amber-300/80">{subtitle}</p>}
        </div>
        
        {/* Mission content */}
        <div className="bg-stone-900/50 rounded-xl p-6 max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}