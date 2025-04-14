import { Link, useLocation } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/context/AuthContext';
import { RealmData } from '@/lib/realm-data';

export default function HomePage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();

  // For now, use the static data instead of API calls
  const { data: realms = RealmData, isLoading, error } = useQuery({
    queryKey: ['/api/realms'],
    queryFn: () => Promise.resolve(RealmData),
    enabled: true
  });

  const handleRealmClick = (realmId: number, isLocked: boolean) => {
    if (!isLocked) {
      setLocation(`/realm/${realmId}`);
    }
  };

  // Helper function for module label display
  const getModuleLabel = (focus: string, moduleNumber: number) => {
    return `${moduleNumber}. ${focus}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-800 to-amber-950 text-amber-100 pb-16">
      {/* Top navigation icons */}
      <header className="py-4 px-6 flex justify-end items-center">
        <div className="flex space-x-4">
          <button 
            className="w-10 h-10 rounded-full bg-amber-800/50 flex items-center justify-center hover:bg-amber-800"
            onClick={() => setLocation('/map')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-amber-800/50 flex items-center justify-center hover:bg-amber-800"
            onClick={() => setLocation('/badges')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-amber-800/50 flex items-center justify-center hover:bg-amber-800"
            onClick={() => {/* Toggle sound */}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main title */}
      <div className="container mx-auto text-center mb-12 pt-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-300 font-serif">
          ASHA'S JOURNEY
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-amber-200 tracking-wider mt-2 font-serif">
          THROUGH THE REALMS OF MONEY
        </h2>
      </div>

      {/* Character image & realms grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 relative">
          {/* Character image - only shown on medium screens and up */}
          <div className="hidden md:block absolute left-0 top-0 h-full">
            <img 
              src="/asha-character.png" 
              alt="Asha" 
              className="h-full object-contain" 
            />
          </div>

          {/* Realms Grid */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 md:pl-32">
            {isLoading ? (
              <div className="text-center py-10 col-span-3">
                <p>Loading realms...</p>
              </div>
            ) : error ? (
              <div className="text-center py-10 text-red-400 col-span-3">
                <p>Error loading realms. Please try again.</p>
              </div>
            ) : (
              realms.map((realm) => (
                <div 
                  key={realm.id} 
                  className={`realm-card bg-cover bg-center rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 
                    ${realm.isLocked ? 'opacity-80 filter grayscale' : 'hover:scale-105'}`}
                  style={{ height: '200px', backgroundImage: `url('/realms/realm-${realm.id}.jpg')` }}
                  onClick={() => handleRealmClick(realm.id, realm.isLocked)}
                >
                  <div className="h-full w-full flex flex-col justify-between p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="text-center mt-2">
                      <h3 className="text-xl font-bold text-amber-300 font-serif">{realm.name}</h3>
                    </div>
                    
                    <div className={`rounded-md p-2 text-center mb-2 w-full 
                      ${realm.isLocked ? 'bg-gray-800/70' : 'bg-amber-800/70'}`}>
                      <span className={`text-sm font-medium
                        ${realm.isLocked ? 'text-gray-400' : 'text-amber-200'}`}>
                        {getModuleLabel(realm.focus, realm.moduleNumber)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom navigation buttons */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-6">
        <button 
          className="px-5 py-2 bg-amber-800 rounded-full text-amber-200 font-semibold hover:bg-amber-700 transition-colors shadow-lg flex items-center space-x-2"
          onClick={() => setLocation('/map')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
          </svg>
          <span>Journey Map</span>
        </button>
        
        <button 
          className="px-5 py-2 bg-amber-800 rounded-full text-amber-200 font-semibold hover:bg-amber-700 transition-colors shadow-lg flex items-center space-x-2"
          onClick={() => setLocation('/badges')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>My Badges</span>
        </button>
      </div>
    </div>
  );
}
