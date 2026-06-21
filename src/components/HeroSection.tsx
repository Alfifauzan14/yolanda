import React from 'react';
import { motion } from 'motion/react';
import yolandaImg from '../../assets/foto/yolanda.jpeg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-12 px-6 flex flex-col items-center bg-cream-soft overflow-hidden" id="hero_section">
      {/* Background polka dots only for this frame */}
      <div className="absolute inset-0 bg-polkadot pointer-events-none" />

      {/* Decorative floating clouds/shapes */}
      <div className="absolute top-10 left-4 w-12 h-12 bg-love-pink/20 rounded-full blur-md animate-float" />
      <div className="absolute bottom-12 right-6 w-16 h-16 bg-rose-pink/10 rounded-full blur-xl animate-float-delayed" />

      <div className="max-w-md w-full flex flex-col items-center relative z-10">

        {/* Ribbon Header decoration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-love-pink text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm mb-6 flex items-center gap-1.5 animate-sway"
        >
          <span>✨ My Girlfriend ✨</span>
        </motion.div>

        {/* Polaroid Frame Container */}
        <motion.div
          initial={{ opacity: 0, rotate: -4, scale: 0.95 }}
          whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 1, scale: 1.02 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative bg-white p-4 pb-12 shadow-xl rounded-sm border border-love-pink/20 max-w-[290px] w-full"
        >
          {/* Aesthetic Paper Washi Tape at Top */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-love-pink/30 hover:bg-love-pink/40 backdrop-blur-xs rotate-2 border-x border-dashed border-love-pink/40 shadow-xs flex items-center justify-center">
            <span className="text-[10px] text-sweet-rose/80 font-mono tracking-widest uppercase">My Precious Love</span>
          </div>

          {/* Photo Frame */}
          <div className="relative aspect-3/4 w-full bg-pink-50 overflow-hidden border border-gray-100 rounded-xs">
            <img
              src={yolandaImg}
              alt="Yolanda Oktavia"
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* Cute watermark tag inside photo */}
            <div className="absolute bottom-2 left-2 bg-black/45 backdrop-blur-xs text-[10px] text-white px-2 py-0.5 rounded-full flex items-center gap-1">
              <span>Yolanda</span>
            </div>
          </div>

          {/* Polaroid Greeting Caption */}
          <div className="mt-4 text-center">
            <p className="font-handwritten text-3xl text-sweet-rose">
              Yolanda Oktavia
            </p>
            <p className="font-mono text-[9px] text-gray-400 mt-1 uppercase tracking-widest">
              Est. 07.10.2008 & 08.03.2026
            </p>
          </div>

          {/* Heart Stamp Badge */}
          <div className="absolute right-3 bottom-3 text-red-400 text-lg animate-pulse">
            ❤️
          </div>
        </motion.div>

        {/* Written Headers */}
        <div className="text-center mt-8 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-2xl font-bold text-rose-pink tracking-tight mb-2"
          >
            "Perempuan Terindah Dalam Hidupku"
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-sm text-gray-500 leading-relaxed font-medium"
          >
            Terima kasih telah hadir dan mewarnai hari-hariku.
          </motion.p>
        </div>

        {/* Romantic Divider */}
        <div className="flex items-center gap-3 w-full mt-10">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-love-pink/50 flex-1" />
          <span className="text-pink-300 text-sm">✦ 🎀 ✦</span>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-love-pink/50 flex-1" />
        </div>

      </div>
    </section>
  );
};
