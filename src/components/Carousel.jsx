'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import '../styles/carousel.css'; 

const slides = [
  {
    // New Name
    imgMobile: '/images/mob-1.png',   
    imgDesktop: '/images/img1.jpg', 
    title: "Let's Make Your Space Shine",
    desc: 'Let our expert team bring a fresh, shining look to every corner.',
  },
  {
    // New Name
    imgMobile: '/images/mob-2.png',
    imgDesktop: '/images/img2.jpg',
    title: 'Latest Equipment',
    desc: 'Expert cleaning and reliable pest control.',
  },
  {
    // New Name
    imgMobile: '/images/mob-3.png',
    imgDesktop: '/images/img3.jpg',
    title: 'Cleaning Excellence!',
    desc: 'We go above and beyond to deliver impeccable results every time.',
  },
];

const ANIMATION_DURATION_MS = 2200;

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); 
  const intervalRef = useRef(null);

  const triggerSlide = (index) => {
    if (isAnimating || index === current) return;
    stopAutoPlay();
    setNext(index);
    setIsAnimating(true);
    setIsTransitioning(true); 
  };
  
  useEffect(() => {
    let animationTimeout;
    let transitionTimeout;

    if (isAnimating && next !== null) {
      animationTimeout = setTimeout(() => {
        setCurrent(next);      
        setIsAnimating(false);    
        transitionTimeout = setTimeout(() => {
          setIsTransitioning(false);
          setNext(null); 
          startAutoPlay();
        }, 50); 
      }, ANIMATION_DURATION_MS);
    }
    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(transitionTimeout);
    };
  }, [isAnimating, next, current]);

  const startAutoPlay = () => {
    stopAutoPlay(); 
    intervalRef.current = setInterval(() => {
      const nextIndex = (current + 1) % slides.length;
      triggerSlide(nextIndex);
    }, 5000); 
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); 
  }, [current]);

  return (
    <main>
      <section 
        id="carousel" 
        className="relative w-full h-[100dvh] md:h-screen overflow-hidden bg-black"
      >
        
        {/* ================= 1. IMAGES ================= */}
        <div className="absolute inset-0 w-full h-full">
            {/* CURRENT SLIDE */}
            <div className="absolute inset-0 w-full h-full">
               {/* Mobile Portrait */}
               <div className="block md:hidden w-full h-full relative">
                 <Image
                   src={slides[current].imgMobile}
                   alt={slides[current].title}
                   fill
                   priority={current === 0} 
                   quality={90}
                   // ADDED: Helps browser understand this is for full width
                   sizes="100vw"
                   className={`carousel-img ${isAnimating ? 'outgoing-zoom' : ''} object-cover object-center`}
                 />
               </div>
               {/* Desktop Landscape */}
               <div className="hidden md:block w-full h-full relative">
                 <Image
                   src={slides[current].imgDesktop}
                   alt={slides[current].title}
                   fill
                   priority={current === 0} 
                   quality={90}
                   sizes="100vw"
                   className={`carousel-img ${isAnimating ? 'outgoing-zoom' : ''} object-cover object-center`}
                 />
               </div>
            </div>

            {/* NEXT SLIDE */}
            {isTransitioning && next !== null && (
              <div className="absolute inset-0 w-full h-full z-20">
                 <div className="block md:hidden w-full h-full relative">
                   <Image
                     key={`next-m-${next}`} 
                     src={slides[next].imgMobile}
                     alt={slides[next].title}
                     fill
                     priority 
                     quality={90}
                     sizes="100vw"
                     className={`carousel-img ${isAnimating ? 'incoming-wipe-left' : ''} object-cover object-center`}
                   />
                 </div>
                 <div className="hidden md:block w-full h-full relative">
                   <Image
                     key={`next-d-${next}`} 
                     src={slides[next].imgDesktop}
                     alt={slides[next].title}
                     fill
                     priority 
                     quality={90}
                     sizes="100vw"
                     className={`carousel-img ${isAnimating ? 'incoming-wipe-left' : ''} object-cover object-center`}
                   />
                 </div>
              </div>
            )}
        </div>

        {/* ================= 2. GRADIENT ================= */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/60 z-20 pointer-events-none" />

        {/* ================= 3. TEXT CONTAINER ================= */}
        <div className="absolute inset-0 z-30 flex flex-col justify-end items-start pl-6 pr-8 pb-50 md:pl-30 md:pr-30 md:pb-44 pointer-events-none ">
          
          <div className={`${isAnimating ? 'animate-captionExit' : ''} w-full max-w-3xl text-left`}>
            <h2 className="text-4xl md:text-7xl font-bold text-white drop-shadow-xl leading-[1.1] md:leading-none">
              {slides[current].title}
            </h2>
            <p className="mt-3 md:mt-6 text-lg md:text-xl text-gray-200 md:text-white/90 font-medium md:font-normal max-w-xs md:max-w-xl">
              {slides[current].desc}
            </p>
          </div>

          {/* NEXT TEXT WRAPPER */}
          {isAnimating && next !== null && (
            <div className="absolute inset-0 flex flex-col justify-end items-start pl-6 pr-8 pb-50 md:pl-30 md:pb-44 w-full h-full">
               <div className="animate-captionEnter w-full max-w-3xl text-left">
                  <h2 className="text-4xl md:text-7xl font-bold text-white drop-shadow-xl leading-[1.1] md:leading-none">
                    {slides[next].title}
                  </h2>
                  <p className="mt-3 md:mt-6 text-lg md:text-xl text-gray-200 md:text-white/90 font-medium md:font-normal max-w-xs md:max-w-xl">
                    {slides[next].desc}
                  </p>  
               </div>
            </div>
          )}
        </div>

        {/* ================= 4. DOTS ================= */}
        <div className="absolute bottom-8 left-6 md:left-20 z-40 flex gap-3 pointer-events-auto">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => triggerSlide(idx)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 shadow-sm ${
                idx === current 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </section>
    </main>
  );
}