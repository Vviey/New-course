import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/hooks/use-auth";
import { OriginsBackground } from "@/components/ui/origins-background";
import { Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import { originTheme } from "@/lib/realm-themes";

// Login form schema
const loginFormSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

// Signup form schema
const signupFormSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.string().email("Please enter a valid email").optional(),
});

type SignupFormValues = z.infer<typeof signupFormSchema>;

function LoginForm() {
  const { loginMutation } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 font-lora text-amber-800">Login to Your Journey</h2>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-amber-900" htmlFor="username">
          Username
        </label>
        <input
          {...register("username")}
          className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          id="username"
          placeholder="Your username"
        />
        {errors.username && (
          <p className="text-red-600 text-sm">{errors.username.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-amber-900" htmlFor="password">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          id="password"
          placeholder="Your password"
        />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="btn-origins w-full flex items-center justify-center gap-2"
      >
        {loginMutation.isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> 
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
}

function SignupForm() {
  const { registerMutation } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    registerMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 font-lora text-amber-800">Begin Your Adventure</h2>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-amber-900" htmlFor="signup-username">
          Username
        </label>
        <input
          {...register("username")}
          className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          id="signup-username"
          placeholder="Choose a username"
        />
        {errors.username && (
          <p className="text-red-600 text-sm">{errors.username.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-amber-900" htmlFor="signup-email">
          Email (Optional)
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          id="signup-email"
          placeholder="Your email (optional)"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-amber-900" htmlFor="signup-password">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          id="signup-password"
          placeholder="Create a password"
        />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={registerMutation.isPending}
        className="btn-origins w-full flex items-center justify-center gap-2"
      >
        {registerMutation.isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> 
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </button>
    </form>
  );
}

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const theme = originTheme;

  // Redirect if user is already logged in
  if (user) {
    setLocation("/");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundColor: theme.colors.backgroundLight }}>
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-0 shadow-xl rounded-xl overflow-hidden my-8">
        {/* Left side - Auth forms */}
        <div className="bg-white p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 font-lora text-amber-800">Bitcoin Quest</h1>
            <p className="text-amber-700">Asha's Journey Through the Realms of Money</p>
          </div>

          <div className="flex mb-6 border-b border-amber-200">
            <button
              className={`py-3 px-6 ${
                activeTab === "login"
                  ? "border-b-2 border-amber-500 text-amber-800 font-medium"
                  : "text-amber-600 hover:text-amber-800"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`py-3 px-6 ${
                activeTab === "signup"
                  ? "border-b-2 border-amber-500 text-amber-800 font-medium"
                  : "text-amber-600 hover:text-amber-800"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {activeTab === "login" ? <LoginForm /> : <SignupForm />}
        </div>

        {/* Right side - Hero Banner */}
        <OriginsBackground patternType="adinkra" opacity={0.1} withGradient roundedCorners={false}>
          <div className="text-white p-8 md:p-12 flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-lora">
              Begin Your Bitcoin Journey
            </h2>
            <p className="text-lg mb-8 md:max-w-md">
              Explore the origins of money, discover the power of Bitcoin, and learn how it's transforming Africa through an interactive adventure.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Interactive story-driven learning experience</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Complete missions and earn rewards</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Available offline for learning anywhere</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Learn without KYC or personal information</span>
              </li>
            </ul>
          </div>
        </OriginsBackground>
      </div>
    </div>
  );
}