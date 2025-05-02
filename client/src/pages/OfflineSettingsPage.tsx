import { useState } from 'react';
import { useLocation } from 'wouter';
import { useOffline } from '@/context/OfflineContext';
import { OfflineStatus } from '@/components/ui/offline-status';
import { RealmData } from '@/lib/realm-data';
import { Button } from '@/components/ui/button';
import { Download, Trash2, ArrowLeft } from 'lucide-react';
import { getRealmName } from '@/lib/realm-utils';

export default function OfflineSettingsPage() {
  const [, setLocation] = useLocation();
  const { 
    isOffline, 
    hasCachedContent, 
    downloadContent, 
    clearDownloadedContent 
  } = useOffline();
  
  const [isDeleting, setIsDeleting] = useState(false);
  const [downloadingRealmId, setDownloadingRealmId] = useState<number | null>(null);

  const handleDownloadRealm = async (realmId: number) => {
    setDownloadingRealmId(realmId);
    try {
      await downloadContent(realmId);
    } finally {
      setDownloadingRealmId(null);
    }
  };

  const handleClearContent = async () => {
    setIsDeleting(true);
    try {
      await clearDownloadedContent();
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-amber-950 text-amber-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => setLocation('/home')} 
            className="flex items-center text-amber-300 hover:text-amber-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
        
        <h1 className="text-3xl font-bold text-amber-300 mb-6">Offline Settings</h1>
        
        {/* Current status */}
        <div className="bg-amber-900/30 border border-amber-700/30 rounded-lg p-4 mb-8">
          <h2 className="text-xl font-bold text-amber-300 mb-4">Connection Status</h2>
          <OfflineStatus />
        </div>
        
        {/* Realm content download options */}
        <div className="bg-amber-900/30 border border-amber-700/30 rounded-lg p-4 mb-8">
          <h2 className="text-xl font-bold text-amber-300 mb-4">Download Content</h2>
          
          {isOffline ? (
            <div className="bg-red-900/20 border border-red-700/20 rounded p-4 mb-4">
              <p className="text-amber-200">
                You are currently offline. Connect to the internet to download content.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-amber-200 mb-4">
                Download realm content to make it available offline. This will allow you to continue learning even when you don't have an internet connection.
              </p>
              
              <div className="space-y-3">
                {RealmData.map((realm) => (
                  <div 
                    key={realm.id} 
                    className="flex items-center justify-between p-3 bg-amber-900/20 border border-amber-700/20 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium text-amber-300">{getRealmName(realm.id)}</h3>
                      <p className="text-sm text-amber-200">{realm.description}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={isOffline || downloadingRealmId === realm.id}
                      onClick={() => handleDownloadRealm(realm.id)}
                      className="text-amber-200 border-amber-700 bg-amber-900/30 hover:bg-amber-900/50"
                    >
                      {downloadingRealmId === realm.id ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-amber-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </>
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Clear offline content */}
        <div className="bg-amber-900/30 border border-amber-700/30 rounded-lg p-4">
          <h2 className="text-xl font-bold text-amber-300 mb-4">Manage Offline Content</h2>
          
          {hasCachedContent ? (
            <div className="space-y-4">
              <p className="text-amber-200">
                Clear all downloaded content to free up storage space on your device.
              </p>
              
              <Button
                variant="destructive"
                disabled={isDeleting || !hasCachedContent}
                onClick={handleClearContent}
                className="bg-red-800 hover:bg-red-700 text-white"
              >
                {isDeleting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Clearing...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All Offline Content
                  </>
                )}
              </Button>
            </div>
          ) : (
            <p className="text-amber-200">
              You don't have any content downloaded for offline use yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}