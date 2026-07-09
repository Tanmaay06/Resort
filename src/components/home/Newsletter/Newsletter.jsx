import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-primary-dark text-white overflow-hidden relative">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] border border-white rounded-full flex items-center justify-center">
          <div className="w-[450px] h-[450px] border border-white rounded-full flex items-center justify-center">
            <div className="w-[300px] h-[300px] border border-white rounded-full" />
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <span className="editorial-sub tracking-luxury uppercase text-xs sm:text-sm font-medium text-secondary">
            Join the Inner Circle
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight text-white">
            The Aaranya Crest Chronicle
          </h2>
          <p className="text-xs sm:text-sm text-white text-opacity-60 leading-relaxed font-inter max-w-lg">
            Subscribe to receive private announcements, seasonal packages, and curated itineraries compiled by our resort hosts. We respect your privacy and write only when inspired.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-secondary text-sm font-editorial italic pt-6"
            >
              Thank you for subscribing. Welcome to the Aaranya Crest Circle.
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="w-full mt-6 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border border-white border-opacity-15 py-4 px-6 text-xs text-white placeholder-white placeholder-opacity-40 font-poppins focus:outline-none focus:border-secondary transition-colors flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-secondary text-charcoal border border-secondary hover:bg-transparent hover:text-secondary uppercase text-[10px] tracking-luxury py-4 px-8 font-semibold transition-all duration-500 font-poppins shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
