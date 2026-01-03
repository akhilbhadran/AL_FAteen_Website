// src/components/home/ProcessSnippet.jsx
'use client';

import { useRef } from "react";
import Link from "next/link"; 
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Inquiry & Assessment",
    desc: "We analyze your specific needs—deep cleaning or pest control—to recommend the perfect service package.",
    icon: "📋",
  },
  {
    id: "02",
    title: "Site Inspection",
    desc: "Our team visits to identify hygiene issues, pest entry points, and surface materials for the correct treatment.",
    icon: "🔍",
  },
  {
    id: "03",
    title: "Service Execution",
    desc: "Uniformed staff arrive with municipality-approved agents to carry out the cleaning or treatment safely.",
    icon: "⚙️",
  },
  {
    id: "04",
    title: "Final Handover",
    desc: "We review the work with you to ensure it meets our strict standards before marking the job complete.",
    icon: "✅",
  },
];

export default function ProcessSnippet() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] 
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Adjusted triggers since the section is shorter now
  const ctaOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const ctaScale = useTransform(scrollYProgress, [0.8, 1], [0.9, 1]);
  const ctaY = useTransform(scrollYProgress, [0.8, 1], [20, 0]); // Reduced movement distance
  const ctaPointerEvents = useTransform(scrollYProgress, (val) => val > 0.85 ? "auto" : "none");

  return (
    <section 
      ref={containerRef}
      data-header-theme="dark"
      // REDUCED: Padding from py-32 to py-24
      className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Effect - Scaled down slightly */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header - REDUCED: Margins and font sizes */}
        <div className="text-center mb-12 md:mb-20">
          <h4 className="text-red-500 font-bold uppercase tracking-[0.2em] mb-3 text-xs md:text-sm">
            How We Work
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Service <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Protocol.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            A straightforward, professional approach to hygiene and pest management.
          </p>
        </div>

        {/* --- TIMELINE SECTION --- */}
        <div className="relative">
          
          {/* Gray Track */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 rounded-full md:-translate-x-1/2"></div>

          {/* Red Filling Beam */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-red-500 to-amber-500 rounded-full md:-translate-x-1/2 shadow-[0_0_20px_rgba(239,68,68,0.6)] z-10"
          ></motion.div>

          {/* Steps - REDUCED: Gap from 24 to 16 */}
          <div className="flex flex-col gap-18 md:gap-28 pb-8 md:pb-16">
            {steps.map((step, index) => (
              <TimelineCard 
                key={index} 
                step={step} 
                index={index} 
              />
            ))}
          </div>

        </div>

        {/* --- CLIMAX (Final CTA) --- */}
        {/* REDUCED: Top margin and container height */}
        <div className="mt-8 md:mt-12 text-center relative z-20 h-[100px] flex items-center justify-center">
            
          <motion.div
            style={{ 
              opacity: ctaOpacity, 
              scale: ctaScale,
              y: ctaY,
              pointerEvents: ctaPointerEvents
            }}
            className="w-full"
          >
            <h3 className="text-xl md:text-3xl font-bold text-white mb-4">
              Ready to restore your space?
            </h3>
            
            <Link href="/contact">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] transform hover:-translate-y-1 text-xs md:text-sm">
                Book Assessment
              </button>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

// --- SUB-COMPONENT: Individual Step ---
function TimelineCard({ step, index }) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -40% 0px" }); // Adjusted margin for tighter trigger

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-0 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:block w-1/2"></div>

      {/* Center Dot */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div 
          animate={{ scale: isInView ? 1.5 : 1, opacity: isInView ? 1 : 0 }}
          className="absolute w-8 h-8 bg-red-600/30 rounded-full blur-md"
        />
        <motion.div 
          animate={{ 
            backgroundColor: isInView ? "#EF4444" : "#1F2937",
            scale: isInView ? 1.2 : 1,
            borderColor: isInView ? "#ffffff" : "#374151"
          }}
          className="w-4 h-4 rounded-full border-2 relative z-20 transition-colors duration-500"
        />
      </div>

      {/* Content Block */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
        <motion.div 
          initial={{ opacity: 0.2, y: 10 }}
          animate={{ 
            opacity: isInView ? 1 : 0.2, 
            y: isInView ? 0 : 10,
            scale: isInView ? 1 : 0.98 
          }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Background Number - REDUCED: Size significantly */}
          <span className={`absolute top-0 text-5xl md:text-8xl font-black opacity-10 -mt-2 md:-mt-6 -z-10 transition-colors duration-500 ${
             isInView ? "text-red-500" : "text-gray-800"
          } ${isEven ? "right-0" : "left-0"}`}>
            {step.id}
          </span>
          
          <div className="text-2xl md:text-3xl mb-2">{step.icon}</div>
          
          <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-500 ${
            isInView ? "text-white" : "text-gray-600"
          }`}>
            {step.title}
          </h3>
          
          <p className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${
            isInView ? "text-gray-300" : "text-gray-700"
          }`}>
            {step.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
}