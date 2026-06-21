import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OpeningCover } from './components/OpeningCover';
import { InteractiveEffects } from './components/InteractiveEffects';
import { HeroSection } from './components/HeroSection';
import { Countdowns } from './components/Countdowns';
import { MemoryGallery } from './components/MemoryGallery';
import { AboutYolanda } from './components/AboutYolanda';
import { LoveLetter } from './components/LoveLetter';
import { ReasonsSection } from './components/ReasonsSection';
import { ClosingSection } from './components/ClosingSection';

export default function App() {
  const [isCoverOpened, setIsCoverOpened] = useState(false);

  return (
    <div className="min-h-screen bg-cream-soft font-sans overflow-x-hidden text-gray-800 antialiased selection:bg-rose-pink selection:text-white">
      <AnimatePresence mode="wait">
        {!isCoverOpened ? (
          <motion.div
            key="opening-cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-50"
          >
            <OpeningCover onOpen={() => setIsCoverOpened(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="main-romantic-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full flex flex-col min-h-screen relative"
          >
            {/* Global touch heart spawners, sparkles and walking Snoopy at bottom */}
            <InteractiveEffects />

            {/* Smooth Scroll Sections Container */}
            <div className="w-full relative z-10 flex flex-col overflow-y-auto overflow-x-hidden">
              
              {/* Header Heart Banner */}
              <div className="bg-gradient-to-b from-pastel-pink/70 to-transparent pt-4 pb-2 text-center text-[10px] text-rose-pink font-semibold uppercase tracking-widest pointer-events-none select-none flex items-center justify-center gap-1.5 font-mono">
                <span>🎀 Yolanda Oktavia 🎀</span>
              </div>

              {/* SECTION 2: Hero portrait section */}
              <HeroSection />

              {/* SECTION 3 & 4: Anniversary day counters & Birthday Countdowns */}
              <Countdowns />

              {/* SECTION 5: Polaroid grid memory gallery */}
              <MemoryGallery />

              {/* SECTION 6: Soft bullet Board detailed profiles */}
              <AboutYolanda />

              {/* SECTION 7: Cursive envelopes secret love letters */}
              <LoveLetter />

              {/* SECTION 8: Explicit Reasons section cards and quotes */}
              <ReasonsSection />

              {/* SECTION 10: Closing Section, "Aku Sayang Kamu" bursts, and Forever Banner */}
              <ClosingSection />
              
              {/* Extra spacing at very bottom to avoid Snoopy blocking content in scrolling */}
              <div className="h-28 w-full bg-transparent pointer-events-none" />

            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
