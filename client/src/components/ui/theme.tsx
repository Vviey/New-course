import { ReactNode } from 'react';

// Colors from the design
export const colors = {
  primary: '#EE720B', // orange
  secondary: '#FFC567', // golden yellow
  tertiary: '#FBF4D2', // light golden yellow
  darkBg: '#1A1814',
  lightText: '#F7F3E9',
  accent: '#347764',
};

interface ThemeContainerProps {
  children: ReactNode;
  className?: string;
}

export function ThemeContainer({ children, className = '' }: ThemeContainerProps) {
  return (
    <div className={`min-h-screen text-lightText font-inter ${className}`}>
      {children}
    </div>
  );
}

export function GradientButton({ 
  children, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false,
}: { 
  children: ReactNode; 
  onClick?: () => void; 
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
      } w-full bg-gradient-orange rounded-md py-3 px-4 font-montserrat font-semibold text-darkBg transition-opacity shadow-md ${className}`}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ 
  children, 
  onClick, 
  className = '',
  disabled = false,
}: { 
  children: ReactNode; 
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary/10'
      } bg-transparent border border-secondary rounded-md py-3 px-6 font-montserrat font-semibold text-secondary transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export function ThemeCard({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <div className={`bg-darkBg border border-secondary/20 rounded-lg p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function ThemeHeading({ 
  children, 
  className = '', 
  level = 1
}: { 
  children: ReactNode; 
  className?: string; 
  level?: 1 | 2 | 3 | 4;
}) {
  const baseClasses = "font-cinzel font-bold text-secondary";
  
  switch (level) {
    case 1:
      return <h1 className={`${baseClasses} text-3xl md:text-4xl lg:text-5xl ${className}`}>{children}</h1>;
    case 2:
      return <h2 className={`${baseClasses} text-2xl md:text-3xl ${className}`}>{children}</h2>;
    case 3:
      return <h3 className={`${baseClasses} text-xl ${className}`}>{children}</h3>;
    case 4:
      return <h4 className={`${baseClasses} text-lg ${className}`}>{children}</h4>;
    default:
      return <h1 className={`${baseClasses} text-3xl md:text-4xl lg:text-5xl ${className}`}>{children}</h1>;
  }
}
