import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { ThemeContainer, ThemeHeading, GradientButton, OutlineButton } from '@/components/ui/theme';
import { ShareButton } from '@/components/ui/share-button';
import { NavBar } from '@/components/ui/nav-bar';
import { MissionCard } from '@/components/ui/mission-card';
import { ProgressChain } from '@/components/ui/progress-chain';
import { INITIAL_REALMS } from '@/lib/constants';
import { RealmData, missionData } from '@/lib/realm-data';

export default function RealmPage() {
  const { id } = useParams<{ id: string }>();
  const realmId = parseInt(id || '1');
  const [, setLocation] = useLocation();
  
  // Find the current realm
  const currentRealm = INITIAL_REALMS.find(realm => realm.id === realmId) || INITIAL_REALMS[0];
  
  // Get realm-specific data 
  const realmData = RealmData.find(realm => realm.id === realmId) || RealmData[0];
  
  // Get missions for this realm
  const missions = missionData.filter(mission => mission.realmId === realmId);
  
  // Calculate progress (for example purposes)
  const progress = {
    completed: 0,
    total: missions.length,
    percentage: 0
  };
  
  // Theme classes based on realm
  const getRealmThemeClasses = () => {
    switch(realmId) {
      case 1: // Origins
        return {
          bg: 'bg-gradient-to-b from-amber-900/80 to-amber-950',
          text: 'text-amber-200',
          accent: 'border-amber-500',
          cardBg: 'bg-amber-950/90'
        };
      case 2: // Forest of Sparks
        return {
          bg: 'bg-gradient-to-b from-emerald-900/80 to-emerald-950',
          text: 'text-emerald-200',
          accent: 'border-emerald-500',
          cardBg: 'bg-emerald-950/90'
        };
      case 3: // Central Citadel
        return {
          bg: 'bg-gradient-to-b from-indigo-900/80 to-indigo-950',
          text: 'text-indigo-200',
          accent: 'border-indigo-500',
          cardBg: 'bg-indigo-950/90'
        };
      case 4: // Council of Forks
        return {
          bg: 'bg-gradient-to-b from-purple-900/80 to-purple-950',
          text: 'text-purple-200',
          accent: 'border-purple-500',
          cardBg: 'bg-purple-950/90'
        };
      case 5: // Ubuntu Village
        return {
          bg: 'bg-gradient-to-b from-red-900/80 to-red-950',
          text: 'text-red-200',
          accent: 'border-red-500',
          cardBg: 'bg-red-950/90'
        };
      default:
        return {
          bg: 'bg-gradient-to-b from-gray-900/80 to-gray-950',
          text: 'text-gray-200',
          accent: 'border-gray-500',
          cardBg: 'bg-gray-950/90'
        };
    }
  };
  
  const themeClasses = getRealmThemeClasses();
  
  return (
    <ThemeContainer className={`min-h-screen ${themeClasses.bg}`}>
      <NavBar />
      
      {/* Header with back button */}
      <header className="container mx-auto px-4 py-4">
        <button 
          onClick={() => setLocation('/')} 
          className={`flex items-center ${themeClasses.text} hover:text-primary transition-colors`}
        >
          <span className="mr-1">←</span> Back to Realms
        </button>
      </header>
      
      {/* Realm Header */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3 lg:w-1/4">
            <img 
              src={currentRealm.imageUrl} 
              alt={currentRealm.name} 
              className="w-full aspect-square object-contain rounded-lg shadow-lg border border-secondary/20"
            />
          </div>
          <div className="md:w-2/3 lg:w-3/4 text-center md:text-left">
            <div className="inline-block mb-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
              Module {currentRealm.moduleNumber}
            </div>
            <ThemeHeading level={1} className="mb-3">{currentRealm.name}</ThemeHeading>
            <p className={`${themeClasses.text} mb-4 text-lg`}>
              {realmData.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-3">
              <div className={`inline-flex items-center ${themeClasses.text} text-sm`}>
                <span className="mr-2">🌟</span>
                <span>Emotional Tone: {realmData.emotionalTone}</span>
              </div>
              <div className={`inline-flex items-center ${themeClasses.text} text-sm`}>
                <span className="mr-2">🏞️</span>
                <span>Setting: {realmData.setting}</span>
              </div>
              <div className={`inline-flex items-center ${themeClasses.text} text-sm`}>
                <span className="mr-2">📖</span>
                <span>Focus: {realmData.focus}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <ShareButton 
                title={`I'm exploring ${currentRealm.name} in Bitcoin Quest!`}
                text={`I'm learning about Bitcoin in the ${currentRealm.name}: ${realmData.description}`}
                hashtags={['BitcoinQuest', 'BitcoinEducation']}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Progress Indicator */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-darkBg/50 rounded-lg p-4 mb-8">
          <h2 className={`${themeClasses.text} text-xl font-bold mb-3`}>Your Journey Progress</h2>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
            <div>
              <p className="text-lightText/70">Completed {progress.completed} of {progress.total} missions</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${progress.percentage}%` }}
                ></div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-primary font-bold">{progress.percentage}%</span>
            </div>
          </div>
          
          {realmId === 5 && (
            <div className="mt-4 text-center">
              <GradientButton onClick={() => setLocation('/map/africa')}>
                View Bitcoin in Africa Map
              </GradientButton>
            </div>
          )}
        </div>
      </section>
      
      {/* Mission Map Section */}
      <section className="container mx-auto px-4 py-6">
        <ThemeHeading level={2} className="mb-6 text-center">Mission Map</ThemeHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {missions.map((mission) => (
            <MissionCard 
              key={mission.id}
              mission={mission}
              themeClasses={themeClasses}
              onClick={() => setLocation(`/mission/${mission.id}`)}
            />
          ))}
        </div>
      </section>
      
      {/* Realm Badge Showcase */}
      <section className="container mx-auto px-4 py-8 mb-12">
        <ThemeHeading level={2} className="mb-6 text-center">Realm Badges</ThemeHeading>
        <div className="flex flex-wrap justify-center gap-4">
          {realmData.badges.map((badge, index) => (
            <div 
              key={index}
              className={`${themeClasses.cardBg} border ${themeClasses.accent}/20 rounded-lg p-4 w-32 text-center ${!badge.earned ? 'opacity-50' : ''}`}
            >
              <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <img 
                  src={badge.imageUrl || '/placeholder-badge.svg'} 
                  alt={badge.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className={`${themeClasses.text} font-bold text-sm`}>{badge.name}</h3>
              <p className="text-lightText/60 text-xs mt-1">
                {badge.earned ? 'Earned!' : 'Not yet earned'}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ThemeContainer>
  );
}