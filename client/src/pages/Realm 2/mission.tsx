import { useParams, useLocation } from 'wouter';
import { citadelTheme } from '@/lib/realm-themes';
import { realm2Missions } from '@/lib/realm2-missions';
import { Mission } from '@/components/missions/Mission';
import { ChevronLeft } from 'lucide-react';

export default function Realm2MissionPage() {
  const { missionId } = useParams();
  const [, setLocation] = useLocation();
  
  // Convert mission ID string to number
  const missionNumber = missionId ? parseInt(missionId) : null;
  
  // Find the mission by its number (missions are indexed from 1)
  const mission = missionNumber ? realm2Missions.find(m => m.id % 100 === missionNumber) : null;
  
  // Handle mission completion
  const handleMissionComplete = () => {
    // Navigate back to realm home
    setLocation('/realm/2');
  };
  
  // Handle back button
  const handleBack = () => {
    setLocation('/realm/2');
  };
  
  if (!mission) {
    return (
      <div className="min-h-screen py-12 px-6 flex items-center justify-center" style={{ backgroundColor: citadelTheme.colors.background }}>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Mission Not Found</h1>
          <p className="text-gray-700 mb-6">Sorry, we couldn't find the mission you're looking for.</p>
          <button
            className="py-2 px-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            onClick={handleBack}
          >
            Back to Realm 2
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="min-h-screen py-12 px-6"
      style={{ 
        backgroundColor: citadelTheme.colors.background || '#FBF4D2',
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(238, 114, 11, 0.1) 0%, transparent 50%), 
          radial-gradient(circle at 90% 80%, rgba(255, 197, 103, 0.1) 0%, transparent 50%)
        `,
      }}
    >
      <div className="container mx-auto">
        {/* Back button */}
        <button
          className="flex items-center text-amber-600 hover:text-amber-700 mb-6"
          onClick={handleBack}
        >
          <ChevronLeft size={20} />
          <span>Back to Realm 2: The Central Citadel</span>
        </button>
        
        {/* Mission component */}
        <Mission
          mission={mission}
          onComplete={handleMissionComplete}
        />
      </div>
    </div>
  );
}