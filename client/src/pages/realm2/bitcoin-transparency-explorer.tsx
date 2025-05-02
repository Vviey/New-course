import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface BitcoinTransparencyExplorerProps {
  onComplete: () => void;
}

// Mock blockchain data for the simulation
const mockBlockchainData = {
  blocks: [
    { height: 780123, hash: "000000000000000000073f45a55c38b3c1881481679dc0e5abc80853d8f02589", txCount: 1837, time: "2023-05-15 14:23:09" },
    { height: 780122, hash: "000000000000000000045a32e7fe81c36f5fac4e5a6d9f3aba5c6b216c7b05cf", txCount: 2104, time: "2023-05-15 14:08:21" },
    { height: 780121, hash: "00000000000000000003bb62c65a336efd066e088f644de95bc5bca4f3e9e8b1", txCount: 1955, time: "2023-05-15 13:56:17" }
  ],
  transactions: [
    { 
      txid: "d1c789a9bc167be8f763e0e36703462d3c8f8e7e46f3c4f433f601ee8dd10c68", 
      time: "2023-05-15 14:23:02",
      fee: 0.000123,
      inputs: [
        { address: "bc1q9h8szpgj9j75narzzhrw5tc3puvaskg5wx5w7f", value: 0.23451 }
      ],
      outputs: [
        { address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", value: 0.21123 },
        { address: "bc1q9h8szpgj9j75narzzhrw5tc3puvaskg5wx5w7f", value: 0.02317 }
      ]
    },
    { 
      txid: "f7b9914c9c56ddbd91d408bfd7f9d845b98f84c79f9604d3ec9553cb67648546", 
      time: "2023-05-15 14:22:51",
      fee: 0.000087,
      inputs: [
        { address: "bc1q5c9v2uc9051unr8x3qvr9h5vz9ydrf8pzvxqps", value: 0.15000 },
        { address: "bc1q5c9v2uc9051unr8x3qvr9h5vz9ydrf8pzvxqps", value: 0.05000 }
      ],
      outputs: [
        { address: "3HT5UJV4NxkGNxRAqgR3xUE2kLZ6KvY2yx", value: 0.19991 }
      ]
    },
    { 
      txid: "a8f34b7fc8e42f431cd61bf96da74c1b4751d2afbbe57089c56d4da329832c01", 
      time: "2023-05-15 14:22:43",
      fee: 0.000104,
      inputs: [
        { address: "3KpZGh2egHvqvNKu8jrKvQPZ27RK3TFD8V", value: 0.07432 }
      ],
      outputs: [
        { address: "bc1q7cycwgtzfyvd8rwnlmt93nxhgflgmx8u6tgm66", value: 0.03214 },
        { address: "18d6DHSpTsCqR35r2bEgVpB8J7GBCZgQjD", value: 0.04108 }
      ]
    }
  ],
  addresses: [
    { 
      address: "bc1q9h8szpgj9j75narzzhrw5tc3puvaskg5wx5w7f", 
      transactions: 217,
      received: 34.21,
      sent: 33.78,
      balance: 0.43
    },
    { 
      address: "3KpZGh2egHvqvNKu8jrKvQPZ27RK3TFD8V", 
      transactions: 56,
      received: 12.45,
      sent: 12.45,
      balance: 0
    },
    { 
      address: "bc1q7cycwgtzfyvd8rwnlmt93nxhgflgmx8u6tgm66", 
      transactions: 3,
      received: 0.91,
      sent: 0,
      balance: 0.91
    }
  ]
};

export default function BitcoinTransparencyExplorer({ onComplete }: BitcoinTransparencyExplorerProps) {
  const [view, setView] = useState<'blocks' | 'transactions' | 'addresses' | 'privacy'>('blocks');
  const [selectedTx, setSelectedTx] = useState<string | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  
  // Auto-advance to next section after delay
  useEffect(() => {
    if (step === 5 && !completed) {
      setCompleted(true);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, [step, completed, onComplete]);
  
  const handleNextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      
      // Auto-switch views based on step
      if (step === 1) setView('transactions');
      else if (step === 2) setView('addresses');
      else if (step === 3) setView('privacy');
    }
  };
  
  return (
    <div className="mt-4 mb-8">
      <div className="bg-black/30 border border-purple-900 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-purple-400">
            Bitcoin Blockchain Explorer
          </h3>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setView('blocks')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                view === 'blocks' ? 'bg-purple-600 text-white' : 'bg-purple-900/30 text-gray-300 hover:bg-purple-900/50'
              }`}
            >
              Blocks
            </button>
            <button 
              onClick={() => setView('transactions')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                view === 'transactions' ? 'bg-purple-600 text-white' : 'bg-purple-900/30 text-gray-300 hover:bg-purple-900/50'
              }`}
            >
              Transactions
            </button>
            <button 
              onClick={() => setView('addresses')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                view === 'addresses' ? 'bg-purple-600 text-white' : 'bg-purple-900/30 text-gray-300 hover:bg-purple-900/50'
              }`}
            >
              Addresses
            </button>
            <button 
              onClick={() => setView('privacy')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                view === 'privacy' ? 'bg-purple-600 text-white' : 'bg-purple-900/30 text-gray-300 hover:bg-purple-900/50'
              }`}
            >
              Privacy
            </button>
          </div>
        </div>
        
        {/* Guidance based on current step */}
        <motion.div 
          key={`guidance-${step}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 mb-4"
        >
          {step === 1 && (
            <div className="text-gray-300">
              <h4 className="text-lg font-medium text-purple-300 mb-2">The Transparent Ledger</h4>
              <p>Explore the Bitcoin blockchain - a completely public ledger where every transaction ever made is visible to anyone. Notice how blocks contain multiple transactions and form an immutable chain.</p>
            </div>
          )}
          
          {step === 2 && (
            <div className="text-gray-300">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Pseudonymous Transactions</h4>
              <p>Examine individual transactions. While all transaction details are public (amounts, addresses, times), notice that the addresses are not directly tied to real-world identities—they are pseudonyms.</p>
            </div>
          )}
          
          {step === 3 && (
            <div className="text-gray-300">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Address History</h4>
              <p>Look at individual address histories. Anyone can see all transactions associated with any address. This transparency allows for verification without permission, but also creates privacy challenges.</p>
            </div>
          )}
          
          {step === 4 && (
            <div className="text-gray-300">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Privacy Challenges</h4>
              <p>Now explore how Bitcoin's transparent design creates privacy challenges. While pseudonymous by default, various techniques can link addresses to real-world identities.</p>
            </div>
          )}
          
          {step === 5 && (
            <div className="text-gray-300">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Conclusion</h4>
              <p>Bitcoin's unique transparency model differs fundamentally from both surveillance money and fully private money. It creates a system that is publicly verifiable but can still preserve privacy with proper techniques.</p>
            </div>
          )}
        </motion.div>
        
        {/* Main explorer content */}
        <div className="bg-black/40 border border-purple-900/50 rounded-lg overflow-hidden mb-6">
          {/* Blocks View */}
          {view === 'blocks' && (
            <div className="p-4">
              <table className="min-w-full divide-y divide-purple-900/30">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Height</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Hash (truncated)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Transactions</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-900/30">
                  {mockBlockchainData.blocks.map((block, index) => (
                    <tr key={index} className="hover:bg-purple-900/20">
                      <td className="px-4 py-3 text-sm text-gray-300">{block.height}</td>
                      <td className="px-4 py-3 text-sm text-gray-300 font-mono">{block.hash.substring(0, 16)}...</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{block.txCount}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{block.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Transactions View */}
          {view === 'transactions' && (
            <div>
              <div className="p-4">
                <table className="min-w-full divide-y divide-purple-900/30">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Transaction ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Fee (BTC)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-900/30">
                    {mockBlockchainData.transactions.map((tx, index) => (
                      <tr key={index} className={`hover:bg-purple-900/20 ${selectedTx === tx.txid ? 'bg-purple-900/30' : ''}`}>
                        <td className="px-4 py-3 text-sm text-gray-300 font-mono">{tx.txid.substring(0, 16)}...</td>
                        <td className="px-4 py-3 text-sm text-gray-300">{tx.time}</td>
                        <td className="px-4 py-3 text-sm text-gray-300">{tx.fee}</td>
                        <td className="px-4 py-3 text-sm text-right">
                          <button 
                            onClick={() => setSelectedTx(selectedTx === tx.txid ? null : tx.txid)}
                            className="px-2 py-1 bg-purple-900/50 hover:bg-purple-900/70 text-white text-xs rounded"
                          >
                            {selectedTx === tx.txid ? 'Hide Details' : 'View Details'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Transaction Details Panel */}
              {selectedTx && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-purple-900/50 p-4 bg-black/20"
                >
                  <h4 className="text-md font-medium text-purple-300 mb-3">Transaction Details</h4>
                  
                  {(() => {
                    const tx = mockBlockchainData.transactions.find(t => t.txid === selectedTx);
                    if (!tx) return null;
                    
                    return (
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h5 className="text-sm font-medium text-purple-300 mb-2">Inputs</h5>
                            <div className="space-y-2">
                              {tx.inputs.map((input, idx) => (
                                <div key={idx} className="bg-black/30 p-2 rounded border border-purple-900/30">
                                  <p className="text-xs text-gray-400 mb-1">From Address:</p>
                                  <p className="text-xs text-gray-300 font-mono break-all">{input.address}</p>
                                  <p className="text-xs text-gray-400 mt-1">Amount: <span className="text-gray-300">{input.value} BTC</span></p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-purple-300 mb-2">Outputs</h5>
                            <div className="space-y-2">
                              {tx.outputs.map((output, idx) => (
                                <div key={idx} className="bg-black/30 p-2 rounded border border-purple-900/30">
                                  <p className="text-xs text-gray-400 mb-1">To Address:</p>
                                  <p className="text-xs text-gray-300 font-mono break-all">{output.address}</p>
                                  <p className="text-xs text-gray-400 mt-1">Amount: <span className="text-gray-300">{output.value} BTC</span></p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-purple-900/30">
                          <p className="text-xs text-gray-400">
                            Note how all transaction details—sender addresses, recipient addresses, and exact amounts—are completely public on the blockchain. Anyone can see this information.
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </div>
          )}
          
          {/* Addresses View */}
          {view === 'addresses' && (
            <div>
              <div className="p-4">
                <table className="min-w-full divide-y divide-purple-900/30">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Address</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Transactions</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Total Received</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Balance</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-900/30">
                    {mockBlockchainData.addresses.map((addr, index) => (
                      <tr key={index} className={`hover:bg-purple-900/20 ${selectedAddress === addr.address ? 'bg-purple-900/30' : ''}`}>
                        <td className="px-4 py-3 text-sm text-gray-300 font-mono">{addr.address.substring(0, 12)}...</td>
                        <td className="px-4 py-3 text-sm text-gray-300">{addr.transactions}</td>
                        <td className="px-4 py-3 text-sm text-gray-300">{addr.received} BTC</td>
                        <td className="px-4 py-3 text-sm text-gray-300">{addr.balance} BTC</td>
                        <td className="px-4 py-3 text-sm text-right">
                          <button 
                            onClick={() => setSelectedAddress(selectedAddress === addr.address ? null : addr.address)}
                            className="px-2 py-1 bg-purple-900/50 hover:bg-purple-900/70 text-white text-xs rounded"
                          >
                            {selectedAddress === addr.address ? 'Hide Analysis' : 'View Analysis'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Address Analysis Panel */}
              {selectedAddress && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-purple-900/50 p-4 bg-black/20"
                >
                  <h4 className="text-md font-medium text-purple-300 mb-3">Address Analysis</h4>
                  
                  {(() => {
                    const addr = mockBlockchainData.addresses.find(a => a.address === selectedAddress);
                    if (!addr) return null;
                    
                    return (
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-black/30 p-3 rounded border border-purple-900/30">
                            <h5 className="text-sm font-medium text-purple-300 mb-2">Transaction Patterns</h5>
                            <p className="text-xs text-gray-300">
                              This address has been active since 2021, with regular transaction patterns suggesting it may be used for:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-gray-300">
                              <li>Regular payments (possibly salary or subscription)</li>
                              <li>Multiple small withdrawals from exchanges</li>
                              <li>Interaction with {Math.floor(addr.transactions * 0.4)} different addresses</li>
                            </ul>
                          </div>
                          
                          <div className="bg-black/30 p-3 rounded border border-purple-900/30">
                            <h5 className="text-sm font-medium text-purple-300 mb-2">Privacy Concerns</h5>
                            <p className="text-xs text-gray-300">
                              This address may be vulnerable to these privacy threats:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-gray-300">
                              <li>Address reuse (used multiple times, connecting transactions)</li>
                              <li>Common-input ownership heuristic (linking multiple addresses)</li>
                              <li>Amount correlation (distinctive amounts that can be tracked)</li>
                              <li>Timing analysis (predictable transaction patterns)</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-purple-900/30">
                          <p className="text-xs text-gray-400">
                            While Bitcoin addresses are pseudonymous, advanced chain analysis can often connect addresses to real-world identities through patterns, exchange interactions, and other metadata.
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </div>
          )}
          
          {/* Privacy View */}
          {view === 'privacy' && (
            <div className="p-4">
              <h4 className="text-md font-medium text-purple-300 mb-3">Bitcoin Privacy: Challenges & Solutions</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-black/30 p-3 rounded border border-purple-900/30">
                  <h5 className="text-sm font-medium text-purple-300 mb-2">Privacy Challenges</h5>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                    <li>
                      <span className="font-medium text-purple-200">KYC at Exchanges</span>
                      <p className="text-xs text-gray-400 mt-1">Exchanges collect identity information and can track withdrawals/deposits.</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-200">Address Reuse</span>
                      <p className="text-xs text-gray-400 mt-1">Using the same address multiple times links all your transactions together.</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-200">Chain Analysis</span>
                      <p className="text-xs text-gray-400 mt-1">Companies analyze the blockchain to identify patterns and link addresses to identities.</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-200">Transparent Amounts</span>
                      <p className="text-xs text-gray-400 mt-1">Transaction values are visible to everyone, allowing amount-based tracking.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/30 p-3 rounded border border-purple-900/30">
                  <h5 className="text-sm font-medium text-purple-300 mb-2">Privacy Techniques</h5>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                    <li>
                      <span className="font-medium text-purple-200">New Address Per Transaction</span>
                      <p className="text-xs text-gray-400 mt-1">Using a fresh address for each transaction improves privacy significantly.</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-200">CoinJoin & Mixing</span>
                      <p className="text-xs text-gray-400 mt-1">Combining transactions from multiple users to break the transaction graph.</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-200">Lightning Network</span>
                      <p className="text-xs text-gray-400 mt-1">Layer 2 solution where most transactions happen off-chain, improving privacy.</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-200">PayJoin</span>
                      <p className="text-xs text-gray-400 mt-1">Collaborative transactions that break the common-input ownership heuristic.</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 mt-4">
                <h5 className="text-sm font-medium text-purple-300 mb-2">Bitcoin vs. Surveillance Money</h5>
                <p className="text-sm text-gray-300">
                  Bitcoin offers a fundamentally different privacy model than surveillance-based CBDCs or traditional banking:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
                  <li>Bitcoin privacy is <span className="italic">optional but possible</span>; surveillance money offers <span className="italic">no privacy by design</span></li>
                  <li>Bitcoin puts privacy control in the hands of the user, not a central authority</li>
                  <li>Bitcoin allows verification without permission while preserving reasonable privacy</li>
                  <li>Bitcoin creates a trust-minimized system where you don't need to trust others with your data</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-between">
          <div className="text-sm text-gray-400">
            Step {step} of 5
          </div>
          <button
            onClick={handleNextStep}
            disabled={step >= 5}
            className={`px-5 py-2 bg-purple-600 text-white rounded-md transition-colors ${
              step >= 5 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'
            }`}
          >
            {step < 5 ? "Continue" : "Complete"}
          </button>
        </div>
      </div>
    </div>
  );
}