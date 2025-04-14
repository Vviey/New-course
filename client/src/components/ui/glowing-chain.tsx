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
  // Default nodes if none provided
  const defaultNodes = [
    { id: 1, label: 'Origins', realmId: 1, status: 'active' as const },
    { id: 2, label: 'Forest of Sparks', realmId: 2, status: 'locked' as const },
    { id: 3, label: 'Central Citadel', realmId: 3, status: 'locked' as const },
    { id: 4, label: 'Council of Forks', realmId: 4, status: 'locked' as const },
    { id: 5, label: 'Ubuntu Village', realmId: 5, status: 'locked' as const }
  ];
  
  const chainNodes = nodes.length > 0 ? nodes : defaultNodes;
  
  // Calculate styles for progress and glow effects
  const progressWidth = `${progress}%`;
  const glowIntensity = Math.min(progress / 100 * 2 + 0.5, 1.5); // Increase glow with progress
  
  return (
    <div className={`relative ${className}`}>
      {/* Chain Base */}
      <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
        {/* Glowing Progress Indicator */}
        <div 
          className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full relative"
          style={{ 
            width: progressWidth,
            boxShadow: `0 0 ${10 * glowIntensity}px ${5 * glowIntensity}px rgba(var(--primary), 0.5)`,
            transition: 'width 1s ease-in-out, box-shadow 1s ease-in-out'
          }}
        ></div>
      </div>
      
      {/* Nodes */}
      <div className="absolute top-0 left-0 w-full h-full -mt-4 flex justify-between">
        {chainNodes.map((node, index) => {
          // Calculate left position based on number of nodes
          const leftPosition = index === 0 ? '0%' : 
                              index === chainNodes.length - 1 ? 'calc(100% - 24px)' : 
                              `calc(${index / (chainNodes.length - 1) * 100}% - 12px)`;
          
          // Determine node styling based on status
          const nodeStyles = node.status === 'completed' ? 
            'bg-primary border-primary text-primary' : 
            node.status === 'active' ? 
            'bg-primary/20 border-primary text-primary animate-pulse' : 
            'bg-gray-800 border-gray-700 text-gray-500';
          
          // Apply glow effect to completed and active nodes
          const glowEffect = node.status !== 'locked' ? 
            `shadow-glow-${node.status === 'completed' ? 'strong' : 'medium'}` : '';
          
          return (
            <div 
              key={node.id}
              className="absolute"
              style={{ left: leftPosition }}
            >
              <div 
                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 cursor-pointer ${nodeStyles} ${glowEffect}`}
                onClick={() => onNodeClick && onNodeClick(node.id)}
              >
                <span className="text-xs font-bold">{node.id}</span>
              </div>
              
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className={`text-xs font-medium ${node.status === 'locked' ? 'text-gray-500' : 'text-lightText'}`}>
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