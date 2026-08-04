"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Brandstrek Coders",
    description: "3d portfolio website",
    imageSrc: "/assets/Images/Projects/brandstrekCoders.webp",
    href: "https://www.brandstrekcoders.com/",
  },
  {
    id: 2,
    title: "CB PERFUME",
    description: "E-Commerce Website",
    imageSrc: "/assets/Images/Projects/cbp.webp",
    href: "https://www.ruixen.com/",
  },
  {
    id: 3,
    title: "Neocarz",
    description: "AI Powered Car Rental Platform",
    imageSrc: "/assets/Images/Projects/neocarz.webp",
    href: "https://www.neocarz.com/",
  },
  {
    id: 4,
    title: "Timeless Craftsmanship",
    description: "Built with passion, driven by excellence",
    imageSrc: "https://i.pinimg.com/736x/5d/f7/69/5df7696c4f24b7961c8c72748a355ff8.jpg",
    href: "https://www.ruixen.com/",
  },
  {
    id: 5,
    title: "Future of Mobility",
    description: "Innovation that moves you forward",
    imageSrc: "https://i.pinimg.com/736x/9c/f2/8b/9cf28b4df4e06e0ca34fbe87f25734b6.jpg",
    href: "https://www.ruixen.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full relative min-h-screen bg-black flex flex-col justify-center items-center py-20 overflow-hidden">
      <div className="z-20 flex flex-col items-center justify-center text-center px-4 pb-12">
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none text-neutral-200 uppercase drop-shadow-lg">
          PROJECTS
        </h2>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={2000}
          pauseOnHover
          showDots
        />
      </div>
    </section>
  );
}
