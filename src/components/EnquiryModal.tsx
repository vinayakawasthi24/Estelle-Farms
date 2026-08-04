import React, { useState, useEffect } from 'react';
import { RoseVariety } from '../types';
import { ROSE_COLLECTION, estelleLogoImg } from '../data/roses';
import { X, CheckCircle2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRose?: RoseVariety | null;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, selectedRose }) => {
  const [varietyId, setVarietyId] = useState<string>('all');
  const [stemCount, setStemCount] = useState<number>(100);
  const [purpose, setPurpose] = useState<string>('wedding');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [deliveryCity, setDeliveryCity] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedRose) {
      setVarietyId(selectedRose.id);
    } else {
      setVarietyId('all');
    }
  }, [selectedRose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate swift farm request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#FAF2F0] w-full max-w-2xl rounded-2xl sm:rounded-3xl border border-[#E8D8D5] shadow-2xl overflow-hidden relative flex flex-col max-h-[92vh] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#F6ECE8] px-4 sm:px-6 py-4 border-b border-[#E8D8D5] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#E8D8D5] p-0.5 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                  <img src={estelleLogoImg} alt="Estelle Farms" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#1C1917] leading-none">
                    Stem Enquiry Concierge
                  </h3>
                  <p className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-[#8C7A77] mt-0.5">
                    Estelle Farms • Direct Dispatch
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-[#E2CDC9] text-[#5A4E4B] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
              {isSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                    Enquiry Received!
                  </h4>
                  <p className="font-sans-body text-xs sm:text-sm text-[#5A4E4B] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#1C1917]">{fullName}</span>. Our Karera farm concierge will contact you shortly at <span className="font-bold text-[#C52828]">{phone}</span> with availability and cold-chain shipping details.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="bg-[#C52828] text-white font-semibold text-xs tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#A31D1D] transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Variety Selection */}
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                      Select Rose Variety
                    </label>
                    <select
                      value={varietyId}
                      onChange={(e) => setVarietyId(e.target.value)}
                      className="w-full bg-white border border-[#E8D8D5] rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#1C1917] focus:outline-none focus:border-[#C52828]"
                    >
                      <option value="all">Full Quintet Assortment (All 5 Varieties)</option>
                      {ROSE_COLLECTION.map((rose) => (
                        <option key={rose.id} value={rose.id}>
                          {rose.name} ({rose.colorCategory} — Stem {rose.stemHeight})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity & Event Type Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                        Estimated Stem Requirement
                      </label>
                      <select
                        value={stemCount}
                        onChange={(e) => setStemCount(Number(e.target.value))}
                        className="w-full bg-white border border-[#E8D8D5] rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#1C1917] focus:outline-none focus:border-[#C52828]"
                      >
                        <option value={50}>50 Stems (Boutique Sample Box)</option>
                        <option value={100}>100 Stems (Standard Event Order)</option>
                        <option value={250}>250 Stems (Wedding Floral Styling)</option>
                        <option value={500}>500+ Stems (Grand Celebration / Wholesale)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                        Purpose / Event
                      </label>
                      <select
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full bg-white border border-[#E8D8D5] rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#1C1917] focus:outline-none focus:border-[#C52828]"
                      >
                        <option value="wedding">Wedding / Bridal Styling</option>
                        <option value="retail">Boutique Florist Supply</option>
                        <option value="event">Corporate / Luxury Event</option>
                        <option value="gifting">Personal Luxury Gifting</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white border border-[#E8D8D5] rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#C52828]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-[#E8D8D5] rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#C52828]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ananya@luxuryflorals.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-[#E8D8D5] rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#C52828]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                        Delivery City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mumbai, Delhi, Bengaluru"
                        value={deliveryCity}
                        onChange={(e) => setDeliveryCity(e.target.value)}
                        className="w-full bg-white border border-[#E8D8D5] rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#C52828]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                      Specific Requests / Event Date
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Mention delivery date, color customization, or special notes..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-white border border-[#E8D8D5] rounded-xl px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#C52828]"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C52828] hover:bg-[#A31D1D] text-white font-semibold text-xs tracking-[0.2em] uppercase py-3.5 sm:py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Farm Enquiry</span>
                      </>
                    )}
                  </motion.button>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
