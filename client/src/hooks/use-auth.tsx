import React, { createContext, useContext, ReactNode } from 'react';

// This is a simplified auth hook for frontend-only mode
// It allows navigation through the app without requiring a backend

interface User {
  id: number;
  userId: string;
  username: string;
  email: string | null;
  progress: any;
  rewards: any;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: any;
  registerMutation: any;
  logoutMutation: any;
}

const defaultUser: User = {
  id: 1,
  userId: "frontend-user",
  username: "Asha",
  email: "asha@example.com",
  progress: {
    currentRealm: 1,
    completedRealms: [],
    missionsCompleted: [],
  },
  rewards: {
    badges: [],
    tokens: 0
  }
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  // In frontend-only mode, we always provide a default user
  // This ensures the protected routes work without database access
  
  const value = {
    user: defaultUser,
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
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}