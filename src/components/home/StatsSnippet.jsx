// src/components/home/StatsSnippet.jsx
'use client';

import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

export default function StatsSnippet() {
  return (
    <section className="py-12 md:py-24 bg-white text-gray-900 px-4 relative overflow-hidden border-b border-gray-100">
      
      {/* Subtle top shadow */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent opacity-50 pointer-events-none"></div>

      {/* GRID LAYOUT: 
         - Mobile: grid-cols-2 (2 items per row, efficient space)
         - Desktop: grid-cols-4 (all in one row)
         - Gap: Reduced to gap-y-8 on mobile for better vertical spacing
      */}
      <div className="max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-0 text-center">
        
        {/* === Stat 1: Experience === */}
        {/* Added md:border-r to create dividers only on desktop */}
        <div className="flex flex-col items-center justify-start md:border-r md:border-gray-200 px-2">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-extrabold mb-2 md:mb-6 flex justify-center items-baseline text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600">
            <Counter from={0} to={15} duration={2} />
            <span className="text-2xl sm:text-4xl md:text-6xl text-red-700 ml-1">+</span>
          </div>
          <div className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs md:text-lg font-bold">
            Years Experience
          </div>
        </div>

        {/* === Stat 2: Satisfaction === */}
        <div className="flex flex-col items-center justify-start md:border-r md:border-gray-200 px-2">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-extrabold mb-2 md:mb-6 flex justify-center items-baseline text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600">
            <Counter from={0} to={100} duration={2.5} />
            <span className="text-2xl sm:text-4xl md:text-6xl text-red-700 ml-1">%</span>
          </div>
          <div className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs md:text-lg font-bold">
            Client Satisfaction
          </div>
        </div>

        {/* === Stat 3: 24/7 === */}
        <div className="flex flex-col items-center justify-start md:border-r md:border-gray-200 px-2">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-extrabold mb-2 md:mb-6 flex justify-center items-baseline text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600">
            <span className="flex items-baseline">
              <Counter from={0} to={24} duration={2} />
              <span className="mx-1 text-gray-300 text-2xl sm:text-4xl md:text-6xl font-light">/</span>
              <Counter from={0} to={7} duration={2} />
            </span>
          </div>
          <div className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs md:text-lg font-bold">
            Support Available
          </div>
        </div>

        {/* === Stat 4: Approved === */}
        {/* REMOVED 'hidden' so it shows on mobile now */}
        <div className="flex flex-col items-center justify-start px-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-extrabold mb-2 md:mb-6 flex items-center justify-center h-[40px] sm:h-[48px] md:h-[auto] text-red-700"
          >
            <span>✓</span>
          </motion.div>
          {/* Added mt-auto to align label with others if icon size differs */}
          <div className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs md:text-lg font-bold mt-2 md:mt-0">
            Municipality Approved
          </div>
        </div>

      </div>
    </section>
  );
}

// --- HELPER COMPONENT (Unchanged logic, just keeping it here) ---
function Counter({ from, to, duration }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest);
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}