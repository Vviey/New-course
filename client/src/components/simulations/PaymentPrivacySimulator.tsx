import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, EyeOff, Eye, Shield, Database, User, Activity } from 'lucide-react';
import { citadelTheme } from '@/lib/realm-themes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  dataCollected: string[];
  entities: string[];
  privacyScore: number;
  scenario: string;
}

interface PaymentPrivacySimulatorProps {
  paymentOptions: PaymentOption[];
  onComplete?: () => void;
}

export function PaymentPrivacySimulator({ paymentOptions = [], onComplete }: PaymentPrivacySimulatorProps) {
  const [currentTab, setCurrentTab] = useState("comparison");
  const [selectedOption, setSelectedOption] = useState<PaymentOption | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [viewedPaymentOptions, setViewedPaymentOptions] = useState<string[]>([]);
  
  // Calculate progress toward completion
  const progress = Math.min(
    100, 
    Math.round((viewedPaymentOptions.length / paymentOptions.length) * 100)
  );
  
  // Handle payment option selection
  const handleOptionSelect = (option: PaymentOption) => {
    setSelectedOption(option);
    setCurrentTab("details");
    
    // Add to viewed options if not already viewed
    if (!viewedPaymentOptions.includes(option.id)) {
      setViewedPaymentOptions([...viewedPaymentOptions, option.id]);
    }
    
    // Check if all options have been viewed
    if (viewedPaymentOptions.length === paymentOptions.length - 1 && !viewedPaymentOptions.includes(option.id)) {
      setTimeout(() => {
        setIsComplete(true);
      }, 500);
    }
  };
  
  // Sort payment options by privacy score (lowest to highest)
  const sortedOptions = [...paymentOptions].sort((a, b) => a.privacyScore - b.privacyScore);
  
  // If the simulation is complete, show the completion screen
  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="text-center mb-8">
          <EyeOff className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Financial Surveillance Investigation Complete</h2>
          <p className="text-gray-600">
            You've analyzed the privacy implications of different payment methods and understood how financial surveillance works.
          </p>
        </div>
        
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Key Insights:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Electronic payment methods reveal extensive personal data to multiple entities.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Your financial history creates a detailed profile of your life, habits, and preferences.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Payment data is often shared with third parties beyond the immediate transaction participants.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Physical cash remains the most private traditional payment method but has limitations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Self-custodied Bitcoin offers a digital alternative with better privacy characteristics than traditional electronic payments.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">The Bitcoin Difference:</h3>
          <p className="text-gray-700">
            Bitcoin's design offers a pseudonymous alternative to traditional financial surveillance. 
            When used with proper self-custody practices, Bitcoin can provide a level of financial 
            privacy that bridges the gap between the surveillance of electronic payments and the 
            physical limitations of cash.
          </p>
        </div>
        
        <div className="text-center">
          <Button
            onClick={onComplete}
            style={{
              background: citadelTheme.gradients.blue,
              boxShadow: citadelTheme.shadows.button,
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
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-800">Financial Surveillance Detective</h2>
          <div className="text-sm font-medium text-gray-500">
            {viewedPaymentOptions.length} of {paymentOptions.length} methods analyzed
          </div>
        </div>
        
        <div className="mb-4">
          <Progress value={progress} className="h-2" />
        </div>
        
        <p className="text-gray-700 mb-4">
          Investigate how different payment methods affect your financial privacy. Learn what data is collected,
          who has access to it, and how it might be used.
        </p>
      </div>
      
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="comparison">Compare Methods</TabsTrigger>
            <TabsTrigger value="details" disabled={!selectedOption}>Detailed Analysis</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="comparison" className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedOptions.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className={`cursor-pointer transition-colors ${
                    viewedPaymentOptions.includes(option.id) 
                      ? 'border-blue-300 bg-blue-50/30' 
                      : 'hover:border-blue-200'
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  <CardHeader className="py-4 px-5">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-md font-medium text-blue-700">
                        {option.name}
                      </CardTitle>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(10)].map((_, i) => (
                            <Eye 
                              key={i} 
                              className={`h-3 w-3 ${
                                i < option.privacyScore 
                                  ? 'text-blue-500' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="py-0 px-5">
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </CardContent>
                  <CardFooter className="py-3 px-5">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center text-xs text-gray-500">
                        <Database className="h-3 w-3 mr-1" />
                        <span>{option.dataCollected.length} data points collected</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="h-3 w-3 mr-1" />
                        <span>{option.entities.length} entities have access</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="details" className="p-6">
          {selectedOption && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-blue-800">{selectedOption.name}</h3>
                <div className="flex items-center px-3 py-1 bg-blue-100 rounded-full">
                  <span className="text-xs font-medium text-blue-800 mr-2">Privacy Score:</span>
                  <div className="flex">
                    {[...Array(10)].map((_, i) => (
                      <Eye 
                        key={i} 
                        className={`h-3 w-3 ${
                          i < selectedOption.privacyScore 
                            ? 'text-blue-500' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">{selectedOption.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="py-4 px-5">
                    <div className="flex items-center">
                      <Database className="h-5 w-5 text-red-500 mr-2" />
                      <CardTitle className="text-md font-medium text-gray-800">
                        Data Collected
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="py-0 px-5">
                    <ul className="space-y-2">
                      {selectedOption.dataCollected.map((data, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-sm text-gray-700">{data}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-4 px-5">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-amber-500 mr-2" />
                      <CardTitle className="text-md font-medium text-gray-800">
                        Who Has Access
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="py-0 px-5">
                    <ul className="space-y-2">
                      {selectedOption.entities.map((entity, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span className="text-sm text-gray-700">{entity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-gray-50">
                <CardHeader className="py-4 px-5">
                  <div className="flex items-center">
                    <Activity className="h-5 w-5 text-blue-500 mr-2" />
                    <CardTitle className="text-md font-medium text-gray-800">
                      Real-World Scenario
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="py-0 px-5">
                  <p className="text-gray-700">{selectedOption.scenario}</p>
                </CardContent>
              </Card>
              
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentTab("comparison")}
                >
                  Back to Comparison
                </Button>
                
                <Button
                  onClick={() => {
                    setCurrentTab("comparison");
                    setSelectedOption(null);
                  }}
                  style={{
                    background: citadelTheme.gradients.blue,
                    boxShadow: citadelTheme.shadows.button,
                  }}
                >
                  Continue Investigation
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}