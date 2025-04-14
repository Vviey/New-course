import React from 'react';
import { GradientButton, OutlineButton } from './theme';

interface MissionCardProps {
  mission: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    isLocked: boolean;
    isCompleted: boolean;
    progress?: number;
  };
  themeClasses: {
    bg: string;
    text: string;
    accent: string;
    cardBg: string;
  };
  onClick: () => void;
}

export function MissionCard({ mission, themeClasses, onClick }: MissionCardProps) {
  const statusText = mission.isLocked 
    ? 'Locked' 
    : mission.isCompleted 
      ? 'Completed' 
      : 'In Progress';
      
  const statusClass = mission.isLocked 
    ? 'bg-gray-800 text-gray-400' 
    : mission.isCompleted 
      ? 'bg-green-800/40 text-green-300' 
      : 'bg-primary/20 text-primary';
  
  return (
    <div 
      className={`${themeClasses.cardBg} border border-secondary/20 rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-[1.02] ${mission.isLocked ? 'opacity-70' : ''}`}
    >
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <img 
            src={mission.imageUrl || '/placeholder-mission.svg'} 
            alt={mission.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-2 right-2">
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${statusClass}`}>
            {statusText}
          </span>
        </div>
        {mission.isCompleted && (
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-800 text-green-200">
              ✓
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className={`${themeClasses.text} font-bold text-lg mb-2`}>{mission.title}</h3>
        <p className="text-lightText/80 text-sm mb-4 flex-1">{mission.description}</p>
        
        {mission.progress !== undefined && !mission.isCompleted && !mission.isLocked && (
          <div className="mb-3">
            <div className="w-full bg-gray-800 rounded-full h-1.5">
              <div 
                className="bg-primary h-1.5 rounded-full" 
                style={{ width: `${mission.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-lightText/60">{mission.progress}%</span>
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          {mission.isLocked ? (
            <OutlineButton 
              className="w-full opacity-70 cursor-not-allowed"
              disabled
            >
              Unlock This Mission
            </OutlineButton>
          ) : mission.isCompleted ? (
            <OutlineButton 
              className="w-full" 
              onClick={onClick}
            >
              Revisit Mission
            </OutlineButton>
          ) : (
            <GradientButton 
              className="w-full" 
              onClick={onClick}
            >
              Continue Mission
            </GradientButton>
          )}
        </div>
      </div>
    </div>
  );
}