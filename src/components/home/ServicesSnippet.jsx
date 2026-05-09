'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// --- DATA ---
const cleaningServices = [
  { id: 0, slug: "floor-care", title: "Floor Care & Restoration", desc: "Expert restoration for Marble, Granite, Ceramic & Wood.", icon: "✨", img: "/images/cleaning-floor.webp" },
  { id: 1, slug: "villa-deep-clean", title: "Residential Services", desc: "Villas, upholstery shampooing & deep cleaning.", icon: "🏡", img: "/images/cleaning-villa.webp" },
  { id: 2, slug: "glass-cleaning", title: "Glass & Façade", desc: "Streak-free cleaning for windows and exteriors.", icon: "🪟", img: "/images/cleaning-glass.webp" },
  { id: 3, slug: "corporate-contracts", title: "Commercial Contract", desc: "Daily or weekly office maintenance packages.", icon: "🏢", img: "/images/cleaning-office.webp" },
  { id: 4, slug: "pool-maintenance", title: "Swimming Pools", desc: "Hygienic maintenance for safe, crystal-clear water.", icon: "🏊", img: "/images/cleaning-pool.webp" },
];

const pestServices = [
  { id: 0, slug: "termite-control", title: "Termite Treatment", subtitle: "Structural", desc: "Pre & Post construction protection for foundations.", icon: "🐜", img: "/images/pest-termite.webp" },
  { id: 1, slug: "rodent-control", title: "Rodent Control", subtitle: "Perimeter", desc: "Advanced stations to keep property rodent-free.", icon: "🐁", img: "/images/pest-rodent.webp" },
  { id: 2, slug: "insect-control", title: "De-Bugging & General", subtitle: "Hygiene", desc: "Control of Cockroaches, Bed bugs, Ants & Flies.", icon: "🦟", img: "/images/pest-insect.webp" },
];

export default function ServicesSnippet() {
  const [activeCleaning, setActiveCleaning] = useState(0);
  const [cleaningPaused, setCleaningPaused] = useState(false);
  
  const cleaningRef = useRef(null);
  const isCleaningInView = useInView(cleaningRef, { amount: 0.1, once: false });

  // --- PREMIUM "LEGACY" PHYSICS ---
  const luxuryEase = [0.22, 1, 0.36, 1];

  // Specific variant for the Premium Heading Reveal
  const premiumHeadingReveal = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: luxuryEase } 
    }
  };

  // Light variant for non-heading elements to maintain speed
  const standardFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: luxuryEase } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  useEffect(() => {
    if (cleaningPaused || !isCleaningInView) return;
    const interval = setInterval(() => {
      setActiveCleaning((prev) => (prev + 1) % cleaningServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cleaningPaused, isCleaningInView]);

  return (
    <main className="w-full overflow-x-hidden bg-white text-stone-900 font-sans">

      {/* HERO */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 flex items-center justify-center overflow-hidden min-h-[100vh] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-red-950/40 z-10" />
        <motion.div 
          className="relative z-20 w-full px-6 md:px-[12%] text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}
        >
          <motion.h4 variants={premiumHeadingReveal} className="text-red-400 font-bold uppercase tracking-[0.2em] mb-4 text-[10px] md:text-sm">Our Expertise</motion.h4>
          <motion.h1 variants={premiumHeadingReveal} className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Comprehensive Care <br /> for Your Space</motion.h1>
          <motion.div variants={standardFade}>
            <Link href="/services" className="inline-block px-8 py-3 bg-white/10 border border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500">Explore All Services</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CLEANING SECTION */}
      <section ref={cleaningRef} className="py-16 md:py-24 bg-white" onMouseEnter={() => setCleaningPaused(true)} onMouseLeave={() => setCleaningPaused(false)}>
        <div className="px-6 md:px-[12%]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

            {/* DESKTOP STICKY IMAGE */}
            <div className="hidden lg:block w-[45%] sticky top-32 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-stone-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCleaning}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image src={cleaningServices[activeCleaning].img} alt={cleaningServices[activeCleaning].title} fill priority className="object-cover" sizes="45vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="text-4xl mb-2 block">{cleaningServices[activeCleaning].icon}</span>
                    <h3 className="text-2xl font-bold">{cleaningServices[activeCleaning].title}</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* LIST AREA */}
            <div className="w-full lg:w-[50%]">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                <motion.span variants={premiumHeadingReveal} className="text-red-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Division 01</motion.span>
                <motion.h2 variants={premiumHeadingReveal} className="text-3xl md:text-5xl font-bold text-stone-900 mb-8 md:mb-12">Cleaning & Maintenance</motion.h2>
                
                <div className="space-y-4">
                  {cleaningServices.map((item, index) => (
                    <motion.div key={item.id} variants={standardFade} className="will-change-transform">
                      <Link href={`/services#${item.slug}`} 
                        className={`group block p-5 md:p-6 rounded-2xl border transition-all duration-500 ${activeCleaning === index ? "border-red-500 bg-red-50/50" : "border-stone-100 bg-white"}`}
                        onMouseEnter={() => setActiveCleaning(index)}
                      >
                         <div className="lg:hidden w-full aspect-video mb-4 rounded-xl overflow-hidden bg-stone-100 relative shadow-sm">
                            <Image src={item.img} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 90vw" loading="lazy" />
                         </div>
                        <div className="flex items-center gap-4 md:gap-6">
                          <span className="text-xl md:text-2xl">{item.icon}</span>
                          <div>
                            <h3 className={`text-base md:text-lg font-bold transition-colors ${activeCleaning === index ? "text-red-700" : "text-stone-800"}`}>{item.title}</h3>
                            <p className="text-stone-500 text-xs md:text-sm line-clamp-1 md:line-clamp-none">{item.desc}</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PEST SECTION */}
      <section className="py-20 md:py-28 bg-stone-950 text-white">
        <div className="px-6 md:px-[12%]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="text-center mb-12 md:mb-20">
            <motion.h2 variants={premiumHeadingReveal} className="text-3xl md:text-5xl font-bold">Pest Control Solutions</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pestServices.map((item) => (
              <motion.div key={item.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                <Link href={`/services#${item.slug}`} className="group block h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                  <div className="relative aspect-[16/10] bg-stone-800">
                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" sizes="(max-width: 768px) 100vw, 30vw" />
                  </div>
                  <motion.div variants={standardFade} className="p-6 md:p-8">
                    <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{item.subtitle}</span>
                    <h3 className="text-lg md:text-xl font-bold mt-2 mb-3">{item.title}</h3>
                    <p className="text-stone-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="py-20 bg-stone-950 text-center px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={standardFade}>
         <Link href="/services" className="inline-block w-full md:w-auto px-12 py-4 bg-red-700 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-red-600 transition-all shadow-2xl">
            View All Services
         </Link>
        </motion.div>
      </footer>
    </main>
  );
}