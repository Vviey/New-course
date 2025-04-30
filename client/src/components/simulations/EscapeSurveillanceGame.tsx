import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Eye, EyeOff, DollarSign, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { citadelTheme } from '@/lib/realm-themes';

interface RouteOption {
  id: string;
  label: string;
  risk: number;
  outcome: {
    funds?: number;
    privacy?: number;
    nextRoute?: string;
    message: string;
    restart?: boolean;
    complete?: boolean;
  };
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
  playerStartFunds = 1000,
  routes = {},
  resistanceNetworks = [],
  onComplete
}: EscapeSurveillanceGameProps) {
  const [currentRoute, setCurrentRoute] = useState('start');
  const [funds, setFunds] = useState(playerStartFunds);
  const [privacy, setPrivacy] = useState(0);
  const [history, setHistory] = useState<{route: string, option: RouteOption, outcome: string}[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showNetworks, setShowNetworks] = useState(false);
  
  // Get the current route options
  const getCurrentRouteOptions = () => {
    return routes[currentRoute]?.options || [];
  };
  
  // Handle option selection
  const handleOptionSelect = (option: RouteOption) => {
    // Apply outcome effects
    if (option.outcome.funds) {
      setFunds(funds + option.outcome.funds);
    }
    
    if (option.outcome.privacy) {
      setPrivacy(privacy + option.outcome.privacy);
    }
    
    // Record in history
    setHistory([...history, {
      route: currentRoute,
      option,
      outcome: option.outcome.message
    }]);
    
    // Check for special outcomes
    if (option.outcome.restart) {
      handleRestart();
      return;
    }
    
    if (option.outcome.complete) {
      setIsComplete(true);
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 2000);
      }
      return;
    }
    
    // Check for game over
    if (funds <= 0) {
      setGameOver(true);
      return;
    }
    
    // Move to next route
    if (option.outcome.nextRoute) {
      setCurrentRoute(option.outcome.nextRoute);
    }
  };
  
  // Handle game restart
  const handleRestart = () => {
    setCurrentRoute('start');
    setFunds(playerStartFunds);
    setPrivacy(0);
    setHistory([]);
    setGameOver(false);
  };
  
  // If game over, show game over screen
  if (gameOver) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-red-50 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-800 mb-2">Financial Resources Depleted</h2>
          <p className="text-red-700">
            You've run out of funds and can no longer navigate the financial system.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Game Summary:</h3>
          <p className="text-gray-700 mb-4">
            You made it through {history.length} decision points before running out of resources.
            In real life, financial surveillance can impose significant costs that particularly
            impact those with limited resources.
          </p>
          
          <div className="bg-gray-50 p-3 rounded-md mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-1">Key Decisions:</h4>
            <ul className="space-y-1">
              {history.slice(-3).map((item, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {item.option.label} → {item.outcome.split('.')[0]}.
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Button onClick={handleRestart} className="bg-red-600 hover:bg-red-700">
            Try Again <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }
  
  // If complete, show completion screen
  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="text-center mb-8">
          <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-800 mb-2">Financial Freedom Achieved</h2>
          <p className="text-gray-700">
            Congratulations! You've successfully navigated the financial surveillance system and achieved greater sovereignty.
          </p>
        </div>
        
        <div className="mb-6 bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">Your Journey Summary:</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-3 rounded-md">
              <div className="text-2xl font-bold text-green-600">${funds}</div>
              <div className="text-sm text-gray-600">Remaining Funds</div>
            </div>
            <div className="bg-white p-3 rounded-md">
              <div className="text-2xl font-bold text-blue-600">{privacy}/100</div>
              <div className="text-sm text-gray-600">Privacy Score</div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">
            Through a series of strategic decisions, you've built a financial life with greater
            privacy and control, demonstrating that alternatives to surveillance-based finance are possible.
          </p>
          
          <h4 className="font-medium text-green-700 mb-2">Key Successful Strategies:</h4>
          <ul className="space-y-1">
            {privacy > 50 && (
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Prioritizing privacy-preserving financial tools</span>
              </li>
            )}
            {funds > playerStartFunds / 2 && (
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Avoiding high-fee traditional financial services</span>
              </li>
            )}
            {history.length > 5 && (
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Making long-term strategic decisions rather than short-term convenience choices</span>
              </li>
            )}
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-blue-800 mb-2">The Bitcoin Connection:</h3>
          <p className="text-gray-700">
            Bitcoin was designed to provide an alternative to surveillance-based financial systems.
            Its decentralized nature means no single entity controls who can use it or how.
            With proper privacy practices and self-custody, Bitcoin allows individuals to achieve
            financial sovereignty in ways traditional systems don't permit.
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
          <h2 className="text-2xl font-bold text-blue-800">Escape the Surveillance State</h2>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-green-600 mr-1" />
              <span className="font-medium text-green-700">${funds}</span>
            </div>
            
            <div className="flex items-center">
              <EyeOff className="h-4 w-4 text-blue-600 mr-1" />
              <span className="font-medium text-blue-700">{privacy}/100</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">
          Navigate through a dystopian financial system where surveillance is pervasive. Make strategic choices to maintain your privacy and autonomy.
        </p>
        
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Financial Surveillance</span>
            <span>Financial Freedom</span>
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div 
              className="absolute h-full bg-gradient-to-r from-red-500 to-green-500 rounded-full"
              style={{ width: `${privacy}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Current scenario */}
        <div className="mb-6">
          <Card className="bg-blue-50">
            <CardHeader className="py-3 px-4">
              <CardTitle className="text-md font-medium text-blue-800">
                Current Situation: {getCurrentRouteOptions()[0]?.label.split(':')[0] || currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)}
              </CardTitle>
            </CardHeader>
            <CardContent className="py-0 px-4 pb-3">
              <p className="text-gray-700">
                {history.length > 0 
                  ? history[history.length - 1].outcome
                  : "You're trying to navigate a financial system with increasing surveillance. Your goal is to maintain your privacy and autonomy while managing your resources effectively."}
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Options */}
        <div className="space-y-4 mb-6">
          <h3 className="text-md font-medium text-gray-800 mb-2">Choose your next move:</h3>
          
          {getCurrentRouteOptions().map((option) => (
            <motion.div
              key={option.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="cursor-pointer hover:border-blue-300 transition-colors"
                onClick={() => handleOptionSelect(option)}
              >
                <CardHeader className="py-3 px-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-md font-medium text-blue-700">
                      {option.label}
                    </CardTitle>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <AlertTriangle className={`h-3 w-3 ${
                        option.risk < 30
                          ? 'text-green-500'
                          : option.risk < 60
                          ? 'text-amber-500'
                          : 'text-red-500'
                      } mr-1`} />
                      <span className="text-xs font-medium text-gray-700">
                        {option.risk < 30
                          ? 'Low Risk'
                          : option.risk < 60
                          ? 'Medium Risk'
                          : 'High Risk'}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-0 px-4 pb-3">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      {option.outcome.funds && (
                        <span className={`${
                          option.outcome.funds > 0 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {option.outcome.funds > 0 ? '+' : ''}{option.outcome.funds} funds
                        </span>
                      )}
                    </div>
                    <div>
                      {option.outcome.privacy && (
                        <span className={`${
                          option.outcome.privacy > 0 
                            ? 'text-blue-600' 
                            : 'text-red-600'
                        }`}>
                          {option.outcome.privacy > 0 ? '+' : ''}{option.outcome.privacy} privacy
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => setShowNetworks(!showNetworks)}
            className="w-full justify-between"
          >
            <span>Resistance Networks {showNetworks ? '(Hide)' : '(Show)'}</span>
            <ArrowRight className={`h-4 w-4 transition-transform ${showNetworks ? 'rotate-90' : ''}`} />
          </Button>
          
          {showNetworks && (
            <div className="mt-4 space-y-3">
              <p className="text-sm text-gray-600">
                These networks are building tools and communities to resist financial surveillance:
              </p>
              
              {resistanceNetworks.map((network, index) => (
                <Card key={index} className="bg-gray-50">
                  <CardHeader className="py-2 px-3">
                    <CardTitle className="text-sm font-medium text-gray-800">
                      {network.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-0 px-3 pb-2">
                    <p className="text-xs text-gray-600">{network.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        {/* Journey so far */}
        {history.length > 0 && (
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-2">Your journey so far:</h3>
            <div className="relative pl-6 border-l-2 border-gray-200 space-y-4 max-h-40 overflow-y-auto">
              {history.map((item, index) => (
                <div key={index} className="relative">
                  <div 
                    className="absolute w-3 h-3 bg-blue-500 rounded-full -left-7 top-1.5"
                  ></div>
                  <div className="text-sm">
                    <div className="font-medium text-blue-700">{item.option.label}</div>
                    <p className="text-gray-600 text-xs mt-1">{item.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}