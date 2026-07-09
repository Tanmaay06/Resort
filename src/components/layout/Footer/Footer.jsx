import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiYoutubeLine,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTwitterXLine
} from 'react-icons/ri';
import Container from '../../common/Container/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'About Story', path: '/about' },
    { label: 'Suites & Villas', path: '/rooms' },
    { label: 'Fine Gastronomy', path: '/dining' },
    { label: 'Spa & Wellness', path: '/spa' },
    { label: 'Activities Roster', path: '/activities' },
    { label: 'Exclusive Offers', path: '/offers' }
  ];

  return (
    <footer className="bg-[#0E2319] text-white pt-20 pb-8 border-t border-secondary border-opacity-15 font-inter">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white border-opacity-5">
          
          {/* Brand Philosophy */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-light tracking-luxury font-playfair text-secondary">AARANYA CREST</h3>
            <p className="text-white text-opacity-60 text-xs leading-relaxed max-w-xs font-inter">
              Nestled amidst the lush hills and tranquil valleys of Lonavala, Aaranya Crest Resort & Spa offers a luxurious mountain escape, blending modern architectural elegance with the beauty of nature.
            </p>
            <div className="flex items-center gap-4 text-white text-opacity-55">
              <a href="https://instagram.com/aaranyacrest" target="_blank" rel="noreferrer" className="hover:text-secondary hover:scale-110 transition-all duration-300">
                <RiInstagramLine size={18} />
              </a>
              <a href="https://facebook.com/AaranyaCrest" target="_blank" rel="noreferrer" className="hover:text-secondary hover:scale-110 transition-all duration-300">
                <RiFacebookCircleLine size={18} />
              </a>
              <a href="https://twitter.com/aaranyacrest" target="_blank" rel="noreferrer" className="hover:text-secondary hover:scale-110 transition-all duration-300">
                <RiTwitterXLine size={18} />
              </a>
              <a href="https://youtube.com/AaranyaCrest" target="_blank" rel="noreferrer" className="hover:text-secondary hover:scale-110 transition-all duration-300">
                <RiYoutubeLine size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase tracking-luxury text-secondary font-semibold font-inter">Explore Links</h4>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-white text-opacity-60 text-xs hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block font-inter"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase tracking-luxury text-secondary font-semibold font-inter">Contact Info</h4>
            <div className="flex flex-col gap-4 text-xs text-white text-opacity-60 font-inter">
              <div className="flex items-start gap-3">
                <RiMapPinLine size={16} className="text-secondary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Near Bhushi Valley Road, Old Mumbai–Pune Highway, Lonavala, Maharashtra – 410401, India</span>
              </div>
              <div className="flex items-center gap-3">
                <RiPhoneLine size={16} className="text-secondary shrink-0" />
                <span>+91 86570 42891</span>
              </div>
              <div className="flex items-center gap-3">
                <RiMailLine size={16} className="text-secondary shrink-0" />
                <span>reservations@aaranyacrest.in</span>
              </div>
            </div>
          </div>

          {/* Newsletter subscription UI */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase tracking-luxury text-secondary font-semibold font-inter">Newsletter</h4>
            <p className="text-white text-opacity-60 text-xs leading-relaxed font-inter">
              Subscribe to receive seasonal updates, wellness package insights, and exclusive retreat news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 py-3 px-4 text-xs font-inter text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors rounded-lg"
                required
              />
              <button
                type="submit"
                className="w-full bg-secondary text-charcoal py-3 px-4 text-xs uppercase tracking-luxury font-semibold hover:bg-white hover:text-[#0E2319] transition-all duration-300 rounded-lg cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Base */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] text-white text-opacity-40 tracking-luxury uppercase font-inter gap-4">
          <div>
            &copy; {currentYear} Aaranya Crest Resort & Spa. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
