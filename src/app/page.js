// src/app/page.js
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import AboutSnippet from '../components/home/AboutSnippet';
import StatsSnippet from '../components/home/StatsSnippet';
import ServicesSnippet from '../components/home/ServicesSnippet';
import WhyChooseUsSnippet from '../components/home/WhyChooseUsSnippet';
import ProcessSnippet from '../components/home/ProcessSnippet';
import LeadershipSnippet from '../components/home/LeadershipSnippet';
import TestimonialsSnippet from '../components/home/TestimonialsSnippet';
import ContactSection from '../components/ContactSection';
import PremiumFooter from '../components/PremiumFooter.jsx';
import { MoveRight } from 'lucide-react'; // <--- Added missing import
import PricingPageContent from "./Pricing/PricingPageContent";

export default function Home() {
  return (
    <main className="relative">
      <Header />

      {/* 1. Carousel (Dark) */}
      <section id="carousel" data-header-theme="carousel" className="relative">
        <Carousel />
      </section>

      {/* 2. About (Light) */}
      <section id="about" data-header-theme="light" className="relative">
        <AboutSnippet />
      </section>

      {/* 3. Stats (Light) */}
      <section data-header-theme="light"> 
        <StatsSnippet /> 
      </section>
    
      {/* 4. Services (Light) */}
      <section id="services" data-header-theme="light" className="relative">
        <ServicesSnippet />
      </section>

      {/* 5. Process Roadmap (Light) */}
      <section id="process" data-header-theme="light" className="relative">
        <ProcessSnippet />
      </section>

      {/* 6. Why Choose Us (Dark) */}
      <section id="why-choose-us" data-header-theme="light" className="relative">
        <WhyChooseUsSnippet />
      </section>

      {/* 7. Leadership & Testimonials */}
      <LeadershipSnippet data-header-theme="dark" className="relative"/>
      <TestimonialsSnippet/>
      
      {/* 8. Contact */}
      <ContactSection/>

      {/* 9. PRICING TEASER (Placed BEFORE Footer) */}
      <section id="why-choose-us" data-header-theme="light" className=" relative py-24 bg-[#fafafa] text-center border-t border-gray-200">
        <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32"> {/* Replaced WideContainer */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6 text-[#1d1d1f]">Transparent Investment.</h2>
            <p className="text-gray-500 mb-8 text-lg">
              Professional cleaning starts from <strong className="text-[#1d1d1f]">AED 199</strong>. 
              <br />
              Pest defense starts from <strong className="text-[#1d1d1f]">AED 149</strong>.
            </p>
            <a 
              href="/Pricing"
              className="inline-flex items-center gap-2 text-[#800000] font-bold uppercase tracking-widest border-b-2 border-[#800000] pb-1 hover:text-black hover:border-black transition-all"
            >
              View Detailed Pricing <MoveRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 10. Footer (Last) */}
      <PremiumFooter/>
      
      
    </main>
  );
}