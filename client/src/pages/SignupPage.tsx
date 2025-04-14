import { useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { ThemeContainer, ThemeCard, ThemeHeading, GradientButton, OutlineButton } from '@/components/ui/theme';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { UserIdRecovery } from '@/components/ui/user-id-recovery';

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
      // Generate a more structured Bitcoin Quest ID format for better readability
      // Format: BTC-QUEST-XXXX-YYYY-ZZZZ
      const randomPart1 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const randomPart2 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const randomPart3 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      
      const formattedUserId = `BTC-QUEST-${randomPart1}-${randomPart2}-${randomPart3}`;
      setUserId(formattedUserId);
      setLoading(false);
      
      // In a real app, we would send this data to the backend
      // with the user account starting with no progress
      console.log('Created new user with no initial progress:', {
        ...data,
        userId: formattedUserId,
        progress: {
          currentRealm: 1,
          completedRealms: [],
          completedMissions: [],
          earnedBadges: [],
          earnedCertificates: []
        }
      });
      
      // Toast notification handled in the recovery component
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
    setLocation('/home');
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
              
              <UserIdRecovery 
                userId={userId || ''}
                onClose={continueToApp}
              />
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
