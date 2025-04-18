import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/context/AuthContext';
import { ThemeContainer, ThemeCard, ThemeHeading, GradientButton } from '@/components/ui/theme';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { UserIdRecovery } from '@/components/ui/user-id-recovery';

// Common form schemas
const loginFormSchema = z.object({
  identifier: z.string().min(1, 'Username or email is required'),
  password: z.string().min(1, 'Password is required'),
});

const signupFormSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Please enter a valid email').optional(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
});

const recoveryFormSchema = z.object({
  identifier: z.string().min(1, 'Email or Unique ID is required'),
  recoveryMethod: z.enum(['email', 'uniqueId'])
});

type LoginFormValues = z.infer<typeof loginFormSchema>;
type SignupFormValues = z.infer<typeof signupFormSchema>;
type RecoveryFormValues = z.infer<typeof recoveryFormSchema>;

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'recovery'>('login');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const { login, signup, user } = useAuth();
  const [recoveryMethod, setRecoveryMethod] = useState<'email' | 'uniqueId'>('email');

  useEffect(() => {
    if (user) {
      setLocation('/home');
    }
  }, [user, setLocation]);

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema)
  });

  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema)
  });

  const recoveryForm = useForm<RecoveryFormValues>({
    resolver: zodResolver(recoveryFormSchema)
  });

  const handleLogin = async (data: LoginFormValues) => {
    setLoading(true);
    const success = await login(data.identifier, data.password);
    if (success) {
      setLocation('/home');
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in",
      });
    }
    setLoading(false);
  };

  const handleSignup = async (data: SignupFormValues) => {
    setLoading(true);
    const success = await signup(data.username, data.password, data.email);
    if (success) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setUserId(userData.userId);
        toast({
          title: "Account created!",
          description: "Your Bitcoin Quest journey begins",
        });
      }
    }
    setLoading(false);
  };

  const handleRecovery = async (data: RecoveryFormValues) => {
    setLoading(true);
    // Implement recovery logic here
    toast({
      title: "Recovery email sent",
      description: "Please check your inbox for instructions",
    });
    setLoading(false);
  };

  return (
    <ThemeContainer>
      <div className="min-h-screen flex flex-col p-4 sm:p-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              {userId ? (
                <UserIdRecovery 
                  userId={userId}
                  onClose={() => setLocation('/home')}
                />
              ) : (
                <Tabs value={activeTab} onValueChange={(v: string) => setActiveTab(v as 'login' | 'signup' | 'recovery')}>
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="login">Log In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    <TabsTrigger value="recovery">Recovery</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login">
                    <ThemeCard>
                      <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                        <div>
                          <label className="block text-sm mb-2">Username or Email</label>
                          <input
                            {...loginForm.register('identifier')}
                            className="w-full bg-darkBg border border-secondary/40 rounded-md p-3"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">Password</label>
                          <input
                            type="password"
                            {...loginForm.register('password')}
                            className="w-full bg-darkBg border border-secondary/40 rounded-md p-3"
                          />
                        </div>
                        <GradientButton type="submit" disabled={loading}>
                          Login
                        </GradientButton>
                      </form>
                    </ThemeCard>
                  </TabsContent>

                  <TabsContent value="signup">
                    <ThemeCard>
                      <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-4">
                        <div>
                          <label className="block text-sm mb-2">Username</label>
                          <input
                            {...signupForm.register('username')}
                            className="w-full bg-darkBg border border-secondary/40 rounded-md p-3"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">Email (Optional)</label>
                          <input
                            type="email"
                            {...signupForm.register('email')}
                            className="w-full bg-darkBg border border-secondary/40 rounded-md p-3"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">Password</label>
                          <input
                            type="password"
                            {...signupForm.register('password')}
                            className="w-full bg-darkBg border border-secondary/40 rounded-md p-3"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">Confirm Password</label>
                          <input
                            type="password"
                            {...signupForm.register('confirmPassword')}
                            className="w-full bg-darkBg border border-secondary/40 rounded-md p-3"
                          />
                        </div>
                        <GradientButton type="submit" disabled={loading}>
                          Create Account
                        </GradientButton>
                      </form>
                    </ThemeCard>
                  </TabsContent>

                  <TabsContent value="recovery">
                    <ThemeCard>
                      <form onSubmit={recoveryForm.handleSubmit(handleRecovery)} className="space-y-4">
                        <div className="space-y-4">
                          <label className="block text-sm mb-2">Recovery Method</label>
                          <div className="grid grid-cols-2 gap-4">
                            <label className={`flex items-center justify-center p-3 border ${
                              recoveryMethod === 'email' ? 'border-primary bg-primary/10' : 'border-secondary/40'
                            } rounded-lg cursor-pointer`}>
                              <input
                                type="radio"
                                value="email"
                                checked={recoveryMethod === 'email'}
                                onChange={() => setRecoveryMethod('email')}
                                className="sr-only"
                              />
                              <span>Email</span>
                            </label>
                            <label className={`flex items-center justify-center p-3 border ${
                              recoveryMethod === 'uniqueId' ? 'border-primary bg-primary/10' : 'border-secondary/40'
                            } rounded-lg cursor-pointer`}>
                              <input
                                type="radio"
                                value="uniqueId"
                                checked={recoveryMethod === 'uniqueId'}
                                onChange={() => setRecoveryMethod('uniqueId')}
                                className="sr-only"
                              />
                              <span>Unique ID</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm mb-2">
                            {recoveryMethod === 'email' ? 'Email Address' : 'Unique ID'}
                          </label>
                          <input
                            {...recoveryForm.register('identifier')}
                            className="w-full bg-darkBg border border-secondary/40 rounded-md p-3"
                            placeholder={recoveryMethod === 'email' ? 'Enter your email' : 'Enter your unique ID'}
                          />
                        </div>
                        <GradientButton type="submit" disabled={loading}>
                          Recover Account
                        </GradientButton>
                      </form>
                    </ThemeCard>
                  </TabsContent>
                </Tabs>
              )}
            </div>

            <div className="hidden md:flex flex-col justify-center items-center">
              <div className="bg-darkBg/40 p-8 rounded-2xl border border-primary/20 backdrop-blur-sm">
                <div className="flex justify-center mb-8">
                  <img 
                    src="https://bitcoiners.africa/wp-content/uploads/2025/04/ASHA-WOC.png" 
                    alt="Asha" 
                    className="h-64 object-contain"
                  />
                </div>
                <ThemeHeading className="mb-4 text-center">Explore the World of Bitcoin with Asha</ThemeHeading>
                <p className="text-lightText/80 text-center mb-6">
                  Join Asha on an educational journey through the realms of Bitcoin and discover its 
                  revolutionary potential in Africa and beyond.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-lightText/90">
                    <span className="text-primary mr-2">✓</span> Interactive learning through stories
                  </li>
                  <li className="flex items-center text-lightText/90">
                    <span className="text-primary mr-2">✓</span> Earn badges and track progress
                  </li>
                  <li className="flex items-center text-lightText/90">
                    <span className="text-primary mr-2">✓</span> No KYC required
                  </li>
                  <li className="flex items-center text-lightText/90">
                    <span className="text-primary mr-2">✓</span> Learn at your own pace
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeContainer>
  );
}