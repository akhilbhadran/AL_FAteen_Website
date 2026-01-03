'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSnippet() {
  const [reviews, setReviews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // --- LOAD REVIEWS ---
  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch (error) { 
        console.error("Failed to load reviews", error); 
      }
    }
    loadReviews();
  }, []);

  // --- AUTO-ROTATE ---
  useEffect(() => {
    if (!isAutoPlaying || isFormOpen || reviews.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [isAutoPlaying, isFormOpen, reviews.length]);

  // --- SAVE REVIEW ---
  const handleAddReview = async (newReviewData) => {
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReviewData),
      });
      return response.ok;
    } catch (error) {
      console.error("Submission failed:", error);
      return false;
    }
  };

  // Animation Variants
  const slideVariants = {
    enter: { opacity: 0, y: 20, filter: "blur(4px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(4px)" },
  };

  // --- LOADING STATE ---
  if (reviews.length === 0) return (
    <section 
      id="testimonials"
      data-header-theme="light" // Forces Header to be Black Text
      className="py-24 bg-white text-center"
    >
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-4 bg-gray-100 rounded w-32"></div>
        <div className="h-8 bg-gray-100 rounded w-64"></div>
      </div>
      <button onClick={() => setIsFormOpen(true)} className="mt-6 text-red-600 font-bold text-sm hover:underline">
        Be the first to share your story
      </button>
      <AnimatePresence>
        {isFormOpen && <ReviewModal onClose={() => setIsFormOpen(false)} onSubmit={handleAddReview} />}
      </AnimatePresence>
    </section>
  );

  return (
    // OPTIMIZED: py-82 -> py-16 md:py-24
    <section 
      id="testimonials" // Added ID for navigation link
      data-header-theme="light" // ADDED: Forces Header to be Black Text (Background is White)
      className="relative py-16 md:py-24 bg-white text-gray-900 overflow-hidden"
    >
      
      {/* Background Decor - Scaled Down */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] text-gray-50 font-serif opacity-60 pointer-events-none select-none leading-none z-0">"</div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header - Scaled Down */}
        <div className="text-center mb-10 md:mb-12">
           <h4 className="text-red-700 font-bold uppercase tracking-[0.2em] mb-3 text-xs md:text-sm">Client Stories</h4>
           {/* OPTIMIZED: text-7xl -> text-5xl */}
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900">What Our Clients Say</h2>
        </div>

        {/* --- CAROUSEL STAGE --- */}
        {/* OPTIMIZED: Reduced height to remove empty space (h-500 -> h-400) */}
        <div className="relative w-full mx-auto h-[450px] md:h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {reviews[activeIndex] && (
            <motion.div
              key={reviews[activeIndex]._id || activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full px-4 text-center flex flex-col items-center"
            >
               {/* --- IMAGE DISPLAY --- */}
               {/* OPTIMIZED: Reduced margins and size slightly */}
               <div className="mb-6 flex justify-center">
                   {reviews[activeIndex].image ? (
                     <div className="relative w-16 h-16 md:w-20 md:h-20">
                        <div className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-20 scale-110"></div>
                        <img 
                          src={reviews[activeIndex].image} 
                          alt={reviews[activeIndex].name} 
                          className="relative w-full h-full rounded-full object-cover border-2 border-white shadow-lg"
                        />
                     </div>
                   ) : (
                     <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 border-2 border-white shadow-md flex items-center justify-center text-2xl font-bold text-gray-300">
                        {reviews[activeIndex].name.charAt(0)}
                     </div>
                   )}
               </div>

              {/* Stars Display */}
              <div className="flex justify-center gap-1 mb-6 text-yellow-400 text-lg md:text-xl">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < (reviews[activeIndex].stars || 5) ? "text-yellow-400" : "text-gray-200"}>★</span>
                ))}
              </div>

              {/* Quote */}
              {/* OPTIMIZED: text-5xl (Too big) -> text-3xl */}
              <div className="h-[140px] flex items-center justify-center mb-6 w-full max-w-3xl">
                 <p className="text-lg md:text-3xl font-light italic text-gray-900 leading-relaxed font-serif line-clamp-4">
                   "{reviews[activeIndex].text}"
                 </p>
              </div>
              
              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <div className="h-px w-6 bg-red-600 mb-2"></div>
                <h5 className="text-base md:text-lg font-bold text-gray-900">{reviews[activeIndex].name}</h5>
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-400">
                   {reviews[activeIndex].role || reviews[activeIndex].location}
                </span>
              </div>

            </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- CONTROLS --- */}
        <div className="flex flex-col items-center gap-6 mt-0">
           {/* Dots */}
           <div className="flex justify-center gap-2">
              {reviews.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => { setActiveIndex(idx); setIsAutoPlaying(false); }}
                  className={`h-1 rounded-full transition-all duration-500 ease-out ${
                    idx === activeIndex ? "w-8 bg-red-600" : "w-2 bg-gray-200 hover:bg-red-200"
                  }`}
                />
              ))}
           </div>
           
           {/* Button */}
           <button 
            onClick={() => { setIsFormOpen(true); setIsAutoPlaying(false); }} 
            className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-bold text-xs md:text-sm tracking-wide hover:bg-red-700 transition-colors shadow-lg"
           >
             Share Your Experience
           </button>
        </div>
      </div>

      <AnimatePresence>
        {isFormOpen && <ReviewModal onClose={() => { setIsFormOpen(false); setIsAutoPlaying(true); }} onSubmit={handleAddReview} />}
      </AnimatePresence>

    </section>
  );
}

