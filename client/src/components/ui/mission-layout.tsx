
import { useLocation } from 'wouter';
import { ReactNode } from 'react';

interface MissionLayoutProps {
  children: ReactNode;
  title: string;
  missionNumber: number;
  realmName: string;
}

export function MissionLayout({ children, title, missionNumber, realmName }: MissionLayoutProps) {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-amber-950 text-amber-100">
      <header className="pt-6 px-6 pb-4 bg-gradient-to-b from-amber-950/50">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setLocation('/realm/1')} 
            className="flex items-center text-amber-300 hover:text-amber-200 transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to {realmName}
          </button>
          
          <div className="text-center">
            <span className="text-amber-400 text-sm font-medium">Mission {missionNumber}</span>
            <h1 className="text-3xl font-bold text-amber-300 mt-2 font-serif">{title}</h1>
          </div>
        </div>
      </header>
      
      <main className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
