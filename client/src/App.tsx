import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Pages
import SignupPage from "@/pages/SignupPage";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import MapPage from "@/pages/MapPage";
import NotFound from "@/pages/not-found";
import StoryIntroPage from "@/pages/StoryIntroPage";
import RealmPage from "@/pages/RealmPage";
import MissionPage from "@/pages/MissionPage";
import AfricaMapPage from "@/pages/AfricaMapPage";
import BadgesPage from "@/pages/BadgesPage";

// Context providers
import { AuthProvider } from "@/context/AuthContext";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Switch>
          {/* Public routes */}
          <Route path="/" component={StoryIntroPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          
          {/* Learning Journey Routes - these should be protected */}
          <Route path="/realm/:id" component={RealmPage} />
          <Route path="/mission/:id" component={MissionPage} />
          <Route path="/map" component={MapPage} />
          <Route path="/map/africa" component={AfricaMapPage} />
          <Route path="/badges" component={BadgesPage} />
          
          {/* Fall back to NotFound for any other route */}
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
