'use client';

import React, { useRef, useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1560787313-5dff3307e257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
];

const initialSlidesState = images.map((slide, index) => ({
  coords: {
    x: 0,
    y: 0
  },
  theta: 0,
  index: index + 1,
  image: slide
}));

const numSlides = images.length;
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
  }, [wheelWidth, theta]); // Added theta as a dependency just to satisfy linter usually, but logically safe here

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
          width: 65vmin;
          height: 65vmin;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: transform var(--duration) var(--easing);
        }

        .skills-slide {
          width: 15vmin;
          height: 15vmin;
          border-radius: 50%;
          overflow: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: transform var(--duration) var(--easing);
          border: 0.3vmin solid white;
        }

        .skills-slide img {
          user-select: none;
        }

        .skills-slide.active {
          border-width: 1.3vmin;
        }

        .skills-slide img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }


      `}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-display text-4xl sm:text-5xl md:text-7xl font-black text-neutral-200 uppercase tracking-[0.1em] pointer-events-none select-none drop-shadow-lg">
        SKILLS
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
              >
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
            );
          })}
      </div>
    </section>
  );
}
