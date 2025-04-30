import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, AlertCircle, CheckCircle2, HelpCircle, Link, Unlink, ScrollText } from 'lucide-react';
import { citadelTheme } from '@/lib/realm-themes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  barriers = [],
  groups = [],
  correctMatches = [],
  stats = [],
  caseStudies = [],
  onComplete
}: ExclusionWebGameProps) {
  const [selectedBarrier, setSelectedBarrier] = useState<Barrier | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [connections, setConnections] = useState<{barrier: Barrier, group: Group, correct: boolean, explanation?: string}[]>([]);
  const [showingExplanation, setShowingExplanation] = useState<number | null>(null);
  const [currentTab, setCurrentTab] = useState("barriers");
  const [isComplete, setIsComplete] = useState(false);
  
  // Calculate progress
  const progress = Math.min(100, Math.round((connections.length / correctMatches.length) * 100));
  
  const handleBarrierClick = (barrier: Barrier) => {
    if (selectedGroup) {
      // Create connection
      createConnection(barrier, selectedGroup);
      setSelectedGroup(null);
    } else {
      setSelectedBarrier(barrier);
      setCurrentTab("groups");
    }
  };
  
  const handleGroupClick = (group: Group) => {
    if (selectedBarrier) {
      // Create connection
      createConnection(selectedBarrier, group);
      setSelectedBarrier(null);
    } else {
      setSelectedGroup(group);
      setCurrentTab("barriers");
    }
  };
  
  const isCorrectMatch = (barrierId: number, groupId: number): boolean => {
    return correctMatches.some(match => match.barrierId === barrierId && match.groupId === groupId);
  };
  
  const getExplanation = (barrierId: number, groupId: number): string | undefined => {
    const match = correctMatches.find(match => match.barrierId === barrierId && match.groupId === groupId);
    return match?.explanation;
  };
  
  const createConnection = (barrier: Barrier, group: Group) => {
    // Check if connection already exists
    if (connections.some(c => c.barrier.id === barrier.id && c.group.id === group.id)) {
      return;
    }
    
    const isCorrect = isCorrectMatch(barrier.id, group.id);
    const explanation = getExplanation(barrier.id, group.id);
    
    setConnections([...connections, {
      barrier,
      group,
      correct: isCorrect,
      explanation
    }]);
    
    // Check if all correct matches have been found
    if (isCorrect && connections.filter(c => c.correct).length + 1 === correctMatches.length) {
      setTimeout(() => {
        setIsComplete(true);
      }, 1000);
    }
  };
  
  const removeConnection = (index: number) => {
    const newConnections = [...connections];
    newConnections.splice(index, 1);
    setConnections(newConnections);
  };
  
  const isBarrierConnected = (barrierId: number): boolean => {
    return connections.some(c => c.barrier.id === barrierId);
  };
  
  const isGroupConnected = (groupId: number): boolean => {
    return connections.some(c => c.group.id === groupId);
  };
  
  // If the simulation is complete, show completion screen
  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="text-center mb-8">
          <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Financial Exclusion Web Explored</h2>
          <p className="text-gray-600">
            You've successfully mapped the relationships between financial barriers and the populations they affect most.
          </p>
        </div>
        
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Key Insights:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Financial exclusion disproportionately affects vulnerable and marginalized populations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Formal identification requirements create a significant barrier for refugees, migrants, and unhoused people.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Geographic access remains a major challenge in rural communities around the world.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Minimum balance requirements and fees make banking unaffordable for low-income populations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Financial exclusion creates a self-reinforcing cycle that perpetuates poverty and inequality.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">The Bitcoin Solution:</h3>
          <p className="text-gray-700">
            Bitcoin addresses many financial inclusion barriers by removing the need for identity documentation,
            fixed addresses, or minimum balances. With just a smartphone and internet access, anyone can receive,
            store, and send value regardless of their socioeconomic status. Bitcoin's permissionless nature means 
            that no central authority can deny access based on arbitrary criteria, creating a more inclusive 
            financial system for populations traditionally excluded from banking services.
          </p>
        </div>
        
        <div className="text-center">
          <Button
            onClick={onComplete}
            style={{
              background: citadelTheme.gradients.blue,
              boxShadow: citadelTheme.shadows.button,
            }}
          >
            Complete Mission <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-800">Breaking the Exclusion Web</h2>
          <div className="flex items-center space-x-2">
            <div className="text-sm font-medium text-gray-500">
              {connections.filter(c => c.correct).length} of {correctMatches.length} barriers matched
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">
          Connect financial barriers with the groups they affect most. Select a barrier first, then choose a group it impacts, or vice versa.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-blue-50 p-3 rounded-md flex flex-col items-center text-center">
              <span className="text-2xl font-bold text-blue-700">{stat.value}</span>
              <span className="text-sm text-blue-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="barriers" className={selectedGroup ? "bg-amber-100" : ""}>
              Financial Barriers
            </TabsTrigger>
            <TabsTrigger value="groups" className={selectedBarrier ? "bg-blue-100" : ""}>
              Affected Groups
            </TabsTrigger>
            <TabsTrigger value="solutions">
              Success Stories
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="barriers" className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {barriers.map(barrier => (
              <motion.div
                key={barrier.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className={`cursor-pointer transition-colors ${
                    selectedBarrier?.id === barrier.id 
                      ? 'ring-2 ring-amber-500 border-amber-200' 
                      : isBarrierConnected(barrier.id)
                      ? 'bg-amber-50/50 border-amber-200'
                      : selectedGroup
                      ? 'hover:border-amber-300'
                      : 'hover:border-blue-200'
                  }`}
                  onClick={() => handleBarrierClick(barrier)}
                >
                  <CardHeader className="py-3 px-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-md font-medium text-amber-800">
                        {barrier.name}
                      </CardTitle>
                      {isBarrierConnected(barrier.id) && (
                        <div className="flex space-x-1">
                          {connections
                            .filter(c => c.barrier.id === barrier.id)
                            .map((conn, i) => (
                              <span 
                                key={i} 
                                className={`w-2 h-2 rounded-full ${conn.correct ? 'bg-green-500' : 'bg-gray-300'}`}
                              ></span>
                            ))
                          }
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="py-0 px-4 pb-3">
                    <p className="text-sm text-gray-600">{barrier.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {selectedGroup && (
            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <div className="flex items-start mb-2">
                <Users className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-blue-800">{selectedGroup.name}</h3>
                  <p className="text-sm text-blue-700">{selectedGroup.description}</p>
                </div>
              </div>
              <p className="text-sm text-blue-600 mt-2">
                Select a financial barrier above that affects this group.
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="groups" className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groups.map(group => (
              <motion.div
                key={group.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className={`cursor-pointer transition-colors ${
                    selectedGroup?.id === group.id 
                      ? 'ring-2 ring-blue-500 border-blue-200' 
                      : isGroupConnected(group.id)
                      ? 'bg-blue-50/50 border-blue-200'
                      : selectedBarrier
                      ? 'hover:border-blue-300'
                      : 'hover:border-blue-200'
                  }`}
                  onClick={() => handleGroupClick(group)}
                >
                  <CardHeader className="py-3 px-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-md font-medium text-blue-800">
                        {group.name}
                      </CardTitle>
                      {isGroupConnected(group.id) && (
                        <div className="flex space-x-1">
                          {connections
                            .filter(c => c.group.id === group.id)
                            .map((conn, i) => (
                              <span 
                                key={i} 
                                className={`w-2 h-2 rounded-full ${conn.correct ? 'bg-green-500' : 'bg-gray-300'}`}
                              ></span>
                            ))
                          }
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="py-0 px-4 pb-3">
                    <p className="text-sm text-gray-600">{group.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {selectedBarrier && (
            <div className="bg-amber-50 p-4 rounded-lg mt-6">
              <div className="flex items-start mb-2">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-amber-800">{selectedBarrier.name}</h3>
                  <p className="text-sm text-amber-700">{selectedBarrier.description}</p>
                </div>
              </div>
              <p className="text-sm text-amber-600 mt-2">
                Select a group above that is particularly affected by this barrier.
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="solutions" className="p-6 space-y-6">
          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader className="py-3 px-4">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <CardTitle className="text-md font-medium text-green-800">
                      {study.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="py-0 px-4 pb-3">
                  <p className="text-sm text-gray-700">{study.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      {connections.length > 0 && (
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-md font-medium text-gray-800 mb-3">Your Connections:</h3>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {connections.map((connection, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-md flex items-start ${
                  connection.correct 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex-grow">
                  <div className="flex items-center">
                    {connection.correct ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-gray-400 mr-2" />
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm">
                      <span className="font-medium text-amber-700">{connection.barrier.name}</span>
                      <span className="mx-2 hidden sm:block">
                        <Link className="h-3 w-3 text-gray-400" />
                      </span>
                      <span className="font-medium text-blue-700">{connection.group.name}</span>
                    </div>
                  </div>
                  
                  {connection.correct && connection.explanation && (
                    <div className="mt-2">
                      {showingExplanation === index ? (
                        <p className="text-xs text-gray-600 ml-6">
                          {connection.explanation}
                        </p>
                      ) : (
                        <button
                          className="text-xs text-blue-600 hover:text-blue-800 flex items-center ml-6"
                          onClick={() => setShowingExplanation(index)}
                        >
                          <HelpCircle className="h-3 w-3 mr-1" />
                          Show explanation
                        </button>
                      )}
                    </div>
                  )}
                </div>
                
                <button
                  className="ml-2 p-1 text-gray-400 hover:text-gray-600"
                  onClick={() => removeConnection(index)}
                >
                  <Unlink className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}