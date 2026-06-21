import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Sparkles } from 'lucide-react';

import curugImg from '../../assets/foto/curug.jpeg';
import kitaImg from '../../assets/foto/kita.jpeg';
import pangrangoImg from '../../assets/foto/pangrango.jpeg';
import senyumanImg from '../../assets/foto/senyuman.jpeg';
import voliImg from '../../assets/foto/voli;.jpeg';

interface PolaroidItem {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  tag: string;
  desc: string;
  rotation: string;
  objectPosition?: string;
}

export const MemoryGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PolaroidItem | null>(null);

  const galleryData: PolaroidItem[] = [
    {
      id: 1,
      imageUrl: curugImg,
      title: 'Awal Pertemuan Kita',
      date: 'Curug Cibeurem',
      tag: 'Kisah Kami',
      desc: 'Pertemuan yang sangat seru kita sangat canggung disitu karena belum pernah ngobrol langsung ke curug dan sangat seru.',
      rotation: '-rotate-3',
      objectPosition: 'object-center',
    },
    {
      id: 2,
      imageUrl: voliImg,
      title: 'Hobi Voli',
      date: 'Olahraga Kesukaan',
      tag: 'Olahraga',
      desc: 'Selalu Excited dan paling semangat saat mau eskul. Pemain voli terhebat, paling jago itu adalah kamu princes cantikku',
      rotation: 'rotate-2',
      objectPosition: 'object-top',
    },
    {
      id: 3,
      imageUrl: kitaImg,
      title: 'Genggaman Tangan Hangat',
      date: '',
      tag: 'Kemesraan',
      desc: 'Setiap kali tangan kita saling bertaut, aku bisa merasakan detak jantungmu dan aliran kasih sayang yang menenangkan jiwa. Aku ingin terus menggenggam tanganmu seperti ini.',
      rotation: '-rotate-2',
      objectPosition: 'object-center',
    },
    {
      id: 4,
      imageUrl: pangrangoImg,
      title: 'Mendaki',
      date: 'Gn Pangrango',
      tag: 'Petualangan',
      desc: 'Menghabiskan waktu satu hari penuh manghadapi trek Gn Pangrango. Puncak 3000 Mdpl pertama bagi kita berdua itu sangat indah dan sangat seru.',
      rotation: 'rotate-3',
      objectPosition: 'object-center',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop',
      title: 'Bunga Mawar',
      date: 'Bunga',
      tag: 'Kejutan',
      desc: 'Memberikan sekuntum mawar merah muda untuk mawar terindahku yang sesungguhnya. Aku ingin selalu memberikan alasan bagimu untuk terus tersenyum manis setiap harinya.',
      rotation: '-rotate-1',
      objectPosition: 'object-center',
    },
    {
      id: 6,
      imageUrl: senyumanImg,
      title: 'Senyum Yolanda Tersayang',
      date: 'Princes Cantik',
      tag: 'Favorit',
      desc: 'Senyum yang menyejukkan hati yang kusayangi. Senyummu adalah bahan bakar kebahagiaan ku, tempat ku pulang dari segala lelah kesibukan.',
      rotation: 'rotate-1',
      objectPosition: 'object-top',
    },
  ];

  return (
    <section className="relative py-12 px-6 bg-cream-soft overflow-hidden" id="gallery_section">
      <div className="absolute inset-0 bg-polkadot pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Gallery Title Block */}
        <div className="text-center mb-10">
          <span className="font-sans text-xs font-bold text-sweet-rose/80 uppercase tracking-widest bg-pastel-pink px-4 py-1.5 rounded-full border border-love-pink/20">
            Lembaran Memori Kita
          </span>
          <h3 className="font-sans text-2xl font-bold text-rose-pink mt-3">
            Galeri Kenangan Indah
          </h3>
          <p className="font-handwritten text-xl text-gray-500 mt-2">
            Klik foto polaroid untuk membaca pesan rahasia di baliknya...
          </p>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {galleryData.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.05, y: -5, rotate: 0, zIndex: 20 }}
              onClick={() => setSelectedPhoto(photo)}
              className={`bg-white p-3 pb-8 shadow-md rounded-xs border border-love-pink/10 cursor-pointer max-w-[170px] w-full transition-shadow duration-300 hover:shadow-lg ${photo.rotation} select-none`}
            >
              {/* Photo Frame Container */}
              <div className="relative aspect-square w-full bg-pink-50 overflow-hidden border border-gray-100 rounded-2xs">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className={`w-full h-full object-cover ${photo.objectPosition || 'object-center'}`}
                  referrerPolicy="no-referrer"
                />

                {/* Small overlay tag */}
                <div className="absolute top-1.5 left-1.5 bg-rose-pink text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider scale-90">
                  {photo.tag}
                </div>
              </div>

              {/* Polaroid Caption Footer */}
              <div className="mt-3 text-center">
                <p className="font-handwritten text-lg text-rose-pink leading-none overflow-hidden text-ellipsis whitespace-nowrap">
                  {photo.title}
                </p>
                <p className="font-mono text-[8px] text-gray-400 mt-1">
                  {photo.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Polaroid Overlay / Modal Dialog */}
        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence>
            {selectedPhoto && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 overflow-y-auto"
              >
                <div className="min-h-full flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0" onClick={() => setSelectedPhoto(null)} />

                  {/* Card Container Box */}
                  <motion.div
                    initial={{ scale: 0.9, y: 20, rotate: -2 }}
                    animate={{ scale: 1, y: 0, rotate: 0 }}
                    exit={{ scale: 0.9, y: 20, rotate: 2 }}
                    className="relative bg-white max-w-sm w-full p-6 pb-8 shadow-2xl rounded-3xl border border-love-pink/20 z-10 flex flex-col items-center my-8"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="absolute top-4 right-4 p-1.5 bg-pastel-pink text-rose-pink rounded-full hover:bg-rose-pink hover:text-white transition-colors duration-300"
                    >
                      <X size={18} />
                    </button>

                    {/* Styled Photo Frame */}
                    <div className="w-full bg-pink-50 rounded-2xl overflow-hidden border border-love-pink/10 shadow-inner relative mt-4">
                      <img
                        src={selectedPhoto.imageUrl}
                        alt={selectedPhoto.title}
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-3 left-3 bg-rose-pink text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Heart size={12} fill="currentColor" />
                        <span>{selectedPhoto.tag}</span>
                      </div>
                    </div>

                    {/* Polaroid Text content detailing meaning */}
                    <div className="text-center mt-5">
                      <h4 className="font-sans text-xl font-bold text-rose-pink flex items-center justify-center gap-1">
                        <span>{selectedPhoto.title}</span>
                        <Sparkles size={14} className="text-yellow-400 fill-yellow-400" />
                      </h4>
                      <span className="inline-block text-[10px] font-mono font-semibold text-gray-400 border-b border-love-pink/30 pb-1.5 px-4 mb-3">
                        {selectedPhoto.date}
                      </span>
                      <p className="font-sans text-sm text-gray-600 leading-relaxed px-2">
                        {selectedPhoto.desc}
                      </p>
                    </div>

                    <div className="flex gap-1.5 mt-6 text-pink-300 animate-pulse">
                      <span>🌸</span>
                      <span>🐾</span>
                      <span>🎀</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      </div>
    </section>
  );
};
