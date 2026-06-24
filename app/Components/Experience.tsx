"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function Experience() {
  const [active, setActive] = useState<(typeof experiences)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="experience" className="relative w-full min-h-screen bg-black flex flex-col items-center justify-start py-24 px-6 sm:px-12 md:px-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Heading Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mb-16 select-none">
        <span className="font-handwritten text-4xl sm:text-5xl text-neutral-400 tracking-wider mb-2">
          My Journey
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none silver-gradient-text uppercase">
          Work Experience
        </h2>
        <p className="mt-4 max-w-lg text-sm sm:text-base text-neutral-400 font-medium font-sans">
          A history of building production-grade enterprise platforms, real-time booking engines, and dynamic web applications.
        </p>
      </div>

      {/* Modal/Overlay Animation */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm h-full w-full z-[100]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[101] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-4 right-4 items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white rounded-full h-8 w-8 border border-neutral-800 cursor-pointer transition-colors z-[102]"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[550px] h-fit max-h-[92%] flex flex-col bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-64 sm:h-72 w-full">
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {active.company}
                  </span>
                </div>
              </motion.div>

              <div className="flex-1 flex flex-col p-6 min-h-0">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-xl sm:text-2xl text-white font-sans"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-sm text-neutral-400 mt-1 font-medium font-sans"
                    >
                      {active.period} | {active.location}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    className="px-4 py-2 text-xs font-bold rounded-full bg-white hover:bg-neutral-200 text-black transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="relative flex-1 overflow-y-auto pr-1 max-h-[220px] custom-scrollbar">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 text-sm leading-relaxed flex flex-col gap-4 font-sans"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Timeline List of Experience Cards */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-6">
        {experiences.map((experience) => (
          <motion.div
            layoutId={`card-${experience.title}-${id}`}
            key={`card-${experience.title}-${id}`}
            onClick={() => setActive(experience)}
            className="group p-5 flex flex-col md:flex-row justify-between items-center bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/60 hover:border-neutral-700/80 rounded-2xl cursor-pointer transition-all duration-300 shadow-sm"
          >
            <div className="flex gap-5 flex-col md:flex-row items-center w-full md:w-auto">
              <motion.div 
                layoutId={`image-${experience.title}-${id}`}
                className="relative h-28 w-28 md:h-16 md:w-16 rounded-xl overflow-hidden shrink-0 border border-neutral-800"
              >
                <img
                  src={experience.src}
                  alt={experience.title}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <div className="flex flex-col text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                  <motion.h3
                    layoutId={`title-${experience.title}-${id}`}
                    className="font-bold text-white text-lg font-sans"
                  >
                    {experience.title}
                  </motion.h3>
                  <span className="hidden md:inline text-neutral-600">•</span>
                  <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold md:mt-0.5">
                    {experience.company}
                  </span>
                </div>
                <motion.p
                  layoutId={`description-${experience.description}-${id}`}
                  className="text-sm text-neutral-400 mt-1 font-medium font-sans"
                >
                  {experience.description}
                </motion.p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 shrink-0">
              <span className="text-xs text-neutral-500 font-semibold mb-2 font-sans">
                {experience.period}
              </span>
              <motion.button
                layoutId={`button-${experience.title}-${id}`}
                className="px-4 py-2 text-xs font-bold rounded-full bg-neutral-800 hover:bg-white hover:text-black text-white border border-neutral-700 hover:border-white transition-all duration-300"
              >
                {experience.ctaText}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4.5 w-4.5"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const experiences = [
  {
    company: "Enterprise ERP & AI Labs",
    title: "AI & Full Stack Lead",
    period: "2024 - Present",
    location: "Remote / Hybrid",
    description: "Building production-grade AI-powered ERP platforms and telemetry dashboards.",
    src: "/assets/Images/experience_erp_thumb.png",
    ctaText: "Details",
    ctaLink: "#contact",
    content: () => {
      return (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            Led the architectural design and full stack development of an AI-powered Enterprise Resource Planning (ERP) platform. Built specialized modules to process large datasets, streamline logistics operations, and deliver real-time system logs.
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-neutral-400 text-xs">
            <li>Designed interactive telemetry and sensor dashboards tracking real-time status updates and machine loading graphs.</li>
            <li>Optimized Postgres SQL query pipelines and implemented Redis state caching, resulting in a 40% latency reduction.</li>
            <li>Engineered highly reactive React client views featuring fluid state-machine state management and layout transitions.</li>
            <li>Collaborated with product designers to implement a custom design system based on Tailwind CSS v4.0.</li>
          </ul>
        </div>
      );
    },
  },
  {
    company: "GCC Mobility Solutions",
    title: "Senior Booking Engine Architect",
    period: "2022 - 2024",
    location: "GCC Market (Remote)",
    description: "Architected high-volume real-time car rental checkout flows and digital dashboards.",
    src: "/assets/Images/experience_rental_thumb.png",
    ctaText: "Details",
    ctaLink: "#contact",
    content: () => {
      return (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            Re-engineered booking modules and checkout processes for a major GCC-based car rental platform, handling thousands of transactions daily. Implemented complex location visualization and price computation engines.
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-neutral-400 text-xs">
            <li>Integrated third-party Mapbox SDK for custom interactive pickup station overlays and dynamic radius search filters.</li>
            <li>Built high-reliability checkout flows, reducing checkout friction and increasing conversion rates by 15%.</li>
            <li>Crafted reusable chart widgets, analytics dashboard cards, and localized calendars supporting RTL (Arabic) languages.</li>
            <li>Implemented end-to-end integration testing for booking transactions, ensuring 99.9% uptime validation.</li>
          </ul>
        </div>
      );
    },
  },
  {
    company: "Creative Studio & Labs",
    title: "Creative Developer & Consultant",
    period: "2021 - 2022",
    location: "Freelance",
    description: "Crafted interactive portfolios, custom SVG layout engines, and high-performance sites.",
    src: "/assets/Images/experience_creative_thumb.png",
    ctaText: "Details",
    ctaLink: "#contact",
    content: () => {
      return (
        <div className="flex flex-col gap-3 font-sans">
          <p>
            Partnered with design agencies and tech startups to create highly immersive, brand-focused web properties. Specialized in complex canvas layouts, web physics animations, and strict SEO compliance.
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-neutral-400 text-xs">
            <li>Developed customized 3D landing experiences utilizing Three.js shaders and GSAP ScrollTriggers.</li>
            <li>Achieved Lighthouse scores of 98+ across all metrics by applying aggressive asset optimizations and SSR patterns.</li>
            <li>Ensured strict WCAG accessibility compliance across interactive layout components and customized inputs.</li>
            <li>Wrote custom PostCSS utilities and responsive grids matching bespoke design specs.</li>
          </ul>
        </div>
      );
    },
  },
];
