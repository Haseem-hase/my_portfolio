'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Helper to generate points for a star polygon (stamp seal)
const getStarPoints = (cx: number, cy: number, points: number, outerRadius: number, innerRadius: number) => {
  const arr = [];
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points;
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const x = cx + r * Math.sin(angle);
    const y = cy - r * Math.cos(angle);
    arr.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return arr.join(' ');
};

interface StickerProps {
  id: string;
  x: string;
  y: string;
  rotate: number;
  link?: string;
  children: React.ReactNode;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}

const DraggableSticker: React.FC<StickerProps> = ({ x, y, rotate, link, children, constraintsRef }) => {
  const handleTap = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.15}
      whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'grabbing' }}
      onTap={handleTap}
      initial={{ x: 0, y: 0 }}
      style={{ left: x, top: y, rotate: `${rotate}deg` }}
      className="absolute cursor-grab select-none active:cursor-grabbing hover:drop-shadow-2xl"
    >
      {children}
    </motion.div>
  );
};

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Math-generated point sets for seals
  const starPoints = getStarPoints(50, 50, 20, 48, 41);
  const wavyPoints = getStarPoints(50, 50, 28, 48, 45);

  return (
    <footer 
      ref={containerRef}
      className="relative w-full bg-black text-white flex flex-col pt-10 overflow-hidden select-none border-t border-neutral-900"
    >
      {/* Infinite scrolling marquee heading */}
      <div className="w-full overflow-hidden border-b border-white/10 pb-3 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-[9vw] sm:text-[7vw] font-display uppercase tracking-tight text-white leading-none mr-8">
            CONTACT ME ✦ CONTACT ME ✦ CONTACT ME ✦ CONTACT ME ✦
          </span>
          <span className="text-[9vw] sm:text-[7vw] font-display uppercase tracking-tight text-white leading-none mr-8">
            CONTACT ME ✦ CONTACT ME ✦ CONTACT ME ✦ CONTACT ME ✦
          </span>
        </div>
      </div>

      {/* Footer Meta Row: 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 sm:px-12 md:px-16 py-6 text-[10px] sm:text-[11px] font-sans tracking-widest text-neutral-400 font-bold uppercase select-none">
        <div className="max-w-xs leading-relaxed">
          I&apos;m here to help you turn your brief into something brilliant.
        </div>
        <div className="md:text-center leading-relaxed">
          Just drop<br />me a line
        </div>
        <div className="md:text-right leading-relaxed">
          &copy; {new Date().getFullYear()} ALL RIGHTS<br />RESERVED
        </div>
      </div>

      {/* Draggable Stickers Board Area (Congested Layout Spanning Full Width) */}
      <div className="relative w-full h-[280px] sm:h-[310px] px-6 sm:px-12 md:px-16 mt-4 overflow-hidden z-10">
        
        {/* Jagged Seal (Rock-on) */}
        <DraggableSticker x="10%" y="4%" rotate={12} constraintsRef={containerRef} id="seal-rock">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center filter drop-shadow-lg">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <polygon points={starPoints} fill="#FAF8F5" stroke="#E5DEC9" strokeWidth="1.2" />
              <circle cx="50" cy="50" r="33" fill="none" stroke="#EADEC9" strokeWidth="1" strokeDasharray="2,2" />
              <path id="path-rock" fill="none" d="M 50 17 a 33 33 0 1 1 0 66 a 33 33 0 1 1 0 -66" />
              <g className="animate-[spin_25s_linear_infinite] origin-[50px_50px]">
                <text className="text-[6.5px] uppercase font-bold tracking-[0.18em] fill-neutral-600 font-sans">
                  <textPath href="#path-rock" startOffset="0%">
                    drag me • drag me • drag me • 
                  </textPath>
                </text>
              </g>
            </svg>
            <span className="text-2xl sm:text-3xl z-10 rotate-[-5deg] pointer-events-none">🤘</span>
          </div>
        </DraggableSticker>

        {/* GitHub Capsule Sticker */}
        <DraggableSticker x="6%" y="42%" rotate={-8} link="https://github.com" constraintsRef={containerRef} id="github">
          <div className="px-8 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#1A1A1A] font-sans font-extrabold text-[13px] sm:text-[15px] tracking-widest uppercase shadow-md hover:bg-neutral-50 transition-colors">
            GITHUB
          </div>
        </DraggableSticker>

        {/* LinkedIn Capsule Sticker */}
        <DraggableSticker x="20%" y="52%" rotate={-15} link="https://linkedin.com" constraintsRef={containerRef} id="linkedin">
          <div className="px-8 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#1A1A1A] font-sans font-extrabold text-[13px] sm:text-[15px] tracking-widest uppercase shadow-md hover:bg-neutral-50 transition-colors">
            LINKEDIN
          </div>
        </DraggableSticker>

        {/* Instagram Capsule Sticker */}
        <DraggableSticker x="24%" y="6%" rotate={-10} link="https://instagram.com" constraintsRef={containerRef} id="instagram">
          <div className="px-8 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#1A1A1A] font-sans font-extrabold text-[13px] sm:text-[15px] tracking-widest uppercase shadow-md hover:bg-neutral-50 transition-colors">
            INSTAGRAM
          </div>
        </DraggableSticker>

        {/* Peeled Sticker (Tongue) */}
        <DraggableSticker x="34%" y="30%" rotate={-5} constraintsRef={containerRef} id="seal-tongue">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center filter drop-shadow-lg">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <circle cx="50" cy="50" r="46" fill="#FAF8F5" stroke="#E5DEC9" strokeWidth="1.2" />
              {/* Peeled fold graphic at bottom-left */}
              <path d="M 14 62 C 20 62, 38 80, 38 86 C 30 84, 16 70, 14 62 Z" fill="#E5DEC9" />
              <path d="M 14 62 C 20 68, 32 80, 38 86 C 30 80, 20 68, 14 62 Z" fill="#FFFFFF" stroke="#DCD3C1" strokeWidth="0.5" />
              
              <circle cx="50" cy="50" r="33" fill="none" stroke="#EADEC9" strokeWidth="1" strokeDasharray="2,2" />
              <path id="path-tongue" fill="none" d="M 50 17 a 33 33 0 1 1 0 66 a 33 33 0 1 1 0 -66" />
              <g className="animate-[spin_30s_linear_infinite] origin-[50px_50px]">
                <text className="text-[6.5px] uppercase font-bold tracking-[0.18em] fill-neutral-600 font-sans">
                  <textPath href="#path-tongue" startOffset="0%">
                    drag me • drag me • drag me • 
                  </textPath>
                </text>
              </g>
            </svg>
            <span className="text-2xl sm:text-3xl z-10 pointer-events-none">👅</span>
          </div>
        </DraggableSticker>

        {/* WhatsApp Capsule Sticker */}
        <DraggableSticker x="36%" y="54%" rotate={6} link="https://wa.me/" constraintsRef={containerRef} id="whatsapp">
          <div className="px-8 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#1A1A1A] font-sans font-extrabold text-[13px] sm:text-[15px] tracking-widest uppercase shadow-md hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1.5">
            WHATSAPP
          </div>
        </DraggableSticker>

        {/* Behance Capsule Sticker */}
        <DraggableSticker x="46%" y="10%" rotate={8} link="https://behance.net" constraintsRef={containerRef} id="behance">
          <div className="px-8 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#1A1A1A] font-sans font-extrabold text-[13px] sm:text-[15px] tracking-widest uppercase shadow-md hover:bg-neutral-50 transition-colors">
            BEHANCE
          </div>
        </DraggableSticker>

        {/* Dribbble Capsule Sticker */}
        <DraggableSticker x="54%" y="48%" rotate={-12} link="https://dribbble.com" constraintsRef={containerRef} id="dribbble">
          <div className="px-8 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#1A1A1A] font-sans font-extrabold text-[13px] sm:text-[15px] tracking-widest uppercase shadow-md hover:bg-neutral-50 transition-colors">
            DRIBBBLE
          </div>
        </DraggableSticker>

        {/* Twitter Capsule Sticker */}
        <DraggableSticker x="60%" y="8%" rotate={12} link="https://x.com" constraintsRef={containerRef} id="twitter">
          <div className="px-8 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#1A1A1A] font-sans font-extrabold text-[13px] sm:text-[15px] tracking-widest uppercase shadow-md hover:bg-neutral-50 transition-colors">
            TWITTER
          </div>
        </DraggableSticker>

        {/* Facebook Capsule Sticker */}
        <DraggableSticker x="68%" y="52%" rotate={-5} link="https://facebook.com" constraintsRef={containerRef} id="facebook">
          <div className="px-8 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#1A1A1A] font-sans font-extrabold text-[13px] sm:text-[15px] tracking-widest uppercase shadow-md hover:bg-neutral-50 transition-colors">
            FACEBOOK
          </div>
        </DraggableSticker>

        {/* Resume Capsule Sticker */}
        <DraggableSticker x="76%" y="6%" rotate={5} link="#contact" constraintsRef={containerRef} id="resume">
          <div className="px-8 py-3.5 rounded-full bg-[#FAF8F5] border border-[#E5DEC9] text-[#1A1A1A] font-sans font-extrabold text-[13px] sm:text-[15px] tracking-widest uppercase shadow-md hover:bg-neutral-50 transition-colors">
            RESUME
          </div>
        </DraggableSticker>

        {/* Wavy Stamp Seal (Heart + Lightning) */}
        <DraggableSticker x="72%" y="24%" rotate={15} constraintsRef={containerRef} id="seal-heart">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center filter drop-shadow-lg">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <polygon points={wavyPoints} fill="#FAF8F5" stroke="#E5DEC9" strokeWidth="1.2" />
              <circle cx="50" cy="50" r="33" fill="none" stroke="#EADEC9" strokeWidth="1" strokeDasharray="2,2" />
              <path id="path-heart" fill="none" d="M 50 17 a 33 33 0 1 1 0 66 a 33 33 0 1 1 0 -66" />
              <g className="animate-[spin_20s_linear_infinite] origin-[50px_50px]">
                <text className="text-[6.5px] uppercase font-bold tracking-[0.18em] fill-neutral-600 font-sans">
                  <textPath href="#path-heart" startOffset="0%">
                    drag me • drag me • drag me • 
                  </textPath>
                </text>
              </g>
            </svg>
            <div className="relative flex items-center justify-center z-10 pointer-events-none select-none">
              <span className="text-2xl sm:text-3xl">❤️</span>
              <span className="absolute text-[12px] sm:text-[14px] translate-x-[7px] translate-y-[-6px] select-none text-yellow-400 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">⚡</span>
            </div>
          </div>
        </DraggableSticker>

        {/* Big subtle email row in the background */}
        <div className="absolute inset-x-0 bottom-0 text-center py-2 z-0 select-all pointer-events-none">
          <a
            href="mailto:hasehaseem04@gmail.com"
            className="font-sans font-black uppercase text-[5vw] tracking-tight leading-none text-[#161616] hover:text-[#252525] transition-colors pointer-events-auto"
          >
            hasehaseem04@gmail.com
          </a>
        </div>
      </div>

      {/* Marquee Animation styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </footer>
  );
}
