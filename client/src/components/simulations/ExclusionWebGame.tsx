import React, { useState } from 'react';
import { Link2, AlertCircle, Check, X } from 'lucide-react';

interface Barrier {
  id: number;
  name: string;
  description: string;
}

interface Group {
  id: number;
  name: string;
  description: string;
}

interface CorrectMatch {
  barrierId: number;
  groupId: number;
  explanation: string;
}

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  title: string;
  content: string;
}

interface ExclusionWebGameProps {
  barriers: Barrier[];
  groups: Group[];
  correctMatches: CorrectMatch[];
  stats: Stat[];
  caseStudies: CaseStudy[];
  onComplete?: () => void;
}

export function ExclusionWebGame({ 
  barriers, 
  groups, 
  correctMatches, 
  stats,
  caseStudies,
  onComplete 
}: ExclusionWebGameProps) {
  const [selectedBarrier, setSelectedBarrier] = useState<Barrier | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [connections, setConnections] = useState<{barrier: Barrier, group: Group, correct: boolean, explanation?: string}[]>([]);
  const [feedback, setFeedback] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  
  const handleBarrierClick = (barrier: Barrier) => {
    setSelectedBarrier(barrier);
    setFeedback(null);
  };
  
  const handleGroupClick = (group: Group) => {
    setSelectedGroup(group);
    setFeedback(null);
  };
  
  const createConnection = () => {
    if (!selectedBarrier || !selectedGroup) {
      setFeedback({
        message: 'Please select both a barrier and a group to create a connection.',
        type: 'error'
      });
      return;
    }
    
    // Check if this connection already exists
    const existingConnection = connections.find(
      conn => conn.barrier.id === selectedBarrier.id && conn.group.id === selectedGroup.id
    );
    
    if (existingConnection) {
      setFeedback({
        message: 'This connection already exists.',
        type: 'error'
      });
      return;
    }
    
    // Check if this is a correct match
    const correctMatch = correctMatches.find(
      match => match.barrierId === selectedBarrier.id && match.groupId === selectedGroup.id
    );
    
    const isCorrect = Boolean(correctMatch);
    
    setConnections([
      ...connections,
      {
        barrier: selectedBarrier,
        group: selectedGroup,
        correct: isCorrect,
        explanation: correctMatch?.explanation
      }
    ]);
    
    setFeedback({
      message: isCorrect 
        ? 'Correct match! This is indeed a significant barrier for this group.' 
        : 'This connection exists but is not one of the most significant barriers for this group.',
      type: isCorrect ? 'success' : 'error'
    });
    
    setSelectedBarrier(null);
    setSelectedGroup(null);
  };
  
  const removeConnection = (index: number) => {
    const newConnections = [...connections];
    newConnections.splice(index, 1);
    setConnections(newConnections);
  };
  
  const allCorrectMatchesFound = correctMatches.every(correctMatch => 
    connections.some(
      connection => 
        connection.barrier.id === correctMatch.barrierId && 
        connection.group.id === correctMatch.groupId &&
        connection.correct
    )
  );
  
  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 bg-amber-50">
        <h2 className="text-2xl font-bold text-amber-800 mb-2">
          Financial Exclusion in Africa: Matching Exercise
        </h2>
        <p className="text-amber-700 mb-6">
          Match different barriers to financial inclusion with the groups most affected by them.
        </p>
        
        {/* Stats display */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Barriers column */}
          <div>
            <h3 className="font-semibold text-amber-800 mb-4 flex items-center">
              <AlertCircle size={18} className="mr-2 text-amber-600" />
              Financial Barriers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {barriers.map(barrier => (
                <div
                  key={barrier.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    selectedBarrier?.id === barrier.id
                      ? 'bg-amber-500 text-white'
                      : 'bg-amber-100 hover:bg-amber-200'
                  }`}
                  onClick={() => handleBarrierClick(barrier)}
                >
                  <div className="font-medium">{barrier.name}</div>
                  <div className={`text-xs mt-1 ${selectedBarrier?.id === barrier.id ? 'text-amber-100' : 'text-gray-600'}`}>
                    {barrier.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Groups column */}
          <div>
            <h3 className="font-semibold text-amber-800 mb-4 flex items-center">
              <AlertCircle size={18} className="mr-2 text-amber-600" />
              Affected Groups
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {groups.map(group => (
                <div
                  key={group.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    selectedGroup?.id === group.id
                      ? 'bg-amber-500 text-white'
                      : 'bg-amber-100 hover:bg-amber-200'
                  }`}
                  onClick={() => handleGroupClick(group)}
                >
                  <div className="font-medium">{group.name}</div>
                  <div className={`text-xs mt-1 ${selectedGroup?.id === group.id ? 'text-amber-100' : 'text-gray-600'}`}>
                    {group.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action button */}
        <div className="flex justify-center mb-6">
          <button
            className={`py-3 px-6 rounded-lg font-semibold transition-colors ${
              selectedBarrier && selectedGroup
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={createConnection}
            disabled={!selectedBarrier || !selectedGroup}
          >
            <Link2 size={18} className="inline mr-2" />
            Create Connection
          </button>
        </div>
        
        {/* Feedback message */}
        {feedback && (
          <div 
            className={`p-4 rounded-lg mb-6 ${
              feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {feedback.message}
          </div>
        )}
        
        {/* Connections display */}
        {connections.length > 0 && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <h3 className="font-semibold text-amber-800 mb-4">Your Connections</h3>
            
            <div className="space-y-3">
              {connections.map((connection, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg border-2 ${connection.correct ? 'border-green-500 bg-green-50' : 'border-amber-300 bg-amber-50'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      {connection.correct ? (
                        <Check size={18} className="text-green-500 mr-2" />
                      ) : (
                        <AlertCircle size={18} className="text-amber-500 mr-2" />
                      )}
                      <span className="font-medium">
                        {connection.barrier.name} → {connection.group.name}
                      </span>
                    </div>
                    <button
                      className="p-1 text-gray-400 hover:text-red-500"
                      onClick={() => removeConnection(index)}
                    >
                      <X size={18} />
                    </button>
                  </div>
                  
                  {connection.explanation && (
                    <p className="text-sm text-gray-600 mt-1 border-t pt-2">
                      {connection.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Case studies */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <h3 className="font-semibold text-amber-800 mb-4">Case Studies in Financial Inclusion</h3>
          
          <div className="space-y-4">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-medium text-amber-800">{study.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{study.content}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Complete button (shows when all correct matches found) */}
        {allCorrectMatchesFound && (
          <div className="flex justify-center">
            <button
              className="py-3 px-6 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              onClick={handleComplete}
            >
              <Check size={18} className="inline mr-2" />
              Complete Exercise
            </button>
          </div>
        )}
      </div>
    </div>
  );
}