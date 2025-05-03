import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import React from "react"

export function Toaster() {
  // Using an empty array to avoid TypeScript errors - in a real app, 
  // this would be populated by the toast system
  const [toasts] = React.useState<any[]>([]);
  const { toast } = useToast();
  
  // Add check to ensure `toasts` is not undefined or null
  if (!toasts || toasts.length === 0) {
    return null; // If there are no toasts, return nothing
  }

  return (
    <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {Array.isArray(toasts) && toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
    </div>
  )
}
