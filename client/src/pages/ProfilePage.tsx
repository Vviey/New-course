import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/context/AuthContext';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { BadgeIcon, Bookmark, ChevronLeft, Medal, Settings, Star, User } from 'lucide-react';
import { RealmData } from '@/lib/realm-data';

export default function ProfilePage() {
  const [, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  
  // Mock data for badges
  const userBadges = [
    { id: 1, name: 'Origins Explorer', description: 'Completed the Origin of Money realm', icon: '🏆', obtained: true },
    { id: 2, name: 'Banking Investigator', description: 'Understood how central banking works', icon: '🏦', obtained: true },
    { id: 3, name: 'Bitcoin Basics', description: 'Learned the foundations of Bitcoin', icon: '₿', obtained: false },
    { id: 4, name: 'Master Miner', description: 'Discovered how Bitcoin mining works', icon: '⛏️', obtained: false },
    { id: 5, name: 'Governance Guru', description: 'Explored Bitcoin governance and forks', icon: '🔱', obtained: false },
    { id: 6, name: 'Ubuntu Practitioner', description: 'Applied Bitcoin knowledge in real scenarios', icon: '🌍', obtained: false },
    { id: 7, name: 'Wisdom Keeper', description: 'Completed all realms of knowledge', icon: '🧠', obtained: false },
  ];
  
  // Mock user progress and achievements
  const userProgress = {
    completedMissions: 5,
    totalMissions: 28,
    completedRealms: 1,
    totalRealms: 7,
    currentRealmId: 2,
  };
  
  // Mock saved content
  const savedContent = [
    { id: 1, title: 'The History of Money', type: 'Mission', realmId: 1, missionId: 1 },
    { id: 2, title: 'Properties of Good Money', type: 'Article', realmId: 1, missionId: 2 },
    { id: 3, title: 'Understanding CBDCs', type: 'Mission', realmId: 2, missionId: 3 },
  ];
  
  const handleBackClick = () => {
    setLocation('/map');
  };
  
  const goToMission = (realmId: number, missionId: number) => {
    setLocation(`/realm/${realmId}/mission/${missionId}`);
  };
  
  const goToRealm = (realmId: number) => {
    setLocation(`/realm/${realmId}`);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center">
          <button 
            onClick={handleBackClick}
            className="mr-4 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Your Profile</h1>
        </div>
        
        <button 
          onClick={() => logout()}
          className="px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 text-sm"
        >
          Sign Out
        </button>
      </header>
      
      {/* Profile overview */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-4">
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Avatar */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-4xl">
              {user?.username ? user.username.charAt(0).toUpperCase() : <User size={48} />}
            </div>
            
            {/* User info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">{user?.username || 'Anonymous Explorer'}</h2>
              <p className="text-gray-400 mb-4">{user?.email || 'user@example.com'}</p>
              
              {/* Progress bars */}
              <div className="space-y-3 max-w-md">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Journey Progress</span>
                    <span>{Math.round((userProgress.completedMissions / userProgress.totalMissions) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-700" 
                      style={{ width: `${(userProgress.completedMissions / userProgress.totalMissions) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex space-x-3 text-sm">
                  <div className="flex items-center">
                    <Medal size={16} className="mr-1 text-amber-500" />
                    <span>{userBadges.filter(b => b.obtained).length} Badges</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-1 text-amber-500" />
                    <span>{userProgress.completedMissions} Missions Completed</span>
                  </div>
                  <div className="flex items-center">
                    <BadgeIcon size={16} className="mr-1 text-amber-500" />
                    <span>Level {userProgress.completedRealms}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Current realm */}
            <div className="md:text-right">
              <p className="text-sm text-gray-400 mb-1">Current Realm</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToRealm(userProgress.currentRealmId)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-700 to-amber-600 text-white font-medium"
              >
                {RealmData.find(r => r.id === userProgress.currentRealmId)?.name || 'Next Realm'}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-800/30 p-1 mb-6">
            <Tab 
              className={({ selected }) => 
                `w-full py-3 text-sm font-medium leading-5 rounded-lg
                 ${selected 
                   ? 'bg-gray-800 text-amber-400 shadow' 
                   : 'text-gray-400 hover:bg-gray-800/30 hover:text-white'
                 }`
              }
            >
              Badges & Achievements
            </Tab>
            <Tab 
              className={({ selected }) => 
                `w-full py-3 text-sm font-medium leading-5 rounded-lg
                 ${selected 
                   ? 'bg-gray-800 text-amber-400 shadow' 
                   : 'text-gray-400 hover:bg-gray-800/30 hover:text-white'
                 }`
              }
            >
              Saved Content
            </Tab>
            <Tab 
              className={({ selected }) => 
                `w-full py-3 text-sm font-medium leading-5 rounded-lg
                 ${selected 
                   ? 'bg-gray-800 text-amber-400 shadow' 
                   : 'text-gray-400 hover:bg-gray-800/30 hover:text-white'
                 }`
              }
            >
              Settings
            </Tab>
          </Tab.List>
          
          <Tab.Panels>
            {/* Badges Panel */}
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {userBadges.map(badge => (
                  <div 
                    key={badge.id} 
                    className={`rounded-xl p-4 flex items-center border
                               ${badge.obtained 
                                 ? 'bg-gray-800/60 border-amber-700/50' 
                                 : 'bg-gray-900/40 border-gray-800 opacity-60'
                               }`}
                  >
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4
                                ${badge.obtained 
                                  ? 'bg-gradient-to-br from-amber-500 to-amber-700' 
                                  : 'bg-gray-800'
                                }`}
                    >
                      {badge.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{badge.name}</h3>
                      <p className="text-sm text-gray-400">{badge.description}</p>
                      {!badge.obtained && (
                        <p className="text-xs mt-1 text-gray-500">Not yet earned</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
            
            {/* Saved Content Panel */}
            <Tab.Panel>
              <div className="space-y-3">
                {savedContent.map(content => (
                  <motion.div 
                    key={content.id}
                    whileHover={{ scale: 1.01 }}
                    className="rounded-xl p-4 border border-gray-800 bg-gray-800/30 flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                        <Bookmark size={18} className="text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">{content.title}</h3>
                        <p className="text-sm text-gray-400">
                          {content.type} • {RealmData.find(r => r.id === content.realmId)?.name}
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => goToMission(content.realmId, content.missionId)}
                      className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-sm"
                    >
                      View
                    </button>
                  </motion.div>
                ))}
                
                {savedContent.length === 0 && (
                  <div className="text-center py-12">
                    <Bookmark size={48} className="mx-auto mb-4 text-gray-600" />
                    <h3 className="text-lg font-medium">No saved content yet</h3>
                    <p className="text-gray-500">Bookmark missions and articles as you explore</p>
                  </div>
                )}
              </div>
            </Tab.Panel>
            
            {/* Settings Panel */}
            <Tab.Panel>
              <div className="bg-gray-800/30 rounded-xl border border-gray-800 divide-y divide-gray-800">
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Settings size={18} className="mr-2" />
                    Account Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Display Name</label>
                      <input 
                        type="text" 
                        value={user?.username || ''} 
                        className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:border-amber-500 focus:outline-none"
                        disabled 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        value={user?.email || ''} 
                        className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 focus:border-amber-500 focus:outline-none"
                        disabled 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4">Preferences</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Dark Mode</h4>
                        <p className="text-sm text-gray-400">Use dark theme</p>
                      </div>
                      <div className="w-12 h-6 rounded-full bg-amber-600 relative">
                        <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notifications</h4>
                        <p className="text-sm text-gray-400">Receive learning reminders</p>
                      </div>
                      <div className="w-12 h-6 rounded-full bg-gray-700 relative">
                        <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-4">Advanced</h3>
                  
                  <div className="space-y-3">
                    <button 
                      className="w-full text-left px-4 py-3 rounded bg-gray-800 hover:bg-gray-700 flex justify-between items-center"
                    >
                      <span>Reset Progress</span>
                      <ChevronLeft size={18} className="transform rotate-180" />
                    </button>
                    
                    <button 
                      className="w-full text-left px-4 py-3 rounded bg-red-900/30 text-red-400 hover:bg-red-900/50 flex justify-between items-center"
                    >
                      <span>Delete Account</span>
                      <ChevronLeft size={18} className="transform rotate-180" />
                    </button>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}