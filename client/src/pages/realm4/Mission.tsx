import React, { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Home, 
  Menu, 
  Pickaxe, 
  Shield, 
  Zap, 
  Globe, 
  Award, 
  Timer 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { mountainForgeTheme } from '@/lib/realm-themes';
import { realm4Missions } from '@/lib/realm4-missions';
import { MiningBasicsSimulator } from '@/components/simulations/MiningBasicsSimulator';
import BitcoinMiningSimulator from '@/components/simulations/BitcoinMiningSimulator';

// Mission component for Realm 4
export default function Realm4Mission() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute<{ id: string }>("/realm4/mission/:id");
  const [currentMission, setCurrentMission] = useState<any>(null);
  const [missionIndex, setMissionIndex] = useState<number | null>(null);
  const [missionCompleted, setMissionCompleted] = useState(false);

  const missionIcons = [
    <Pickaxe className="h-5 w-5" />,
    <Shield className="h-5 w-5" />,
    <Zap className="h-5 w-5" />,
    <Globe className="h-5 w-5" />,
    <Award className="h-5 w-5" />,
    <Timer className="h-5 w-5" />
  ];
  
  useEffect(() => {
    if (params && params.id) {
      const id = parseInt(params.id);
      const missionData = realm4Missions.find(m => m.id === id);
      const index = realm4Missions.findIndex(m => m.id === id);
      
      if (missionData) {
        setCurrentMission(missionData);
        setMissionIndex(index);
        setMissionCompleted(false);
      } else {
        setLocation('/realm4');
      }
    }
  }, [params, setLocation]);
  
  const navigateToNextMission = () => {
    if (missionIndex !== null && missionIndex < realm4Missions.length - 1) {
      const nextMission = realm4Missions[missionIndex + 1];
      setLocation(`/realm4/mission/${nextMission.id}`);
    } else {
      // No more missions, navigate back to realm home
      setLocation('/realm4');
    }
  };
  
  const navigateToPreviousMission = () => {
    if (missionIndex !== null && missionIndex > 0) {
      const prevMission = realm4Missions[missionIndex - 1];
      setLocation(`/realm4/mission/${prevMission.id}`);
    } else {
      // No previous mission, navigate back to realm home
      setLocation('/realm4');
    }
  };
  
  const handleMissionComplete = () => {
    setMissionCompleted(true);
  };
  
  // Render appropriate simulation component based on mission type
  const renderSimulation = () => {
    if (!currentMission) return null;
    
    switch (currentMission.simulationType) {
      case 'miningBasics':
        return (
          <MiningBasicsSimulator 
            explanation={currentMission.simulationData.explanation}
            miningPuzzles={currentMission.simulationData.miningPuzzles}
            hashingSimulation={currentMission.simulationData.hashingSimulation}
            difficultyAdjustment={currentMission.simulationData.difficultyAdjustment}
            quizQuestions={currentMission.simulationData.quizQuestions}
            onComplete={handleMissionComplete}
          />
        );
      // Add other simulation types as they are implemented
      case 'miningConsensus':
      case 'halving':
        return (
          <BitcoinMiningSimulator onComplete={handleMissionComplete} />
        );
      case 'energyUsage':
      case 'africanMining':
      case 'miningChallenge':
        return (
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              {currentMission.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {currentMission.simulationData.explanation}
            </p>
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <p className="text-amber-700 font-medium">Simulation Coming Soon</p>
              <p className="text-amber-600 mt-2">
                This interactive simulation is currently under development. Check back soon!
              </p>
            </div>
            <Button 
              onClick={handleMissionComplete}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Complete Mission
            </Button>
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Unknown Mission Type</h2>
            <p className="text-gray-700">
              This mission type is not recognized. Please return to the realm home.
            </p>
            <Button 
              onClick={() => setLocation('/realm4')}
              className="mt-4 bg-amber-600 hover:bg-amber-700 text-white"
            >
              Return to Realm
            </Button>
          </div>
        );
    }
  };
  
  // Mission completion screen
  const renderCompletionScreen = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto text-center"
      >
        <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
          <Pickaxe className="h-10 w-10 text-amber-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-amber-800 mb-4">
          Mission Complete!
        </h2>
        
        <p className="text-gray-700 mb-8 max-w-md mx-auto">
          Excellent work! You've completed the "{currentMission?.title}" mission
          and gained valuable knowledge about Bitcoin mining.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {missionIndex !== null && missionIndex < realm4Missions.length - 1 ? (
            <Button 
              onClick={navigateToNextMission}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Next Mission <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={() => setLocation('/realm4')}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Back to Realm <Home className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </motion.div>
    );
  };
  
  if (!currentMission) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-amber-600 mb-4" />
          <div className="h-6 w-32 bg-stone-700 rounded mb-3" />
          <div className="h-4 w-48 bg-stone-800 rounded" />
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="min-h-screen pt-4 pb-12 px-4"
      style={{ 
        backgroundColor: mountainForgeTheme.colors.background,
        backgroundImage: mountainForgeTheme.patterns.mountains,
      }}
    >
      {/* Header with navigation */}
      <div className="max-w-6xl mx-auto mb-6 flex justify-between items-center">
        <Button 
          variant="ghost" 
          className="text-amber-500 hover:text-amber-400 hover:bg-stone-800"
          onClick={navigateToPreviousMission}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {missionIndex !== null && missionIndex > 0 ? 'Previous Mission' : 'Back to Realm'}
        </Button>
        
        <Drawer>
          <DrawerTrigger asChild>
            <Button 
              variant="outline" 
              className="border-amber-600 text-amber-500 hover:bg-stone-800"
            >
              <Menu className="mr-2 h-4 w-4" />
              All Missions
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-stone-900 border-amber-800 p-6">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Realm 4 Missions</h3>
              <div className="space-y-2">
                {realm4Missions.map((mission, index) => (
                  <button
                    key={mission.id}
                    className={`w-full text-left p-3 rounded-lg flex items-start ${
                      currentMission.id === mission.id
                        ? 'bg-amber-900/30 border border-amber-600/50'
                        : 'bg-stone-800 hover:bg-stone-700'
                    }`}
                    onClick={() => {
                      setLocation(`/realm4/mission/${mission.id}`);
                    }}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      currentMission.id === mission.id
                        ? 'bg-amber-600 text-stone-900'
                        : 'bg-stone-700 text-amber-500'
                    }`}>
                      {missionIcons[index]}
                    </div>
                    <div>
                      <div className={`font-medium ${
                        currentMission.id === mission.id ? 'text-amber-300' : 'text-stone-200'
                      }`}>
                        {mission.title}
                      </div>
                      <div className="text-xs text-stone-400">
                        {mission.subtitle}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button 
                  variant="ghost" 
                  className="text-amber-500 hover:text-amber-400 hover:bg-stone-800"
                  onClick={() => setLocation('/realm4')}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Realm Home
                </Button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
        
        {missionIndex !== null && missionIndex < realm4Missions.length - 1 && (
          <Button 
            variant="ghost" 
            className="text-amber-500 hover:text-amber-400 hover:bg-stone-800"
            onClick={navigateToNextMission}
          >
            Next Mission
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Mission title */}
      <div 
        className="max-w-4xl mx-auto mb-8 p-6 rounded-xl"
        style={{ backgroundColor: 'rgba(29, 25, 24, 0.8)' }}
      >
        <div className="flex items-center mb-2">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
            style={{ background: mountainForgeTheme.gradients.amber }}
          >
            {missionIndex !== null && missionIcons[missionIndex]}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-amber-400">
              {currentMission.title}
            </h1>
            <p className="text-amber-500">
              {currentMission.subtitle}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-sm uppercase tracking-wider text-stone-400 mb-2">Objectives:</h2>
          <ul className="space-y-2">
            {currentMission.objectives.map((objective: string, index: number) => (
              <li key={index} className="flex items-start text-stone-200">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-2"></div>
                {objective}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mission content */}
      <div className="max-w-6xl mx-auto">
        {missionCompleted ? renderCompletionScreen() : renderSimulation()}
      </div>
    </div>
  );
}