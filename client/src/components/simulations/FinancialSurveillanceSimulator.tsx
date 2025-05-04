import { useState } from 'react';
import { motion } from 'framer-motion';

interface FinancialSurveillanceSimulatorProps {
  onComplete: () => void;
}

export function FinancialSurveillanceSimulator({ onComplete }: FinancialSurveillanceSimulatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const steps = [
    {
      title: "Introduction to Financial Surveillance",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Financial surveillance is the systematic monitoring of people's financial activities and transactions.
            It's a global reality that impacts billions of people daily, sometimes without their knowledge.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">Government Surveillance</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Tax compliance monitoring</li>
                <li>Anti-money laundering controls</li>
                <li>Financial intelligence units</li>
                <li>Transaction reporting requirements</li>
                <li>Cross-border financial tracking</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Corporate Surveillance</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Payment processors tracking purchases</li>
                <li>Banks analyzing spending patterns</li>
                <li>Credit scoring and financial profiling</li>
                <li>Advertising targeting based on purchases</li>
                <li>Data brokers selling financial histories</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700 mt-4">
            While some financial surveillance serves legitimate purposes like preventing financial crimes and terrorism financing,
            the systems also create risks for privacy, freedom, and financial autonomy.
          </p>
        </div>
      )
    },
    {
      title: "The M-Pesa Example in Kenya",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            M-Pesa is a mobile money service launched in 2007 in Kenya that revolutionized how people transact.
            It allows users to deposit, withdraw, and transfer money using their mobile phones.
          </p>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Benefits of M-Pesa</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Financial inclusion for previously unbanked populations</li>
              <li>Reduced need to carry cash, increasing safety</li>
              <li>Efficient money transfers, especially for rural areas</li>
              <li>Economic growth through easier business transactions</li>
              <li>Reduced corruption through digital record-keeping</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
            <h3 className="font-semibold text-red-800 mb-2">Surveillance Aspects</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>All transactions are tracked and stored permanently</li>
              <li>Government has potential access to complete financial histories</li>
              <li>Patterns of life revealed through transaction data</li>
              <li>Location tracking through transaction points</li>
              <li>Risk of political or social targeting using financial data</li>
            </ul>
          </div>
          
          <p className="text-gray-700 mt-4">
            M-Pesa demonstrates both the benefits of digital financial infrastructure and its inherent surveillance capabilities.
            The system creates a comprehensive record of users' financial lives that can be used for both beneficial purposes
            and potentially problematic surveillance.
          </p>
        </div>
      )
    },
    {
      title: "Real-World Surveillance Examples",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            Select one of the following real-world surveillance examples to learn more about how financial monitoring
            affects people's lives in different contexts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedExample === 'protesters' ? 'bg-blue-50 border-blue-300 shadow-md' : 'bg-white border-gray-200 hover:border-blue-300'}`}
              onClick={() => setSelectedExample('protesters')}
            >
              <h3 className="font-medium text-lg mb-1">Freezing Protesters' Accounts</h3>
              <p className="text-sm text-gray-600">
                In 2022, the Canadian government froze bank accounts of protesters without court orders,
                demonstrating how financial surveillance enables political control.
              </p>
            </div>
            
            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedExample === 'china' ? 'bg-blue-50 border-blue-300 shadow-md' : 'bg-white border-gray-200 hover:border-blue-300'}`}
              onClick={() => setSelectedExample('china')}
            >
              <h3 className="font-medium text-lg mb-1">China's Social Credit System</h3>
              <p className="text-sm text-gray-600">
                China integrates financial data with other surveillance to create social scores that determine
                access to services and opportunities.
              </p>
            </div>
            
            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedExample === 'data' ? 'bg-blue-50 border-blue-300 shadow-md' : 'bg-white border-gray-200 hover:border-blue-300'}`}
              onClick={() => setSelectedExample('data')}
            >
              <h3 className="font-medium text-lg mb-1">Financial Data Marketplaces</h3>
              <p className="text-sm text-gray-600">
                Companies purchase and aggregate financial data to build detailed profiles used for
                marketing, lending decisions, and more.
              </p>
            </div>
            
            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedExample === 'africa' ? 'bg-blue-50 border-blue-300 shadow-md' : 'bg-white border-gray-200 hover:border-blue-300'}`}
              onClick={() => setSelectedExample('africa')}
            >
              <h3 className="font-medium text-lg mb-1">Mobile Money in Africa</h3>
              <p className="text-sm text-gray-600">
                Digital financial systems across Africa create detailed databases of citizens' spending,
                income, and social connections.
              </p>
            </div>
          </div>
          
          {selectedExample && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4"
            >
              {selectedExample === 'protesters' && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">Canadian Trucker Protest Bank Freezes</h3>
                  <p className="text-gray-700">
                    During the 2022 "Freedom Convoy" protests in Canada, the government invoked emergency powers to freeze bank accounts
                    of protesters and supporters without court orders. This action demonstrated how comprehensive financial surveillance
                    enables rapid financial control of targeted individuals.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Banks froze approximately 210 accounts holding about $8 million. Many people unrelated to unlawful activities
                    also had their accounts frozen simply based on their donations to the cause. The case highlighted how financial 
                    surveillance can be used as a political tool to suppress dissent.
                  </p>
                </>
              )}
              
              {selectedExample === 'china' && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">China's Comprehensive Financial Monitoring</h3>
                  <p className="text-gray-700">
                    China has developed one of the world's most comprehensive financial surveillance systems, combining data from
                    payment apps like WeChat Pay and Alipay with other surveillance systems. The government has direct access to 
                    transaction data and integrates it with its social credit scoring system.
                  </p>
                  <p className="text-gray-700 mt-2">
                    This system can determine if someone purchases "approved" products or makes donations to "correct" organizations,
                    with penalties for those with low social credit scores including travel restrictions, slower internet, restricted
                    access to education, and public shaming.
                  </p>
                </>
              )}
              
              {selectedExample === 'data' && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">The Financial Data Economy</h3>
                  <p className="text-gray-700">
                    Companies like Plaid, Yodlee, and Mint collect detailed financial data from millions of people. They track purchases,
                    account balances, spending patterns, and financial relationships. This data is then sold to other businesses for
                    marketing, credit decisions, and financial product development.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Many users don't realize the extent of data collection when they connect their bank accounts to apps. The financial
                    data market is worth billions and creates extremely detailed profiles of consumers that can reveal sensitive personal
                    information such as health conditions, relationship status, and political affiliations based on where money is spent.
                  </p>
                </>
              )}
              
              {selectedExample === 'africa' && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">Digital Finance Surveillance Across Africa</h3>
                  <p className="text-gray-700">
                    Systems like M-Pesa in Kenya, Wave in Senegal, and similar mobile money platforms across Africa have created
                    unprecedented financial records of citizens. In countries with authoritarian tendencies, this data can be
                    used to monitor and control populations.
                  </p>
                  <p className="text-gray-700 mt-2">
                    In several countries, governments have leveraged mobile money data to identify and target political opponents.
                    For example, in Uganda and Zimbabwe, authorities have monitored financial transactions of activists and opposition
                    figures. In Kenya, financial data has been used in political campaigns to identify and target specific demographic groups.
                  </p>
                </>
              )}
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "The Privacy-Surveillance Trade-Off",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Which benefits would make you comfortable with increased financial surveillance? Select all that apply:
          </p>
          
          <div className="space-y-3 mt-4">
            <label className="flex items-start p-3 border rounded-lg cursor-pointer bg-white border-gray-200 hover:border-amber-200 transition-all">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={choices.includes('crime')}
                onChange={() => {
                  if (choices.includes('crime')) {
                    setChoices(choices.filter(c => c !== 'crime'));
                  } else {
                    setChoices([...choices, 'crime']);
                  }
                }}
              />
              <div className="ml-3">
                <p className="font-medium">Reduced Financial Crime</p>
                <p className="text-sm text-gray-600">
                  Complete surveillance of all financial transactions would help authorities catch tax evaders, 
                  money launderers, and fraudsters more easily.
                </p>
              </div>
            </label>
            
            <label className="flex items-start p-3 border rounded-lg cursor-pointer bg-white border-gray-200 hover:border-amber-200 transition-all">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={choices.includes('terrorism')}
                onChange={() => {
                  if (choices.includes('terrorism')) {
                    setChoices(choices.filter(c => c !== 'terrorism'));
                  } else {
                    setChoices([...choices, 'terrorism']);
                  }
                }}
              />
              <div className="ml-3">
                <p className="font-medium">Terrorism Prevention</p>
                <p className="text-sm text-gray-600">
                  Monitoring financial flows helps identify and disrupt funding for terrorist organizations
                  before attacks can occur.
                </p>
              </div>
            </label>
            
            <label className="flex items-start p-3 border rounded-lg cursor-pointer bg-white border-gray-200 hover:border-amber-200 transition-all">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={choices.includes('credit')}
                onChange={() => {
                  if (choices.includes('credit')) {
                    setChoices(choices.filter(c => c !== 'credit'));
                  } else {
                    setChoices([...choices, 'credit']);
                  }
                }}
              />
              <div className="ml-3">
                <p className="font-medium">Better Credit Access</p>
                <p className="text-sm text-gray-600">
                  More detailed financial monitoring creates better credit scoring, potentially giving more
                  people access to loans and financial services.
                </p>
              </div>
            </label>
            
            <label className="flex items-start p-3 border rounded-lg cursor-pointer bg-white border-gray-200 hover:border-amber-200 transition-all">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={choices.includes('convenience')}
                onChange={() => {
                  if (choices.includes('convenience')) {
                    setChoices(choices.filter(c => c !== 'convenience'));
                  } else {
                    setChoices([...choices, 'convenience']);
                  }
                }}
              />
              <div className="ml-3">
                <p className="font-medium">Enhanced Convenience</p>
                <p className="text-sm text-gray-600">
                  Surveillance enables personalized financial services, automated tax filing, and seamless
                  payment experiences across platforms.
                </p>
              </div>
            </label>
            
            <label className="flex items-start p-3 border rounded-lg cursor-pointer bg-white border-gray-200 hover:border-amber-200 transition-all">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={choices.includes('stability')}
                onChange={() => {
                  if (choices.includes('stability')) {
                    setChoices(choices.filter(c => c !== 'stability'));
                  } else {
                    setChoices([...choices, 'stability']);
                  }
                }}
              />
              <div className="ml-3">
                <p className="font-medium">Economic Stability</p>
                <p className="text-sm text-gray-600">
                  Financial surveillance helps governments and central banks monitor economic trends and
                  implement better monetary policies.
                </p>
              </div>
            </label>
          </div>
          
          {choices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6"
            >
              <h3 className="font-semibold text-amber-800 mb-2">The Trade-Off Dilemma</h3>
              <p className="text-amber-700">
                You selected {choices.length} benefits. Each legitimate benefit of financial surveillance comes with privacy and
                freedom costs. The challenge is finding the right balance where we can achieve some benefits while preserving
                essential financial privacy.
              </p>
              <p className="text-amber-700 mt-2">
                The reality is that surveillance systems built for beneficial purposes can easily be repurposed for control,
                suppression of dissent, or discrimination. Once surveillance infrastructure is in place, it creates ongoing
                risks of mission creep and abuse.
              </p>
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Financial Freedom Quiz",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            Test your understanding of financial surveillance and its implications by answering these questions:
          </p>
          
          <div className="space-y-6 mt-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-3">Question 1: Which statement is true about financial surveillance?</h3>
              <div className="space-y-2">
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q1" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev - 1)} 
                  />
                  <span className="ml-2 text-gray-700">It only affects people involved in suspicious or criminal activities</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q1" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev - 1)} 
                  />
                  <span className="ml-2 text-gray-700">It's limited to wealthy individuals with complex financial portfolios</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q1" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev + 2)} 
                  />
                  <span className="ml-2 text-gray-700">It impacts virtually everyone with a bank account or digital payment methods</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q1" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev - 1)} 
                  />
                  <span className="ml-2 text-gray-700">It's primarily a theoretical concern with minimal real-world implementation</span>
                </label>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-3">Question 2: Which is NOT a common justification for financial surveillance?</h3>
              <div className="space-y-2">
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q2" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev - 1)} 
                  />
                  <span className="ml-2 text-gray-700">Fighting terrorism financing</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q2" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev - 1)} 
                  />
                  <span className="ml-2 text-gray-700">Preventing tax evasion</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q2" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev - 1)} 
                  />
                  <span className="ml-2 text-gray-700">Combating money laundering</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q2" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev + 2)} 
                  />
                  <span className="ml-2 text-gray-700">Ensuring complete financial privacy for citizens</span>
                </label>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-3">Question 3: What risk does financial surveillance create?</h3>
              <div className="space-y-2">
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q3" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev - 1)} 
                  />
                  <span className="ml-2 text-gray-700">Higher banking fees for consumers</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q3" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev + 2)} 
                  />
                  <span className="ml-2 text-gray-700">Financial censorship and control of political opponents</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q3" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev - 1)} 
                  />
                  <span className="ml-2 text-gray-700">Increased interest rates on loans</span>
                </label>
                
                <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="q3" 
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                    onChange={() => setScore(prev => prev - 1)} 
                  />
                  <span className="ml-2 text-gray-700">Slower transaction processing times</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Results & Conclusion",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-4">Your Understanding of Financial Surveillance</h3>
            
            <div className="flex items-center mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: `${(score/6)*100}%` }}></div>
              </div>
              <span className="text-amber-600 font-medium ml-4">{Math.max(0, score)}/6 points</span>
            </div>
            
            <p className="text-gray-700">
              {score <= 2 && "You're beginning to understand financial surveillance. Consider researching this topic further to better protect your financial privacy."}
              {score > 2 && score < 5 && "You have a good grasp of financial surveillance concepts and their implications for freedom and privacy."}
              {score >= 5 && "Excellent! You have a strong understanding of financial surveillance systems and their potential impacts on society."}
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-800 mb-2">Key Takeaways:</h3>
            <ul className="list-disc ml-5 space-y-2 text-amber-700">
              <li>Financial surveillance is pervasive in modern society and affects virtually everyone</li>
              <li>There are legitimate benefits to some forms of financial monitoring, but they come with significant privacy costs</li>
              <li>Once surveillance infrastructure exists, it can be repurposed for control, censorship, and discrimination</li>
              <li>Many surveillance systems were created with good intentions but experienced "mission creep" over time</li>
              <li>Preserving some financial privacy is essential for maintaining freedom in the digital age</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">What's Next?</h3>
            <p className="text-blue-700">
              In the next missions, we'll explore how Bitcoin and related technologies offer alternatives that 
              can preserve privacy while still enabling secure, efficient payments. You'll learn about the 
              balance between privacy and transparency, and how different economic systems approach this trade-off.
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                setCompleted(true);
                onComplete();
              }}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow hover:shadow-lg transition-all duration-200"
            >
              Complete Mission
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
          {currentStep < steps.length - 1 ? 'Next' : 'Complete'}
        </button>
      </div>
    </div>
  );
}