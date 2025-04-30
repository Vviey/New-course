import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Globe, DollarSign, Clock, LineChart } from 'lucide-react';
import { citadelTheme } from '@/lib/realm-themes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Node {
  id: string;
  label: string;
  description: string;
  position: { x: number; y: number };
  size: 'large' | 'medium' | 'small' | 'tiny';
  connections: string[];
}

interface Connection {
  source: string;
  target: string;
  type: 'dominance' | 'influence' | 'contested';
}

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  effects: string[];
  pivotalEvent?: boolean;
}

interface GlobalMoneyWebSimulationProps {
  globalFlow: {
    nodes: Node[];
    correctConnections: Connection[];
  };
  dollarShock: {
    initialYear: number;
    events: TimelineEvent[];
  };
  onComplete?: () => void;
}

export function GlobalMoneyWebSimulation({ 
  globalFlow,
  dollarShock,
  onComplete 
}: GlobalMoneyWebSimulationProps) {
  const [currentTab, setCurrentTab] = useState("globalWeb");
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [userConnections, setUserConnections] = useState<Connection[]>([]);
  const [connectionMode, setConnectionMode] = useState<null | { source: string; type: 'dominance' | 'influence' | 'contested' }>(null);
  const [currentYear, setCurrentYear] = useState(dollarShock.initialYear);
  const [isComplete, setIsComplete] = useState(false);
  const [webCompleted, setWebCompleted] = useState(false);
  const [timelineCompleted, setTimelineCompleted] = useState(false);
  
  // Helper functions
  const getSizeClass = (size: string): string => {
    switch(size) {
      case 'large': return 'w-20 h-20';
      case 'medium': return 'w-16 h-16';
      case 'small': return 'w-12 h-12';
      case 'tiny': return 'w-10 h-10';
      default: return 'w-10 h-10';
    }
  };
  
  const getPositionStyle = (position: { x: number; y: number }): Record<string, string> => {
    return {
      left: `${position.x}%`,
      top: `${position.y}%`,
    };
  };
  
  const getTimelineEvent = () => {
    return dollarShock.events.find(event => event.year === currentYear);
  };
  
  const handleNodeClick = (node: Node) => {
    if (connectionMode) {
      // If we're in connection mode, add a connection
      if (connectionMode.source !== node.id) {
        const newConnection: Connection = {
          source: connectionMode.source,
          target: node.id,
          type: connectionMode.type
        };
        setUserConnections([...userConnections, newConnection]);
      }
      setConnectionMode(null);
    } else {
      // Otherwise, just select the node
      setSelectedNode(node);
    }
  };
  
  const startConnection = (nodeId: string, type: 'dominance' | 'influence' | 'contested') => {
    setConnectionMode({ source: nodeId, type });
  };
  
  const nodeHasCorrectConnections = (nodeId: string): boolean => {
    const correctNodeConnections = globalFlow.correctConnections.filter(
      conn => conn.source === nodeId || conn.target === nodeId
    );
    
    const userNodeConnections = userConnections.filter(
      conn => conn.source === nodeId || conn.target === nodeId
    );
    
    return correctNodeConnections.every(correctConn => 
      userNodeConnections.some(userConn => 
        (userConn.source === correctConn.source && userConn.target === correctConn.target && userConn.type === correctConn.type) ||
        (userConn.target === correctConn.source && userConn.source === correctConn.target && userConn.type === correctConn.type)
      )
    );
  };
  
  const isConnectionCorrect = (connection: Connection): boolean => {
    return globalFlow.correctConnections.some(correctConn => 
      (connection.source === correctConn.source && connection.target === correctConn.target && connection.type === correctConn.type) ||
      (connection.target === correctConn.source && connection.source === correctConn.target && connection.type === correctConn.type)
    );
  };
  
  const removeConnection = (index: number) => {
    const newConnections = [...userConnections];
    newConnections.splice(index, 1);
    setUserConnections(newConnections);
  };
  
  const handleNextYear = () => {
    const currentIndex = dollarShock.events.findIndex(event => event.year === currentYear);
    if (currentIndex < dollarShock.events.length - 1) {
      setCurrentYear(dollarShock.events[currentIndex + 1].year);
    } else {
      setTimelineCompleted(true);
      checkCompletion();
    }
  };
  
  const handlePrevYear = () => {
    const currentIndex = dollarShock.events.findIndex(event => event.year === currentYear);
    if (currentIndex > 0) {
      setCurrentYear(dollarShock.events[currentIndex - 1].year);
    }
  };
  
  const handleCompleteWeb = () => {
    setWebCompleted(true);
    checkCompletion();
  };
  
  const checkCompletion = () => {
    if (webCompleted && timelineCompleted) {
      setIsComplete(true);
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }
  };
  
  // If completed, show completion screen
  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="text-center mb-8">
          <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Global Currency Exploration Complete</h2>
          <p className="text-gray-600">
            You've mapped the intricate relationships between global currencies and discovered how the 1971 Nixon Shock transformed the global monetary system.
          </p>
        </div>
        
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Key Insights:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>The global monetary system is hierarchical, with the US dollar at the center.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Reserve currency status gives immense economic and geopolitical power.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>The 1971 Nixon Shock fundamentally changed money by removing its last connection to gold.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>The petrodollar system helped maintain US dollar dominance despite the end of gold backing.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Countries that depend on the dollar sacrifice some monetary sovereignty.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">The Bitcoin Perspective:</h3>
          <p className="text-gray-700">
            Bitcoin represents a potential alternative to the hierarchical currency system. As a neutral, 
            borderless currency with no central issuer, Bitcoin isn't controlled by any nation-state and 
            doesn't require trust in a central authority like a reserve currency does. This design allows 
            it to operate outside the traditional currency hierarchy, potentially reducing the monetary 
            power concentration that exists in the current system.
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
        <h2 className="text-2xl font-bold text-blue-800 mb-2">The Global Money Web</h2>
        <p className="text-gray-700">
          Explore how the world's currencies are interconnected and how reserve currency status shapes the global economy.
        </p>
      </div>
      
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="globalWeb">Currency Web</TabsTrigger>
            <TabsTrigger value="dollarShock">Nixon Shock Timeline</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="globalWeb" className="p-6">
          <div className="mb-4">
            <Card className="bg-blue-50">
              <CardHeader className="py-3 px-4">
                <CardTitle className="text-sm font-medium text-blue-800">
                  Your Task: Map Currency Relationships
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0 px-4 pb-3">
                <p className="text-xs text-gray-700">
                  Create connections between currencies to show how they influence each other. Select a currency, choose a connection type, then click another currency to connect them.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative h-[500px] border border-gray-200 rounded-lg mb-6 overflow-hidden bg-gray-50">
            {/* Currency nodes */}
            {globalFlow.nodes.map((node) => (
              <motion.div
                key={node.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute rounded-full flex items-center justify-center cursor-pointer ${getSizeClass(node.size)} ${
                  connectionMode ? 'hover:ring-2 hover:ring-blue-400' : ''
                } ${
                  selectedNode?.id === node.id ? 'ring-2 ring-blue-500' : ''
                } ${
                  nodeHasCorrectConnections(node.id) ? 'bg-green-100' : 'bg-white'
                }`}
                style={getPositionStyle(node.position)}
                onClick={() => handleNodeClick(node)}
              >
                <span className="text-xs font-medium text-center p-1">{node.label}</span>
              </motion.div>
            ))}
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {userConnections.map((connection, index) => {
                const sourceNode = globalFlow.nodes.find(n => n.id === connection.source);
                const targetNode = globalFlow.nodes.find(n => n.id === connection.target);
                
                if (!sourceNode || !targetNode) return null;
                
                const sourceX = sourceNode.position.x;
                const sourceY = sourceNode.position.y;
                const targetX = targetNode.position.x;
                const targetY = targetNode.position.y;
                
                const isCorrect = isConnectionCorrect(connection);
                
                return (
                  <g key={index}>
                    <line
                      x1={`${sourceX}%`}
                      y1={`${sourceY}%`}
                      x2={`${targetX}%`}
                      y2={`${targetY}%`}
                      stroke={isCorrect ? "#10b981" : "#6b7280"}
                      strokeWidth="2"
                      strokeDasharray={connection.type === 'contested' ? "5,5" : "none"}
                    />
                    {/* Arrow marker */}
                    <polygon 
                      points={`${targetX}%,${targetY}% ${targetX-0.5}%,${targetY-0.5}% ${targetX-0.5}%,${targetY+0.5}%`}
                      fill={isCorrect ? "#10b981" : "#6b7280"}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
          
          <div className="grid grid-cols-1 gap-4 mb-6">
            {selectedNode && (
              <Card>
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-lg font-medium text-blue-800">
                    {selectedNode.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 px-4 pb-3">
                  <p className="text-sm text-gray-700 mb-3">
                    {selectedNode.description}
                  </p>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 text-blue-700 hover:bg-blue-50"
                      onClick={() => startConnection(selectedNode.id, 'dominance')}
                    >
                      Strong Influence
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-amber-300 text-amber-700 hover:bg-amber-50"
                      onClick={() => startConnection(selectedNode.id, 'influence')}
                    >
                      Moderate Influence
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      onClick={() => startConnection(selectedNode.id, 'contested')}
                    >
                      Contested Influence
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {connectionMode && (
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm text-blue-800 mb-2">
                  Now click on a target currency to create a{' '}
                  <span className="font-semibold">
                    {connectionMode.type === 'dominance' && 'strong influence'}
                    {connectionMode.type === 'influence' && 'moderate influence'}
                    {connectionMode.type === 'contested' && 'contested influence'}
                  </span>{' '}
                  connection.
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setConnectionMode(null)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
          
          {userConnections.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Your Connections:</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto p-2 border border-gray-200 rounded-md">
                {userConnections.map((connection, index) => {
                  const sourceNode = globalFlow.nodes.find(n => n.id === connection.source);
                  const targetNode = globalFlow.nodes.find(n => n.id === connection.target);
                  const isCorrect = isConnectionCorrect(connection);
                  
                  return (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center p-2 rounded-md text-xs ${
                        isCorrect ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div>
                        <span className="font-medium">{sourceNode?.label}</span>
                        {' '}
                        <span>
                          {connection.type === 'dominance' && '→ strongly influences →'}
                          {connection.type === 'influence' && '→ moderately influences →'}
                          {connection.type === 'contested' && '→ contests influence with →'}
                        </span>
                        {' '}
                        <span className="font-medium">{targetNode?.label}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => removeConnection(index)}
                      >
                        ✕
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          <div className="flex justify-between pt-4">
            <div></div>
            <Button
              onClick={handleCompleteWeb}
              style={{
                background: citadelTheme.gradients.blue,
                boxShadow: citadelTheme.shadows.button,
              }}
            >
              Complete Currency Web <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="dollarShock" className="p-6">
          <div className="mb-4">
            <Card className="bg-blue-50">
              <CardHeader className="py-3 px-4">
                <CardTitle className="text-sm font-medium text-blue-800">
                  Historical Timeline: The Nixon Shock & Its Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0 px-4 pb-3">
                <p className="text-xs text-gray-700">
                  Explore how the 1971 Nixon Shock fundamentally transformed the global monetary system.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative mb-6">
            {/* Timeline */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200"></div>
            
            {dollarShock.events.map((event, index) => {
              const isActive = event.year === currentYear;
              const isPast = dollarShock.events.findIndex(e => e.year === currentYear) > index;
              
              return (
                <div
                  key={event.year}
                  className={`relative pl-8 mb-4 ${isActive ? '' : 'opacity-60'}`}
                >
                  <div 
                    className={`absolute left-0 top-0 w-1 h-full ${
                      isPast ? 'bg-blue-500' : 'bg-gray-200'
                    }`}
                  ></div>
                  <div 
                    className={`absolute left-[-6px] top-0 w-[13px] h-[13px] rounded-full border-2 ${
                      isActive
                        ? 'bg-white border-blue-500'
                        : isPast
                        ? 'bg-blue-500 border-blue-500'
                        : 'bg-white border-gray-300'
                    }`}
                  ></div>
                  <div className="mb-1 text-sm font-medium text-gray-500">
                    {event.year}
                  </div>
                  <Card 
                    className={`${
                      isActive 
                        ? event.pivotalEvent 
                          ? 'border-red-300 bg-red-50/50' 
                          : 'border-blue-300'
                        : ''
                    }`}
                  >
                    <CardHeader className="py-3 px-4">
                      <CardTitle className={`text-md font-medium ${
                        event.pivotalEvent 
                          ? 'text-red-800' 
                          : 'text-blue-800'
                      }`}>
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    {isActive && (
                      <CardContent className="py-0 px-4 pb-3">
                        <p className="text-sm text-gray-700 mb-3">
                          {event.description}
                        </p>
                        
                        <div className="bg-gray-50 p-3 rounded-md mb-2">
                          <h4 className="text-xs font-medium text-gray-700 mb-1">Effects:</h4>
                          <ul className="space-y-1">
                            {event.effects.map((effect, idx) => (
                              <li key={idx} className="flex items-start text-xs">
                                <span className="text-blue-500 mr-1">•</span>
                                <span>{effect}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {event.pivotalEvent && (
                          <div className="bg-red-50 p-3 rounded-md">
                            <h4 className="text-xs font-medium text-red-800 mb-1">Pivotal Moment:</h4>
                            <p className="text-xs text-red-700">
                              This event fundamentally altered the global monetary system and its effects continue to shape economic relations today.
                            </p>
                          </div>
                        )}
                      </CardContent>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevYear}
              disabled={currentYear === dollarShock.events[0].year}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous Event
            </Button>
            
            <Button
              onClick={handleNextYear}
              disabled={currentYear === dollarShock.events[dollarShock.events.length - 1].year && timelineCompleted}
              style={{
                background: citadelTheme.gradients.blue,
                boxShadow: citadelTheme.shadows.button,
              }}
            >
              {currentYear === dollarShock.events[dollarShock.events.length - 1].year
                ? 'Complete Timeline'
                : 'Next Event'
              } <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}