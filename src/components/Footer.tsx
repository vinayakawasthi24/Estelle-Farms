import React from 'react';
import { estelleLogoImg } from '../data/roses';

interface FooterProps {
  onOpenEnquire: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquire }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF2F0] py-12 sm:py-16 border-t border-[#383330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#383330]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden shrink-0">
                <img 
                  src={estelleLogoImg} 
                  alt="Estelle Farms Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                  Estelle <span className="font-serif-cormorant italic font-normal text-[#E25C5C]">Farms</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#A89895] mt-1">
                  Boutique Rose Farm
                </span>
              </div>
            </div>
            <p className="font-sans-body text-xs sm:text-sm text-[#A89895] leading-relaxed max-w-sm">
              Cultivating premium stems in Karera, Madhya Pradesh with scientific rigor and floral devotion. Supplying luxury florists, events, and wholesale partners.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#C52828]">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D6C7C4]">
              <li>
                <button 
                  onClick={() => scrollToSection('ethos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Ethos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('collection')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Behind Blooms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Direct Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#C52828]">
              FARM LOCATION &amp; HELPLINE
            </div>
            <p className="font-sans-body text-xs sm:text-sm text-[#D6C7C4] leading-relaxed">
              Karera, Madhya Pradesh • India
            </p>
            <p className="font-sans-body text-xs sm:text-sm text-[#D6C7C4]">
              Direct Line: <a href="tel:+917715006066" className="text-white hover:underline font-medium">+91 77150 06066</a>
            </p>
            <button
              onClick={onOpenEnquire}
              className="mt-2 inline-block bg-[#C52828] hover:bg-[#A31D1D] text-white font-semibold text-[10px] sm:text-xs tracking-[0.18em] uppercase px-5 py-2.5 rounded-full transition-all shadow-sm cursor-pointer"
            >
              SUBMIT ENQUIRY
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-[#8C7A77]">
          <div>
            &copy; {new Date().getFullYear()} Estelle Farms. All rights reserved.
          </div>
          <div>
            Handcrafted with precision in Karera, MP
          </div>
        </div>
      </div>
    </footer>
  );
};
