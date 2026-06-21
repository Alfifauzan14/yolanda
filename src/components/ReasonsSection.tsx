import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Heart, Smile } from 'lucide-react';

interface ReasonItem {
  id: number;
  title: string;
  emoji: string;
  desc: string;
}

export const ReasonsSection: React.FC = () => {
  const reasons: ReasonItem[] = [
    {
      id: 1,
      title: 'Karena Senyummu',
      emoji: '😊',
      desc: 'Senyummu itu sederhana, tapi entah kenapa selalu berhasil membuat hariku jadi lebih baik. Saat kamu tersenyum, semua lelah dan masalah yang ada seolah ikut menghilang begitu saja.',
    },
    {
      id: 2,
      title: 'Karena Perhatianmu',
      emoji: '🧸',
      desc: 'Aku suka caramu peduli padaku. Dari pesan sederhana menanyakan kabarku sampai hal-hal kecil yang sering orang lain lewatkan. Kamu membuatku merasa dicintai dengan cara yang paling tulus.',
    },
    {
      id: 3,
      title: 'Karena Semangatmu',
      emoji: '🏐',
      desc: 'Melihatmu berjuang mengejar apa yang kamu suka selalu membuatku kagum. Semangatmu saat bermain voli dan meraih cita-cita membuatku ingin terus menjadi versi terbaik dari diriku.',
    },
    {
      id: 4,
      title: 'Karena Hatimu yang Baik',
      emoji: '✨',
      desc: 'Kamu selalu punya cara untuk membuat orang lain merasa nyaman. Kebaikanmu bukan sesuatu yang dibuat-buat, itu memang bagian dari dirimu, dan itulah yang membuatku semakin jatuh cinta setiap hari.',
    },
    {
      id: 5,
      title: 'Karena Kamu Adalah Kamu',
      emoji: '💕',
      desc: 'Aku tidak pernah membutuhkanmu menjadi orang lain. Semua tentangmu, tawamu, tingkah lucumu, cara bicaramu, bahkan kekuranganmu, adalah alasan kenapa aku memilihmu setiap hari.',
    },
  ];

  return (
    <section className="relative py-14 px-6 bg-[#fffcf5] overflow-hidden" id="reasons_section">
      <div className="absolute inset-0 bg-polkadot-pink pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10">
        
        {/* Header decoration */}
        <div className="text-center mb-10">
          <span className="text-2xl animate-pulse inline-block">💖</span>
          <h3 className="font-sans text-2xl font-bold text-rose-pink mt-1">
            Alasan Aku Menyayangimu
          </h3>
          <p className="font-handwritten text-xl text-gray-500 mt-2 px-2 leading-relaxed">
            Bukan karena kamu sempurna, tapi karena sejak mengenalmu, dunia terasa lebih indah dan hatiku selalu punya tempat untuk pulang.
          </p>
        </div>

        {/* Stack list cards with slide in staggered animations */}
        <div className="space-y-4">
          {reasons.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, rotate: (index % 2 === 0 ? 0.5 : -0.5) }}
              className="p-5 rounded-2xl bg-white border border-love-pink/30 shadow-xs flex items-start gap-4 relative overflow-hidden"
            >
              {/* Corner abstract background heart decoration */}
              <div className="absolute -right-2 -bottom-2 text-rose-300/10 text-5xl font-bold font-sans pointer-events-none">
                ❤️
              </div>

              {/* Big emoji circle indicator */}
              <div className="w-12 h-12 rounded-xl bg-pastel-pink border border-love-pink/20 flex-shrink-0 flex items-center justify-center text-2xl shadow-inner select-none animate-float">
                {item.emoji}
              </div>

              {/* Text specifics */}
              <div className="flex-1 select-none">
                <h4 className="font-sans font-bold text-gray-800 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Romantic quote footer of the reasons block */}
        <div className="text-center mt-10 px-4">
          <p className="font-handwritten text-2xl text-sweet-rose leading-relaxed">
            "Bagiku, mencintaimu adalah kesederhanaan yang tak ternilai harganya. Terima kasih sudah menjadi utuh sebagai Yolanda Oktavia..."
          </p>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-love-pink/50 to-transparent w-full mt-6" />
        </div>

      </div>
    </section>
  );
};
