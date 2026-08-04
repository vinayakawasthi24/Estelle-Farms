import React, { useState } from 'react';
import { ViewMode, RoseVariety } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EthosSection } from './components/EthosSection';
import { RoseCollection } from './components/RoseCollection';
import { FounderStorySection } from './components/FounderStorySection';
import { ContactSection } from './components/ContactSection';
import { EnquiryModal } from './components/EnquiryModal';
import { FrontendNoticeBar } from './components/FrontendNoticeBar';
import { DeviceSimulatorBar } from './components/DeviceSimulatorBar';
import { PhoneMockup } from './components/PhoneMockup';
import { MobileProvider } from './context/MobileContext';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');
  const [showSimulatorBar, setShowSimulatorBar] = useState(true);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedRose, setSelectedRose] = useState<RoseVariety | null>(null);

  const handleOpenEnquire = () => {
    setSelectedRose(null);
    setIsEnquiryOpen(true);
  };

  const handleSelectRoseForEnquiry = (rose: RoseVariety) => {
    setSelectedRose(rose);
    setIsEnquiryOpen(true);
  };

  // Reusable core Estelle Farms layout
  const MainWebsite = (
    <div className="min-h-screen bg-[#FAF2F0] text-[#1C1917] font-sans-body pb-16">
      <Header onOpenEnquire={handleOpenEnquire} />
      <main>
        <HeroSection onOpenEnquire={handleOpenEnquire} />
        <EthosSection />
        <RoseCollection onSelectRoseForEnquiry={handleSelectRoseForEnquiry} />
        <FounderStorySection />
        <ContactSection onOpenEnquire={handleOpenEnquire} />
      </main>
      <FrontendNoticeBar />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF2F0]">
      {/* Device Mode Selector Bar */}
      <DeviceSimulatorBar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        showBar={showSimulatorBar}
        onToggleShowBar={() => setShowSimulatorBar(!showSimulatorBar)}
      />

      {/* Mode 1: Full Desktop / Responsive View */}
      {viewMode === 'desktop' && (
        <MobileProvider>
          {MainWebsite}
        </MobileProvider>
      )}

      {/* Mode 2: Phone Mockup Frame View */}
      {viewMode === 'mobile' && (
        <PhoneMockup>
          {MainWebsite}
        </PhoneMockup>
      )}

      {/* Mode 3: Split Side-by-Side Comparison View */}
      {viewMode === 'split' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 bg-stone-900 min-h-screen">
          <div className="lg:col-span-7 bg-[#FAF2F0] rounded-2xl overflow-hidden shadow-2xl h-[85vh] overflow-y-auto border border-stone-700">
            <div className="bg-stone-800 text-stone-300 px-4 py-2 text-xs font-mono border-b border-stone-700 flex justify-between">
              <span>DESKTOP VIEW</span>
              <span>1920px Canvas</span>
            </div>
            <MobileProvider isMobileOverride={false}>
              {MainWebsite}
            </MobileProvider>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <PhoneMockup>
              {MainWebsite}
            </PhoneMockup>
          </div>
        </div>
      )}

      {/* Enquiry Concierge Modal Drawer */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        selectedRose={selectedRose}
      />
    </div>
  );
}

