import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'wouter';
import { ChevronLeft, Award } from 'lucide-react';
import MissionLayout from '../../components/mission-layout';
import { realm7Missions } from '../../lib/realm7-missions'; // Missions for The Summit of Knowledge (Realm 7)
import { navigate } from '../../lib/router';
import { getRealmName } from '../../lib/realm-utils'; // Utilities for standardized realm naming

// Import mission components
import ComprehensiveReview from './components/ComprehensiveReview';
import PracticalChallenges from './components/PracticalChallenges';
import TechnicalMastery from './components/TechnicalMastery';
import FinalChallenge from './components/FinalChallenge';
import Certification from './components/Certification';

export default function Realm7Mission() {
  const params = useParams<{ id: string }>();
  const [_, setLocation] = useLocation();
  const [mission, setMission] = useState(realm7Missions.find(m => m.id === parseInt(params.id)) || realm7Missions[0]);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    // Find mission data based on ID
    const currentMission = realm7Missions.find(m => m.id === parseInt(params.id));
    if (currentMission) {
      setMission(currentMission);
      setIsComplete(currentMission.completed);
    }
  }, [params.id]);
  
  const handleComplete = () => {
    setIsComplete(true);
    setTimeout(() => {
      navigate('/realm7/missions', setLocation);
    }, 3000);
  };
  
  // Render specific mission component based on ID
  const renderMissionContent = () => {
    switch (parseInt(params.id)) {
      case 1:
        return <ComprehensiveReview onComplete={handleComplete} />;
      case 2:
        return <PracticalChallenges onComplete={handleComplete} />;
      case 3:
        return <TechnicalMastery onComplete={handleComplete} />;
      case 4:
        return <FinalChallenge onComplete={handleComplete} />;
      case 5:
        return <Certification onComplete={handleComplete} />;
      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-400">Mission content not found.</p>
            <button
              onClick={() => navigate('/realm7/missions', setLocation)}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Return to Missions
            </button>
          </div>
        );
    }
  };
  
  if (!mission) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-300 mb-4">Mission Not Found</h2>
        <p className="text-gray-400 mb-8">The mission you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/realm7/missions', setLocation)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Return to Missions
        </button>
      </div>
    );
  }
  
  return (
    <MissionLayout
      realmId={7}
      title={mission.title}
      subtitle={mission.subtitle}
      progress={isComplete ? 100 : 0}
    >
      {isComplete ? (
        <div className="bg-green-900/20 border border-green-700 rounded-lg p-6 text-center">
          <div className="inline-block bg-green-900/30 p-3 rounded-full mb-4">
            <Award className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">Mission Complete!</h3>
          <p className="text-gray-300 mb-4">
            You've successfully completed this mission and demonstrated your Bitcoin knowledge.
          </p>
          <button
            onClick={() => navigate('/realm7/missions', setLocation)}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Continue Your Journey
          </button>
        </div>
      ) : (
        renderMissionContent()
      )}
    </MissionLayout>
  );
}