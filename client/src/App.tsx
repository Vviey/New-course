import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { ProtectedRoute } from "@/lib/protected-route";
import { useOffline } from "@/context/OfflineContext";

// Pages
import SignupPage from "@/pages/SignupPage";
import LoginPage from "@/pages/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import AuthPage from "@/pages/auth-page";
import HomePage from "@/pages/HomePage";
import MapPage from "@/pages/MapPage";
import NotFound from "@/pages/not-found";
import StoryIntroPage from "@/pages/StoryIntroPage";
import Realm1Page from "@/pages/Realm1Page";
import RealmPage from "@/pages/RealmPage";
import MissionPage from "@/pages/MissionPage";
import AfricaMapPage from "@/pages/AfricaMapPage";
import BadgesPage from "@/pages/BadgesPage";
import OfflineSettingsPage from "@/pages/OfflineSettingsPage";
import JourneyPage from "@/pages/JourneyPage";
import Mission1 from './pages/missions/Mission1'; // Added import

// Import Realm 1 components
import Realm1Mission from "@/pages/Realm 1/Missions";
import Realm1Story from "@/pages/Realm 1/story-intro";
import Realm1Home from "@/pages/Realm 1/home";

// Import Realm 2 components with improved architecture
import Realm2Index from "@/realms/Realm2";
import Realm2Mission1 from "@/realms/Realm2/Mission1";
import Realm2Mission2 from "@/realms/Realm2/Mission2";
import Realm2Mission3 from "@/realms/Realm2/Mission3";
import Realm2Mission4 from "@/realms/Realm2/Mission4";
import Realm2Mission5 from "@/realms/Realm2/Mission5";
import Realm2Mission6 from "@/realms/Realm2/Mission6";
import Realm2MissionBonus from "@/realms/Realm2/MissionBonus";
// Legacy components - kept for compatibility
import Realm2Page from "@/pages/Realm2Page";

// Import Realm 3 components
import Realm3Home from "@/pages/realm3/Home";
import Realm3Mission from "@/pages/realm3/Mission";

// Import Realm 4 components
import Realm4Home from "@/pages/realm4/Home";
import Realm4Mission from "@/pages/realm4/Mission";

// Context providers
import { AuthProvider } from "@/context/AuthContext";
import { OfflineProvider } from "@/context/OfflineContext";

// Router wrapper to handle navigation
function RouterListener() {
  const [location] = useLocation();

  // Log navigation for debugging
  useEffect(() => {
    console.log("Current location:", location);
  }, [location]);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterListener />
        <Switch>
          {/* Public routes */}
          <Route path="/" component={StoryIntroPage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          
          {/* Protected Routes - Require Authentication */}
          <ProtectedRoute path="/home" component={HomePage} />
          <ProtectedRoute path="/realm/:id" component={RealmPage} />
          <ProtectedRoute path="/map" component={MapPage} />
          <ProtectedRoute path="/map/africa" component={AfricaMapPage} />
          <ProtectedRoute path="/badges" component={BadgesPage} />
          
          {/* Realm 1 specific routes */}
          <ProtectedRoute path="/realm/1/story" component={Realm1Story} />
          <ProtectedRoute path="/realm/1/home" component={Realm1Home} />
          <ProtectedRoute path="/realm/1/mission/:missionId" component={Realm1Mission} />
          <ProtectedRoute path="/realm/1/mission/bonus" component={MissionPage} /> {/* Bonus Mission */}
          
          {/* Realm 2 specific routes */}
          <ProtectedRoute path="/realm/2/index" component={Realm2Index} />
          <ProtectedRoute path="/realm/2/mission/1" component={Realm2Mission1} />
          <ProtectedRoute path="/realm/2/mission/2" component={Realm2Mission2} />
          <ProtectedRoute path="/realm/2/mission/3" component={Realm2Mission3} />
          <ProtectedRoute path="/realm/2/mission/4" component={Realm2Mission4} />
          <ProtectedRoute path="/realm/2/mission/5" component={Realm2Mission5} />
          <ProtectedRoute path="/realm/2/mission/6" component={Realm2Mission6} />
          <ProtectedRoute path="/realm/2/mission/bonus" component={Realm2MissionBonus} />
          <ProtectedRoute path="/realm/2/mission/:missionId" component={MissionPage} />
          <ProtectedRoute path="/realm/2" component={Realm2Index} />
          
          {/* Realm 3 specific routes */}
          <ProtectedRoute path="/realm/3/home" component={Realm3Home} />
          <ProtectedRoute path="/realm/3/mission/:missionId" component={Realm3Mission} />
          <ProtectedRoute path="/realm/3" component={Realm3Home} />
          <ProtectedRoute path="/realm3" component={Realm3Home} />
          <ProtectedRoute path="/realm3/mission/:id" component={Realm3Mission} />
          
          {/* Realm 2 direct routes */}
          <ProtectedRoute path="/realm2" component={Realm2Index} />
          <ProtectedRoute path="/realm2/mission/1" component={Realm2Mission1} />
          <ProtectedRoute path="/realm2/mission/2" component={Realm2Mission2} />
          <ProtectedRoute path="/realm2/mission/:id" component={MissionPage} />
          
          {/* Realm 4 direct routes */}
          <ProtectedRoute path="/realm4" component={Realm4Home} />
          <ProtectedRoute path="/realm4/mission/:id" component={Realm4Mission} />
          <ProtectedRoute path="/realm/4/home" component={Realm4Home} />
          <ProtectedRoute path="/realm/4/mission/:missionId" component={Realm4Mission} />
          <ProtectedRoute path="/realm/4" component={Realm4Home} />
          
          {/* Generic mission route as fallback */}
          <ProtectedRoute path="/realm/:realmId/mission/:missionId" component={MissionPage} />
          
          {/* Fall back to NotFound for any other route */}
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

// Offline status indicator component
function OfflineIndicator() {
  const { isOffline, hasCachedContent } = useOffline();
  const [, setLocation] = useLocation();
  
  if (!isOffline) {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 left-4 z-50 bg-amber-950 text-amber-200 px-4 py-2 rounded-md shadow-lg border border-amber-700 flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      <div className="flex-1">
        <span>
          {hasCachedContent 
            ? "You're offline but can continue learning with downloaded content" 
            : "You're offline - some features may be unavailable"}
        </span>
      </div>
      <button 
        onClick={() => setLocation('/offline-settings')}
        className="ml-2 underline text-amber-300 hover:text-amber-200 text-sm"
      >
        Settings
      </button>
    </div>
  );
}

export default App;