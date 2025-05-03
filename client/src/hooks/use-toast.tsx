// Adapted from shadcn/ui toast component
// This file is used to create a toast notification system using React context

import * as React from "react";
import { Toast } from "@/components/ui/toast";
import {
  useToast as useShadcnToast,
  type ToastProps,
  type ToastActionElement,
} from "@/components/ui/use-toast";

export type ToastOptions = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: "default" | "destructive";
  duration?: number;
};

// Use the shadcn toast hook but with a simpler interface
export function useToast() {
  const { toast: shadcnToast, ...rest } = useShadcnToast();

  // Wrapper function to simplify the toast API
  function toast({
    title,
    description,
    action,
    variant,
    duration = 5000,
  }: ToastOptions) {
    return shadcnToast({
      title,
      description,
      action,
      variant,
      duration,
    });
  }

  return {
    toast,
    ...rest,
  };
}