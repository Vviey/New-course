import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ArrowDown, GitMerge, CheckCircle2, XCircle, BadgeHelp, Lightbulb } from 'lucide-react';
import { bioluminescentTheme } from '@/lib/realm-themes';

interface MerkleNode {
  id: string;
  value: string;
  isLeaf: boolean;
  left?: string;
  right?: string;
  highlight?: boolean;
}

interface MerkleProof {
  txIndex: number;
  siblings: string[];
  direction: string;
}

interface VerificationResult {
  verified: boolean;
  path: string[];
}

interface MerkleTreeSimulatorProps {
  explanation?: string;
  transactionData?: string[];
  challenges: any[];
  visualization?: any;
  onComplete?: () => void;
}

// Simplified hash function for demo purposes
const simpleHash = (data: string): string => {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
};

// Helper to pair elements for Merkle tree
const pairItems = (items: string[]): string[][] => {
  const pairs: string[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    if (i + 1 < items.length) {
      pairs.push([items[i], items[i + 1]]);
    } else {
      pairs.push([items[i], items[i]]); // Duplicate the last item if odd
    }
  }
  return pairs;
};

export function MerkleTreeSimulator({
  explanation = "A Merkle tree is a binary tree of hashes, where leaf nodes contain transaction hashes and non-leaf nodes contain the hash of their child nodes. The root hash can verify any transaction with a small proof.",
  transactionData = [],
  challenges = [],
  visualization = { type: "interactive-tree", levels: 3, highlight: "path-verification" },
  onComplete
}: MerkleTreeSimulatorProps) {
  const [currentTab, setCurrentTab] = useState('explanation');
  const [selectedTx, setSelectedTx] = useState<number | null>(null);
  const [merkleNodes, setMerkleNodes] = useState<MerkleNode[]>([]);
  const [merkleRoot, setMerkleRoot] = useState<string>('');
  const [txHashes, setTxHashes] = useState<string[]>([]);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [verificationAttempted, setVerificationAttempted] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false);
  
  // Initialize tx hashes on mount
  useEffect(() => {
    if (transactionData.length > 0) {
      const hashes = transactionData.map(tx => simpleHash(tx));
      setTxHashes(hashes);
    }
  }, [transactionData]);
  
  // Build Merkle tree whenever tx hashes change
  useEffect(() => {
    if (txHashes.length > 0) {
      const tree = buildMerkleTree(txHashes);
      setMerkleNodes(tree.nodes);
      setMerkleRoot(tree.root);
    }
  }, [txHashes]);
  
  // Build a Merkle tree from leaf node hashes
  const buildMerkleTree = (leaves: string[]) => {
    const nodes: MerkleNode[] = leaves.map((leaf, index) => ({
      id: `leaf-${index}`,
      value: leaf,
      isLeaf: true
    }));
    
    let currentLevel = [...leaves];
    let levelIndex = 0;
    
    while (currentLevel.length > 1) {
      const pairs = pairItems(currentLevel);
      const newLevel: string[] = [];
      
      pairs.forEach((pair, index) => {
        const combinedHash = simpleHash(pair[0] + pair[1]);
        newLevel.push(combinedHash);
        
        nodes.push({
          id: `node-${levelIndex}-${index}`,
          value: combinedHash,
          isLeaf: false,
          left: nodes.find(n => n.value === pair[0])?.id,
          right: nodes.find(n => n.value === pair[1])?.id
        });
      });
      
      currentLevel = newLevel;
      levelIndex++;
    }
    
    return {
      nodes,
      root: currentLevel[0]
    };
  };
  
  // Handle transaction selection for verification
  const handleSelectTransaction = (index: number) => {
    setSelectedTx(index);
    setVerificationAttempted(false);
    setVerificationResult(null);
    
    // Highlight the path from tx to root
    const highlightedNodes = [...merkleNodes].map(node => ({ ...node, highlight: false }));
    
    // Find the leaf node
    const leafNode = highlightedNodes.find(node => node.id === `leaf-${index}`);
    if (leafNode) {
      leafNode.highlight = true;
      
      // Trace up the tree
      let currentNode = leafNode;
      let pathFound = true;
      
      while (pathFound) {
        // Find parent node that has this node as a child
        const parentNode = highlightedNodes.find(node => 
          node.left === currentNode.id || node.right === currentNode.id
        );
        
        if (parentNode) {
          parentNode.highlight = true;
          currentNode = parentNode;
        } else {
          pathFound = false;
        }
      }
      
      setMerkleNodes(highlightedNodes);
    }
  };
  
  // Verify the selected transaction
  const verifyTransaction = () => {
    if (selectedTx === null) return;
    
    // Find the leaf node for the tx
    const leafNode = merkleNodes.find(node => node.id === `leaf-${selectedTx}`);
    if (!leafNode) return;
    
    // Collect siblings along the path to the root
    const siblings: string[] = [];
    const path: string[] = [leafNode.value];
    const directions: string[] = [];
    
    let currentNode = leafNode;
    let pathToRoot = true;
    
    while (pathToRoot) {
      // Find parent node
      const parentNode = merkleNodes.find(node => 
        node.left === currentNode.id || node.right === currentNode.id
      );
      
      if (parentNode) {
        path.push(parentNode.value);
        
        // Find sibling
        const isLeftChild = parentNode.left === currentNode.id;
        const siblingId = isLeftChild ? parentNode.right : parentNode.left;
        const siblingNode = merkleNodes.find(node => node.id === siblingId);
        
        if (siblingNode) {
          siblings.push(siblingNode.value);
          directions.push(isLeftChild ? 'right' : 'left');
        }
        
        currentNode = parentNode;
      } else {
        pathToRoot = false;
      }
    }
    
    // Create verification result
    setVerificationResult({
      verified: path[path.length - 1] === merkleRoot,
      path
    });
    
    setVerificationAttempted(true);
    
    // Mark challenge as complete
    if (path[path.length - 1] === merkleRoot) {
      setTimeout(() => {
        setAllCompleted(true);
      }, 2000);
    }
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
          <GitMerge className="h-16 w-16 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-teal-800 mb-2">Merkle Tree Mastery</h2>
          <p className="text-gray-700">
            Congratulations! You've successfully explored Merkle trees and understand how they enable efficient verification of transactions in Bitcoin.
          </p>
        </div>
        
        <div className="mb-6 bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold text-teal-800 mb-2">Key Insights:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                Merkle trees allow you to verify that a transaction is included in a block without downloading the entire block.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                This is crucial for lightweight clients like mobile wallets, which can operate securely without storing the full blockchain.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                The Merkle root in each block header provides a compact way to represent all transactions in the block, ensuring data integrity.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span className="text-gray-700">
                Verification proofs are logarithmic in size, meaning even blocks with thousands of transactions require only a small proof.
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
          <h2 className="text-2xl font-bold text-white mb-2">Merkle's Canopy</h2>
          <p className="text-gray-100">
            Explore how Merkle trees enable efficient verification of transactions in the Bitcoin blockchain.
          </p>
        </div>
      </div>
      
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="explanation">Merkle Trees</TabsTrigger>
            <TabsTrigger value="build">Build a Tree</TabsTrigger>
            <TabsTrigger value="verify">Verify Transactions</TabsTrigger>
          </TabsList>
        </div>
        
        {/* Explanation Tab */}
        <TabsContent value="explanation" className="p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-teal-800">
                <GitMerge className="h-5 w-5 mr-2 text-teal-600" />
                What is a Merkle Tree?
              </CardTitle>
              <CardDescription>
                A data structure that efficiently verifies the contents of large datasets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">{explanation}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">How Merkle Trees Work:</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mr-2 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Hash the Transactions</h4>
                        <p className="text-sm text-gray-600">
                          Each transaction is hashed to create a fixed-size identifier. These become the leaf nodes of the tree.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mr-2 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Pair and Hash</h4>
                        <p className="text-sm text-gray-600">
                          Pair adjacent transaction hashes and hash each pair together to create the next level of the tree.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mr-2 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Continue Upward</h4>
                        <p className="text-sm text-gray-600">
                          Repeat the pairing and hashing process until you reach a single hash at the top—the Merkle root.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mr-2 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Verification</h4>
                        <p className="text-sm text-gray-600">
                          To verify a transaction, you only need the transaction hash, its sibling hashes along the path to the root (the Merkle proof),
                          and the Merkle root.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg mt-4">
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-teal-800 mb-1">Why Bitcoin Uses Merkle Trees:</h3>
                      <p className="text-sm text-teal-700">
                        Merkle trees allow lightweight clients (like mobile wallets) to verify transactions without downloading the entire blockchain.
                        They only need the block headers (which include the Merkle root) and a small Merkle proof. This makes Bitcoin more accessible 
                        while maintaining security.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg w-full max-w-sm">
                    <div className="flex justify-center mb-4">
                      <div className="bg-teal-100 text-teal-800 font-mono p-2 rounded">
                        Merkle Root: abcd1234
                      </div>
                    </div>
                    
                    <div className="flex justify-center pb-3">
                      <ArrowDown className="h-5 w-5 text-gray-400" />
                    </div>
                    
                    <div className="flex justify-around mb-4">
                      <div className="bg-blue-100 text-blue-800 font-mono p-2 rounded">
                        Hash: ab56ef78
                      </div>
                      <div className="bg-blue-100 text-blue-800 font-mono p-2 rounded">
                        Hash: cd90gh12
                      </div>
                    </div>
                    
                    <div className="flex justify-around">
                      <div className="flex flex-col items-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                        <div className="flex justify-around mt-3 space-x-2">
                          <div className="bg-purple-100 text-purple-800 font-mono p-2 rounded text-xs">
                            Tx1: a1b2c3
                          </div>
                          <div className="bg-purple-100 text-purple-800 font-mono p-2 rounded text-xs">
                            Tx2: d4e5f6
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                        <div className="flex justify-around mt-3 space-x-2">
                          <div className="bg-purple-100 text-purple-800 font-mono p-2 rounded text-xs">
                            Tx3: g7h8i9
                          </div>
                          <div className="bg-purple-100 text-purple-800 font-mono p-2 rounded text-xs">
                            Tx4: j0k1l2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Build Tree Tab */}
        <TabsContent value="build" className="p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-teal-800">
                <GitMerge className="h-5 w-5 mr-2 text-teal-600" />
                Build a Merkle Tree
              </CardTitle>
              <CardDescription>
                See how transactions are organized in a Merkle tree structure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Below are some sample Bitcoin transactions. They are hashed and organized into a Merkle tree.
                  Select a transaction to see its path to the Merkle root.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">Transaction Data:</h3>
                  <div className="space-y-2">
                    {transactionData.map((tx, index) => (
                      <div 
                        key={index}
                        className={`p-2 rounded cursor-pointer ${
                          selectedTx === index 
                            ? 'bg-teal-100 border-teal-300 border' 
                            : 'bg-white border hover:border-blue-300 border-gray-200'
                        }`}
                        onClick={() => handleSelectTransaction(index)}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Tx{index + 1}:</span>
                          <span className="text-gray-500 text-sm">Hash: {txHashes[index]?.substring(0, 8)}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{tx}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedTx !== null && (
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-800 mb-3">Merkle Path for Transaction {selectedTx + 1}:</h3>
                    
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex flex-col items-center space-y-3">
                        {/* Root node */}
                        <div className="bg-teal-100 text-teal-800 font-mono p-2 rounded w-full max-w-xs text-center">
                          <div className="text-xs text-teal-600 mb-1">Merkle Root</div>
                          <div className="truncate">{merkleRoot}</div>
                        </div>
                        
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                        
                        {/* Intermediate nodes (simplified) */}
                        <div className="bg-blue-100 text-blue-800 font-mono p-2 rounded w-full max-w-xs text-center">
                          <div className="text-xs text-blue-600 mb-1">Intermediate Hash</div>
                          <div className="truncate">
                            {merkleNodes.find(n => 
                              n.highlight && !n.isLeaf && n.value !== merkleRoot
                            )?.value || '...'}
                          </div>
                        </div>
                        
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                        
                        {/* Leaf node */}
                        <div className="bg-purple-100 text-purple-800 font-mono p-2 rounded w-full max-w-xs text-center">
                          <div className="text-xs text-purple-600 mb-1">Transaction Hash</div>
                          <div className="truncate">{txHashes[selectedTx]}</div>
                        </div>
                        
                        <div className="mt-4 w-full">
                          <Button
                            onClick={verifyTransaction}
                            className="w-full"
                            style={{
                              background: bioluminescentTheme.gradients.glow,
                              boxShadow: bioluminescentTheme.shadows.button,
                            }}
                          >
                            Verify This Transaction
                          </Button>
                        </div>
                        
                        {verificationAttempted && verificationResult && (
                          <div className={`mt-2 p-3 rounded-lg w-full ${
                            verificationResult.verified 
                              ? 'bg-green-50 text-green-800' 
                              : 'bg-red-50 text-red-800'
                          }`}>
                            <div className="flex items-center">
                              {verificationResult.verified 
                                ? <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" /> 
                                : <XCircle className="h-5 w-5 mr-2 text-red-600" />
                              }
                              <span className="font-medium">
                                {verificationResult.verified 
                                  ? 'Verification Successful!' 
                                  : 'Verification Failed!'
                                }
                              </span>
                            </div>
                            <p className="text-sm mt-1">
                              {verificationResult.verified 
                                ? 'This transaction is provably included in the block.'
                                : 'There was an error in the verification path.'
                              }
                            </p>
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
        
        {/* Verify Tab */}
        <TabsContent value="verify" className="p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-teal-800">
                <GitMerge className="h-5 w-5 mr-2 text-teal-600" />
                Merkle Proof Verification
              </CardTitle>
              <CardDescription>
                Learn how lightweight clients verify transactions without the full blockchain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <BadgeHelp className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-teal-800 mb-1">What is a Merkle Proof?</h3>
                      <p className="text-sm text-teal-700">
                        A Merkle proof is a collection of sibling hashes that allow you to reconstruct the path from a transaction
                        to the Merkle root. It proves a transaction is part of a block without needing all transactions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border rounded-lg p-4 mt-4">
                  <h3 className="font-medium text-gray-800 mb-3">Lightweight Client Verification:</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">What a Full Node Has:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                            <span>Complete blockchain (~500GB)</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                            <span>All transactions in all blocks</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                            <span>Full verification capability</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">What a Lightweight Client Has:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 mr-1" />
                            <span>Block headers only (~80MB)</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 mr-1" />
                            <span>Merkle roots (inside headers)</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 mr-1" />
                            <span>Specific Merkle proofs (as needed)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-blue-800 mb-2">The Verification Process:</h4>
                      <ol className="space-y-2 text-sm text-blue-700">
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Lightweight client receives a transaction and wants to verify it's in a specific block.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            It requests a Merkle proof from a full node, which includes the transaction hash and sibling hashes.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            The client combines these hashes according to the proof's direction (left/right).
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            If the resulting hash matches the Merkle root in the block header, the transaction is verified.
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <h3 className="font-medium text-gray-800 mb-3">Example Merkle Proof:</h3>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Known by Client:</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="font-mono bg-teal-100 text-teal-800 text-xs p-1 rounded mr-2">Root Hash</span>
                              <span className="font-mono text-xs">1817d58bc72944e1...</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-mono bg-purple-100 text-purple-800 text-xs p-1 rounded mr-2">Tx Hash</span>
                              <span className="font-mono text-xs">3c4b9e93f4317a87...</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Provided in Proof:</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="font-mono bg-blue-100 text-blue-800 text-xs p-1 rounded mr-2">Sibling 1</span>
                              <span className="font-mono text-xs">2a7c13ef0a75b631...</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-mono bg-blue-100 text-blue-800 text-xs p-1 rounded mr-2">Sibling 2</span>
                              <span className="font-mono text-xs">c4f8e26f7d891ab5...</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-mono bg-blue-100 text-blue-800 text-xs p-1 rounded mr-2">Direction</span>
                              <span className="font-mono text-xs">right-left</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}