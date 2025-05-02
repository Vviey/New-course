import { createContext, ReactNode, useContext } from "react";
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { insertUserSchema, User as SelectUser, InsertUser } from "@shared/schema";
import { getQueryFn, apiRequest, queryClient } from "../lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

type AuthContextType = {
  user: SelectUser | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: UseMutationResult<SelectUser, Error, LoginData>;
  logoutMutation: UseMutationResult<void, Error, void>;
  registerMutation: UseMutationResult<SelectUser, Error, RegisterData>;
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

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  
  // TEMPORARY: Creating a mock user for development until backend is implemented
  const mockUser = {
    id: 1,
    userId: "dev-user-123",
    username: "dev_user",
    password: "********", // Hashed in real implementation
    email: "dev@example.com",
    githubId: null,
    avatarUrl: null,
    progress: {
      currentRealm: 1,
      completedRealms: [],
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
  
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<SelectUser | null, Error>({
    queryKey: ["/api/user"],
    queryFn: async () => {
      try {
        // For development: return the mock user to avoid auth errors
        // In production, this would call the actual API
        if (import.meta.env.DEV) {
          // Simulate network delay
          await new Promise(resolve => setTimeout(resolve, 500));
          return mockUser as SelectUser;
        }
        
        const res = await apiRequest("GET", "/api/user");
        if (!res.ok) {
          if (res.status === 401) {
            // User is not authenticated
            return null;
          }
          throw new Error(`Failed to fetch user: ${res.statusText}`);
        }
        return await res.json();
      } catch (err) {
        console.error("Error fetching current user:", err);
        return null;
      }
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      // For development: simulate successful login
      if (import.meta.env.DEV) {
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
        return {
          ...mockUser,
          username: credentials.username
        } as SelectUser;
      }
      
      const res = await apiRequest("POST", "/api/login", credentials);
      return await res.json();
    },
    onSuccess: (userData: SelectUser) => {
      // Store userId in localStorage for persistence
      localStorage.setItem('userId', userData.userId);
      // Update user data in cache
      queryClient.setQueryData(["/api/user"], userData);
      
      toast({
        title: "Login successful",
        description: `Welcome back, ${userData.username}!`,
      });
      
      // Redirect to intro page
      setLocation('/intro');
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message || "Invalid username or password",
        variant: "destructive",
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userData: RegisterData) => {
      // For development: simulate successful registration
      if (import.meta.env.DEV) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        return {
          ...mockUser,
          username: userData.username,
          email: userData.email
        } as SelectUser;
      }
      
      const res = await apiRequest("POST", "/api/register", {
        username: userData.username,
        password: userData.password,
        email: userData.email,
        progress: {
          currentRealm: 1,
          completedRealms: [],
          chain: {
            progress: 0,
            lastUpdated: new Date().toISOString()
          }
        },
        rewards: {
          badges: [],
          tokens: 0
        }
      });
      return await res.json();
    },
    onSuccess: (userData: SelectUser) => {
      // Store userId in localStorage for persistence
      localStorage.setItem('userId', userData.userId);
      // Update user data in cache
      queryClient.setQueryData(["/api/user"], userData);
      
      toast({
        title: "Registration successful",
        description: `Welcome to Bitcoin Quest, ${userData.username}!`,
      });
      
      // Redirect to introduction page
      setLocation('/intro');
    },
    onError: (error: Error) => {
      toast({
        title: "Registration failed",
        description: error.message || "Could not create account. Please try again.",
        variant: "destructive",
      });
    },
  });

  const logoutMutation = useMutation<void, Error, void>({
    mutationFn: async () => {
      // For development: simulate successful logout
      if (import.meta.env.DEV) {
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        localStorage.removeItem('userId');
        return;
      }
      
      await apiRequest("POST", "/api/logout");
      localStorage.removeItem('userId');
    },
    onSuccess: () => {
      // Clear user data from cache
      queryClient.setQueryData(["/api/user"], null);
      
      toast({
        title: "Logged out",
        description: "You have been logged out successfully.",
      });
      
      // Redirect to login page
      setLocation('/auth');
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