import { useState } from 'react';
import { motion } from 'framer-motion';

interface BitcoinPrivacySimulatorProps {
  onComplete: () => void;
}

export function BitcoinPrivacySimulator({ onComplete }: BitcoinPrivacySimulatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [quizScore, setQuizScore] = useState(0);

  const handleAnswerSelection = (questionId: string, answer: string, isCorrect: boolean) => {
    if (!userAnswers[questionId]) {
      setQuizScore(prevScore => isCorrect ? prevScore + 1 : prevScore);
    }
    
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  };

  const steps = [
    {
      title: "Bitcoin's Privacy Model",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Bitcoin offers a different privacy model than traditional financial systems. It's often described 
            as "pseudonymous" rather than anonymous or fully identified.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <h3 className="font-semibold text-amber-800 mb-2">Bitcoin's Pseudonymity Explained</h3>
            <p className="text-amber-700">
              Bitcoin transactions don't include personal information like names, addresses, or ID numbers.
              Instead, they use cryptographic addresses (like <span className="font-mono text-xs bg-amber-100 p-1 rounded">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</span>)
              that function as pseudonyms.
            </p>
            <p className="text-amber-700 mt-2">
              This creates a system where all transactions are publicly visible on the blockchain, but the real-world
              identities behind the addresses aren't immediately apparent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Public Transparency</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                <li>All transactions are recorded on a public blockchain</li>
                <li>Anyone can view any transaction ever made</li>
                <li>Amounts, addresses, and timestamps are visible</li>
                <li>The complete history can be analyzed by anyone</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Identity Protection</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                <li>Transactions use cryptographic addresses, not names</li>
                <li>No central authority knows everyone's identity</li>
                <li>Users can create new addresses for each transaction</li>
                <li>No login or ID verification required to use Bitcoin</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700 mt-4">
            This unique combination creates a system with a different privacy model than either traditional 
            banking (where banks know all your transactions) or cash (which is fully anonymous but leaves no 
            public record). Understanding this model is key to using Bitcoin effectively.
          </p>
        </div>
      )
    },
    {
      title: "Bitcoin Privacy: Strengths & Weaknesses",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Bitcoin's approach to privacy has both strengths and limitations that are important to understand
            when using it for financial transactions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 h-full">
              <h3 className="font-semibold text-green-800 mb-2">Privacy Strengths</h3>
              <ul className="list-disc ml-5 space-y-3 text-green-700">
                <li>
                  <strong>No Automatic ID Requirements</strong>
                  <p className="text-sm mt-1">Unlike bank accounts that require comprehensive identity verification, Bitcoin addresses can be created without providing personal information.</p>
                </li>
                <li>
                  <strong>No Central Database of Users</strong>
                  <p className="text-sm mt-1">There's no central authority that knows the identity behind every address, making comprehensive surveillance more difficult.</p>
                </li>
                <li>
                  <strong>Address Rotation</strong>
                  <p className="text-sm mt-1">Bitcoin users can create new addresses for each transaction, making it harder to link all activity to a single entity.</p>
                </li>
                <li>
                  <strong>No Transaction Permission</strong>
                  <p className="text-sm mt-1">Transactions don't require approval from intermediaries who could block or monitor specific users or types of spending.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 h-full">
              <h3 className="font-semibold text-red-800 mb-2">Privacy Challenges</h3>
              <ul className="list-disc ml-5 space-y-3 text-red-700">
                <li>
                  <strong>Public Blockchain</strong>
                  <p className="text-sm mt-1">All transaction details are permanently recorded on a public ledger, creating more transparency than cash transactions.</p>
                </li>
                <li>
                  <strong>Address Clustering</strong>
                  <p className="text-sm mt-1">Advanced analysis can link multiple addresses to the same user through their transaction patterns and behaviors.</p>
                </li>
                <li>
                  <strong>Exchange KYC</strong>
                  <p className="text-sm mt-1">Most exchanges require identity verification, creating a link between real-world identity and Bitcoin addresses used.</p>
                </li>
                <li>
                  <strong>Network Analysis</strong>
                  <p className="text-sm mt-1">IP addresses can sometimes be linked to transactions, especially if using centralized nodes or services without privacy protection.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-700 mb-3">
              Test your understanding: Which statement about Bitcoin privacy is most accurate?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-accuracy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-accuracy', 'anonymous', false)}
                  checked={userAnswers['privacy-accuracy'] === 'anonymous'}
                  disabled={userAnswers['privacy-accuracy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Bitcoin transactions are completely anonymous, like using cash</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-accuracy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-accuracy', 'pseudonymous', true)}
                  checked={userAnswers['privacy-accuracy'] === 'pseudonymous'}
                  disabled={userAnswers['privacy-accuracy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Bitcoin is pseudonymous - transactions are public but not directly linked to identities</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-accuracy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-accuracy', 'identifiable', false)}
                  checked={userAnswers['privacy-accuracy'] === 'identifiable'}
                  disabled={userAnswers['privacy-accuracy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Bitcoin transactions are always easily linked to real-world identities</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-accuracy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-accuracy', 'private', false)}
                  checked={userAnswers['privacy-accuracy'] === 'private'}
                  disabled={userAnswers['privacy-accuracy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Bitcoin transactions are private by default and only visible to the sender and receiver</span>
              </label>
            </div>
          </div>
          
          {userAnswers['privacy-accuracy'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg mt-4 ${userAnswers['privacy-accuracy'] === 'pseudonymous' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {userAnswers['privacy-accuracy'] === 'pseudonymous' ? (
                <p>Correct! Bitcoin transactions are pseudonymous - they don't directly contain personal information, but they are recorded on a public blockchain that can be analyzed. This creates a different privacy model than either traditional banking or cash.</p>
              ) : (
                <p>Not quite. Bitcoin's privacy model is best described as pseudonymous. Transactions are publicly visible on the blockchain but use cryptographic addresses instead of personal identifiers. However, various techniques can sometimes link addresses to real-world identities.</p>
              )}
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Privacy Risks: Address Reuse & Chain Analysis",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            While Bitcoin offers pseudonymity, several practices and technologies can compromise privacy.
            Understanding these risks is essential for protecting your financial privacy.
          </p>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Address Reuse: The Privacy Killer</h3>
            <p className="text-gray-600 mb-4">
              One of the biggest privacy risks in Bitcoin is address reuse - using the same Bitcoin address for multiple transactions.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-red-50 p-3 rounded-lg border border-red-200 flex-1">
                <h4 className="font-medium text-red-800 mb-2">Privacy Risks of Address Reuse:</h4>
                <ul className="list-disc ml-4 text-sm text-red-700 space-y-1">
                  <li>Links all your transactions together in the public record</li>
                  <li>Creates a complete financial history tied to one identifier</li>
                  <li>Reveals your entire balance to anyone you transact with</li>
                  <li>Makes your spending patterns and history easy to analyze</li>
                  <li>Increases vulnerability to targeted attacks</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 flex-1">
                <h4 className="font-medium text-green-800 mb-2">Best Practices:</h4>
                <ul className="list-disc ml-4 text-sm text-green-700 space-y-1">
                  <li>Use a new address for each transaction you receive</li>
                  <li>Use wallets that automatically generate fresh addresses</li>
                  <li>Never post a static Bitcoin address online for repeated use</li>
                  <li>Use different addresses for different purposes or contexts</li>
                  <li>Consider separate wallets for different activities</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Blockchain Analysis: Following the Money</h3>
            <p className="text-gray-600 mb-4">
              Specialized companies and government agencies use sophisticated techniques to analyze the blockchain
              and deanonymize users by identifying patterns and linking transactions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Common Analysis Techniques:</h4>
                <ul className="list-disc ml-4 text-sm text-gray-600 space-y-2">
                  <li>
                    <strong>Address Clustering</strong>
                    <p className="mt-1">Identifying which addresses likely belong to the same wallet or entity based on spending patterns</p>
                  </li>
                  <li>
                    <strong>Heuristic Analysis</strong>
                    <p className="mt-1">Using common wallet behaviors to make educated guesses about which addresses are related</p>
                  </li>
                  <li>
                    <strong>Taint Analysis</strong>
                    <p className="mt-1">Tracking how bitcoins flow from one address to another over time</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">How Identities Get Revealed:</h4>
                <ul className="list-disc ml-4 text-sm text-gray-600 space-y-2">
                  <li>
                    <strong>Exchange KYC</strong>
                    <p className="mt-1">When you verify your identity at an exchange, your withdrawals and deposits can be linked to you</p>
                  </li>
                  <li>
                    <strong>Merchant Transactions</strong>
                    <p className="mt-1">Shipping addresses and identifying information provided to merchants can be linked to transactions</p>
                  </li>
                  <li>
                    <strong>Network Analysis</strong>
                    <p className="mt-1">IP addresses can sometimes be linked to transactions when broadcasting to the network</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-700 mb-3">
              Which practice would most improve your Bitcoin privacy?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-practice" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-practice', 'memorize', false)}
                  checked={userAnswers['privacy-practice'] === 'memorize'}
                  disabled={userAnswers['privacy-practice'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Memorizing your Bitcoin private keys instead of storing them</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-practice" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-practice', 'newaddress', true)}
                  checked={userAnswers['privacy-practice'] === 'newaddress'}
                  disabled={userAnswers['privacy-practice'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Using a new receiving address for each transaction</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-practice" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-practice', 'largertx', false)}
                  checked={userAnswers['privacy-practice'] === 'largertx'}
                  disabled={userAnswers['privacy-practice'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Making larger transactions instead of many small ones</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-practice" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-practice', 'publickey', false)}
                  checked={userAnswers['privacy-practice'] === 'publickey'}
                  disabled={userAnswers['privacy-practice'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Publishing your public key on social media for transparency</span>
              </label>
            </div>
          </div>
          
          {userAnswers['privacy-practice'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg mt-4 ${userAnswers['privacy-practice'] === 'newaddress' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {userAnswers['privacy-practice'] === 'newaddress' ? (
                <p>Correct! Using a new receiving address for each transaction is one of the most important Bitcoin privacy practices. It prevents others from seeing your complete transaction history and total balance when you transact with them.</p>
              ) : (
                <p>Not quite. Using a new receiving address for each transaction is actually the most effective practice here. Address reuse is one of the biggest privacy vulnerabilities in Bitcoin, as it links all your transactions together in the public record.</p>
              )}
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Bitcoin Privacy Challenges in Africa",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Bitcoin's privacy model presents unique challenges and opportunities in the African context, where both
            financial privacy and regulatory compliance have important roles to play.
          </p>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">The African Privacy Context</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Privacy Needs:</h4>
                <ul className="list-disc ml-4 text-sm text-gray-600 space-y-1">
                  <li>Protection from corruption and extortion in some regions</li>
                  <li>Safety concerns when wealth becomes publicly known</li>
                  <li>Protection from political targeting in unstable regions</li>
                  <li>Preservation of financial autonomy in community contexts</li>
                  <li>Protection from discrimination based on spending patterns</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Regulatory Realities:</h4>
                <ul className="list-disc ml-4 text-sm text-gray-600 space-y-1">
                  <li>Increasing KYC requirements for financial services</li>
                  <li>Growing regulatory focus on cryptocurrency across the continent</li>
                  <li>Anti-money laundering regulations requiring transaction monitoring</li>
                  <li>Varying levels of government surveillance capacity</li>
                  <li>Different legal frameworks across 54 countries</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mt-4">
              <h4 className="font-medium text-blue-800 mb-2">Case Study: M-Pesa vs. Bitcoin Privacy</h4>
              <p className="text-sm text-blue-700">
                In Kenya, M-Pesa provides convenient mobile money services but creates comprehensive financial surveillance. Every transaction is linked to a phone number and national ID. Bitcoin offers an alternative with greater privacy potential, but mainstream adoption still requires navigating local regulations and exchange KYC requirements.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                The ideal solution may combine both systems: regulated on-ramps with KYC for larger amounts, while preserving privacy options for everyday transactions where surveillance risks outweigh money laundering concerns.
              </p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6">
            <h3 className="font-semibold text-amber-800 mb-2">Practical Challenges in African Context</h3>
            <ul className="list-disc ml-5 space-y-1 text-amber-700">
              <li><strong>Technical Knowledge Gap</strong> - Privacy tools often require technical understanding that may not be widespread</li>
              <li><strong>Exchange Access</strong> - Limited access to exchanges in many regions can make privacy-preserving options harder to access</li>
              <li><strong>Mobile-First Usage</strong> - Many users access Bitcoin primarily through mobile, where some privacy techniques are harder to implement</li>
              <li><strong>Regulatory Uncertainty</strong> - Unclear regulations around privacy tools in many countries create hesitation</li>
              <li><strong>Low Liquidity</strong> - Smaller Bitcoin economies can make privacy techniques that rely on transaction volume less effective</li>
            </ul>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-700 mb-3">
              Which statement about Bitcoin privacy in Africa is most accurate?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-privacy', 'impossible', false)}
                  checked={userAnswers['africa-privacy'] === 'impossible'}
                  disabled={userAnswers['africa-privacy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Bitcoin privacy is impossible to achieve in Africa due to regulatory requirements</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-privacy', 'balanced', true)}
                  checked={userAnswers['africa-privacy'] === 'balanced'}
                  disabled={userAnswers['africa-privacy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Bitcoin privacy in Africa requires balancing legitimate privacy needs with practical and regulatory realities</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-privacy', 'automatic', false)}
                  checked={userAnswers['africa-privacy'] === 'automatic'}
                  disabled={userAnswers['africa-privacy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Bitcoin automatically provides complete financial privacy to all African users</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-privacy', 'irrelevant', false)}
                  checked={userAnswers['africa-privacy'] === 'irrelevant'}
                  disabled={userAnswers['africa-privacy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Financial privacy concerns are irrelevant in the African context</span>
              </label>
            </div>
          </div>
          
          {userAnswers['africa-privacy'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg mt-4 ${userAnswers['africa-privacy'] === 'balanced' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {userAnswers['africa-privacy'] === 'balanced' ? (
                <p>Correct! Bitcoin privacy in Africa requires finding the right balance between legitimate privacy needs (like protection from corruption, discrimination, or targeting) and practical realities such as regulations, technical accessibility, and local exchange options.</p>
              ) : (
                <p>Not quite. The most accurate statement is that Bitcoin privacy in Africa requires balancing legitimate privacy needs with practical and regulatory realities. Privacy is neither impossible nor automatic, and privacy concerns are highly relevant in many African contexts.</p>
              )}
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Privacy Tools and Best Practices",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            While basic Bitcoin offers pseudonymity, several tools and techniques can enhance privacy protection.
            Here are some approaches that can be used depending on your needs and technical capabilities.
          </p>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Bitcoin Privacy Techniques</h3>
            
            <div className="space-y-4">
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-1">Basic Privacy Practices (Beginner-Friendly)</h4>
                <ul className="list-disc ml-4 text-sm text-amber-700 space-y-1">
                  <li>Use a new address for each transaction you receive</li>
                  <li>Use wallets that support address rotation automatically</li>
                  <li>Avoid posting your Bitcoin addresses publicly</li>
                  <li>Use different wallets for different purposes</li>
                  <li>Be mindful of who you tell about your Bitcoin holdings</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-1">Intermediate Techniques</h4>
                <ul className="list-disc ml-4 text-sm text-amber-700 space-y-1">
                  <li>Use non-custodial wallets that don't track your activity</li>
                  <li>Run your own Bitcoin node to avoid leaking information to third parties</li>
                  <li>Use Tor or a VPN when accessing Bitcoin services</li>
                  <li>Consider using lightning network for small payments (offers better privacy)</li>
                  <li>Minimize exchange usage for privacy-sensitive transactions</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-1">Advanced Privacy Tools</h4>
                <ul className="list-disc ml-4 text-sm text-amber-700 space-y-1">
                  <li>CoinJoin implementations (e.g., Wasabi Wallet, Samourai Wallet's Whirlpool)</li>
                  <li>PayJoin for transactions with supporting merchants</li>
                  <li>Lightning Network private channels</li>
                  <li>Coin control features to manage which specific coins you spend</li>
                  <li>Chain analysis countering techniques</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Practical Privacy in African Contexts</h3>
            <p className="text-gray-600 mb-4">
              When applying Bitcoin privacy techniques in Africa, consider these practical approaches:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">For Mobile-First Users</h4>
                <ul className="list-disc ml-4 text-sm text-blue-700 space-y-1">
                  <li>Choose privacy-respecting mobile wallets that generate new addresses automatically</li>
                  <li>Consider using Lightning Network for small payments when possible</li>
                  <li>Use trusted local networks for peer-to-peer Bitcoin exchange</li>
                  <li>Keep sensitive transaction details off social media and messaging platforms</li>
                  <li>Consider hardware wallets for larger amounts even if primarily using mobile</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Balancing Compliance & Privacy</h4>
                <ul className="list-disc ml-4 text-sm text-green-700 space-y-1">
                  <li>Understand and follow local regulations while maintaining maximum allowed privacy</li>
                  <li>Keep proper records for tax compliance while protecting sensitive details</li>
                  <li>Consider separation between identified exchange accounts and private wallets</li>
                  <li>Seek out education on both regulatory requirements and privacy techniques</li>
                  <li>Collaborate with local Bitcoin communities for knowledge sharing</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 mb-3">
              Final Quiz: Which privacy technique is generally most accessible to the average Bitcoin user in Africa?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="accessible-technique" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('accessible-technique', 'coinjoin', false)}
                  checked={userAnswers['accessible-technique'] === 'coinjoin'}
                  disabled={userAnswers['accessible-technique'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Running CoinJoin mixing techniques</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="accessible-technique" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('accessible-technique', 'node', false)}
                  checked={userAnswers['accessible-technique'] === 'node'}
                  disabled={userAnswers['accessible-technique'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Running a full Bitcoin node at home</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="accessible-technique" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('accessible-technique', 'addresses', true)}
                  checked={userAnswers['accessible-technique'] === 'addresses'}
                  disabled={userAnswers['accessible-technique'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Using a wallet that generates new addresses automatically</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="accessible-technique" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('accessible-technique', 'coincontrol', false)}
                  checked={userAnswers['accessible-technique'] === 'coincontrol'}
                  disabled={userAnswers['accessible-technique'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Using advanced coin control features</span>
              </label>
            </div>
          </div>
          
          {userAnswers['accessible-technique'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg mt-4 ${userAnswers['accessible-technique'] === 'addresses' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {userAnswers['accessible-technique'] === 'addresses' ? (
                <p>Correct! Using wallets that automatically generate new addresses for each transaction is the most accessible privacy technique for most users. It requires minimal technical knowledge but significantly improves privacy by preventing address reuse.</p>
              ) : (
                <p>Not quite. Using wallets that automatically generate new addresses for each transaction is actually the most accessible privacy technique. It requires minimal technical knowledge but significantly improves privacy by preventing address reuse, which is one of the biggest privacy vulnerabilities.</p>
              )}
            </motion.div>
          )}
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6">
            <h3 className="font-semibold text-amber-800 mb-2">Your Privacy Knowledge</h3>
            <p className="text-amber-700">
              You've completed the Bitcoin Privacy module and answered {quizScore} out of 4 questions correctly.
            </p>
            <p className="text-amber-700 mt-2">
              Remember that good privacy practices don't require complex technical skills - starting with 
              the basics like address management can significantly improve your financial privacy when using Bitcoin.
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                setCompleted(true);
                onComplete();
              }}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow hover:shadow-lg transition-all duration-200"
            >
              Complete This Mission
            </button>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  if (completed) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-gray-800">{steps[currentStep].title}</h2>
          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-amber-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Content */}
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
      
      {/* Navigation buttons */}
      {currentStep < steps.length - 1 && (
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded ${currentStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Previous
          </button>
          
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow hover:shadow-lg transition-all duration-200"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}