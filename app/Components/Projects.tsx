"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Luxury Performance",
    description: "Experience the thrill of precision engineering",
    imageSrc: "https://i.pinimg.com/736x/e7/cf/cb/e7cfcbd7a8af10b8839c8d9a3d8eb4ce.jpg",
    href: "https://www.ruixen.com/",
  },
  {
    id: 2,
    title: "Elegant Design",
    description: "Where beauty meets functionality",
    imageSrc: "https://i.pinimg.com/736x/f4/b0/00/f4b000a6880f7e8d0c677812d789e001.jpg",
    href: "https://www.ruixen.com/",
  },
  {
    id: 3,
    title: "Power & Speed",
    description: "Unleash the true potential of the road",
    imageSrc: "https://i.pinimg.com/1200x/ae/cf/d7/aecfd72b2439914647ec06d19cb182b5.jpg",
    href: "https://www.ruixen.com/",
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
