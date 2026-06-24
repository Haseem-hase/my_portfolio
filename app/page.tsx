import React from 'react'
import HeroSection from './Components/HeroSection'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Gallery from './Components/Gallery'

const page = () => {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Experience />
      {/* 3D Dome Gallery Section */}
      <section className="relative w-full h-screen bg-black flex flex-col justify-start items-center overflow-hidden pt-16">
        {/* Gallery Section Heading */}
        <div className="z-20 flex flex-col items-center justify-center text-center px-4 pb-6">

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none silver-gradient-text uppercase">
            Deep Into My Memories
          </h2>

        </div>

        {/* Dome Gallery Container */}
        <div className="relative w-full flex-1 min-h-0">
          <Gallery />
        </div>
      </section>
    </main>
  )
}

export default page