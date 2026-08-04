import React from 'react';
import { ViewMode } from '../types';
import { Monitor, Smartphone, Columns2, Eye, EyeOff } from 'lucide-react';

interface DeviceSimulatorBarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  showBar: boolean;
  onToggleShowBar: () => void;
}

export const DeviceSimulatorBar: React.FC<DeviceSimulatorBarProps> = ({
  viewMode,
  onViewModeChange,
  showBar,
  onToggleShowBar,
}) => {
  if (!showBar) {
    return (
      <button
        onClick={onToggleShowBar}
        className="fixed top-24 right-4 z-50 bg-[#1C1917] text-white p-2.5 rounded-full shadow-xl hover:bg-[#383330] transition-transform hover:scale-105 cursor-pointer border border-white/20 flex items-center gap-2 text-xs font-semibold px-3"
        title="Show View Mode Switcher"
      >
        <Eye className="w-4 h-4 text-[#C52828]" />
        <span className="hidden sm:inline">Device View Switcher</span>
      </button>
    );
  }

  return (
    <div className="bg-[#1C1917] text-white border-b border-stone-800 px-4 py-2.5 z-50 sticky top-0 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-sans-body">
        
        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C52828]" />
          <span className="font-semibold tracking-wide">ESTELLE FARMS UI SIMULATOR</span>
          <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded uppercase font-mono">
            Desktop &amp; Phone Modes
          </span>
        </div>

        {/* View Mode Buttons */}
        <div className="flex items-center gap-1.5 bg-stone-900 p-1 rounded-xl border border-stone-800">
          <button
            onClick={() => onViewModeChange('desktop')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              viewMode === 'desktop'
                ? 'bg-[#C52828] text-white shadow-sm'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>

          <button
            onClick={() => onViewModeChange('mobile')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              viewMode === 'mobile'
                ? 'bg-[#C52828] text-white shadow-sm'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Phone View</span>
          </button>

          <button
            onClick={() => onViewModeChange('split')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              viewMode === 'split'
                ? 'bg-[#C52828] text-white shadow-sm'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Columns2 className="w-3.5 h-3.5" />
            <span>Split View</span>
          </button>
        </div>

        {/* Hide Switcher Button */}
        <button
          onClick={onToggleShowBar}
          className="text-stone-400 hover:text-white text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
          title="Minimize Switcher Bar"
        >
          <EyeOff className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Hide Bar</span>
        </button>

      </div>
    </div>
  );
};
