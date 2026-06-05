"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  // --- PREMIUM HARDWARE-ACCELERATED PHYSICS ---
  const luxuryEase = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  // Combining Opacity, Y-axis movement, and Blur directly into one hardware-accelerated pass
  const premiumBlurMove = {
    hidden: { 
      opacity: 0, 
      y: 25,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1.1, 
        ease: luxuryEase,
      },
    },
  };

  const storyFadeLeft = {
    hidden: { opacity: 0, x: -25, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: luxuryEase },
    },
  };

  const storyFadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: luxuryEase },
    },
  };

  return (
    <main className="bg-white overflow-x-hidden [content-visibility:auto]">
      {/* ================= 1. Premium "Legacy" Section ================= */}
      <section
        data-header-theme="dark"
        className="relative pt-24 pb-16 md:pt-40 md:pb-24 flex items-center justify-center overflow-hidden min-h-[90vh] [contain:paint]"
      >
        <div className="absolute inset-0 bg-gray-900 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-red-900/90 z-10"></div>
        
        <motion.div
          className="relative z-20 w-[88%] max-w-[85rem] mx-auto px-4 md:px-0 text-center text-white transform-gpu"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.h4
            variants={premiumBlurMove}
            className="text-red-200 font-bold uppercase tracking-[0.25em] mb-4 md:mb-6 text-xs md:text-sm transform-gpu"
          >
            Our Legacy
          </motion.h4>

          <motion.h1
            variants={premiumBlurMove}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight sm:leading-[1.15] drop-shadow-2xl transform-gpu"
          >
            Defining Excellence in <br className="hidden md:block" /> Hygiene & Safety
          </motion.h1>

          <motion.div
            variants={premiumBlurMove}
            className="w-16 md:w-24 h-[2px] bg-red-600 mx-auto mb-6 md:mb-8 transform-gpu"
          />

          <motion.p
            variants={premiumBlurMove}
            className="text-sm md:text-lg text-gray-200 max-w-3xl mx-auto leading-[1.6] md:leading-relaxed font-light opacity-90 transform-gpu"
          >
            Over 15 Years of Unwavering Commitment to a Cleaner, Healthier UAE.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= 2. The Story Section ================= */}
      <section
        id="about"
        data-header-theme="light"
        className="pb-20 pt-0 lg:py-24 bg-white overflow-hidden [contain:paint]"
      >
        <div className="w-full lg:w-[88%] max-w-[110rem] mx-auto relative px-0 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-16">
            
            {/* RIGHT SIDE (Image Component) */}
            <motion.div
              className="w-full lg:w-1/2 relative h-[35vh] sm:h-[350px] lg:h-[550px] z-10 order-first lg:order-last transform-gpu"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={storyFadeUp}
            >
              <div className="absolute inset-0 bg-gray-200 rounded-b-[2rem] lg:rounded-[2.5rem] shadow-2xl overflow-hidden group [contain:paint]">
                <Image
                  src="/images/Team.webp"
                  alt="Al Fateen Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-102 transform-gpu"
                  priority
                />
                <div className="absolute inset-0 border-0 lg:border-[8px] border-white/40 mix-blend-overlay pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
              </div>
            </motion.div>

            {/* LEFT SIDE (Text) */}
            <motion.div
              className="w-full lg:w-1/2 relative z-20 order-last lg:order-first px-4 md:px-0 transform-gpu"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={storyFadeLeft}
            >
              <div className="-mt-16 lg:mt-0 bg-white lg:bg-transparent p-6 lg:p-0 rounded-[1.5rem] lg:rounded-none shadow-xl lg:shadow-none relative">
                <h3 className="text-red-800 font-bold uppercase tracking-[0.2em] leading-relaxed mb-3 md:mb-4 text-[10px] md:text-xs">
                  Who We Are
                </h3>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-[1.2]">
                  More Than a Service: <br />
                  <span className="text-red-700">A Social Commitment.</span>
                </h2>

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