import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SnoopyWaving } from './SnoopySVG';

interface OpeningCoverProps {
  onOpen: () => void;
}

export const OpeningCover: React.FC<OpeningCoverProps> = ({ onOpen }) => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    // Generate some random background hearts
    const initialHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      delay: Math.random() * 5, // delay in seconds
      size: Math.random() * 20 + 10, // px size
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream-soft overflow-hidden">
      {/* Soft Polkadot Background */}
      <div className="absolute inset-0 bg-polkadot" />

      {/* Floating Hearts in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: '110vh', opacity: 0, scale: 0.5 }}
            animate={{
              y: '-10vh',
              opacity: [0, 0.8, 0.8, 0],
              scale: [0.5, 1, 1.2, 0.8],
              x: ['0px', `${(heart.id % 2 === 0 ? 1 : -1) * 20}px`, '0px'],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: heart.delay,
              ease: 'easeInOut',
            }}
            className="absolute text-rose-300"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Beautiful Animated Decorative Frame */}
      <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-dashed border-love-pink/50 rounded-3xl pointer-events-none" />

      {/* Main Card Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-sm"
      >
        {/* Cute Snoopy Waving Hello */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4"
        >
          <SnoopyWaving size={130} />
        </motion.div>

        {/* Cute decorative sparkle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="text-2xl text-sweet-rose mb-1"
        >
          ✨
        </motion.div>

        {/* Title display */}
        <h1 className="font-sans text-3xl font-bold tracking-tight text-rose-pink mb-2">
          Yolanda Oktavia
        </h1>
        
        {/* Floating text sub */}
        <p className="font-handwritten text-2xl text-rose-pink/80 mb-8 px-4 leading-relaxed">
          Sesuatu yang manis dan penuh cinta, khusus dibuat untuk princes cantik...
        </p>

        {/* Interactive CTA Button */}
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 py-3 bg-rose-pink text-white font-semibold rounded-full shadow-lg shadow-rose-pink/20 overflow-hidden cursor-pointer group"
          id="btn_open_cover"
        >
          {/* Inner hover shine */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-none group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          <span className="flex items-center gap-2 text-md">
            Buka Surat Cinta 💌
          </span>
        </motion.button>

        {/* Sparkles of heart */}
        <div className="flex gap-1.5 mt-6 text-pink-300">
          <span className="animate-pulse delay-75">🌸</span>
          <span className="animate-pulse delay-150">🎀</span>
          <span className="animate-pulse delay-300">🌸</span>
        </div>
      </motion.div>
    </div>
  );
};
