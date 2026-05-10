'use client';

import { motion } from "framer-motion";
import Image from "next/image";

// --- DATA SECTION (Fixed: Removed Hallucinated Name) ---
const leaders = [
  {
    id: "mansoor",
    name: "Mr. Mansoor",
    lastName: "Saed Suroor Alwali",
    role: "Founder & Managing Director",
    image: "/images/chairman.webp", 
    quote: "Discipline is the bridge between goals and accomplishment.",
    bio: (
      <>
        <p className="mb-4">
          Mr. Mansoor established Al Fateen with a disciplined mission: to improve people’s quality of life through cleaner, safer, and more hygienic environments.
        </p>
        <p>
          A <strong className="text-white font-bold">Navigator with the UAE Armed Forces</strong>, he carries strong leadership experience across operations. His disciplined vision guides the company’s growth, ensuring every project meets the highest standards.
        </p>
      </>
    ),
    badges: [
      { icon: "⚓️", label: "UAE Armed Forces", sub: "Navigator (Ret.)" },
      { icon: "🇦🇪", label: "National", sub: "Founder" },
      { icon: "👁️", label: "Visionary", sub: "Leadership" },
    ],
    highlight: {
      title: "Background",
      main: "UAE Armed Forces",
      sub: "Navigator (Ret.)",
      accentColor: "bg-red-700"
    }
  },
  {
    id: "admin-director",
    name: "Administrative", // Removed specific name
    lastName: "Director",
    role: "Executive Management",
    image: "/images/thomas.webp", // Updated to your generic asset name
    bio: (
      <>
        <p className="mb-4">
          Backed by <strong className="text-white font-bold">Post-Graduate qualifications in Personnel Management</strong> and active membership in the <strong className="text-white font-bold">CIEH (UK)</strong> and <strong className="text-white font-bold">ASIS (USA)</strong>, our administration brings global technical expertise to the UAE.
        </p>
        <p>
          With over <strong className="text-white font-bold">15 years of professional experience</strong>, this leadership ensures that Al Fateen maintains international standards in cleaning and pest control services across all residential and commercial sectors.
        </p>
      </>
    ),
    badges: [
      { icon: "📜", label: "CIEH (UK)", sub: "Member" },
      { icon: "🛡️", label: "ASIS (USA)", sub: "Member" },
      { icon: "⚙️", label: "15+ Years", sub: "Experience" },
    ],
    highlight: {
      title: "Expertise",
      main: "15+ Years",
      sub: "Pest Mgmt & Safety",
      accentColor: "bg-blue-600"
    }
  }
];

// --- MAIN COMPONENT ---
export default function LeadershipSection() {
  return (
    <section data-header-theme="dark" className="relative py-12 md:py-24 bg-[#050505] text-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Watermark */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10vw] font-bold text-white/[0.02] pointer-events-none select-none leading-none z-0 whitespace-nowrap uppercase">
        Leadership
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-20 md:space-y-24">
        {leaders.map((leader, index) => (
          <LeaderProfile key={leader.id} data={leader} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

// --- REUSABLE SUB-COMPONENT ---
function LeaderProfile({ data, isReversed }) {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      
      {/* --- IMAGE COLUMN --- */}
      <motion.div 
        initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-4/12 relative group"
      >
        <div className="relative aspect-[3/4] w-full bg-neutral-900 overflow-hidden rounded-sm border border-white/10 shadow-xl">
            <Image 
              src={data.image} 
              alt={data.name} 
              fill 
              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" 
            /> 
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className={`absolute -top-2 -left-2 w-full h-full border border-white/20 rounded-sm -z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 ${isReversed ? 'border-blue-900/50' : 'border-red-900/50'}`}></div>
        
        <div className={`absolute bottom-4 ${isReversed ? 'left-4' : 'right-4'} z-20 hidden md:block`}>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-3 shadow-xl relative overflow-hidden min-w-[160px]">
              <div className={`absolute top-0 left-0 w-1 h-full ${data.highlight.accentColor}`}></div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">{data.highlight.title}</p>
              <p className="text-lg font-serif text-white leading-tight">{data.highlight.main}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{data.highlight.sub}</p>
            </div>
        </div>
      </motion.div>

      {/* --- CONTENT COLUMN --- */}
      <motion.div 
        className={`w-full lg:w-8/12 ${isReversed ? 'lg:text-right' : 'lg:text-left'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className={`flex items-center gap-3 mb-4 ${isReversed ? 'lg:justify-end' : 'lg:justify-start'}`}>
            {!isReversed && <div className="h-px w-8 bg-red-600"></div>}
            <h4 className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs">
              {data.role}
            </h4>
            {isReversed && <div className="h-px w-8 bg-blue-600"></div>}
        </div>

        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-4">
          {data.name} <span className="text-white/30 text-2xl md:text-4xl block md:inline md:ml-2">{data.lastName}</span>
        </h2>

        {data.quote && (
           <div className={`mb-6 relative max-w-lg ${isReversed ? 'ml-auto' : ''}`}>
             <p className="text-lg md:text-xl font-light text-white/90 italic leading-relaxed">
               <span className="text-red-500">“</span> {data.quote} <span className="text-red-500">”</span>
             </p>
           </div>
        )}

        <div className={`text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl ${isReversed ? 'lg:ml-auto' : ''}`}>
          {data.bio}
        </div>

        <div className={`flex flex-wrap gap-6 border-t border-white/10 pt-6 ${isReversed ? 'lg:justify-end' : ''}`}>
          {data.badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3">
               <span className="text-2xl opacity-80">{badge.icon}</span>
               <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-white">{badge.label}</span>
                  <span className="block text-[10px] text-gray-400">{badge.sub}</span>
               </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}