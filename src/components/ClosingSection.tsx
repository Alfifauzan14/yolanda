import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface HeartExplosionParticle {
  id: number;
  tx: number; // translation X in px
  ty: number; // translation Y in px
  size: number;
  rotation: number;
  color: string;
}

export const ClosingSection: React.FC = () => {
  const [exploded, setExploded] = useState(false);
  const [particles, setParticles] = useState<HeartExplosionParticle[]>([]);

  const handleExplode = (e: React.MouseEvent<HTMLButtonElement>) => {
    setExploded(true);
    
    const colors = ['#ff6b8b', '#ffb7c5', '#fa4a75', '#ffffd0', '#ffeef2', '#ff8fab'];
    const newParticles: HeartExplosionParticle[] = Array.from({ length: 45 }).map((_, i) => {
      const angle = (i * Math.PI * 2) / 15 + Math.random() * 0.5; // radial dispersion across 3 tiers
      const distance = 80 + Math.random() * 120; // travel distance
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      return {
        id: Date.now() + i,
        tx,
        ty,
        size: Math.random() * 16 + 12, // px size
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    setParticles(newParticles);

    // Auto clear particles to keep viewport lightweight
    setTimeout(() => {
      setParticles([]);
    }, 1500);
  };

  return (
    <section className="relative py-16 px-6 bg-cream-soft overflow-hidden text-center flex flex-col items-center" id="closing_section">
      <div className="absolute inset-0 bg-polkadot pointer-events-none" />

      {/* Aesthetic paper border frame at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-love-pink/30 to-transparent" />

      <div className="max-w-md w-full relative z-10 flex flex-col items-center">
        
        {/* Floating icon */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="text-pink-400 text-3xl mb-4"
        >
          💖
        </motion.div>

        {/* Big requested quote headers */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xl md:text-2xl font-bold text-rose-pink leading-relaxed tracking-tight px-4"
        >
          Terima Kasih Sudah Menjadi Bagian Terindah Dalam Hidupku
        </motion.h2>

        <p className="font-handwritten text-2xl text-gray-500 mt-4 px-2 leading-relaxed">
          Aku sangat beruntung memilikimu, princes sayanggku. Kita melangkah bersama menyambut impian kita.
        </p>

        {/* Explosive Action button & Particle Sandbox */}
        <div className="relative mt-12 mb-10 w-full flex justify-center">
          
          {/* Heart Particles Container absolute with button as relative anchor */}
          {particles.map((p) => (
            <div
              key={p.id}
              className="heart-particle z-40 select-none pb-4"
              style={{
                top: '40%',
                left: '50%',
                fontSize: `${p.size}px`,
                color: p.color,
                '--tx': `${p.tx}px`,
                '--ty': `${p.ty}px`,
                '--rot': `${p.rotation}deg`,
              } as React.CSSProperties}
            >
              ❤️
            </div>
          ))}

          {/* Core button "Aku Sayang Kamu" */}
          <motion.button
            onClick={handleExplode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-4 bg-gradient-to-r from-rose-pink to-sweet-rose text-white font-bold rounded-full shadow-lg shadow-rose-pink/35 outline-none overflow-hidden cursor-pointer flex items-center gap-2 group z-30"
            id="btn_sayang_kamu"
          >
            {/* Pulsing inner button circle */}
            <span className="absolute inset-0 w-full h-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
            
            <Heart size={18} fill="currentColor" className="animate-pulse" />
            <span className="font-sans text-[15px] tracking-wide">Aku Sayang Kamu ❤️</span>
          </motion.button>
        </div>

        {/* "Forever with Yolanda" reveal block */}
        <AnimatePresence>
          {exploded && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
              className="w-full bg-[#ffccd5]/50 backdrop-blur-xs p-6 rounded-3xl border border-rose-pink/20 shadow-inner flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-2 left-2 text-[#ffd1dc]/40 text-sm select-none">✨</div>
              <div className="absolute bottom-2 right-2 text-[#ffd1dc]/40 text-sm select-none">✨</div>

              {/* Shine effect background overlay */}
              <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 -translate-x-full animate-[sine-move_3s_ease-in-out_infinite]" />

              <h3 className="font-sans font-bold text-2xl text-sweet-rose flex items-center justify-center gap-2">
                <span>Forever With Yolanda</span>
              </h3>

              <p className="font-mono text-[10px] text-[#fa4a75] mt-2 uppercase tracking-wide font-bold">
                Kita Selamanya Saling Menyayangi
              </p>

              {/* Sparklers on release */}
              <div className="flex gap-3 mt-4 text-pink-400 font-bold select-none text-md">
                <span className="animate-bounce delay-75">🌸</span>
                <span className="animate-pulse delay-150">❤️</span>
                <span className="animate-bounce delay-300">🏐</span>
                <span className="animate-pulse delay-75">✨</span>
                <span className="animate-bounce delay-150">🌸</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Small tiny credit or greeting for beauty to end with humility */}
        <p className="font-mono text-[8px] text-gray-400 tracking-widest uppercase mt-12 select-none">
          Dibuat khusus untukmu dengan cinta abadi.
        </p>

      </div>
    </section>
  );
};
