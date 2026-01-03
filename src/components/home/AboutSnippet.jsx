"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  // --- PREMIUM PHYSICS ---
  const luxuryEase = [0.22, 1, 0.36, 1];

  // --- VARIANTS ---
  const heroContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };
  const heroItem = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: luxuryEase },
    },
  };
  const storyFadeLeft = {
    hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: luxuryEase },
    },
  };
  const storyFadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.6, ease: luxuryEase, delay: 0.2 },
    },
  };

  return (
    <main className="bg-white overflow-x-hidden">
      {/* ================= 1. Premium "Legacy" Section ================= */}
      <section
        data-header-theme="dark"
        // Reduced min-h from 85vh to 75vh so it feels less massive
        className="relative pt-24 pb-16 md:pt-40 md:pb-24 flex items-center justify-center overflow-hidden min-h-[90vh]"
      >
        <div className="absolute inset-0 bg-gray-900 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-red-900/90 z-10"></div>
        <motion.div
          className="relative z-20 w-[88%] max-w-[85rem] mx-auto px-4 md:px-0 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={heroContainer}
        >
          <motion.h4
            variants={heroItem}
            className="text-red-200 font-bold uppercase tracking-[0.25em] mb-4 md:mb-6 text-xs md:text-sm"
          >
            Our Legacy
          </motion.h4>

          <motion.h1
            variants={heroItem}
            // REDUCED: Was text-[90px], now text-6xl (approx 60px)
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight sm:leading-[1.15] drop-shadow-2xl"
          >
            Defining Excellence in <br className="hidden md:block" /> Hygiene &
            Safety
          </motion.h1>

          <motion.div
            variants={heroItem}
            className="w-16 md:w-24 h-[2px] bg-red-600 mx-auto mb-6 md:mb-8"
          />
          <motion.p
            variants={heroItem}
            // REDUCED: Was text-2xl, now text-lg
            className="text-sm md:text-lg text-gray-200 max-w-3xl mx-auto leading-[1.6] md:leading-relaxed font-light opacity-90"
          >
            Over 15 Years of Unwavering Commitment to a Cleaner, Healthier UAE.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= 2. The Story Section (Optimized Mobile) ================= */}
      <section
        id="about"
        data-header-theme="light"
        className="pb-20 pt-0 lg:py-24 bg-white overflow-hidden"
      >
        <div className="w-full lg:w-[88%] max-w-[110rem] mx-auto relative px-0 lg:px-0">
          
          <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-16">
            
            {/* RIGHT SIDE (Image) */}
            <motion.div
              // REDUCED: Height reduced from 800px to 550px on Desktop
              // REDUCED: Height reduced from 45vh to 35vh on Mobile
              className="w-full lg:w-1/2 relative h-[35vh] sm:h-[350px] lg:h-[550px] z-10 order-first lg:order-last"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={storyFadeUp}
            >
              <div className="absolute inset-0 bg-gray-200 rounded-b-[2rem] lg:rounded-[2.5rem] shadow-2xl overflow-hidden group">
                <img
                  src="/images/Team.png"
                  alt="Al Fateen Team"
                  className="w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 border-0 lg:border-[8px] border-white/40 mix-blend-overlay pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
              </div>
            </motion.div>

            {/* LEFT SIDE (Text) */}
            <motion.div
              className="w-full lg:w-1/2 relative z-20 order-last lg:order-first px-4 md:px-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={storyFadeLeft}
            >
              <div className="-mt-16 lg:mt-0 bg-white lg:bg-transparent p-6 lg:p-0 rounded-[1.5rem] lg:rounded-none shadow-xl lg:shadow-none relative">
                <h3 className="text-red-800 font-bold uppercase tracking-[0.2em] leading-relaxed mb-3 md:mb-4 text-[10px] md:text-xs">
                  Who We Are
                </h3>
                {/* REDUCED: Was text-7xl, now text-5xl */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-[1.2]">
                  More Than a Service: <br />
                  <span className="text-red-700">A Social Commitment.</span>
                </h2>
                {/* REDUCED: Was text-2xl, now text-lg */}
                <div className="text-sm md:text-base lg:text-lg text-gray-600 leading-[1.7] md:leading-relaxed max-w-xl">
                  <p className="mb-4">
                    <span className="font-bold text-gray-900">
                      Al Fateen Cleaning Service & Pest Control
                    </span>{" "}
                    was founded on a simple yet powerful premise: that a clean
                    environment is the foundation of healthy living.
                  </p>
                  <p>
                    We don't just clean properties; we uphold standards. With
                    over{" "}
                    <strong>15 years of extensive industry expertise</strong>, we
                    have refined our methods to provide bespoke janitorial and
                    pest control solutions.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}