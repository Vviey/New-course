import { useLocation, useParams } from "wouter";
import { useEffect, useState } from "react";
import MissionLayout from "@/components/mission-layout";

// Default mission content
interface MissionData {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

export default function Realm2Mission() {
  // Get mission ID from URL parameters
  const params = useParams<{ missionId: string }>();
  const missionId = params.missionId ? parseInt(params.missionId) : 1;
  const [, setLocation] = useLocation();
  const [missionData, setMissionData] = useState<MissionData | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading mission data
    setLoading(true);
    
    // Get mission data based on mission ID
    const data = getMissionData(missionId);
    setMissionData(data);
    
    // Simulate network delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [missionId]);
  
  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-xl font-medium text-purple-500">Loading mission...</h3>
        </div>
      </div>
    );
  }
  
  // If mission data is not available
  if (!missionData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white p-8">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Mission Not Found</h2>
          <p className="mb-6">The mission you're looking for doesn't exist or hasn't been implemented yet.</p>
          <button 
            onClick={() => setLocation('/realm/2')}
            className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Return to Realm
          </button>
        </div>
      </div>
    );
  }
  
  // Render mission with layout
  return (
    <MissionLayout 
      realmId={2}
      title={missionData.title}
      subtitle={missionData.subtitle}
      progress={(missionId / 6) * 100} // Calculate progress based on current mission out of total
    >
      {missionData.content}
    </MissionLayout>
  );
}

