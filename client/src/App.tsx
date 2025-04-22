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
import Realm2Page from "@/pages/Realm2Page";
import RealmPage from "@/pages/RealmPage";
import MissionPage from "@/pages/MissionPage";
import AfricaMapPage from "@/pages/AfricaMapPage";
import BadgesPage from "@/pages/BadgesPage";
import OfflineSettingsPage from "@/pages/OfflineSettingsPage";
import Mission1 from './pages/missions/Mission1'; // Added import

// Context providers
import { AuthProvider } from "@/hooks/use-auth";
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
        <OfflineProvider>
          <RouterListener />
          <Switch>
            {/* Public routes */}
            <Route path="/" component={HomePage} />
            <Route path="/intro" component={StoryIntroPage} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/forgot-password" component={ForgotPasswordPage} />

            {/* Realm routes */}
            <Route path="/realm/1" component={Realm1Page} />
            <Route path="/realm/2" component={Realm2Page} />
            <Route path="/realm/:id" component={RealmPage} />

            {/* Mission routes */}
            <Route path="/mission/101" component={Mission1} />
            <Route path="/mission/:id" component={MissionPage} />

            {/* Other application routes */}
            <Route path="/map" component={MapPage} />
            <Route path="/map/africa" component={AfricaMapPage} />
            <Route path="/badges" component={BadgesPage} />
            <Route path="/offline-settings" component={OfflineSettingsPage} />

            {/* Fall back to NotFound for any other route */}
            <Route component={NotFound} />
          </Switch>
          <OfflineIndicator />
          <Toaster />
        </OfflineProvider>
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