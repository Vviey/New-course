import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Lock, Key, CheckCircle2, XCircle, Info } from 'lucide-react';
import { bioluminescentTheme } from '@/lib/realm-themes';

interface Challenge {
  id: number;
  title: string;
  description: string;
  ciphertext: string;
  hint?: string;
  solution: string;
  explanation: string;
}

interface VisualExplanation {
  id: number;
  title: string;
  description: string;
  svgPath?: string;
}

interface CryptographySimulatorProps {
  challenges: Challenge[];
  visualExplanations: VisualExplanation[];
  onComplete?: () => void;
}

export function CryptographySimulator({
  challenges = [],
  visualExplanations = [],
  onComplete
}: CryptographySimulatorProps) {
  const [currentTab, setCurrentTab] = useState('challenge-1');
  const [attempts, setAttempts] = useState<{[key: string]: string}>({});
  const [results, setResults] = useState<{[key: string]: boolean}>({});
  const [showHints, setShowHints] = useState<{[key: string]: boolean}>({});
  const [showExplanations, setShowExplanations] = useState<{[key: string]: boolean}>({});
  const [allCompleted, setAllCompleted] = useState(false);

  const handleAttempt = (challengeId: number) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge) return;
    
    const attempt = attempts[`challenge-${challengeId}`] || '';
    const isCorrect = attempt.trim().toLowerCase() === challenge.solution.trim().toLowerCase();
    
    setResults({
      ...results,
      [`challenge-${challengeId}`]: isCorrect
    });
    
    if (isCorrect) {
      setShowExplanations({
        ...showExplanations,
        [`challenge-${challengeId}`]: true
      });
      
      // Check if all challenges are now completed
      const allDone = challenges.every(c => {
        return c.id === challengeId 
          ? true 
          : results[`challenge-${c.id}`];
      });
      
      if (allDone) {
        setAllCompleted(true);
      }
    }
  };
  
  const handleInputChange = (challengeId: number, value: string) => {
    setAttempts({
      ...attempts,
      [`challenge-${challengeId}`]: value
    });
  };
  
  const toggleHint = (challengeId: number) => {
    setShowHints({
      ...showHints,
      [`challenge-${challengeId}`]: !showHints[`challenge-${challengeId}`]
    });
  };
  
  // If all challenges are completed, show the completion screen
  if (allCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="text-center mb-8">
          <Lock className="h-16 w-16 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-teal-800 mb-2">Cryptography Mastered</h2>
          <p className="text-gray-700">
            Congratulations! You've successfully deciphered all the messages and uncovered the secrets of cryptography.
          </p>
        </div>
        
        <div className="mb-6 bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold text-teal-800 mb-2">Key Insights:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                Cryptography is the foundation of Bitcoin's security, enabling secure transactions without trusted third parties.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                Public key cryptography allows anyone to verify your signature with your public key, but only you can create signatures with your private key.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                In Bitcoin, your wallet address is derived from your public key, and your private key is what you use to spend the bitcoin sent to that address.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                Your seed phrase (mnemonic) is a human-readable representation of your private key - keeping it secure is critical.
              </span>
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <Button
            onClick={onComplete}
            style={{
              background: bioluminescentTheme.gradients.glow,
              boxShadow: bioluminescentTheme.shadows.glow,
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
      <div 
        className="p-6 border-b"
        style={{ 
          background: bioluminescentTheme.gradients.aurora,
          borderImageSlice: 1
        }}
      >
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white mb-2">The Glowing Path: Cryptography</h2>
          <p className="text-gray-100">
            Decrypt the messages using your knowledge of cryptography. Each challenge reveals the secrets behind Bitcoin's secure transactions.
          </p>
        </div>
      </div>
      
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="grid grid-cols-3 w-full">
            {challenges.map(challenge => (
              <TabsTrigger 
                key={challenge.id} 
                value={`challenge-${challenge.id}`}
                className={results[`challenge-${challenge.id}`] ? "bg-green-50 text-green-700" : ""}
              >
                {results[`challenge-${challenge.id}`] && <CheckCircle2 className="h-4 w-4 mr-1" />}
                {challenge.title}
              </TabsTrigger>
            ))}
            <TabsTrigger value="explanations">Visual Guides</TabsTrigger>
          </TabsList>
        </div>
        
        {challenges.map(challenge => (
          <TabsContent key={challenge.id} value={`challenge-${challenge.id}`} className="p-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-teal-800">
                  <Lock className="h-5 w-5 mr-2 text-teal-600" />
                  {challenge.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{challenge.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    <div className="font-semibold text-gray-600 mb-1">Encrypted message:</div>
                    <div className="text-gray-800 break-all">{challenge.ciphertext}</div>
                  </div>
                  
                  {challenge.hint && (
                    <div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => toggleHint(challenge.id)}
                        className="text-blue-600"
                      >
                        {showHints[`challenge-${challenge.id}`] ? 'Hide Hint' : 'Show Hint'}
                      </Button>
                      
                      {showHints[`challenge-${challenge.id}`] && (
                        <div className="mt-2 p-3 bg-blue-50 rounded-md text-blue-800 text-sm">
                          <div className="flex">
                            <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                            <p>{challenge.hint}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <div className="font-medium text-gray-700 mb-2">Enter decrypted message:</div>
                    <div className="flex space-x-2">
                      <Input 
                        value={attempts[`challenge-${challenge.id}`] || ''}
                        onChange={e => handleInputChange(challenge.id, e.target.value)}
                        className="font-mono"
                        placeholder="Type your solution here..."
                      />
                      <Button 
                        onClick={() => handleAttempt(challenge.id)}
                        style={{
                          background: bioluminescentTheme.gradients.glow,
                          boxShadow: bioluminescentTheme.shadows.button,
                        }}
                      >
                        Check
                      </Button>
                    </div>
                  </div>
                  
                  {results[`challenge-${challenge.id}`] !== undefined && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      results[`challenge-${challenge.id}`] 
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}>
                      <div className="flex items-start">
                        {results[`challenge-${challenge.id}`] 
                          ? <CheckCircle2 className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                          : <XCircle className="h-5 w-5 mr-2 text-red-600 mt-0.5" />
                        }
                        <div>
                          <p className="font-medium">
                            {results[`challenge-${challenge.id}`] 
                              ? 'Correct!' 
                              : 'Not quite right. Try again!'}
                          </p>
                          {results[`challenge-${challenge.id}`] && showExplanations[`challenge-${challenge.id}`] && (
                            <div className="mt-2 text-gray-700">
                              <p className="font-medium mb-1">How it works:</p>
                              <p className="text-sm">{challenge.explanation}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
        
        <TabsContent value="explanations" className="p-6">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-teal-800">Visual Explanations</h3>
            <p className="text-gray-700">
              These diagrams help explain the core concepts of cryptography used in Bitcoin.
            </p>
            
            {visualExplanations.map(visual => (
              <Card key={visual.id} className="mb-6">
                <CardHeader>
                  <CardTitle className="text-teal-800">{visual.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{visual.description}</p>
                  
                  {visual.svgPath ? (
                    <div className="bg-gray-50 p-4 rounded-lg flex justify-center">
                      <img 
                        src={visual.svgPath} 
                        alt={visual.title}
                        className="max-h-64"
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-50 h-40 rounded-lg flex items-center justify-center text-gray-400">
                      Illustration placeholder
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}