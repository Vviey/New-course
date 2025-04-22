import { ReactNode } from 'react';
import { originTheme } from '@/lib/realm-themes';

interface OriginsBackgroundProps {
  children: ReactNode;
  patternType?: 'woven' | 'adinkra' | 'cowrie' | 'none';
  opacity?: number;
  withGradient?: boolean;
  roundedCorners?: boolean;
  className?: string;
}

export function OriginsBackground({
  children,
  patternType = 'woven',
  opacity = 0.2,
  withGradient = true,
  roundedCorners = true,
  className = '',
}: OriginsBackgroundProps) {
  const theme = originTheme;
  
  // Get the appropriate pattern class based on the type
  const getPatternClass = () => {
    switch (patternType) {
      case 'woven': return 'bg-origins';
      case 'adinkra': return 'origins-pattern';
      case 'cowrie': return 'cowrie-pattern';
      case 'none': return '';
      default: return 'bg-origins';
    }
  };
  
  // Gradient styling
  const gradientStyle = withGradient ? {
    background: `linear-gradient(to bottom, ${theme.colors.gradientStart}, ${theme.colors.gradientEnd})`,
  } : {};
  
  return (
    <div 
      className={`relative overflow-hidden ${roundedCorners ? 'rounded-xl' : ''} ${className}`}
      style={gradientStyle}
    >
      {/* Background pattern */}
      {patternType !== 'none' && (
        <div 
          className={`absolute inset-0 ${getPatternClass()}`} 
          style={{ opacity }}
        />
      )}
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}