'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const outer = outerRef.current;
    const inner = innerRef.current;

    if (!container || !outer || !inner) return;

    // Set perspective on the parent of the rotating outer element (the float container)
    if (outer.parentElement) {
      gsap.set(outer.parentElement, { perspective: 800 });
    }

    // Set up quickTo interpolation for smooth transitions
    const outerRX = gsap.quickTo(outer, "rotationX", { ease: "power3", duration: 0.6 });
    const outerRY = gsap.quickTo(outer, "rotationY", { ease: "power3", duration: 0.6 });
    const innerX = gsap.quickTo(inner, "x", { ease: "power3", duration: 0.6 });
    const innerY = gsap.quickTo(inner, "y", { ease: "power3", duration: 0.6 });

    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate relative position percentage (0 to 1)
      const xPercent = clientX / width;
      const yPercent = clientY / height;

      // Calculate rotations and offsets
      // outerRX: rotationX from 15 to -15 based on vertical cursor position
      // outerRY: rotationY from -15 to 15 based on horizontal cursor position
      // innerX: offset X from -30 to 30 based on horizontal cursor position
      // innerY: offset Y from -30 to 30 based on vertical cursor position
      outerRX(gsap.utils.interpolate(15, -15, yPercent));
      outerRY(gsap.utils.interpolate(-15, 15, xPercent));
      innerX(gsap.utils.interpolate(-30, 30, xPercent));
      innerY(gsap.utils.interpolate(-30, 30, yPercent));
    };

    const handlePointerLeave = () => {
      // Reset position when pointer leaves the container
      outerRX(0);
      outerRY(0);
      innerX(0);
      innerY(0);
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black flex flex-col justify-start items-center overflow-hidden">
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
          <div className="absolute top-[35%] sm:top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 w-[400px] sm:w-[520px] md:w-[600px] lg:w-[680px] aspect-square z-10 animate-float pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
            <div ref={outerRef} className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
              <div ref={innerRef} className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
                <Image
                  src="/assets/Images/myBitmoji.png"
                  alt="Alex Bitmoji"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-w-640px) 400px, (max-w-768px) 520px, (max-w-1024px) 600px, 680px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content Row: Positioned relative to the title with margin-top to keep it higher on the page */}
      <div className="w-full max-w-7xl mx-auto px-8 mt-16 sm:mt-24 md:mt-32 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 z-20">
        {/* Left Side Subtext */}
        <div className="max-w-[340px] text-left">
          <p className="font-sans text-[12.5px] md:text-[13.5px] font-medium leading-relaxed tracking-[0.05em] text-neutral-400">
            <span className="font-bold uppercase block mb-1.5 tracking-[0.08em] text-neutral-300">FULL STACK DEVELOPER</span>
            I build fast, scalable web apps — from sleek React frontends to solid Node.js backends. Currently based in Riyadh, open to exciting opportunities.
          </p>
        </div>

        {/* Right Side Glow Button */}
        <div className="flex items-center justify-end w-full md:w-auto">
          <button className="glow-button group">
            LET'S CONNECT
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
