import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { User as SelectUser } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

type AuthContextType = {
  user: SelectUser | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: UseMutationResult<SelectUser, Error, LoginData>;
  logoutMutation: UseMutationResult<void, Error, void>;
  registerMutation: UseMutationResult<SelectUser, Error, RegisterData>;
  isAuthenticated: boolean;
};

type LoginData = {
  username: string;
  password: string;
};

type RegisterData = {
  username: string;
  password: string;
  email?: string;
};

// Create mock user data for frontend-only mode
const mockUser = {
  id: 1,
  userId: "mock-user-123",
  username: "demouser",
  password: "", // password is not returned to frontend
  email: "demo@example.com",
  progress: {
    currentRealm: 1,
    completedRealms: [],
    missionsCompleted: [],
    chain: {
      progress: 0,
      lastUpdated: new Date().toISOString(),
    },
  },
  rewards: {
    badges: [],
    tokens: 0,
  },
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Mock implementation for frontend-only
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<SelectUser | null, Error>({
    queryKey: ["/api/user"],
    queryFn: async () => {
      console.log("Fetching user data...");
      
      // In frontend-only mode, return mock data if authenticated
      if (isAuthenticated) {
        return mockUser;
      }
      
      return null;
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      console.log("Login attempt with:", credentials.username);
      
      // In frontend-only mode, just simulate login
      if (credentials.username === "demouser" && credentials.password === "password") {
        setIsAuthenticated(true);
        return mockUser;
      }
      
      throw new Error("Invalid username or password");
    },
    onSuccess: () => {
      toast({
        title: "Login successful",
        description: "Welcome to Asha's Journey Through the Realms of Money",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (credentials: RegisterData) => {
      console.log("Registration attempt with:", credentials.username);
      
      // For frontend-only mode, just simulate success
      setIsAuthenticated(true);
      return mockUser;
    },
    onSuccess: () => {
      toast({
        title: "Registration successful",
        description: "Welcome to Asha's Journey Through the Realms of Money",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      console.log("Logging out...");
      
      // For frontend-only mode, just change state
      setIsAuthenticated(false);
    },
    onSuccess: () => {
      toast({
        title: "Logged out successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        isLoading,
        error,
        loginMutation,
        logoutMutation,
        registerMutation,
        isAuthenticated,
      }}
    >
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