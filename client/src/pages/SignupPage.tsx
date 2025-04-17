import { useState, useRef } from 'react';
import { useLocation } from 'wouter';
import { ThemeContainer, ThemeCard, ThemeHeading, GradientButton } from '@/components/ui/theme';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { UserIdRecovery } from '@/components/ui/user-id-recovery';
import { ShareButton } from '@/components/ui/share-button';

const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Please enter a valid email').optional(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
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
      password: '',
      confirmPassword: ''
    }
  });

  const { signup } = useAuth();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    
    const success = await signup(data.username, data.password, data.email);
    
    if (success) {
      // Get the user from local storage which should have been set by AuthContext
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          setUserId(userData.userId);
          
          toast({
            title: "Account created!",
            description: "Your Bitcoin Quest journey begins",
          });
        } catch (error) {
          console.error('Error parsing stored user data:', error);
          setLoading(false);
        }
      } else {
        setLoading(false);
        toast({
          title: "Something went wrong",
          description: "Could not retrieve your user ID",
          variant: "destructive"
        });
      }
    } else {
      setLoading(false);
    }
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
                <ThemeHeading className="mb-2">Begin Your Journey</ThemeHeading>
                <p className="text-lightText/80">Create an account to track your progress</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    {...register('username')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="Choose a username"
                  />
                  {errors.username && (
                    <p className="mt-1 text-xs text-red-400">{errors.username.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-xs text-lightText/60">(Optional)</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    {...register('email')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="Your email address"
                  />
                  <p className="mt-1 text-xs text-lightText/60">For password recovery (recommended)</p>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    {...register('password')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="Create a secure password"
                  />
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    {...register('confirmPassword')}
                    className="w-full bg-darkBg border border-secondary/40 rounded-md p-3 text-lightText focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-400">{errors.confirmPassword.message}</p>
                  )}
                </div>
                
                <div className="pt-2">
                  <GradientButton type="submit" disabled={loading}>
                    Start Your Journey
                  </GradientButton>
                </div>
              </form>
              
              <div className="mt-6 text-center border-t border-secondary/10 pt-4">
                <p className="mb-3 text-sm text-lightText/80">
                  Already have an account?
                </p>
                <button 
                  onClick={() => setLocation('/login')} 
                  className="text-secondary hover:text-primary text-sm font-medium"
                >
                  Continue Your Journey
                </button>
              </div>
            </ThemeCard>
          )}
        </div>
      </div>
    </ThemeContainer>
  );
}