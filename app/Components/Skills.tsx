'use client';

import React, { useState } from 'react';
import Cubes from './Cubes';
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
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiFigma,
  SiPostman,
  SiSocketdotio,
  SiStripe,
  SiRazorpay
} from 'react-icons/si';
import { FaCss3Alt, FaAws } from 'react-icons/fa';
import {
  TbCode,
  TbHierarchy,
  TbTerminal2,
  TbTopologyRing3,
  TbBolt,
  TbWorld,
  TbSettingsAutomation,
  TbShieldLock,
  TbCloud
} from 'react-icons/tb';

interface SkillItem {
  name: string;
  category: string;
  color: string;
  description: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 27 core technical skills
  const coreSkills: SkillItem[] = [
    {
      name: 'JavaScript',
      category: 'Languages',
      color: '#F7DF1E',
      description: 'Core scripting language for client-side and server-side application logic.',
      icon: <SiJavascript className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'TypeScript',
      category: 'Languages',
      color: '#3178C6',
      description: 'Strongly typed superset of JavaScript for building robust, self-documenting applications.',
      icon: <SiTypescript className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'HTML5',
      category: 'Languages',
      color: '#E34F26',
      description: 'Semantic markup and modern layout structures for search-engine-optimized interfaces.',
      icon: <SiHtml5 className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'CSS3',
      category: 'Languages',
      color: '#1572B6',
      description: 'Advanced responsive layouts, animations, transitions, and native styling rules.',
      icon: <FaCss3Alt className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      color: '#06B6D4',
      description: 'Utility-first design systems for building lightning-fast, sleek custom interfaces.',
      icon: <SiTailwindcss className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'React.js',
      category: 'Frontend',
      color: '#61DAFB',
      description: 'Component-based architecture for crafting reactive, high-performance web interfaces.',
      icon: <SiReact className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      color: '#FFFFFF',
      description: 'Production-grade React framework featuring server components, SSR, and optimized routing.',
      icon: <SiNextdotjs className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Node.js',
      category: 'Backend & DB',
      color: '#339933',
      description: 'Event-driven asynchronous server environment for constructing high-throughput backends.',
      icon: <SiNodedotjs className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Express.js',
      category: 'Backend & DB',
      color: '#FFFFFF',
      description: 'Minimalist web framework for building performant RESTful APIs and middleware services.',
      icon: <SiExpress className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Angular',
      category: 'Frontend',
      color: '#DD0031',
      description: 'Enterprise-grade client framework for structured, modular frontend architectures.',
      icon: <SiAngular className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Three.js',
      category: 'Creative & Motion',
      color: '#FF5E00',
      description: '3D web graphics library for rendering interactive WebGL components directly in the browser.',
      icon: <SiThreedotjs className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'GSAP',
      category: 'Creative & Motion',
      color: '#88CE02',
      description: 'Industry-leading timeline animation engine for rich, high-performance interactions.',
      icon: <SiGreensock className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Framer Motion',
      category: 'Creative & Motion',
      color: '#F107A3',
      description: 'Declarative motion library for fluid React layout transitions and physics-based animations.',
      icon: <SiFramer className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Redux Toolkit',
      category: 'Frontend',
      color: '#764ABC',
      description: 'Predictable global state management container for large-scale, complex client apps.',
      icon: <SiRedux className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'MongoDB',
      category: 'Backend & DB',
      color: '#47A248',
      description: 'NoSQL document database enabling flexible schemas and fast horizontal scaling.',
      icon: <SiMongodb className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'PostgreSQL',
      category: 'Backend & DB',
      color: '#4169E1',
      description: 'Advanced, ACID-compliant relational SQL database for structured transactional storage.',
      icon: <SiPostgresql className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Redis',
      category: 'Backend & DB',
      color: '#DC382D',
      description: 'In-memory caching store facilitating ultra-low latency key-value operations and session states.',
      icon: <SiRedis className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Git',
      category: 'DevOps & Platforms',
      color: '#F05032',
      description: 'Distributed version control system for robust team collaboration and source tracking.',
      icon: <SiGit className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Docker',
      category: 'DevOps & Platforms',
      color: '#2496ED',
      description: 'Containerization platform to build, package, and deploy software services consistently.',
      icon: <SiDocker className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'AWS',
      category: 'DevOps & Platforms',
      color: '#FF9900',
      description: 'Cloud hosting, computing, and managed database services for high scalability.',
      icon: <FaAws className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Vercel',
      category: 'DevOps & Platforms',
      color: '#FFFFFF',
      description: 'Optimized serverless hosting platform tailored for Next.js and frontend applications.',
      icon: <SiVercel className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Firebase',
      category: 'DevOps & Platforms',
      color: '#FFCA28',
      description: 'Backend-as-a-Service covering authentication, real-time databases, and cloud alerts.',
      icon: <SiFirebase className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Figma',
      category: 'Tools & Payments',
      color: '#F24E1E',
      description: 'Visual prototyping and interface design tool for planning responsive user interfaces.',
      icon: <SiFigma className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Postman',
      category: 'Tools & Payments',
      color: '#FF6C37',
      description: 'API testing and documentation utility for verifying endpoint integrations and payloads.',
      icon: <SiPostman className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'WebSocket API',
      category: 'Backend & DB',
      color: '#00D2FF',
      description: 'Bidirectional real-time socket connections for high-performance live features.',
      icon: <SiSocketdotio className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Stripe',
      category: 'Tools & Payments',
      color: '#635BFF',
      description: 'Global payment gateway integration for secure credit card billing and checkout flows.',
      icon: <SiStripe className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Razorpay',
      category: 'Tools & Payments',
      color: '#0A2540',
      description: 'Leading payment processing ecosystem tailored for localized transaction routing.',
      icon: <SiRazorpay className="w-6 h-6 sm:w-8 h-8" />
    }
  ];

