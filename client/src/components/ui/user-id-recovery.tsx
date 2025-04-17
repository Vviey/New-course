import { useState, useRef } from 'react';
import { GradientButton } from './theme';

interface UserIdRecoveryProps {
  userId: string;
  onClose: () => void;
}

export function UserIdRecovery({ userId, onClose }: UserIdRecoveryProps) {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-4 bg-amber-900/20 border border-amber-600/20 rounded-lg text-amber-100">
        <p className="font-medium mb-2">⚠️ Important</p>
        <p className="text-sm">
          Please save your unique ID in a secure location. You will need it to recover your account if you forget your password.
        </p>
      </div>

      <div className="relative">
        <label htmlFor="userId" className="block text-sm font-medium mb-2">
          Your Unique Recovery ID
        </label>
        <div className="flex">
          <input
            ref={inputRef}
            type="text"
            id="userId"
            readOnly
            value={userId}
            className="w-full bg-darkBg border border-primary/40 rounded-l-md p-3 text-lightText focus:outline-none"
          />
          <button
            type="button"
            onClick={copyToClipboard}
            className={`px-4 flex items-center rounded-r-md ${
              copied ? 'bg-green-700' : 'bg-primary/80 hover:bg-primary'
            }`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-lightText/90 text-sm">
          Have you saved your ID? You can:
        </p>
        <ul className="text-sm text-lightText/80 space-y-1">
          <li>• Save it to your password manager</li>
          <li>• Take a screenshot</li>
          <li>• Write it down somewhere safe</li>
          <li>• Email it to yourself</li>
        </ul>
      </div>

      <div className="pt-2">
        <GradientButton onClick={onClose}>
          I've Saved My ID - Continue to My Journey
        </GradientButton>
      </div>
    </div>
  );
}