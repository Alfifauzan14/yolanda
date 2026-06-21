import React from 'react';

/**
 * Snoopy Vector Illustrator Components
 * Highly responsive, beautifully styled, and themed to soft pink/pastel styles.
 */

interface SnoopyProps {
  className?: string;
  size?: number;
}

export const SnoopyOnDoghouse: React.FC<SnoopyProps & { heartCount?: number }> = ({ className = '', size = 150 }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`} style={{ width: size, height: size * 1.2 }}>
      {/* Dynamic drifting hearts from the doghouse */}
      <div className="absolute top-0 flex gap-2">
        <span className="animate-bounce text-red-400 text-lg">❤️</span>
        <span className="animate-pulse delay-150 text-pink-400 text-sm">💖</span>
        <span className="animate-bounce delay-300 text-rose-300 text-md">💕</span>
      </div>
      
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300 hover:scale-105"
      >
        {/* Cloud details */}
        <path d="M20 50 C20 40, 40 40, 50 45 C60 38, 80 40, 80 50 C80 60, 40 60, 20 50 Z" fill="#ffeef2" opacity="0.6" className="animate-pulse" />
        <path d="M140 30 C140 20, 160 20, 170 25 C180 18, 195 20, 195 30 C195 40, 160 40, 140 30 Z" fill="#ffeef2" opacity="0.6" className="animate-pulse delay-300" />
        
        {/* Red Doghouse Roof */}
        <path d="M30 140 L100 80 L170 140 Z" fill="#ff6b8b" stroke="#333333" strokeWidth="4" strokeLinejoin="round" />
        
        {/* Doghouse Body */}
        <rect x="45" y="140" width="110" height="85" fill="#ffeef2" stroke="#333333" strokeWidth="4" />
        <rect x="75" y="175" width="50" height="50" rx="25" fill="#333333" />
        
        {/* Snoopy Sleeping on Roof (Classic Pose) */}
        {/* Snoopy body belly lying facing up */}
        <ellipse cx="100" cy="74" rx="28" ry="12" fill="#FFFFFF" stroke="#333333" strokeWidth="4" />
        <circle cx="82" cy="74" r="13" fill="#FFFFFF" stroke="#333333" strokeWidth="4" /> {/* head */}
        {/* Snoopy Nose */}
        <circle cx="70" cy="71" r="3.5" fill="#333333" />
        {/* Ear (lying flat down) */}
        <path d="M86 73 C92 73, 94 85, 90 90 C86 92, 82 82, 86 73 Z" fill="#333333" />
        {/* Foot 1 */}
        <rect x="114" y="65" width="10" height="15" rx="5" fill="#FFFFFF" stroke="#333333" strokeWidth="3" transform="rotate(30, 114, 65)" />
        {/* Foot 2 */}
        <rect x="122" y="66" width="10" height="15" rx="5" fill="#FFFFFF" stroke="#333333" strokeWidth="3" transform="rotate(30, 122, 66)" />
        {/* Paw 1 */}
        <ellipse cx="94" cy="79" rx="5" ry="8" fill="#FFFFFF" stroke="#333333" strokeWidth="3" />
        {/* Collar */}
        <path d="M92 77 L95 81" stroke="#ff6b8b" strokeWidth="3" strokeLinecap="round" />
        
        {/* Cute Volleyball beside Doghouse */}
        <circle cx="155" cy="200" r="18" fill="#FFFFFF" stroke="#333333" strokeWidth="3.5" className="animate-sway" />
        <path d="M141 192 C148 198, 158 198, 165 190" stroke="#333333" strokeWidth="2.5" />
        <path d="M145 210 C154 205, 154 195, 167 198" stroke="#333333" strokeWidth="2.5" />
        <path d="M155 182 L155 218" stroke="#333333" strokeWidth="1.5" strokeDasharray="3,3" />
      </svg>
    </div>
  );
};

export const SnoopyHuggingHeart: React.FC<SnoopyProps & { text?: string }> = ({ className = '', size = 120, text = 'YOLA' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`} style={{ width: size, height: size * 1.15 }}>
      <svg
        viewBox="0 0 160 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Floating background hearts */}
        <path d="M30 35 C25 25, 5 25, 5 45 C5 65, 30 85, 30 85 C30 85, 55 65, 55 45 C55 25, 35 25, 30 35 Z" fill="#ffb7c5" opacity="0.3" className="animate-ping" style={{ transformOrigin: '30px 45px' }} />
        <path d="M130 50 C125 42, 110 42, 110 57 C110 72, 130 87, 130 87 C130 87, 150 72, 150 57 C150 42, 135 42, 130 50 Z" fill="#ffb7c5" opacity="0.4" className="animate-pulse" />

        {/* Big Pink Heart behind Snoopy, with Text */}
        <path
          d="M80 50 C60 10, 10 10, 10 65 C10 115, 80 155, 80 155 C80 155, 150 115, 150 65 C150 10, 100 10, 80 50 Z"
          fill="#ffb7c5"
          stroke="#ff6b8b"
          strokeWidth="4"
          className="animate-pulse-slow"
          style={{ transformOrigin: '80px 85px' }}
        />
        
        {/* Heart Text */}
        <text
          x="80"
          y="85"
          fill="#ffffff"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Quicksand"
          textAnchor="middle"
          dy=".3em"
          className="drop-shadow-md select-none font-bold"
        >
          {text}
        </text>

        {/* Snoopy Hugging from the top/left */}
        {/* Head */}
        <circle cx="58" cy="48" r="16" fill="#FFFFFF" stroke="#333333" strokeWidth="4" />
        <ellipse cx="70" cy="51" rx="14" ry="11" fill="#FFFFFF" />
        <path d="M58 48 C68 48, 78 52, 82 54" stroke="#333333" strokeWidth="4" strokeLinecap="round" />
        
        {/* Nose */}
        <ellipse cx="82" cy="50" rx="4" ry="4" fill="#333333" />
        {/* Ear */}
        <path d="M46 48 C42 48, 38 60, 42 66 C46 70, 52 60, 46 48 Z" fill="#333333" />
        {/* Eye (smiling line) */}
        <path d="M62 43 C64 41, 66 41, 68 43" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" />
        {/* Cute hand gripping heart */}
        <circle cx="85" cy="72" r="7" fill="#FFFFFF" stroke="#333333" strokeWidth="3" />
        <circle cx="55" cy="85" r="7" fill="#FFFFFF" stroke="#333333" strokeWidth="3" />
        {/* Collar */}
        <rect x="49" y="58" width="10" height="3" rx="1.5" fill="#ff6b8b" stroke="#333333" strokeWidth="1.5" transform="rotate(25, 49, 58)" />
      </svg>
    </div>
  );
};

