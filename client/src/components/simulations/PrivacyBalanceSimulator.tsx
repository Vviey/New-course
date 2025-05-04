import { useState } from 'react';
import { motion } from 'framer-motion';

interface PrivacyBalanceSimulatorProps {
  onComplete: () => void;
}

export function PrivacyBalanceSimulator({ onComplete }: PrivacyBalanceSimulatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [privacyScore, setPrivacyScore] = useState(50);
  const [transactionPrivacy, setTransactionPrivacy] = useState(50);
  const [identityPrivacy, setIdentityPrivacy] = useState(50);
  const [metadataPrivacy, setMetadataPrivacy] = useState(50);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  const handleAnswerSelection = (questionId: string, answer: string) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  };

  const steps = [
    {
      title: "Understanding Financial Privacy",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Financial privacy is your ability to conduct economic activities without unwanted monitoring, tracking, or interference. 
            It's not about hiding illegal activities, but about maintaining autonomy and dignity in your economic life.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <h3 className="font-semibold text-amber-800 mb-2">Why Financial Privacy Matters</h3>
            <ul className="list-disc ml-5 space-y-1 text-amber-700">
              <li>Privacy as a fundamental human right and dignity</li>
              <li>Protection from commercial exploitation and targeted advertising</li>
              <li>Safety from criminals who might target visible wealth</li>
              <li>Freedom from discrimination based on spending choices</li>
              <li>Autonomy from control and coercion by governments or corporations</li>
              <li>Protection for vulnerable populations and political dissidents</li>
            </ul>
          </div>
          
          <p className="text-gray-700 mt-2">
            Throughout history, financial privacy has been part of many cultures. In traditional African societies, wealth was often kept
            discretely, with only certain displays at specific ceremonial times. The amount of cattle, grain stores, or gold a family 
            possessed was considered private information, shared selectively within trusted community circles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Privacy ≠ Secrecy</h3>
              <p className="text-sm text-gray-600">
                Privacy doesn't mean complete secrecy or anonymity. It means having control over who can access your financial information
                and when. Just as we have curtains on windows but aren't hiding anything illegal, financial privacy is about appropriate boundaries.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Privacy vs. Transparency</h3>
              <p className="text-sm text-gray-600">
                Good financial systems balance privacy for individuals with appropriate transparency for public institutions. Personal finances 
                deserve privacy, while government spending and corporate finances often require transparency.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Three Dimensions of Financial Privacy",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            Financial privacy has three main components that work together to protect your economic sovereignty.
            Understanding these elements helps you evaluate different payment systems.
          </p>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 mt-4">
            <h3 className="font-semibold text-gray-800 mb-4">1. Transaction Privacy</h3>
            <p className="text-gray-700 mb-3">
              This refers to how much information about your transactions (amounts, timing, frequency) is visible to others.
            </p>
            
            <div className="mb-4">
              <label htmlFor="transaction-privacy" className="block text-sm font-medium text-gray-700 mb-1">
                How important is transaction privacy to you?
              </label>
              <input
                type="range"
                id="transaction-privacy"
                min="0"
                max="100"
                value={transactionPrivacy}
                onChange={(e) => setTransactionPrivacy(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Less Important</span>
                <span>More Important</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-600">
                {transactionPrivacy < 30 && "You value transparency in transactions. You may be comfortable with open financial systems where transaction amounts and frequencies are visible."}
                {transactionPrivacy >= 30 && transactionPrivacy < 70 && "You prefer a balanced approach where some transaction details may be known to select parties, but not publicly visible to everyone."}
                {transactionPrivacy >= 70 && "You highly value transaction privacy. You prefer systems where the amount and frequency of your payments remain confidential between you and the recipient."}
              </p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 mt-4">
            <h3 className="font-semibold text-gray-800 mb-4">2. Identity Privacy</h3>
            <p className="text-gray-700 mb-3">
              This concerns whether your personal identity is linked to your financial activities, or if you can transact pseudonymously.
            </p>
            
            <div className="mb-4">
              <label htmlFor="identity-privacy" className="block text-sm font-medium text-gray-700 mb-1">
                How important is identity privacy to you?
              </label>
              <input
                type="range"
                id="identity-privacy"
                min="0"
                max="100"
                value={identityPrivacy}
                onChange={(e) => setIdentityPrivacy(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Less Important</span>
                <span>More Important</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-600">
                {identityPrivacy < 30 && "You're comfortable with your identity being linked to your transactions. You may prefer systems with strong KYC (Know Your Customer) verification."}
                {identityPrivacy >= 30 && identityPrivacy < 70 && "You prefer contextual identity, where you can choose when to reveal your identity based on the situation and level of trust required."}
                {identityPrivacy >= 70 && "You highly value identity privacy. You prefer systems that allow pseudonymous transactions where your personal identity isn't automatically linked to every payment."}
              </p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 mt-4">
            <h3 className="font-semibold text-gray-800 mb-4">3. Metadata Privacy</h3>
            <p className="text-gray-700 mb-3">
              This relates to the contextual information around transactions: location, device used, relationship to other transactions, timing patterns, etc.
            </p>
            
            <div className="mb-4">
              <label htmlFor="metadata-privacy" className="block text-sm font-medium text-gray-700 mb-1">
                How important is metadata privacy to you?
              </label>
              <input
                type="range"
                id="metadata-privacy"
                min="0"
                max="100"
                value={metadataPrivacy}
                onChange={(e) => setMetadataPrivacy(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Less Important</span>
                <span>More Important</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-600">
                {metadataPrivacy < 30 && "You're less concerned about contextual data around your transactions being collected. You may prioritize convenience over protecting metadata."}
                {metadataPrivacy >= 30 && metadataPrivacy < 70 && "You have moderate concerns about metadata collection and prefer some protections against excessive tracking of your payment contexts."}
                {metadataPrivacy >= 70 && "You highly value metadata privacy. You're concerned about how patterns in your transactions can reveal sensitive information about your life, habits, and relationships."}
              </p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6">
            <h3 className="font-semibold text-amber-800 mb-2">Your Privacy Profile</h3>
            <p className="text-amber-700 mb-4">
              Based on your preferences, your overall financial privacy importance score is:
            </p>
            
            <div className="w-full bg-white rounded-full h-4 mb-4 shadow-inner">
              <div 
                className="bg-amber-500 h-4 rounded-full transition-all duration-300" 
                style={{ width: `${(transactionPrivacy + identityPrivacy + metadataPrivacy) / 3}%` }}
              ></div>
            </div>
            
            <p className="text-amber-700">
              {(transactionPrivacy + identityPrivacy + metadataPrivacy) / 3 < 30 && "You tend to prioritize convenience, features, and transparency over privacy in financial systems."}
              {(transactionPrivacy + identityPrivacy + metadataPrivacy) / 3 >= 30 && (transactionPrivacy + identityPrivacy + metadataPrivacy) / 3 < 70 && "You value a balanced approach to financial privacy, with contextual protections depending on the situation."}
              {(transactionPrivacy + identityPrivacy + metadataPrivacy) / 3 >= 70 && "You highly value financial privacy across multiple dimensions and likely prefer systems with strong privacy guarantees."}
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Privacy vs. Surveillance - Case Study",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Case Study: Traditional Banking vs. Mobile Money in Africa</h3>
            
            <p className="text-gray-700 mb-4">
              Consider the privacy implications of these two financial systems widely used across Africa:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Traditional Banking</h4>
                <ul className="list-disc ml-5 space-y-1 text-blue-700 text-sm">
                  <li>Requires extensive ID verification and documentation</li>
                  <li>Transactions tracked and stored in centralized database</li>
                  <li>Banks can see all transaction details and balances</li>
                  <li>Government can access records with proper authority</li>
                  <li>Limited geographic tracking unless using ATMs/branches</li>
                  <li>Often inaccessible to rural or low-income populations</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Mobile Money (M-Pesa, etc.)</h4>
                <ul className="list-disc ml-5 space-y-1 text-green-700 text-sm">
                  <li>Tied to SIM card/phone number with simpler ID requirements</li>
                  <li>All transactions tracked in telecom provider database</li>
                  <li>Precise location data tracked through mobile network</li>
                  <li>Transaction patterns easily analyzed for behavioral insights</li>
                  <li>Government may have easier access to records</li>
                  <li>Widely accessible even in rural areas with minimal infrastructure</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-700 mb-3">Which system offers better privacy protection overall?</p>
              
              <div className="space-y-2">
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="privacy-comparison" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => handleAnswerSelection('privacy-comparison', 'traditional')}
                    checked={userAnswers['privacy-comparison'] === 'traditional'}
                  />
                  <span className="ml-2 text-gray-700">Traditional banking offers better privacy</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="privacy-comparison" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => handleAnswerSelection('privacy-comparison', 'mobile')}
                    checked={userAnswers['privacy-comparison'] === 'mobile'}
                  />
                  <span className="ml-2 text-gray-700">Mobile money offers better privacy</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="privacy-comparison" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => handleAnswerSelection('privacy-comparison', 'equal')}
                    checked={userAnswers['privacy-comparison'] === 'equal'}
                  />
                  <span className="ml-2 text-gray-700">They offer roughly equal privacy, just in different ways</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="privacy-comparison" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => handleAnswerSelection('privacy-comparison', 'neither')}
                    checked={userAnswers['privacy-comparison'] === 'neither'}
                  />
                  <span className="ml-2 text-gray-700">Neither offers strong privacy protection</span>
                </label>
              </div>
            </div>
            
            {userAnswers['privacy-comparison'] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="bg-amber-50 p-3 rounded-lg mt-4"
              >
                <p className="text-amber-700">
                  {userAnswers['privacy-comparison'] === 'neither' ? (
                    <span>That's right! Neither system offers strong privacy protection. Both systems track and store all transaction data, though they differ in what metadata they collect. Traditional banking may have more formal processes for government access, while mobile money systems collect more location data and behavioral patterns.</span>
                  ) : (
                    <span>While both systems have different privacy characteristics, neither offers strong comprehensive privacy protection. Both track and store all transactions, though they differ in their metadata collection and accessibility.</span>
                  )}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      )
    },
    {
      title: "Why Privacy Matters in Africa",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            Financial privacy has particular importance in many African contexts, where financial surveillance
            can have serious consequences beyond just targeted advertising.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Political Protection</h3>
              <p className="text-sm text-gray-600">
                In countries with political instability or authoritarian governance, financial surveillance
                can be used to identify and target opposition supporters or activists. Privacy protects
                political freedoms by allowing people to support causes without fear of reprisal.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Personal Safety</h3>
              <p className="text-sm text-gray-600">
                In regions with higher crime rates or corruption, visible wealth or financial patterns
                can make individuals targets for theft, extortion, or kidnapping. Financial privacy
                helps protect physical safety and security.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Family Financial Management</h3>
              <p className="text-sm text-gray-600">
                Privacy allows individuals to maintain some financial autonomy within extended family systems
                that may have strong sharing obligations. This can be crucial for building savings and
                investing in future economic opportunities.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Protection from Discrimination</h3>
              <p className="text-sm text-gray-600">
                In societies with strong ethnic, religious, or tribal divisions, financial privacy prevents
                economic discrimination based on group identity or spending patterns that reveal personal beliefs
                or affiliations.
              </p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <h3 className="font-semibold text-amber-800 mb-2">The Innovation Opportunity</h3>
            <p className="text-amber-700">
              Africa has an opportunity to leapfrog traditional financial systems by adopting technologies
              that balance privacy with accessibility. New systems can protect individual privacy while
              still enabling appropriate transparency for institutions and preventing criminal activity.
            </p>
            <p className="text-amber-700 mt-2">
              Financial privacy technologies can help address the specific challenges faced by African communities
              while empowering economic development and inclusion.
            </p>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-700 mb-3">Which statement best reflects your view on financial privacy in Africa?</p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-privacy', 'trade')}
                  checked={userAnswers['africa-privacy'] === 'trade'}
                />
                <span className="ml-2 text-gray-700">Africa should prioritize financial inclusion over privacy</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-privacy', 'both')}
                  checked={userAnswers['africa-privacy'] === 'both'}
                />
                <span className="ml-2 text-gray-700">Africa needs both strong privacy and wide accessibility in financial systems</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-privacy', 'privacy')}
                  checked={userAnswers['africa-privacy'] === 'privacy'}
                />
                <span className="ml-2 text-gray-700">Privacy should be prioritized above expanding financial inclusion</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="africa-privacy" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('africa-privacy', 'context')}
                  checked={userAnswers['africa-privacy'] === 'context'}
                />
                <span className="ml-2 text-gray-700">The right approach varies by country and context within Africa</span>
              </label>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Balancing Privacy and Transparency",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            The best financial systems balance privacy and transparency based on context and power relationships.
            Individual citizens generally deserve privacy, while institutions and governments often require transparency.
          </p>
          
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-4">Adjust the privacy balance you think is appropriate:</h3>
            
            <div className="space-y-8">
              <div>
                <p className="text-gray-700 mb-2">For individual citizens' personal finances:</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={privacyScore}
                  onChange={(e) => setPrivacyScore(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Full Transparency</span>
                  <span>Full Privacy</span>
                </div>
                
                <div className="bg-gray-50 p-3 rounded mt-2">
                  <p className="text-sm text-gray-600">
                    {privacyScore < 30 && "You favor a highly transparent system where most individual financial activities are visible. This approach prioritizes preventing crime and ensuring compliance, but may sacrifice personal autonomy and safety."}
                    {privacyScore >= 30 && privacyScore < 70 && "You support a balanced approach where individuals have meaningful privacy for most transactions, but with some transparency requirements for specific situations like large transactions or tax reporting."}
                    {privacyScore >= 70 && "You strongly value individual financial privacy. This approach prioritizes personal freedom and safety, while still acknowledging the need for some transparency in specific, limited contexts."}
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-3">Best Practices for Privacy & Transparency</h3>
                
                <ul className="list-disc ml-5 space-y-2 text-amber-700">
                  <li><strong>Proportional Privacy:</strong> Greater transparency for those with more power and responsibility. Individual citizens deserve strong privacy; large institutions deserve less.</li>
                  <li><strong>Contextual Disclosure:</strong> Different contexts require different privacy levels. Tax authorities may need some information that merchants or other individuals don't.</li>
                  <li><strong>Data Minimization:</strong> Only collect and share the minimum data necessary for each specific purpose rather than building comprehensive surveillance systems.</li>
                  <li><strong>User Control:</strong> Give individuals control over their financial information whenever possible, with informed consent for any data sharing.</li>
                  <li><strong>Accountability Without Surveillance:</strong> Build systems that can verify compliance without requiring comprehensive monitoring of all activity.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <h3 className="font-semibold text-blue-800 mb-2">Looking Ahead</h3>
            <p className="text-blue-700">
              In the next missions, we'll explore how Bitcoin and other cryptocurrencies approach the privacy-transparency balance,
              and learn about different technical approaches to financial privacy. You'll discover how these technologies can 
              address the specific needs of African communities while supporting both individual freedom and appropriate transparency.
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