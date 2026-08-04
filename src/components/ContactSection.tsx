import React, { useState } from 'react';
import { PhoneCall, MapPin, Mail, MessageSquare, Copy, Check, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useMobileView } from '../context/MobileContext';

interface ContactSectionProps {
  onOpenEnquire: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEnquire }) => {
  const [copied, setCopied] = useState(false);
  const { isMobile } = useMobileView();
  const phoneNumber = '+91 77150 06066';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917715006066');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-10 sm:py-20 md:py-32 bg-[#FAF2F0] border-t border-[#E8D8D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C7A77] mb-2 sm:mb-3">
            DIRECT INQUIRIES
          </div>

          <h2 className="font-serif-display text-2xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1C1917] mb-3 sm:mb-6">
            Let&apos;s talk <span className="font-serif-cormorant italic font-normal text-[#C52828]">roses</span>.
          </h2>

          <p className="font-sans-body text-xs sm:text-base md:text-lg text-[#5A4E4B] max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
            Whether you need custom stem orders, event floral styling, or wholesale boutique distribution, our farm team in Karera would love to hear from you.
          </p>
        </motion.div>

        {/* Big Phone Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`bg-[#F6ECE8] rounded-2xl sm:rounded-3xl border border-[#E8D8D5] max-w-xl mx-auto shadow-sm mb-6 sm:mb-12 ${
            isMobile ? 'p-4 sm:p-6' : 'p-6 sm:p-10'
          }`}
        >
          <div className="text-[9px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#8C7A77] mb-2 sm:mb-3">
            DIRECT FARM LINE &amp; WHATSAPP
          </div>
          
          <a
            href="tel:+917715006066"
            className={`font-serif-display font-bold text-[#C52828] hover:text-[#A31D1D] transition-colors block mb-4 sm:mb-6 tracking-normal whitespace-nowrap overflow-hidden text-ellipsis text-center ${
              isMobile ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-4xl md:text-5xl'
            }`}
          >
            {phoneNumber}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyPhone}
              className="bg-[#FAF2F0] hover:bg-[#EFE0DC] text-[#1C1917] border border-[#E8D8D5] text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#8C7A77]" />}
              <span>{copied ? 'Copied Number' : 'Copy Phone'}</span>
            </button>

            <a
              href="https://wa.me/917715006066?text=Hello%20Estelle%20Farms,%20I%20would%20like%20to%20enquire%20about%20your%20luxury%20roses."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-4 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </motion.div>

        {/* Address & Email */}
        <div className={`grid gap-3 sm:gap-6 max-w-xl mx-auto text-left mb-6 sm:mb-12 ${
          isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
        }`}>
          <div className="bg-[#F6ECE8]/60 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E8D8D5] flex items-start gap-3.5">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#C52828] shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-0.5 sm:mb-1">FARM LOCATION</div>
              <div className="text-xs sm:text-sm text-[#5A4E4B]">Karera, Madhya Pradesh, India</div>
            </div>
          </div>

          <div className="bg-[#F6ECE8]/60 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E8D8D5] flex items-start gap-3.5">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#C52828] shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-0.5 sm:mb-1">EMAIL CONCIERGE</div>
              <div className="text-xs sm:text-sm text-[#5A4E4B]">hello@estellefarms.com</div>
            </div>
          </div>
        </div>

        {/* Big Enquire CTA */}
        <div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenEnquire}
            className="w-full sm:w-auto bg-[#C52828] hover:bg-[#A31D1D] text-white font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase px-6 py-3.5 sm:px-10 sm:py-4 rounded-full transition-all shadow-md inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>SUBMIT DETAILED ENQUIRY</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

