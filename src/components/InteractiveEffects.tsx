import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SnoopyWalkingWithBalloon } from './SnoopySVG';

interface TouchHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export const InteractiveEffects: React.FC = () => {
  const [hearts, setHearts] = useState<TouchHeart[]>([]);
  const [snoopyX, setSnoopyX] = useState<number>(10);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  // Handle worldwide touch/click
  useEffect(() => {
    const colors = ['#ff6b8b', '#ffb7c5', '#fa4a75', '#ffccd5', '#ff8fab'];
    
    const handleTouchOrClick = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      
      if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else if (e.touches && e.touches[0]) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        return;
      }

      const id = Date.now() + Math.random();
      const size = Math.random() * 20 + 15; // px
      const color = colors[Math.floor(Math.random() * colors.length)];

      const newHeart: TouchHeart = {
        id,
        x: clientX,
        y: clientY,
        size,
        color,
      };

      setHearts((prev) => [...prev.slice(-20), newHeart]); // Keep max 20 active to maintain high-performance on standard mobiles
    };

    window.addEventListener('click', handleTouchOrClick);
    window.addEventListener('touchstart', handleTouchOrClick);

    return () => {
      window.removeEventListener('click', handleTouchOrClick);
      window.removeEventListener('touchstart', handleTouchOrClick);
    };
  }, []);

  // Animate Snoopy walking left & right at the bottom
  useEffect(() => {
    const interval = setInterval(() => {
      setSnoopyX((prev) => {
        let step = 1.5;
        if (direction === 'right') {
          if (prev >= 82) {
            setDirection('left');
            return prev - step;
          }
          return prev + step;
        } else {
          if (prev <= 2) {
            setDirection('right');
            return prev + step;
          }
          return prev - step;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <>
      {/* 1. Click/Touch Spawned Hearts */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{
                opacity: 1,
                scale: 0.3,
                x: heart.x - heart.size / 2,
                y: heart.y - heart.size / 2,
              }}
              animate={{
                opacity: 0,
                scale: 1.5,
                y: heart.y - 120, // drift up
                x: heart.x - heart.size / 2 + (Math.random() * 40 - 20), // slight drift side
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                fontSize: `${heart.size}px`,
                color: heart.color,
                textShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}
            >
              ❤️
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 2. Sparkling Stars Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => {
          const top = [15, 45, 75, 25, 60, 85][i];
          const left = [10, 85, 15, 90, 5, 80][i];
          const delay = i * 1.5;
          return (
            <div
              key={i}
              className="absolute sparkle-glow text-rose-300 text-lg opacity-40"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
              }}
            >
              ✨
            </div>
          );
        })}
      </div>

      {/* 3. Infinite Walking Snoopy at the screen bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-28 pointer-events-none z-45 overflow-hidden">
        <div
          className="absolute transition-all duration-100 ease-linear"
          style={{
            left: `${snoopyX}%`,
            transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
          }}
        >
          {/* Walking Snoopy */}
          <SnoopyWalkingWithBalloon size={85} />
        </div>
      </div>
    </>
  );
};
