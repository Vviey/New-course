import React from 'react';
import { cn } from '@/lib/utils';

interface ThemeProps {
  className?: string;
  children: React.ReactNode;
}

export function ThemeContainer({ className, children }: ThemeProps) {
  return (
    <div className={cn(
      "min-h-screen bg-gradient-to-br from-darkBg to-darkBg/90 text-lightText font-sans",
      className
    )}>
      {children}
    </div>
  );
}

export function ThemeCard({ className, children }: ThemeProps) {
  return (
    <div className={cn(
      "bg-darkBg/70 backdrop-blur-md border border-secondary/20 rounded-xl shadow-xl p-6",
      className
    )}>
      {children}
    </div>
  );
}

export function ThemeHeading({ className, children }: ThemeProps) {
  return (
    <h2 className={cn(
      "text-2xl font-bold text-primary",
      className
    )}>
      {children}
    </h2>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GradientButton({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "relative w-full overflow-hidden rounded-lg text-white font-medium transition-all",
        "bg-gradient-to-r from-primary to-primary/80 hover:brightness-110 active:brightness-90",
        "disabled:opacity-50 disabled:pointer-events-none",
        size === 'sm' && "py-1.5 px-3 text-sm",
        size === 'md' && "py-2.5 px-4",
        size === 'lg' && "py-3 px-6 text-lg",
        "after:absolute after:inset-0 after:bg-white/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity",
        "shadow-lg shadow-primary/20",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({
  className,
  variant = 'secondary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full rounded-lg font-medium transition-all",
        "border-2 border-secondary hover:border-primary",
        "text-secondary hover:text-primary",
        "bg-transparent hover:bg-secondary/10",
        "disabled:opacity-50 disabled:pointer-events-none",
        size === 'sm' && "py-1 px-3 text-sm",
        size === 'md' && "py-2 px-4",
        size === 'lg' && "py-2.5 px-6 text-lg",
        "shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}