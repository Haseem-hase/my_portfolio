'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-black flex items-center justify-center py-20 px-6 sm:px-12 md:px-16 overflow-hidden">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Overlapping Black and White Photos */}
        <div className="relative w-full max-w-[520px] aspect-[4/4.5] sm:aspect-[4/4.1] lg:aspect-[4/4.5] mx-auto min-h-[450px] sm:min-h-[550px] z-10">
          
          {/* Background Photo with thick white border (Polaroid style) */}
          <div className="absolute left-[2%] top-[2%] w-[66%] aspect-[3/4] rotate-[-7deg] border-[8px] sm:border-[10px] border-neutral-100 shadow-2xl z-0 rounded-lg overflow-hidden transition-all duration-500 hover:rotate-[-9deg] hover:scale-[1.03]">
            <Image
              src="/assets/Images/IMG_3480.webp"
              alt="Haseem Portrait Background"
              fill
              className="object-cover grayscale brightness-95"
              sizes="(max-w-768px) 350px, 500px"
            />
          </div>

          {/* Foreground Photo with a dark border and deep drop shadow */}
          <div className="absolute right-[2%] bottom-[2%] w-[66%] aspect-[3/4] rotate-[5deg] border-4 border-neutral-950 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 rounded-lg overflow-hidden transition-all duration-500 hover:rotate-[3deg] hover:scale-[1.03]">
            <Image
              src="/assets/Images/IMG_3525.webp"
              alt="Haseem Portrait Foreground"
              fill
              className="object-cover grayscale brightness-105"
              sizes="(max-w-768px) 350px, 500px"
              priority
            />
          </div>
        </div>

        {/* Right Side: Narrative and Title */}
        <div className="flex flex-col text-left z-20">
          
          {/* Title Area: Cursive Silver and Bold White */}
          <div className="relative mb-8 select-none">
            <h2 className="font-handwritten text-6xl sm:text-7xl md:text-8xl font-bold text-neutral-200 tracking-wider leading-none transform origin-left">
              FULL STACK
            </h2>
            <div className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mt-[-8px] sm:mt-[-12px] pl-1">
              DEVELOPER
            </div>
          </div>

          {/* Main Subtext / Description */}
          <div className="flex flex-col text-left max-w-xl font-sans">
            <p className="text-neutral-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6 font-medium">
              Hi, I&apos;m <strong className="text-white font-bold">Haseem</strong>! I&apos;m a <strong className="text-white font-bold">full-stack developer</strong> dedicated to turning complex ideas into digital masterpieces.
            </p>
            
            <p className="text-neutral-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-8 font-medium">
              For me, <strong className="text-white font-bold">web development</strong> is not just about writing clean lines of code, but building a <strong className="text-white font-bold">powerful digital experience</strong> that leaves a lasting impression and perfectly communicates your vision.
            </p>
            
            {/* Highlighter Styled Call to Action (High-Contrast White Sticker style) */}
            <div className="mt-2 flex flex-col items-start gap-2.5">
              <span className="bg-white text-black text-xs sm:text-sm md:text-[15px] font-extrabold px-3 py-1.5 uppercase tracking-wide rotate-[-1deg] transform shadow-md">
                Together we can create a product
              </span>
              <span className="bg-white text-black text-xs sm:text-sm md:text-[15px] font-extrabold px-3 py-1.5 uppercase tracking-wide rotate-[0.5deg] transform shadow-md mt-0.5">
                that will speak for itself!
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
