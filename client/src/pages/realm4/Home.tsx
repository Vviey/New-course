import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// The Mountain Forge - Realm 4 Home Page
export default function Realm4Home() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  // Handler to navigate to missions
  const handleStartMission = (missionId: number) => {
    setLocation(`/realm/4/mission/${missionId}`);
  };

  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Item animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-xl font-medium text-orange-500">Loading The Mountain Forge...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8" 
         style={{
           background: "linear-gradient(to bottom, #000000, #1a0f00)",
           backgroundImage: "url('/realms/forks.jpg')",
           backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundAttachment: "fixed",
           backgroundBlendMode: "overlay"
         }}>
      
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-md bg-black/60 rounded-xl p-6 mb-8 border border-orange-900/50">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">The Mountain Forge</h1>
          <p className="text-xl text-orange-200 mb-6">Realm 4: Where Bitcoin Miners Compete Through Computation</p>
          
          <p className="text-gray-300 mb-4">
            Welcome to the Mountain Forge, the realm where energy transforms into digital security through the 
            competitive computational work of Bitcoin miners.
          </p>
          
          <p className="text-gray-300 mb-4">
            In this realm, Asha will learn how mining secures the Bitcoin network, why computational "work" matters, 
            and how miners contribute to blockchain consensus while being incentivized through block rewards.
          </p>
          
          <div className="flex space-x-4 mt-8">
            <button 
              onClick={() => setLocation('/map')}
              className="px-5 py-2 bg-transparent border border-orange-600 text-orange-400 rounded-md hover:bg-orange-900/30 transition-colors"
            >
              Return to Map
            </button>
            <button 
              onClick={() => handleStartMission(1)}
              className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              Begin Journey
            </button>
          </div>
        </div>
        
        {/* Mission cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-md bg-black/60 rounded-xl p-5 border border-orange-900/50 hover:border-orange-500/70 transition-all cursor-pointer"
            onClick={() => handleStartMission(1)}
          >
            <div className="h-40 rounded-lg bg-gradient-to-br from-orange-700 to-orange-900 mb-4 flex items-center justify-center">
              <span className="text-5xl">⛏️</span>
            </div>
            <h3 className="text-xl font-medium text-orange-400 mb-2">Mining Mechanics</h3>
            <p className="text-gray-400">Learn how miners secure the network through computational work and proof-of-work consensus.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-md bg-black/60 rounded-xl p-5 border border-orange-900/50 hover:border-orange-500/70 transition-all cursor-pointer"
            onClick={() => handleStartMission(2)}
          >
            <div className="h-40 rounded-lg bg-gradient-to-br from-orange-700 to-orange-900 mb-4 flex items-center justify-center">
              <span className="text-5xl">🔍</span>
            </div>
            <h3 className="text-xl font-medium text-orange-400 mb-2">Hash Functions</h3>
            <p className="text-gray-400">Discover the cryptographic building blocks that power Bitcoin mining and ensure security.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-md bg-black/60 rounded-xl p-5 border border-orange-900/50 hover:border-orange-500/70 transition-all cursor-pointer"
            onClick={() => handleStartMission(3)}
          >
            <div className="h-40 rounded-lg bg-gradient-to-br from-orange-700 to-orange-900 mb-4 flex items-center justify-center">
              <span className="text-5xl">⚡</span>
            </div>
            <h3 className="text-xl font-medium text-orange-400 mb-2">Energy & Incentives</h3>
            <p className="text-gray-400">Explore the role of energy in Bitcoin mining and how miners are economically incentivized.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-md bg-black/60 rounded-xl p-5 border border-orange-900/50 hover:border-orange-500/70 transition-all cursor-pointer opacity-70"
          >
            <div className="h-40 rounded-lg bg-gradient-to-br from-orange-900/50 to-orange-950 mb-4 flex items-center justify-center">
              <span className="text-2xl text-orange-300/60">Coming Soon</span>
            </div>
            <h3 className="text-xl font-medium text-orange-400/70 mb-2">Mining Pools</h3>
            <p className="text-gray-500">Understand how miners cooperate in pools to share rewards more consistently.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-md bg-black/60 rounded-xl p-5 border border-orange-900/50 hover:border-orange-500/70 transition-all cursor-pointer opacity-70"
          >
            <div className="h-40 rounded-lg bg-gradient-to-br from-orange-900/50 to-orange-950 mb-4 flex items-center justify-center">
              <span className="text-2xl text-orange-300/60">Coming Soon</span>
            </div>
            <h3 className="text-xl font-medium text-orange-400/70 mb-2">Mining Challenges</h3>
            <p className="text-gray-500">Learn about mining difficulty adjustments and hardware evolution over time.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}