import { useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { ThemeContainer, ThemeCard, ThemeHeading, GradientButton } from '@/components/ui/theme';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { UserIdRecovery } from '@/components/ui/user-id-recovery';

const formSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  userId: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'username' | 'userId'>('username');
  const [showRecovery, setShowRecovery] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      userId: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    
    // Simulate login with a delay
    setTimeout(() => {
      setLoading(false);
      setLocation('/home');
      
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in",
      });
    }, 1000);
  };

  const toggleLoginMethod = () => {
    setLoginMethod(prev => prev === 'username' ? 'userId' : 'username');
  };
  
  const handleRecoverAccount = (userId: string) => {
    // In a real app, this would verify the user's ID against the database
    // and initiate the password reset process
    toast({
      title: "Recovery initiated",
      description: "We've sent instructions to reset your password.",
    });
    setShowRecovery(false);
  };

  return (
    <>
      <ThemeContainer>
        <div className="min-h-screen flex flex-col p-4 sm:p-6">
          {/* Header with back button */}
          <header className="w-full max-w-md mx-auto mb-4">
            <button 
              onClick={() => setLocation('/')} 
              className="flex items-center text-secondary hover:text-primary"
            >
              <span className="mr-1">←</span> Back to Story
            </button>
          </header>

          <div className="flex-1 flex flex-col items-center justify-center">
            <ThemeCard className="max-w-md w-full">
              <div className="text-center mb-8">
                <img 
                  src="/asha-icon.png" 
                  alt="Asha's Journey Icon" 
                  className="w-20 h-20 mx-auto rounded-full object-cover glow mb-4"
                />
                <ThemeHeading className="mb-2">Continue Your Journey</ThemeHeading>
                <p className="text-lightText/80">Return to Asha's world of discovery</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {loginMethod === 'username' ? (
                  <>
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium mb-2">Your Username</label>
                      <input 
                        type="text" 
                        id="username" 
                        {...register('username')}
                        className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                        placeholder="Enter your username"
                      />
                      {errors.username && (
                        <p className="mt-1 text-xs text-red-400">{errors.username.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                      <input 
                        type="password" 
                        id="password" 
                        {...register('password')}
                        className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                        placeholder="Your journey password"
                      />
                      {errors.password && (
                        <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <div>
                    <label htmlFor="userId" className="block text-sm font-medium mb-2">Your Unique ID</label>
                    <input 
                      type="text" 
                      id="userId" 
                      {...register('userId')}
                      className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                      placeholder="Enter your unique ID"
                    />
                    <p className="mt-1 text-xs text-lightText/60">Your Unique ID can be used for both login and password recovery</p>
                    {errors.userId && (
                      <p className="mt-1 text-xs text-red-400">{errors.userId.message}</p>
                    )}
                  </div>
                )}
                
                <div className="pt-2">
                  <GradientButton type="submit" disabled={loading}>
                    Return to the Realms
                  </GradientButton>
                </div>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={toggleLoginMethod}
                    className="text-secondary hover:text-primary text-sm"
                  >
                    {loginMethod === 'username' ? 'Login with your Unique ID instead' : 'Login with Username & Password instead'}
                  </button>
                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={() => setShowRecovery(true)}
                      className="text-secondary/80 hover:text-primary text-xs underline"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>
              </form>
              
              <div className="mt-6 text-center border-t border-secondary/10 pt-4">
                <p className="mb-3 text-sm text-lightText/80">
                  Don't have an account yet?
                </p>
                <button 
                  onClick={() => setLocation('/signup')} 
                  className="text-secondary hover:text-primary text-sm font-medium"
                >
                  Create a New Account
                </button>
              </div>
            </ThemeCard>
          </div>
        </div>
      </ThemeContainer>
      
      {/* Account Recovery Dialog */}
      {showRecovery && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-background max-w-md w-full rounded-lg overflow-hidden border border-border">
            <div className="p-6">
              <div className="text-center mb-4">
                <ThemeHeading level={3} className="mb-2">Account Recovery</ThemeHeading>
                <p className="text-lightText/80 text-sm">
                  Enter your unique Bitcoin Quest ID to recover your account
                </p>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Your Unique ID</label>
                <input 
                  type="text"
                  placeholder="Enter your BTC-QUEST-XXXX-XXXX-XXXX"
                  className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-black font-bold" 
                />
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => handleRecoverAccount('sample-id')}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-md py-2"
                >
                  Recover Account
                </button>
                <button 
                  onClick={() => setShowRecovery(false)}
                  className="flex-1 bg-darkBg hover:bg-darkBg/80 text-lightText border border-border rounded-md py-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
