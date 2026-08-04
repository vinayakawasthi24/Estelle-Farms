import React from 'react';
import { Wifi, Signal, Battery, Lock, RefreshCw, Share, BookOpen } from 'lucide-react';
import { MobileProvider } from '../context/MobileContext';

interface PhoneMockupProps {
  children: React.ReactNode;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center py-6 px-2 min-h-screen bg-[#121A20]/40">
      
      {/* iPhone 15 Pro Hardware Outer Shell */}
      <div className="relative w-[380px] sm:w-[410px] h-[830px] bg-stone-900 rounded-[52px] p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border-4 border-stone-700/80 ring-1 ring-stone-900/50 flex flex-col overflow-hidden">
        
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-950 border border-blue-900" />
        </div>

        {/* Mobile Screen Container */}
        <div className="w-full h-full bg-[#FAF2F0] rounded-[40px] overflow-hidden flex flex-col relative border border-stone-800/40">
          
          {/* iOS Top Status Bar */}
          <div className="bg-[#FAF2F0]/90 backdrop-blur-md px-6 pt-3 pb-1 flex items-center justify-between text-[#1C1917] text-xs font-semibold shrink-0 z-40">
            <span>12:55</span>
            <div className="flex items-center gap-1.5 text-stone-800">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4 fill-stone-800" />
            </div>
          </div>

          {/* Browser Address Bar */}
          <div className="bg-[#EFE0DC] px-4 py-2 border-b border-[#E2CDC9] flex items-center justify-between gap-2 shrink-0 z-40 text-xs">
            <div className="bg-white/90 rounded-full px-3 py-1 flex-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-stone-700 shadow-inner">
              <Lock className="w-3 h-3 text-stone-500" />
              <span className="truncate">estellefarms.com</span>
            </div>
            <RefreshCw className="w-3.5 h-3.5 text-stone-600" />
          </div>

          {/* Scrollable Website Content Area */}
          <div className="flex-1 overflow-y-auto scroll-smooth">
            <MobileProvider isMobileOverride={true}>
              {children}
            </MobileProvider>
          </div>

          {/* Mobile Browser Bottom Bar */}
          <div className="bg-[#EFE0DC]/90 backdrop-blur-md px-6 py-2 border-t border-[#E2CDC9] flex items-center justify-between text-stone-600 shrink-0 z-40">
            <BookOpen className="w-4 h-4" />
            <Share className="w-4 h-4" />
            <div className="w-4 h-4 rounded border border-stone-600 flex items-center justify-center text-[9px] font-bold">1</div>
          </div>

          {/* iPhone Home Indicator Bar */}
          <div className="bg-[#EFE0DC] pt-1 pb-2 flex justify-center shrink-0">
            <div className="w-32 h-1 bg-stone-800 rounded-full" />
          </div>

        </div>

      </div>

    </div>
  );
};

