import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine } from 'react-icons/ri';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden pt-20">
      {/* Sub-Hero Header */}
      <section className="relative h-[45vh] flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 w-full h-full opacity-65">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">Reach Out</span>
          <h1 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight">
            Connect With Us
          </h1>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Coordinates (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-10 text-charcoal">
              <div>
                <span className="editorial-sub tracking-luxury uppercase text-xs font-medium block mb-2">Coordinates</span>
                <h2 className="text-2xl sm:text-3xl font-light font-playfair text-primary">The Sanctuary Location</h2>
                <p className="text-xs text-charcoal text-opacity-65 leading-relaxed font-poppins mt-3 max-w-sm">
                  Nestled amidst the lush green hills and tranquil valleys of Lonavala, accessible via the Mumbai-Pune Expressway or private helipad arrivals.
                </p>
              </div>

              <div className="flex flex-col gap-6 text-xs font-poppins text-charcoal text-opacity-75">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-primary border-opacity-10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <RiMapPinLine size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-40 font-semibold block mb-0.5">Physical Address</span>
                    <span>Near Bhushi Valley Road, Old Mumbai–Pune Highway, Lonavala, Maharashtra – 410401, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-primary border-opacity-10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <RiPhoneLine size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-40 font-semibold block mb-0.5">Reservations / Reception / WhatsApp</span>
                    <span>+91 86570 42891 &nbsp;|&nbsp; +91 86570 42892 &nbsp;|&nbsp; +91 86570 42893</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-primary border-opacity-10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <RiMailLine size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-40 font-semibold block mb-0.5">Email Channels</span>
                    <span>reservations@aaranyacrest.in &nbsp;|&nbsp; support@aaranyacrest.in &nbsp;|&nbsp; events@aaranyacrest.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-primary border-opacity-10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <RiTimeLine size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-40 font-semibold block mb-0.5">Front Desk hours</span>
                    <span>24 Hours Daily &nbsp;•&nbsp; Dedicated Host Assignment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiries Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF7F2] border border-primary border-opacity-5 p-8 sm:p-10 shadow-sm text-charcoal">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col gap-4"
                >
                  <h3 className="font-playfair text-2xl text-primary font-light">Message Sent</h3>
                  <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins max-w-sm mx-auto">
                    Thank you. Your message regarding <strong>{formData.subject}</strong> has been dispatched. Our relations officer will reply to your registered email address shortly.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4 !py-3">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="font-playfair text-lg text-charcoal font-medium text-center tracking-widest uppercase">Inquiry Form</h3>
                  <p className="text-[11px] text-charcoal text-opacity-55 text-center font-poppins max-w-xs mx-auto mb-4">
                    Send a message directly to our guest relations team.
                  </p>

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Sir/Madame"
                      className="bg-white border border-primary border-opacity-10 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary text-charcoal"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@domain.com"
                      className="bg-white border border-primary border-opacity-10 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary text-charcoal"
                      required
                    />
                  </div>

                  {/* Subject type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Inquiry Type</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white border border-primary border-opacity-10 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary cursor-pointer font-medium text-charcoal"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="group-booking">Group Reservations & Weddings</option>
                      <option value="press">Press & Media Relations</option>
                      <option value="career">Careers & Internships</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Your Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Specify your inquiry detailed details here..."
                      className="bg-white border border-primary border-opacity-10 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary resize-none text-charcoal"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white border border-primary hover:bg-transparent hover:text-primary uppercase text-[9px] tracking-luxury py-4 px-4 font-semibold transition-all duration-500 font-poppins mt-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </Container>
      </section>

      {/* 4. Elegant visual map placeholder */}
      <section className="h-[40vh] w-full bg-primary bg-opacity-5 relative overflow-hidden border-t border-primary border-opacity-5">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80"
          alt="Lonavala map visual"
          className="w-full h-full object-cover opacity-35 grayscale"
        />
        <div className="absolute inset-0 bg-[#0E2319] bg-opacity-30 flex items-center justify-center text-center">
          <div className="p-8 bg-white border border-primary border-opacity-5 shadow-2xl max-w-sm text-charcoal rounded-xl">
            <h3 className="font-playfair text-lg font-light tracking-wide text-primary">Interactive Map</h3>
            <p className="text-[11px] font-inter text-charcoal text-opacity-65 leading-relaxed mt-2">
              18.7548° N &nbsp;•&nbsp; 73.4068° E <br />
              Nestled near Bhushi Valley Road in Lonavala, Maharashtra, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
