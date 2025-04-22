import { useParams, useLocation } from 'wouter';
import { missionData, RealmData } from '@/lib/realm-data';

export default function MissionPage() {
  const { id } = useParams<{ id: string }>();
  const missionId = parseInt(id || '101');
  const [, setLocation] = useLocation();
  
  // Find the mission based on ID
  const mission = missionData.find(m => m.id === missionId);
  
  // Find the realm this mission belongs to
  const realm = mission ? RealmData.find(r => r.id === mission.realmId) : null;
  
  const navigateBack = () => {
    if (mission) {
      setLocation(`/realm/${mission.realmId}`);
    } else {
      setLocation('/home');
    }
  };
  
  // Helper function to get background style based on realm
  const getBackgroundStyle = () => {
    if (!realm) return { backgroundColor: "#1F2937" };  // Default dark background
    
    switch(realm.id) {
      case 1: // Origins
        return { 
          backgroundColor: "#B45309",
          backgroundImage: "linear-gradient(to bottom, rgba(180, 83, 9, 0.8), rgba(180, 83, 9, 0.3))",
        };
      case 2: // Forest
        return { 
          backgroundColor: "#065F46",
          backgroundImage: "linear-gradient(to bottom, rgba(6, 95, 70, 0.8), rgba(6, 95, 70, 0.3))",
        };
      case 3: // Citadel
        return { 
          backgroundColor: "#3730A3",
          backgroundImage: "linear-gradient(to bottom, rgba(55, 48, 163, 0.8), rgba(55, 48, 163, 0.3))",
        };
      case 4: // Forks
        return { 
          backgroundColor: "#5B21B6",
          backgroundImage: "linear-gradient(to bottom, rgba(91, 33, 182, 0.8), rgba(91, 33, 182, 0.3))",
        };
      case 5: // Ubuntu
        return { 
          backgroundColor: "#B91C1C",
          backgroundImage: "linear-gradient(to bottom, rgba(185, 28, 28, 0.8), rgba(185, 28, 28, 0.3))",
        };
      default:
        return { backgroundColor: "#1F2937" };
    }
  };

  // If mission not found
  if (!mission) {
    return (
      <div className="min-h-screen bg-gray-950 text-amber-100 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-amber-300 mb-4">Mission Not Found</h1>
          <p className="text-xl text-amber-100/80 mb-8">Sorry, this mission doesn't exist yet.</p>
          <button 
            onClick={() => setLocation('/home')}
            className="px-5 py-2 bg-amber-600 rounded-full text-amber-100 font-semibold hover:bg-amber-500 transition-colors shadow-lg"
          >
            Return to Realms
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="min-h-screen text-amber-100 py-8 px-4"
      style={getBackgroundStyle()}
    >
      {/* Header with back button */}
      <header className="max-w-6xl mx-auto mb-8">
        <button 
          onClick={navigateBack} 
          className="flex items-center text-amber-300 hover:text-amber-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Realm
        </button>
      </header>
      
      <div className="max-w-4xl mx-auto mb-12">
        {/* Mission Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-300 mb-2">{mission.title}</h1>
          <p className="text-xl text-amber-100/80">{mission.description}</p>
        </div>
        
        {/* Mission Content */}
        <div className="bg-gray-900/70 rounded-lg shadow-xl p-6 mb-8">
          {/* Scenario Section */}
          {mission.scenario && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-amber-300 mb-3">Scenario</h2>
              <p className="text-amber-100 italic">{mission.scenario}</p>
            </div>
          )}
          
          {/* Key Points Section */}
          {mission.keyPoints && mission.keyPoints.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-amber-300 mb-3">Key Points</h2>
              <ul className="list-disc pl-5 text-amber-100 space-y-2">
                {mission.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Historical Context */}
          {mission.historicalContext && mission.historicalContext.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-amber-300 mb-3">Historical Context</h2>
              <div className="bg-gray-800/50 rounded p-4">
                {mission.historicalContext.map((item, index) => (
                  <div key={index} className="mb-2 last:mb-0">
                    <span className="font-medium text-amber-200">{item.name}: </span>
                    <span className="text-amber-100">{item.contribution || item.description || item.event || ""}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Quote */}
          {mission.quote && (
            <div className="mb-6">
              <blockquote className="border-l-4 border-amber-400 pl-4 py-2 italic text-amber-100">
                "{mission.quote.text}"
                {mission.quote.speaker && (
                  <footer className="text-amber-300 text-sm mt-2">— {mission.quote.speaker}</footer>
                )}
              </blockquote>
            </div>
          )}
          
          {/* Activity Placeholder */}
          {mission.activities && mission.activities.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-amber-300 mb-3">Activity</h2>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <p className="text-amber-100 mb-4">{mission.activities[0].description}</p>
                <button className="px-5 py-2 bg-amber-500 rounded-lg text-amber-100 font-semibold hover:bg-amber-400 transition-colors shadow-lg">
                  Start Activity
                </button>
              </div>
            </div>
          )}
          
          {/* Reflection */}
          {mission.reflection && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-amber-300 mb-3">Reflection</h2>
              <p className="text-amber-100 italic">{mission.reflection}</p>
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <div className="mt-8 flex justify-center space-x-4">
          <button 
            onClick={navigateBack}
            className="px-5 py-2 bg-amber-800 rounded-full text-amber-200 font-semibold hover:bg-amber-700 transition-colors shadow-lg flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Realm
          </button>
          
          <button 
            onClick={() => setLocation('/home')}
            className="px-5 py-2 bg-amber-600 rounded-full text-amber-100 font-semibold hover:bg-amber-500 transition-colors shadow-lg flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}