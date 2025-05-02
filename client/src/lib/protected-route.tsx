import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { Redirect, Route } from "wouter";
import { ComponentType, ReactNode } from "react";

// Component for protecting routes that require authentication
export function ProtectedRoute({
  path,
  component: Component,
}: {
  path: string;
  component: ComponentType<any>;
}) {
  const { user, isLoading } = useAuth();

  // If still loading the user data, show a loading spinner
  if (isLoading) {
    return (
      <Route path={path}>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Loading...</span>
        </div>
      </Route>
    );
  }

  // If not authenticated, redirect to the auth page with the original path as redirect parameter
  if (!user) {
    return (
      <Route path={path}>
        <Redirect to={`/auth?redirect=${encodeURIComponent(path)}`} />
      </Route>
    );
  }

  // If authenticated, render the protected component
  return (
    <Route path={path}>
      <Component />
    </Route>
  );
}

// Component for redirecting authenticated users away from certain pages (like auth page)
export function AuthRedirectRoute({
  path,
  component: Component,
  redirectTo = "/",
}: {
  path: string;
  component: ComponentType<any>;
  redirectTo?: string;
}) {
  const { user, isLoading } = useAuth();

  // If still loading the user data, show a loading spinner
  if (isLoading) {
    return (
      <Route path={path}>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Loading...</span>
        </div>
      </Route>
    );
  }

  // If authenticated, redirect to the specified path
  if (user) {
    return (
      <Route path={path}>
        <Redirect to={redirectTo} />
      </Route>
    );
  }

  // If not authenticated, render the component
  return (
    <Route path={path}>
      <Component />
    </Route>
  );
}