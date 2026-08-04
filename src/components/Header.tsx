import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { estelleLogoImg } from '../data/roses';
import { useMobileView } from '../context/MobileContext';

interface HeaderProps {
  onOpenEnquire: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquire }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile } = useMobileView();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 bg-[#FAF2F0]/95 backdrop-blur-md border-b border-[#E8D8D5]/80 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo with exact uploaded image */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#E8D8D5] p-1 shadow-sm flex items-center justify-center overflow-hidden shrink-0"
          >
            <img 
              src={estelleLogoImg} 
              alt="Estelle Farms Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="flex flex-col">
            <span className="font-serif-display text-lg sm:text-2xl font-bold tracking-tight text-[#1C1917] leading-none flex items-center gap-1">
              Estelle <span className="font-serif-cormorant italic font-normal text-[#C52828]">Farms</span>
            </span>
            <span className="text-[8px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8C7A77] mt-0.5">
              Boutique Rose Farm
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] font-semibold text-[#5A4E4B] uppercase">
            <button 
              onClick={() => scrollToSection('ethos')}
              className="hover:text-[#C52828] transition-colors py-1 cursor-pointer"
            >
              The Ethos
            </button>
            <button 
              onClick={() => scrollToSection('collection')}
              className="hover:text-[#C52828] transition-colors py-1 cursor-pointer"
            >
              The Collection
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="hover:text-[#C52828] transition-colors py-1 cursor-pointer"
            >
              Behind Blooms
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#C52828] transition-colors py-1 cursor-pointer"
            >
              Contact
            </button>
          </nav>
        )}

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenEnquire}
            className="bg-[#C52828] hover:bg-[#A31D1D] text-white font-semibold text-[10px] sm:text-xs tracking-[0.15em] uppercase px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>ENQUIRE</span>
          </motion.button>

          {isMobile ? (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#1C1917] hover:bg-[#E8D8D5]/50 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          ) : (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-[#1C1917] hover:bg-[#E8D8D5]/50 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#FAF2F0] border-b border-[#E8D8D5] px-5 py-5 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7A77] pb-2 border-b border-[#E8D8D5]">
              Karera, Madhya Pradesh • India
            </div>
            <nav className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-widest text-[#1C1917]">
              <button
                onClick={() => scrollToSection('ethos')}
                className="text-left py-1.5 hover:text-[#C52828] transition-colors"
              >
                01. The Ethos
              </button>
              <button
                onClick={() => scrollToSection('collection')}
                className="text-left py-1.5 hover:text-[#C52828] transition-colors"
              >
                02. The Quintet Collection
              </button>
              <button
                onClick={() => scrollToSection('story')}
                className="text-left py-1.5 hover:text-[#C52828] transition-colors"
              >
                03. Behind The Blooms
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-1.5 hover:text-[#C52828] transition-colors"
              >
                04. Contact &amp; Inquiries
              </button>
            </nav>
            <div className="pt-3 border-t border-[#E8D8D5] flex items-center justify-between text-xs text-[#5A4E4B]">
              <a href="tel:+917715006066" className="flex items-center gap-1.5 text-[#C52828] font-bold text-xs">
                <PhoneCall className="w-3.5 h-3.5" />
                +91 77150 06066
              </a>
              <span className="text-[9px] uppercase tracking-wider text-[#8C7A77]">@ESTELLEFARMS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

