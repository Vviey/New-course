import { useState } from 'react';
import { motion } from 'framer-motion';

interface CBDCSimulatorProps {
  onComplete: () => void;
}

export function CBDCSimulator({ onComplete }: CBDCSimulatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [designChoices, setDesignChoices] = useState<string[]>([]);

  const handleAnswerSelection = (questionId: string, answer: string) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  };

  const toggleDesignChoice = (choice: string) => {
    if (designChoices.includes(choice)) {
      setDesignChoices(designChoices.filter(c => c !== choice));
    } else {
      setDesignChoices([...designChoices, choice]);
    }
  };

  const steps = [
    {
      title: "Understanding CBDCs",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            A Central Bank Digital Currency (CBDC) is a digital form of a country's official currency, issued and regulated 
            by the central bank. Unlike cryptocurrency, a CBDC is centralized and under government control.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <h3 className="font-semibold text-amber-800 mb-2">Key Characteristics of CBDCs</h3>
            <ul className="list-disc ml-5 space-y-1 text-amber-700">
              <li>Digital version of national currency (e.g., digital naira, e-cedi, e-shilling)</li>
              <li>Issued and controlled by central banks, not private companies</li>
              <li>Uses digital ledger technology, possibly blockchain</li>
              <li>Can operate both with internet (online) and without (offline)</li>
              <li>Designed to complement, not replace, physical cash</li>
              <li>Programmable money with potential for automated features</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">CBDC vs. Cash</h3>
              <p className="text-sm text-gray-600">
                Unlike physical cash which offers anonymity and doesn't require infrastructure to use, 
                CBDCs create digital records of transactions. However, they can be designed with varying 
                levels of privacy and can potentially work offline like cash.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">CBDC vs. Mobile Money</h3>
              <p className="text-sm text-gray-600">
                While mobile money services like M-Pesa are operated by private companies and typically
                require bank deposits to back customer balances, CBDCs are direct liabilities of the central
                bank - they are the actual currency, not a representation of it.
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-4">
            CBDCs have the potential to transform financial systems by increasing financial inclusion,
            reducing the costs of cash management, enabling faster payments, and giving central banks
            new tools for implementing monetary policy.
          </p>
        </div>
      )
    },
    {
      title: "CBDC Development in Africa",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Several African nations are exploring or actively developing CBDCs to address specific challenges
            in their financial systems. Here are some notable examples:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Nigeria's eNaira</h3>
              <p className="text-sm text-green-700 mb-2">
                Launched in October 2021, the eNaira was one of Africa's first CBDCs.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-green-700">
                <li>Aims to increase financial inclusion for unbanked populations</li>
                <li>Designed to complement the physical Naira, not replace it</li>
                <li>Uses a two-tier system where the central bank distributes to financial institutions</li>
                <li>Offers lower transaction fees than traditional banking</li>
                <li>Features a digital wallet accessible via smartphone app</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Ghana's e-Cedi</h3>
              <p className="text-sm text-blue-700 mb-2">
                Ghana is testing its digital currency as part of a broader digitalization strategy.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-blue-700">
                <li>Being tested in both online and offline environments</li>
                <li>Designed to work on feature phones without internet through USSD technology</li>
                <li>Focus on serving rural areas with limited connectivity</li>
                <li>Part of Ghana's Digital Financial Services Policy</li>
                <li>Aims to reduce cash dependency and lower currency management costs</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">South Africa's Project Khokha</h3>
              <p className="text-sm text-amber-700 mb-2">
                South Africa's central bank is exploring wholesale CBDC for interbank settlements.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-amber-700">
                <li>Focuses on improving the efficiency of interbank payments</li>
                <li>Uses distributed ledger technology for transaction processing</li>
                <li>Demonstrated successful real-time gross settlement system</li>
                <li>Achieved transaction privacy between participants</li>
                <li>Showed potential for reducing settlement risk</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">East African Community</h3>
              <p className="text-sm text-purple-700 mb-2">
                Countries including Kenya, Tanzania, and Rwanda are exploring CBDC development.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-purple-700">
                <li>Kenya has been studying CBDC feasibility since 2021</li>
                <li>Tanzania announced CBDC research to complement mobile money</li>
                <li>Goals include reducing cross-border payment costs</li>
                <li>Potential for regional interoperability between nations</li>
                <li>Building on strong existing mobile money adoption</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 mb-2">
              Which African country was the first to officially launch a CBDC?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="first-cbdc" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500" 
                  onChange={() => handleAnswerSelection('first-cbdc', 'kenya')}
                  checked={userAnswers['first-cbdc'] === 'kenya'}
                />
                <span className="ml-2 text-gray-700">Kenya</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="first-cbdc" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('first-cbdc', 'nigeria')}
                  checked={userAnswers['first-cbdc'] === 'nigeria'} 
                />
                <span className="ml-2 text-gray-700">Nigeria</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="first-cbdc" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('first-cbdc', 'ghana')}
                  checked={userAnswers['first-cbdc'] === 'ghana'} 
                />
                <span className="ml-2 text-gray-700">Ghana</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="first-cbdc" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('first-cbdc', 'southafrica')}
                  checked={userAnswers['first-cbdc'] === 'southafrica'} 
                />
                <span className="ml-2 text-gray-700">South Africa</span>
              </label>
            </div>
          </div>
          
          {userAnswers['first-cbdc'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg mt-4 ${userAnswers['first-cbdc'] === 'nigeria' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {userAnswers['first-cbdc'] === 'nigeria' ? (
                <p>Correct! Nigeria was the first African country to officially launch a CBDC with the eNaira in October 2021. It was designed to increase financial inclusion and complement the physical Naira.</p>
              ) : (
                <p>Not quite. Nigeria was the first African country to officially launch a CBDC with the eNaira in October 2021, ahead of other nations on the continent.</p>
              )}
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Potential Benefits of CBDCs",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            CBDCs offer several potential benefits that could transform financial systems in Africa:
          </p>
          
          <div className="space-y-6 mt-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Financial Inclusion</h3>
              <p className="text-gray-600">
                CBDCs could provide basic financial services to the approximately 57% of African adults who remain unbanked. 
                With simplified onboarding and the potential for offline functionality, CBDCs could reach populations in rural
                areas without requiring traditional bank accounts or consistent internet access.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Reduced Transaction Costs</h3>
              <p className="text-gray-600">
                By creating a direct payment channel that doesn't require commercial bank intermediaries, CBDCs could
                significantly reduce the cost of sending, receiving, and processing payments. This is especially important
                for remittances, which currently face high fees averaging 8.9% in sub-Saharan Africa.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Enhanced Cross-Border Payments</h3>
              <p className="text-gray-600">
                If designed with interoperability in mind, CBDCs could streamline cross-border payments between African
                nations, supporting regional economic integration. This could reduce the current friction, delays, and costs
                associated with sending money across African borders.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Reduced Cost of Cash</h3>
              <p className="text-gray-600">
                Physical cash is expensive to print, distribute, secure, and replace when worn. CBDCs could reduce these
                costs for African central banks, freeing up resources for other economic development priorities. The Bank of Ghana
                estimates it could save significant amounts on printing and cash management through e-Cedi adoption.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200">
              <h3 className="font-semibold text-gray-800 mb-2">Enhanced Monetary Policy</h3>
              <p className="text-gray-600">
                CBDCs provide central banks with new tools for implementing monetary policy. They could allow for more
                direct transmission of interest rate changes, enable targeted stimulus distributions, and provide real-time
                economic data to inform policy decisions.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-700 mb-2">
              Which of these benefits do you think would have the most significant positive impact on African economies?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="top-benefit" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('top-benefit', 'inclusion')}
                  checked={userAnswers['top-benefit'] === 'inclusion'}
                />
                <span className="ml-2 text-gray-700">Financial Inclusion</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="top-benefit" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('top-benefit', 'costs')}
                  checked={userAnswers['top-benefit'] === 'costs'}
                />
                <span className="ml-2 text-gray-700">Reduced Transaction Costs</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="top-benefit" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('top-benefit', 'crossborder')}
                  checked={userAnswers['top-benefit'] === 'crossborder'}
                />
                <span className="ml-2 text-gray-700">Enhanced Cross-Border Payments</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="top-benefit" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('top-benefit', 'cashcost')}
                  checked={userAnswers['top-benefit'] === 'cashcost'}
                />
                <span className="ml-2 text-gray-700">Reduced Cost of Cash</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="top-benefit" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('top-benefit', 'monetary')}
                  checked={userAnswers['top-benefit'] === 'monetary'}
                />
                <span className="ml-2 text-gray-700">Enhanced Monetary Policy</span>
              </label>
            </div>
          </div>
          
          {userAnswers['top-benefit'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-amber-50 p-3 rounded-lg mt-4"
            >
              <p className="text-amber-700">
                {userAnswers['top-benefit'] === 'inclusion' && "Financial inclusion is indeed crucial in Africa where large populations remain unbanked. CBDCs could provide basic banking services to millions, enabling participation in the formal economy."}
                {userAnswers['top-benefit'] === 'costs' && "Transaction costs are a significant burden, especially for low-income populations. Reducing these costs could have a meaningful impact on daily economic activities and remittance flows."}
                {userAnswers['top-benefit'] === 'crossborder' && "Cross-border payments remain a challenge in Africa despite regional integration efforts. Streamlining these payments could boost intra-African trade and economic cooperation."}
                {userAnswers['top-benefit'] === 'cashcost' && "The cost of managing physical cash is substantial for many African economies. Reducing these costs could free up resources for other development priorities."}
                {userAnswers['top-benefit'] === 'monetary' && "Enhanced monetary policy tools could help African central banks better manage inflation, respond to economic shocks, and implement targeted economic interventions."}
              </p>
              <p className="text-amber-700 mt-2">
                All these benefits have significant potential, and their importance may vary by country depending on specific economic conditions and policy priorities.
              </p>
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Privacy and Surveillance Concerns",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            While CBDCs offer potential benefits, they also raise significant concerns around privacy, surveillance, 
            and financial autonomy - especially given their centralized nature.
          </p>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
            <h3 className="font-semibold text-red-800 mb-2">Key Concerns with CBDCs</h3>
            <ul className="list-disc ml-5 space-y-1 text-red-700">
              <li><strong>Complete Financial Surveillance</strong>: CBDCs could track every transaction by default, creating unprecedented visibility into citizens' financial lives</li>
              <li><strong>Political Control</strong>: Governments could freeze funds, block specific purchases, or restrict access based on social or political criteria</li>
              <li><strong>Privacy Erosion</strong>: Without robust privacy protections, CBDCs could eliminate the privacy benefits that physical cash provides</li>
              <li><strong>Financial Exclusion</strong>: Digital-only currency could exclude those without technology access or skills</li>
              <li><strong>Centralized Points of Failure</strong>: Technical failures or cyberattacks could disrupt entire national payment systems</li>
              <li><strong>Programmable Restrictions</strong>: CBDCs could include features that limit how, when, or where money can be spent</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Real-World Example: China's Digital Yuan</h3>
            <p className="text-gray-600">
              China's Digital Yuan (e-CNY) illustrates some of these concerns. The system gives the Chinese government visibility 
              into all transactions and includes features like:
            </p>
            <ul className="list-disc ml-5 space-y-1 text-gray-600 mt-2">
              <li>Programmable expiration dates that force spending by certain deadlines</li>
              <li>Restrictions on what categories of items can be purchased with certain funds</li>
              <li>Ability to track and monitor citizens' complete financial activities</li>
              <li>Integration with social monitoring systems</li>
            </ul>
            <p className="text-gray-600 mt-2">
              While the Digital Yuan has legitimate use cases like reducing corruption and improving economic management,
              it also demonstrates how CBDCs can become powerful tools for surveillance and control.
            </p>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 mb-3">
              Which statement best reflects your view on CBDC privacy concerns?
            </p>
            
            <div className="space-y-2">
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-view" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-view', 'noworry')}
                  checked={userAnswers['privacy-view'] === 'noworry'}
                />
                <span className="ml-2 text-gray-700">Privacy concerns are exaggerated; the benefits outweigh the risks</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-view" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-view', 'designprivacy')}
                  checked={userAnswers['privacy-view'] === 'designprivacy'}
                />
                <span className="ml-2 text-gray-700">CBDCs can be designed with strong privacy protections while maintaining their benefits</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-view" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-view', 'seriousconcern')}
                  checked={userAnswers['privacy-view'] === 'seriousconcern'}
                />
                <span className="ml-2 text-gray-700">Privacy and surveillance concerns are serious and may outweigh potential benefits</span>
              </label>
              
              <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="privacy-view" 
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                  onChange={() => handleAnswerSelection('privacy-view', 'depends')}
                  checked={userAnswers['privacy-view'] === 'depends'}
                />
                <span className="ml-2 text-gray-700">It depends on the specific governance and oversight mechanisms in each country</span>
              </label>
            </div>
          </div>
          
          {userAnswers['privacy-view'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50 p-3 rounded-lg mt-4"
            >
              <p className="text-blue-700">
                {userAnswers['privacy-view'] === 'noworry' && "While benefits exist, most CBDC experts acknowledge that privacy considerations are a genuine concern that need to be addressed in CBDC design."}
                {userAnswers['privacy-view'] === 'designprivacy' && "This is the approach many central banks claim to be taking. The challenge is designing systems that technically enforce privacy while still meeting regulatory requirements."}
                {userAnswers['privacy-view'] === 'seriousconcern' && "Many privacy advocates take this position, arguing that the centralized nature of CBDCs inherently creates surveillance risks that are difficult to mitigate."}
                {userAnswers['privacy-view'] === 'depends' && "This nuanced view recognizes that implementation details and local governance substantially impact whether privacy protections will be robust or easily overridden."}
              </p>
              <p className="text-blue-700 mt-2">
                The privacy implications of CBDCs remain an active area of debate among economists, technologists, and policymakers. The balance struck between convenience, control, and privacy will likely vary significantly between countries.
              </p>
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "Design Your Own CBDC",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            If you were designing a CBDC for an African nation, what features would you prioritize?
            Select the options that you think would create the best balance of benefits and protections.
          </p>
          
          <div className="space-y-3 mt-4">
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${designChoices.includes('offline') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={designChoices.includes('offline')}
                onChange={() => toggleDesignChoice('offline')}
              />
              <div className="ml-3">
                <p className="font-medium">Offline Functionality</p>
                <p className="text-sm text-gray-600">
                  The ability to use the CBDC without an internet connection through methods like
                  secure bluetooth transfer, SMS, or stored-value cards.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${designChoices.includes('privacytiers') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={designChoices.includes('privacytiers')}
                onChange={() => toggleDesignChoice('privacytiers')}
              />
              <div className="ml-3">
                <p className="font-medium">Tiered Privacy System</p>
                <p className="text-sm text-gray-600">
                  Different levels of KYC (Know Your Customer) requirements and privacy for different
                  transaction amounts, with smaller amounts requiring minimal identification.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${designChoices.includes('limits') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={designChoices.includes('limits')}
                onChange={() => toggleDesignChoice('limits')}
              />
              <div className="ml-3">
                <p className="font-medium">Transaction Limits</p>
                <p className="text-sm text-gray-600">
                  Maximum holdings and transaction limits to prevent money laundering while allowing normal everyday use
                  for the majority of citizens.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${designChoices.includes('interop') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={designChoices.includes('interop')}
                onChange={() => toggleDesignChoice('interop')}
              />
              <div className="ml-3">
                <p className="font-medium">Regional Interoperability</p>
                <p className="text-sm text-gray-600">
                  The ability to easily send and receive funds across borders with other African CBDCs
                  and payment systems with minimal friction.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${designChoices.includes('cashparity') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={designChoices.includes('cashparity')}
                onChange={() => toggleDesignChoice('cashparity')}
              />
              <div className="ml-3">
                <p className="font-medium">Cash-Like Privacy for Small Transactions</p>
                <p className="text-sm text-gray-600">
                  Technical design that provides cash-equivalent privacy for small day-to-day transactions
                  while still allowing for AML/KYC compliance for larger amounts.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${designChoices.includes('programming') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={designChoices.includes('programming')}
                onChange={() => toggleDesignChoice('programming')}
              />
              <div className="ml-3">
                <p className="font-medium">Programmable Money Features</p>
                <p className="text-sm text-gray-600">
                  The ability to program money for specific uses (e.g., agricultural subsidies that can only be
                  used for farming inputs) or to automate payments.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${designChoices.includes('oversight') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={designChoices.includes('oversight')}
                onChange={() => toggleDesignChoice('oversight')}
              />
              <div className="ml-3">
                <p className="font-medium">Independent Privacy Oversight</p>
                <p className="text-sm text-gray-600">
                  Independent board with civil society representation to oversee privacy protections
                  and approve any surveillance or restriction measures.
                </p>
              </div>
            </label>
            
            <label className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all ${designChoices.includes('featureparity') ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200 hover:border-amber-200'}`}>
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                checked={designChoices.includes('featureparity')}
                onChange={() => toggleDesignChoice('featureparity')}
              />
              <div className="ml-3">
                <p className="font-medium">Feature Phone Compatibility</p>
                <p className="text-sm text-gray-600">
                  Accessible via basic feature phones using USSD or SMS, not requiring smartphones
                  or continuous internet access.
                </p>
              </div>
            </label>
          </div>
          
          {designChoices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6"
            >
              <h3 className="font-semibold text-amber-800 mb-2">Your CBDC Design Priorities</h3>
              <p className="text-amber-700 mb-4">
                You've selected {designChoices.length} features for your CBDC design:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-amber-700">
                {designChoices.includes('offline') && <li>Offline functionality for areas with limited connectivity</li>}
                {designChoices.includes('privacytiers') && <li>Tiered privacy system based on transaction amounts</li>}
                {designChoices.includes('limits') && <li>Transaction limits to balance convenience and security</li>}
                {designChoices.includes('interop') && <li>Regional interoperability with other payment systems</li>}
                {designChoices.includes('cashparity') && <li>Cash-equivalent privacy for everyday transactions</li>}
                {designChoices.includes('programming') && <li>Programmable money features for specific use cases</li>}
                {designChoices.includes('oversight') && <li>Independent privacy oversight mechanisms</li>}
                {designChoices.includes('featureparity') && <li>Basic phone compatibility for wider accessibility</li>}
              </ul>
              
              <p className="text-amber-700 mt-4">
                {designChoices.includes('cashparity') && designChoices.includes('oversight') 
                  ? "Your design prioritizes strong privacy protections with oversight, balancing surveillance concerns with functional benefits."
                  : designChoices.includes('offline') && designChoices.includes('featureparity')
                    ? "Your design emphasizes accessibility for all citizens regardless of technological resources or connectivity."
                    : designChoices.includes('programming') && designChoices.includes('interop')
                      ? "Your design focuses on advanced functionality and regional integration to maximize economic benefits."
                      : "Your design reflects a balanced approach to CBDC implementation, considering both benefits and potential concerns."
                }
              </p>
            </motion.div>
          )}
        </div>
      )
    },
    {
      title: "CBDCs vs. Bitcoin: Understanding the Differences",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            To conclude our exploration of CBDCs, let's compare them with Bitcoin to understand the fundamental
            differences between centralized and decentralized digital currencies.
          </p>
          
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CBDCs</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bitcoin</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Issuer</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Central bank (government)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Decentralized network (no central issuer)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Supply Control</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Can be created/destroyed at will by central authority</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fixed supply (21 million), predictable issuance</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Privacy</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Varies by design; potentially full surveillance</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pseudonymous by default with varying privacy options</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Censorship Resistance</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Low - transactions can be blocked, accounts frozen</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">High - extremely difficult to block legitimate transactions</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Transaction Validation</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Centralized validation by authorized participants</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Decentralized consensus by network participants</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Monetary Policy</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Set by central bank, can change over time</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fixed by code, requires broad consensus to change</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Programmability</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Can include restrictions on how money is used</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Programmable but without centralized restrictions</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">CBDC Advantages</h3>
              <ul className="list-disc ml-5 space-y-1 text-blue-700 text-sm">
                <li>Backed by government and central bank</li>
                <li>Likely to have greater mainstream adoption</li>
                <li>Could integrate with existing financial infrastructure</li>
                <li>Potentially lower transaction costs than current systems</li>
                <li>Stable value (same as national currency)</li>
                <li>Could work offline with appropriate design</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">Bitcoin Advantages</h3>
              <ul className="list-disc ml-5 space-y-1 text-amber-700 text-sm">
                <li>Not controlled by any single government or entity</li>
                <li>Cannot be arbitrarily created (protection against inflation)</li>
                <li>Cannot be easily censored or confiscated</li>
                <li>Greater resistance to surveillance and control</li>
                <li>Borderless by design, works across countries</li>
                <li>Open protocol that anyone can build on</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Complementary Systems</h3>
            <p className="text-gray-600">
              While often presented as competitors, CBDCs and Bitcoin can serve complementary roles in a financial ecosystem:
            </p>
            <ul className="list-disc ml-5 space-y-1 text-gray-600 mt-2">
              <li>CBDCs can improve efficiency in everyday transactions and government payments</li>
              <li>Bitcoin can provide an alternative store of value and censorship-resistant payment option</li>
              <li>The competition between systems may encourage better privacy protections in both</li>
              <li>Citizens benefit from having choices in how they save and transact</li>
            </ul>
            <p className="text-gray-600 mt-3">
              The ideal approach may be one where citizens have access to both systems, providing options
              that can be used according to specific needs and preferences.
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