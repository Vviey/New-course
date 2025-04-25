import React, { useState } from 'react';
import { Eye, ShieldAlert, Check, Info } from 'lucide-react';

interface DataPoint {
  type: string;
  risk: number;
}

interface CaseStudy {
  title: string;
  description: string;
}

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  privacyScore: number;
  dataMapped: DataPoint[];
  caseStudies: CaseStudy[];
}

interface PaymentPrivacySimulatorProps {
  paymentOptions: PaymentOption[];
  onComplete?: () => void;
}

export function PaymentPrivacySimulator({ 
  paymentOptions, 
  onComplete 
}: PaymentPrivacySimulatorProps) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption | null>(null);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [viewedOptions, setViewedOptions] = useState<string[]>([]);
  
  const handlePaymentSelect = (payment: PaymentOption) => {
    setSelectedPayment(payment);
    setShowHeatmap(true);
    
    if (!viewedOptions.includes(payment.id)) {
      setViewedOptions([...viewedOptions, payment.id]);
    }
  };
  
  const getRiskLevelClass = (risk: number) => {
    if (risk <= 2) return 'bg-green-500';
    if (risk <= 4) return 'bg-green-400';
    if (risk <= 5) return 'bg-yellow-400';
    if (risk <= 7) return 'bg-orange-400';
    if (risk <= 8) return 'bg-orange-500';
    return 'bg-red-500';
  };
  
  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };
  
  const allOptionsViewed = paymentOptions.every(option => viewedOptions.includes(option.id));
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 bg-amber-50">
        <h2 className="text-2xl font-bold text-amber-800 mb-2">
          Payment Privacy Simulator
        </h2>
        <p className="text-amber-700 mb-6">
          Compare different payment methods to see how much data they reveal about you.
        </p>
        
        {/* Payment options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {paymentOptions.map(payment => (
            <div 
              key={payment.id}
              className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg ${
                selectedPayment?.id === payment.id ? 'ring-2 ring-amber-500' : ''
              }`}
              onClick={() => handlePaymentSelect(payment)}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <Eye size={28} className="text-amber-600" />
                </div>
              </div>
              <h3 className="text-center font-semibold text-amber-700">{payment.name}</h3>
              <p className="text-center text-sm text-gray-500 mt-1 mb-3">
                {payment.description}
              </p>
              <div className="flex items-center justify-center">
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-red-500"
                    style={{ width: `${payment.privacyScore}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-semibold">
                  {payment.privacyScore}%
                </span>
              </div>
              <p className="text-center text-xs text-gray-400 mt-2">
                Privacy Score
              </p>
            </div>
          ))}
        </div>
        
        {/* Data heatmap */}
        {selectedPayment && (
          <div 
            className={`transition-all duration-500 overflow-hidden ${
              showHeatmap ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                <ShieldAlert className="mr-2 text-amber-600" size={20} />
                Data Exposure Analysis: {selectedPayment.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                {selectedPayment.dataMapped.map((data, index) => (
                  <div 
                    key={index}
                    className={`${getRiskLevelClass(data.risk)} p-3 rounded-lg text-white text-center transition-transform hover:scale-105`}
                  >
                    <div className="font-semibold">{data.type}</div>
                    <div className="text-sm mt-1">Risk Level: {data.risk}/10</div>
                  </div>
                ))}
              </div>
              
              {/* Privacy score summary */}
              <div className="mb-6">
                <h4 className="font-semibold text-amber-700 mb-2 flex items-center">
                  <Info className="mr-2" size={16} />
                  Overall Privacy Score
                </h4>
                <div className="flex items-center">
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mr-3">
                    <div 
                      className={`h-full rounded-full ${selectedPayment.privacyScore > 70 ? 'bg-green-500' : selectedPayment.privacyScore > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${selectedPayment.privacyScore}%` }}
                    ></div>
                  </div>
                  <span className="font-bold text-amber-600 text-lg">{selectedPayment.privacyScore}%</span>
                </div>
                
                <p className="text-gray-600 text-sm mt-2">
                  {selectedPayment.privacyScore > 70 
                    ? 'Excellent privacy protection - minimal data exposure'
                    : selectedPayment.privacyScore > 40 
                    ? 'Moderate privacy concerns - some data is exposed'
                    : 'High privacy risk - significant data exposure'}
                </p>
              </div>
              
              {/* Case studies */}
              {selectedPayment.caseStudies.length > 0 && (
                <div>
                  <h4 className="font-semibold text-amber-700 mb-3">Real-World Case Studies</h4>
                  {selectedPayment.caseStudies.map((case_, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-amber-50 rounded-lg mb-2 border-l-4 border-amber-500"
                    >
                      <h5 className="font-medium text-amber-800">{case_.title}</h5>
                      <p className="text-gray-600 text-sm mt-1">{case_.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Complete button (shows when all options viewed) */}
        {allOptionsViewed && (
          <div className="flex justify-center">
            <button
              className="py-3 px-6 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              onClick={handleComplete}
            >
              <Check size={18} className="inline mr-2" />
              Complete Simulation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}