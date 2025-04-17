import { useState } from 'react';
import { useLocation } from 'wouter';
import { ThemeContainer, ThemeCard, ThemeHeading, GradientButton } from '@/components/ui/theme';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

const recoveryFormSchema = z.object({
  identifier: z.string().min(1, 'Please enter your email or unique ID'),
  recoveryMethod: z.enum(['email', 'uniqueId'])
});

type RecoveryFormValues = z.infer<typeof recoveryFormSchema>;

const resetPasswordFormSchema = z.object({
  newPassword: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters')
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordFormSchema>;

export default function ForgotPasswordPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [stage, setStage] = useState<'recovery' | 'verification' | 'reset'>('recovery');
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [recoveryMethod, setRecoveryMethod] = useState<'email' | 'uniqueId'>('email');
  const [identifier, setIdentifier] = useState('');

  const { 
    register: registerRecovery, 
    handleSubmit: handleSubmitRecovery, 
    formState: { errors: recoveryErrors }
  } = useForm<RecoveryFormValues>({
    resolver: zodResolver(recoveryFormSchema),
    defaultValues: {
      identifier: '',
      recoveryMethod: 'email'
    }
  });

  const { 
    register: registerReset, 
    handleSubmit: handleSubmitReset, 
    formState: { errors: resetErrors }
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: ''
    }
  });

  const handleRecoverySubmit = (data: RecoveryFormValues) => {
    setLoading(true);
    setIdentifier(data.identifier);
    setRecoveryMethod(data.recoveryMethod);
    
    // Simulate verification code sending process
    setTimeout(() => {
      setLoading(false);
      setStage('verification');
      
      toast({
        title: data.recoveryMethod === 'email' ? 'Verification code sent!' : 'ID verified!',
        description: data.recoveryMethod === 'email' 
          ? 'We\'ve sent a verification code to your email' 
          : 'Your unique ID has been verified. Please complete the verification.',
      });
    }, 1500);
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate verification check process
    setTimeout(() => {
      setLoading(false);
      
      if (verificationCode.length < 4) {
        toast({
          title: 'Invalid code',
          description: 'Please enter the full verification code',
          variant: 'destructive'
        });
        return;
      }
      
      setStage('reset');
      toast({
        title: 'Verification successful!',
        description: 'You can now reset your password',
      });
    }, 1000);
  };

  const handleResetSubmit = (data: ResetPasswordFormValues) => {
    setLoading(true);
    
    // Simulate password reset process
    setTimeout(() => {
      setLoading(false);
      
      toast({
        title: 'Password reset successful!',
        description: 'You can now log in with your new password',
      });
      
      // Redirect to login page after a short delay
      setTimeout(() => setLocation('/login'), 1500);
    }, 1500);
  };

  return (
    <ThemeContainer>
      <div className="min-h-screen flex flex-col p-4 sm:p-6">
        {/* Header with back button */}
        <header className="w-full max-w-md mx-auto mb-4">
          <button 
            onClick={() => setLocation('/login')} 
            className="flex items-center text-secondary hover:text-primary"
          >
            <span className="mr-1">←</span> Back to Login
          </button>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center">
          <ThemeCard className="max-w-md w-full">
            <div className="text-center mb-8">
              <div className="flex justify-center space-x-4 mb-4">
                <img 
                  src="https://bitcoiners.africa/wp-content/uploads/2025/04/ASHA-WOC.png" 
                  alt="Asha" 
                  className="h-24 object-contain"
                />
                <img 
                  src="https://bitcoiners.africa/wp-content/uploads/2025/04/ODU.png" 
                  alt="Odu" 
                  className="h-24 object-contain"
                />
              </div>
              <ThemeHeading className="mb-2">Account Recovery</ThemeHeading>
              <p className="text-lightText/80">
                {stage === 'recovery' && "Recover access to your Bitcoin Quest journey"}
                {stage === 'verification' && "Enter the verification code"}
                {stage === 'reset' && "Create a new password"}
              </p>
            </div>
            
            {stage === 'recovery' && (
              <form onSubmit={handleSubmitRecovery(handleRecoverySubmit)} className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-sm font-medium">How would you like to recover your account?</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`flex items-center justify-center p-3 border ${recoveryMethod === 'email' ? 'border-primary bg-primary/10' : 'border-secondary/40 bg-darkBg'} rounded-lg cursor-pointer transition-colors`}>
                      <input 
                        type="radio" 
                        {...registerRecovery('recoveryMethod')} 
                        value="email" 
                        className="sr-only"
                        onChange={() => setRecoveryMethod('email')}
                      />
                      <span className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">Email</span>
                      </span>
                    </label>
                    <label className={`flex items-center justify-center p-3 border ${recoveryMethod === 'uniqueId' ? 'border-primary bg-primary/10' : 'border-secondary/40 bg-darkBg'} rounded-lg cursor-pointer transition-colors`}>
                      <input 
                        type="radio" 
                        {...registerRecovery('recoveryMethod')} 
                        value="uniqueId" 
                        className="sr-only"
                        onChange={() => setRecoveryMethod('uniqueId')}
                      />
                      <span className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                        <span className="text-sm">Unique ID</span>
                      </span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="identifier" className="block text-sm font-medium mb-2">
                    {recoveryMethod === 'email' ? 'Your Email Address' : 'Your Unique ID'}
                  </label>
                  <input 
                    type={recoveryMethod === 'email' ? 'email' : 'text'}
                    id="identifier" 
                    {...registerRecovery('identifier')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder={recoveryMethod === 'email' ? 'Enter your email address' : 'Enter your BTC-QUEST-XXXX-XXXX-XXXX'}
                  />
                  {recoveryErrors.identifier && (
                    <p className="mt-1 text-xs text-red-400">{recoveryErrors.identifier.message}</p>
                  )}
                </div>
                
                <div className="pt-2">
                  <GradientButton type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Continue'}
                  </GradientButton>
                </div>
              </form>
            )}
            
            {stage === 'verification' && (
              <form onSubmit={handleVerificationSubmit} className="space-y-6">
                <div>
                  <label htmlFor="verification-code" className="block text-sm font-medium mb-2">
                    Verification Code
                  </label>
                  <div className="flex justify-center">
                    <div className="flex gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="w-10 h-12 text-center text-lg font-bold bg-darkBg border border-secondary/40 rounded-md text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          value={verificationCode[i] || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d*$/.test(val)) {
                              setVerificationCode(prev => {
                                const newCode = prev.split('');
                                newCode[i] = val;
                                return newCode.join('');
                              });
                              
                              // Auto-focus next input
                              if (val && i < 5) {
                                const nextInput = e.target.parentElement?.querySelector(
                                  `input:nth-child(${i + 2})`
                                ) as HTMLInputElement;
                                if (nextInput) nextInput.focus();
                              }
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-center text-xs text-lightText/60">
                    {recoveryMethod === 'email' 
                      ? `We've sent a verification code to ${identifier}` 
                      : 'Enter the verification code generated for your ID'}
                  </p>
                </div>
                
                <div className="pt-2">
                  <GradientButton type="submit" disabled={loading}>
                    {loading ? 'Verifying...' : 'Verify Code'}
                  </GradientButton>
                </div>
                
                <div className="text-center pt-2">
                  <button 
                    type="button"
                    className="text-secondary hover:text-primary text-sm underline"
                    onClick={() => {
                      setStage('recovery');
                      setVerificationCode('');
                    }}
                  >
                    Try a different method
                  </button>
                </div>
              </form>
            )}
            
            {stage === 'reset' && (
              <form onSubmit={handleSubmitReset(handleResetSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium mb-2">
                    New Password
                  </label>
                  <input 
                    type="password" 
                    id="new-password" 
                    {...registerReset('newPassword')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="Create a secure password"
                  />
                  {resetErrors.newPassword && (
                    <p className="mt-1 text-xs text-red-400">{resetErrors.newPassword.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input 
                    type="password" 
                    id="confirm-password" 
                    {...registerReset('confirmPassword')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="Confirm your new password"
                  />
                  {resetErrors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-400">{resetErrors.confirmPassword.message}</p>
                  )}
                </div>
                
                <div className="pt-2">
                  <GradientButton type="submit" disabled={loading}>
                    {loading ? 'Resetting Password...' : 'Reset Password'}
                  </GradientButton>
                </div>
              </form>
            )}
          </ThemeCard>
        </div>
      </div>
    </ThemeContainer>
  );
}