  // 9 decorative tech elements to fill the 6x6 grid (36 cells total)
  const decorativeSkills: SkillItem[] = [
    {
      name: 'Clean Code',
      category: 'Core Values',
      color: '#4CAF50',
      description: 'Clean Code — writing readable, maintainable, and self-documenting codebases.',
      icon: <TbCode className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Semantic Web',
      category: 'Core Values',
      color: '#FF5722',
      description: 'Semantic Web — focusing on accessibility, SEO, and standards-compliant structures.',
      icon: <TbHierarchy className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Command Line',
      category: 'Core Values',
      color: '#00E676',
      description: 'Command Line — leveraging terminal scripting, automation, and tooling efficiency.',
      icon: <TbTerminal2 className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'System Architecture',
      category: 'Core Values',
      color: '#9C27B0',
      description: 'System Architecture — designing robust integrations and decoupled component layers.',
      icon: <TbTopologyRing3 className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'High Performance',
      category: 'Core Values',
      color: '#FFEB3B',
      description: 'High Performance — optimizing asset loading, bundle sizes, and DOM rendering.',
      icon: <TbBolt className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Global Scale',
      category: 'Core Values',
      color: '#00E5FF',
      description: 'Global Scale — building responsive, localized web services ready for regional markets.',
      icon: <TbWorld className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Automation & CI/CD',
      category: 'Core Values',
      color: '#FF9100',
      description: 'Automation & CI/CD — streamlining build flows, tests, and target deployments.',
      icon: <TbSettingsAutomation className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Secured by Design',
      category: 'Core Values',
      color: '#E91E63',
      description: 'Secured by Design — enforcing HTTPS, sanitizing payloads, and safeguarding credentials.',
      icon: <TbShieldLock className="w-6 h-6 sm:w-8 h-8" />
    },
    {
      name: 'Cloud Infrastructure',
      category: 'Core Values',
      color: '#29B6F6',
      description: 'Cloud Infrastructure — orchestrating virtual environments, static buckets, and serverless tasks.',
      icon: <TbCloud className="w-6 h-6 sm:w-8 h-8" />
    }
  ];

  // Combine to create exactly 36 elements for the 6x6 grid
  const allGridSkills = [...coreSkills, ...decorativeSkills];

