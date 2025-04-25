import React, { useState } from 'react';
import { DollarSign, Droplet, Landmark, ArrowRight, BarChart, Check } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  type: string;
  x: number;
  y: number;
}

interface Connection {
  from: string;
  to: string;
  description?: string;
}

interface DollarShockEvent {
  year: number;
  title: string;
  description: string;
  moneySupplyChange: number;
}

interface GlobalMoneyWebSimulationProps {
  globalFlow: {
    nodes: Node[];
    correctConnections: Connection[];
  };
  dollarShock: {
    initialYear: number;
    events: DollarShockEvent[];
  };
  onComplete?: () => void;
}

export function GlobalMoneyWebSimulation({ 
  globalFlow,
  dollarShock,
  onComplete 
}: GlobalMoneyWebSimulationProps) {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [dragStart, setDragStart] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [goldStandard, setGoldStandard] = useState(true);
  const [moneySupply, setMoneySupply] = useState(100);
  const [supplyHistory, setSupplyHistory] = useState<{year: number, value: number}[]>([
    { year: dollarShock.initialYear, value: 100 }
  ]);
  const [activeTab, setActiveTab] = useState<'flow' | 'dollar'>('flow');
  
  const { nodes, correctConnections } = globalFlow;
  const events = dollarShock.events;
  
  // Global Flow Web Simulation logic
  const handleDragStart = (nodeId: string) => {
    setDragStart(nodeId);
  };
  
  const handleDragEnd = (endNodeId: string) => {
    if (dragStart && dragStart !== endNodeId) {
      const connection = {
        from: dragStart,
        to: endNodeId
      };
      
      // Check if connection already exists
      const connectionExists = connections.some(
        conn => conn.from === connection.from && conn.to === connection.to
      );
      
      if (!connectionExists) {
        // Find if this is a correct connection and add description if so
        const correctConnection = correctConnections.find(
          conn => conn.from === connection.from && conn.to === connection.to
        );
        
        setConnections([...connections, {
          ...connection,
          description: correctConnection?.description
        }]);
      }
    }
    setDragStart(null);
  };
  
  // Dollar Shock Simulator logic
  const handleToggleGoldStandard = () => {
    setGoldStandard(!goldStandard);
  };
  
  const handlePrintMoney = () => {
    if (goldStandard) return;
    
    const event = events[selectedEvent];
    const newValue = moneySupply + event.moneySupplyChange;
    setMoneySupply(newValue);
    
    setSupplyHistory([...supplyHistory, {
      year: event.year,
      value: newValue
    }]);
    
    if (selectedEvent < events.length - 1) {
      setSelectedEvent(selectedEvent + 1);
    }
  };
  
  // Check if all correct connections are made
  const allCorrectConnectionsMade = correctConnections.every(correctConn => 
    connections.some(conn => conn.from === correctConn.from && conn.to === correctConn.to)
  );
  
  // Check if dollar simulation is complete
  const dollarSimulationComplete = selectedEvent === events.length - 1;
  
  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };
  
  const getNodeColor = (nodeId: string) => {
    switch(nodeId) {
      case 'usa': return 'bg-amber-600';
      case 'oil': return 'bg-emerald-600';
      case 'debt': return 'bg-purple-600';
      case 'africa': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };
  
  const getNodeIcon = (nodeId: string) => {
    switch(nodeId) {
      case 'usa': return <DollarSign size={20} />;
      case 'oil': return <Droplet size={20} />;
      case 'debt': return <Landmark size={20} />;
      case 'africa': return <ArrowRight size={20} />;
      default: return null;
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 bg-amber-50">
        <h2 className="text-2xl font-bold text-amber-800 mb-2">
          The Rise of the Dollar: Global Power Dynamics
        </h2>
        <p className="text-amber-700 mb-6">
          Explore how the US dollar became the world's dominant currency and how this creates power imbalances.
        </p>
        
        {/* Simulation Tabs */}
        <div className="flex border-b border-amber-200 mb-6">
          <button
            className={`py-3 px-4 font-medium ${
              activeTab === 'flow' 
                ? 'text-amber-600 border-b-2 border-amber-600' 
                : 'text-gray-500 hover:text-amber-600'
            }`}
            onClick={() => setActiveTab('flow')}
          >
            Global Money Web
          </button>
          <button
            className={`py-3 px-4 font-medium ${
              activeTab === 'dollar' 
                ? 'text-amber-600 border-b-2 border-amber-600' 
                : 'text-gray-500 hover:text-amber-600'
            }`}
            onClick={() => setActiveTab('dollar')}
          >
            Nixon Shock & Dollar Printing
          </button>
        </div>
        
        {/* Global Money Web Simulation */}
        {activeTab === 'flow' && (
          <div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h3 className="font-semibold text-amber-800 mb-4">
                Map the Global Flow of Dollar Power
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Create connections between entities by dragging from one node to another. Try to map how the dollar creates a global system of dependency.
              </p>
              
              {/* The network visualization */}
              <div className="relative h-[400px] border-2 border-amber-200 rounded-lg bg-gray-50 mb-4">
                {nodes.map((node) => (
                  <div
                    key={node.id}
                    className="absolute cursor-pointer"
                    style={{ 
                      left: `${(node.x / 500) * 100}%`, 
                      top: `${(node.y / 500) * 100}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div 
                      className={`flex flex-col items-center justify-center w-20 h-20 rounded-full text-white transition-transform hover:scale-110 ${getNodeColor(node.id)}`}
                      onMouseDown={() => handleDragStart(node.id)}
                      onMouseUp={() => handleDragEnd(node.id)}
                    >
                      {getNodeIcon(node.id)}
                      <div className="text-xs mt-1">{node.label}</div>
                    </div>
                  </div>
                ))}
                
                {/* Draw connections */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  {connections.map((connection, idx) => {
                    const start = nodes.find(n => n.id === connection.from);
                    const end = nodes.find(n => n.id === connection.to);
                    
                    if (!start || !end) return null;
                    
                    const startX = (start.x / 500) * 100;
                    const startY = (start.y / 500) * 100;
                    const endX = (end.x / 500) * 100;
                    const endY = (end.y / 500) * 100;
                    
                    // Check if this is a correct connection
                    const isCorrect = correctConnections.some(
                      conn => conn.from === connection.from && conn.to === connection.to
                    );
                    
                    return (
                      <g key={idx}>
                        <defs>
                          <marker
                            id={`arrowhead-${idx}`}
                            markerWidth="10"
                            markerHeight="7"
                            refX="9"
                            refY="3.5"
                            orient="auto"
                          >
                            <polygon 
                              points="0 0, 10 3.5, 0 7" 
                              fill={isCorrect ? "#15803d" : "#FFC567"} 
                            />
                          </marker>
                        </defs>
                        <line
                          x1={`${startX}%`}
                          y1={`${startY}%`}
                          x2={`${endX}%`}
                          y2={`${endY}%`}
                          stroke={isCorrect ? "#15803d" : "#FFC567"}
                          strokeWidth="3"
                          markerEnd={`url(#arrowhead-${idx})`}
                          strokeDasharray={isCorrect ? "0" : "5,5"}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
              
              {/* Connections list */}
              {connections.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium text-amber-700 mb-2">Your Connections:</h4>
                  <div className="space-y-2">
                    {connections.map((connection, idx) => {
                      const start = nodes.find(n => n.id === connection.from);
                      const end = nodes.find(n => n.id === connection.to);
                      
                      if (!start || !end) return null;
                      
                      // Check if this is a correct connection
                      const isCorrect = correctConnections.some(
                        conn => conn.from === connection.from && conn.to === connection.to
                      );
                      
                      return (
                        <div 
                          key={idx}
                          className={`p-3 rounded-lg ${
                            isCorrect 
                              ? 'bg-green-50 border border-green-300' 
                              : 'bg-amber-50 border border-amber-300'
                          }`}
                        >
                          <div className="flex items-center">
                            {isCorrect && (
                              <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                            )}
                            <span className="font-medium">
                              {start.label} → {end.label}
                            </span>
                          </div>
                          {connection.description && (
                            <p className="text-sm text-gray-600 mt-1">
                              {connection.description}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            
            {/* Key points about dollar dominance */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h3 className="font-semibold text-amber-800 mb-2">Key Points About Dollar Dominance</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>The US dollar is used for ~60% of international trade and 65% of global currency reserves</li>
                <li>Oil is priced and traded almost exclusively in dollars (the "petrodollar" system)</li>
                <li>Many countries are forced to maintain dollar reserves to pay for essential imports</li>
                <li>Dollar dominance gives the US significant economic and geopolitical advantages</li>
                <li>Countries without sufficient dollar reserves often face financial crises</li>
              </ul>
            </div>
            
            {/* Complete button for flow simulation */}
            {allCorrectConnectionsMade && (
              <div className="flex justify-center">
                <button
                  className="py-3 px-6 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                  onClick={() => setActiveTab('dollar')}
                >
                  Continue to Nixon Shock Simulation
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Dollar Shock Simulation */}
        {activeTab === 'dollar' && (
          <div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h3 className="font-semibold text-amber-800 mb-4">
                The Nixon Shock & Dollar Printing Simulator
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  {/* Event description */}
                  <div className="p-4 mb-4 bg-amber-100 rounded-lg border-l-4 border-amber-500">
                    <h4 className="font-medium text-amber-800">
                      {events[selectedEvent].year}: {events[selectedEvent].title}
                    </h4>
                    <p className="text-gray-700 text-sm mt-1">
                      {events[selectedEvent].description}
                    </p>
                  </div>
                  
                  {/* Gold standard toggle */}
                  <div className="flex items-center justify-between mb-4 p-3 border border-amber-200 rounded-lg">
                    <div className="flex items-center">
                      <Landmark className="text-amber-600 mr-2" size={20} />
                      <span className="font-medium">Gold Standard:</span>
                    </div>
                    <button
                      onClick={handleToggleGoldStandard}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        goldStandard 
                          ? 'bg-amber-600 text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}
                      disabled={selectedEvent > 0}
                    >
                      {goldStandard ? 'Active' : 'Removed'}
                    </button>
                  </div>
                  
                  {/* Money supply status */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="text-sm text-gray-600">Year</div>
                      <div className="text-xl font-bold text-amber-600">
                        {events[selectedEvent].year}
                      </div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <div className="text-sm text-gray-600">Money Supply</div>
                      <div className="text-xl font-bold text-amber-600">
                        ${moneySupply}B
                      </div>
                    </div>
                  </div>
                  
                  {/* Print money button */}
                  <button
                    onClick={handlePrintMoney}
                    disabled={goldStandard || selectedEvent === events.length - 1}
                    className={`w-full py-3 rounded-lg flex items-center justify-center transition-colors ${
                      !goldStandard && selectedEvent < events.length - 1
                        ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                        : 'bg-gray-300 cursor-not-allowed text-gray-600'
                    }`}
                  >
                    <DollarSign className="mr-2" size={20} />
                    Print More Money
                  </button>
                  
                  {/* Instructions */}
                  {selectedEvent === 0 && goldStandard && (
                    <p className="text-sm text-gray-600 mt-2">
                      First, remove the gold standard to begin printing money.
                    </p>
                  )}
                </div>
                
                <div>
                  {/* Money supply chart (simplified visual representation) */}
                  <h4 className="font-medium text-amber-700 mb-3">Money Supply Growth</h4>
                  <div className="h-[200px] bg-white rounded-lg border border-gray-200 p-3 relative">
                    {/* Simple chart background */}
                    <div className="absolute inset-0 p-3">
                      <div className="border-b border-l border-gray-200 h-full"></div>
                      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-300"></div>
                      <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300"></div>
                    </div>
                    
                    {/* Supply history bars */}
                    <div className="flex items-end h-full relative">
                      {supplyHistory.map((point, idx) => {
                        const lastIdx = supplyHistory.length - 1;
                        const initialValue = supplyHistory[0].value;
                        const maxValue = Math.max(...supplyHistory.map(p => p.value));
                        const heightPercentage = ((point.value - initialValue) / (maxValue - initialValue)) * 80;
                        
                        return (
                          <div 
                            key={idx}
                            className="flex flex-col items-center mx-1"
                            style={{ 
                              flex: `0 0 ${100 / (lastIdx + 1)}%`,
                              height: '100%'
                            }}
                          >
                            <div 
                              className="w-full bg-amber-500 rounded-t-sm"
                              style={{ 
                                height: `${heightPercentage}%`,
                                marginTop: 'auto'
                              }}
                            ></div>
                            <div className="text-xs text-gray-600 mt-1">
                              {point.year}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Y-axis label */}
                    <div className="absolute top-2 left-2 text-xs text-gray-500">
                      Money Supply (billions)
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                    <h4 className="font-medium text-amber-700 mb-2">Key Insights:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Ending the gold standard removed natural constraints on money creation</li>
                      <li>• Since 1971, the dollar has lost over 85% of its purchasing power</li>
                      <li>• The ability to print unlimited money gives the US significant advantages</li>
                      <li>• Countries using the dollar are subject to US monetary policy decisions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Complete button for dollar simulation */}
            {dollarSimulationComplete && !goldStandard && (
              <div className="flex justify-center">
                <button
                  className="py-3 px-6 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                  onClick={handleComplete}
                >
                  Complete Simulation
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}