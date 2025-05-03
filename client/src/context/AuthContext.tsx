import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { MissionType, BadgeType } from '@/lib/realm-utils';

// This is a purely frontend implementation of authentication context using localStorage
// It does not connect to any backend or use mock data

// User progress interface to track progress through the journey
interface UserProgress {
  username: string;
  completedMissions: number[];
  unlockedRealms: number[];
  earnedBadges: number[];
  currentRealm?: number;
}

interface AuthContextType {
  // Authentication state
  isAuthenticated: boolean;
  username: string | null;
  loading: boolean;
  isLoading: boolean; // Alias for loading for backward compatibility
  
  // User object for compatibility with existing components
  user: {
    username: string | null;
    progress?: {
      completedRealms?: number[];
      completedMissions?: number[];
      unlockedRealms?: number[];
      currentRealm?: number;
    }
  } | null;
  
  // Auth methods
  login: (username: string, password: string) => void;
  register: (username: string, password: string, email?: string) => void;
  logout: () => void;
  
  // Progress tracking
  currentRealm: number;
  setCurrentRealm: (realm: number) => void;
  
  // Mission and badge progress
  completedMissions: number[];
  unlockedRealms: number[];
  earnedBadges: number[];
  
  // Progress update methods
  completeMission: (missionId: number) => void;
  unlockRealm: (realmId: number) => void;
  earnBadge: (badgeId: number) => void;
}

// Create default context value
const initialAuthContext: AuthContextType = {
  isAuthenticated: false,
  username: null,
  loading: true,
  isLoading: true,
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
  currentRealm: 1,
  setCurrentRealm: () => {},
  completedMissions: [],
  unlockedRealms: [1, 2, 3, 4, 5, 6, 7],
  earnedBadges: [],
  completeMission: () => {},
  unlockRealm: () => {},
  earnBadge: () => {}
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

// Local storage key
const USER_STORAGE_KEY = 'ashaJourneyUserData';

// Default starting state
const initialProgress: UserProgress = {
  username: '',
  completedMissions: [],
  unlockedRealms: [1, 2, 3, 4, 5, 6, 7], // All realms unlocked by default
  earnedBadges: [],
  currentRealm: 1
};

export function AuthProvider({ children }: { children: ReactNode }) {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [currentRealm, setCurrentRealm] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Progress state
  const [completedMissions, setCompletedMissions] = useState<number[]>([]);
  const [unlockedRealms, setUnlockedRealms] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]); // All realms unlocked
  const [earnedBadges, setEarnedBadges] = useState<number[]>([]);
  
  // Load user data from localStorage on mount
  useEffect(() => {
    try {
      const savedUserData = localStorage.getItem(USER_STORAGE_KEY);
      if (savedUserData) {
        const userData: UserProgress = JSON.parse(savedUserData);
        
        // Set authenticated if we have saved data
        setIsAuthenticated(true);
        setUsername(userData.username);
        
        // Load progress data
        setCompletedMissions(userData.completedMissions || []);
        setUnlockedRealms(userData.unlockedRealms || [1, 2, 3, 4, 5, 6, 7]);
        setEarnedBadges(userData.earnedBadges || []);
        if (userData.currentRealm) {
          setCurrentRealm(userData.currentRealm);
        }
      }
    } catch (error) {
      console.error('Failed to load user data from localStorage:', error);
    }
    // Set loading to false after initialization completes
    setLoading(false);
  }, []);
  
  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (isAuthenticated && username) {
      try {
        const userData: UserProgress = {
          username: username,
          completedMissions,
          unlockedRealms,
          earnedBadges,
          currentRealm
        };
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
      } catch (error) {
        console.error('Failed to save user data to localStorage:', error);
      }
    }
  }, [isAuthenticated, username, completedMissions, unlockedRealms, earnedBadges, currentRealm]);
  
  // Login function - saves user data to localStorage
  const login = (username: string, password: string) => {
    console.log(`Login functionality for ${username}`);
    
    // Check if user exists in localStorage
    try {
      const savedUserData = localStorage.getItem(USER_STORAGE_KEY);
      if (savedUserData) {
        const userData: UserProgress = JSON.parse(savedUserData);
        if (userData.username === username) {
          // Real app would verify password here
          setIsAuthenticated(true);
          setUsername(username);
          setCompletedMissions(userData.completedMissions);
          setUnlockedRealms(userData.unlockedRealms);
          setEarnedBadges(userData.earnedBadges);
          if (userData.currentRealm) {
            setCurrentRealm(userData.currentRealm);
          }
          return;
        }
      }
    } catch (error) {
      console.error('Error checking existing user:', error);
    }
    
    // If no existing user, create a new one
    setIsAuthenticated(true);
    setUsername(username);
    // For a new user, initialize with default progress
    setCompletedMissions([]);
    setUnlockedRealms([1, 2, 3, 4, 5, 6, 7]); // All realms unlocked
    setEarnedBadges([]);
  };
  
  // Register function - creates a new user in localStorage
  const register = (username: string, password: string, email?: string) => {
    console.log(`Registration functionality for ${username}`);
    setIsAuthenticated(true);
    setUsername(username);
    
    // Initialize new user with default progress
    setCompletedMissions([]);
    setUnlockedRealms([1, 2, 3, 4, 5, 6, 7]); // All realms unlocked
    setEarnedBadges([]);
  };
  
  // Logout function - clears current session
  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    // Don't clear localStorage - just end the session
  };
  
  // Update mission progress
  const completeMission = (missionId: number) => {
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions(prev => [...prev, missionId]);
    }
  };
  
  // Unlock a new realm
  const unlockRealm = (realmId: number) => {
    if (!unlockedRealms.includes(realmId)) {
      setUnlockedRealms(prev => [...prev, realmId]);
    }
  };
  
  // Award a badge
  const earnBadge = (badgeId: number) => {
    if (!earnedBadges.includes(badgeId)) {
      setEarnedBadges(prev => [...prev, badgeId]);
    }
  };

  // Create a user object that matches what components are expecting
  const user = isAuthenticated ? {
    username,
    progress: {
      completedRealms: [], // We don't track this separately currently
      completedMissions,
      unlockedRealms,
      currentRealm  // Add the currentRealm property
    }
  } : null;

  const value = {
    isAuthenticated,
    username,
    loading,
    isLoading: loading, // Provide the alias for backward compatibility
    user,
    login,
    register,
    logout,
    currentRealm,
    setCurrentRealm,
    completedMissions,
    unlockedRealms,
    earnedBadges,
    completeMission,
    unlockRealm,
    earnBadge
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  // Since we've provided a default value for our context, it should never be null
  const context = useContext(AuthContext);
  return context;
}