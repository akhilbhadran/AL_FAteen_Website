'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
const cleaningServices = [
  { 
    id: 0, 
    slug: "floor-care", 
    title: "Floor Care & Restoration", 
    desc: "Expert restoration for Marble, Granite, Ceramic & Wood.", 
    icon: "✨", 
    img: "/images/cleaning-floor.png" 
  },
  { 
    id: 1, 
    slug: "villa-deep-clean", 
    title: "Residential Services", 
    desc: "Villas, upholstery shampooing & deep cleaning.", 
    icon: "🏡", 
    img: "/images/cleaning-villa.png" 
  },
  { 
    id: 2, 
    slug: "glass-cleaning", 
    title: "Glass & Façade", 
    desc: "Streak-free cleaning for windows and exteriors.", 
    icon: "🪟", 
    img: "/images/cleaning-glass.png" 
  },
  { 
    id: 3, 
    slug: "corporate-contracts", 
    title: "Commercial Contract", 
    desc: "Daily or weekly office maintenance packages.", 
    icon: "🏢", 
    img: "/images/cleaning-office.png" 
  },
  { 
    id: 4, 
    slug: "pool-maintenance", 
    title: "Swimming Pools", 
    desc: "Hygienic maintenance for safe, crystal-clear water.", 
    icon: "🏊", 
    img: "/images/cleaning-pool.png" 
  },
];

const pestServices = [
  { 
    id: 0, 
    slug: "termite-control", 
    title: "Termite Treatment", 
    subtitle: "Structural", 
    desc: "Pre & Post construction protection for foundations.", 
    icon: "🐜", 
    img: "/images/pest-termite.png" 
  },
  { 
    id: 1, 
    slug: "rodent-control", 
    title: "Rodent Control", 
    subtitle: "Perimeter", 
    desc: "Advanced stations to keep property rodent-free.", 
    icon: "🐁", 
    img: "/images/pest-rodent.png" 
  },
  { 
    id: 2, 
    slug: "insect-control", 
    title: "De-Bugging & General", 
    subtitle: "Hygiene", 
    desc: "Control of Cockroaches, Bed bugs, Ants & Flies.", 
    icon: "🦟", 
    img: "/images/pest-insect.png" 
  },
];

