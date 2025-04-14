import React from 'react';

interface GlowingChainProps {
  progress: number; // 0-100
  className?: string;
  nodes?: Array<{
    id: number;
    label: string;
    realmId: number;
    status: 'completed' | 'active' | 'locked';
  }>;
  onNodeClick?: (nodeId: number) => void;
}

export function GlowingChain({ 
  progress, 
  className = '',
  nodes = [],
  onNodeClick
}: GlowingChainProps) {
  // Default nodes if none provided (based on the image)
  const defaultNodes = [
    { id: 1, label: 'Realm of Origins', realmId: 1, status: 'completed' as const },
    { id: 2, label: 'The Forest of Sparks', realmId: 2, status: 'active' as const },
    { id: 3, label: 'The Central Citadel', realmId: 3, status: 'locked' as const },
    { id: 4, label: 'The Council of Forks', realmId: 4, status: 'locked' as const },
    { id: 5, label: 'The Ubuntu Village', realmId: 5, status: 'locked' as const },
    { id: 6, label: 'The Grove of Becoming', realmId: 6, status: 'locked' as const }
  ];
  
  const chainNodes = nodes.length > 0 ? nodes : defaultNodes;
  
  // Calculate the active progress (based on completed and active nodes)
  const activeCount = chainNodes.filter(node => node.status === 'completed' || node.status === 'active').length;
  const progressPercentage = (activeCount / chainNodes.length) * 100;
  
  // This can be overridden by the progress prop
  const chainProgress = progress > 0 ? progress : progressPercentage;
  
  return (
    <div className={`relative my-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl text-amber-200 font-semibold mb-6">
          Asha's Journey Through the Realms of Money
        </h2>
      </div>
      
      {/* The curved chain path */}
      <div className="mx-auto px-6 relative">
        {/* Main SVG Path for the chain */}
        <svg className="w-full h-auto" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet">
          {/* Background (inactive) chain */}
          <path 
            d="M50,100 C200,30 400,170 600,70 S750,90 750,90" 
            fill="transparent" 
            stroke="#2e2c2a" 
            strokeWidth="20" 
            strokeLinecap="round"
            className="transition-opacity duration-700"
          />
          
          {/* Active/Glowing chain - we use stroke-dasharray and stroke-dashoffset to animate progress */}
          <path 
            d="M50,100 C200,30 400,170 600,70 S750,90 750,90" 
            fill="transparent" 
            stroke="#ffd700" 
            strokeWidth="20" 
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))",
              strokeDasharray: "800",
              strokeDashoffset: `${800 - (800 * (chainProgress / 100))}`,
            }}
          />
        </svg>
        
        {/* Node Points along the chain */}
        {chainNodes.map((node, index) => {
          // Calculate positions along the curve
          // These positions should be coordinated with the SVG path
          const positions = [
            { x: 50, y: 100 },   // Realm of Origins
            { x: 200, y: 30 },   // The Forest of Sparks  
            { x: 400, y: 170 },  // The Central Citadel
            { x: 600, y: 70 },   // The Council of Forks
            { x: 700, y: 85 },   // The Ubuntu Village
            { x: 750, y: 90 }    // The Grove of Becoming
          ];
          
          const pos = positions[index] || { x: 0, y: 0 };
          
          // Determine styling based on status
          const isActive = node.status === 'active' || node.status === 'completed';
          const dotClasses = isActive 
            ? "bg-amber-400 shadow-lg shadow-amber-400/50" 
            : "bg-gray-700";
          
          // Add glow effect for active nodes
          const glowEffect = node.status === 'active' 
            ? "animate-pulse ring-2 ring-amber-400/50" 
            : "";
          
          return (
            <div 
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
              style={{ 
                left: `${(pos.x / 800) * 100}%`, 
                top: `${(pos.y / 200) * 100}%` 
              }}
            >
              {/* Node dot */}
              <div 
                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-500 ${dotClasses} ${glowEffect}`}
                onClick={() => onNodeClick && onNodeClick(node.id)}
              />
              
              {/* Label - positioned appropriately around the path */}
              <div 
                className={`absolute whitespace-nowrap transition-opacity duration-500 text-sm font-medium
                  ${index === 0 ? 'bottom-full right-0 mb-2' : 
                    index === 1 ? 'top-full left-0 mt-2' : 
                    index === 2 ? 'bottom-full left-0 mb-2' :
                    index === 3 ? 'top-full right-0 mt-2' :
                    index === 4 ? 'top-full right-0 mt-2' : 
                    'top-full right-0 mt-2'}`}
              >
                <span className={`${isActive ? 'text-amber-200' : 'text-gray-500'}`}>
                  {node.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}