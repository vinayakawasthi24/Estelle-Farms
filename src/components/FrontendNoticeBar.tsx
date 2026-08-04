import React, { useState } from 'react';
import { Server, CheckCircle2, RefreshCw, X } from 'lucide-react';

export const FrontendNoticeBar: React.FC = () => {
  const [serverState, setServerState] = useState<'idle' | 'spinning' | 'active'>('idle');
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleWakeUp = () => {
    if (serverState === 'idle') {
      setServerState('spinning');
      setTimeout(() => {
        setServerState('active');
      }, 1500);
    }
  };

  return (
    <aside aria-label="Server Status" className="fixed bottom-0 inset-x-0 z-40 bg-[#121A20] text-white border-t border-slate-800 px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[11px] sm:text-xs">
        
        <div className="flex items-center gap-2 text-slate-300 font-sans-body truncate">
          <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
          <span className="truncate">
            Frontend Preview. Wake servers for live backend logic.
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleWakeUp}
            className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
              serverState === 'idle'
                ? 'bg-[#10B981]/20 hover:bg-[#10B981]/30 text-emerald-300 border border-emerald-500/30'
                : serverState === 'spinning'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-emerald-600 text-white shadow-sm'
            }`}
          >
            {serverState === 'idle' && (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Wake servers</span>
              </>
            )}

            {serverState === 'spinning' && (
              <>
                <RefreshCw className="w-3 h-3 animate-spin text-amber-300" />
                <span>Spinning...</span>
              </>
            )}

            {serverState === 'active' && (
              <>
                <CheckCircle2 className="w-3 h-3 text-white" />
                <span>Live</span>
              </>
            )}
          </button>

          <button 
            onClick={() => setDismissed(true)}
            className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Dismiss Notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
