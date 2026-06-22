import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col justify-start items-center overflow-hidden">
      {/* Top Navigation */}
      <header className="w-full z-30">
        <nav className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-8 pb-3 flex justify-between items-center text-xs md:text-sm font-bold tracking-[0.25em] text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors duration-300">ABOUT</a>
          <a href="#customers" className="hover:text-white transition-colors duration-300">CUSTOMERS</a>
          <a href="#projects" className="hover:text-white transition-colors duration-300">PROJECTS</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">CONTACT</a>
        </nav>
      </header>

      {/* Main Content Area: Giant Text and Bitmoji Head */}
      <div className="relative w-full z-10 px-4 pt-1 md:pt-2 flex flex-col items-center">
        <div className="relative w-full flex flex-col items-center">
          {/* Giant Title behind the bitmoji */}
          <h1 className="font-display text-[10.5vw] font-black tracking-[-0.05em] leading-none text-center select-none silver-gradient-text z-0 whitespace-nowrap">
            HI, I&apos;M HASEEM
          </h1>

          {/* Bitmoji Head overlapping the text */}
          <div className="absolute top-[35%] sm:top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[440px] md:w-[500px] lg:w-[550px] aspect-square z-10 animate-float pointer-events-none">
            <Image
              src="/assets/Images/bitmoji.png"
              alt="Alex Bitmoji"
              fill
              priority
              className="object-contain"
              sizes="(max-w-640px) 340px, (max-w-768px) 440px, (max-w-1024px) 500px, 550px"
            />
          </div>
        </div>
      </div>

      {/* Bottom Content Row: Positioned relative to the title with margin-top to keep it higher on the page */}
      <div className="w-full max-w-7xl mx-auto px-8 mt-16 sm:mt-24 md:mt-32 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 z-20">
        {/* Left Side Subtext */}
        <div className="max-w-[340px] text-left">
          <p className="font-sans text-[12.5px] md:text-[13.5px] font-bold leading-relaxed tracking-[0.08em] text-neutral-400 uppercase">
            FULL STACK DEVELOPER<br />
            SPECIALIZING IN SCALABLE WEB APPS<br />
            & INTERACTIVE 3D WEBSITES 💻
          </p>
        </div>

        {/* Right Side Glow Button */}
        <div className="flex items-center justify-end w-full md:w-auto">
          <button className="glow-button group">
            CONTACT ME
            <svg
              className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
