"use client";

import React, { useRef, useState } from "react"; 
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ArrowDown, Quote, Check, MoveRight, 
  Droplets, ShieldCheck, Warehouse, Sparkles, 
  Leaf, Bug, Factory, Layers, 
  ScanLine, Waves, Scale,
  Loader2, Calendar, Phone, Mail, MapPin, 
  Facebook, Instagram, Linkedin, Twitter,
  MessageCircle // Added MessageCircle for the WhatsApp button
} from "lucide-react";
import Link from "next/link";

// Import your server action
import { submitContactForm } from "../../app/actions/contact";
import Header from "../Header";

// --- 1. HELPER COMPONENTS ---

const CinematicReveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const DrawingLine = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.0, ease: "circOut" }}
      className={`h-[1px] w-full ${className}`}
    />
  );
};

// --- 2. LAYOUT HELPERS ---

const WideContainer = ({ children, className = "" }) => (
  <div className={`w-full max-w-7xl mx-auto px-5 md:px-10 ${className}`}>
    {children}
  </div>
);

// --- 3. SPECIAL COMPONENTS ---

const MethodologyCard = ({ title, description, icon: Icon, delay }) => (
  <CinematicReveal delay={delay} className="h-full">
    <div className="group relative h-full bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-500 overflow-hidden">
      <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-10 transition-opacity">
        <Icon className="w-12 h-12 text-white" />
      </div>
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="w-8 h-8 bg-[#800000] rounded-full flex items-center justify-center mb-3">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
          <p className="text-gray-400 font-light leading-snug text-sm">
            {description}
          </p>
        </div>
        <div className="w-full h-[1px] bg-white/10 mt-4 group-hover:bg-[#800000]/50 transition-colors" />
      </div>
    </div>
  </CinematicReveal>
);

const MethodologySection = () => {
  return (
    <div className="py-10 border-t border-white/10">
      <WideContainer>
        <div className="mb-8">
          <CinematicReveal>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">The Integrated Approach.</h3>
            <p className="text-base text-gray-400 font-light max-w-3xl leading-relaxed">
              We don't just spray; we strategize via our <strong>IPM (Integrated Pest Management)</strong> protocol.
            </p>
          </CinematicReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MethodologyCard title="Strategic IPM" icon={Scale} delay={0.1} description="Identify root causes and set thresholds before any treatment." />
          <MethodologyCard title="Biological Control" icon={Leaf} delay={0.2} description="Utilizing natural enemies like predators to control pests." />
          <MethodologyCard title="Physical Barriers" icon={Warehouse} delay={0.3} description="Manual removal, traps, and physical barriers." />
          <MethodologyCard title="Targeted Chemical" icon={Droplets} delay={0.4} description="Precise application acting as toxins only when necessary." />
        </div>
      </WideContainer>
    </div>
  );
};

