import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { ProtectedRoute } from "@/lib/protected-route";

// Pages
import AuthPage from "@/pages/auth-page";
import HomePage from "@/pages/HomePage";
import MapPage from "@/pages/MapPage";
import NotFound from "@/pages/not-found";
import StoryIntroPage from "@/pages/StoryIntroPage";
import RealmPage from "@/pages/RealmPage";
import MissionPage from "@/pages/MissionPage";
import BadgesPage from "@/pages/BadgesPage";

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
          
          {/* Protected Routes - Require Authentication */}
          <ProtectedRoute path="/home" component={HomePage} />
          <ProtectedRoute path="/realm/:id" component={RealmPage} />
          <ProtectedRoute path="/mission/:id" component={MissionPage} />
          <ProtectedRoute path="/map" component={MapPage} />
          <ProtectedRoute path="/badges" component={BadgesPage} />
          
          {/* Fall back to NotFound for any other route */}
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;