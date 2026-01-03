'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, ShieldCheck, Leaf, Star, Clock } from "lucide-react";
import { Playfair_Display, Manrope } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

// --- DATA (Unchanged) ---
const features = [
  {
    id: "01",
    label: "Legacy",
    title: "15 Years of Excellence",
    desc: "Founded under the leadership of Mr. Mansoor Saed Suroor Alwali. We bring military-grade discipline and over a decade of operational mastery.",
    img: "/images/about-hero-bg.jpg", 
    icon: Award,
  },
  {
    id: "02",
    label: "Leadership",
    title: "Military Precision",
    desc: "Led by a UAE Armed Forces Navigator. We operate with a level of discipline, punctuality, and attention to detail that standard companies cannot match.",
    img: "/images/leadership.png", 
    icon: Star,
  },
  {
    id: "03",
    label: "Technology",
    title: "Eco-Friendly Science",
    desc: "Advanced Integrated Pest Management (IPM). Tough on impurities, completely safe for children, pets, and your sanctuary.",
    img: "/images/_New.png", 
    icon: Leaf,
  },
  {
    id: "04",
    label: "Flexibility",
    title: "On Your Schedule",
    desc: "We adapt to your lifestyle. Whether strictly daily maintenance or bespoke monthly contracts, our schedule revolves around yours.",
    img: "/images/cleaning-office.jpg", 
    icon: Clock,
  },
  {
    id: "05",
    label: "Trust",
    title: "Municipality Approved",
    desc: "Fully licensed and compliant with strict UAE regulations. We use only approved, safe materials to ensure the highest standards of health.",
    img: "/images/service-cleaning.png", 
    icon: ShieldCheck,
  },
];

// --- ANIMATION VARIANTS ---
const textVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' }, 
  visible: (delay) => ({
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 1.0, // Slightly faster
      ease: [0.25, 0.4, 0.25, 1],
      delay: delay 
    }
  })
};

export default function WhyChooseUsParallax() {
  return (
    // REDUCED: py-48 -> py-24 for desktop
    <section className={`bg-[#F4F4F5] text-slate-900 py-16 md:py-24 overflow-hidden ${manrope.className}`}>
      
      <div className="w-full px-5 md:px-[5%] lg:px-[12%]">
        
        {/* --- HEADER --- */}
        {/* REDUCED: Margin bottom significantly */}
        <div className="mb-16 md:mb-24 lg:mb-32 text-center max-w-5xl mx-auto">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-red-800 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 md:mb-6 block"
           >
             The Al Fateen Standard
           </motion.span>
           
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             // REDUCED: text-9xl -> text-7xl
             className={`${playfair.className} text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-[0.95] tracking-tight`}
           >
             Why We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900 italic">Matter.</span>
           </motion.h2>
        </div>

        {/* --- PARALLAX ROWS --- */}
        {/* REDUCED: gap-56 -> gap-24 (Desktop), gap-32 -> gap-16 (Mobile) */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {features.map((feature, index) => (
            <div key={feature.id} className="relative">
                <ParallaxRow data={feature} index={index} />
                
                {/* Divider Line (Mobile Only) */}
                {index !== features.length - 1 && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-slate-300 lg:hidden" />
                )}
            </div>
          ))}
        </div>

        {/* --- FINAL CTA --- */}
        {/* REDUCED: mt-48 -> mt-24 */}
        <div className="mt-24 md:mt-32 flex justify-center pb-0">
           <Link 
             href="/contact" 
             className="group relative inline-flex items-center gap-4 md:gap-6"
           >
             {/* REDUCED: text-7xl -> text-5xl */}
             <span className={`${playfair.className} text-2xl md:text-4xl lg:text-5xl text-slate-900 group-hover:text-red-800 transition-colors duration-500`}>
               Start Your Journey
             </span>
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-red-800 group-hover:scale-110 transition-all duration-500 shadow-xl">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
             </div>
           </Link>
        </div>

      </div>
    </section>
  );
}

// --- SUB-COMPONENT: PARALLAX ROW ---
function ParallaxRow({ data, index }) {
  const containerRef = useRef(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImageInner = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1.02]); 
  
  // Parallax Values
  const yTextSection = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]); 

  return (
    <div 
      ref={containerRef} 
      // REDUCED: Mobile gap-4
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-6 lg:gap-12`}
    >
      
      {/* 1. IMAGE SIDE */}
      {/* REDUCED: lg:w-[38%] -> lg:w-[35%] to give text more room or shrink image slightly */}
      <div className="w-full lg:w-[35%] aspect-video lg:aspect-square relative group mx-auto lg:mx-0">
         <div className="w-full h-full overflow-hidden rounded-2xl md:rounded-[2rem] shadow-xl relative z-0">
            <motion.div 
              style={{ y: yImageInner, scale: scaleImage }} 
              className="relative w-full h-[120%] -top-[10%]"
            >
               <Image 
                 src={data.img} 
                 alt={data.title} 
                 fill 
                 className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
            </motion.div>
         </div>

         {/* Badge - REDUCED Size */}
         <div 
           className={`absolute -bottom-4 ${isEven ? 'right-4 lg:-right-5' : 'left-4 lg:-left-5'} w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 z-10`}
         >
            <data.icon className="w-5 h-5 md:w-7 md:h-7 text-red-800" strokeWidth={1.5} />
         </div>
      </div>

      {/* 2. TEXT SIDE */}
      <motion.div 
        style={{ y: yTextSection }} 
        className={`w-full lg:w-[55%] flex flex-col justify-center ${isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} items-start text-left`}
      >
         <div className="max-w-2xl">
            
            <motion.div 
              className={`flex items-center gap-3 md:gap-4 mb-2 md:mb-4 ${isEven ? 'flex-row' : 'flex-row lg:flex-row-reverse'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }} 
            >
               {/* REDUCED: text-9xl -> text-6xl/7xl */}
               <motion.span 
                 custom={0} variants={textVariants}
                 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-300 font-bold leading-none select-none"
               >
                 {data.id}
               </motion.span>
               <motion.span 
                 custom={0.1} variants={textVariants}
                 className="text-red-800 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mt-2"
               >
                 {data.label}
               </motion.span>
            </motion.div>

            {/* REDUCED: text-7xl -> text-4xl/5xl */}
            <motion.h3 
              custom={0.2} variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              className={`${playfair.className} text-2xl md:text-4xl lg:text-5xl text-slate-900 mb-3 md:mb-6 leading-[1.1] tracking-tight`}
            >
              {data.title}
            </motion.h3>

            {/* Separator Line (Red) */}
            <div className={`w-12 md:w-16 h-[2px] bg-slate-200 mb-3 md:mb-6 overflow-hidden ${!isEven ? 'lg:ml-auto' : ''}`}>
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                 className="h-full bg-red-800"
               />
            </div>

            {/* REDUCED: text-2xl -> text-lg/xl */}
            <motion.p 
              custom={0.3} variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              className="text-sm md:text-lg lg:text-xl text-slate-600 font-light leading-relaxed"
            >
              {data.desc}
            </motion.p>

         </div>
      </motion.div>

    </div>
  );
}