import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Fingerprint, CheckCircle2, Lightbulb, Loader2, Shield } from 'lucide-react';
import { bioluminescentTheme } from '@/lib/realm-themes';

interface HashExample {
  input: string;
  hash: string;
}

interface MiningData {
  previousBlockHash: string;
  merkleRoot: string;
  difficulty: number;
  timestamp: number;
}

interface HashPropertyCard {
  name: string;
  description: string;
}

interface HashFunctionSimulatorProps {
  challenges: any[];
  visualizations: any[];
  onComplete?: () => void;
}

// Simple hash function for demo purposes - NOT a cryptographically secure hash
const simpleHash = (input: string): string => {
  let hash = 0;
  if (input.length === 0) return '0x00000000';
  
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Convert to hex with leading zeros
  const hexHash = Math.abs(hash).toString(16).padStart(8, '0');
  return '0x' + hexHash;
};

export function HashFunctionSimulator({
  challenges = [],
  visualizations = [],
  onComplete
}: HashFunctionSimulatorProps) {
  const [currentTab, setCurrentTab] = useState('challenge-1');
  const [userInput, setUserInput] = useState('');
  const [currentHash, setCurrentHash] = useState('');
  const [previousHash, setPreviousHash] = useState('');
  const [miningNonce, setMiningNonce] = useState(0);
  const [miningInProgress, setMiningInProgress] = useState(false);
  const [miningFound, setMiningFound] = useState(false);
  const [successfulNonce, setSuccessfulNonce] = useState(0);
  const [allCompleted, setAllCompleted] = useState(false);
  
  // Generate a hash when user input changes
  useEffect(() => {
    if (userInput) {
      setPreviousHash(currentHash);
      const newHash = simpleHash(userInput);
      setCurrentHash(newHash);
    } else {
      setCurrentHash('');
      setPreviousHash('');
    }
  }, [userInput]);
  
  // Mining simulation
  const handleStartMining = () => {
    setMiningInProgress(true);
    setMiningFound(false);
    
    // Simulate mining operation
    let nonce = 0;
    const blockData = challenges[2].blockData;
    const target = '0'.repeat(blockData.difficulty);
    
    const miningInterval = setInterval(() => {
      const testData = `${blockData.previousBlockHash}${blockData.merkleRoot}${blockData.timestamp}${nonce}`;
      const hash = simpleHash(testData);
      
      setMiningNonce(nonce);
      
      // Check if hash meets difficulty
      if (hash.substring(2, 2 + blockData.difficulty) === target) {
        clearInterval(miningInterval);
        setMiningInProgress(false);
        setMiningFound(true);
        setSuccessfulNonce(nonce);
        
        // Check if all challenges are done
        setTimeout(() => {
          setAllCompleted(true);
        }, 2000);
        
        return;
      }
      
      nonce++;
      
      // Limit the simulation time
      if (nonce > 30) {
        clearInterval(miningInterval);
        setMiningInProgress(false);
        // For the demo, show success anyway
        setMiningFound(true);
        setSuccessfulNonce(nonce - 1);
        
        // Check if all challenges are done
        setTimeout(() => {
          setAllCompleted(true);
        }, 2000);
      }
    }, 200); // Slow down for visual effect
    
    // Cleanup
    return () => clearInterval(miningInterval);
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
          <Fingerprint className="h-16 w-16 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-teal-800 mb-2">Hash Function Mastery</h2>
          <p className="text-gray-700">
            Congratulations! You've successfully explored the world of cryptographic hash functions and their role in Bitcoin.
          </p>
        </div>
        
        <div className="mb-6 bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold text-teal-800 mb-2">Key Insights:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                Hash functions are one-way, making them perfect for securing data without revealing the input.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                The smallest change to the input creates a completely different hash output, ensuring data integrity.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                Bitcoin mining uses hash functions to create proof of work, requiring computational effort to find valid blocks.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                Each Bitcoin block is linked to the previous one by including the previous block's hash, creating a secure chain.
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
          <h2 className="text-2xl font-bold text-white mb-2">Forest of Hash Functions</h2>
          <p className="text-gray-100">
            Explore the cryptographic hash functions that secure Bitcoin's blockchain and ensure data integrity.
          </p>
        </div>
      </div>
      
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="challenge-1">One-Way Path</TabsTrigger>
            <TabsTrigger value="challenge-2">Avalanche Effect</TabsTrigger>
            <TabsTrigger value="challenge-3">Mining Simulation</TabsTrigger>
            <TabsTrigger value="properties">Hash Properties</TabsTrigger>
          </TabsList>
        </div>
        
        {/* One-Way Path Challenge */}
        <TabsContent value="challenge-1" className="p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-teal-800">
                <Fingerprint className="h-5 w-5 mr-2 text-teal-600" />
                The One-Way Path
              </CardTitle>
              <CardDescription>
                A hash function is a one-way cryptographic function that maps data of any size to a fixed-size output.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Try the examples below to see how consistent and unpredictable hash outputs are.
                  Even a tiny change in the input produces a completely different output.
                </p>
                
                <div className="space-y-4">
                  {challenges[0].examples.map((example: HashExample, index: number) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-700 mb-2">Example {index + 1}:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`input-${index}`} className="text-sm text-gray-500">Input</Label>
                          <div id={`input-${index}`} className="font-mono text-sm p-2 bg-white border rounded-md">
                            {example.input}
                          </div>
                        </div>
                        <div>
                          <Label htmlFor={`output-${index}`} className="text-sm text-gray-500">Output Hash</Label>
                          <div id={`output-${index}`} className="font-mono text-sm p-2 bg-white border rounded-md text-blue-600">
                            {example.hash}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 border-t pt-4">
                  <h3 className="font-medium text-gray-800 mb-3">Try it yourself:</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="user-input">Enter any text</Label>
                      <Input 
                        id="user-input"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type something to hash..."
                        className="font-mono"
                      />
                    </div>
                    
                    {currentHash && (
                      <div className="space-y-2">
                        <div>
                          <Label className="text-sm text-gray-500">Current Hash</Label>
                          <div className="font-mono text-sm p-2 bg-teal-50 border border-teal-100 rounded-md text-teal-700">
                            {currentHash}
                          </div>
                        </div>
                        
                        {previousHash && (
                          <div>
                            <Label className="text-sm text-gray-500">Previous Hash</Label>
                            <div className="font-mono text-sm p-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500">
                              {previousHash}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Avalanche Effect Challenge */}
        <TabsContent value="challenge-2" className="p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-teal-800">
                <Fingerprint className="h-5 w-5 mr-2 text-teal-600" />
                Avalanche Effect
              </CardTitle>
              <CardDescription>
                Even a tiny change in the input creates a completely different hash output - this is called the avalanche effect.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  The avalanche effect is crucial for cryptographic hash functions, ensuring that similar inputs produce completely different outputs.
                  This makes it impossible to derive the input from the output or to find patterns.
                </p>
                
                <div className="bg-teal-50 p-4 rounded-lg mb-4">
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-teal-800 mb-1">Why this matters for Bitcoin:</h3>
                      <p className="text-sm text-teal-700">
                        Bitcoin's blockchain relies on this property to secure transactions. If someone tries to alter even a small part of a transaction,
                        the resulting hash will be completely different, making the change immediately detectable.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="original-text">Original Text</Label>
                    <Input 
                      id="original-text"
                      value="Satoshi Nakamoto"
                      readOnly
                      className="font-mono bg-gray-50"
                    />
                    <div>
                      <Label className="text-sm text-gray-500">Hash</Label>
                      <div className="font-mono text-sm p-2 bg-white border rounded-md text-blue-600">
                        {simpleHash("Satoshi Nakamoto")}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="changed-text">Changed Text (lowercase 's')</Label>
                    <Input 
                      id="changed-text"
                      value="satoshi Nakamoto"
                      readOnly
                      className="font-mono bg-gray-50"
                    />
                    <div>
                      <Label className="text-sm text-gray-500">Hash</Label>
                      <div className="font-mono text-sm p-2 bg-white border rounded-md text-blue-600">
                        {simpleHash("satoshi Nakamoto")}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <h3 className="font-medium text-gray-800 mb-3">Try the avalanche effect:</h3>
                  <div className="space-y-3">
                    <Label htmlFor="avalanche-input">Enter text and then make small changes</Label>
                    <Input 
                      id="avalanche-input"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Type something to hash..."
                      className="font-mono"
                    />
                    
                    {currentHash && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-medium text-gray-700 mb-2">Resulting hash:</div>
                        <div className="font-mono text-sm break-all text-blue-600">
                          {currentHash}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Now try changing just one character in your input and watch how the hash completely changes.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Mining Simulation Challenge */}
        <TabsContent value="challenge-3" className="p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-teal-800">
                <Fingerprint className="h-5 w-5 mr-2 text-teal-600" />
                Mining Simulation
              </CardTitle>
              <CardDescription>
                Miners try to find a hash that starts with a certain number of zeros by changing a nonce value. This is called proof of work.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Bitcoin miners compete to find a block hash that meets the current difficulty target. This requires significant computational work,
                  making it expensive to attack the network but also securing it through economic incentives.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Block Data:</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="sm:col-span-3">
                        <span className="text-gray-500">Previous Block Hash:</span>
                        <span className="ml-2 text-blue-600 break-all">{challenges[2].blockData.previousBlockHash}</span>
                      </div>
                      <div className="sm:col-span-3">
                        <span className="text-gray-500">Merkle Root:</span>
                        <span className="ml-2 text-blue-600 break-all">{challenges[2].blockData.merkleRoot}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Timestamp:</span>
                        <span className="ml-2 text-blue-600">{challenges[2].blockData.timestamp}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Difficulty:</span>
                        <span className="ml-2 text-blue-600">{challenges[2].blockData.difficulty} (leading zeros)</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Nonce:</span>
                        <span className="ml-2 text-blue-600">{miningNonce}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-4">
                  {!miningInProgress && !miningFound ? (
                    <Button 
                      onClick={handleStartMining}
                      style={{
                        background: bioluminescentTheme.gradients.glow,
                        boxShadow: bioluminescentTheme.shadows.button,
                      }}
                    >
                      Start Mining Simulation
                    </Button>
                  ) : miningInProgress ? (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        <span>Mining Block... (Testing nonce: {miningNonce})</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        The miner is trying different nonce values until it finds a hash with the required number of leading zeros.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 mr-2" />
                        <span>Block successfully mined! (Nonce: {successfulNonce})</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        The miner has found a valid hash that meets the difficulty requirement. In Bitcoin, this would earn a block reward.
                      </p>
                    </div>
                  )}
                </div>
                
                {miningFound && (
                  <div className="bg-green-50 p-4 rounded-lg mt-4">
                    <h3 className="font-medium text-green-800 mb-2">Mining Success Explained:</h3>
                    <p className="text-sm text-green-700">
                      The mining process found a nonce value that, when combined with the block data and hashed, produced a hash with 
                      {' ' + challenges[2].blockData.difficulty} leading zeros. In real Bitcoin mining, the difficulty is much higher, requiring 
                      specialized hardware (ASICs) to find valid blocks.
                    </p>
                    <p className="text-sm text-green-700 mt-2">
                      This proof-of-work system ensures that creating valid blocks requires computational work, which secures the blockchain 
                      against tampering. Altering any past transaction would require redoing all the work from that point forward.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Hash Properties */}
        <TabsContent value="properties" className="p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-teal-800">
                <Shield className="h-5 w-5 mr-2 text-teal-600" />
                Hash Function Properties
              </CardTitle>
              <CardDescription>
                Cryptographic hash functions have specific properties that make them ideal for securing the Bitcoin blockchain.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visualizations[1].properties.map((property: HashPropertyCard, index: number) => (
                    <Card key={index} className="bg-gray-50 border-teal-100">
                      <CardHeader className="py-3">
                        <CardTitle className="text-teal-800 text-base">{property.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-0 pb-3">
                        <p className="text-sm text-gray-700">{property.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg mt-4">
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-teal-800 mb-1">SHA-256 in Bitcoin:</h3>
                      <p className="text-sm text-teal-700">
                        Bitcoin uses the SHA-256 hash function, developed by the NSA. SHA-256 produces a 256-bit (32-byte) hash value, 
                        typically represented as a 64-character hexadecimal number. The chances of finding two inputs that produce the 
                        same SHA-256 hash (a collision) are astronomically small, making it cryptographically secure.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-medium text-gray-800 mb-3">How SHA-256 is used in Bitcoin:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 mt-1" />
                      <span>Transaction IDs are created by hashing the transaction data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 mt-1" />
                      <span>Transactions are organized in a Merkle tree, which uses pairs of hashes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 mt-1" />
                      <span>Blocks are linked together by including the previous block's hash</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 mt-1" />
                      <span>Mining involves finding a block hash that meets difficulty requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 mt-1" />
                      <span>Bitcoin addresses are derived from public keys using hash functions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}