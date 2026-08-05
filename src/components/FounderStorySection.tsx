import React from 'react';
import { founderPortraitImg, farmTeamImg } from '../data/roses';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useMobileView } from '../context/MobileContext';

export const FounderStorySection: React.FC = () => {
  const { isMobile } = useMobileView();

  return (
    <section id="story" className="py-10 sm:py-20 md:py-32 bg-[#F6ECE8] border-t border-[#E8D8D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={isMobile ? "flex flex-col space-y-8 w-full" : "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"}>
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={isMobile ? "w-full space-y-4" : "lg:col-span-7 space-y-4 sm:space-y-6"}
          >
            <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C7A77]">
              SMITTEN BY A STORY
            </div>

            <h2 className="font-serif-display text-2xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1C1917] leading-[1.15]">
              She traded the desk for the soil.
            </h2>

            <div className="space-y-3 sm:space-y-4 font-sans-body text-xs sm:text-base md:text-lg text-[#5A4E4B] leading-relaxed pt-1 sm:pt-2">
              <p>
                <span className="font-serif-cormorant text-2xl sm:text-3xl font-normal text-[#C52828] float-left mr-2 leading-none">S</span>
                mitten by a story of botanical devotion — a former biotechnologist who traded classroom chalkboards for the nutrient-rich soils of Karera, Madhya Pradesh. What began as an ambition to cultivate world-class roses in central India grew into Estelle Farms.
              </p>
              <p>
                A former teacher&apos;s precision meets a florist&apos;s devotion — data-led cultivation, careful genetics, and clean discipline give each stem its signature height, colour, and staying power.
              </p>
              <p>
                Every stem begins in the soil of Karera, tended by hand through the patient arc of a season. Harvested at peak hydration and handled with uninterrupted cold chain discipline, our roses open slowly in your vase — the way true luxury flowers are meant to.
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-[#FAF2F0] rounded-2xl p-4 sm:p-6 border border-[#E8D8D5] flex gap-3 sm:gap-4 items-start mt-4 sm:mt-6">
              <Quote className="w-5 h-5 sm:w-8 sm:h-8 text-[#C52828] shrink-0 rotate-180 mt-0.5" />
              <div>
                <p className="font-serif-cormorant text-sm sm:text-xl italic text-[#1C1917] font-medium leading-snug">
                  &ldquo;A former teacher&apos;s precision meets a florist&apos;s devotion — data-led cultivation, careful genetics and clean discipline give each stem its signature height, colour and staying power.&rdquo;
                </p>
                <div className="text-[9px] sm:text-xs tracking-widest font-bold uppercase text-[#8C7A77] mt-2 sm:mt-3">
                  — Estelle Farms Founder &amp; Biotechnologist
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={isMobile ? "w-full space-y-4" : "lg:col-span-5 space-y-4 sm:space-y-6"}
          >
            
            {/* 1. Farm Team Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E8D8D5] shadow-md group bg-white">
              <img
                src={farmTeamImg}
                alt="Estelle Farms Team at Karera Greenhouse"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-72 object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-5 text-white">
                <div className="font-serif-display text-base sm:text-lg font-medium">Karera Greenhouse Team</div>
                <div className="text-[10px] sm:text-xs text-white/80 tracking-wider uppercase font-mono">Botanical Care &amp; Harvest Staff</div>
              </div>
            </div>

            {/* 2. Founder Portrait Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E8D8D5] shadow-md group bg-white">
              <img
                src={founderPortraitImg}
                alt="Estelle Farms Founder"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-80 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 text-white">
                <div className="font-serif-display text-base sm:text-lg font-medium">Estelle Farms Founder</div>
                <div className="text-[10px] sm:text-xs text-white/80 tracking-wider uppercase font-mono">Biotechnologist &amp; Cultivator</div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

