import { useParams, useLocation } from 'wouter';

export default function MissionPage() {
  const { id } = useParams<{ id: string }>();
  const missionId = parseInt(id || '1');
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-950 text-amber-100 py-8 px-4">
      {/* Header with back button */}
      <header className="max-w-6xl mx-auto mb-8">
        <button 
          onClick={() => setLocation('/home')} 
          className="flex items-center text-amber-300 hover:text-amber-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Missions
        </button>
      </header>
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-amber-300 mb-4">Mission {missionId}</h1>
        <p className="text-xl text-amber-100/80">This mission is under construction.</p>
        
        <div className="mt-12">
          <button 
            onClick={() => setLocation('/map')}
            className="px-5 py-2 mx-2 bg-amber-800 rounded-full text-amber-200 font-semibold hover:bg-amber-700 transition-colors shadow-lg"
          >
            View Journey Map
          </button>
          
          <button 
            onClick={() => setLocation('/home')}
            className="px-5 py-2 mx-2 bg-amber-600 rounded-full text-amber-100 font-semibold hover:bg-amber-500 transition-colors shadow-lg"
          >
            Back to Realms
          </button>
        </div>
      </div>
    </div>
  );
}