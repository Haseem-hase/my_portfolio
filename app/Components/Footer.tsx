'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="relative w-full footer-grid-bg text-[#FAF8F5] overflow-hidden select-none py-16 md:py-24 px-6 sm:px-12 lg:px-20 border-t border-neutral-900 font-sans">
      {/* Grainy Noise Overlay */}
      <div className="noise-overlay" />

      {/* Top Section: 3 Columns Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start w-full max-w-7xl mx-auto">

        {/* Left Column: Brand Wordmark */}
        <div className="flex flex-col items-start justify-start">
          <span className="font-bebas text-3xl sm:text-4xl italic tracking-wider font-bold text-[#FAF8F5]">
            HASEEM KV®
          </span>
        </div>

        {/* Center Column: Bracketed Navigation Links */}
        <div className="flex justify-start md:justify-center">
          <div className="font-sans text-[12px] tracking-widest text-[#FAF8F5]/90 font-bold select-none flex flex-col gap-3">
            <div className="flex justify-between w-[200px] text-[#FAF8F5]">
              <span>[ &nbsp; HOME</span>
              <span>]</span>
            </div>
            <div className="pl-[20px] flex flex-col gap-3">
              <a href="#" className="hover:text-[#C5FF41] transition-colors block">
                ABOUT
              </a>
              <a href="#experience" className="hover:text-[#C5FF41] transition-colors block">
                TESTIMONIALS
              </a>
              <a href="#contact" className="hover:text-[#C5FF41] transition-colors block">
                CONTACT
              </a>
              <a href="#projects" className="hover:text-[#C5FF41] transition-colors block">
                STORE
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Newsletter Signup */}
        <div className="flex flex-col items-start md:items-end w-full">
          <div className="w-full max-w-sm flex flex-col items-start md:items-start gap-4">
            {/* Title */}
            <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide font-bold text-[#FAF8F5] flex justify-between w-full uppercase">
              <span>SIGN UP</span>
              <span>TO OUR</span>
              <span>NEWSLETTER</span>
            </h3>

            {/* Input Pill Box */}
            <form onSubmit={handleSubmit} className="relative w-full group">
              <input
                type="email"
                required
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#C5FF41] text-black placeholder-black/60 font-bold text-xs tracking-wider rounded-full py-4 px-6 pr-14 focus:outline-none focus:ring-2 focus:ring-[#C5FF41]/50 transition-all uppercase"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-neutral-900 transition-colors shadow-md cursor-pointer"
                aria-label="Submit Newsletter"
              >
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  {/* Diagonal down-right arrow */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l10 10m0 0v-8m0 8H9" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Middle Section: Giant Edge-to-Edge Slanted and Warped Wordmark */}
      <div className="relative z-10 w-full overflow-visible flex items-center justify-center px-6 md:px-12 my-12 md:my-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex items-center justify-center font-anton text-[11.5vw] sm:text-[12.5vw] tracking-[-0.05em] uppercase leading-[0.7] font-bold text-[#FAF8F5] select-none py-10 overflow-visible"
          style={{
            transformOrigin: 'center center',
          }}
        >
          {"CONTACT ME".split("").map((char, index) => {
            if (char === " ") {
              return <span key={index} style={{ width: "0.22em", display: "inline-block" }} />;
            }
            
            const x = (index - 4.5) / 4.5;
            // scaleY: 0.75 in the center, 1.55 at the ends
            const scaleYVal = 0.75 + 0.8 * (x * x);
            // translateY: 0.1em in center, -0.22em at ends
            const translateYVal = 0.1 - 0.32 * (x * x);
            // skewX: tilts inwards toward the center (-20deg on left, +20deg on right)
            const skewXVal = x * 20;

            return (
              <span
                key={index}
                style={{
                  transform: `translateY(${translateYVal}em) scaleY(${scaleYVal}) skewX(${skewXVal}deg)`,
                  display: 'inline-block',
                  marginRight: '-0.025em',
                  WebkitTextStroke: '5px #0c0c0c',
                  paintOrder: 'stroke fill',
                }}
              >
                {char}
              </span>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Section: Footer Metas and Credits */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-8 border-t border-[#FAF8F5]/10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-start">

        {/* Copyright */}
        <div className="flex flex-col font-sans text-[10px] tracking-widest text-[#FAF8F5]/50 font-bold leading-relaxed uppercase">
          <span>© HASEEM KV /</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

        {/* Disclaimer / Public Offer */}
        <div className="flex flex-col font-sans text-[10px] tracking-widest text-[#FAF8F5]/50 font-bold leading-relaxed uppercase">
          <a href="#" className="hover:text-white transition-colors">
            SHIPPING HANDLING DISCLAIMER
          </a>
          <a href="#" className="hover:text-white transition-colors">
            PUBLIC OFFER
          </a>
        </div>

        {/* Social Links */}
        <div className="flex font-sans text-[10px] tracking-widest font-extrabold gap-4 uppercase">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#C5FF41] hover:text-white transition-colors">
            FACEBOOK
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#C5FF41] hover:text-white transition-colors">
            INSTAGRAM
          </a>
        </div>

        {/* Designer Credits */}
        <div className="flex flex-col font-sans text-[10px] tracking-widest text-[#FAF8F5]/50 font-bold leading-relaxed uppercase md:text-right">
          <span>DESIGN BY</span>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF8F5] underline hover:text-[#C5FF41] transition-colors"
          >
            ANASTASIIA HODUBIAK
          </a>
        </div>

      </div>
    </footer>
  );
}
