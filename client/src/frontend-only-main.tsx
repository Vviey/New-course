import React, { useState, useEffect, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Switch, Route, Router, useLocation } from 'wouter';
import './index.css';
import './styles.css';

// Import existing pages
const StoryIntroPage = lazy(() => import('./pages/StoryIntroPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Realm1Home = lazy(() => import('./pages/realm1/home'));
const Realm1Story = lazy(() => import('./pages/realm1/story-intro'));
const MissionWrapper = lazy(() => import('./components/mission-wrapper'));

// Import realm-specific pages
const Realm2Home = lazy(() => import('./pages/realm2/home'));
const Realm3Home = lazy(() => import('./pages/realm3/home'));
const Realm4Home = lazy(() => import('./pages/realm4/home'));
const Realm5Home = lazy(() => import('./pages/realm5/home'));
const Realm6Home = lazy(() => import('./pages/realm6/home'));

// LoadingSpinner for Suspense fallback
const LoadingSpinner = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-amber-900">
    <div className="h-12 w-12 rounded-full border-4 border-amber-200 border-t-amber-600 animate-spin mb-4" />
    <p className="text-lg text-amber-200">Loading content...</p>
  </div>
);

// Simple realm selection dashboard for when we can't load existing component
const RealmSelectionDashboard = () => {
  const [realms, setRealms] = useState([]);
  
  useEffect(() => {
    // Fetch realms from mock API
    fetch('/api/realms')
      .then(res => res.json())
      .then(data => setRealms(data))
      .catch(err => console.error('Error fetching realms:', err));
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-800 to-stone-900 text-amber-50">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center border-b border-amber-900/30">
        <h1 className="text-2xl font-bold text-amber-400">Asha's Bitcoin Journey</h1>
        <div className="flex space-x-4">
          <button className="px-3 py-1 bg-amber-700 rounded hover:bg-amber-600 transition-colors">Maps</button>
          <button className="px-3 py-1 bg-amber-700 rounded hover:bg-amber-600 transition-colors">Badges</button>
          <button className="px-3 py-1 bg-amber-700 rounded hover:bg-amber-600 transition-colors">Settings</button>
        </div>
      </header>

      {/* Main content */}
      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-300">Choose Your Realm</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Realm cards */}
          {realms.map((realm: any) => (
            <div key={realm.id} className="bg-stone-800 rounded-lg overflow-hidden border border-amber-900/50 hover:border-amber-600/50 transition-colors shadow-lg">
              <div className="h-40 bg-amber-900/30 flex items-center justify-center">
                <span className="text-5xl">🏰</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-amber-300">{realm.name}</h3>
                <p className="text-amber-200/80 mb-4">{realm.description}</p>
                <a href={`/realm/${realm.id}`} className="block text-center py-2 bg-amber-700 hover:bg-amber-600 transition-colors rounded">
                  Enter Realm
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 mt-10 text-center text-amber-600 border-t border-amber-900/30">
        <p>Continue your learning journey through the realms of Bitcoin knowledge</p>
      </footer>
    </div>
  );
};

// Create a mock AuthContext
const MockAuthContext = React.createContext<any>(null);

const MockAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    id: 1,
    userId: "sample-user-id",
    username: "demouser",
    email: "demo@example.com",
    progress: {
      currentRealm: 1,
      completedRealms: [],
      missionsCompleted: [],
      chain: {
        progress: 0,
        lastUpdated: new Date().toISOString()
      }
    },
    rewards: {
      badges: [],
      tokens: 0
    }
  });

  const value = {
    user,
    isLoading: false,
    error: null,
    loginMutation: { 
      mutate: () => {}, 
      isPending: false 
    },
    registerMutation: { 
      mutate: () => {}, 
      isPending: false 
    },
    logoutMutation: { 
      mutate: () => {}, 
      isPending: false 
    }
  };

  return (
    <MockAuthContext.Provider value={value}>
      {children}
    </MockAuthContext.Provider>
  );
};

// Simple way to access the mock auth context
const useMockAuth = () => {
  const context = React.useContext(MockAuthContext);
  if (!context) {
    throw new Error("useMockAuth must be used within a MockAuthProvider");
  }
  return context;
};

// Override the useAuth function globally
// @ts-ignore - intentionally overriding module
window.useAuth = useMockAuth;

// App component that handles routing
const App = () => {
  return (
    <MockAuthProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <Switch>
            {/* Start with the story intro */}
            <Route path="/" component={StoryIntroPage} />
            
            {/* Homepage as fallback */}
            <Route path="/home" component={HomePage} />
            
            {/* Realm-specific routes */}
            <Route path="/realm/1" component={Realm1Home} />
            <Route path="/realm/1/story" component={Realm1Story} />
            <Route path="/realm/2" component={Realm2Home} />
            <Route path="/realm/3" component={Realm3Home} />
            <Route path="/realm/4" component={Realm4Home} />
            <Route path="/realm/5" component={Realm5Home} />
            <Route path="/realm/6" component={Realm6Home} />
            
            {/* Mission routes */}
            <Route path="/realm/:realmId/mission/:missionId">
              {/* @ts-ignore */}
              {(params) => <React.Fragment><MissionWrapper /></React.Fragment>}
            </Route>
            
            {/* Fallback to realm selection if nothing else matches */}
            <Route>
              <RealmSelectionDashboard />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </MockAuthProvider>
  );
};

// Create stylesheet for basic styling
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }
`;
document.head.appendChild(style);

// Render app
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}