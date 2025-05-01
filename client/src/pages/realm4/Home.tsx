import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { 
  Pickaxe, 
  Shield, 
  Zap, 
  Globe, 
  Award, 
  Timer, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mountainForgeTheme } from '@/lib/realm-themes';
import { realm4Missions } from '@/lib/realm4-missions';

export default function Realm4Home() {
  const [hoverState, setHoverState] = useState<number | null>(null);

  const missionIcons = [
    <Pickaxe className="h-6 w-6" />,
    <Shield className="h-6 w-6" />,
    <Zap className="h-6 w-6" />,
    <Globe className="h-6 w-6" />,
    <Award className="h-6 w-6" />,
    <Timer className="h-6 w-6" />
  ];
  
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 pt-6 pb-12 px-4">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <div 
          className="rounded-2xl overflow-hidden relative"
          style={{ 
            backgroundImage: mountainForgeTheme.patterns.mountains,
            backgroundColor: mountainForgeTheme.colors.background,
            boxShadow: mountainForgeTheme.shadows.ambient,
          }}
        >
          <div className="relative z-10 p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-amber-400">
              Realm 4: The Mountain Forge
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-6 text-amber-100">
              Discover the mining technology that powers Bitcoin, secures the network, and creates digital scarcity through energy.
            </p>
            <p className="mb-8 max-w-2xl text-stone-300">
              In this realm, you'll explore the mechanics of Proof-of-Work mining, how miners secure the network through consensus, 
              the truth about Bitcoin's energy usage, and the unique opportunities for Bitcoin mining in Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white"
                asChild
              >
                <Link to={`/realm4/mission/${realm4Missions[0].id}`}>
                  Begin First Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-amber-500 text-amber-400 hover:bg-amber-950"
              >
                Realm Overview
              </Button>
            </div>
          </div>
          
          <div 
            className="absolute inset-0 opacity-20 bg-repeat"
            style={{ backgroundImage: mountainForgeTheme.patterns.circuits }}
          />
          
          <div 
            className="absolute right-0 bottom-0 h-48 w-48 md:h-64 md:w-64 rounded-full opacity-30"
            style={{ 
              background: mountainForgeTheme.gradients.fire,
              filter: 'blur(40px)',
              transform: 'translate(20%, 30%)'
            }}
          />
        </div>
      </motion.div>
      
      {/* Missions Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-amber-400 flex items-center">
          <Pickaxe className="mr-2 h-5 w-5" />
          Mining Missions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realm4Missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoverState(index)}
              onMouseLeave={() => setHoverState(null)}
            >
              <Link to={`/realm4/mission/${mission.id}`}>
                <Card className="bg-stone-800 border-stone-700 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <div 
                    className="h-2"
                    style={{ background: mountainForgeTheme.gradients.amber }}
                  />
                  <CardContent className="pt-6 flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-amber-900"
                        style={{ background: mountainForgeTheme.gradients.amber }}
                      >
                        {missionIcons[index]}
                      </div>
                      <div className="text-sm text-amber-500 font-mono">
                        #{mission.id}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 text-amber-300">
                      {mission.title}
                    </h3>
                    <p className="text-sm text-amber-500 mb-3">
                      {mission.subtitle}
                    </p>
                    
                    <p className="text-stone-400 text-sm mb-4 line-clamp-3">
                      {mission.description}
                    </p>
                    
                    <div className="mt-auto flex items-center text-amber-400 text-sm">
                      Start Mission
                      <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        hoverState === index ? 'translate-x-1' : ''
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Realm Info */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="rounded-xl p-6 relative overflow-hidden"
            style={{ 
              background: mountainForgeTheme.colors.backgroundLight,
              boxShadow: mountainForgeTheme.shadows.card
            }}
          >
            <h3 className="text-xl font-bold mb-3 text-amber-300">Realm Skills</h3>
            <ul className="space-y-2 text-stone-300 relative z-10">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Proof-of-Work Mining
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Bitcoin Network Security
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Energy Economics
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Difficulty Adjustment
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Game Theory
              </li>
            </ul>
            <div 
              className="absolute bottom-0 right-0 h-24 w-24 rounded-full opacity-30"
              style={{ 
                background: mountainForgeTheme.gradients.fire,
                filter: 'blur(20px)',
                transform: 'translate(30%, 30%)'
              }}
            />
          </div>
          
          <div 
            className="rounded-xl p-6 relative overflow-hidden"
            style={{ 
              background: mountainForgeTheme.colors.backgroundLight,
              boxShadow: mountainForgeTheme.shadows.card
            }}
          >
            <h3 className="text-xl font-bold mb-3 text-amber-300">Key Concepts</h3>
            <ul className="space-y-2 text-stone-300 relative z-10">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Hashing Functions
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Mining Incentives
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Grid Stabilization
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Economic Development
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Bitcoin Halvings
              </li>
            </ul>
            <div 
              className="absolute bottom-0 right-0 h-24 w-24 rounded-full opacity-30"
              style={{ 
                background: mountainForgeTheme.gradients.amber,
                filter: 'blur(20px)',
                transform: 'translate(30%, 30%)'
              }}
            />
          </div>
          
          <div 
            className="rounded-xl p-6 relative overflow-hidden"
            style={{ 
              background: mountainForgeTheme.colors.backgroundLight,
              boxShadow: mountainForgeTheme.shadows.card
            }}
          >
            <h3 className="text-xl font-bold mb-3 text-amber-300">Realm Rewards</h3>
            <ul className="space-y-2 text-stone-300 relative z-10">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Mining Proficiency Badge
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Energy Analyst Certificate
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                500 Knowledge Tokens
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Unlocks Realm 5
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                Mountain Forge Avatar
              </li>
            </ul>
            <div 
              className="absolute bottom-0 right-0 h-24 w-24 rounded-full opacity-30"
              style={{ 
                background: mountainForgeTheme.gradients.fire,
                filter: 'blur(20px)',
                transform: 'translate(30%, 30%)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}