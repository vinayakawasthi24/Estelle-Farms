import React, { useState } from 'react';
import { ROSE_COLLECTION } from '../data/roses';
import { RoseVariety } from '../types';
import { Sparkles, Ruler, Flower, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useMobileView } from '../context/MobileContext';

interface RoseCollectionProps {
  onSelectRoseForEnquiry: (rose: RoseVariety) => void;
}

export const RoseCollection: React.FC<RoseCollectionProps> = ({ onSelectRoseForEnquiry }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { isMobile } = useMobileView();

  const filteredRoses = activeFilter === 'all' 
    ? ROSE_COLLECTION 
    : ROSE_COLLECTION.filter(r => r.id === activeFilter);

  return (
    <section id="collection" className="py-10 sm:py-20 md:py-32 bg-[#FAF2F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-14"
        >
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C7A77] mb-2 sm:mb-3">
            THE COLLECTION • FIVE VARIETIES
          </div>
          <h2 className="font-serif-display text-2xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1C1917] mb-2 sm:mb-4">
            A quintet of <span className="font-serif-cormorant italic font-normal text-[#C52828]">roses</span>.
          </h2>
          <p className="font-sans-body text-xs sm:text-base md:text-lg text-[#5A4E4B] max-w-xl leading-relaxed">
            Each rose has been chosen as it grows — bud, stem and all.
          </p>
        </motion.div>

        {/* Variety Filter Tabs (Horizontal Scrollable on Mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-12 pb-3 overflow-x-auto no-scrollbar border-b border-[#E8D8D5]">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs tracking-wider uppercase font-semibold transition-all shrink-0 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#C52828] text-white shadow-sm scale-105'
                : 'bg-[#EFE0DC] text-[#5A4E4B] hover:bg-[#E2CDC9]'
            }`}
          >
            All 5 Varieties
          </button>
          {ROSE_COLLECTION.map((rose) => (
            <button
              key={rose.id}
              onClick={() => setActiveFilter(rose.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs tracking-wider uppercase font-semibold transition-all shrink-0 cursor-pointer ${
                activeFilter === rose.id
                  ? 'bg-[#C52828] text-white shadow-sm scale-105'
                  : 'bg-[#EFE0DC] text-[#5A4E4B] hover:bg-[#E2CDC9]'
              }`}
            >
              {rose.name}
            </button>
          ))}
        </div>

        {/* Rose Cards List */}
        <div className="space-y-6 sm:space-y-16 md:space-y-24">
          <AnimatePresence mode="wait">
            {filteredRoses.map((rose, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={rose.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`bg-[#F6ECE8] rounded-2xl sm:rounded-3xl border border-[#E8D8D5] flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-4 sm:gap-10 lg:gap-14 items-center transition-all duration-300 hover:shadow-lg ${
                    isMobile ? 'p-4 sm:p-6' : 'p-6 sm:p-10 md:p-12'
                  }`}
                >
                  {/* Image Box */}
                  <div className="w-full lg:w-1/2 overflow-hidden rounded-xl sm:rounded-2xl group relative bg-[#E2CDC9]/30 aspect-[4/3] sm:aspect-[4/3] lg:aspect-square">
                    <img
                      src={rose.image}
                      alt={rose.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#FAF2F0]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1917] border border-[#E8D8D5]">
                      {rose.tag}
                    </div>
                  </div>

                  {/* Info Content Box */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-3 sm:space-y-6">
                    <div>
                      <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#C52828] mb-1 sm:mb-2">
                        {rose.colorCategory}
                      </div>
                      <h3 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-semibold text-[#1C1917] mb-1.5 sm:mb-4">
                        {rose.name}
                      </h3>
                      <p className="font-sans-body text-xs sm:text-base text-[#5A4E4B] leading-relaxed mb-3 sm:mb-6">
                        {rose.description}
                      </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-6 border-y border-[#E2CDC9]">
                      <div>
                        <div className="text-[9px] sm:text-[10px] tracking-[0.18em] font-semibold text-[#8C7A77] uppercase mb-0.5 flex items-center gap-1">
                          <Ruler className="w-3 h-3 text-[#C52828]" />
                          STEM HEIGHT
                        </div>
                        <div className="font-serif-display text-lg sm:text-3xl font-normal text-[#1C1917]">
                          {rose.stemHeight}
                        </div>
                      </div>

                      <div>
                        <div className="text-[9px] sm:text-[10px] tracking-[0.18em] font-semibold text-[#8C7A77] uppercase mb-0.5 flex items-center gap-1">
                          <Flower className="w-3 h-3 text-[#C52828]" />
                          BUD SIZE
                        </div>
                        <div className="font-serif-display text-lg sm:text-3xl font-normal text-[#1C1917]">
                          {rose.budSize}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelectRoseForEnquiry(rose)}
                        className="w-full sm:w-auto bg-[#C52828] hover:bg-[#A31D1D] text-white font-semibold text-[10px] sm:text-xs tracking-[0.18em] uppercase px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Enquire for {rose.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