export const SnoopyWaving: React.FC<SnoopyProps> = ({ className = '', size = 110 }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`} style={{ width: size, height: size * 1.1 }}>
      <svg
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cute floor ground line */}
        <path d="M10 120 L110 120" stroke="#ffb7c5" strokeWidth="3" strokeLinecap="round" />
        
        {/* Snoopy Standing & Waving */}
        {/* Tail (moving) */}
        <path d="M32 95 C25 90, 22 93, 20 85 C22 80, 28 85, 34 92" fill="#FFFFFF" stroke="#333333" strokeWidth="3.5" className="origin-bottom-right animate-sway" />

        {/* Feet */}
        <rect x="42" y="105" width="14" height="15" rx="6" fill="#FFFFFF" stroke="#333333" strokeWidth="4" />
        <rect x="62" y="105" width="14" height="15" rx="6" fill="#FFFFFF" stroke="#333333" strokeWidth="4" />
        
        {/* Body */}
        <path d="M37 98 C35 75, 75 75, 73 98 C72 108, 38 108, 37 98 Z" fill="#FFFFFF" stroke="#333333" strokeWidth="4" strokeLinejoin="round" />
        
        {/* Arms */}
        {/* Left Arm down */}
        <path d="M38 78 C32 82, 28 88, 32 92 C36 94, 40 88, 41 82" fill="#FFFFFF" stroke="#333333" strokeWidth="3.5" />
        
        {/* Right Arm WAVING! (animated with rotate) */}
        <path 
          d="M68 76 C75 62, 85 58, 88 64 C90 70, 80 78, 72 80" 
          fill="#FFFFFF" 
          stroke="#333333" 
          strokeWidth="3.5"
          className="origin-[68px_78px] animate-bounce"
        />

        {/* Head */}
        <circle cx="55" cy="40" r="18" fill="#FFFFFF" stroke="#333333" strokeWidth="4" />
        <ellipse cx="68" cy="43" rx="16" ry="13" fill="#FFFFFF" />
        <path d="M55 40 C68 40, 80 43, 84 45" stroke="#333333" strokeWidth="4" strokeLinecap="round" />
        
        {/* Eye (smiling) */}
        <path d="M57 33 C60 31, 62 31, 64 33" stroke="#333333" strokeWidth="3" strokeLinecap="round" />
        
        {/* Nose */}
        <circle cx="86" cy="43" r="4.5" fill="#333333" />
        
        {/* Ear */}
        <path d="M43 38 C38 38, 34 50, 38 56 C42 60, 48 50, 43 38 Z" fill="#333333" />
        
        {/* Red Collar */}
        <path d="M47 52 C51 55, 58 55, 62 52" stroke="#ff6b8b" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export const SnoopyVolleyballPlayer: React.FC<SnoopyProps> = ({ className = '', size = 110 }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`} style={{ width: size, height: size * 1.15 }}>
      <svg
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Floor */}
        <path d="M10 115 L110 115" stroke="#ffb7c5" strokeWidth="3" strokeLinecap="round" />

        {/* Volleyball Net Line on Right */}
        <line x1="95" y1="40" x2="95" y2="115" stroke="#333333" strokeWidth="3" />
        {/* Net pattern mesh */}
        <line x1="95" y1="45" x2="115" y2="45" stroke="#da4a75" strokeWidth="2" opacity="0.4" />
        <line x1="95" y1="55" x2="115" y2="55" stroke="#da4a75" strokeWidth="2" opacity="0.4" />
        <line x1="95" y1="65" x2="115" y2="65" stroke="#da4a75" strokeWidth="2" opacity="0.4" />

        {/* Snoopy jumping to spike */}
        <g className="animate-bounce" style={{ animationDuration: '2.5s' }}>
          {/* Paw spiking */}
          <circle cx="65" cy="35" r="6" fill="#FFFFFF" stroke="#333333" strokeWidth="3" />
          <line x1="50" y1="52" x2="63" y2="38" stroke="#333333" strokeWidth="3.5" />

          {/* Body */}
          <path d="M25 78 C25 60, 55 60, 52 78 C50 88, 26 88, 25 78 Z" fill="#FFFFFF" stroke="#333333" strokeWidth="4" transform="rotate(-20, 38, 78)" />
          
          {/* Feet tucked in air */}
          <ellipse cx="23" cy="85" rx="8" ry="5" fill="#FFFFFF" stroke="#333333" strokeWidth="3" transform="rotate(-15, 23, 85)" />
          <ellipse cx="32" cy="88" rx="8" ry="5" fill="#FFFFFF" stroke="#333333" strokeWidth="3" transform="rotate(-15, 32, 88)" />

          {/* Head looking up */}
          <g transform="rotate(-10, 48, 42)">
            <circle cx="48" cy="42" r="16" fill="#FFFFFF" stroke="#333333" strokeWidth="4" />
            <ellipse cx="60" cy="44" rx="14" ry="11" fill="#FFFFFF" />
            <path d="M48 42 C60 42, 70 44, 74 46" stroke="#333333" strokeWidth="4" />
            <circle cx="74" cy="44" r="4.5" fill="#333333" /> {/* Nose */}
            <path d="M38 41 C34 41, 31 51, 34 56 C37 60, 42 52, 38 41 Z" fill="#333333" /> {/* Ear */}
            <path d="M50 37 Q53 35, 55 37" stroke="#333333" strokeWidth="2.5" /> {/* Eye */}
            <path d="M42 54 C45 56, 50 56, 53 54" stroke="#ff6b8b" strokeWidth="3" /> {/* Collar */}
          </g>
          
          {/* Tail */}
          <path d="M16 75 Q10 70, 12 65 Q17 68, 19 75" fill="#FFFFFF" stroke="#333333" strokeWidth="3" />
        </g>

        {/* Flying Volleyball overhead with motion trails */}
        <g className="animate-pulse">
          <circle cx="75" cy="22" r="12" fill="#FFFFFF" stroke="#ff6b8b" strokeWidth="3" />
          <path d="M66 22 Q75 25, 84 18M68 28 Q75 18, 81 29" stroke="#ff6b8b" strokeWidth="1.5" />
          {/* Sparkles */}
          <path d="M88 10 L92 6M92 10 L88 6" stroke="#ffb7c5" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M58 12 L60 8" stroke="#ffb7c5" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
};

