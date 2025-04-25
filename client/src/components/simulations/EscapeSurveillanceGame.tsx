import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, AlertCircle, User, DollarSign, Lock, Check } from 'lucide-react';

interface RouteOption {
  id: string;
  label: string;
  risk: number;
}

interface Routes {
  [key: string]: {
    options: RouteOption[];
  };
}

interface ResistanceNetwork {
  name: string;
  description: string;
}

interface EscapeSurveillanceGameProps {
  playerStartFunds: number;
  routes: Routes;
  resistanceNetworks: ResistanceNetwork[];
  onComplete?: () => void;
}

export function EscapeSurveillanceGame({ 
  playerStartFunds, 
  routes, 
  resistanceNetworks, 
  onComplete 
}: EscapeSurveillanceGameProps) {
  const [funds, setFunds] = useState(playerStartFunds);
  const [route, setRoute] = useState('start');
  const [surveillance, setSurveillance] = useState(0);
  const [routeHistory, setRouteHistory] = useState<string[]>(['start']);
  const [position, setPosition] = useState({ x: 50, y: 90 });
  const [gameOver, setGameOver] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  
  useEffect(() => {
    // If surveillance reaches 100%, game over
    if (surveillance >= 100) {
      setGameOver(true);
      setMessage("Your transaction has been detected and blocked by authorities!");
    }
    
    // If funds reach 0, game over
    if (funds <= 0) {
      setGameOver(true);
      setMessage("You've run out of funds to complete your transaction!");
    }
    
    // If reached certain "destination" routes, success
    if (route === 'localbtc' || route === 'dex' || route === 'trusted' || route === 'community') {
      if (routeHistory.length >= 3) { // Need to have gone through enough steps
        setSuccess(true);
        setMessage("Success! You've managed to send money home securely.");
      }
    }
  }, [surveillance, funds, route, routeHistory]);
  
  const handleRouteSelect = (option: RouteOption) => {
    if (gameOver || success) return;
    
    // Update surveillance
    const newSurveillance = Math.min(surveillance + option.risk, 100);
    setSurveillance(newSurveillance);
    
    // Update funds (cost is proportional to risk)
    const cost = Math.round(option.risk * 5);
    setFunds(Math.max(funds - cost, 0));
    
    // Update route history
    setRouteHistory([...routeHistory, option.id]);
    
    // Update current route
    setRoute(option.id);
    
    // Update visual position (simplified)
    setPosition({
      x: Math.min(Math.max(15 + Math.random() * 70, 15), 85),
      y: Math.max(position.y - 20, 10)
    });
  };
  
  const handleReset = () => {
    setFunds(playerStartFunds);
    setRoute('start');
    setSurveillance(0);
    setRouteHistory(['start']);
    setPosition({ x: 50, y: 90 });
    setGameOver(false);
    setSuccess(false);
    setMessage(null);
  };
  
  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 bg-amber-50">
        <h2 className="text-2xl font-bold text-amber-800 mb-2">
          Escape the Surveillance Net
        </h2>
        <p className="text-amber-700 mb-6">
          Help Asha send money back home while avoiding financial surveillance. Choose your path wisely!
        </p>
        
        {/* Status bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center">
              <User className="text-amber-600 mr-2" />
              <div>
                <div className="text-sm text-gray-500">Asha's Funds</div>
                <div className="font-semibold">${funds}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Eye className="text-amber-600 mr-2" />
              <div>
                <div className="text-sm text-gray-500">Surveillance Risk</div>
                <div className="font-semibold">{surveillance}%</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Lock className="text-amber-600 mr-2" />
              <div>
                <div className="text-sm text-gray-500">Route</div>
                <div className="font-semibold capitalize">{route}</div>
              </div>
            </div>
          </div>
          
          {/* Surveillance risk meter */}
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${
                  surveillance < 33 ? 'bg-green-500' : 
                  surveillance < 66 ? 'bg-yellow-500' : 
                  'bg-red-500'
                }`}
                style={{ width: `${surveillance}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Network map visualization */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-amber-800 mb-4">Network Map</h3>
            <div className="h-64 border-2 border-amber-200 rounded-lg bg-gray-50 relative">
              {/* Path visualization - simplified */}
              <svg className="absolute inset-0 w-full h-full">
                {routeHistory.map((r, i) => {
                  if (i === 0) return null;
                  
                  // Just draw a straight path down
                  return (
                    <line 
                      key={i}
                      x1="50%"
                      y1={`${90 - (i-1) * 20}%`}
                      x2="50%"
                      y2={`${90 - i * 20}%`}
                      stroke="#FFC567"
                      strokeWidth="2"
                      strokeDasharray={surveillance > 50 ? "5,5" : ""}
                    />
                  );
                })}
              </svg>
              
              {/* Starting point */}
              <div 
                className="absolute w-4 h-4 rounded-full bg-amber-600"
                style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}
              ></div>
              
              {/* Current position */}
              <div 
                className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-white ${
                  gameOver ? 'bg-red-500' : 
                  success ? 'bg-green-500' : 
                  'bg-amber-500'
                }`}
                style={{ 
                  left: `${position.x}%`, 
                  top: `${position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {gameOver ? <AlertCircle size={14} /> : 
                 success ? <Check size={14} /> : 
                 <User size={14} />}
              </div>
            </div>
          </div>
          
          {/* Route options or game status */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            {gameOver || success ? (
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-3 ${gameOver ? 'text-red-600' : 'text-green-600'}`}>
                  {gameOver ? 'Mission Failed' : 'Mission Successful'}
                </h3>
                <p className="text-gray-700 mb-4">{message}</p>
                <div className="flex justify-center gap-3">
                  <button
                    className="py-2 px-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                    onClick={handleReset}
                  >
                    Try Again
                  </button>
                  
                  {success && (
                    <button
                      className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      onClick={handleComplete}
                    >
                      Complete Mission
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-amber-800 mb-4">
                  Choose Your Next Move
                </h3>
                
                <div className="space-y-3">
                  {routes[route]?.options.map((option) => (
                    <button
                      key={option.id}
                      className="w-full p-3 bg-amber-50 hover:bg-amber-100 rounded-lg flex items-center justify-between transition-colors"
                      onClick={() => handleRouteSelect(option)}
                    >
                      <div>
                        <span className="font-medium">{option.label}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Eye className="text-amber-600 mr-1" size={14} />
                        <span>Risk: {option.risk}%</span>
                        <DollarSign className="text-amber-600 ml-2 mr-1" size={14} />
                        <span>Cost: ${option.risk * 5}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Resistance networks information */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-amber-800 mb-4">Financial Resistance Networks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resistanceNetworks.map((network, index) => (
              <div key={index} className="p-3 bg-amber-50 rounded-lg">
                <h4 className="font-medium text-amber-700">{network.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{network.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}