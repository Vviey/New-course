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
  
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<SelectUser | null, Error>({
    queryKey: ["/api/users/current"],
    queryFn: async () => {
      try {
        // Try to get the current user from stored userId
        const storedUserId = localStorage.getItem('userId');
        if (!storedUserId) return null;
        
        const res = await apiRequest("GET", `/api/users/${storedUserId}`);
        return await res.json();
      } catch (err) {
        console.error("Error fetching current user:", err);
        return null;
      }
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      const res = await apiRequest("POST", "/api/auth/login", credentials);
      return await res.json();
    },
    onSuccess: (userData: SelectUser) => {
      // Store userId in localStorage for persistence
      localStorage.setItem('userId', userData.userId);
      // Update user data in cache
      queryClient.setQueryData(["/api/users/current"], userData);
      
      toast({
        title: "Login successful",
        description: `Welcome back, ${userData.username}!`,
      });
      
      // Redirect to home page
      setLocation('/');
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
      const res = await apiRequest("POST", "/api/auth/signup", {
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
      queryClient.setQueryData(["/api/users/current"], userData);
      
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

  const logoutMutation = useMutation({
    mutationFn: async () => {
      // No need for server logout with simple auth
      // Just clear local storage
      localStorage.removeItem('userId');
    },
    onSuccess: () => {
      // Clear user data from cache
      queryClient.setQueryData(["/api/users/current"], null);
      
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
        user,
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