import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Clipboard, Copy, Check } from 'lucide-react';

interface UserIdRecoveryProps {
  userId: string;
  onClose?: () => void;
}

export function UserIdRecovery({ userId, onClose }: UserIdRecoveryProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(userId);
      setCopied(true);
      toast({
        title: "User ID copied!",
        description: "Your unique recovery ID has been copied to clipboard.",
        duration: 3000,
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy your ID manually by selecting and copying the text.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="bg-darkBg/95 border border-secondary/20 rounded-lg p-6 max-w-md w-full">
      <div className="flex items-center gap-2 mb-4">
        <Clipboard className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold text-white">Your Recovery ID</h3>
      </div>
      
      <div className="mb-6">
        <p className="text-lightText/80 mb-4">
          This is your unique Bitcoin Quest ID. Store it safely! You'll need it to recover your account if you forget your password.
        </p>
        
        <div className="rounded-md border border-secondary/30 p-4 bg-darkBg mb-4">
          <Label htmlFor="userId" className="block mb-2 text-sm text-lightText/70">Your Unique ID</Label>
          <div className="flex gap-2">
            <Input 
              id="userId"
              value={userId}
              readOnly
              className="flex-1 bg-darkBg border-secondary/30 text-black font-mono text-sm font-bold"
            />
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleCopyToClipboard}
              className="shrink-0"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        <div className="bg-primary/10 border border-primary/30 rounded p-3 text-sm text-primary">
          <strong>Important:</strong> Screenshot or write down this ID. It's your only way to recover your account!
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button 
          variant="default" 
          onClick={onClose}
        >
          I've Saved My ID
        </Button>
      </div>
    </div>
  );
}