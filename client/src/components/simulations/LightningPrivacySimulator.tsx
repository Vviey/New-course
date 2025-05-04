import { useState } from 'react';
import { motion } from 'framer-motion';

interface LightningPrivacySimulatorProps {
  onComplete: () => void;
}

export function LightningPrivacySimulator({ onComplete }: LightningPrivacySimulatorProps) {
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
      title: "Introduction to Lightning Network Privacy",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            The Lightning Network is a "second layer" payment protocol that operates on top of Bitcoin, designed to 
            enable faster, cheaper transactions while also providing enhanced privacy compared to on-chain Bitcoin transactions.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <h3 className="font-semibold text-amber-800 mb-2">Lightning Network Basics</h3>
            <p className="text-amber-700">
              Lightning works by creating payment channels between users. Once a channel is established, 
              users can conduct numerous transactions without recording each one on the Bitcoin blockchain.
              Only the channel opening and closing transactions are recorded on-chain.
            </p>
            <p className="text-amber-700 mt-2">
              This approach not only makes transactions nearly instant and virtually fee-free, but 
              also creates different privacy properties than regular Bitcoin transactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Core Lightning Concepts</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                <li><strong>Payment Channels</strong>: Direct connections between two users</li>
                <li><strong>Channel Network</strong>: Interconnected channels enable payments between users without direct connections</li>
                <li><strong>Routing</strong>: Finding a path through the network to deliver payments</li>
                <li><strong>Invoices</strong>: Payment requests with encoded information for routing</li>
                <li><strong>Onion Routing</strong>: Privacy-enhancing technique for hiding payment details</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Lightning vs. On-chain Bitcoin</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                <li>Lightning transactions are not recorded on the blockchain (except channel operations)</li>
                <li>Payment routing information is encrypted and fragmented across the network</li>
                <li>Only the immediate channel partners know about specific payment details</li>
                <li>Enables micropayments that would be uneconomical on-chain</li>
                <li>Transactions are nearly instant compared to on-chain confirmation times</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700 mt-4">
            The privacy benefits of Lightning come from its fundamentally different architecture. Rather than 
            broadcasting every transaction to the entire network, Lightning keeps most transaction details 
            private between direct channel partners while using encryption to protect routing information.
          </p>
        </div>
      )
    },
    {
      title: "Lightning Network Privacy Features",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            The Lightning Network includes several technical features specifically designed to enhance 
            privacy beyond what's possible with standard on-chain Bitcoin transactions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 h-full">
              <h3 className="font-semibold text-green-800 mb-2">Onion Routing</h3>
              <p className="text-green-700 mb-3">
                Lightning uses onion routing (similar to Tor) to pass payments through multiple nodes 
                without each node knowing the full path.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-green-700">
                <li>Each node only knows its immediate predecessor and successor in the route</li>
                <li>Routing information is encrypted in layers (like an onion)</li>
                <li>The sender wraps the payment in multiple encryption layers</li>
                <li>Each node can only decrypt its own layer</li>
                <li>Intermediary nodes can't tell if they're dealing with the payment originator or another intermediary</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 h-full">
              <h3 className="font-semibold text-blue-800 mb-2">Off-chain Transactions</h3>
              <p className="text-blue-700 mb-3">
                Most Lightning activity happens off the Bitcoin blockchain, significantly reducing 
                the amount of information publicly visible.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-blue-700">
                <li>Only channel opening and closing is recorded on the blockchain</li>
                <li>Individual transactions between parties are never published publicly</li>
                <li>Payment amounts, memos, and timing remain private to channel participants</li>
                <li>Transaction volumes and patterns aren't visible to blockchain analysts</li>
                <li>No permanent record of individual payments exists on the blockchain</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 h-full">
              <h3 className="font-semibold text-purple-800 mb-2">Private Channels</h3>
              <p className="text-purple-700 mb-3">
                Lightning allows for the creation of private channels that aren't announced to the 
                wider network.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-purple-700">
                <li>Channels can be created without broadcasting to the public network</li>
                <li>Private channels don't appear in network graphs or public listings</li>
                <li>Only the participants know about the channel's existence</li>
                <li>Provides greater privacy for sensitive payment relationships</li>
                <li>Can still be used to route payments if both parties are known to the sender</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 h-full">
              <h3 className="font-semibold text-amber-800 mb-2">Invoice Privacy</h3>
              <p className="text-amber-700 mb-3">
                Lightning's invoice system includes privacy-enhancing features for payment requests.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-amber-700">
                <li>Invoices can be used only once, preventing payment tracking</li>
                <li>Payment hashes prevent intermediaries from linking payments to invoices</li>
                <li>Invoice routing hints allow payments without public channel announcements</li>
                <li>Invoices can expire, reducing long-term tracking potential</li>
                <li>Invoice descriptions can be encrypted so only sender and receiver see them</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-700 mb-3">
              Which Lightning Network feature contributes most to transaction privacy?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-feature" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-feature', 'speed', false)}
                  checked={userAnswers['privacy-feature'] === 'speed'}
                  disabled={userAnswers['privacy-feature'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Fast transaction confirmation times</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-feature" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-feature', 'onion', true)}
                  checked={userAnswers['privacy-feature'] === 'onion'}
                  disabled={userAnswers['privacy-feature'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Onion routing that hides the full payment path from each node</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-feature" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-feature', 'fees', false)}
                  checked={userAnswers['privacy-feature'] === 'fees'}
                  disabled={userAnswers['privacy-feature'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Lower transaction fees compared to on-chain payments</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-feature" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-feature', 'capacity', false)}
                  checked={userAnswers['privacy-feature'] === 'capacity'}
                  disabled={userAnswers['privacy-feature'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Higher channel capacity for large transactions</span>
              </label>
            </div>
          </div>
          
          {userAnswers['privacy-feature'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg mt-4 ${userAnswers['privacy-feature'] === 'onion' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {userAnswers['privacy-feature'] === 'onion' ? (
                <p>Correct! Onion routing is a key privacy feature of the Lightning Network. It ensures that each node in a payment route only knows its immediate predecessor and successor, preventing any single node from seeing the complete path from sender to recipient. This significantly enhances transaction privacy.</p>
              ) : (
                <p>Not quite. While that feature is valuable, onion routing is the most significant privacy enhancement in Lightning. It ensures that each node in a payment route only knows its immediate connections, preventing any single node from knowing the full path from sender to recipient.</p>
              )}
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Lightning vs. On-Chain Privacy",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Understanding how Lightning Network privacy compares to standard Bitcoin transactions helps you 
            make informed decisions about which payment method to use for different situations.
          </p>
          
          <div className="overflow-hidden rounded-lg border border-gray-200 mt-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Privacy Aspect</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On-Chain Bitcoin</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lightning Network</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Transaction Visibility</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">All transactions permanently visible on public blockchain</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Only channel openings/closings visible on blockchain; individual payments hidden</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Amount Privacy</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">All transaction amounts visible to everyone</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Individual payment amounts known only to direct channel partners</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sender/Receiver Linkability</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Direct connection between sender and receiver addresses visible</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Onion routing prevents direct linkage of sender and receiver</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Long-term Tracking</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">All transactions permanently recorded, enabling historical analysis</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No permanent record of individual payments, reducing long-term tracking</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Metadata Leakage</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Transaction timing, amounts, and relationships leaked to entire network</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Limited metadata visible only to direct channel partners</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Privacy Trade-offs</h3>
            <p className="text-gray-600 mb-4">
              While Lightning offers significant privacy advantages, it also comes with some trade-offs:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-800 mb-2">Channel Partners Know More</h4>
                <p className="text-sm text-red-700">
                  Your direct channel partners can see all transactions flowing through your shared channel.
                  This gives them more information about your payments than random nodes would have in the
                  Bitcoin network.
                </p>
              </div>
              
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-800 mb-2">Opening/Closing Visibility</h4>
                <p className="text-sm text-red-700">
                  While individual transactions are private, channel opening and closing is visible on
                  the blockchain. This can reveal your Lightning participation and potentially the
                  value committed to Lightning channels.
                </p>
              </div>
              
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-800 mb-2">Network Topology</h4>
                <p className="text-sm text-red-700">
                  Public channels are visible in the network graph, which can reveal relationships 
                  between users or services. Private channels help with this but limit routing options.
                </p>
              </div>
              
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-800 mb-2">Route Discovery</h4>
                <p className="text-sm text-red-700">
                  Finding routes through the network requires some information about network topology,
                  which means your wallet needs to gather some data about the broader channel network.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-700 mb-3">
              Which statement about Lightning Network privacy compared to on-chain Bitcoin is most accurate?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="compare-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('compare-privacy', 'more', true)}
                  checked={userAnswers['compare-privacy'] === 'more'}
                  disabled={userAnswers['compare-privacy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Lightning offers more privacy for individual transactions but channel operations are still visible on-chain</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="compare-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('compare-privacy', 'same', false)}
                  checked={userAnswers['compare-privacy'] === 'same'}
                  disabled={userAnswers['compare-privacy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Lightning and on-chain Bitcoin offer the same level of privacy to users</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="compare-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('compare-privacy', 'complete', false)}
                  checked={userAnswers['compare-privacy'] === 'complete'}
                  disabled={userAnswers['compare-privacy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Lightning provides complete anonymity with no privacy concerns whatsoever</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="compare-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('compare-privacy', 'less', false)}
                  checked={userAnswers['compare-privacy'] === 'less'}
                  disabled={userAnswers['compare-privacy'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Lightning provides less privacy than on-chain Bitcoin transactions</span>
              </label>
            </div>
          </div>
          
          {userAnswers['compare-privacy'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg mt-4 ${userAnswers['compare-privacy'] === 'more' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {userAnswers['compare-privacy'] === 'more' ? (
                <p>Correct! Lightning Network does provide enhanced privacy for individual transactions through features like onion routing and off-chain settlement. However, channel opening and closing transactions are still visible on the blockchain, which reveals some information about Lightning participation.</p>
              ) : (
                <p>Not quite. Lightning Network generally provides better privacy for individual transactions than on-chain Bitcoin through features like onion routing and off-chain settlement. However, it's not perfect - channel openings and closings are still visible on-chain, revealing some information about Lightning participation.</p>
              )}
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Lightning Privacy in African Contexts",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            The Lightning Network's privacy features have particular relevance for users in African contexts,
            where financial privacy can be especially important for various economic and social reasons.
          </p>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Practical Applications in Africa</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-2">Remittance Privacy</h4>
                <p className="text-sm text-amber-700">
                  For the African diaspora sending money home, Lightning offers privacy advantages over traditional remittance
                  services that require extensive ID verification and create detailed records of cross-border money flows.
                  This can protect senders and receivers from surveillance, targeted marketing, or discrimination.
                </p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-2">Business Protection</h4>
                <p className="text-sm text-amber-700">
                  Small businesses in some regions face security risks when their financial activities are visible.
                  Lightning's privacy features can help business owners protect information about their revenue,
                  supplier relationships, and customer base from potential threats.
                </p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-2">Personal Financial Autonomy</h4>
                <p className="text-sm text-amber-700">
                  In contexts with strong community or family financial obligations, Lightning can provide
                  individuals with more privacy to build savings and manage personal finances with greater
                  autonomy, while still participating in community support when they choose to.
                </p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-2">Protection from Discrimination</h4>
                <p className="text-sm text-amber-700">
                  In regions with ethnic, religious, or political tensions, Lightning privacy can prevent
                  financial discrimination based on identity or association. Payments for legitimate
                  services can occur without revealing the parties' identities or affiliations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Implementation Challenges</h3>
            <p className="text-gray-600 mb-4">
              While Lightning offers privacy benefits, implementing it in African contexts comes with specific challenges:
            </p>
            
            <ul className="list-disc ml-5 space-y-2 text-gray-600">
              <li>
                <strong>Technical Knowledge</strong>
                <p className="mt-1">Setting up and managing Lightning channels requires more technical knowledge than basic Bitcoin transactions</p>
              </li>
              <li>
                <strong>Channel Liquidity</strong>
                <p className="mt-1">Maintaining well-balanced channels for sending and receiving payments can be challenging</p>
              </li>
              <li>
                <strong>Infrastructure Requirements</strong>
                <p className="mt-1">Running Lightning nodes ideally requires stable internet and power, which may be challenging in some areas</p>
              </li>
              <li>
                <strong>Regulatory Uncertainty</strong>
                <p className="mt-1">Privacy-focused payment systems may face regulatory scrutiny in regions with strict financial surveillance</p>
              </li>
              <li>
                <strong>On/Off Ramps</strong>
                <p className="mt-1">Converting between local currency and Lightning Bitcoin still often requires KYC procedures</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <h3 className="font-semibold text-blue-800 mb-2">Case Study: The Lightning Revolution in El Salvador</h3>
            <p className="text-blue-700 mb-3">
              While not in Africa, El Salvador's Bitcoin adoption demonstrates how Lightning Network privacy 
              can work alongside official recognition:
            </p>
            <ul className="list-disc ml-5 space-y-1 text-blue-700">
              <li>Official wallet (Chivo) introduced millions to Bitcoin and Lightning</li>
              <li>Alternative non-custodial Lightning wallets offer greater privacy options for users</li>
              <li>Lightning payments provide privacy advantages over the traditional banking system</li>
              <li>Small businesses can receive payments privately without extensive financial surveillance</li>
              <li>Cross-border payments now occur with greater privacy than traditional remittance channels</li>
            </ul>
            <p className="text-blue-700 mt-3">
              Similar approaches could work in African countries, balancing officially recognized payment 
              systems with privacy-preserving options for citizens.
            </p>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-700 mb-3">
              Which statement about Lightning Network's privacy benefits in African contexts is most accurate?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-benefits" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-benefits', 'irrelevant', false)}
                  checked={userAnswers['africa-benefits'] === 'irrelevant'}
                  disabled={userAnswers['africa-benefits'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Financial privacy is irrelevant in African contexts</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-benefits" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-benefits', 'contextual', true)}
                  checked={userAnswers['africa-benefits'] === 'contextual'}
                  disabled={userAnswers['africa-benefits'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Lightning's privacy benefits can be particularly valuable in certain African contexts but implementation challenges remain</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-benefits" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-benefits', 'impossible', false)}
                  checked={userAnswers['africa-benefits'] === 'impossible'}
                  disabled={userAnswers['africa-benefits'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Lightning Network is impossible to implement in African contexts</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-benefits" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-benefits', 'simpler', false)}
                  checked={userAnswers['africa-benefits'] === 'simpler'}
                  disabled={userAnswers['africa-benefits'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Lightning Network is technically simpler to implement than regular Bitcoin in African contexts</span>
              </label>
            </div>
          </div>
          
          {userAnswers['africa-benefits'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg mt-4 ${userAnswers['africa-benefits'] === 'contextual' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {userAnswers['africa-benefits'] === 'contextual' ? (
                <p>Correct! Lightning's privacy features can provide significant benefits in many African contexts, especially for remittances, personal financial autonomy, and protection from discrimination. However, challenges like technical complexity, infrastructure requirements, and regulatory concerns need to be addressed for widespread adoption.</p>
              ) : (
                <p>Not quite. Lightning's privacy features can actually provide important benefits in many African contexts, but implementation does face real challenges like technical complexity, infrastructure requirements, and regulatory concerns that need to be addressed.</p>
              )}
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Lightning Privacy Best Practices",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            To maximize privacy benefits when using the Lightning Network, consider following these best practices:
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Use Non-Custodial Lightning Wallets</h3>
              <p className="text-gray-600">
                Non-custodial wallets give you control over your private keys and channel management.
                This provides better privacy than custodial solutions where a third party manages your Lightning funds.
                Look for wallets that prioritize privacy features and give you control over your channels.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Consider Private Channels</h3>
              <p className="text-gray-600">
                For sensitive payment relationships, consider creating private channels that aren't 
                announced to the network. While this limits routing possibilities, it prevents your 
                channel relationships from being publicly visible in the Lightning Network graph.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Manage Channel Opening/Closing Privacy</h3>
              <p className="text-gray-600">
                When opening or closing Lightning channels, remember these transactions are visible on the 
                blockchain. Consider using Bitcoin privacy best practices (like avoiding address reuse) 
                for these on-chain transactions to minimize the connection to your identity.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Connect to Trusted or Privacy-Focused Nodes</h3>
              <p className="text-gray-600">
                Your direct channel partners can see your payment activity through their channels.
                When possible, open channels with trusted entities or nodes known for respecting 
                user privacy rather than nodes that might be monitoring transactions.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Balance Channel Liquidity Privately</h3>
              <p className="text-gray-600">
                When rebalancing channels (shifting funds between channels to maintain liquidity),
                use methods that preserve privacy. Some circular rebalancing techniques can be more 
                private than closing and reopening channels, which leaves on-chain footprints.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Use TOR for Additional Network Privacy</h3>
              <p className="text-gray-600">
                Running your Lightning node over TOR can provide additional network-level privacy by hiding
                your IP address. This prevents observers from linking your Lightning activity to your internet
                connection or physical location.
              </p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6">
            <h3 className="font-semibold text-amber-800 mb-2">Mobile-Friendly Lightning Privacy</h3>
            <p className="text-amber-700 mb-3">
              For mobile users in Africa without the resources to run full Lightning nodes:
            </p>
            <ul className="list-disc ml-5 space-y-1 text-amber-700">
              <li>Choose privacy-preserving mobile Lightning wallets (like Breez, Phoenix, or Muun)</li>
              <li>Understand the privacy trade-offs of different wallet designs</li>
              <li>For larger amounts, consider connecting your mobile wallet to your own node when possible</li>
              <li>Be aware of which transactions occur on-chain vs. in Lightning channels</li>
              <li>Create new channels rather than reusing old ones for better long-term privacy</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 mb-3">
              Final Quiz: Which practice would most improve your Lightning Network privacy?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="best-practice" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('best-practice', 'custodial', false)}
                  checked={userAnswers['best-practice'] === 'custodial'}
                  disabled={userAnswers['best-practice'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Using a custodial Lightning wallet managed by a large exchange</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="best-practice" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('best-practice', 'manyc', false)}
                  checked={userAnswers['best-practice'] === 'manyc'}
                  disabled={userAnswers['best-practice'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Opening many public channels with random nodes</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="best-practice" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('best-practice', 'noncustodial', true)}
                  checked={userAnswers['best-practice'] === 'noncustodial'}
                  disabled={userAnswers['best-practice'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Using a non-custodial Lightning wallet with private channels</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="best-practice" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('best-practice', 'frequent', false)}
                  checked={userAnswers['best-practice'] === 'frequent'}
                  disabled={userAnswers['best-practice'] !== undefined}
                />
                <span className="ml-2 text-gray-700">Frequently closing and reopening channels on the blockchain</span>
              </label>
            </div>
          </div>
          
          {userAnswers['best-practice'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg mt-4 ${userAnswers['best-practice'] === 'noncustodial' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {userAnswers['best-practice'] === 'noncustodial' ? (
                <p>Correct! Using a non-custodial Lightning wallet with private channels provides the best privacy. You maintain control of your private keys, your channel relationships aren't publicly advertised, and you don't rely on a third party that could track all your transactions.</p>
              ) : (
                <p>Not quite. Using a non-custodial Lightning wallet with private channels provides the best privacy. Custodial wallets track all your transactions, while frequent on-chain transactions create more blockchain footprints. Opening many public channels exposes more of your payment network to public view.</p>
              )}
            </motion.div>
          )}
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6">
            <h3 className="font-semibold text-amber-800 mb-2">Your Lightning Privacy Knowledge</h3>
            <p className="text-amber-700">
              You've completed the Lightning Network Privacy module and answered {quizScore} out of 4 questions correctly.
            </p>
            <p className="text-amber-700 mt-2">
              Remember that Lightning offers significant privacy benefits compared to on-chain Bitcoin transactions,
              especially for everyday payments. Understanding and applying these privacy features can contribute to
              financial autonomy and protection in various African contexts.
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