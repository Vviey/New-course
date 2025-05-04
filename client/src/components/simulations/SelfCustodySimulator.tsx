import { useState } from 'react';
import { motion } from 'framer-motion';

interface SelfCustodySimulatorProps {
  onComplete: () => void;
}

export function SelfCustodySimulator({ onComplete }: SelfCustodySimulatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [walletType, setWalletType] = useState<string | null>(null);
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [userMnemonic, setUserMnemonic] = useState<string[]>(Array(12).fill(''));
  const [backupMethod, setBackupMethod] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [securityScore, setSecurityScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Seed phrase generation
  const generateMnemonic = () => {
    const words = [
      'abandon', 'ability', 'able', 'about', 'above', 'absent',
      'absorb', 'abstract', 'absurd', 'abuse', 'access', 'accident',
      'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire',
      'across', 'act', 'action', 'actor', 'actress', 'actual',
      'adapt', 'add', 'addict', 'address', 'adjust', 'admit',
      'adult', 'advance', 'advice', 'aerobic', 'affair', 'afford',
      'afraid', 'again', 'age', 'agent', 'agree', 'ahead',
      'aim', 'air', 'airport', 'aisle', 'alarm', 'album',
      'alcohol', 'alert', 'alien', 'all', 'alley', 'allow'
    ];
    
    const newMnemonic = Array(12).fill('').map(() => {
      const randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
    });
    
    setMnemonic(newMnemonic);
  };

  const handleWalletSelection = (type: string) => {
    setWalletType(type);
    if (type === 'hardware' || type === 'multisig') {
      setSecurityScore(securityScore + 30);
    } else if (type === 'software') {
      setSecurityScore(securityScore + 15);
    } else if (type === 'custodial') {
      setSecurityScore(securityScore - 30);
    }
  };

  const handleMnemonicVerification = () => {
    let matches = 0;
    for (let i = 0; i < mnemonic.length; i++) {
      if (mnemonic[i] === userMnemonic[i]) {
        matches++;
      }
    }
    
    if (matches >= 10) { // Allow 2 mistakes
      setSecurityScore(securityScore + 25);
      return true;
    }
    return false;
  };

  const toggleBackupMethod = (method: string) => {
    if (backupMethod.includes(method)) {
      setBackupMethod(backupMethod.filter(m => m !== method));
    } else {
      setBackupMethod([...backupMethod, method]);
    }
  };

  const calculateFinalScore = () => {
    let score = securityScore;
    
    // Score backup methods
    if (backupMethod.includes('paper')) score += 10;
    if (backupMethod.includes('metal')) score += 20;
    if (backupMethod.includes('memory')) score -= 15; // Risky
    if (backupMethod.includes('digital')) score -= 5; // Some risk
    if (backupMethod.includes('distributed')) score += 15;
    
    // Cap score between 0 and 100
    score = Math.max(0, Math.min(100, score));
    
    setSecurityScore(score);
    return score;
  };

  const nextStep = () => {
    // Special handling for certain steps
    if (currentStep === 0 && !walletType) {
      alert('Please select a wallet type to continue.');
      return;
    }
    
    if (currentStep === 1 && mnemonic.length === 0) {
      generateMnemonic();
      setCurrentStep(currentStep + 1);
      return;
    }
    
    if (currentStep === 2) {
      const success = handleMnemonicVerification();
      if (!success) {
        alert('Please correctly enter the seed phrase to continue.');
        return;
      }
    }
    
    if (currentStep === 3 && backupMethod.length === 0) {
      alert('Please select at least one backup method.');
      return;
    }
    
    if (currentStep === 4) {
      calculateFinalScore();
      setShowResults(true);
      return;
    }
    
    if (currentStep === 5) {
      setIsComplete(true);
      onComplete();
      return;
    }
    
    // Move to next step
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleMnemonicInputChange = (index: number, value: string) => {
    const updated = [...userMnemonic];
    updated[index] = value.trim().toLowerCase();
    setUserMnemonic(updated);
  };

  const getSelfCustodyTips = () => {
    const score = calculateFinalScore();
    
    if (score >= 80) {
      return [
        "You've created a highly secure self-custody setup!",
        "Remember to periodically verify your backups are intact.",
        "Consider setting up an inheritance plan for your bitcoin.",
        "Stay informed about best practices as security standards evolve."
      ];
    } else if (score >= 60) {
      return [
        "Your setup provides good security but could be improved.",
        "Consider upgrading to a hardware wallet if you're using software.",
        "Metal backups are more durable than paper for seed phrases.",
        "Think about adding a passphrase (25th word) to your seed for extra security."
      ];
    } else if (score >= 40) {
      return [
        "Your setup has basic security but significant vulnerabilities.",
        "Avoid digital backups of seed phrases - they're vulnerable to malware.",
        "Never store your seed phrase in plain text on any digital device.",
        "Consider using a hardware wallet for stronger protection."
      ];
    } else {
      return [
        "Your current approach has serious security risks.",
        "Custodial solutions mean you don't truly own your bitcoin.",
        "If you don't control your private keys, you don't control your funds.",
        "Consider learning more about proper self-custody before holding significant value."
      ];
    }
  };

  const steps = [
    {
      title: "Choose Your Wallet Type",
      description: "The first step of self-custody is selecting the right type of wallet",
      content: (
        <div className="space-y-4">
          <p>
            Self-custody means taking full responsibility for your private keys. Your first decision is what 
            type of wallet to use, as this fundamentally affects your security and autonomy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-all ${walletType === 'hardware' ? 'bg-amber-50 border-amber-300 shadow-md' : 'bg-white border-gray-200 hover:border-amber-200'}`}
              onClick={() => handleWalletSelection('hardware')}
            >
              <h3 className="font-medium text-lg mb-1">Hardware Wallet</h3>
              <p className="text-sm text-gray-600 mb-2">
                Purpose-built devices for securing private keys that keep them offline.
              </p>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium">Recommended</span>
                <span className="ml-auto bg-green-100 px-2 py-1 rounded text-green-800">High Security</span>
              </div>
            </div>
            
            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-all ${walletType === 'software' ? 'bg-amber-50 border-amber-300 shadow-md' : 'bg-white border-gray-200 hover:border-amber-200'}`}
              onClick={() => handleWalletSelection('software')}
            >
              <h3 className="font-medium text-lg mb-1">Software Wallet</h3>
              <p className="text-sm text-gray-600 mb-2">
                Apps on your phone or computer that manage your private keys locally.
              </p>
              <div className="flex items-center text-sm">
                <span className="text-yellow-600 font-medium">Convenient</span>
                <span className="ml-auto bg-yellow-100 px-2 py-1 rounded text-yellow-800">Medium Security</span>
              </div>
            </div>
            
            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-all ${walletType === 'multisig' ? 'bg-amber-50 border-amber-300 shadow-md' : 'bg-white border-gray-200 hover:border-amber-200'}`}
              onClick={() => handleWalletSelection('multisig')}
            >
              <h3 className="font-medium text-lg mb-1">Multi-Signature Wallet</h3>
              <p className="text-sm text-gray-600 mb-2">
                Requires multiple keys to authorize transactions (e.g., 2-of-3 setup).
              </p>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium">Advanced Security</span>
                <span className="ml-auto bg-green-100 px-2 py-1 rounded text-green-800">Very High Security</span>
              </div>
            </div>
            
            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-all ${walletType === 'custodial' ? 'bg-amber-50 border-amber-300 shadow-md' : 'bg-white border-gray-200 hover:border-amber-200'}`}
              onClick={() => handleWalletSelection('custodial')}
            >
              <h3 className="font-medium text-lg mb-1">Custodial Service</h3>
              <p className="text-sm text-gray-600 mb-2">
                Exchange or service holds the keys for you (not true self-custody).
              </p>
              <div className="flex items-center text-sm">
                <span className="text-red-600 font-medium">Not Recommended</span>
                <span className="ml-auto bg-red-100 px-2 py-1 rounded text-red-800">Not Self-Custody</span>
              </div>
            </div>
          </div>
          
          {walletType && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg mt-4 ${
                walletType === 'custodial' ? 'bg-red-50 border border-red-200' : 'bg-blue-50 border border-blue-200'
              }`}
            >
              <h3 className={`font-medium mb-2 ${walletType === 'custodial' ? 'text-red-800' : 'text-blue-800'}`}>
                {walletType === 'hardware' && 'Hardware Wallet Selected'}
                {walletType === 'software' && 'Software Wallet Selected'}
                {walletType === 'multisig' && 'Multi-Signature Wallet Selected'}
                {walletType === 'custodial' && 'Custodial Service Selected - Warning!'}
              </h3>
              <p className={`text-sm ${walletType === 'custodial' ? 'text-red-700' : 'text-blue-700'}`}>
                {walletType === 'hardware' && ('Hardware wallets offer excellent security by keeping your private keys offline, protecting them from malware and online attacks.')}
                {walletType === 'software' && ('Software wallets are convenient but security depends on your device. They\'re suitable for smaller amounts but vulnerable to malware.')}
                {walletType === 'multisig' && ('Multi-signature wallets provide advanced security by requiring multiple keys to authorize transactions, protecting against single points of failure.')}
                {walletType === 'custodial' && ('"Not your keys, not your coins." With custodial services, you\'re trusting a third party with your bitcoin. They can freeze your funds, get hacked, or go bankrupt.')}
              </p>
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Seed Phrase Generation",
      description: "Understanding the importance of your seed phrase",
      content: (
        <div className="space-y-4">
          <p>
            A seed phrase (also called a recovery phrase or mnemonic) is a list of 12-24 words that serves as a backup
            of your private keys. Anyone with this phrase can access your bitcoin, so keeping it secure is critical.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-medium text-yellow-800 mb-2">Warning:</h3>
            <p className="text-sm text-yellow-700">
              In a real wallet setup, you should never generate or enter your seed phrase on a computer or website.
              This simulation is for educational purposes only. Always follow the secure generation method provided by
              your wallet manufacturer.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Seed Phrase Best Practices:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
              <li>Never store digitally (no photos, no cloud storage, no password managers)</li>
              <li>Write it down physically or stamp/engrave on metal for durability</li>
              <li>Store in a secure, private location (or multiple locations)</li>
              <li>Never share with anyone, not even "support staff"</li>
              <li>Verify you've recorded it correctly before funding wallet</li>
            </ul>
          </div>
          
          <p>
            In the next step, we'll simulate generating a seed phrase. Pay close attention to it - you'll need to
            verify it afterwards, just like in a real wallet setup.
          </p>
        </div>
      )
    },
    {
      title: "Verifying Your Seed Phrase",
      description: "Always verify you've correctly recorded your seed phrase",
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-amber-800 mb-2">Your Generated Seed Phrase:</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {mnemonic.map((word, index) => (
                <div key={index} className="bg-white p-2 rounded border border-amber-200 text-center">
                  <span className="text-amber-800 text-xs">{index + 1}.</span> <span className="font-medium">{word}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-amber-700 mt-3">
              Imagine you've written this down on paper or stamped it into metal. Now verify you've recorded it correctly.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-800 mb-4">Verify Your Seed Phrase:</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter each word from your seed phrase to verify you've recorded it correctly:
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {userMnemonic.map((word, index) => (
                <div key={index} className="flex flex-col">
                  <label className="text-xs text-gray-500 mb-1">{index + 1}.</label>
                  <input
                    type="text"
                    value={word}
                    onChange={(e) => handleMnemonicInputChange(index, e.target.value)}
                    className="border border-gray-300 rounded p-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Backup Strategy",
      description: "Choose how you'll secure your seed phrase for the long term",
      content: (
        <div className="space-y-4">
          <p>
            Now that you've verified your seed phrase, you need to decide how to store it securely
            for the long term. This is crucial - if you lose your seed phrase, you lose access to your bitcoin.
          </p>
          
          <div className="space-y-3">
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${backupMethod.includes('paper') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={backupMethod.includes('paper')}
                onChange={() => toggleBackupMethod('paper')}
              />
              <div className="ml-3">
                <p className="font-medium">Paper Backup</p>
                <p className="text-sm text-gray-600">
                  Write your seed phrase on paper and store in a secure location (safe, lockbox, etc.).
                  Simple but vulnerable to fire, water damage, and degradation over time.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${backupMethod.includes('metal') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={backupMethod.includes('metal')}
                onChange={() => toggleBackupMethod('metal')}
              />
              <div className="ml-3">
                <p className="font-medium">Metal Backup</p>
                <p className="text-sm text-gray-600">
                  Stamp or engrave your seed phrase on metal (steel, titanium, etc.) for durability.
                  Resistant to fire, water, and physical degradation.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${backupMethod.includes('distributed') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={backupMethod.includes('distributed')}
                onChange={() => toggleBackupMethod('distributed')}
              />
              <div className="ml-3">
                <p className="font-medium">Distributed Storage</p>
                <p className="text-sm text-gray-600">
                  Store multiple copies in different secure locations (e.g., home safe, safety deposit box).
                  Protects against loss from a single catastrophic event.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${backupMethod.includes('digital') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={backupMethod.includes('digital')}
                onChange={() => toggleBackupMethod('digital')}
              />
              <div className="ml-3">
                <p className="font-medium">Digital Backup (Risky)</p>
                <p className="text-sm text-gray-600">
                  Store seed phrase in an encrypted file, password manager, or cloud service.
                  Convenient but vulnerable to hacking, malware, and technical failures.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${backupMethod.includes('memory') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={backupMethod.includes('memory')}
                onChange={() => toggleBackupMethod('memory')}
              />
              <div className="ml-3">
                <p className="font-medium">Memorization (Not Recommended)</p>
                <p className="text-sm text-gray-600">
                  Commit seed phrase to memory without physical backup.
                  Extremely risky due to potential memory failure, injury, or death.
                </p>
              </div>
            </label>
          </div>
          
          {backupMethod.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50 p-4 rounded-lg mt-4"
            >
              <h3 className="font-medium text-blue-800 mb-2">Your Backup Strategy:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {backupMethod.map((method) => (
                  <li key={method} className="text-blue-700">
                    {method === 'paper' && 'Paper backup in secure location'}
                    {method === 'metal' && 'Metal backup resistant to physical damage'}
                    {method === 'distributed' && 'Multiple backups in different locations'}
                    {method === 'digital' && 'Digital backup (higher risk)'}
                    {method === 'memory' && 'Memorization (very high risk)'}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Additional Security Measures",
      description: "Learn about advanced security practices for self-custody",
      content: (
        <div className="space-y-4">
          <p>
            Beyond proper seed phrase storage, there are additional security measures you can implement
            to further protect your bitcoin:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Passphrase (25th Word)</h3>
              <p className="text-sm text-gray-600">
                Add an extra word/phrase to your seed phrase that acts like a password. If someone finds your
                seed phrase, they still can't access your funds without this passphrase.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Tiered Storage</h3>
              <p className="text-sm text-gray-600">
                Use different wallets with different security levels for different amounts. Hot wallet with
                small amounts for regular use, cold storage for larger holdings.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Inheritance Planning</h3>
              <p className="text-sm text-gray-600">
                Create a plan for how your bitcoin can be accessed by trusted loved ones in case of your
                death or incapacitation, without compromising security while you're alive.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Regular Security Audits</h3>
              <p className="text-sm text-gray-600">
                Periodically check that your backups are intact and accessible, and that your security
                measures are still effective and up to date with best practices.
              </p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-2">
            <h3 className="font-medium text-amber-800 mb-2">The Self-Custody Mindset:</h3>
            <p className="text-amber-700">
              "Don't trust, verify" is a core Bitcoin principle. In self-custody, you're taking full responsibility
              for your money - no bank or company can help if you lose access. This requires a mindset shift from
              traditional financial systems where someone else is responsible.
            </p>
            <p className="text-amber-700 mt-2">
              However, with proper security practices, self-custody is significantly more secure than trusting
              third parties with your funds, especially in regions with unstable financial institutions or
              governments.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Your Self-Custody Results",
      description: "See how your choices affect your security and sovereignty",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-lg">Your Security Score</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                securityScore >= 80 ? 'bg-green-100 text-green-800' :
                securityScore >= 60 ? 'bg-amber-100 text-amber-800' :
                securityScore >= 40 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {securityScore}/100
              </span>
            </div>
            
            <div className="h-3 w-full bg-gray-200 rounded-full mb-4">
              <div 
                className={`h-3 rounded-full ${
                  securityScore >= 80 ? 'bg-green-500' :
                  securityScore >= 60 ? 'bg-amber-500' :
                  securityScore >= 40 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${securityScore}%` }}
              ></div>
            </div>
            
            <div className="space-y-1 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>High Risk</span>
                <span></span>
                <span>Moderate</span>
                <span></span>
                <span>Very Secure</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Your Self-Custody Choices:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span><strong>Wallet Type:</strong> {
                    walletType === 'hardware' ? 'Hardware Wallet' :
                    walletType === 'software' ? 'Software Wallet' :
                    walletType === 'multisig' ? 'Multi-Signature Wallet' :
                    'Custodial Service'
                  }</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span><strong>Seed Phrase:</strong> Successfully verified 12-word mnemonic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span><strong>Backup Methods:</strong> {
                    backupMethod.length === 0 ? 'None selected' :
                    backupMethod.map(m => 
                      m === 'paper' ? 'Paper backup' :
                      m === 'metal' ? 'Metal backup' :
                      m === 'distributed' ? 'Distributed storage' :
                      m === 'digital' ? 'Digital backup' :
                      'Memorization'
                    ).join(', ')
                  }</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-medium text-amber-800 mb-2">Self-Custody Tips:</h3>
            <ul className="space-y-2">
              {getSelfCustodyTips().map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-amber-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Key Insight:</h3>
            <p className="text-blue-700">
              Self-custody is foundational to Bitcoin's value proposition. By holding your own keys,
              you gain true ownership and financial sovereignty - freedom from third-party control,
              censorship, or confiscation.
            </p>
            <p className="text-blue-700 mt-2">
              As the adage goes: "Not your keys, not your coins." In a world of increasing financial
              surveillance and control, self-custody is not just a technical practice but a philosophical
              stance on individual rights and freedoms.
            </p>
          </div>
        </div>
      )
    }
  ];
  
  if (isComplete) {
    onComplete();
    return null;
  }
  
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{steps[currentStep].title}</h2>
          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        <p className="text-gray-600">{steps[currentStep].description}</p>
      </div>
      
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        {steps[currentStep].content}
      </motion.div>
      
      <div className="flex justify-end">
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow hover:shadow-lg transition-all duration-200"
        >
          {currentStep < steps.length - 1 ? 'Next' : 'Complete'}
        </button>
      </div>
    </div>
  );
}