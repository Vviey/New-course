import { useState, useEffect } from 'react';

// Define TypeScript interfaces for our data structures
interface Trader {
  id: number;
  name: string;
  has: string;
  wants: string;
  position: {
    x: number;
    y: number;
  };
}

interface Connection {
  from: number;
  to: number;
}

interface Trade {
  fromId: number;
  toId: number;
  item: string;
}

// African pattern SVG for background
const AfricanPattern = () => (
  <svg width="100%" height="100%" className="absolute inset-0 opacity-10 pointer-events-none">
    <pattern id="africanPattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
      <rect width="60" height="60" fill="#FBF4D2" />
      <circle cx="30" cy="30" r="15" fill="#EE720B" />
      <circle cx="0" cy="0" r="10" fill="#FFC567" />
      <circle cx="60" cy="60" r="10" fill="#FFC567" />
      <circle cx="0" cy="60" r="5" fill="#EE720B" />
      <circle cx="60" cy="0" r="5" fill="#EE720B" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#africanPattern)" />
  </svg>
);

interface BarterWebChallengeProps {
  onComplete?: () => void;
}

const BarterWebChallenge = ({ onComplete }: BarterWebChallengeProps) => {
  const [traders, setTraders] = useState<Trader[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedTrader, setSelectedTrader] = useState<number | null>(null);
  const [completedTrades, setCompletedTrades] = useState<Trade[]>([]);
  const [isAllComplete, setIsAllComplete] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Initial traders data
  useEffect(() => {
    const initialTraders = [
      { id: 1, name: "Mama Nia", has: "Yams", wants: "Pot", position: { x: 20, y: 30 } },
      { id: 2, name: "Uncle Kofi", has: "Pot", wants: "Milk", position: { x: 75, y: 20 } },
      { id: 3, name: "Auntie Zari", has: "Milk", wants: "Fish", position: { x: 65, y: 65 } },
      { id: 4, name: "Brother Kwame", has: "Fish", wants: "Salt", position: { x: 25, y: 75 } },
      { id: 5, name: "Grandmother Asha", has: "Salt", wants: "Yams", position: { x: 40, y: 45 } }
    ];
    setTraders(initialTraders);
  }, []);

  // Check if all trades are connected correctly
  useEffect(() => {
    if (connections.length === traders.length && traders.length > 0) {
      const allValid = connections.every(conn => {
        const giver = traders.find(t => t.id === conn.from);
        const receiver = traders.find(t => t.id === conn.to);
        return giver && receiver && giver.has === receiver.wants;
      });
      
      setIsAllComplete(allValid);
      if (allValid) {
        // Set completed trades
        const trades = connections.map(conn => {
          const fromTrader = traders.find(t => t.id === conn.from);
          if (fromTrader) {
            return {
              fromId: conn.from,
              toId: conn.to,
              item: fromTrader.has
            };
          }
          return null;
        }).filter(Boolean) as Trade[];
        
        setCompletedTrades(trades);
        
        // Call onComplete if provided
        if (onComplete) {
          onComplete();
        }
      }
    } else {
      setIsAllComplete(false);
    }
  }, [connections, traders, onComplete]);

  const handleTraderClick = (traderId: number): void => {
    if (selectedTrader === null) {
      setSelectedTrader(traderId);
    } else if (selectedTrader === traderId) {
      setSelectedTrader(null);
    } else {
      // Create a connection between traders
      const existingFromConnection = connections.find(conn => conn.from === selectedTrader);
      const existingToConnection = connections.find(conn => conn.to === traderId);
      
      if (existingFromConnection || existingToConnection) {
        // Remove existing connection if any
        setConnections(prev => prev.filter(conn => 
          conn.from !== selectedTrader && conn.to !== traderId));
      } else {
        // Add new connection
        setConnections(prev => [...prev, { from: selectedTrader, to: traderId }]);
        setAttempts(prev => prev + 1);
      }
      setSelectedTrader(null);
    }
  };

  const resetGame = (): void => {
    setConnections([]);
    setSelectedTrader(null);
    setCompletedTrades([]);
    setIsAllComplete(false);
    setAttempts(0);
  };

  // Calculate line coordinates between traders
  const getLineCoordinates = (connection: Connection): { x1: string; y1: string; x2: string; y2: string; } | null => {
    const fromTrader = traders.find(t => t.id === connection.from);
    const toTrader = traders.find(t => t.id === connection.to);
    
    if (!fromTrader || !toTrader) return null;
    
    return {
      x1: `${fromTrader.position.x}%`,
      y1: `${fromTrader.position.y}%`,
      x2: `${toTrader.position.x}%`,
      y2: `${toTrader.position.y}%`
    };
  };

  // Check if a connection is valid (correct item match)
  const isValidConnection = (connection: Connection): boolean => {
    const giver = traders.find(t => t.id === connection.from);
    const receiver = traders.find(t => t.id === connection.to);
    return giver !== undefined && receiver !== undefined && giver.has === receiver.wants;
  };

  // Custom African-inspired border pattern
  const africanBorder = "border-4 border-orange-500 relative before:absolute before:inset-0 before:border-2 before:border-yellow-300 before:-m-1";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-amber-50 rounded-xl p-6 mb-8 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-serif text-orange-800 relative inline-block">
            Barter Web Challenge
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500"></span>
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-orange-700 font-semibold">Attempts: {attempts}</span>
            <button 
              onClick={resetGame}
              className={`px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition 
                ${africanBorder} border-2 hover:shadow-lg`}
            >
              Reset
            </button>
          </div>
        </div>
        
        <div className={`relative bg-amber-50 rounded-xl aspect-square w-full mb-6 overflow-hidden ${africanBorder}`}>
          {/* African pattern background */}
          <AfricanPattern />
          
          {/* SVG connections between traders */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {connections.map((conn, idx) => {
              const coords = getLineCoordinates(conn);
              if (!coords) return null;
              
              const isValid = isValidConnection(conn);
              
              return (
                <g key={`connection-${idx}`}>
                  <line
                    x1={coords.x1}
                    y1={coords.y1}
                    x2={coords.x2}
                    y2={coords.y2}
                    stroke="#704214"
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                  <line
                    x1={coords.x1}
                    y1={coords.y1}
                    x2={coords.x2}
                    y2={coords.y2}
                    stroke={isValid ? "#EE720B" : "#b91c1c"}
                    strokeWidth="3"
                    strokeDasharray={isValid ? "" : "5,5"}
                    strokeLinecap="round"
                  />
                </g>
              );
            })}
          </svg>
          
          {/* Trader cards */}
          {traders.map(trader => {
            const isSelected = selectedTrader === trader.id;
            const hasConnection = connections.some(conn => 
              conn.from === trader.id || conn.to === trader.id);
            
            return (
              <div 
                key={trader.id}
                className={`absolute w-28 rounded-lg p-3 cursor-pointer transition-all transform
                  ${isSelected ? "bg-orange-300 border-2 border-orange-500 scale-110" : 
                    hasConnection ? "bg-orange-200 border-2 border-orange-400" : 
                    "bg-white border-2 border-yellow-300 hover:border-orange-300"}
                  ${isAllComplete ? "animate-pulse" : ""}
                  shadow-lg`}
                style={{
                  left: `calc(${trader.position.x}% - 3.5rem)`,
                  top: `calc(${trader.position.y}% - 3.5rem)`,
                  zIndex: isSelected ? 20 : 15,
                  background: isSelected ? "#FFC567" : hasConnection ? "#FBF4D2" : "white"
                }}
                onClick={() => handleTraderClick(trader.id)}
              >
                <div className="text-center">
                  <div className="text-sm font-bold text-orange-900">{trader.name}</div>
                  <div className="mt-2 text-xs">
                    <div className="bg-orange-100 rounded px-2 py-1 mb-1 border border-orange-300">
                      Has: <span className="font-semibold">{trader.has}</span>
                    </div>
                    <div className="bg-amber-100 rounded px-2 py-1 border border-amber-300">
                      Wants: <span className="font-semibold">{trader.wants}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white p-4 rounded-lg border-2 border-yellow-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500"></div>
          <p className="text-orange-900 mb-4 mt-2">
            <strong>Instructions:</strong> Connect traders by clicking on them to create successful trades. 
            Each person must trade what they have for what someone else wants.
          </p>
          
          {isAllComplete && (
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 text-green-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500"></div>
              <h3 className="font-bold text-lg mb-2">Success! All trades complete!</h3>
              <p>You've created a perfect barter web in {attempts} attempts.</p>
              <div className="mt-3">
                <h4 className="font-semibold">Completed Trades:</h4>
                <ul className="list-disc pl-5 mt-1">
                  {completedTrades.map((trade, idx) => {
                    const fromTrader = traders.find(t => t.id === trade.fromId);
                    const toTrader = traders.find(t => t.id === trade.toId);
                    
                    if (!fromTrader || !toTrader) return null;
                    
                    return (
                      <li key={idx}>
                        {fromTrader.name} gave {trade.item} to {toTrader.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          
          {!isAllComplete && connections.length > 0 && (
            <div className="text-orange-800">
              Keep working on creating valid connections between all traders.
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-orange-50 rounded-xl p-6 relative overflow-hidden border-2 border-orange-300">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500"></div>
        <h3 className="text-xl font-serif text-orange-800 mb-3">Reflection Question</h3>
        <p className="text-orange-700 border-l-4 border-orange-500 pl-4 py-2 mb-4 bg-orange-50">
          If your village had no money, how would you trade for medicine?
        </p>
        <textarea 
          className="w-full p-3 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" 
          rows="4"
          placeholder="Type your thoughts..."
        />
      </div>
    </div>
  );
};

export default BarterWebChallenge;
