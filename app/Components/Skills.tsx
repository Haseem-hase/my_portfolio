'use client';

import React, { useState } from 'react';
import Cubes from './Cubes';

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
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="20" height="20" x="2" y="2" rx="4" fill="#F7DF1E" />
          <text x="13" y="17" fill="#000000" fontSize="9" fontWeight="bold" fontFamily="sans-serif">JS</text>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      category: 'Languages',
      color: '#3178C6',
      description: 'Strongly typed superset of JavaScript for building robust, self-documenting applications.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="20" height="20" x="2" y="2" rx="4" fill="#3178C6" />
          <text x="13" y="17" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      )
    },
    {
      name: 'HTML5',
      category: 'Languages',
      color: '#E34F26',
      description: 'Semantic markup and modern layout structures for search-engine-optimized interfaces.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#E34F26" strokeWidth="1.5">
          <path d="M1.5 22L3.5 2H20.5L22.5 22L12 25L1.5 22Z" fill="#E34F26" fillOpacity="0.1" />
          <path d="M1.5 22L3.5 2H20.5L22.5 22L12 25L1.5 22Z" />
          <text x="8.5" y="15" fill="#E34F26" fontSize="11" fontWeight="900" fontFamily="sans-serif">5</text>
        </svg>
      )
    },
    {
      name: 'CSS3',
      category: 'Languages',
      color: '#1572B6',
      description: 'Advanced responsive layouts, animations, transitions, and native styling rules.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#1572B6" strokeWidth="1.5">
          <path d="M1.5 22L3.5 2H20.5L22.5 22L12 25L1.5 22Z" fill="#1572B6" fillOpacity="0.1" />
          <path d="M1.5 22L3.5 2H20.5L22.5 22L12 25L1.5 22Z" />
          <text x="8.5" y="15" fill="#1572B6" fontSize="11" fontWeight="900" fontFamily="sans-serif">3</text>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      color: '#06B6D4',
      description: 'Utility-first design systems for building lightning-fast, sleek custom interfaces.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.5">
          <path d="M12 3c-3 0-5 2-6 5 2-1 4-1 5 1 1 2 2 3 5 3 3 0 5-2 6-5-2 1-4 1-5-1-1-2-2-3-5-3zm-6 8c-3 0-5 2-6 5 2-1 4-1 5 1 1 2 2 3 5 3 3 0 5-2 6-5-2 1-4 1-5-1-1-2-2-3-5-3z" />
        </svg>
      )
    },
    {
      name: 'React.js',
      category: 'Frontend',
      color: '#61DAFB',
      description: 'Component-based architecture for crafting reactive, high-performance web interfaces.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      )
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      color: '#FFFFFF',
      description: 'Production-grade React framework featuring server components, SSR, and optimized routing.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" fill="#FFFFFF" fillOpacity="0.05" />
          <path d="M8 16V8l8 8V8" />
        </svg>
      )
    },
    {
      name: 'Node.js',
      category: 'Backend & DB',
      color: '#339933',
      description: 'Event-driven asynchronous server environment for constructing high-throughput backends.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="1.5">
          <path d="M12 2L4 7v10l8 5l8-5V7L12 2z" fill="#339933" fillOpacity="0.05" />
          <path d="M12 2v20M4 7l8 5 8-5" />
        </svg>
      )
    },
    {
      name: 'Express.js',
      category: 'Backend & DB',
      color: '#FFFFFF',
      description: 'Minimalist web framework for building performant RESTful APIs and middleware services.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          <rect width="20" height="20" x="2" y="2" rx="4" fill="#FFFFFF" fillOpacity="0.05" />
          <text x="5" y="15" fill="#FFFFFF" fontSize="9" fontWeight="bold" stroke="none">EX</text>
        </svg>
      )
    },
    {
      name: 'Angular',
      category: 'Frontend',
      color: '#DD0031',
      description: 'Enterprise-grade client framework for structured, modular frontend architectures.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#DD0031" strokeWidth="1.5">
          <path d="M12 2L2 6l3 13l7 3l7-3l3-13L12 2Z" fill="#DD0031" fillOpacity="0.05" />
          <path d="M12 2v20M8 14h8M12 7l-4 7m4-7l4 7" />
        </svg>
      )
    },
    {
      name: 'Three.js',
      category: 'Creative & Motion',
      color: '#FF5E00',
      description: '3D web graphics library for rendering interactive WebGL components directly in the browser.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          <path d="M4 19L12 5l8 14H4z" fill="#FFFFFF" fillOpacity="0.05" />
          <path d="M12 5v14M4 19h8" />
        </svg>
      )
    },
    {
      name: 'GSAP',
      category: 'Creative & Motion',
      color: '#88CE02',
      description: 'Industry-leading timeline animation engine for rich, high-performance interactions.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#88CE02" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" fill="#88CE02" fillOpacity="0.05" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="#88CE02" stroke="none" />
        </svg>
      )
    },
    {
      name: 'Framer Motion',
      category: 'Creative & Motion',
      color: '#F107A3',
      description: 'Declarative motion library for fluid React layout transitions and physics-based animations.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#F107A3" strokeWidth="1.5">
          <path d="M4 4h16L12 12L4 4z" fill="#F107A3" fillOpacity="0.05" />
          <path d="M4 12h16l-8 8l-8-8z" />
        </svg>
      )
    },
    {
      name: 'Redux Toolkit',
      category: 'Frontend',
      color: '#764ABC',
      description: 'Predictable global state management container for large-scale, complex client apps.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#764ABC" strokeWidth="1.5">
          <path d="M12 2a4 4 0 0 1 4 4v12a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" transform="rotate(45 12 12)" fill="#764ABC" fillOpacity="0.05" />
          <path d="M12 2a4 4 0 0 1 4 4v12a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" transform="rotate(-45 12 12)" />
        </svg>
      )
    },
    {
      name: 'MongoDB',
      category: 'Backend & DB',
      color: '#47A248',
      description: 'NoSQL document database enabling flexible schemas and fast horizontal scaling.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#47A248" strokeWidth="1.5">
          <path d="M12 2C12 2 7 8 7 13C7 17 9 20 12 22C15 20 17 17 17 13C17 8 12 2 12 2Z" fill="#47A248" fillOpacity="0.05" />
          <path d="M12 2v20" />
        </svg>
      )
    },
    {
      name: 'PostgreSQL',
      category: 'Backend & DB',
      color: '#4169E1',
      description: 'Advanced, ACID-compliant relational SQL database for structured transactional storage.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#4169E1" strokeWidth="1.5">
          <path d="M12 3a8 8 0 0 0-8 8c0 3.3 2 6.2 5 7.4V21h6v-2.6c3-1.2 5-4.1 5-7.4a8 8 0 0 0-8-8z" fill="#4169E1" fillOpacity="0.05" />
          <path d="M8 11h8" />
        </svg>
      )
    },
    {
      name: 'Redis',
      category: 'Backend & DB',
      color: '#DC382D',
      description: 'In-memory caching store facilitating ultra-low latency key-value operations and session states.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#DC382D" strokeWidth="1.5">
          <path d="M4 6l8-3l8 3v4l-8 3l-8-3V6z" fill="#DC382D" fillOpacity="0.05" />
          <path d="M4 13l8-3l8 3v4l-8 3l-8-3v-4z" />
        </svg>
      )
    },
    {
      name: 'Git',
      category: 'DevOps & Platforms',
      color: '#F05032',
      description: 'Distributed version control system for robust team collaboration and source tracking.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="1.5">
          <circle cx="12" cy="18" r="3" fill="#F05032" fillOpacity="0.1" />
          <circle cx="12" cy="6" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M12 9v6M12 12h3" />
        </svg>
      )
    },
    {
      name: 'Docker',
      category: 'DevOps & Platforms',
      color: '#2496ED',
      description: 'Containerization platform to build, package, and deploy software services consistently.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#2496ED" strokeWidth="1.5">
          <rect x="5" y="10" width="4" height="4" rx="1" fill="#2496ED" fillOpacity="0.05" />
          <rect x="10" y="10" width="4" height="4" rx="1" />
          <rect x="15" y="10" width="4" height="4" rx="1" />
          <rect x="10" y="5" width="4" height="4" rx="1" />
          <path d="M2 16c4 3 16 3 20 0" />
        </svg>
      )
    },
    {
      name: 'AWS',
      category: 'DevOps & Platforms',
      color: '#FF9900',
      description: 'Cloud hosting, computing, and managed database services for high scalability.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5">
          <path d="M4 14c4 4 12 4 16 0" />
          <path d="M17 12l3 2l-1 3" />
          <text x="6" y="10" fill="#FF9900" fontSize="7" fontWeight="bold" stroke="none">AWS</text>
        </svg>
      )
    },
    {
      name: 'Vercel',
      category: 'DevOps & Platforms',
      color: '#FFFFFF',
      description: 'Optimized serverless hosting platform tailored for Next.js and frontend applications.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          <path d="M12 3l10 17H2L12 3z" fill="#FFFFFF" fillOpacity="0.1" />
        </svg>
      )
    },
    {
      name: 'Firebase',
      category: 'DevOps & Platforms',
      color: '#FFCA28',
      description: 'Backend-as-a-Service covering authentication, real-time databases, and cloud alerts.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FFCA28" strokeWidth="1.5">
          <path d="M4 18l8-15l3 6" fill="#FFCA28" fillOpacity="0.05" />
          <path d="M20 18L12 3v15M4 18h16" />
        </svg>
      )
    },
    {
      name: 'Figma',
      category: 'Tools & Payments',
      color: '#F24E1E',
      description: 'Visual prototyping and interface design tool for planning responsive user interfaces.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#F24E1E" strokeWidth="1.5">
          <circle cx="9" cy="6" r="3" fill="#F24E1E" fillOpacity="0.05" />
          <circle cx="15" cy="6" r="3" />
          <circle cx="9" cy="12" r="3" />
          <circle cx="15" cy="12" r="3" />
          <path d="M9 18a3 3 0 0 1-3-3h3v3z" />
          <circle cx="15" cy="18" r="3" />
        </svg>
      )
    },
    {
      name: 'Postman',
      category: 'Tools & Payments',
      color: '#FF6C37',
      description: 'API testing and documentation utility for verifying endpoint integrations and payloads.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FF6C37" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" fillOpacity="0.05" />
          <path d="M12 5l3 4h-6z" />
          <path d="M12 9v8" />
        </svg>
      )
    },
    {
      name: 'WebSocket API',
      category: 'Backend & DB',
      color: '#00D2FF',
      description: 'Bidirectional real-time socket connections for high-performance live features.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" fill="#00D2FF" fillOpacity="0.05" />
          <path d="M8 12h8M12 8v8" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    },
    {
      name: 'Stripe',
      category: 'Tools & Payments',
      color: '#635BFF',
      description: 'Global payment gateway integration for secure credit card billing and checkout flows.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2">
          <path d="M16 8.5c0-1.5-1.2-2.5-3-2.5c-2.3 0-3.5 1.2-3.5 2.5c0 2 3.5 1.5 3.5 3c0 1.5-1.2 2.5-3.2 2.5c-2.5 0-3.8-1.2-3.8-2.8" />
        </svg>
      )
    },
    {
      name: 'Razorpay',
      category: 'Tools & Payments',
      color: '#0A2540',
      description: 'Leading payment processing ecosystem tailored for localized transaction routing.',
      icon: (
        <svg className="w-6 h-6 sm:w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.5">
          <path d="M19 3L5 15h9l-4 6l11-12h-9z" fill="#0A2540" fillOpacity="0.05" />
        </svg>
      )
    }
  ];

  // 9 decorative tech elements to fill the 6x6 grid (36 cells total)
  const decorativeSkills: SkillItem[] = [
    {
      name: 'Clean Code',
      category: 'Core Values',
      color: '#A3A3A3',
      description: 'Clean Code — writing readable, maintainable, and self-documenting codebases.',
      icon: (
        <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">{`{ }`}</div>
      )
    },
    {
      name: 'Semantic Web',
      category: 'Core Values',
      color: '#A3A3A3',
      description: 'Semantic Web — focusing on accessibility, SEO, and standards-compliant structures.',
      icon: (
        <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">{`</>`}</div>
      )
    },
    {
      name: 'Command Line',
      category: 'Core Values',
      color: '#A3A3A3',
      description: 'Command Line — leveraging terminal scripting, automation, and tooling efficiency.',
      icon: (
        <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">⌥</div>
      )
    },
    {
      name: 'System Architecture',
      category: 'Core Values',
      color: '#A3A3A3',
      description: 'System Architecture — designing robust integrations and decoupled component layers.',
      icon: (
        <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">⌘</div>
      )
    },
    {
      name: 'High Performance',
      category: 'Core Values',
      color: '#A3A3A3',
      description: 'High Performance — optimizing asset loading, bundle sizes, and DOM rendering.',
      icon: (
        <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">⚡</div>
      )
    },
    {
      name: 'Global Scale',
      category: 'Core Values',
      color: '#A3A3A3',
      description: 'Global Scale — building responsive, localized web services ready for regional markets.',
      icon: (
        <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">🌐</div>
      )
    },
    {
      name: 'Automation & CI/CD',
      category: 'Core Values',
      color: '#A3A3A3',
      description: 'Automation & CI/CD — streamlining build flows, tests, and target deployments.',
      icon: (
        <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">⚙️</div>
      )
    },
    {
      name: 'Secured by Design',
      category: 'Core Values',
      color: '#A3A3A3',
      description: 'Secured by Design — enforcing HTTPS, sanitizing payloads, and safeguarding credentials.',
      icon: (
        <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">🔒</div>
      )
    },
    {
      name: 'Cloud Infrastructure',
      category: 'Core Values',
      color: '#A3A3A3',
      description: 'Cloud Infrastructure — orchestrating virtual environments, static buckets, and serverless tasks.',
      icon: (
        <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">☁️</div>
      )
    }
  ];

  // Combine to create exactly 36 elements for the 6x6 grid
  const allGridSkills = [...coreSkills, ...decorativeSkills];

  // Currently active (hovered) skill. Defaults to general summary if none hovered.
  const activeSkill = hoveredIndex !== null ? allGridSkills[hoveredIndex] : null;

  // Compile array of node children to feed into Cubes
  const cubeIcons = allGridSkills.map(s => s.icon);

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
