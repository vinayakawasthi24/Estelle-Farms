import React, { useState } from 'react';
import { RoseVariety } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EthosSection } from './components/EthosSection';
import { RoseCollection } from './components/RoseCollection';
import { FounderStorySection } from './components/FounderStorySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { MobileProvider } from './context/MobileContext';

export default function App() {
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

  return (
    <MobileProvider>
      <div className="min-h-screen bg-[#FAF2F0] text-[#1C1917] font-sans-body">
        <Header onOpenEnquire={handleOpenEnquire} />
        <main>
          <HeroSection onOpenEnquire={handleOpenEnquire} />
          <EthosSection />
          <RoseCollection onSelectRoseForEnquiry={handleSelectRoseForEnquiry} />
          <FounderStorySection />
          <ContactSection onOpenEnquire={handleOpenEnquire} />
        </main>
        <Footer onOpenEnquire={handleOpenEnquire} />

        {/* Enquiry Concierge Modal Drawer */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
          selectedRose={selectedRose}
        />
      </div>
    </MobileProvider>
  );
}
