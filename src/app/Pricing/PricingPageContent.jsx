"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, XCircle, HelpCircle, 
  ChevronDown, Sparkles, ShieldCheck, 
  ArrowRight, Star, X, Phone, MapPin, Loader2
} from "lucide-react";
import Link from "next/link";
import Header from "../../components/Header"; 
import { submitContactForm } from "../actions/contact";


// --- DATA ---
const pricingTiers = {
  cleaning: [
    {
      name: "Residential & Villas",
      price: "499",
      suffix: "starting",
      desc: "Complete hygiene for villas.",
      features: ["General Villa Cleaning", "Upholstery Shampooing", "Mattress Sanitization", "Kitchen & Bath Scrubbing"],
      limitations: [],
      isPopular: true
    },
    {
      name: "Floor Restoration",
      price: "299",
      suffix: "visit",
      desc: "Restore original shine.",
      features: ["Marble Polishing", "Granite & Ceramic Care", "Wooden Floor Restoration", "Buffing & Shine"],
      limitations: ["Deep scratches vary"],
      isPopular: false
    },
    {
      name: "Glass & Façade",
      price: "Custom",
      suffix: "quote",
      desc: "Crystal clear views.",
      features: ["Interior Glass Cleaning", "Exterior Rope Access", "Streak-Free Finish", "Hard Water Stain Removal"],
      limitations: [],
      isPopular: false
    },
    {
      name: "Corporate Contract",
      price: "Custom",
      suffix: "month",
      desc: "Janitorial staffing.",
      features: ["Daily/Weekly Schedules", "Office Sanitation", "Pantry Management", "Dedicated Staffing"],
      limitations: [],
      isPopular: false
    },
    {
      name: "Swimming Pools",
      price: "199",
      suffix: "visit",
      desc: "Hygienic aquatic environments.",
      features: ["Water Chemical Balancing", "Debris Vacuuming", "Tile Scrubbing", "Filter Maintenance"],
      limitations: [],
      isPopular: false
    }
  ],
  pest: [
    {
      name: "De-Bugging",
      price: "149",
      suffix: "visit",
      desc: "Control for common pests.",
      features: ["Cockroach Gel Treatment", "Bed Bug Eradication", "Ant Spray", "Fly Control"],
      limitations: ["Severe need 2 visits"],
      isPopular: true
    },
    {
      name: "Termite Defense",
      price: "999",
      suffix: "starting",
      desc: "Structural protection.",
      features: ["Pre-Construction (Soil)", "Post-Construction (Drill)", "Foundation Barriers", "5-Year Warranty"],
      limitations: [],
      isPopular: false
    },
    {
      name: "Rodent Control",
      price: "249",
      suffix: "visit",
      desc: "Trapping & exclusion.",
      features: ["Pulse Baiting Systems", "Mechanical Traps", "Entry Point Sealing", "Perimeter Defense"],
      limitations: [],
      isPopular: false
    }
  ]
};

const faqs = [
  { q: "Do you offer annual contracts?", a: "Yes. Our 'Estate Contract' bundles cleaning, pool maintenance, and pest control into one monthly fee." },
  { q: "Is the Termite treatment guaranteed?", a: "Absolutely. Our drill-and-inject termite treatments come with a comprehensive warranty (up to 5 years)." },
  { q: "Do I need to leave the house?", a: "For general gel treatments, no. For strong spray treatments, we recommend vacating for 2-4 hours." },
  { q: "What is in 'Floor Restoration'?", a: "Stripping old wax/dirt, diamond polishing (for marble), and applying a fresh sealant." }
];

// --- ANIMATION HELPERS ---
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

