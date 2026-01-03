import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const galleryItems = [
  { 
    id: 1, 
    // CHANGE THIS: point to your file name in the public folder
    src: "/images/restoration-main.png", 
    alt: "Main Restoration", 
    // Mobile: Row 1-7 (Top Half), Desktop: Row 2-9 (Center)
    class: "col-start-1 col-end-13 row-start-1 row-end-7 md:col-start-4 md:col-end-10 md:row-start-2 md:row-end-9 z-20" 
  },
  { 
    id: 2, 
    src: "/images/detail-tall.png", 
    alt: "Tall Detail", 
    // Mobile: Bottom Left (Visible), Desktop: Top Right
    class: "block col-start-1 col-end-7 row-start-10 row-end-13 md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-6 z-10" 
  },
  { 
    id: 3, 
    src: "/images/detail-wide.png", 
    alt: "Wide Detail", 
    // Mobile: Middle Strip, Desktop: Bottom Center
    class: "col-start-1 col-end-13 row-start-7 row-end-10 md:col-start-4 md:col-end-9 md:row-start-9 md:row-end-13 z-10" 
  },
  { 
    id: 4, 
    src: "/images/detail-small-1.png", 
    alt: "Small Detail Left", 
    // Mobile: Hidden (Too crowded), Desktop: Left Middle
    class: "hidden md:block col-start-1 col-end-4 row-start-4 row-end-9 z-10" 
  },
  { 
    id: 5, 
    src: "/images/detail-small-2.png", 
    alt: "Small Detail Right", 
    // Mobile: Bottom Right (Visible), Desktop: Bottom Right
    class: "block col-start-7 col-end-13 row-start-10 row-end-13 md:col-start-10 md:col-end-13 md:row-start-7 md:row-end-12 z-20" 
  }
];

export default function ZoomOutCollageWide() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 500); 
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-[#F9F8F6] flex flex-col items-center py-12 overflow-hidden"
    >
      {/* Background Decor */}
      <div className={`absolute inset-0 transition-opacity duration-[2s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
         <div className="absolute left-[25%] top-0 h-full w-[1px] bg-black/5"></div>
         <div className="absolute right-[33%] top-0 h-full w-[1px] bg-black/5"></div>
      </div>

      {/* Heading */}
      <div className={`z-40 text-center mb-8 md:mb-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <span className="text-red-900 font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">
          The Collection
        </span>
        <h2 className={`${playfair.className} text-4xl md:text-7xl text-stone-900 leading-tight`}>
          Restored Archives.
        </h2>
      </div>

      {/* THE COLLAGE CONTAINER */}
      {/* Updated min-h for mobile to fit screen better */}
      <div className="relative w-full h-[80vh] min-h-[600px] md:h-[85vh] md:min-h-[750px] max-w-[2200px] px-4 md:px-8">
        
        {/* 12x12 GRID */}
        <div className="w-full h-full grid grid-cols-12 grid-rows-12 gap-3 md:gap-6">
          
          {galleryItems.map((item, index) => {
            
            // ANIMATION LOGIC 
            let initialTransform = "";
            let transitionDelay = `${index * 120}ms`; 

            if (index === 0) {
              initialTransform = "scale-[2.2] z-50 translate-x-[15%] translate-y-[10%]"; 
            } else if (index === 1) {
               initialTransform = "translate-y-[-50%] translate-x-[50%] opacity-0";
            } else if (index === 2) {
               initialTransform = "translate-y-[50%] opacity-0";
            } else if (index === 3) {
               initialTransform = "translate-x-[-100%] opacity-0";
            } else {
               initialTransform = "translate-x-[100%] opacity-0";
            }

            return (
              <div 
                key={item.id} 
                className={`relative shadow-2xl ${item.class} 
                  transition-all duration-[1.8s] cubic-bezier(0.16, 1, 0.3, 1)
                  ${isVisible ? 'transform-none opacity-100' : initialTransform}
                `}
                style={{ transitionDelay }}
              >
                <div className="relative w-full h-full group overflow-hidden bg-stone-200">
                  <Image 
                    src={item.src} 
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                  <div className={`absolute bottom-6 left-[-10px] group-hover:left-0 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                     <span className="bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
                       View {index + 1}
                     </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}