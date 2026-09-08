import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus.ts';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div 
      role="status"
      aria-live="polite"
      id="offline-indicator"
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/90 text-slate-950 font-medium text-xs shadow-lg shadow-black/50 backdrop-blur-md border border-amber-300/40 animate-in fade-in slide-in-from-top-3 duration-300"
    >
      <WifiOff className="w-3.5 h-3.5 flex-shrink-0" />
      <span>Offline Mode — Cached shell is active</span>
    </div>
  );
};
