import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Suspense, lazy, useEffect } from "react";
import { ProtectedRoute } from "@/lib/protected-route";
import { useOffline } from "@/context/OfflineContext";

// Loading component
import { Loader2 } from "lucide-react";

// Lazy load pages
const SignupPage = lazy(() => import("@/pages/SignupPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPasswordPage"));
const AuthPage = lazy(() => import("@/pages/auth-page"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const MapPage = lazy(() => import("@/pages/MapPage"));
const NotFound = lazy(() => import("@/pages/not-found"));
const StoryIntroPage = lazy(() => import("@/pages/StoryIntroPage"));
const RealmPage = lazy(() => import("@/pages/RealmPage"));
const AfricaMapPage = lazy(() => import("@/pages/AfricaMapPage"));
const BadgesPage = lazy(() => import("@/pages/BadgesPage"));
const OfflineSettingsPage = lazy(() => import("@/pages/OfflineSettingsPage"));
const JourneyPage = lazy(() => import("@/pages/JourneyPage"));

// Lazy load Mission wrapper component
const MissionWrapper = lazy(() => import("@/components/mission-wrapper"));

// Lazy load Realm components
const Realm1Story = lazy(() => import("@/pages/Realm 1/story-intro"));
const Realm1Home = lazy(() => import("@/pages/Realm 1/home"));
const Realm3Home = lazy(() => import("@/pages/realm3/Home"));
const Realm4Home = lazy(() => import("@/pages/realm4/Home"));

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

// Loading spinner component for Suspense fallback
const LoadingSpinner = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
    <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
    <p className="text-lg text-muted-foreground">Loading content...</p>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterListener />
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            {/* Public routes */}
            <Route path="/" component={StoryIntroPage} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/forgot-password" component={ForgotPasswordPage} />
            
            {/* Protected Routes - Require Authentication */}
            <ProtectedRoute path="/home" component={HomePage} />
            <ProtectedRoute path="/map" component={MapPage} />
            <ProtectedRoute path="/map/africa" component={AfricaMapPage} />
            <ProtectedRoute path="/badges" component={BadgesPage} />
            <ProtectedRoute path="/journey" component={JourneyPage} />
            <ProtectedRoute path="/offline-settings" component={OfflineSettingsPage} />
            
            {/* Realm 1 specific routes */}
            <ProtectedRoute path="/realm/1/story" component={Realm1Story} />
            <ProtectedRoute path="/realm/1/home" component={Realm1Home} />
            
            {/* Realm 3 home */}
            <ProtectedRoute path="/realm/3" component={Realm3Home} />
            <ProtectedRoute path="/realm3" component={Realm3Home} />
            
            {/* Realm 4 home */}
            <ProtectedRoute path="/realm/4" component={Realm4Home} />
            <ProtectedRoute path="/realm4" component={Realm4Home} />
            
            {/* Universal realm routes */}
            <ProtectedRoute path="/realm/:id" component={RealmPage} />
            
            {/* Universal mission routes - these will use our dynamic mission wrapper */}
            <ProtectedRoute path="/realm/:realmId/mission/:missionId" component={MissionWrapper} />
            <ProtectedRoute path="/realm/:realmId/missions/:missionId" component={MissionWrapper} />
            
            {/* Alternative mission route patterns for backwards compatibility */}
            <ProtectedRoute path="/realm2/mission/:missionId" component={MissionWrapper} />
            <ProtectedRoute path="/realm3/mission/:missionId" component={MissionWrapper} />
            <ProtectedRoute path="/realm4/mission/:missionId" component={MissionWrapper} />
            
            {/* Fall back to NotFound for any other route */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
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