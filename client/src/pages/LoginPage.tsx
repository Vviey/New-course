import { useLocation } from 'wouter';
import { ThemeContainer, ThemeCard, ThemeHeading, GradientButton } from '@/components/ui/theme';
import { useAuth } from '@/context/AuthContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required')
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const { login, loading } = useAuth();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    const success = await login(data.username, data.password);
    if (success) {
      setLocation('/');
    }
  };

  return (
    <ThemeContainer>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
        <ThemeCard className="max-w-md w-full">
          <div className="text-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1602928309809-655cb7b55f7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
              alt="Coin logo" 
              className="w-20 h-20 mx-auto rounded-full object-cover glow mb-4"
            />
            <ThemeHeading className="mb-2">Continue Your Journey</ThemeHeading>
            <p className="text-lightText/80">Return to Asha's world of discovery</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            
            <div className="pt-2">
              <GradientButton type="submit" disabled={loading}>
                Return to the Realms
              </GradientButton>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <button 
              onClick={() => setLocation('/signup')} 
              className="text-secondary hover:text-primary text-sm"
            >
              Need a new ID? Sign up
            </button>
          </div>
        </ThemeCard>
      </div>
    </ThemeContainer>
  );
}
