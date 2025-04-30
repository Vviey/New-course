import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Search, Lock, BanknoteIcon, Network, Users, Shield } from 'lucide-react';
import { citadelTheme } from '@/lib/realm-themes';
import { realm2Missions } from '@/lib/realm2-missions';

export default function Realm2Home() {
  const [hoveredMission, setHoveredMission] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };
  
  // Helper function to get correct icon for mission
  const getMissionIcon = (type: string) => {
    switch (type) {
      case 'roleplay':
        return <BanknoteIcon className="w-5 h-5" />;
      case 'privacy':
        return <Search className="w-5 h-5" />;
      case 'exclusion':
        return <Users className="w-5 h-5" />;
      case 'globalflow':
        return <Network className="w-5 h-5" />;
      case 'escape':
        return <Shield className="w-5 h-5" />;
      default:
        return <Lock className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6"
      style={{
        background: `linear-gradient(to bottom, ${citadelTheme.colors.background}, ${citadelTheme.colors.backgroundLight})`,
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <Network className="w-20 h-20 text-blue-400" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text"
            style={{ 
              backgroundImage: citadelTheme.gradients.blue,
              textShadow: '0 0 15px rgba(56, 189, 248, 0.3)'
            }}
          >
            Realm 2: The Surveillance City
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Navigate through the towering tech surveillance city and uncover the challenges of monetary control, surveillance, and financial exclusion.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* City background decoration */}
          <div 
            className="absolute inset-0 z-0 opacity-10" 
            style={{ 
              backgroundImage: citadelTheme.patterns.cityscape,
              backgroundSize: '400px 80px',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'bottom'
            }}
          ></div>
          
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: citadelTheme.patterns.grid,
              backgroundSize: '40px 40px'
            }}
          ></div>
          
          {/* Missions grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            {realm2Missions.map((mission) => (
              <motion.div
                key={mission.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredMission(mission.id)}
                onMouseLeave={() => setHoveredMission(null)}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: citadelTheme.shadows.neon,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br rounded-xl overflow-hidden relative group"
                style={{ 
                  backgroundImage: hoveredMission === mission.id 
                    ? citadelTheme.gradients.tech
                    : 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.4))',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(56, 189, 248, 0.1)'
                }}
              >
                <Link href={`/realm2/mission/${mission.id}`}>
                  <a className="block p-6 h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-lg" 
                        style={{ 
                          background: 'rgba(56, 189, 248, 0.2)',
                          boxShadow: '0 0 10px rgba(56, 189, 248, 0.2)' 
                        }}
                      >
                        {getMissionIcon(mission.simulationType)}
                      </div>
                      <div className="px-3 py-1 rounded-full text-xs font-medium" 
                        style={{ 
                          background: 'rgba(37, 99, 235, 0.2)',
                          color: citadelTheme.colors.secondary 
                        }}
                      >
                        Mission {mission.id % 200}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-1" style={{ color: citadelTheme.colors.primary }}>
                      {mission.title}
                    </h2>
                    
                    <p className="text-sm mb-4" style={{ color: citadelTheme.colors.secondary }}>
                      {mission.subtitle}
                    </p>
                    
                    <p className="text-sm text-blue-100 line-clamp-3 mb-6">
                      {mission.description.split('.')[0]}.
                    </p>
                    
                    <div className="flex justify-between items-center mt-auto">
                      <div>
                        <span className="text-xs font-medium" style={{ color: citadelTheme.colors.accent2 }}>
                          {mission.simulationType.charAt(0).toUpperCase() + mission.simulationType.slice(1)} challenge
                        </span>
                      </div>
                      
                      <div className="flex items-center text-blue-100 text-sm font-medium group-hover:text-blue-300 transition-colors">
                        Begin
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </Link>
                
                {/* Glowing border effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredMission === mission.id ? 1 : 0 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ 
                    boxShadow: 'inset 0 0 0 2px rgba(56, 189, 248, 0.5)',
                    borderRadius: 'inherit',
                    filter: 'blur(1px)'
                  }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Navigation back to main map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Link href="/map">
            <a className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium transition-all"
              style={{ 
                background: citadelTheme.gradients.blue,
                boxShadow: citadelTheme.shadows.button,
              }}
            >
              <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
              Return to Journey Map
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}