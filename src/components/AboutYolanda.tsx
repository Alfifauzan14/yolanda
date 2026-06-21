import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Smile, Heart, Star, Compass, Award } from 'lucide-react';
import { SnoopyVolleyballPlayer } from './SnoopySVG';

interface SpecCard {
  id: number;
  label: string;
  icon: React.ReactNode;
  desc: string;
}

export const AboutYolanda: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({
    1: true, 2: true, 3: true, 4: true, 5: true, 6: true
  });

  const toggleCheck = (id: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const specs: SpecCard[] = [
    {
      id: 1,
      label: 'Gadis dengan Hati Terindah',
      icon: <Heart size={20} className="text-rose-pink" fill="#ff6b8b" />,
      desc: 'Kamu selalu berusaha baik kepada siapa pun. Ketulusanmu adalah salah satu hal yang pertama kali membuatku jatuh hati dan sampai sekarang masih membuatku kagum.',
    },
    {
      id: 2,
      label: 'Secantik Mawar yang Sedang Mekar',
      icon: <Star size={20} className="text-yellow-500 fill-yellow-400" />,
      desc: 'Bukan hanya wajahmu yang cantik, tapi juga cara kamu memperlakukan orang lain. Kecantikanmu datang dari hati yang penuh kasih.',
    },
    {
      id: 3,
      label: 'Manis dan Menggemaskan',
      icon: <Smile size={20} className="text-[#ff6b8b]" />,
      desc: 'Tawamu, candamu, dan tingkah lucumu selalu berhasil membuatku tersenyum sendiri. Kadang hanya dengan melihat pesan darimu saja, hariku langsung terasa jauh lebih menyenangkan.',
    },
    {
      id: 4,
      label: 'Penuh Kasih dan Perhatian',
      icon: <Compass size={20} className="text-teal-400" />,
      desc: 'Kamu selalu hadir di saat aku membutuhkan seseorang untuk mendengar atau sekadar menemani. Bersamamu, aku merasa dipahami dan dihargai.',
    },
    {
      id: 5,
      label: 'Si Jago Voli Favoritku',
      icon: <Trophy size={20} className="text-amber-500 fill-amber-300" />,
      desc: 'Melihatmu bermain voli selalu membuatku bangga. Semangat dan kegigihanmu menunjukkan betapa kuat dan hebatnya dirimu.',
    },
    {
      id: 6,
      label: 'Alasan Senyumku Setiap Hari',
      icon: <Award size={20} className="text-purple-400" />,
      desc: 'Mungkin kamu tidak sadar, tapi banyak senyumku berasal dari kamu. Dari pesan sederhana, perhatian kecil, sampai kehadiranmu yang selalu membuat hidupku terasa lebih berwarna.',
    },
  ];

  return (
    <section className="relative py-12 px-6 bg-[#fffcf5] overflow-hidden" id="about_section">
      <div className="absolute inset-0 bg-polkadot-pink pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10">
        
        {/* Title structure */}
        <div className="text-center mb-8">
          <span className="text-pink-400 text-2xl animate-spin inline-block font-bold">🌸</span>
          <h3 className="font-sans text-2xl font-bold text-rose-pink mt-1">
            Mengenal Yolanda Oktavia
          </h3>
          <p className="font-handwritten text-xl text-gray-500 mt-2 px-2 leading-relaxed">
            Seseorang yang tanpa sadar berhasil menjadi alasan bahagiaku setiap hari.
          </p>
        </div>

        {/* Sweet Bento Grid of facts */}
        <div className="space-y-4">
          {specs.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: item.id % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleCheck(item.id)}
              className={`p-4 rounded-2xl border transition-all duration-300 flex gap-4 items-start cursor-pointer select-none ${
                checkedItems[item.id]
                  ? 'bg-white border-love-pink shadow-xs'
                  : 'bg-white/60 border-dashed border-gray-200 shadow-none opacity-85'
              }`}
            >
              {/* Custom checkbox or status icon */}
              <div className="mt-0.5 flex-shrink-0">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                  checkedItems[item.id] ? 'bg-rose-pink border-rose-pink text-white' : 'border-gray-300 text-transparent'
                }`}>
                  <span className="text-[10px] font-bold">✓</span>
                </div>
              </div>

              {/* Core fact text */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <span className={`font-sans font-bold text-sm ${checkedItems[item.id] ? 'text-gray-800' : 'text-gray-400 line-through'}`}>
                    {item.label}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed ${checkedItems[item.id] ? 'text-gray-500' : 'text-gray-400'}`}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cute Volleyball player Snoopy display banner at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-white p-5 rounded-3xl border border-love-pink/30 flex items-center gap-4 shadow-xs relative overflow-hidden"
        >
          {/* Volleyball background element */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-7xl font-bold">🏐</div>
          
          <div className="flex-shrink-0">
            <SnoopyVolleyballPlayer size={90} />
          </div>

          <div className="flex-1">
            <h4 className="font-sans font-bold text-rose-pink text-sm flex items-center gap-1">
              <span>Ratu Voli Favoritku 🏆</span>
            </h4>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Yolanda sangat bahagia saat melakukan servis, passing, dan spike bola voli. Aku akan selalu menyemangatimu sayangg! Fighting!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
