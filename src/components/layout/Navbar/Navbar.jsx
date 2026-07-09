import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { RiMenuLine } from 'react-icons/ri';
import MobileMenu from '../MobileMenu/MobileMenu';
import Button from '../../common/Button/Button';

export const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isScrolled = scrollPosition > 50;
  
  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Rooms & Suites', path: '/rooms' },
    { label: 'Dining', path: '/dining' },
    { label: 'Spa', path: '/spa' },
    { label: 'Activities', path: '/activities' },
    { label: 'Offers', path: '/offers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-700 ${
          isScrolled
            ? 'glass-nav-scrolled py-3 text-white'
            : 'py-6 text-white'
        }`}
        style={{
          background: isScrolled ? undefined : 'linear-gradient(to bottom, rgba(7, 46, 58, 0.4) 0%, transparent 100%)',
          borderBottom: isScrolled ? undefined : '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-base sm:text-lg font-light tracking-luxury font-playfair hover:text-secondary transition-colors"
          >
            AARANYA CREST
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`font-poppins text-[10px] tracking-luxury uppercase font-medium hover:text-secondary transition-colors py-1 relative ${
                    isActive ? 'text-secondary font-semibold' : 'text-white text-opacity-80'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Button
              to="/booking"
              variant={isScrolled ? 'secondary' : 'whiteOutline'}
              className="hidden sm:inline-flex !py-2.5 !px-5 text-[9px] tracking-widest"
            >
              Reserve
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white hover:text-secondary transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <RiMenuLine size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