// Helper function to get mission data
function getMissionData(missionId: number): MissionData {
  switch (missionId) {
    case 1:
      return {
        title: "The Citadel's Shadows",
        subtitle: "Understanding financial surveillance",
        content: (
          <div>
            <p className="mb-4">
              As Asha walks through the central plaza of the Citadel, large screens display citizens' financial status and spending habits. 
              The authorities know exactly who has money, how much, and how they spend it.
            </p>
            
            <p className="mb-4">
              When citizens make purchases, their entire financial history becomes available to merchants. The state controls who can 
              and cannot participate in the economy based on their "citizen score."
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">The Privacy Challenge</h3>
            
            <p className="mb-4">
              As Asha explores further, she notices subtle resistance within the city. Some citizens are finding ways to conduct 
              transactions outside the watchful eyes of the Citadel's financial surveillance system.
            </p>
            
            <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Key Concepts</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Financial surveillance as a tool for social control</li>
                <li>Privacy as a fundamental right rather than suspicious activity</li>
                <li>How traditional financial systems track and monitor transactions</li>
                <li>The balance between transparency and privacy in financial systems</li>
              </ul>
            </div>
            
            <p className="mb-4">
              In the Citadel, citizens must seek permission to make large purchases, and their spending habits directly 
              affect their access to services and opportunities.
            </p>
            
            <p className="mb-4">
              This mission introduces the concept of financial privacy and why it matters in a digital world. As we 
              move toward more digitized money, the question of who can see your transactions becomes increasingly important.
            </p>
          </div>
        )
      };
      
    case 2:
      return {
        title: "Privacy vs Control",
        subtitle: "Balancing transparency and personal privacy",
        content: (
          <div>
            <p className="mb-4">
              In the Citadel's central district, Asha meets a researcher named Malik who explains how the city's surveillance system works.
              Every transaction is logged, analyzed, and scored according to the city's values and priorities.
            </p>
            
            <p className="mb-4">
              "The authorities claim complete financial transparency is necessary for security and preventing financial crimes," 
              Malik explains. "But in reality, it creates a system where the state has unprecedented power over individuals."
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">The Balancing Act</h3>
            
            <p className="mb-4">
              Asha learns that any financial system must balance:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-purple-300 mb-2">Transparency</h4>
                <p>Allowing verification of transactions and preventing fraud</p>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-purple-300 mb-2">Privacy</h4>
                <p>Protecting individuals' financial information from unnecessary scrutiny</p>
              </div>
            </div>
            
            <p className="mb-4">
              Through interactive simulations, Asha experiences how different levels of financial privacy affect citizens' 
              lives, from complete surveillance to total privacy, with the ideal system balancing legitimate oversight with personal privacy.
            </p>
            
            <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Key Questions</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Who should have access to your transaction history?</li>
                <li>Should financial privacy be a right or a privilege?</li>
                <li>How can a system prevent financial crimes while respecting privacy?</li>
                <li>What information should be required for different types of transactions?</li>
              </ul>
            </div>
          </div>
        )
      };
      
    case 3:
      return {
        title: "CBDCs and Privacy",
        subtitle: "The future of government-issued digital money",
        content: (
          <div>
            <p className="mb-4">
              Asha visits the Citadel's central bank, where officials are developing the next generation of the city's 
              digital currency system. Here she learns about Central Bank Digital Currencies (CBDCs) and their implications for privacy.
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">What Are CBDCs?</h3>
            
            <p className="mb-4">
              CBDCs are digital versions of national currencies, issued and regulated by a nation's central bank. 
              Unlike decentralized cryptocurrencies, CBDCs are centralized and give authorities significant control over the monetary system.
            </p>
            
            <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Potential CBDC Features</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Programmability - Money with conditions or expiration dates</li>
                <li>Direct monetary policy implementation</li>
                <li>Detailed tracking of all financial activity</li>
                <li>Potential for instant taxation or financial "rewards"</li>
                <li>Ability to instantly freeze or seize funds</li>
              </ul>
            </div>
            
            <p className="mb-4">
              Through simulation exercises, Asha explores how CBDCs could be designed with different privacy features, 
              from completely transparent to partially private transactions.
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">Privacy Trade-offs</h3>
            
            <p className="mb-4">
              In the simulation, Asha must balance competing concerns:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-purple-300 mb-2">Benefits</h4>
                <ul className="list-disc pl-5">
                  <li>Reduced crime and tax evasion</li>
                  <li>Efficient payments and reduced costs</li>
                  <li>Financial inclusion for the unbanked</li>
                </ul>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-purple-300 mb-2">Risks</h4>
                <ul className="list-disc pl-5">
                  <li>Complete financial surveillance</li>
                  <li>Political control through financial censorship</li>
                  <li>Loss of private economic activity</li>
                </ul>
              </div>
            </div>
          </div>
        )
      };
      
    case 4:
      return {
        title: "Bitcoin's Transparency",
        subtitle: "Balancing public ledgers with pseudonymity",
        content: (
          <div>
            <p className="mb-4">
              In a hidden library beneath the Citadel, Asha meets a cryptographer who explains how Bitcoin's approach 
              to transparency and privacy differs from surveillance currencies.
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">Transparent Yet Private?</h3>
            
            <p className="mb-4">
              The cryptographer explains that Bitcoin's blockchain is completely transparent - anyone can view every transaction 
              ever made. However, these transactions are tied to pseudonymous addresses rather than personal identities.
            </p>
            
            <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Bitcoin's Privacy Model</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>All transactions are public and verifiable by anyone</li>
                <li>Addresses are pseudonymous (not directly tied to identities)</li>
                <li>Users can generate new addresses for each transaction</li>
                <li>No built-in surveillance or identity verification</li>
                <li>Privacy is possible but requires careful practices</li>
              </ul>
            </div>
            
            <p className="mb-4">
              Through an interactive demonstration, Asha explores the Bitcoin blockchain, examining real transactions 
              while learning about the challenges of maintaining privacy when using Bitcoin.
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">Privacy Challenges</h3>
            
            <p className="mb-4">
              The cryptographer demonstrates various ways Bitcoin addresses can be linked to real identities:
            </p>
            
            <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 my-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Exchange KYC (Know Your Customer) requirements</li>
                <li>Address reuse and transaction patterns</li>
                <li>Blockchain analysis and clustering techniques</li>
                <li>Correlation attacks using timing and amounts</li>
              </ul>
            </div>
            
            <p className="mb-4">
              Despite these challenges, Asha learns that Bitcoin represents a fundamental shift in the privacy model: 
              instead of authority-granted privacy that can be revoked, Bitcoin offers a base layer of pseudonymity 
              that users can enhance with proper techniques.
            </p>
          </div>
        )
      };
      
    case 5:
      return {
        title: "Lightning Network",
        subtitle: "Enhanced privacy through Layer 2 solutions",
        content: (
          <div>
            <p className="mb-4">
              In a bustling underground market, Asha discovers merchants using an advanced payment system built on top of Bitcoin. 
              This is her introduction to the Lightning Network - Bitcoin's Layer 2 scaling solution.
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">Beyond the Base Layer</h3>
            
            <p className="mb-4">
              A merchant explains that while Bitcoin's base layer provides transparent, censorship-resistant transactions, 
              the Lightning Network adds speed, lower fees, and enhanced privacy.
            </p>
            
            <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Lightning Network Properties</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Near-instant settlement of payments</li>
                <li>Extremely low transaction fees</li>
                <li>Improved privacy - only channel open/close transactions are recorded on the blockchain</li>
                <li>Individual payments within channels aren't publicly visible</li>
                <li>Enables micropayments and new economic possibilities</li>
              </ul>
            </div>
            
            <p className="mb-4">
              Through an interactive demonstration, Asha opens a Lightning channel and makes several payments, experiencing 
              how payments can be routed through multiple channels without revealing transaction details on the public blockchain.
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">Privacy Innovations</h3>
            
            <p className="mb-4">
              The merchant introduces Asha to additional privacy innovations being developed for Bitcoin and Lightning:
            </p>
            
            <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 my-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Onion routing for Lightning payments (similar to Tor)</li>
                <li>Channel factories to reduce on-chain footprint</li>
                <li>CoinJoin and other privacy-enhancing protocols</li>
                <li>Taproot upgrades for improved privacy and smart contracts</li>
              </ul>
            </div>
            
            <p className="mb-4">
              Asha realizes that this layered approach to financial infrastructure allows for innovation without compromising 
              the security and decentralization of the base layer, while enabling different privacy models for different needs.
            </p>
          </div>
        )
      };
      
    case 6:
      return {
        title: "Self-Custody",
        subtitle: "The importance of controlling your own keys",
        content: (
          <div>
            <p className="mb-4">
              Before leaving the Citadel, Asha meets with a security expert who introduces her to perhaps the most important 
              concept in preserving financial privacy and sovereignty: self-custody.
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">Not Your Keys, Not Your Coins</h3>
            
            <p className="mb-4">
              The security expert explains the fundamental principle of Bitcoin ownership: whoever controls the private keys 
              controls the bitcoin. This stands in stark contrast to the Citadel's system, where all funds are ultimately 
              controlled by the central authority.
            </p>
            
            <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium text-purple-300 mb-2">The Self-Custody Advantage</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>No third party can freeze, seize, or restrict your funds</li>
                <li>Independence from centralized service providers</li>
                <li>Protection from institutional failures or restrictions</li>
                <li>Elimination of counter-party risk</li>
                <li>Permissionless transactions without approval</li>
              </ul>
            </div>
            
            <p className="mb-4">
              Through hands-on exercises, Asha learns about different wallet types, from custodial solutions to hardware wallets, 
              and the security trade-offs involved with each approach.
            </p>
            
            <h3 className="text-xl font-medium text-purple-400 my-4">Security Best Practices</h3>
            
            <p className="mb-4">
              The security expert walks Asha through essential security practices:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-purple-300 mb-2">Seed Phrases</h4>
                <p>Proper storage and backup of wallet recovery words, including considerations for inheritance planning</p>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-purple-300 mb-2">Multi-signature</h4>
                <p>Using multiple keys for additional security, requiring several signatures to authorize transactions</p>
              </div>
            </div>
            
            <p className="mb-4">
              As Asha completes this final mission in the Citadel, she understands that self-custody represents the ultimate 
              protection against financial surveillance and control - but also comes with responsibility.
            </p>
            
            <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 my-6">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Key Takeaway</h4>
              <p>
                Self-custody embodies Bitcoin's core principle: providing individuals with direct control over their money 
                without requiring permission or trust in third parties. This fundamental shift in the power dynamic between 
                individuals and institutions is what makes Bitcoin revolutionary compared to centralized digital currencies.
              </p>
            </div>
          </div>
        )
      };
      
    default:
      return {
        title: "Mission Under Construction",
        subtitle: "Check back soon",
        content: (
          <div className="text-center py-8">
            <p className="text-xl mb-6">This mission is currently under development.</p>
            <button 
              onClick={() => setLocation('/realm/2')} 
              className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Return to Realm
            </button>
          </div>
        )
      };
  }
}