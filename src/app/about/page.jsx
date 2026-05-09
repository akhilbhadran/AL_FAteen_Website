"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Star, Sparkles, Shield, 
  Target, Users, BookOpen, Bug, Droplets, Construction, Sofa, Eye, Check,
  ArrowUpRight, Quote, Facebook, Instagram, Linkedin, Phone, Mail, ArrowDown
} from "lucide-react";
import ZoomOutGallery from "./ZoomOutGallery";
import Header from "../../components/Header"; 
import "../global.css";

// --- FIX 1: IMPORT REAL NEXT.JS IMAGE COMPONENT ---
import Image from "next/image";

// --- FIX 2: IMPORT FONTS PROPERLY ---
import { Playfair_Display, Manrope } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

// --- ANIMATIONS ---
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CinematicImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
      <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover"
          // IMPROVEMENT: Restricting sizes helps the browser download smaller versions on mobile
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}

const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

export default function AlFateenFinal() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  return (
    <main className={`bg-white text-slate-900 ${manrope.className} selection:bg-red-900 selection:text-white overflow-x-hidden`}>
      <Header />
      
      {/* ================= 1. HERO ================= */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-neutral-950/20 z-10" />
           <Image 
             src="/images/hero-clean-villa.webp" 
             alt="Al Fateen Cleaning Services" 
             fill 
             priority={true} // IMPROVEMENT: High priority pre-load
             quality={90}    
             className="object-cover opacity-60" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 z-10"></div>
        </motion.div>

        <div className="relative z-20 w-full max-w-5xl px-6 text-center">
            <FadeUp>
               <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8">
                  <Star className="w-4 h-4 text-red-600 fill-current" />
                  <span className="text-white text-xs font-bold uppercase tracking-[0.25em]">Est. Ras Al Khaimah</span>
               </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
               <h1 className={`${playfair.className} text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 leading-[0.9] tracking-tighter`}>
                 Absolute <br/> <span className="text-slate-300">Sanctity.</span>
               </h1>
            </FadeUp>

            <FadeUp delay={0.4}>
               <p className="text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                 Al Fateen Cleaning Services & Pest Control is a service company based in Ras Al Khaimah, providing solutions for residential, commercial, and industrial properties.
               </p>
            </FadeUp>
        </div>
      </section>


      {/* ================= 2. LEADERSHIP & BACKGROUND ================= */}
      <section className="py-20 bg-white">
         <div className="w-full max-w-7xl px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-8">
               <FadeUp>
                  <span className="text-red-900 font-bold uppercase tracking-[0.25em] text-xs block mb-6">Background & Leadership</span>
                  <h2 className={`${playfair.className} text-4xl md:text-6xl text-slate-900 leading-[1.1] mb-8`}>
                     "Experience brings <span className="text-red-900 italic">Stability.</span>"
                  </h2>
                  <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed font-light">
                     <p>
                       The company is led by <strong>Mr. Mansoor Saed Suroor Alwali</strong>, who previously served as a Navigator with the UAE Armed Forces. His experience brings stability, discipline, and a systematic approach.
                     </p>
                     <p>
                       Al Fateen Cleaning Services & Pest Control is a trusted company in the UAE dedicated to promoting healthy, hygienic, and safe living environments. Established with a mission to protect people, property, and the environment, Al Fateen combines expert knowledge with modern techniques.
                     </p>
                  </div>
               </FadeUp>
            </div>
            <div>
               {/* IMPROVEMENT: Using the renamed filename without the space */}
               <CinematicImage src="/images/leadership-portrait-2.webp" alt="Mr. Mansoor Saed Suroor Alwali" />
            </div>
         </div>
      </section>

      {/* ================= 3. MISSION & VISION ================= */}
      <section className="pb-24 bg-white">
         <div className="w-full max-w-5xl px-6 mx-auto border-t border-slate-200 pt-16">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <FadeUp delay={0.1}>
                 <div className="relative pl-6 border-l-2 border-red-900">
                    <div className="flex items-center gap-3 mb-4">
                       <Target className="w-6 h-6 text-red-900" />
                       <h3 className={`${playfair.className} text-3xl text-slate-900`}>Our Mission</h3>
                    </div>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                      To bridge the gap between historical grandeur and modern comfort. We ensure that every property we touch stands strong.
                    </p>
                 </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                 <div className="relative pl-6 border-l-2 border-red-900">
                    <div className="flex items-center gap-3 mb-4">
                       <Eye className="w-6 h-6 text-red-900" />
                       <h3 className={`${playfair.className} text-3xl text-slate-900`}>Our Vision</h3>
                    </div>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                      To be the global benchmark for luxury maintenance, redefining the industry standard through preservation.
                    </p>
                 </div>
              </FadeUp>
            </div>
         </div>
      </section>


      {/* ================= 4. OUR SERVICES (Gateway Style) ================= */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
         <div className="w-full max-w-7xl px-6 mx-auto">
            <FadeUp>
               <div className="text-center mb-16">
                  <h2 className={`${playfair.className} text-5xl md:text-6xl text-slate-900 mb-6`}>Our Expertise</h2>
                  <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                    We specialize in two core disciplines. Select a division to view detailed services.
                  </p>
               </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
               
               <FadeUp delay={0.1}>
                  <Link href="/services" className="group block relative h-[350px] w-full overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500">
                     <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-200 group-hover:scale-105 transition-transform duration-700"></div>
                     <div className="absolute inset-0 p-10 flex flex-col justify-between">
                        <div>
                           <div className="w-14 h-14 bg-red-900 rounded-2xl flex items-center justify-center mb-6 shadow-red-900/20 shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
                              <Sparkles className="w-7 h-7 text-white" />
                           </div>
                           <h3 className={`${playfair.className} text-3xl md:text-4xl text-slate-900 mb-3`}>Cleaning Division</h3>
                           <p className="text-slate-600 leading-relaxed">
                              Deep cleaning, floor polishing, and hygiene maintenance for villas and offices.
                           </p>
                        </div>
                        <div className="flex items-center gap-3 text-red-900 font-bold uppercase tracking-widest text-sm group-hover:gap-5 transition-all">
                           Explore Cleaning <ArrowRight className="w-4 h-4" />
                        </div>
                     </div>
                  </Link>
               </FadeUp>

               <FadeUp delay={0.2}>
                  <Link href="/services" className="group block relative h-[350px] w-full overflow-hidden rounded-3xl bg-[#151515] shadow-lg hover:shadow-2xl transition-all duration-500">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 to-[#0a0a0a] group-hover:scale-105 transition-transform duration-700"></div>
                     <div className="absolute inset-0 p-10 flex flex-col justify-between">
                        <div>
                           <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                              <Shield className="w-7 h-7 text-white" />
                           </div>
                           <h3 className={`${playfair.className} text-3xl md:text-4xl text-white mb-3`}>Pest Control</h3>
                           <p className="text-slate-400 leading-relaxed">
                              Scientific pest management (IPM), termite proofing, and rodent control.
                           </p>
                        </div>
                        <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm group-hover:gap-5 transition-all">
                           Explore Pest Control <ArrowRight className="w-4 h-4" />
                        </div>
                     </div>
                  </Link>
               </FadeUp>

            </div>

            <FadeUp delay={0.4}>
               <div className="mt-16 flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">
                     Our Methodology
                  </span>
                  <ArrowDown className="w-5 h-5 text-red-900 animate-bounce" />
               </div>
            </FadeUp>
         </div>
      </section>

      {/* ================= 5. OUR APPROACH ================= */}
      <section className="py-24 bg-[#212121] text-white">
        <div className="w-full max-w-7xl px-6 mx-auto">
          <FadeUp>
              <span className="text-red-500 tracking-widest uppercase font-bold text-xs mb-4 block">Methodology</span>
              <h2 className={`${playfair.className} text-5xl md:text-6xl leading-none mb-12`}>
                Our Approach <br/> <span className="text-slate-400 italic">to Service.</span>
              </h2>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeUp delay={0.1}>
                <div className="space-y-6 text-lg text-slate-200 leading-relaxed">
                    <p>
                      <span className="text-4xl font-serif text-white mr-2 float-left">W</span>
                      e follow a structured and responsible method of working. Our team is trained to use appropriate chemicals, equipment, and safety procedures as required.
                    </p>
                    <div className="pl-6 border-l border-red-900/50">
                      <strong className="text-white text-lg block mb-2 font-serif">For Pest Control</strong>
                      <p className="text-slate-300 text-base">
                          Our services are delivered using methods such as chemical treatment, biological control, and physical or mechanical techniques. We follow <strong className="text-white">Integrated Pest Management (IPM)</strong> principles.
                      </p>
                    </div>
                    <div className="pl-6 border-l border-red-900/50">
                      <strong className="text-white text-lg block mb-2 font-serif">For Cleaning Services</strong>
                      <p className="text-slate-300 text-base">
                          Our approach is to ensure that the customer receives a practical, thorough, and consistent result. For newly constructed villas, we remove construction residue and paint marks.
                      </p>
                    </div>
                </div>
              </FadeUp>

              <div className="space-y-8">
                <FadeUp delay={0.2}>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                      <h3 className={`${playfair.className} text-3xl mb-6`}>Our Commitment</h3>
                      <ul className="space-y-4">
                          {["Trained and supervised staff", "Clear communication", "Compliance with safety guidelines", "Use of approved materials", "Reasonable pricing"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-base text-slate-100">
                                <Check className="text-red-500 w-5 h-5 mt-0.5 shrink-0" />
                                <span>{item}</span>
                            </li>
                          ))}
                      </ul>
                      <p className="mt-8 text-base text-slate-400 italic border-t border-white/10 pt-6 leading-relaxed">
                          "Our intention is not only to complete a task, but to ensure the customer receives a service that meets acceptable hygiene and safety standards."
                      </p>
                    </div>
                </FadeUp>
              </div>
          </div>
          
          <FadeUp delay={0.4}>
            <div className="mt-16 pt-8 border-t border-slate-800">
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
                  <div>
                    <h4 className="text-2xl font-serif mb-2">Our Service Coverage</h4>
                    <p className="text-base text-slate-400">Supporting short-term and long-term contracts.</p>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-start xl:justify-end">
                    <span className="bg-red-900 text-white px-6 py-2 rounded-full text-sm font-bold">Ras Al Khaimah</span>
                    {["Homes & Villas", "Offices", "Warehouses", "Labor Accommodations"].map((tag) => (
                        <span key={tag} className="bg-white/10 text-white px-5 py-2 rounded-full text-sm border border-white/10">{tag}</span>
                    ))}
                  </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

     <ZoomOutGallery />

     {/* IMPROVEMENT: Background pre-load for the leadership portrait used earlier */}
     <div className="hidden" aria-hidden="true">
        <Image src="/images/leadership-portrait-2.webp" alt="preload" width={10} height={10} />
     </div>

     {/* ================= 7. FOOTER ================= */}
      <footer className="bg-[#0a0a0a] text-white pt-24 pb-8 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>

        <div className="w-full max-w-7xl px-6 mx-auto relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
             
             {/* LEFT SIDE: BRANDING */}
             <div className="lg:col-span-4">
                <FadeUp>
                   <Quote className="w-8 h-8 text-red-900 mb-6 opacity-50" />
                   <h2 className={`${playfair.className} text-5xl md:text-6xl text-white leading-none mb-8`}>
                      Cleaning <br/> is an <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 italic font-serif">Art.</span>
                   </h2>
                   <p className="text-lg text-slate-400 font-light max-w-md leading-relaxed mb-8">
                      We don't just maintain properties; we preserve their soul. Every surface we touch is a canvas.
                   </p>
                   
                   <div className="space-y-2 text-slate-400">
                      <p className="flex items-center gap-2"><span className="text-red-900 font-bold">T:</span> 052-8326933</p>
                      <p className="flex items-center gap-2"><span className="text-red-900 font-bold">E:</span> afcleaning.pest@gmail.com</p>
                      <p className="flex items-center gap-2"><span className="text-red-900 font-bold">L:</span> Dubai & Northern Emirates</p>
                   </div>
                </FadeUp>
             </div>

             {/* RIGHT SIDE: NAVIGATION LINKS */}
             <div className="lg:col-span-8 flex flex-col justify-between">
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                   
                   <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-red-900 mb-6">Explore</h4>
                      <ul className="space-y-4 text-sm text-slate-400">
                         <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                         <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                         <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
                         <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                      </ul>
                   </div>

                   <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-red-900 mb-6">Restoration</h4>
                      <ul className="space-y-4 text-sm text-slate-400">
                         <li><Link href="/services#floor-care" className="hover:text-white transition-colors">Floor Polishing</Link></li>
                         <li><Link href="/services#villa-deep-clean" className="hover:text-white transition-colors">Residential Deep Clean</Link></li>
                         <li><Link href="/services#glass-cleaning" className="hover:text-white transition-colors">Glass & Façade</Link></li>
                         <li><Link href="/services#pool-maintenance" className="hover:text-white transition-colors">Swimming Pools</Link></li>
                      </ul>
                   </div>

                   <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-red-900 mb-6">Defense</h4>
                      <ul className="space-y-4 text-sm text-slate-400">
                         <li><Link href="/services#termite-control" className="hover:text-white transition-colors">Termite Treatment</Link></li>
                         <li><Link href="/services#rodent-control" className="hover:text-white transition-colors">Rodent Control</Link></li>
                         <li><Link href="/services#insect-control" className="hover:text-white transition-colors">General De-bugging</Link></li>
                         <li><Link href="/services#corporate-contracts" className="hover:text-white transition-colors">Annual Contracts</Link></li>
                      </ul>
                   </div>
                </div>

                <div className="flex justify-start md:justify-end">
                    <Link href="/contact" className="group w-full md:w-auto bg-white text-black px-8 py-4 rounded-full flex items-center justify-between md:justify-center gap-4 hover:bg-red-900 hover:text-white transition-all duration-500">
                    <span className="text-base font-bold uppercase tracking-widest">Commission a Service</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                    </Link>
                </div>
             </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
             <p>© {new Date().getFullYear()} Al Fateen Cleaning Services & Pest Control.</p>
             <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
             </div>
          </div>

        </div>
      </footer>

    </main>
  );
}