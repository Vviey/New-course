import { useState } from 'react';
import { useLocation } from 'wouter';
import { ThemeContainer, ThemeCard, ThemeHeading, GradientButton } from '@/components/ui/theme';
import { useAuth } from '@/context/AuthContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(30),
  email: z.string().email('Invalid email format').optional().or(z.literal('')),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

type FormValues = z.infer<typeof formSchema>;

export default function SignupPage() {
  const [, setLocation] = useLocation();
  const { signup, loading } = useAuth();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    const success = await signup(data.username, data.password, data.email || undefined);
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
                placeholder="For recovery only"
              />
              <p className="mt-1 text-xs text-lightText/60">We don't require personal information to start</p>
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
              <p className="mt-3 text-center text-xs text-lightText/60">Your unique ID will be created automatically</p>
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
        
        <div className="mt-8 max-w-md text-center text-sm text-lightText/60">
          <p>Embark on a journey through the history and future of money, guided by Asha and the wisdom of Odu.</p>
        </div>
      </div>
    </ThemeContainer>
  );
}
