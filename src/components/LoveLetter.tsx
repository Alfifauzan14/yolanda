import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MailOpen, Heart } from 'lucide-react';

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-12 px-6 bg-cream-soft overflow-visible flex flex-col items-center" id="letter_section">
      <div className="absolute inset-0 bg-polkadot pointer-events-none" />

      <div className="max-w-md w-full relative z-10 flex flex-col items-center">
        
        {/* Section title */}
        <div className="text-center mb-6">
          <h3 className="font-sans text-2xl font-bold text-rose-pink">
            Surat Cinta Untuk Yolanda
          </h3>
          <p className="font-handwritten text-xl text-gray-500 mt-1">
            Buka surat ini ya sayang... 
          </p>
        </div>

        {/* Envelope Container */}
        <div className="relative w-full max-w-[320px] flex flex-col items-center min-h-[360px] overflow-visible">
          
          {/* Background mail frame shadow for visual placement */}
          <div className="absolute top-24 w-full h-[160px] bg-love-pink/20 rounded-3xl blur-xl -z-10" />

          {/* Interactive Envelope Flap and Base */}
          <div 
            className="relative w-full h-[180px] z-30 mt-12 cursor-pointer transition-transform duration-300 active:scale-95" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Envelope Backside & Pocket */}
            <div className="absolute inset-0 bg-[#ffd1dc] rounded-2xl border-2 border-love-pink/30 shadow-md overflow-hidden flex items-end justify-center pb-6">
              {!isOpen && (
                <div className="flex flex-col items-center gap-1 text-love-pink/90 select-none animate-pulse">
                  <span className="text-[11px] font-sans font-bold tracking-wider uppercase">Sentuh Untuk Buka</span>
                  <Heart size={16} fill="currentColor" />
                </div>
              )}
            </div>

            {/* Simulated Envelope Flap Top */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '90px',
                backgroundColor: '#ffeef2',
                borderWidth: '2px',
                borderColor: '#ff6b8b30',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                transformOrigin: 'top center',
              }}
              animate={{
                transform: isOpen ? 'rotateX(180deg) translateY(-2px)' : 'rotateX(0deg)',
                zIndex: isOpen ? 5 : 25,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            {/* Wax Heart Seal Button centered in flap */}
            <motion.div
              style={{
                position: 'absolute',
                left: '50%',
                top: '80px',
                transform: 'translateX(-50%)',
                zIndex: 40,
              }}
              animate={{
                y: isOpen ? -30 : 0,
                scale: isOpen ? 0.9 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-rose-pink hover:bg-sweet-rose rounded-full flex items-center justify-center shadow-md animate-pulse">
                <span className="text-white text-sm">❤️</span>
              </div>
            </motion.div>
          </div>

          {/* Slipped Letter Content (rises on top when envelope is open) */}
          <motion.div
            initial={{ y: 60, scale: 0.95, opacity: 0 }}
            animate={{
              y: isOpen ? -140 : 60,
              scale: isOpen ? 1 : 0.95,
              opacity: isOpen ? 1 : 0,
              zIndex: isOpen ? 45 : 10,
            }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 85 }}
            className="absolute top-8 w-[94%] bg-[#fffdfa] rounded-2xl p-5 shadow-xl border border-pink-100 flex flex-col justify-start pointer-events-auto"
          >
            <div className="flex items-center gap-1.5 text-sweet-rose/80 border-b border-love-pink/20 pb-2 mb-3">
              <MailOpen size={14} />
              <span className="font-sans font-bold text-xs">Untuk Yolanda Sayang</span>
            </div>

            {/* Letter Body Text - The Exact Text Requested */}
            <p className="font-handwritten text-xl text-gray-800 leading-relaxed mb-3">
              Halo sayangku, Yolanda.
            </p>
            
            <p className="font-sans text-xs text-gray-600 leading-relaxed mb-3 text-justify">
              Terima kasih karena sudah hadir dalam hidupku. Setiap hari bersamamu adalah hadiah yang sangat berharga. Senyummu selalu mampu membuat hariku menjadi lebih indah. Aku bersyukur bisa mengenalmu dan berjalan bersamamu.
            </p>
            
            <p className="font-sans text-xs text-gray-600 leading-relaxed mb-3 text-justify">
              Aku mungkin tidak sempurna, tetapi aku akan selalu berusaha memberikan yang terbaik untukmu. Aku ingin terus menemani setiap langkahmu, mendukung setiap impianmu, dan menjadi seseorang yang selalu bisa membuatmu tersenyum.
            </p>
            
            <p className="font-handwritten text-xl text-rose-pink leading-none mt-2 text-right">
              Aku sayang kamu hari ini, besok, dan seterusnya.
            </p>

            {/* Sparkles bottom decoration */}
            <div className="flex justify-between items-center mt-4 text-[10px] font-mono text-gray-400">
              <span>8 Maret 2026</span>
              <span className="text-sweet-rose">Yolanda Oktavia</span>
            </div>
          </motion.div>

        </div>

        {/* Dynamic button indicator for mobile accessibility */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 font-sans text-xs font-bold text-rose-pink/90 bg-white shadow-xs border border-love-pink/30 px-5 py-2.5 rounded-full cursor-pointer hover:bg-pastel-pink transition-colors relative z-40 shadow-sm"
        >
          {isOpen ? 'Tutup Surat 💌' : 'Buka Surat 💌'}
        </motion.button>

      </div>
    </section>
  );
};
