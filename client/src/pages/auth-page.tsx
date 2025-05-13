import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, Eye, EyeOff } from "lucide-react";

// Form schemas
const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(50),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(50),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, register, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  
  // If user is authenticated, redirect to home page
  if (isAuthenticated) {
    setTimeout(() => {
      setLocation("/home");
    }, 0);
    
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Redirecting to home page...</span>
      </div>
    );
  }
  
  // Login form
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  
  // Register form
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  
  const onLoginSubmit = (data: LoginFormValues) => {
    setIsSubmitting(true);
    try {
      login(data.username, data.password);
      // No need to redirect here, the AuthContext will handle it
      // The authentication flow will be automatically redirected to "/"
      // which redirects to "/map" if authenticated
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const onRegisterSubmit = (data: RegisterFormValues) => {
    setIsSubmitting(true);
    try {
      // Remove confirmPassword as it's not needed
      const { confirmPassword, ...registerData } = data;
      register(registerData.username, registerData.password, registerData.email || undefined);
      // No need to redirect here, the AuthContext will handle it
      // The authentication flow will be automatically redirected to "/"
      // which redirects to "/map" if authenticated
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Authentication Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {isLogin ? "Welcome Back" : "Join Asha's Journey"}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin
                ? "Sign in to continue your educational journey through Bitcoin" 
                : "Register and begin your adventure in learning Bitcoin"}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex rounded-md border shadow-sm p-1 bg-gray-100">
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${isLogin ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${!isLogin ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          {isLogin ? (
            /* Login Form */
            <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="username">
                  Username
                </label>
                <input
                  {...loginForm.register("username")}
                  id="username"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your username"
                />
                {loginForm.formState.errors.username && (
                  <p className="text-sm text-red-500">{loginForm.formState.errors.username.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...loginForm.register("password")}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your password"
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-800"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <p className="text-sm text-red-500">{loginForm.formState.errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> : "Sign In"}
              </button>
            </form>
          ) : (
            /* Register Form */
            <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="register-username">
                  Username
                </label>
                <input
                  {...registerForm.register("username")}
                  id="register-username"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Choose a username"
                />
                {registerForm.formState.errors.username && (
                  <p className="text-sm text-red-500">{registerForm.formState.errors.username.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="register-email">
                  Email (optional)
                </label>
                <input
                  {...registerForm.register("email")}
                  id="register-email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your email address (for recovery)"
                />
                {registerForm.formState.errors.email && (
                  <p className="text-sm text-red-500">{registerForm.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="register-password">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...registerForm.register("password")}
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Create a password"
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-800"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {registerForm.formState.errors.password && (
                  <p className="text-sm text-red-500">{registerForm.formState.errors.password.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="register-confirm-password">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    {...registerForm.register("confirmPassword")}
                    id="register-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-800"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {registerForm.formState.errors.confirmPassword && (
                  <p className="text-sm text-red-500">{registerForm.formState.errors.confirmPassword.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> : "Create Account"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex-1 bg-gradient-to-br from-primary/80 to-primary-dark p-6 md:p-12 flex items-center justify-center text-white">
        <div className="max-w-md space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Embark on Asha's Journey</h2>
            <p className="mt-4 text-lg">
              Explore the story of money from its origins to the Bitcoin revolution.
              Join Asha as she navigates 7 distinct realms, each unfolding new knowledge about financial systems and cryptocurrency.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/30 flex items-center justify-center text-sm font-semibold">1</div>
              <div>
                <h3 className="font-semibold">Interactive Learning</h3>
                <p className="text-white/80 text-sm mt-1">
                  Engage with simulations and interactive challenges to understand complex concepts
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/30 flex items-center justify-center text-sm font-semibold">2</div>
              <div>
                <h3 className="font-semibold">African Perspectives</h3>
                <p className="text-white/80 text-sm mt-1">
                  Learn through the lens of African monetary history and its relevance to modern finance
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/30 flex items-center justify-center text-sm font-semibold">3</div>
              <div>
                <h3 className="font-semibold">Earn Knowledge Badges</h3>
                <p className="text-white/80 text-sm mt-1">
                  Track your progress and showcase your achievements as you master each realm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}