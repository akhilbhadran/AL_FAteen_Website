'use client';

import Link from "next/link";
import { Instagram, Linkedin, Facebook, Twitter, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { Playfair_Display, Manrope } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  return (
    // UPDATED WRAPPER: Changed bg-[#500707] to bg-[#fafafa] 
    // This matches your "Transparent Investment" section so the corners are invisible.
    <div className="bg-[#fafafa] pt-0 relative z-20">
        
      {/* FOOTER CARD */}
      <footer className={`relative bg-white text-slate-900 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden pt-20 md:pt-28 pb-0 shadow-[0_-10px_60px_rgba(0,0,0,0.08)] ${manrope.className}`}>
        
        {/* --- BACKGROUND ACCENTS --- */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* --- TOP SECTION: HEADLINE & NEWSLETTER --- */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24 border-b border-slate-100 pb-16">
            
            {/* 1. Headline */}
            <div className="max-w-3xl">
              <h3 className={`${playfair.className} text-4xl md:text-6xl leading-[1.1] mb-6 text-slate-900`}>
                Professional care for <br/>
                <span className="text-red-900 italic font-medium">your home & business.</span>
              </h3>
              <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
                Reliable facility management, cleaning, and maintenance services, delivered with military-grade precision.
              </p>
            </div>

            {/* 2. NEWSLETTER */}
            <div className="w-full max-w-md">
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 block">Stay Updated</span>
               <div className="flex items-center gap-4 group w-full">
                  <div className="relative w-full">
                     <input 
                       type="email" 
                       placeholder="Enter your email address" 
                       className="w-full bg-slate-50 border-b border-slate-300 py-4 px-0 text-lg outline-none focus:border-red-800 focus:bg-white transition-all placeholder:text-slate-400"
                     />
                  </div>
                  <button className="w-14 h-14 bg-red-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-red-900/20">
                     <ArrowRight size={24} />
                  </button>
               </div>
            </div>

          </div>

          {/* --- MIDDLE SECTION: LINKS GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-32">
            
            {/* 1. Brand Info (Span 4) */}
            <div className="md:col-span-4 space-y-8 pr-8">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-800 to-red-950 rounded-lg shadow-lg"></div>
                  <span className="font-bold text-2xl tracking-wide text-slate-900">AL FATEEN</span>
               </div>
               
               {/* Social Icons */}
               <div className="flex gap-4">
                  {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-red-900 hover:text-white hover:border-red-900 transition-all duration-300">
                      <Icon size={18} />
                    </a>
                  ))}
               </div>
            </div>

            {/* 2. Links: Company (Span 2) */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-slate-900">Company</h4>
              <ul className="space-y-4 text-slate-600 font-medium">
                {['About Us', 'Our Team', 'Careers', 'Latest News'].map(item => (
                  <li key={item}>
                    <Link href="#" className="hover:text-red-800 hover:translate-x-2 transition-all inline-block">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Links: Services (Span 3) */}
            <div className="md:col-span-3">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-slate-900">Services</h4>
              <ul className="space-y-4 text-slate-600 font-medium">
                {['Facility Management', 'Pest Control', 'Deep Cleaning', 'Maintenance'].map(item => (
                  <li key={item}>
                    <Link href="#" className="hover:text-red-800 hover:translate-x-2 transition-all inline-block">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Connect (Span 3) */}
            <div className="md:col-span-3">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-slate-900">Connect</h4>
              <ul className="space-y-6 text-slate-600 font-medium">
                <li className="flex gap-4 items-start group">
                    <MapPin className="text-red-800 shrink-0 mt-1" size={20} /> 
                    <span className="group-hover:text-red-800 transition-colors">Business Bay, Dubai, United Arab Emirates</span>
                </li>
                <li className="flex gap-4 items-center group">
                    <Phone className="text-red-800 shrink-0" size={20} /> 
                    <span className="group-hover:text-red-800 transition-colors">+971 50 123 4567</span>
                </li>
                <li className="flex gap-4 items-center group">
                    <Mail className="text-red-800 shrink-0" size={20} /> 
                    <span className="group-hover:text-red-800 transition-colors">info@alfateen.ae</span>
                </li>
              </ul>
            </div>

          </div>

          {/* --- BOTTOM: GIANT BRAND SHADE --- */}
          <div className="border-t border-slate-100 pt-10 relative overflow-hidden">
            
            {/* Legal Links Row */}
            <div className="flex flex-col md:flex-row justify-between text-sm text-slate-500 mb-16 font-medium">
              <p>&copy; {currentYear} Al Fateen Services LLC.</p>
              <div className="flex gap-8 mt-4 md:mt-0">
                <Link href="#" className="hover:text-red-800 transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-red-800 transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-red-800 transition-colors">Sitemap</Link>
              </div>
            </div>

            {/* THE GIANT AL FATEEN SHADE */}
            <h1 className={`${playfair.className} text-[13.5vw] leading-[0.75] font-black text-center tracking-tighter select-none`}>
               <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-red-50/80">
                 AL FATEEN
               </span>
            </h1>
          </div>

        </div>
      </footer>
    </div>
  );
}