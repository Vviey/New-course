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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        {/* Public routes */}
        <Route path="/" component={StoryIntroPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        
        {/* Routes that would normally be protected */}
        <Route path="/home" component={HomePage} />
        <Route path="/map" component={MapPage} />
        <Route path="/realm/:id" component={HomePage} />
        
        {/* Fall back to NotFound for any other route */}
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
