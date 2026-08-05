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
    <section id="hero" className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 md:pt-28 md:pb-36 overflow-hidden">
      
      {/* Background Image of Sunset Rose Farm */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroRoseFarmBgImg} 
          alt="Estelle Farms Sunset Rose Field" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter saturate-110 brightness-100 transform transition-transform duration-1000"
        />
        {/* Dark gradient overlay for text legibility while keeping the vibrant sunset flower field 100% visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF2F0] via-black/45 to-black/60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow location badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8 border border-white/30 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF4D4D] animate-pulse" />
          <span>ESTELLE FARMS • KARERA, MADHYA PRADESH</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-md"
        >
          Grown with <span className="font-serif-cormorant italic font-normal text-[#FF8A8A]">love</span>,<br className="hidden sm:inline" />
          {' '}cut with <span className="font-serif-cormorant italic font-normal text-[#FF8A8A]">science</span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans-body text-base sm:text-lg md:text-xl text-stone-100 max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10 px-2 drop-shadow"
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
            className="w-full sm:w-auto bg-white hover:bg-stone-100 text-[#1C1917] font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>MEET THE ROSES</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 text-[#C52828]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenEnquire}
            className="w-full sm:w-auto bg-[#C52828] hover:bg-[#A31D1D] text-white font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
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
          className="text-[10px] sm:text-[11px] tracking-[0.25em] font-semibold uppercase text-stone-200/90 font-mono"
        >
          @ESTELLEFARMS
        </motion.div>

      </div>
    </section>
  );
};
