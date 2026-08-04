import React from 'react';
import { ETHOS_PROMISES } from '../data/roses';
import { motion } from 'motion/react';
import { useMobileView } from '../context/MobileContext';

export const EthosSection: React.FC = () => {
  const { isMobile } = useMobileView();

  return (
    <section id="ethos" className="py-10 sm:py-20 md:py-28 bg-[#FAF2F0] border-t border-[#E8D8D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-16"
        >
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C7A77] block mb-2 sm:mb-3">
            THE ETHOS
          </span>
          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1917] max-w-2xl leading-tight">
            Three quiet promises in every stem.
          </h2>
        </motion.div>

        {/* Ethos Cards Stack / Grid */}
        <div className={isMobile ? "flex flex-col space-y-5 w-full" : "grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-14 w-full"}>
          {ETHOS_PROMISES.map((promise, index) => (
            <motion.div
              key={promise.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className={`flex flex-col bg-[#F6ECE8]/90 rounded-2xl border border-[#E8D8D5] hover:border-[#C52828]/40 transition-all duration-300 hover:shadow-md w-full ${
                isMobile ? 'p-5 sm:p-6' : 'p-6 sm:p-8'
              }`}
            >
              <div className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#C52828] mb-2 sm:mb-4 leading-none">
                {promise.number}
              </div>
              <h3 className="font-serif-display text-lg sm:text-xl md:text-2xl font-semibold text-[#1C1917] mb-2 leading-snug">
                {promise.title}
              </h3>
              <p className="font-sans-body text-xs sm:text-sm md:text-base text-[#5A4E4B] leading-relaxed">
                {promise.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

