'use client';

import React, { useRef, useState, useEffect } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiAngular,
  SiThreedotjs,
  SiGreensock,
  SiFramer,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiPostman,
  SiStripe,
  SiRazorpay,
  SiWordpress
} from 'react-icons/si';
import { FaCss3Alt, FaAws } from 'react-icons/fa';

const skillIcons = [
  { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
  { icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
  { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  { icon: SiReact, color: '#61DAFB', name: 'React.js' },
  { icon: SiNextdotjs, color: '#FFFFFF', name: 'Next.js' },
  { icon: SiAngular, color: '#DD0031', name: 'Angular' },
  { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  { icon: SiExpress, color: '#FFFFFF', name: 'Express.js' },
  { icon: SiThreedotjs, color: '#FFFFFF', name: 'Three.js' },
  { icon: SiGreensock, color: '#88CE02', name: 'GSAP' },
  { icon: SiFramer, color: '#F107A3', name: 'Framer Motion' },
  { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
  { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  { icon: SiRedis, color: '#DC382D', name: 'Redis' },
  { icon: SiGit, color: '#F05032', name: 'Git' },
  { icon: SiGithub, color: '#FFFFFF', name: 'GitHub' },
  { icon: SiDocker, color: '#2496ED', name: 'Docker' },
  { icon: FaAws, color: '#FF9900', name: 'AWS' },
  { icon: SiWordpress, color: '#21759B', name: 'Wordpress' },
  { icon: SiFigma, color: '#F24E1E', name: 'Figma' },
  { icon: SiPostman, color: '#FF6C37', name: 'Postman' },
  { icon: SiStripe, color: '#635BFF', name: 'Stripe' },
  { icon: SiRazorpay, color: '#0A2540', name: 'Razorpay' }
];

const initialSlidesState = skillIcons.map((skill, index) => ({
  coords: { x: 0, y: 0 },
  theta: 0,
  index: index + 1,
  ...skill
}));

const numSlides = skillIcons.length;
const angle = 360 / numSlides;

export default function Skills() {
  const wheelRef = useRef<HTMLDivElement>(null);

  const [slides, setSlides] = useState(initialSlidesState);
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  const [wheelWidth, setWheelWidth] = useState(0);
  const [theta, setTheta] = useState(Math.PI / (numSlides / 2));
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState(0);

  const getInitialPositions = () => {
    if (!wheelRef.current) {
      return;
    }
    const center = {
      x: parseFloat(getComputedStyle(wheelRef.current).width) / 2,
      y: parseFloat(getComputedStyle(wheelRef.current).width) / 2
    };

    setCenter(center);
    setWheelWidth(parseFloat(getComputedStyle(wheelRef.current).width));
  };

  useEffect(() => {
    if (!wheelRef.current) {
      return;
    }
    getInitialPositions();
    window.addEventListener("resize", getInitialPositions);
    return () => window.removeEventListener("resize", getInitialPositions);
  }, []);

  useEffect(() => {
    if (!wheelWidth) {
      return;
    }

    const positionedSlides = slides.map((slide, index) => {
      const newTheta = theta * (index + numSlides);
      const wheelRadius = wheelWidth / 2;
      const x = Math.cos(newTheta) * -wheelRadius;
      const y = Math.sin(newTheta) * -wheelRadius;

      return {
        ...slide,
        coords: { x, y }
      };
    });

    setSlides(positionedSlides);
  }, [wheelWidth, theta]);

  const handleSlideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const nextIndex = parseFloat(e.currentTarget.dataset.index || "1");
    const currentIndex = activeSlide.index;

    setActiveSlide(slides[nextIndex - 1]);

    let numOfRotations = nextIndex - currentIndex;

    if (numOfRotations < -numSlides / 2) {
      numOfRotations = numOfRotations + numSlides;
    }

    if (numOfRotations > numSlides / 2) {
      numOfRotations = numOfRotations - numSlides;
    }

    setRotate((prevRotate) => prevRotate + angle * numOfRotations);
  };

  return (
    <section id="skills" className="skills-carousel-container footer-grid-bg">
      <style>{`
        .skills-carousel-container {
          --easing: cubic-bezier(0.18, 0.89, 0.32, 1.27);
          --duration: 0.5s;
          position: relative;
          width: 100vw;
          min-height: 100vh;
          overflow: hidden;
        }

        .skills-wheel {
          width: 85vmin;
          height: 85vmin;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: transform var(--duration) var(--easing);
        }

        .skills-slide {
          width: 7.5vmin;
          height: 7.5vmin;
          border-radius: 50%;
          overflow: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: transform var(--duration) var(--easing), border-color var(--duration) var(--easing), background-color var(--duration) var(--easing);
          border: 1px solid rgba(255,255,255,0.15);
          background-color: rgba(15, 15, 15, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
        }

        .skills-slide.active {
          border: 0.3vmin solid white;
          background-color: rgba(30, 30, 30, 0.95);
          box-shadow: 0 0 20px rgba(255,255,255,0.1);
          z-index: 10;
        }

        .skills-slide svg {
          width: 50%;
          height: 50%;
          pointer-events: none;
        }
      `}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-display text-4xl sm:text-5xl md:text-7xl font-black text-neutral-200 uppercase tracking-[0.1em] pointer-events-none select-none drop-shadow-lg flex flex-col items-center gap-2">
        <span>SKILLS</span>
        <span className="text-sm sm:text-xl md:text-2xl font-sans tracking-normal text-neutral-400 opacity-80" style={{ color: activeSlide.color }}>
          {activeSlide.name}
        </span>
      </div>

      <div
        ref={wheelRef}
        className="skills-wheel"
        style={{
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`
        }}
      >
        {slides &&
          slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <div
                onClick={handleSlideClick}
                key={index}
                data-index={index + 1}
                className={`skills-slide ${slide.index === activeSlide.index ? "active" : ""}`}
                style={{
                  top: center.x + slide.coords.x,
                  left: center.y + slide.coords.y,
                  transform: `translate(-50%, -50%) rotate(${-rotate}deg)`
                }}
                title={slide.name}
              >
                <Icon style={{ color: slide.color }} />
              </div>
            );
          })}
      </div>
    </section>
  );
}