export default function ServicesSnippet() {
  const [activeCleaning, setActiveCleaning] = useState(0);
  const [activePest, setActivePest] = useState(0);
  
  // Pause states for automation
  const [cleaningPaused, setCleaningPaused] = useState(false);
  const [pestPaused, setPestPaused] = useState(false);

  // --- AUTOMATION: CLEANING ---
  useEffect(() => {
    if (cleaningPaused) return;
    const interval = setInterval(() => {
      setActiveCleaning((prev) => (prev + 1) % cleaningServices.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [cleaningPaused]);

  // --- AUTOMATION: PEST ---
  useEffect(() => {
    if (pestPaused) return;
    const interval = setInterval(() => {
      setActivePest((prev) => (prev + 1) % pestServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [pestPaused]);

  // --- ANIMATION VARIANTS ---
  const heroContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };
  const heroItem = {
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main className="w-full overflow-x-hidden bg-white text-stone-900 font-sans">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section 
        data-header-theme="dark" // ADDED: Forces Header to be White Text
        className="relative pt-24 pb-12 md:pt-40 md:pb-24 flex items-center justify-center overflow-hidden min-h-[80vh] md:min-h-[90vh] bg-gray-900"
      >
        <div className="absolute inset-0 bg-gray-900 z-0"></div> 
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-red-900/40 z-10"></div>
        
        <motion.div 
          className="relative z-20 w-full px-6 md:px-[5%] lg:px-[12%] text-center"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={heroContainer}
        >
          <motion.h4 variants={heroItem} className="text-red-200 font-bold uppercase tracking-[0.25em] mb-6 text-xs md:text-base">
            Our Expertise
          </motion.h4>
          
          <motion.h1 variants={heroItem} className="text-3xl sm:text-5xl md:text-7xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Comprehensive Care <br/> for Your Space
          </motion.h1>
          
          <motion.p variants={heroItem} className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-xl mx-auto font-light leading-relaxed mb-10">
            From restoring the shine of your marble floors to protecting your property from pests, we deliver municipality-approved excellence.
          </motion.p>
          
          <motion.div variants={heroItem}>
             <Link href="/services">
                <button className="px-8 py-3 bg-white/10 border border-white/30 text-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-xs md:text-sm">
                  Explore All Services
                </button>
             </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* ================= 2. CLEANING DIVISION (Compacted) ================= */}
      <section 
        data-header-theme="light" // ADDED: Forces Header to be Black Text
        className="py-20 md:py-32 bg-white"
        onMouseEnter={() => setCleaningPaused(true)}
        onMouseLeave={() => setCleaningPaused(false)}
      >
        <div className="px-6 md:px-[5%] lg:px-[12%]">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
            
            {/* --- LEFT: STICKY IMAGE (DESKTOP) --- */}
            <div className="hidden lg:block w-[40%] sticky top-32 h-[420px] rounded-[1.5rem] overflow-hidden shadow-2xl bg-stone-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCleaning}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                   <img 
                     src={cleaningServices[activeCleaning].img} 
                     alt={cleaningServices[activeCleaning].title} 
                     className="w-full h-full object-cover" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                   
                   <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                      <div className="text-3xl mb-2">{cleaningServices[activeCleaning].icon}</div>
                      <h3 className="text-2xl font-serif mb-2">{cleaningServices[activeCleaning].title}</h3>
                      <p className="text-gray-200 text-sm mb-4 leading-relaxed opacity-90">
                        {cleaningServices[activeCleaning].desc}
                      </p>
                      
                      <Link href={`/services#${cleaningServices[activeCleaning].slug}`}>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white pb-1 cursor-pointer hover:text-red-200 hover:border-red-200 transition-colors">
                            View Details <span>→</span>
                        </div>
                      </Link>

                   </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* --- RIGHT: GRID CONTENT --- */}
            <div className="w-full lg:w-[55%]">
               <div className="mb-8">
                 <span className="text-stone-400 font-bold tracking-widest uppercase text-[10px] mb-1 block">Division 01</span>
                 <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Cleaning & Maintenance</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cleaningServices.map((item, index) => (
                    <Link key={index} href={`/services#${item.slug}`} className="block h-full">
                        <div 
                            id={item.slug}
                            onMouseEnter={() => { setActiveCleaning(index); setCleaningPaused(true); }}
                            className={`
                            group rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden h-full
                            ${/* Desktop Active State */ ''}
                            lg:p-5 
                            ${activeCleaning === index ? "lg:border-red-200 lg:bg-stone-50" : "lg:border-stone-100 lg:bg-white lg:hover:border-stone-300"}
                            
                            ${/* Mobile Styling */ ''}
                            relative h-52 lg:h-auto border-0
                            `}
                        >
                            <div className="block lg:hidden absolute inset-0 z-0">
                                <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-end p-5 lg:p-0 lg:block">
                                <div className="hidden lg:flex w-10 h-10 rounded-lg bg-white border border-stone-100 items-center justify-center text-xl mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>

                                <h3 className={`text-xl lg:text-lg font-bold mb-1 transition-colors text-white lg:text-stone-900 ${activeCleaning === index ? "lg:text-red-700" : ""}`}>
                                    {item.title}
                                </h3>
                                
                                <p className="text-stone-300 lg:text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    </Link>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 3. PEST CONTROL DIVISION (Compacted) ================= */}
      <section 
        data-header-theme="dark" // ADDED: Forces Header to be White Text
        className="py-20 md:py-32 bg-gradient-to-b from-red-900 to-slate-950 text-white"
        onMouseEnter={() => setPestPaused(true)}
        onMouseLeave={() => setPestPaused(false)}
      >
        <div className="px-6 md:px-[5%] lg:px-[12%]">
          
          <div className="flex flex-col lg:flex-row-reverse justify-between items-start gap-12 lg:gap-0">
            
            {/* --- RIGHT: STICKY IMAGE (DESKTOP) --- */}
            <div className="hidden lg:block w-[40%] sticky top-32 h-[420px] rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePest}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                   <img 
                     src={pestServices[activePest].img} 
                     alt={pestServices[activePest].title} 
                     className="w-full h-full object-cover opacity-80" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                   
                   <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                      <span className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-1 block">{pestServices[activePest].subtitle}</span>
                      <h3 className="text-2xl font-serif mb-3">{pestServices[activePest].title}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed max-w-sm">
                        {pestServices[activePest].desc}
                      </p>
                      
                      <Link href={`/services#${pestServices[activePest].slug}`}>
                        <button className="px-5 py-1.5 border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors text-xs uppercase tracking-wider">
                            Learn More
                        </button>
                      </Link>

                   </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* --- LEFT: GRID CONTENT --- */}
            <div className="w-full lg:w-[55%]">
               <div className="mb-8 text-left">
                 <span className="text-red-300 font-bold tracking-widest uppercase text-[10px] mb-1 block">Division 02</span>
                 <h2 className="text-3xl md:text-4xl font-serif text-white">Pest Control</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pestServices.map((item, index) => (
                    <Link key={index} href={`/services#${item.slug}`} className="block h-full">
                        <div 
                            id={item.slug}
                            onMouseEnter={() => { setActivePest(index); setPestPaused(true); }}
                            className={`
                            group rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden h-full
                            ${/* Desktop Active State */ ''}
                            lg:p-5
                            ${activePest === index ? "lg:border-red-500/50 lg:bg-white/5" : "lg:border-white/10 lg:bg-white/5 lg:hover:bg-white/10"}
                            
                            ${/* Mobile Styling */ ''}
                            relative h-52 lg:h-auto border-0
                            `}
                        >
                            <div className="block lg:hidden absolute inset-0 z-0">
                                <img src={item.img} className="w-full h-full object-cover opacity-80" alt={item.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-end p-5 lg:p-0 lg:block">
                                <h3 className={`text-xl lg:text-lg font-bold mb-1 transition-colors ${activePest === index ? "lg:text-white" : "text-white lg:text-stone-300"}`}>
                                    {item.title}
                                </h3>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 lg:text-red-500 mb-2 block">
                                    {item.subtitle}
                                </span>
                                <p className="text-stone-300 lg:text-stone-400 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    </Link>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. BOTTOM LINK TO FULL SERVICES ================= */}
      <section 
         data-header-theme="dark" // ADDED: Forces Header to be White Text
         className="bg-slate-950 pb-20 pt-8 text-center"
      >
         <div className="px-6">
            <h2 className="text-white text-2xl font-serif mb-6">Looking for more details?</h2>
            
            <Link href="/services">
                <button className="px-10 py-4 bg-red-800 text-white rounded-full font-bold uppercase tracking-widest text-base hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(153,27,27,0.5)] transform hover:-translate-y-1">
                  View Full Services Page
                </button>
             </Link>
         </div>
      </section>

    </main>
  );
}