  // Currently active (hovered) skill. Defaults to general summary if none hovered.
  const activeSkill = hoveredIndex !== null ? allGridSkills[hoveredIndex] : null;

  // Compile array of node children to feed into Cubes, injecting their brand colors dynamically
  const cubeIcons = allGridSkills.map(s => {
    if (React.isValidElement(s.icon)) {
      return React.cloneElement(s.icon as React.ReactElement<any>, {
        style: { color: s.color }
      });
    }
    return s.icon;
  });

  return (
    <section id="projects" className="relative w-full min-h-screen bg-black flex items-center justify-center py-20 px-6 sm:px-12 md:px-16 overflow-hidden">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Title & Dynamic Description Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col text-left z-20 h-full justify-between min-h-[380px]">
          <div>
            <div className="relative mb-6 select-none">
              <h2 className="font-handwritten text-5xl sm:text-6xl font-bold text-neutral-300 tracking-wider leading-none">
                TECHNICAL
              </h2>
              <div className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mt-[-4px] sm:mt-[-8px] pl-0.5">
                SKILLSET
              </div>
            </div>
            
            <p className="text-neutral-400 text-[14px] sm:text-[15px] leading-relaxed mb-8">
              Explore the tech stack, libraries, and protocols I use to bring ideas to life. 
              Hover over individual cubes in the grid to display deep-dive logs and category indices.
            </p>
          </div>

          {/* Active Skill Info display panel */}
          <div className="relative w-full border border-neutral-800 bg-neutral-950/60 backdrop-blur-md rounded-xl p-6 min-h-[180px] sm:min-h-[200px] flex flex-col justify-between transition-all duration-300 overflow-hidden shadow-2xl">
            {/* Background highlight glow sync'd with skill brand color */}
            <div 
              className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full blur-3xl opacity-20 transition-all duration-500 pointer-events-none"
              style={{ backgroundColor: activeSkill ? activeSkill.color : '#FFFFFF' }}
            />
            
            {activeSkill ? (
              <div className="flex flex-col h-full justify-between z-10">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span 
                      className="px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-[0.1em] border rounded-full transition-all duration-300"
                      style={{ 
                        color: activeSkill.color, 
                        borderColor: `${activeSkill.color}50`,
                        backgroundColor: `${activeSkill.color}08`
                      }}
                    >
                      {activeSkill.category}
                    </span>
                    
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-wide">
                    {activeSkill.name}
                  </h3>
                </div>
                
                <p className="text-neutral-300 text-[13px] sm:text-[14px] leading-relaxed mt-4 transition-all duration-300">
                  {activeSkill.description}
                </p>
              </div>
            ) : (
              <div className="flex flex-col h-full justify-between z-10 text-neutral-500">
                <div>
                  <div className="flex items-center justify-between mb-3">
                  
                   
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-neutral-400 uppercase tracking-wide">
                    MY SKILLS
                  </h3>
                </div>

                <p className="text-neutral-400 text-[13px] sm:text-[14px] leading-relaxed mt-4">
                  Over the past 2 years, I have constructed production systems ranging from custom ERP architectures to modern GCC automotive interfaces. Hover a grid module to review specific capabilities.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: 3D Cubes interactive grid (7 cols) */}
        <div className="lg:col-span-7 flex items-center justify-center z-10">
          <div className="w-full max-w-[680px] aspect-square relative border border-neutral-900 bg-neutral-950/30 rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xs">
            {/* Subtle background grid alignment ticks */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none p-4 opacity-10">
              <div className="border-r border-b border-neutral-500 border-dashed" />
              <div className="border-b border-neutral-500 border-dashed" />
              <div className="border-r border-neutral-500 border-dashed" />
              <div className="border-neutral-500 border-dashed" />
            </div>

            <Cubes 
              gridSize={6}
              maxAngle={100}
              radius={2}
              borderStyle="1px solid #1f1f23"
              faceColor="#0b0b0d"
              rippleColor="#26262b"
              rippleSpeed={1.5}
              autoAnimate={true}
              rippleOnClick={true}
              onHoverSkill={setHoveredIndex}
              childrenArray={cubeIcons}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