const ServiceVisual = ({ type, icon: Icon, image }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]); 

  return (
    <div ref={ref} className="h-[280px] md:h-[340px] w-full bg-[#fbfbfd] rounded-xl overflow-hidden relative border border-black/5 group-hover:border-[#800000]/20 transition-colors duration-700 shadow-sm">
      {image ? (
        <div className="absolute inset-0 z-0">
          <img src={image} alt={type} className="w-full h-full object-cover grayscale-0 opacity-80 group-hover:scale-105 group-hover:opacity-30 transition-all duration-[1.5s] ease-out" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
        </div>
      ) : (
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cfcfcf 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <motion.div style={{ y }} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-white flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-700 ease-out">
              <Icon className="w-8 h-8 text-[#800000]" strokeWidth={1.5} />
            </div>
            <div className="bg-white/95 backdrop-blur-md px-4 py-1 rounded-full border border-black/5 shadow-md">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600 group-hover:text-[#800000] transition-colors duration-500">
                {type}
              </span>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- 5. REUSABLE SERVICE ROW (UPDATED) ---
const ServiceRow = ({ id, title, description, features, visualType, icon, image, dark = false, onBookClick }) => (
  <div id={id} className="group relative py-10 md:py-14 scroll-mt-20">
    <div className="absolute top-0 left-0 w-full px-5 md:px-10">
       <DrawingLine className={dark ? "bg-white/20" : "bg-[#d2d2d7]"} />
    </div>

    <WideContainer>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <CinematicReveal>
            <h3 className={`text-2xl md:text-4xl font-semibold mb-4 transition-colors ${dark ? "text-white group-hover:text-[#ff3333]" : "text-[#1d1d1f] group-hover:text-[#800000]"}`}>
              {title}
            </h3>
            <p className={`text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl ${dark ? "text-gray-400" : "text-[#424245]"}`}>
              {description}
            </p>
            <div className="grid sm:grid-cols-2 gap-y-2 gap-x-6 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dark ? "bg-white" : "bg-[#800000]"}`} />
                   <span className={`text-sm md:text-base font-medium ${dark ? "text-gray-300" : "text-[#1d1d1f]"}`}>{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
               {/* Button 1: Scrolls to Form & Selects Service */}
               <button 
                 onClick={onBookClick}
                 className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 border
                 ${dark 
                   ? "bg-white text-black border-white hover:bg-gray-200" 
                   : "bg-[#1d1d1f] text-white border-[#1d1d1f] hover:bg-[#800000] hover:border-[#800000]"
                 }`}
               >
                 Book This Service <Calendar size={14} />
               </button>

               {/* Button 2: WhatsApp (Replaces the broken 'Inquire' link) */}
               {/* This opens WhatsApp directly. Number format: 971 + 52 + 8326933 (Drop the 0) */}
               <a 
                 href="https://wa.me/971528326933?text=Hi,%20I%20am%20interested%20in%20your%20services."
                 target="_blank"
                 rel="noopener noreferrer"
                 className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 border
                 ${dark 
                    ? "border-white/30 text-white hover:border-green-500 hover:text-green-400" 
                    : "border-black/10 text-[#1d1d1f] hover:border-green-600 hover:text-green-700"
                 }`}
               >
                 WhatsApp <MessageCircle size={14} />
               </a>
            </div>

          </CinematicReveal>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <CinematicReveal delay={0.1}>
             <ServiceVisual type={visualType} icon={icon} image={image} />
          </CinematicReveal>
        </div>
      </div>
    </WideContainer>
  </div>
);

// --- 6. NAVIGATION FOOTER ---
const NavigationFooter = () => (
  <footer className="bg-[#0f0f11] text-gray-400 py-16 border-t border-white/5 text-sm">
    <WideContainer>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        
        {/* Column 1: Brand */}
        <div className="col-span-2 md:col-span-1">
          <h5 className="text-white font-bold uppercase tracking-widest mb-4">Al Fateen</h5>
          <p className="font-light leading-relaxed mb-6">
            Redefining hygiene and pest defense standards across the UAE with precision and care.
          </p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
             <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
             <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h5 className="text-white font-bold uppercase tracking-widest mb-4">Explore</h5>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-[#800000] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#800000] transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#800000] transition-colors">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-[#800000] transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Column 3: Cleaning */}
        <div>
          <h5 className="text-white font-bold uppercase tracking-widest mb-4">Cleaning</h5>
          <ul className="space-y-3">
            <li><a href="#villa-deep-clean" className="hover:text-[#800000] transition-colors">Residential Deep Clean</a></li>
            <li><a href="#floor-care" className="hover:text-[#800000] transition-colors">Floor Polishing</a></li>
            <li><a href="#glass-cleaning" className="hover:text-[#800000] transition-colors">Glass & Façade</a></li>
            <li><a href="#pool-maintenance" className="hover:text-[#800000] transition-colors">Swimming Pools</a></li>
          </ul>
        </div>

        {/* Column 4: Pest Control */}
        <div>
          <h5 className="text-white font-bold uppercase tracking-widest mb-4">Pest Control</h5>
          <ul className="space-y-3">
            <li><a href="#termite-control" className="hover:text-[#800000] transition-colors">Termite Defense</a></li>
            <li><a href="#rodent-control" className="hover:text-[#800000] transition-colors">Rodent Control</a></li>
            <li><a href="#insect-control" className="hover:text-[#800000] transition-colors">General De-bugging</a></li>
            <li><a href="#bed-bugs" className="hover:text-[#800000] transition-colors">Bed Bug Removal</a></li>
          </ul>
        </div>
      </div>

      <DrawingLine className="bg-white/10 mb-8" />
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-wider text-gray-600">
         <p>&copy; {new Date().getFullYear()} Al Fateen Services. All rights reserved.</p>
         <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
         </div>
      </div>
    </WideContainer>
  </footer>
);

// --- 7. MAIN CONTENT ---

export default function AlFateenContent() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const contactRef = useRef(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [selectedService, setSelectedService] = useState("");

  // Helper to scroll to contact form and set dropdown
  const scrollToContact = (serviceName) => {
    setSelectedService(serviceName);
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.target);
    try {
      const result = await submitContactForm(formData);
      if (result?.success) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  }

  return (
    <main className="bg-white text-[#1d1d1f] w-full font-sans selection:bg-[#800000] selection:text-white overflow-x-hidden">
      <Header />
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-screen w-full overflow-hidden bg-[#000000] text-white flex flex-col justify-center items-center text-center">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 opacity-60">
           <div className="absolute inset-0 bg-neutral-950/20" />
           <img src="/images/ServicesIMG.png" alt="Pristine Surface" className="w-full h-full object-cover grayscale" />
        </motion.div>

        <motion.div style={{ y: heroTextY }} className="relative z-10 px-6 w-full max-w-5xl">
          <CinematicReveal>
            <div className="mb-6 inline-flex items-center gap-3 border border-white/20 px-5 py-2 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 bg-[#800000] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Est. 2025 • UAE</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-4 text-white leading-[0.9]">
              Al Fateen.
            </h1>
            <p className="text-lg md:text-2xl text-[#a1a1a6] font-light leading-normal max-w-2xl mx-auto mb-8">
              Cleaning & Pest Control Services.<br/>
              <span className="text-white">Redefining the art of hygiene.</span>
            </p>
            <button 
              onClick={() => scrollToContact("General")}
              className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#800000] hover:text-white transition-colors duration-300"
            >
              Get a Quote
            </button>
          </CinematicReveal>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 text-[#a1a1a6]"
        >
           <p className="text-[10px] uppercase tracking-[0.3em] mb-2">Scroll to Explore</p>
           <ArrowDown className="w-5 h-5 mx-auto animate-bounce" />
        </motion.div>
      </div>

      {/* ================= QUOTE ================= */}
      <section className="bg-[#f5f5f7] py-16 relative">
        <WideContainer>
          <CinematicReveal>
            <div className="flex flex-col items-center text-center">
               <Quote className="w-12 h-12 text-[#800000] mb-6 opacity-80" />
               <h2 className="text-2xl md:text-4xl font-medium leading-tight text-[#1d1d1f] mb-8 max-w-4xl">
                 "The whole process of housekeeping and cleaning should be looked on as an Art and Profession."
               </h2>
               <div className="flex flex-col items-center">
                  <div className="w-px h-10 bg-[#d2d2d7] mb-4"></div>
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#1d1d1f]">Sarah Joseph Hale</p>
               </div>
            </div>
          </CinematicReveal>
        </WideContainer>
      </section>

      {/* ================= CHAPTER 1: CLEANING ================= */}
      <div className="py-12 bg-white">
        <WideContainer className="mb-10">
          <div className="pl-5 border-l-4 border-[#800000]">
            <CinematicReveal>
              <span className="text-[#800000] font-bold tracking-[0.2em] text-xs block mb-3">CHAPTER 01</span>
              <h2 className="text-4xl md:text-6xl font-semibold leading-[0.9] tracking-tight text-[#1d1d1f]">
                Restoration.
              </h2>
            </CinematicReveal>
          </div>
        </WideContainer>

        <ServiceRow 
          id="floor-care"   
          title="Floor Care & Restoration"
          description="We care for your floors in the best manner to maintain and restore their original shine."
          visualType="Polishing"
          icon={Layers}
          image="/images/cleaning-floor2.png" 
          features={["Marble Polishing", "Granite & Ceramic Care", "Wooden Floor Restoration", "Shine Maintenance"]}
          onBookClick={() => scrollToContact("Floor Restoration")}
        />

        <ServiceRow 
          id="villa-deep-clean" 
          title="Residential Services"
          description="General cleaning of villas including newly constructed units. We handle upholstery shampooing."
          visualType="Villas"
          icon={Sparkles}
          image="/images/cleaning-villa2.png"
          features={["General Villa Cleaning", "Upholstery Shampooing", "New Construction Deep Clean", "House Cleaning Service"]}
          onBookClick={() => scrollToContact("Residential Cleaning")}
        />

        <ServiceRow 
          id="glass-cleaning"      
          title="Glass & Façade"
          description="Professional glass cleaning for residential and commercial buildings."
          visualType="Clarity"
          icon={ScanLine}
          image="/images/cleaning-glass.png"
          features={["Interior Glass Cleaning", "Exterior Façade Cleaning", "Streak-Free Finish", "Building Maintenance"]}
          onBookClick={() => scrollToContact("Glass Cleaning")}
        />

        <ServiceRow 
          id="corporate-contracts"  
          title="Commercial Contract"
          description="We provide contract cleaning services for offices suited to your convenience."
          visualType="Corporate"
          icon={Warehouse}
          image="/images/cleaning-office2.png"
          features={["Annual Contracts", "Office Sanitation", "Flexible Scheduling", "Janitorial Staffing"]}
          onBookClick={() => scrollToContact("Corporate Contract")}
        />

        <ServiceRow 
          id="pool-maintenance"        
          title="Swimming Pools"
          description="Complete swimming pool cleaning and water balance maintenance."
          visualType="Aquatic"
          icon={Waves}
          image="/images/cleaning-pool.png"
          features={["Water Chemical Balancing", "Debris Vacuuming", "Tile Scrubbing", "Filter Maintenance"]}
          onBookClick={() => scrollToContact("Pool Maintenance")}
        />
      </div>

      {/* ================= MID-PAGE CTA BREAK ================= */}
      <div className="bg-[#1d1d1f] py-16 text-center border-y border-[#333]">
        <CinematicReveal>
          <h3 className="text-2xl text-white mb-4 font-semibold">Need a custom package?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">We combine services for annual maintenance contracts (AMC) for villas and offices.</p>
          <button 
             onClick={() => scrollToContact("Annual Maintenance")}
             className="border border-white/30 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Get Custom Quote
          </button>
        </CinematicReveal>
      </div>

      {/* ================= CHAPTER 2: PEST DEFENSE ================= */}
      <div className="bg-[#050505] text-white py-12">
         <WideContainer className="mb-8">
           <div className="pl-5 border-l-4 border-[#800000]">
             <CinematicReveal>
               <span className="text-[#800000] font-bold tracking-[0.2em] text-xs block mb-3">CHAPTER 02</span>
               <h2 className="text-4xl md:text-6xl font-semibold leading-[0.9] tracking-tight text-white">
                 Defense.
               </h2>
               <p className="text-lg text-[#86868b] mt-4 font-light max-w-3xl leading-relaxed">
                 "Pest management is a means to reduce pest numbers to an acceptable level."
               </p>
             </CinematicReveal>
           </div>
         </WideContainer>

         <MethodologySection />

         <ServiceRow 
           id="termite-control"     
           dark
           title="Termite Treatment"
           description="We offer pre-construction and post-construction treatments. This includes soil treatment and drill & inject methods."
           visualType="Structural"
           icon={Factory}
           image="/images/pest-termite-drill.png" 
           features={["Pre-Construction (Soil)", "Post-Construction (Drill)", "Foundation Barriers", "Partition Wall Treatment"]}
           onBookClick={() => scrollToContact("Termite Control")}
         />

         <ServiceRow 
           id="rodent-control"     
           dark
           title="Rodent Control"
           description="We use Pulse Baiting Systems (Rodent Bait Stations) and mechanical traps to control populations."
           visualType="Protection"
           icon={ShieldCheck}
           image="/images/pest-rodent-station.png" 
           features={["Pulse Baiting System", "Mechanical Traps", "Entry Point Sealing", "Perimeter Defense"]}
           onBookClick={() => scrollToContact("Rodent Control")}
         />

         <ServiceRow 
           id="insect-control"        
           dark
           title="De-Bugging & General"
           description="Contract-based de-bugging for labor accommodations. We target Cockroaches, Bed bugs, Ants, and Flies."
           visualType="Hygiene"
           icon={Bug}
           image="/images/pest-general.png" 
           features={["Labor Accommodation", "Bed Bug Eradication", "Cockroach Gel Treatment", "Fly Control"]}
           onBookClick={() => scrollToContact("General De-bugging")}
         />
      </div>

      {/* ================= CONTACT FORM SECTION ================= */}
      <div ref={contactRef} className="bg-white text-[#1d1d1f] py-16 border-t border-[#d2d2d7]">
        <WideContainer>
           <CinematicReveal>
              <span className="text-[#800000] font-bold tracking-[0.2em] text-xs block mb-3">
                 GET IN TOUCH
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-12 leading-[0.9]">
                 Start the conversation.
              </h2>
              
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                 {/* LEFT COLUMN: COMPANY INFO */}
                 <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                       <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">Management</h4>
                       <p className="text-2xl font-light mb-2 tracking-tight">Al Fateen Services</p>
                       <div className="pl-4 border-l-2 border-[#800000]">
                         <p className="text-base text-gray-500 font-light leading-snug">
                            Managed by <br/>
                            <strong className="text-[#1d1d1f] font-medium">Mr. Mansoor Saed Suroor Alwali</strong>
                         </p>
                       </div>
                    </div>

                    <div className="space-y-6 mt-10 lg:mt-0">
                       <div className="flex items-center gap-4">
                          <Phone className="text-[#800000]" size={24} />
                          <div>
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Direct Line</h4>
                            <a href="tel:0528326933" className="block text-xl font-semibold hover:text-[#800000]">052-8326933</a>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          <Mail className="text-[#800000]" size={24} />
                          <div>
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Email</h4>
                            <a href="mailto:afcleaning.pest@gmail.com" className="block text-lg font-light hover:text-[#800000]">afcleaning.pest@gmail.com</a>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* RIGHT COLUMN: THE FORM */}
                 <div className="lg:col-span-7">
                    <div className="bg-[#f5f5f7] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-sm">
                       {formStatus === "success" ? (
                         <div className="min-h-[250px] flex flex-col items-center justify-center text-center">
                            <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-3">
                              <Check size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Message Received.</h3>
                            <p className="text-gray-500 text-xs">We will contact you shortly.</p>
                            <button onClick={() => setFormStatus("idle")} className="mt-4 text-xs font-bold uppercase tracking-widest text-[#800000] underline">Send Another</button>
                         </div>
                       ) : (
                         <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                               <div className="group relative">
                                  <input type="text" name="name" required placeholder=" " className="peer w-full bg-transparent border-b border-gray-300 py-2 text-base font-medium text-[#1d1d1f] focus:outline-none focus:border-[#800000] transition-colors duration-300" />
                                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#800000] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none">Full Name</label>
                               </div>
                               <div className="group relative">
                                  <input type="tel" name="phone" required placeholder=" " className="peer w-full bg-transparent border-b border-gray-300 py-2 text-base font-medium text-[#1d1d1f] focus:outline-none focus:border-[#800000] transition-colors duration-300" />
                                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#800000] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none">Mobile Number</label>
                               </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                               <div className="group relative">
                                  {/* CONTROLLED SELECT FOR AUTO-SELECTION */}
                                  <select 
                                    name="service" 
                                    value={selectedService} 
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    className="peer w-full bg-transparent border-b border-gray-300 py-2 text-base font-medium text-[#1d1d1f] focus:outline-none focus:border-[#800000] transition-colors duration-300 appearance-none rounded-none cursor-pointer"
                                  >
                                    <option value="" disabled>Select Service</option>
                                    <option value="General">General Inquiry</option>
                                    <option value="Residential Cleaning">Residential Cleaning</option>
                                    <option value="Floor Restoration">Floor Restoration</option>
                                    <option value="Glass Cleaning">Glass Cleaning</option>
                                    <option value="Corporate Contract">Corporate Contract</option>
                                    <option value="Pool Maintenance">Pool Maintenance</option>
                                    <option value="Annual Maintenance">Annual Maintenance (AMC)</option>
                                    <option value="Termite Control">Termite Control</option>
                                    <option value="Rodent Control">Rodent Control</option>
                                    <option value="General De-bugging">General De-bugging</option>
                                  </select>
                                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#800000] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none">Interested In...</label>
                               </div>
                               <div className="group relative">
                                  <input type="date" name="date" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-base font-medium text-[#1d1d1f] focus:outline-none focus:border-[#800000] transition-colors duration-300 min-h-[45px]" />
                                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#800000] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none">Preferred Date</label>
                               </div>
                            </div>

                            <div className="group relative">
                               <textarea name="message" rows="2" placeholder=" " className="peer w-full bg-transparent border-b border-gray-300 py-2 text-base font-medium text-[#1d1d1f] focus:outline-none focus:border-[#800000] transition-colors duration-300 resize-none"></textarea>
                               <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#800000] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none">Details</label>
                            </div>

                            <button disabled={formStatus === "submitting"} className="w-full bg-[#1d1d1f] text-white h-12 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-[#800000] transition-colors duration-500 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg mt-2">
                               {formStatus === "submitting" ? <Loader2 className="animate-spin w-4 h-4" /> : <>Submit Request <MoveRight size={16} /></>}
                            </button>
                         </form>
                       )}
                    </div>
                 </div>
              </div>
           </CinematicReveal>
        </WideContainer>
      </div>

      {/* ================= FINAL NAVIGATION FOOTER ================= */}
      <NavigationFooter />
      
    </main>
  );
}