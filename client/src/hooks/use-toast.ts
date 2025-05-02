// Simplified mock toast hook
type ToastProps = {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
};

export function toast(props: ToastProps) {
  console.log('Toast:', props.title, props.description);
  // In a real app, this would show a toast notification
}

export function useToast() {
  return { toast };
}