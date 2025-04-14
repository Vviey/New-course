import React from 'react';
import { useLocation } from 'wouter';

interface MissionProps {
  title: string;
  description: string;
  imageUrl?: string;
  isCompleted?: boolean;
  isLocked?: boolean;
  missionId: number;
}

export function MissionCard({
  title,
  description,
  imageUrl,
  isCompleted = false,
  isLocked = false,
  missionId
}: MissionProps) {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    if (!isLocked) {
      setLocation(`/mission/${missionId}`);
    }
  };

  return (
    <div 
      className={`relative p-4 bg-amber-100/10 backdrop-blur-sm border border-amber-800/30 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg 
        ${isLocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:bg-amber-100/20'}`}
      onClick={handleClick}
    >
      <div className="bg-parchment bg-cover bg-center rounded p-4 text-amber-950">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
        
        {/* Status indicator */}
        {isCompleted && (
          <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            Completed
          </div>
        )}
        
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10 text-amber-400/80" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                />
              </svg>
              <span className="mt-2 text-amber-200 text-sm font-medium">Complete previous missions first</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}