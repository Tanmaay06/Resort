import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';

export const MobileMenu = ({ isOpen, onClose }) => {
  const menuLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Rooms & Suites', path: '/rooms' },
    { label: 'Dining', path: '/dining' },
    { label: 'Spa & Wellness', path: '/spa' },
    { label: 'Activities', path: '/activities' },
    { label: 'Exclusive Offers', path: '/offers' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black"
          />

          {/* Mobile Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[100] w-full max-w-sm bg-[#072E3A] text-white px-8 py-10 flex flex-col justify-between"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center">
              <span className="text-base font-light tracking-luxury font-playfair text-secondary">AARANYA CREST</span>
              <button onClick={onClose} className="text-white hover:text-secondary transition-colors focus:outline-none">
                <RiCloseLine size={28} />
              </button>
            </div>

            {/* Navigation Options */}
            <nav className="flex flex-col gap-5 my-auto">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className="font-playfair text-lg tracking-wide hover:text-secondary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Panel Actions */}
            <div className="flex flex-col gap-6 text-center">
              <Link
                to="/booking"
                onClick={onClose}
                className="bg-secondary text-charcoal py-4 tracking-luxury uppercase text-xs font-semibold hover:bg-white hover:text-primary-dark transition-colors"
              >
                Reserve Suite
              </Link>
              <div className="text-[9px] text-white text-opacity-40 tracking-luxury uppercase">
                T: +91 86570 42891 &nbsp;|&nbsp; E: reservations@aaranyacrest.in
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
