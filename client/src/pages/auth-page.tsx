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

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Username
        </label>
        <input
          id="username"
          {...register("username")}
          className="w-full p-2 rounded-md border bg-amber-950/30 border-amber-700 text-amber-100"
        />
        {errors.username && (
          <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="w-full p-2 rounded-md border bg-amber-950/30 border-amber-700 text-amber-100"
        />
        {errors.password && (
          <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full bg-amber-600 hover:bg-amber-500 text-white py-2 rounded-md font-medium flex items-center justify-center"
      >
        {loginMutation.isPending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
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

  const onSubmit = (data: SignupFormValues) => {
    registerMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Username
        </label>
        <input
          id="username"
          {...register("username")}
          className="w-full p-2 rounded-md border bg-amber-950/30 border-amber-700 text-amber-100"
        />
        {errors.username && (
          <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email (optional)
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full p-2 rounded-md border bg-amber-950/30 border-amber-700 text-amber-100"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="w-full p-2 rounded-md border bg-amber-950/30 border-amber-700 text-amber-100"
        />
        {errors.password && (
          <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={registerMutation.isPending}
        className="w-full bg-amber-600 hover:bg-amber-500 text-white py-2 rounded-md font-medium flex items-center justify-center"
      >
        {registerMutation.isPending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          "Create Account"
        )}
      </button>
    </form>
  );
}

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [, setLocation] = useLocation();
  const { user, isLoading } = useAuth();

  // If already logged in, redirect to home
  if (user) {
    setLocation("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-800 to-amber-950 flex flex-col md:flex-row">
      {/* Form section */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2 text-amber-100">
            Welcome to Asha's Journey
          </h1>
          <p className="text-amber-300 mb-8">
            {activeTab === "login"
              ? "Sign in to continue your adventure"
              : "Create an account to start your journey"}
          </p>

          <div className="mb-6">
            <div className="flex border-b border-amber-700 mb-6">
              <button
                onClick={() => setActiveTab("login")}
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === "login"
                    ? "text-amber-100 border-b-2 border-amber-500"
                    : "text-amber-400"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === "signup"
                    ? "text-amber-100 border-b-2 border-amber-500"
                    : "text-amber-400"
                }`}
              >
                Create Account
              </button>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
              </div>
            ) : activeTab === "login" ? (
              <LoginForm />
            ) : (
              <SignupForm />
            )}
          </div>

          <div className="mt-6 text-sm text-amber-400">
            <p>
              No personal information is stored. Your user ID is your identity for
              this application.
            </p>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className="hidden md:flex md:w-1/2 bg-amber-900 items-center justify-center relative overflow-hidden">
        <OriginsBackground />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-amber-950/90 to-transparent">
          <h2 className="text-4xl font-bold mb-4 text-amber-100">
            Discover the Origins of Money
          </h2>
          <p className="text-xl text-amber-300 max-w-lg">
            Join Asha on an epic journey through time as you explore the
            fascinating history and fundamentals of money across different
            civilizations and eras.
          </p>
          <div className="mt-6 space-y-4 max-w-md">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-amber-200">
                  Interactive Learning
                </h3>
                <p className="text-sm text-amber-300">
                  Engage with historical simulations and hands-on activities that
                  make learning about money intuitive and fun.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.747 29.747 0 00-2.455 1.45.75.75 0 10.811 1.258A30.565 30.565 0 016 12.978V11.46zm6.216 1.885a30.565 30.565 0 011.642-.892V11.46a29.747 29.747 0 00-2.456 1.45.75.75 0 00.814 1.258z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-amber-200">
                  Earn Knowledge & Rewards
                </h3>
                <p className="text-sm text-amber-300">
                  Complete missions to earn badges and unlock new realms as you
                  build your understanding of monetary systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}