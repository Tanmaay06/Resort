import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary-dark text-white"
        >
          <div className="flex flex-col items-center">
            {/* Luxury Monogram Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 mb-8 border border-secondary border-opacity-40 flex items-center justify-center rounded-full rotate-[45deg]"
            >
              <div className="w-10 h-10 border border-secondary border-opacity-75 rounded-full flex items-center justify-center">
                <span className="text-secondary text-lg font-light tracking-widest font-playfair select-none -rotate-[45deg]">A</span>
              </div>
            </motion.div>

             {/* Letter Spacing Animation */}
            <motion.h1
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-base sm:text-lg tracking-luxury font-light uppercase pl-[0.2em] font-playfair"
            >
              AARANYA CREST
            </motion.h1>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xs uppercase tracking-luxury text-secondary mt-3 font-poppins"
            >
              Resort & Spa
            </motion.span>
          </div>

          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-[10px] text-white text-opacity-30 tracking-ultra uppercase font-poppins">
            <span>Where Nature Meets Luxury</span>
            <span>Aaranya Crest © 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
