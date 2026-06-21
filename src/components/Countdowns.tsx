import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { SnoopyOnDoghouse, SnoopyHuggingHeart } from './SnoopySVG';

export const Countdowns: React.FC = () => {
  // Birthday: 7 October 2008 (Next is 7 Oct 2026 as current year is 2026-06-20)
  const [birthdayTimer, setBirthdayTimer] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  // Relationship: 8 March 2026
  const [loveCounter, setLoveCounter] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const birthdayMonth = 9; // October (0-indexed in JS of course, October is 9)
    const birthdayDay = 7;

    const intervalId = setInterval(() => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Calculate next Birthday
      let bdayTarget = new Date(currentYear, birthdayMonth, birthdayDay, 0, 0, 0);
      if (now > bdayTarget) {
        bdayTarget = new Date(currentYear + 1, birthdayMonth, birthdayDay, 0, 0, 0);
      }
      
      const bdayDiff = bdayTarget.getTime() - now.getTime();
      const bdayDays = Math.floor(bdayDiff / (1000 * 60 * 60 * 24));
      const bdayHours = Math.floor((bdayDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const bdayMins = Math.floor((bdayDiff % (1000 * 60 * 60)) / (1000 * 60));
      const bdaySecs = Math.floor((bdayDiff % (1000 * 60)) / 1000);

      setBirthdayTimer({ days: bdayDays, hours: bdayHours, mins: bdayMins, secs: bdaySecs });

      // Calculate Days/Time together since March 8, 2026
      const anniversary = new Date(2026, 2, 8, 0, 0, 0); // 8 March 2026 (Month 2 = March)
      const loveDiff = now.getTime() - anniversary.getTime();
      
      const loveDays = Math.floor(loveDiff / (1000 * 60 * 60 * 24));
      const loveHours = Math.floor((loveDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const loveMins = Math.floor((loveDiff % (1000 * 60 * 60)) / (1000 * 60));
      const loveSecs = Math.floor((loveDiff % (1000 * 60)) / 1000);

      setLoveCounter({ days: loveDays, hours: loveHours, mins: loveMins, secs: loveSecs });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative px-6 py-12 bg-[#fffcf5] overflow-hidden" id="counters_section">
      {/* Light pink polka-dot grid matching design */}
      <div className="absolute inset-0 bg-polkadot-pink pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10 space-y-12">
        
        {/* --- 1. ANNIVERSARY TIMER (Counter Hari Bersama) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-xs p-6 rounded-3xl shadow-md border border-love-pink/30 relative overflow-hidden text-center"
        >
          {/* Header Snoopy */}
          <div className="absolute -top-3 -right-3 animate-sway">
            <SnoopyHuggingHeart size={70} text="YOLA" />
          </div>

          <h3 className="font-sans text-lg font-bold text-rose-pink flex items-center justify-center gap-2 mb-1">
            <span>Hari-Hari Bersamamu</span>
            {/* Beating Heart Icon */}
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
              className="inline-block text-red-500 filter drop-shadow-xs"
            >
              
            </motion.span>
          </h3>
          <p className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-5">
            Mulai Sejak 8 Maret 2026
          </p>

          {/* Clean ticking interface cards */}
          <div className="grid grid-cols-4 gap-2 px-2">
            {[
              { label: 'Hari', val: loveCounter.days, bg: 'bg-pastel-pink text-rose-pink' },
              { label: 'Jam', val: loveCounter.hours, bg: 'bg-[#fff4f6] text-sweet-rose' },
              { label: 'Menit', val: loveCounter.mins, bg: 'bg-pastel-pink text-rose-pink' },
              { label: 'Detik', val: loveCounter.secs, bg: 'bg-[#fff4f6] text-sweet-rose', accent: true },
            ].map((card, i) => (
              <div key={i} className={`p-3 rounded-2xl ${card.bg} flex flex-col items-center shadow-xs border border-love-pink/15`}>
                <span className="font-sans font-bold text-xl md:text-2xl tracking-tighter tabular-nums">
                  {String(card.val).padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider mt-1">
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          <p className="font-handwritten text-xl text-sweet-rose/90 mt-5 px-3 leading-relaxed">
            Setiap detik dalam hidupku terasa jauh lebih berwarna dan penuh tawa sejak ada kamu disampingku.
          </p>
        </motion.div>


        {/* --- 2. BIRTHDAY COUNTDOWN (Menuju 7 Oktober) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-white/95 backdrop-blur-xs p-6 rounded-3xl shadow-md border border-love-pink/30 relative overflow-hidden text-center"
        >
          {/* Header Snoopy Sleeping on Red House */}
          <div className="flex justify-center mb-1">
            <SnoopyOnDoghouse size={85} />
          </div>

          <h3 className="font-sans text-lg font-bold text-rose-pink flex items-center justify-center gap-1.5 mt-2">
            <span>Hitung Mundur Ulang Tahun</span>
          </h3>
          <p className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-5">
            7 Oktober 2008 • Yolanda Oktavia
          </p>

          {/* Ticking countdown cards */}
          <div className="grid grid-cols-4 gap-2 px-2">
            {[
              { label: 'Hari', val: birthdayTimer.days },
              { label: 'Jam', val: birthdayTimer.hours },
              { label: 'Menit', val: birthdayTimer.mins },
              { label: 'Detik', val: birthdayTimer.secs },
            ].map((card, i) => (
              <div key={i} className="p-3 rounded-2xl bg-cream-soft text-rose-pink flex flex-col items-center shadow-xs border border-[#ffecd1]">
                <span className="font-sans font-bold text-xl md:text-2xl tracking-tighter tabular-nums text-rose-pink">
                  {String(card.val).padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider mt-1">
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          <p className="font-handwritten text-xl text-sweet-rose/90 mt-5 leading-relaxed">
            Menghitung hari menuju perayaan bertambahnya usia princes cantikku sayang!
          </p>
        </motion.div>

      </div>
    </section>
  );
};
