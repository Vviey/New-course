import { Switch, Route, useLocation } from "wouter";
import { Suspense, lazy, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext"; 

// Lazy load pages
const HomePage = lazy(() => import("@/pages/HomePage"));
const MapPage = lazy(() => import("@/pages/MapPage"));
const NotFound = lazy(() => import("@/pages/not-found"));
const StoryIntroPage = lazy(() => import("@/pages/StoryIntroPage"));
const RealmPage = lazy(() => import("@/pages/RealmPage"));
const AuthPage = lazy(() => import("@/pages/auth-page"));
const AfricaMapPage = lazy(() => import("@/pages/AfricaMapPage"));
const BadgesPage = lazy(() => import("@/pages/BadgesPage"));
const JourneyPage = lazy(() => import("@/pages/JourneyPage"));

// Lazy load Mission wrapper component
const MissionWrapper = lazy(() => import("@/components/mission-wrapper"));

// Lazy load Realm components
const Realm1Story = lazy(() => import("@/pages/realm1/story-intro"));
const Realm1Home = lazy(() => import("@/pages/realm1/home"));
const Realm2Home = lazy(() => import("@/pages/realm2/home"));
const Realm3Home = lazy(() => import("@/pages/realm3/home"));
const Realm4Home = lazy(() => import("@/pages/realm4/home"));
const Realm5Home = lazy(() => import("@/pages/realm5/home"));
const Realm6Home = lazy(() => import("@/pages/realm6/home"));
const Realm7Home = lazy(() => import("@/pages/realm7/home"));

// Router wrapper to handle navigation
function RouterListener() {
  const [location] = useLocation();
  useEffect(() => {
    console.log("Current location:", location);
  }, [location]);
  return null;
}

// Root route redirect component  
function RedirectToAuth() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirect to auth page as shown in the screen recording
    console.log('Redirecting to auth page');
    setLocation('/auth');
  }, [setLocation]);
  
  return <LoadingSpinner />;
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
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
      <RouterListener />
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Root route redirects to auth page */}
          <Route path="/" component={RedirectToAuth} />
          
          {/* Auth page comes next */}
          <Route path="/auth" component={AuthPage} />
          
          {/* Story intro */}
          <Route path="/intro" component={StoryIntroPage} />
          
          {/* Main navigation routes */}
          <Route path="/home" component={HomePage} />
          <Route path="/map" component={MapPage} />
          <Route path="/map/africa" component={AfricaMapPage} />
          <Route path="/badges" component={BadgesPage} />
          <Route path="/journey" component={JourneyPage} />
          
          {/* Realm 1 specific routes */}
          <Route path="/realm/1/story" component={Realm1Story} />
          <Route path="/realm/1/home" component={Realm1Home} />
          <Route path="/realm/1" component={Realm1Home} />
          <Route path="/realm1" component={Realm1Home} />
          
          {/* Realm 2 home */}
          <Route path="/realm/2" component={Realm2Home} />
          <Route path="/realm2" component={Realm2Home} />
          
          {/* Realm 3 home */}
          <Route path="/realm/3" component={Realm3Home} />
          <Route path="/realm3" component={Realm3Home} />
          
          {/* Realm 4 home */}
          <Route path="/realm/4" component={Realm4Home} />
          <Route path="/realm4" component={Realm4Home} />
          
          {/* Realm 5 home */}
          <Route path="/realm/5" component={Realm5Home} />
          <Route path="/realm5" component={Realm5Home} />
          
          {/* Realm 6 home */}
          <Route path="/realm/6" component={Realm6Home} />
          <Route path="/realm6" component={Realm6Home} />
          
          {/* Realm 7 home */}
          <Route path="/realm/7" component={Realm7Home} />
          <Route path="/realm7" component={Realm7Home} />
          
          {/* Universal realm routes */}
          <Route path="/realm/:id" component={RealmPage} />
          
          {/* Universal mission routes - these will use our dynamic mission wrapper */}
          <Route path="/realm/:realmId/mission/:missionId" component={MissionWrapper} />
          <Route path="/realm/:realmId/missions/:missionId" component={MissionWrapper} />
          
          {/* Alternative mission route patterns for backwards compatibility */}
          <Route path="/realm1/mission/:missionId" component={MissionWrapper} />
          <Route path="/realm2/mission/:missionId" component={MissionWrapper} />
          <Route path="/realm3/mission/:missionId" component={MissionWrapper} />
          <Route path="/realm4/mission/:missionId" component={MissionWrapper} />
          <Route path="/realm5/mission/:missionId" component={MissionWrapper} />
          <Route path="/realm6/mission/:missionId" component={MissionWrapper} />
          <Route path="/realm7/mission/:missionId" component={MissionWrapper} />
          
          {/* Missions index pages */}
          <Route path="/realm1/missions" component={lazy(() => import("@/pages/realm1/missions"))} />
          <Route path="/realm2/missions" component={lazy(() => import("@/pages/realm2/missions"))} />
          <Route path="/realm3/missions" component={lazy(() => import("@/pages/realm3/missions"))} />
          <Route path="/realm4/missions" component={lazy(() => import("@/pages/realm4/missions"))} />
          <Route path="/realm5/missions" component={lazy(() => import("@/pages/realm5/missions"))} />
          <Route path="/realm6/missions" component={lazy(() => import("@/pages/realm6/missions"))} />
          <Route path="/realm7/missions" component={lazy(() => import("@/pages/realm7/missions"))} />
          
          {/* Fall back to NotFound for any other route */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Toaster />
    </AuthProvider>
  );
}


export default App;
