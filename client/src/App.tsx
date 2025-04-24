import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { ProtectedRoute } from "@/lib/protected-route";

// Pages
import SignupPage from "@/pages/SignupPage";
import LoginPage from "@/pages/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import AuthPage from "@/pages/auth-page";
import HomePage from "@/pages/HomePage";
import MapPage from "@/pages/MapPage";
import NotFound from "@/pages/not-found";
import StoryIntroPage from "@/pages/StoryIntroPage";
import RealmPage from "@/pages/RealmPage";
import MissionPage from "@/pages/MissionPage";
import AfricaMapPage from "@/pages/AfricaMapPage";
import BadgesPage from "@/pages/BadgesPage";

// Import Realm 1 components
import Realm1Mission from "@/pages/Realm 1/Missions";
import Realm1Story from "@/pages/Realm 1/story-intro";
import Realm1Home from "@/pages/Realm 1/home";

// Context providers
import { AuthProvider } from "@/context/AuthContext";

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

export default App;