// --- SUB-COMPONENTS ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-[#800000] transition-colors group"
      >
        <span className="text-base font-semibold text-gray-800 group-hover:text-[#800000]">{question}</span>
        <ChevronDown className={`transition-transform duration-300 w-4 h-4 ${isOpen ? "rotate-180 text-[#800000]" : "text-gray-400"}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PricingPageContent() {
  const [activeTab, setActiveTab] = useState("cleaning");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formStatus, setFormStatus] = useState("idle");

  const openBooking = (planName) => {
    setSelectedPlan(planName);
    setFormStatus("idle");
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isModalOpen]);

  async function handleModalSubmit(e) {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.target);
    const result = await submitContactForm(formData);
    if (result.success) setFormStatus("success");
    else {
      setFormStatus("error");
      alert("Error. Please call us.");
    }
  }

  return (
    
    <div id="why-choose-us" data-header-theme="light" className="relative bg-white min-h-screen font-sans selection:bg-[#800000] selection:text-white">
     
     <Header/>
      {/* Reduced Top Padding */}
      <main className="text-[#1d1d1f] pt-24 pb-16">
        
        {/* 1. HERO & TOGGLE */}
        <div className="px-6 md:px-12 lg:px-20 mb-12 text-center">
          <Reveal>
            <span className="text-[#800000] font-bold tracking-[0.2em] text-xs uppercase mb-4 inline-block">
              Transparent Pricing
            </span>
            {/* Tighter Heading */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Choose your Service.
            </h1>
            <p className="text-base md:text-lg text-[#86868b] max-w-xl mx-auto leading-relaxed font-medium mb-8">
              Professional care for your property. Select a category below.
            </p>

            {/* --- VISUAL TOGGLE (High Contrast Pill) --- */}
            <div className="flex justify-center">
                <div className="relative flex w-full max-w-[300px] bg-gray-100 rounded-full p-1 shadow-inner">
                    <motion.div
                    className="absolute top-1 bottom-1 bg-[#800000] rounded-full shadow-md z-0"
                    layoutId="activeTabBackground"
                    initial={false}
                    animate={{
                        left: activeTab === "cleaning" ? "4px" : "50%",
                        width: "calc(50% - 4px)" 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    
                    <button
                    onClick={() => setActiveTab("cleaning")}
                    className={`relative z-10 w-1/2 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-200 
                    ${activeTab === "cleaning" ? "text-white" : "text-gray-500 hover:text-gray-900"}`}
                    >
                    <Sparkles size={14} className={activeTab === "cleaning" ? "text-white/80" : ""} /> 
                    Cleaning
                    </button>
                    
                    <button
                    onClick={() => setActiveTab("pest")}
                    className={`relative z-10 w-1/2 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-200 
                    ${activeTab === "pest" ? "text-white" : "text-gray-500 hover:text-gray-900"}`}
                    >
                    <ShieldCheck size={14} className={activeTab === "pest" ? "text-white/80" : ""} /> 
                    Pest Control
                    </button>
                </div>
            </div>
          </Reveal>
        </div>

        {/* 2. PRICING CARDS (Compact) */}
        <div className="px-6 md:px-10 lg:px-16 mb-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" // Tighter gap
            >
              {pricingTiers[activeTab].map((tier, i) => (
                <div key={tier.name} className="h-full">
                  {/* Reduced Padding to p-6, Rounded to 3xl */}
                  <div className={`h-full relative p-6 rounded-3xl border flex flex-col transition-all duration-300 group
                    ${tier.isPopular 
                      ? "bg-[#1d1d1f] text-white border-[#800000] shadow-xl hover:-translate-y-1" 
                      : "bg-gray-50 text-[#1d1d1f] border-gray-200 hover:border-[#800000]/30 hover:shadow-lg hover:-translate-y-1"
                    }`}
                  >
                    {tier.isPopular && (
                      <div className="absolute top-0 right-0 bg-[#800000] text-white text-[9px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-bl-xl rounded-tr-2xl z-10">
                        Popular
                      </div>
                    )}

                    <div className="mb-4">
                      {/* Reduced Font Size */}
                      <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                      <p className={`text-xs font-medium leading-relaxed ${tier.isPopular ? "text-gray-400" : "text-gray-500"}`}>
                        {tier.desc}
                      </p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-gray-500/10">
                      <div className="flex items-baseline gap-1">
                        {tier.price !== "Custom" && <span className="text-lg opacity-60 font-medium">AED</span>}
                        {/* Reduced Font Size */}
                        <span className="text-4xl font-bold tracking-tighter">{tier.price}</span>
                      </div>
                      <p className={`text-[10px] mt-1 uppercase tracking-widest font-semibold ${tier.isPopular ? "text-gray-500" : "text-gray-400"}`}>
                        / {tier.suffix}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {tier.features.map(f => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.isPopular ? "text-[#800000]" : "text-green-600"}`} />
                          <span className={tier.isPopular ? "text-gray-300" : "text-gray-700 font-medium"}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => openBooking(tier.name)}
                      className={`w-full py-3 rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] text-center transition-all cursor-pointer
                      ${tier.isPopular 
                        ? "bg-white text-black hover:bg-gray-200" 
                        : "bg-[#1d1d1f] text-white hover:bg-[#800000]"
                      }`}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. COMPARISON (Compact) */}
        <section className="bg-[#f5f5f7] py-16 mb-16">
          <div className="px-6 md:px-12 lg:px-20">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f]">The Al Fateen Standard.</h2>
                <div className="flex gap-1 text-[#800000]">
                  {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200">
                <div className="grid grid-cols-3 p-4 border-b border-gray-100 bg-gray-50/50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <div className="col-span-1">Feature</div>
                  <div className="col-span-1 text-center">Others</div>
                  <div className="col-span-1 text-center text-[#800000]">Al Fateen</div>
                </div>
                
                {[
                  { label: "Chemicals", bad: "Harsh", good: "Organic" },
                  { label: "Vetting", bad: "None", good: "Bg Checked" },
                  { label: "Equipment", bad: "Basic", good: "Industrial" },
                  { label: "Insurance", bad: "None", good: "Full" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 p-4 border-b border-gray-100 last:border-0 items-center">
                    <div className="font-semibold text-xs md:text-sm text-gray-900">{row.label}</div>
                    <div className="text-center text-gray-400 text-xs">{row.bad}</div>
                    <div className="text-center font-bold text-[#1d1d1f] text-xs flex items-center justify-center gap-1.5">
                      {row.good} <CheckCircle2 size={14} className="text-[#800000]" />
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </section>

        {/* 4. FAQs (Compact) */}
        <div className="px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold mb-2 text-[#1d1d1f]">Questions?</h2>
                <button onClick={() => openBooking("General Query")} className="text-[#800000] text-sm font-bold hover:underline">
                  Contact Support &rarr;
                </button>
              </div>
              <div className="md:col-span-8">
                {faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
        </div>

      </main>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-[#1d1d1f] text-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="text-white" size={16} />
              </button>

              {/* Sidebar */}
              <div className="hidden md:flex md:w-1/3 p-8 bg-[#800000] relative flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Request Callback</h3>
                  <p className="text-red-100/80 text-sm">
                    Plan: <span className="text-white font-bold">{selectedPlan}</span>
                  </p>
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-red-100">
                      <Phone size={18} /> <span className="text-sm">+971 52 832 6933</span>
                    </div>
                </div>
              </div>

              {/* Form */}
              <div className="w-full md:w-2/3 p-8 bg-[#1d1d1f] flex items-center overflow-y-auto">
                {formStatus === "success" ? (
                    <div className="w-full text-center space-y-4">
                        <CheckCircle2 size={48} className="mx-auto text-green-500" />
                        <h3 className="text-2xl font-bold">Received</h3>
                        <p className="text-gray-400">We will call you shortly.</p>
                        <button onClick={() => setIsModalOpen(false)} className="text-[#800000] font-bold bg-white px-6 py-2 rounded-lg">Close</button>
                    </div>
                ) : (
                    <form onSubmit={handleModalSubmit} className="space-y-4 w-full">
                    {/* Mobile Only Header */}
                    <div className="md:hidden mb-4">
                       <h3 className="text-xl font-bold">Request: {selectedPlan}</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Name</label>
                            <input required name="name" type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#800000] outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Phone</label>
                            <input required name="phone" type="tel" placeholder="050..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#800000] outline-none" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Service</label>
                        <select name="service" defaultValue={selectedPlan} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#800000] outline-none">
                            <option className="bg-[#1d1d1f] text-gray-400" value={selectedPlan}>{selectedPlan}</option>
                            <option className="bg-[#1d1d1f]" value="Other">Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Details</label>
                        <textarea name="message" rows={2} placeholder="Optional details..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#800000] outline-none resize-none"></textarea>
                    </div>
                    <button disabled={formStatus === "submitting"} type="submit" className="w-full bg-white text-black hover:bg-gray-200 font-bold uppercase text-xs tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 mt-2">
                        {formStatus === "submitting" ? <Loader2 className="animate-spin" /> : <>Send Request <ArrowRight size={16} /></>}
                    </button>
                    </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}