import { useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { ThemeContainer, ThemeCard, ThemeHeading, GradientButton, OutlineButton } from '@/components/ui/theme';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(30),
  email: z.string().email('Invalid email format').optional().or(z.literal('')),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

type FormValues = z.infer<typeof formSchema>;

export default function SignupPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const userIdRef = useRef<HTMLInputElement>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    
    // Simulate signup process with a delay
    setTimeout(() => {
      // Generate a random mock user ID for demonstration
      const mockUserId = 'BTC' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
      setUserId(mockUserId);
      setLoading(false);
      
      toast({
        title: "Account created!",
        description: "Your journey can now begin",
      });
    }, 1000);
  };

  const copyUserIdToClipboard = () => {
    if (userIdRef.current) {
      userIdRef.current.select();
      document.execCommand('copy');
      toast({
        title: 'User ID copied',
        description: 'Your unique ID has been copied to clipboard',
      });
    }
  };

  const continueToApp = () => {
    setLocation('/');
  };

  return (
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
          {userId ? (
            // Show user ID and instructions after successful signup
            <ThemeCard className="max-w-md w-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl text-primary">✓</span>
                </div>
                <ThemeHeading className="mb-2">Journey Begins!</ThemeHeading>
                <p className="text-lightText/80 mb-6">Your account has been created successfully</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Unique ID</label>
                  <div className="flex">
                    <input 
                      ref={userIdRef}
                      type="text" 
                      readOnly 
                      value={userId}
                      className="flex-1 bg-darkBg border border-secondary/40 rounded-l-md p-3 text-lightText" 
                    />
                    <button 
                      onClick={copyUserIdToClipboard}
                      className="bg-secondary/20 hover:bg-secondary/30 text-secondary px-3 rounded-r-md"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-lightText/80">
                    <span className="font-bold text-primary">Important:</span> Save this ID to continue your journey in the future. It can be used to recover your account if you forget your password, and it's your unique identifier that allows you to access the platform without requiring personal information.
                  </p>
                </div>
                
                <div className="pt-2">
                  <GradientButton onClick={continueToApp}>
                    Begin My Adventure
                  </GradientButton>
                </div>
              </div>
            </ThemeCard>
          ) : (
            // Show signup form
            <ThemeCard className="max-w-md w-full">
              <div className="text-center mb-8">
                <img 
                  src="/asha-icon.png" 
                  alt="Asha's Journey Icon" 
                  className="w-20 h-20 mx-auto rounded-full object-cover glow mb-4"
                />
                <ThemeHeading className="mb-2">Begin Your Journey</ThemeHeading>
                <p className="text-lightText/80">Join Asha as she explores the realms of money</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-2">Choose a Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    {...register('username')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="Your journey name"
                  />
                  {errors.username && (
                    <p className="mt-1 text-xs text-red-400">{errors.username.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email (Optional)</label>
                  <input 
                    type="email" 
                    id="email" 
                    {...register('email')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="For password recovery (optional)"
                  />
                  <p className="mt-1 text-xs text-lightText/60">Your Unique ID can be used for recovery instead of email</p>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">Create a Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    {...register('password')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="Secure your journey"
                  />
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>
                  )}
                </div>
                
                <div className="pt-2">
                  <GradientButton type="submit" disabled={loading}>
                    Generate My Unique ID
                  </GradientButton>
                </div>
                
                <div className="border-t border-secondary/10 pt-4 mt-4">
                  <p className="mb-4 text-sm text-lightText/80">
                    <span className="text-primary">Why a Unique ID?</span> We believe in privacy-first education. Your unique ID lets you track progress without sharing personal data — similar to how Bitcoin works!
                  </p>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <button 
                  onClick={() => setLocation('/login')} 
                  className="text-secondary hover:text-primary text-sm"
                >
                  Already have an ID? Sign in
                </button>
              </div>
            </ThemeCard>
          )}
        </div>
      </div>
    </ThemeContainer>
  );
}
