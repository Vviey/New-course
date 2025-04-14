import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { ThemeContainer, ThemeHeading, GradientButton, OutlineButton } from '@/components/ui/theme';
import { NavBar } from '@/components/ui/nav-bar';
import { LessonCard } from '@/components/ui/lesson-card';
import { Challenge } from '@/components/ui/challenge';
import { Quiz } from '@/components/ui/quiz';
import { missionData } from '@/lib/realm-data';
import { INITIAL_REALMS } from '@/lib/constants';

// Mission learning stages
type Stage = 'intro' | 'lesson' | 'challenge' | 'quiz' | 'complete';

export default function MissionPage() {
  const { id } = useParams<{ id: string }>();
  const missionId = parseInt(id || '1');
  const [, setLocation] = useLocation();
  
  // Find the current mission
  const mission = missionData.find(m => m.id === missionId);
  
  // If no mission found, redirect to home
  useEffect(() => {
    if (!mission) setLocation('/');
  }, [mission, setLocation]);
  
  if (!mission) return null;
  
  // Find the realm this mission belongs to
  const realm = INITIAL_REALMS.find(r => r.id === mission.realmId);
  
  // Current learning stage
  const [stage, setStage] = useState<Stage>('intro');
  const [lessonIndex, setLessonIndex] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  
  // Theme classes based on realm
  const getRealmThemeClasses = () => {
    switch(mission.realmId) {
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
  
  const handleNextLesson = () => {
    if (lessonIndex < mission.lessons.length - 1) {
      setLessonIndex(lessonIndex + 1);
    } else {
      // All lessons complete, move to challenge
      setStage('challenge');
    }
  };
  
  const handlePrevLesson = () => {
    if (lessonIndex > 0) {
      setLessonIndex(lessonIndex - 1);
    }
  };
  
  const handleChallengeComplete = () => {
    setChallengeCompleted(true);
    // Move to quiz after challenge
    setStage('quiz');
  };
  
  const handleQuizComplete = () => {
    // Mission completed
    setStage('complete');
  };
  
  const handleContinueJourney = () => {
    // Navigate back to realm
    setLocation(`/realm/${mission.realmId}`);
  };
  
  return (
    <ThemeContainer className={`min-h-screen ${themeClasses.bg}`}>
      <NavBar />
      
      {/* Header with back button */}
      <header className="container mx-auto px-4 py-4">
        <button 
          onClick={() => setLocation(`/realm/${mission.realmId}`)} 
          className={`flex items-center ${themeClasses.text} hover:text-primary transition-colors`}
        >
          <span className="mr-1">←</span> Back to {realm?.name || 'Realm'}
        </button>
      </header>
      
      {/* Mission Content */}
      <div className="container mx-auto px-4 py-4 pb-16">
        {/* Mission Stage Content */}
        {stage === 'intro' && (
          <div className="max-w-3xl mx-auto">
            <div className={`${themeClasses.cardBg} border ${themeClasses.accent}/20 rounded-lg p-6 md:p-8`}>
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img 
                    src={mission.imageUrl || '/placeholder-mission.svg'} 
                    alt={mission.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <ThemeHeading level={1} className="mb-4 text-center">{mission.title}</ThemeHeading>
                <p className={`${themeClasses.text} text-lg mb-6 text-center`}>
                  {mission.description}
                </p>
              </div>
              
              <div className="bg-darkBg/30 rounded-lg p-4 mb-6 border border-secondary/10">
                <h3 className={`${themeClasses.text} font-bold mb-3`}>Mission Scenario</h3>
                <p className="text-lightText/90 mb-4">{mission.scenario}</p>
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center text-lightText/70 text-sm">
                    <span className="mr-2">📚</span>
                    <span>{mission.lessons.length} Lessons</span>
                  </div>
                  <div className="inline-flex items-center text-lightText/70 text-sm">
                    <span className="mr-2">🧩</span>
                    <span>{mission.challenges?.length || 1} Challenges</span>
                  </div>
                  <div className="inline-flex items-center text-lightText/70 text-sm">
                    <span className="mr-2">🎯</span>
                    <span>Final Quiz</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-darkBg/30 rounded-lg p-4 mb-6 border border-secondary/10">
                <h3 className={`${themeClasses.text} font-bold mb-3`}>You'll Earn</h3>
                <div className="flex items-center">
                  <div className="w-16 h-16 mr-4">
                    <img 
                      src={mission.badgeImageUrl || '/placeholder-badge.svg'} 
                      alt={mission.badgeName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{mission.badgeName}</h4>
                    <p className="text-lightText/70 text-sm">Complete all stages to earn this badge</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <GradientButton onClick={() => setStage('lesson')}>
                  Begin Mission
                </GradientButton>
              </div>
            </div>
          </div>
        )}
        
        {stage === 'lesson' && (
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`${themeClasses.text} font-bold`}>
                Lesson {lessonIndex + 1} of {mission.lessons.length}
              </h2>
              <div className="text-lightText/60 text-sm">
                {Math.round((lessonIndex / mission.lessons.length) * 100)}% Complete
              </div>
            </div>
            
            <div className="mb-4 w-full bg-gray-800 rounded-full h-1.5">
              <div 
                className="bg-primary h-1.5 rounded-full" 
                style={{ width: `${(lessonIndex / mission.lessons.length) * 100}%` }}
              ></div>
            </div>
            
            <LessonCard
              lesson={mission.lessons[lessonIndex]} 
              themeClasses={themeClasses}
            />
            
            <div className="mt-6 flex justify-between">
              <OutlineButton 
                onClick={handlePrevLesson}
                disabled={lessonIndex === 0}
                className={lessonIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Previous
              </OutlineButton>
              
              <GradientButton onClick={handleNextLesson}>
                {lessonIndex < mission.lessons.length - 1 ? 'Next Lesson' : 'Go to Challenge'}
              </GradientButton>
            </div>
          </div>
        )}
        
        {stage === 'challenge' && (
          <div className="max-w-3xl mx-auto">
            <Challenge
              challenge={mission.challenge}
              themeClasses={themeClasses}
              onComplete={handleChallengeComplete}
            />
          </div>
        )}
        
        {stage === 'quiz' && (
          <div className="max-w-3xl mx-auto">
            <Quiz
              quiz={mission.quiz}
              themeClasses={themeClasses}
              onComplete={handleQuizComplete}
            />
          </div>
        )}
        
        {stage === 'complete' && (
          <div className="max-w-3xl mx-auto">
            <div className={`${themeClasses.cardBg} border ${themeClasses.accent}/20 rounded-lg p-6 md:p-8 text-center`}>
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-primary">✓</span>
                </div>
                <ThemeHeading level={1} className="mb-4">Mission Complete!</ThemeHeading>
                <p className={`${themeClasses.text} text-lg mb-6`}>
                  Congratulations! You've successfully completed "{mission.title}"
                </p>
              </div>
              
              <div className="bg-darkBg/30 rounded-lg p-6 mb-6 border border-secondary/10">
                <h3 className={`${themeClasses.text} font-bold mb-4`}>Badge Earned</h3>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-4">
                    <img 
                      src={mission.badgeImageUrl || '/placeholder-badge.svg'} 
                      alt={mission.badgeName}
                      className="w-full h-full object-contain animate-pulse"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">{mission.badgeName}</h4>
                    <p className="text-lightText/70">{mission.badgeDescription}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <GradientButton onClick={handleContinueJourney}>
                  Continue Your Journey
                </GradientButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeContainer>
  );
}