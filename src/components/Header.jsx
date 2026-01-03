"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import "../styles/Header.css";

const navLinks = [
  { name: "Home", href: "/#carousel" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Us", href: "/#why-choose-us" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Pricing", href: "/Pricing" }
];

function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/"; // Check if we are on Home Page

  // --- STATE ---
  const [theme, setTheme] = useState("dark"); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- LOCK SCROLL (Mobile Menu) ---
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMobileMenuOpen]);

  // --- COLOR CHANGE LOGIC ---
  // Runs on ALL pages to detect 'data-header-theme' attributes
  useEffect(() => {
    const sections = document.querySelectorAll("[data-header-theme]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTheme(entry.target.getAttribute("data-header-theme"));
        }
      });
    }, { root: null, rootMargin: "-10% 0px -90% 0px", threshold: 0 });
    
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]); // Re-run when page changes

  // =========================================================
  //  POSITIONING LOGIC
  // =========================================================
  // 1. Home Page: "!fixed" (Sticks to top as you scroll)
  // 2. Other Pages: "!absolute" (Sits at top, Transparent, Scrolls away)
  const positionClass = isHomePage ? "!fixed" : "!absolute";

  const containerClasses = `${positionClass} top-0 left-0 w-full bg-transparent z-[1001]`;

  // Color Logic
  // Works on all pages. If theme is 'dark', text is white.
  const isThemeDark = (theme === "dark" || theme === "carousel");
  const headerTextColor = (isThemeDark && !isMobileMenuOpen) ? "text-white" : "text-[#1d1d1f]";
  const logoFilter = (isThemeDark && !isMobileMenuOpen) ? "brightness(0) invert(1)" : "none";
  const buttonColor = (isThemeDark && !isMobileMenuOpen) ? "text-white" : "text-[#1d1d1f]";

  return (
    <>
      {/* HEADER */}
      <header className={`header transition-colors duration-300 ${containerClasses}`}>
        <nav className={`w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ${headerTextColor}`}>
          
          {/* LOGO */}
          <Link 
            href="/" 
            className="block relative h-8 w-28 md:h-10 md:w-32 cursor-pointer z-[1002]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain object-left transition-all duration-300"
              style={{ filter: logoFilter }}
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em]">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group cursor-pointer">
                  <Link 
                    href={link.href} 
                    className="py-2 block opacity-90 hover:opacity-100 transition-colors duration-300 group-hover:text-[#800000]"
                  >
                    {link.name}
                  </Link>
                  
                  {/* Underline Animation */}
                  <span className={`absolute left-0 bottom-0 w-0 h-[1.5px] transition-all duration-300 ease-out group-hover:w-full group-hover:bg-[#800000] ${isThemeDark ? "bg-white" : "bg-[#800000]"}`}></span>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <Link
              href="/#contact-us"
              className={`text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all border ${
                isThemeDark 
                  ? "border-white text-white hover:bg-white hover:text-black" 
                  : "bg-[#1d1d1f] text-white border-transparent hover:bg-[#800000]"
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* MOBILE TOGGLE BUTTON */}
      {/* Home: Fixed. Others: Absolute (Scrolls away) */}
      <button
        className={`lg:hidden ${positionClass} right-5 top-5 z-[9999] p-1.5 rounded-full transition-colors duration-300 ${buttonColor}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" className={`transition-transform duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <line x1="3" y1="6" x2="21" y2="6" className={`transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <line x1="3" y1="18" x2="21" y2="18" className={`transition-transform duration-300 ${isMobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </svg>
      </button>

      {/* MOBILE MENU */}
      <div 
        className={`fixed inset-0 z-[5000] bg-white flex flex-col justify-center items-center transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-center w-full px-6">
            {navLinks.map((link, index) => (
                <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-semibold text-[#1d1d1f] tracking-tight hover:text-[#800000] transition-all duration-500 transform ${
                        isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${100 + (index * 50)}ms` }}
                >
                    {link.name}
                </Link>
            ))}

            <div className={`mt-6 transition-all duration-700 delay-300 transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                <Link
                  href="/#contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#1d1d1f] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[#800000] transition-colors"
                >
                  Contact Us
                </Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;