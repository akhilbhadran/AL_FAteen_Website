'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { submitContactForm } from "../app/actions/contact"; 

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState("idle"); 

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.target);
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setFormStatus("success");
      e.target.reset(); 
    } else {
      setFormStatus("error");
      alert("Something went wrong. Please try calling us directly.");
    }
  }

  return (
    // OPTIMIZED: py-32 lg:py-48 -> py-16 lg:py-24
    <section 
      id="contact-us" // UPDATED: Matches the Header Link
      data-header-theme="dark" // ADDED: Forces Header to be White Text
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#500707] to-[#2a0202] text-white overflow-hidden flex items-center" 
    >
      
      {/* --- BACKGROUND DEPTH --- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      {/* Scaled down blurs */}
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-red-600/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-black/40 rounded-full blur-[80px] pointer-events-none" />

      {/* OPTIMIZED: max-w-[1800px] -> max-w-7xl */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* OPTIMIZED: gap-32 -> gap-16 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT: INFO --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-4"
          >
            {/* Header Tag */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 w-12 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
              <span className="text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm drop-shadow-md">
                Get In Touch
              </span>
            </div>

            {/* Main Headline: text-9xl -> text-6xl */}
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-[1] drop-shadow-xl">
             Ready to Get <br/> 
              <span className="italic text-red-100">
                Started?
              </span>
            </h2>

            {/* Description: text-3xl -> text-lg */}
            <p className="text-lg md:text-xl text-red-50 font-light mb-10 max-w-md leading-relaxed">
              We provide structured, reliable service you can depend on. Contact us today for a consultation.
            </p>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Phone - OPTIMIZED: w-20 -> w-14 */}
              <a href="tel:+971501234567" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-red-900 group-hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-200 mb-0.5 group-hover:text-white transition-colors">Call Us Directly</h4>
                  <p className="text-white font-serif text-2xl md:text-3xl tracking-wide font-medium">+971 50 123 4567</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@alfateen.ae" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-red-900 group-hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-200 mb-0.5 group-hover:text-white transition-colors">Email Us</h4>
                  <p className="text-white font-serif text-xl md:text-2xl tracking-wide font-medium">info@alfateen.ae</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-red-900 group-hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-200 mb-0.5 group-hover:text-white transition-colors">Headquarters</h4>
                  <p className="text-white font-serif text-xl md:text-2xl tracking-wide font-medium">
                    Business Bay, Dubai
                  </p>
                </div>
              </div>
            </div>
          </motion.div>


          {/* --- RIGHT: FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // OPTIMIZED: p-16 -> p-8
            className="bg-[#2b0303] border border-red-400/30 p-8 md:p-10 rounded-[1.5rem] relative shadow-2xl shadow-black/60"
          >
             
             {formStatus === "success" ? (
               <div className="h-[450px] flex flex-col items-center justify-center text-center">
                 <motion.div 
                   initial={{ scale: 0 }} animate={{ scale: 1 }} 
                   className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#500707] mb-6 shadow-xl"
                 >
                   <CheckCircle size={40} />
                 </motion.div>
                 <h3 className="text-3xl font-serif text-white mb-2">Request Received</h3>
                 <p className="text-base text-red-100">Our team has been notified.<br/>We will call you shortly.</p>
                 <button 
                   onClick={() => setFormStatus("idle")}
                   className="mt-8 text-sm text-white font-bold hover:text-red-200 border-b border-white pb-0.5 transition-colors"
                 >
                   Send another message
                 </button>
               </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="space-y-5">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs uppercase tracking-widest text-red-100 font-bold ml-1">Full Name</label>
                      <input 
                        required 
                        name="name"
                        type="text" 
                        placeholder="e.g. John Doe" 
                        // OPTIMIZED: h-20 -> h-12, text-2xl -> text-base
                        className="w-full h-12 bg-[#1a0202] border border-red-900/50 text-white text-base px-5 focus:outline-none focus:border-white focus:bg-[#250303] transition-all rounded-lg placeholder:text-white/30"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs uppercase tracking-widest text-red-100 font-bold ml-1">Phone Number</label>
                      <input 
                        required 
                        name="phone"
                        type="tel" 
                        placeholder="e.g. +971 50..." 
                        className="w-full h-12 bg-[#1a0202] border border-red-900/50 text-white text-base px-5 focus:outline-none focus:border-white focus:bg-[#250303] transition-all rounded-lg placeholder:text-white/30"
                      />
                    </div>

                    {/* Service Selector */}
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs uppercase tracking-widest text-red-100 font-bold ml-1">Service Required</label>
                      <div className="relative">
                        <select 
                          name="service"
                          className="w-full h-12 bg-[#1a0202] border border-red-900/50 text-white text-base px-5 focus:outline-none focus:border-white focus:bg-[#250303] transition-all rounded-lg appearance-none cursor-pointer"
                        >
                          <option>Facility Management</option>
                          <option>Deep Cleaning</option>
                          <option>Pest Control</option>
                          <option>General Inquiry</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                          <ArrowRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs uppercase tracking-widest text-red-100 font-bold ml-1">Message Details</label>
                      <textarea 
                        required 
                        name="message"
                        rows={3} 
                        placeholder="Describe your requirements..." 
                        className="w-full bg-[#1a0202] border border-red-900/50 text-white text-base p-5 focus:outline-none focus:border-white focus:bg-[#250303] transition-all rounded-lg placeholder:text-white/30 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button - OPTIMIZED: h-24 -> h-14, text-2xl -> text-lg */}
                  <button 
                    disabled={formStatus === "submitting"}
                    type="submit" 
                    className="w-full h-14 bg-white hover:bg-neutral-200 text-[#500707] text-sm md:text-base font-bold uppercase tracking-widest transition-all rounded-lg flex items-center justify-center gap-3 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] hover:scale-[1.02] mt-2"
                  >
                    {formStatus === "submitting" ? (
                      <Loader2 className="animate-spin w-5 h-5 text-[#500707]" />
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-[10px] text-red-200/50">
                    Strictly confidential. We do not share your data.
                  </p>

                </form>
             )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}