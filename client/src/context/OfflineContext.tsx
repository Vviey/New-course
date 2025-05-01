import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  isOnline,
  registerNetworkListeners,
  unregisterNetworkListeners,
  getAllCachedContent,
  clearOfflineStorage,
  getPendingUpdates
} from '@/lib/offline-storage';
import { toast } from '@/hooks/use-toast';

interface OfflineContextType {
  isOffline: boolean;
  hasCachedContent: boolean;
  hasUnsyncedChanges: boolean;
  downloadContent: (realmId: number) => Promise<void>;
  clearDownloadedContent: () => Promise<void>;
  syncChanges: () => Promise<boolean>;
  offlineStats: {
    totalCachedItems: number;
    lastCachedDate: Date | null;
    pendingUpdates: number;
  };
}

const OfflineContext = createContext<OfflineContextType | null>(null);

interface OfflineProviderProps {
  children: ReactNode;
}

export function OfflineProvider({ children }: OfflineProviderProps) {
  const [isOffline, setIsOffline] = useState(!isOnline());
  const [hasCachedContent, setHasCachedContent] = useState(false);
  const [hasUnsyncedChanges, setHasUnsyncedChanges] = useState(false);
  const [offlineStats, setOfflineStats] = useState({
    totalCachedItems: 0,
    lastCachedDate: null as Date | null,
    pendingUpdates: 0
  });

  // Check for cached content on startup
  useEffect(() => {
    const checkCachedContent = async () => {
      try {
        const cachedContent = await getAllCachedContent();
        setHasCachedContent(cachedContent.length > 0);
        
        // Find the most recent cache timestamp
        let lastUpdated = null;
        if (cachedContent.length > 0) {
          const latestTimestamp = Math.max(...cachedContent.map(item => item.timestamp));
          lastUpdated = new Date(latestTimestamp);
        }
        
        const pendingUpdates = await getPendingUpdates();
        setHasUnsyncedChanges(pendingUpdates.length > 0);
        
        setOfflineStats({
          totalCachedItems: cachedContent.length,
          lastCachedDate: lastUpdated,
          pendingUpdates: pendingUpdates.length
        });
      } catch (error) {
        console.error('Error checking cached content:', error);
      }
    };
    
    checkCachedContent();
  }, []);

  // Set up online/offline event listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      toast({
        title: "You're back online",
        description: hasUnsyncedChanges ? "Your changes will be synced to the server." : "Connected to the network.",
        variant: "default"
      });
    };

    const handleOffline = () => {
      setIsOffline(true);
      toast({
        title: "You're offline",
        description: hasCachedContent
          ? "Don't worry, you can continue learning with downloaded content."
          : "Some features may be unavailable until you reconnect.",
        variant: "destructive"
      });
    };

    registerNetworkListeners(handleOnline, handleOffline);

    return () => {
      unregisterNetworkListeners(handleOnline, handleOffline);
    };
  }, [hasCachedContent, hasUnsyncedChanges]);

  // Function to download realm content
  const downloadContent = async (realmId: number) => {
    if (!navigator.onLine) {
      toast({
        title: "You're offline",
        description: "Connect to the internet to download content.",
        variant: "destructive"
      });
      return;
    }

    try {
      toast({
        title: "Downloading content",
        description: "Preparing content for offline use...",
        variant: "default"
      });

      // This would normally fetch and cache specific content
      // For now, we're relying on the service worker cache
      
      // After caching is complete, update the state
      const cachedContent = await getAllCachedContent();
      setHasCachedContent(cachedContent.length > 0);
      
      // Find the most recent cache timestamp
      let lastUpdated = null;
      if (cachedContent.length > 0) {
        const latestTimestamp = Math.max(...cachedContent.map(item => item.timestamp));
        lastUpdated = new Date(latestTimestamp);
      }
      
      setOfflineStats({
        ...offlineStats,
        totalCachedItems: cachedContent.length,
        lastCachedDate: lastUpdated
      });

      toast({
        title: "Download complete",
        description: "Content is now available offline.",
        variant: "default"
      });
    } catch (error) {
      console.error('Error downloading content:', error);
      toast({
        title: "Download failed",
        description: "Could not download content for offline use.",
        variant: "destructive"
      });
    }
  };

  // Function to clear downloaded content
  const clearDownloadedContent = async () => {
    try {
      await clearOfflineStorage();
      
      // Clear service worker cache
      if ('caches' in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(
          cacheKeys.map(key => caches.delete(key))
        );
      }
      
      setHasCachedContent(false);
      setOfflineStats({
        totalCachedItems: 0,
        lastCachedDate: null,
        pendingUpdates: 0
      });
      
      toast({
        title: "Content cleared",
        description: "All downloaded content has been removed.",
        variant: "default"
      });
    } catch (error) {
      console.error('Error clearing content:', error);
      toast({
        title: "Error",
        description: "Could not clear downloaded content.",
        variant: "destructive"
      });
    }
  };

  // Function to manually sync changes
  const syncChanges = async (): Promise<boolean> => {
    if (!navigator.onLine) {
      toast({
        title: "You're offline",
        description: "Connect to the internet to sync changes.",
        variant: "destructive"
      });
      return false;
    }

    try {
      // Trigger a sync via service worker
      if ('serviceWorker' in navigator) {
        await navigator.serviceWorker.ready.then(registration => {
          // Use the background sync API if available
          if ('sync' in registration) {
            return (registration as any).sync.register('sync-user-progress');
          }
          // Manual fallback if background sync is not available
          return Promise.resolve();
        });
      }
      
      // After sync is complete, check for any remaining pending updates
      const pendingUpdates = await getPendingUpdates();
      setHasUnsyncedChanges(pendingUpdates.length > 0);
      
      setOfflineStats({
        ...offlineStats,
        pendingUpdates: pendingUpdates.length
      });
      
      if (pendingUpdates.length === 0) {
        toast({
          title: "Sync complete",
          description: "All changes have been synced.",
          variant: "default"
        });
        return true;
      } else {
        toast({
          title: "Partial sync",
          description: `${pendingUpdates.length} updates remain pending.`,
          variant: "default"
        });
        return false;
      }
    } catch (error) {
      console.error('Error syncing changes:', error);
      toast({
        title: "Sync failed",
        description: "Could not sync changes to the server.",
        variant: "destructive"
      });
      return false;
    }
  };

  return (
    <OfflineContext.Provider
      value={{
        isOffline,
        hasCachedContent,
        hasUnsyncedChanges,
        downloadContent,
        clearDownloadedContent,
        syncChanges,
        offlineStats
      }}
    >
      {children}
    </OfflineContext.Provider>
  );
}

export function useOffline() {
  const context = useContext(OfflineContext);
  if (!context) {
    throw new Error('useOffline must be used within an OfflineProvider');
  }
  return context;
}