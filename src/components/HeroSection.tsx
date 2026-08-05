import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { heroRoseFarmBgImg } from '../data/roses';

interface HeroSectionProps {
  onOpenEnquire: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquire }) => {
  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[75vh] pt-10 pb-16 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32 overflow-hidden">
      
      {/* Background Image of Rose Farm Greenhouse */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroRoseFarmBgImg}
          alt="Estelle Farms Rose Farm Greenhouse"
          className="w-full h-full object-cover object-center scale-105 opacity-100 filter brightness-100 saturate-110"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#FAF2F0]/10" />
      </div>

      {/* Subtle Background Accent Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F3DCD9]/30 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E8C5C0]/20 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow location badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#EFE0DC]/90 backdrop-blur-sm text-[#786461] text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase mb-6 sm:mb-8 border border-[#E2CDC9]"
        >
          <span className="w-2 h-2 rounded-full bg-[#C52828] animate-pulse" />
          <span>ESTELLE FARMS • KARERA, MADHYA PRADESH</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif-display text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-[#1C1917] leading-[1.1] mb-6 sm:mb-8"
        >
          Grown with <span className="font-serif-cormorant italic font-normal text-[#C52828]">love</span>,<br className="hidden sm:inline" />
          {' '}cut with <span className="font-serif-cormorant italic font-normal text-[#C52828]">science</span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans-body text-sm sm:text-lg md:text-xl text-[#5A4E4B] max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10 px-2"
        >
          A boutique rose farm where a biotechnologist&apos;s precision grows five exceptional varieties — cut fresh, built to last, grown with love.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full max-w-md sm:max-w-none mx-auto"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToCollection}
            className="w-full sm:w-auto bg-[#1C1917] hover:bg-[#383330] text-white font-semibold text-xs tracking-[0.2em] uppercase px-7 py-3.5 sm:py-4 rounded-full transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>MEET THE ROSES</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 text-[#C52828]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenEnquire}
            className="w-full sm:w-auto bg-[#C52828] hover:bg-[#A31D1D] text-white font-semibold text-xs tracking-[0.2em] uppercase px-7 py-3.5 sm:py-4 rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>ENQUIRE NOW</span>
          </motion.button>
        </motion.div>

        {/* Social handle tag */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[10px] sm:text-[11px] tracking-[0.25em] font-semibold uppercase text-[#9C8A87] font-mono"
        >
          @ESTELLEFARMS
        </motion.div>

      </div>
    </section>
  );
};