// --- MODAL COMPONENT (Minor Cleanup) ---
function ReviewModal({ onClose, onSubmit }) {
  const [status, setStatus] = useState("idle"); 
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        if (file.size > 2 * 1024 * 1024) {
            alert("File is too large! Please upload an image under 2MB.");
            return;
        }
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const fullName = `${formData.get("firstName")} ${formData.get("lastName")}`.trim();

    let imageBase64 = "";
    if (selectedFile) {
        try { imageBase64 = await convertToBase64(selectedFile); } catch (err) { console.error(err); }
    }

    const data = {
      name: fullName,
      location: formData.get("location"),
      role: formData.get("location"), 
      text: formData.get("text"),
      stars: rating,
      image: imageBase64, 
    };

    const success = await onSubmit(data);
    
    if (success) {
        setStatus("success");
        setTimeout(onClose, 3000);
    } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative bg-white w-full max-w-md p-6 md:p-8 rounded-2xl shadow-2xl overflow-hidden my-8">
        {status !== "success" && <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-gray-50 text-gray-400 hover:text-red-600 transition-colors">✕</button>}
        
        {status === "success" ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-500 text-sm">Your review has been submitted for approval.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-center mb-2">Share Your Experience</h3>
            <div className="flex flex-col items-center">
                 <label className="group relative cursor-pointer">
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    <div className={`w-20 h-20 rounded-full border-2 border-dashed flex items-center justify-center overflow-hidden transition-all ${preview ? 'border-red-600' : 'border-gray-300 group-hover:border-red-400'}`}>
                        {preview ? <img src={preview} alt="Preview" className="w-full h-full object-cover" /> : <div className="text-center text-gray-400 group-hover:text-red-500"><span className="text-xl">📷</span></div>}
                    </div>
                    {preview && <button type="button" onClick={(e) => { e.preventDefault(); setPreview(null); setSelectedFile(null); }} className="absolute bottom-0 right-0 bg-red-100 text-red-600 rounded-full p-1 hover:bg-red-200">✕</button>}
                 </label>
                 <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">Add Photo (Optional)</span>
            </div>
            <div className="flex flex-col items-center mb-2">
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} className="transition-transform hover:scale-110 focus:outline-none p-1">
                        <span className={`text-2xl transition-colors duration-200 ${star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                    </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <input name="firstName" required placeholder="First Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-red-600 transition-all text-sm" />
                <input name="lastName" required placeholder="Last Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-red-600 transition-all text-sm" />
            </div>
            <input name="location" placeholder="City / Country" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-red-600 transition-all text-sm" />
            <textarea name="text" required rows={3} placeholder="How was your experience?" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:border-red-600 resize-none transition-all text-sm" />
            <button disabled={status === "sending"} className="w-full bg-red-700 text-white font-bold py-3 rounded-lg hover:bg-red-800 transition-all shadow-lg mt-2 text-sm">
              {status === "sending" ? "Publishing..." : "Submit Review"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}