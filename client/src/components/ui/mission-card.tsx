import { useState } from 'react';
import { useLocation } from 'wouter';

interface MissionCardProps {
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
}: MissionCardProps) {
  const [, setLocation] = useLocation();
  const [hover, setHover] = useState(false);

  // Random placeholder images for mission types
  const placeholderImages = [
    '/mission-placeholders/bartering.jpg',
    '/mission-placeholders/coins.jpg',
    '/mission-placeholders/digital.jpg',
    '/mission-placeholders/trade.jpg',
    '/mission-placeholders/quiz.jpg'
  ];

  // Select a random image for missions that don't have one
  const randomImage = imageUrl || placeholderImages[missionId % placeholderImages.length];

  const handleClick = () => {
    if (!isLocked) {
      setLocation(`/mission/${missionId}`);
    }
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-lg border transition-all duration-300 
        ${isLocked ? 'opacity-70 border-gray-700' : hover ? 'border-amber-400 transform scale-[1.02]' : 'border-amber-700'}`}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: isLocked ? 'not-allowed' : 'pointer' }}
    >
      <div className="relative h-[120px] bg-amber-900/60">
        {/* Optional image */}
        {randomImage && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10" />
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${randomImage})`,
                opacity: isLocked ? 0.5 : 0.8
              }}
            />
          </div>
        )}
        
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
          <h3 className="text-lg font-bold text-amber-100 drop-shadow-md">{title}</h3>
        </div>

        {/* Status indicators */}
        {isCompleted && (
          <div className="absolute top-2 right-2 z-20 bg-green-800 rounded-full p-1 w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
        
        {isLocked && (
          <div className="absolute top-2 right-2 z-20 bg-gray-800 rounded-full p-1 w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Description */}
      <div className="p-3 bg-gray-900">
        <p className="text-sm text-amber-100/90">{description}</p>
        
        {/* Interactive footer */}
        <div className={`mt-3 flex justify-end ${isLocked ? 'opacity-50' : ''}`}>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-900/60 text-amber-200">
            {isCompleted ? 'Completed' : isLocked ? 'Locked' : 'Start Mission'}
            <svg xmlns="http://www.w3.org/2000/svg" className={`ml-1 h-3 w-3 ${isLocked ? '' : 'animate-pulse'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}