export const SnoopyWalkingWithBalloon: React.FC<SnoopyProps> = ({ className = '', size = 120 }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`} style={{ width: size, height: size * 1.3 }}>
      {/* Balloon string with balloon */}
      <div className="absolute top-0 animate-sway origin-bottom" style={{ height: '55%', transformOrigin: 'bottom center', bottom: '65px' }}>
        <div className="w-10 h-12 bg-pink-400 rounded-full flex items-center justify-center relative shadow-sm border border-pink-300">
          <span className="text-white text-xs select-none font-bold">♥</span>
          {/* Balloon knot */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-400 rotate-45 border-r border-b border-pink-300" />
        </div>
        {/* Curvy string */}
        <svg viewBox="0 0 20 60" className="w-4 h-16 text-pink-400">
          <path d="M10 0 Q15 15, 5 30 T10 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-4/5 mt-auto"
      >
        {/* Floor */}
        <path d="M10 110 L115 110" stroke="#ffb7c5" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

        {/* Happy Snoopy Marching */}
        <g className="animate-sway" style={{ animationDuration: '3s' }}>
          {/* Tail */}
          <path d="M18 85 Q11 81, 14 74 Q19 77, 21 85" fill="#FFFFFF" stroke="#333333" strokeWidth="3" />

          {/* Left Foot walking */}
          <rect x="36" y="96" width="12" height="15" rx="5" fill="#FFFFFF" stroke="#333333" strokeWidth="3.5" className="animate-bounce" style={{ animationDuration: '0.8s' }} />
          {/* Right Foot */}
          <rect x="52" y="96" width="12" height="15" rx="5" fill="#FFFFFF" stroke="#333333" strokeWidth="3.5" className="animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0.4s' }} />

          {/* Body */}
          <path d="M28 85 C28 68, 60 68, 58 85 C57 93, 29 93, 28 85 Z" fill="#FFFFFF" stroke="#333333" strokeWidth="4" />

          {/* Arm holding string */}
          <path d="M48 74 C58 70, 68 64, 62 60 C58 58, 52 68, 48 74" fill="#FFFFFF" stroke="#333333" strokeWidth="3.5" />

          {/* Head */}
          <circle cx="48" cy="40" r="16" fill="#FFFFFF" stroke="#333333" strokeWidth="4" />
          <ellipse cx="60" cy="42" rx="14" ry="11" fill="#FFFFFF" />
          <path d="M48 40 C60 40, 70 42, 74 44" stroke="#333333" strokeWidth="4" />
          <circle cx="74" cy="42" r="4.5" fill="#333333" /> {/* Nose */}
          <path d="M38 39 C34 39, 31 49, 34 54 C37 57, 42 49, 38 39 Z" fill="#333333" /> {/* Ear */}
          <path d="M50 35 Q53 33, 56 35" stroke="#333333" strokeWidth="2.5" /> {/* Eye */}
          <path d="M42 52 C46 54, 52 54, 55 52" stroke="#ff6b8b" strokeWidth="3.5" /> {/* Collar */}
        </g>
      </svg>
    </div>
  );
};
