import React, { createContext, useContext, ReactNode } from 'react';

// This is a mock authentication context for frontend-only mode
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
  userId: "sample-user-id",
  username: "demouser",
  email: "demo@example.com",
  progress: {
    currentRealm: 1,
    completedRealms: [],
    missionsCompleted: [],
    chain: {
      progress: 0,
      lastUpdated: new Date().toISOString()
    }
  },
  rewards: {
    badges: [],
    tokens: 0
  }
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  // In frontend-only mode, we always provide a mock user
  const mockUser = defaultUser;
  
  const value = {
    user: mockUser,
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