import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import { RiArrowDownLine } from 'react-icons/ri';

export const Hero = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('booking-widget-anchor');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Background Image with Parallax Zoom */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
          alt="Aaranya Crest Resort & Spa Grounds"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark-overlay z-[1]" />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center gap-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs tracking-luxury font-poppins text-secondary uppercase font-semibold"
        >
          Western Ghats, Lonavala
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl font-light font-playfair tracking-wide leading-tight"
        >
          Where Nature <br />
          <span className="font-editorial text-secondary italic">Meets Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm font-light text-white text-opacity-80 max-w-xl font-poppins leading-relaxed"
        >
          Escape to a mountain sanctuary designed for total rejuvenation, where architectural purity meets Lonavala's raw forest beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 flex gap-4"
        >
          <Button to="/rooms" variant="secondary">
            Explore Suites
          </Button>
          <Button to="/booking" variant="whiteOutline">
            Book Stay
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1.4 }}
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2 cursor-pointer focus:outline-none hover:text-secondary hover:opacity-100 transition-colors"
      >
        <span className="text-[9px] uppercase tracking-luxury font-poppins font-medium">Scroll Down</span>
        <RiArrowDownLine size={16} />
      </motion.button>
    </section>
  );
};

export default Hero;
