import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { ChevronLeft, CheckCircle, Circle, Lock, Award, BookOpen, Zap, Code, FileCheck } from 'lucide-react';
import { realm7Missions } from '../../lib/realm7-missions'; // Missions for The Summit of Knowledge (Realm 7)
import { navigate } from '../../lib/router';

export default function Realm7Missions() {
  const [_, setLocation] = useLocation();
  const [missions, setMissions] = useState(realm7Missions);
  const [completedCount, setCompletedCount] = useState(0);
  
  // Update completion count
  useEffect(() => {
    const completed = missions.filter(mission => mission.completed).length;
    setCompletedCount(completed);
  }, [missions]);
  
  // Get mission type icon
  const getMissionTypeIcon = (type: string) => {
    switch (type) {
      case 'comprehensive':
        return <BookOpen className="h-5 w-5" />;
      case 'practical':
        return <Zap className="h-5 w-5" />;
      case 'technical':
        return <Code className="h-5 w-5" />;
      case 'final':
        return <FileCheck className="h-5 w-5" />;
      case 'certificate':
        return <Award className="h-5 w-5" />;
      default:
        return <Circle className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate('/realm7', setLocation)}
          className="mr-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-gray-400" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-purple-500">Final Challenges</h1>
          <p className="text-gray-400">Complete all missions to earn your certification</p>
        </div>
      </div>
      
      {/* Progress tracker */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Progress</span>
          <span>{completedCount} of {missions.length} missions completed</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600 transition-all duration-300"
            style={{ width: `${(completedCount / missions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Mission cards */}
      <div className="space-y-6">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg transition-all hover:border-gray-700"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    mission.contentType === 'certificate'
                      ? 'bg-yellow-900/30 text-yellow-400'
                      : mission.contentType === 'final'
                        ? 'bg-red-900/30 text-red-400'
                        : mission.contentType === 'technical'
                          ? 'bg-blue-900/30 text-blue-400'
                          : mission.contentType === 'practical'
                            ? 'bg-green-900/30 text-green-400'
                            : 'bg-purple-900/30 text-purple-400'
                  }`}>
                    {getMissionTypeIcon(mission.contentType)}
                  </div>
                  
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-xl font-semibold text-gray-200 mr-3">{mission.title}</h2>
                      <div className={`text-xs px-2 py-0.5 rounded ${
                        mission.contentType === 'certificate'
                          ? 'bg-yellow-900/30 text-yellow-400'
                          : mission.contentType === 'final'
                            ? 'bg-red-900/30 text-red-400'
                            : mission.contentType === 'technical'
                              ? 'bg-blue-900/30 text-blue-400'
                              : mission.contentType === 'practical'
                                ? 'bg-green-900/30 text-green-400'
                                : 'bg-purple-900/30 text-purple-400'
                      }`}>
                        {mission.contentType.charAt(0).toUpperCase() + mission.contentType.slice(1)}
                      </div>
                    </div>
                    <p className="text-gray-400 mt-1">{mission.subtitle}</p>
                  </div>
                </div>
                
                <div>
                  {mission.completed ? (
                    <div className="bg-green-900/30 p-1 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                  ) : mission.unlocked ? (
                    <div className="bg-gray-800 p-1 rounded-full">
                      <Circle className="h-6 w-6 text-gray-400" />
                    </div>
                  ) : (
                    <div className="bg-gray-800 p-1 rounded-full">
                      <Lock className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-4 text-gray-300 text-sm">
                {mission.description}
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => navigate(`/realm7/mission/${mission.id}`, setLocation)}
                  disabled={!mission.unlocked}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    !mission.unlocked
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : mission.completed
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {mission.completed ? 'Review' : 'Start Mission'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Certification notice */}
      {completedCount === missions.length - 1 && (
        <div className="mt-8 bg-yellow-900/20 border border-yellow-800 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-900/30 p-3 rounded-full">
              <Award className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Almost There!</h3>
          <p className="text-gray-300">
            You've completed all the challenges. Proceed to the final certification mission to receive your 
            Bitcoin journey certificate!
          </p>
          <button
            onClick={() => navigate(`/realm7/mission/5`, setLocation)}
            className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Claim Your Certificate
          </button>
        </div>
      )}
      
      {completedCount === missions.length && (
        <div className="mt-8 bg-green-900/20 border border-green-800 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-900/30 p-3 rounded-full">
              <Award className="h-8 w-8 text-green-400" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-green-400 mb-2">Journey Complete!</h3>
          <p className="text-gray-300">
            Congratulations! You've mastered all realms of Bitcoin knowledge and earned your certification.
            Your journey with Asha is complete, but your Bitcoin adventure continues!
          </p>
        </div>
      )}
    </div>
  );
}