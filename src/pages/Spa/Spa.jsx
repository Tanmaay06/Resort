import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { spaPhilosophy, spaTreatments, spaPackages } from '../../data/spa';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import Button from '../../components/common/Button/Button';
import { RiCalendarEventLine, RiTimeLine, RiUserLine } from 'react-icons/ri';

export const Spa = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    treatment: 'aaranya-signature-massage',
    date: '',
    time: '14:00',
    guests: '1',
    notes: ''
  });

  const categories = ['All', 'Massages', 'Facials', 'Holistic Therapies', 'Body Scrubs & Wraps'];

  const filteredTreatments = activeCategory === 'All'
    ? spaTreatments
    : spaTreatments.filter(t => t.category === activeCategory);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden pt-20">
      {/* 1. Sub-Hero Header */}
      <section className="relative h-[45vh] flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 w-full h-full opacity-65">
          <img
            src="/images/spa-hero.jpg"
            alt="Spa Treatment Room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">Wellness Sanctuary</span>
          <h1 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight">
            Spa & Holistic Healing
          </h1>
        </div>
      </section>

      {/* 2. Overview & Philosophy */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="editorial-sub tracking-luxury uppercase text-xs font-medium">Wellness Philosophy</span>
              <h2 className="text-2xl sm:text-4xl font-light font-playfair text-charcoal">
                A Journey to Inner Quietude
              </h2>
              <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
                {spaPhilosophy.overview}
              </p>
              <blockquote className="border-l-2 border-secondary pl-4 py-1 text-sm sm:text-base font-editorial italic text-primary">
                "{spaPhilosophy.quote}"
              </blockquote>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden hover-zoom-img shadow-md bg-primary-dark">
                <img src={spaPhilosophy.images[0]} alt="Spa therapy detail" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden hover-zoom-img shadow-md bg-primary-dark mt-8">
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" alt="Zen elements" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Treatment Menu Catalog */}
      <section id="treatments" className="py-24 bg-bgLight">
        <Container>
          <SectionTitle
            title="Sanctuary Rituals & Therapies"
            subtitle="Treatments Menu"
            align="center"
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-poppins text-[10px] tracking-luxury uppercase font-medium px-5 py-2.5 border transition-all duration-500 ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary'
                    : 'bg-transparent text-charcoal text-opacity-65 border-primary border-opacity-10 hover:border-secondary hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredTreatments.map((tr) => (
              <div
                key={tr.id}
                className="bg-white border border-primary border-opacity-5 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-500"
              >
                <div>
                  <div className="flex justify-between items-baseline border-b border-primary border-opacity-5 pb-3 mb-4">
                    <h3 className="text-base sm:text-lg font-light font-playfair text-charcoal tracking-wide pr-4">
                      {tr.name}
                    </h3>
                    <span className="text-accent font-editorial italic text-xs shrink-0">{tr.duration} / ₹{tr.price.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-xs text-charcoal text-opacity-65 leading-relaxed font-poppins mb-6">
                    {tr.description}
                  </p>
                </div>
                
                {/* Benefits */}
                <div className="mt-auto">
                  <span className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-40 font-semibold block mb-2">Therapeutic Benefits</span>
                  <ul className="flex flex-col gap-1.5">
                    {tr.benefits.map((b, i) => (
                      <li key={i} className="text-[10px] text-charcoal text-opacity-80 flex items-start gap-2">
                        <span className="text-secondary select-none font-editorial text-sm leading-none">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Wellness Packages */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            title="Complete Wellness Journeys"
            subtitle="Curated Programs"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {spaPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#FAF7F2] border border-primary border-opacity-5 p-8 sm:p-10 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-baseline border-b border-primary border-opacity-5 pb-4 mb-5">
                    <h3 className="text-lg sm:text-xl font-light font-playfair text-primary tracking-wide">
                      {pkg.name}
                    </h3>
                    <span className="text-accent font-editorial italic text-sm shrink-0 pl-4">{pkg.duration} / ₹{pkg.price.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins mb-6">
                    {pkg.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-40 font-semibold font-poppins">Program Inclusions</span>
                    <ul className="flex flex-col gap-2">
                      {pkg.treatments.map((t, idx) => (
                        <li key={idx} className="text-xs text-charcoal text-opacity-80 flex items-center gap-3 font-poppins">
                          <span className="text-secondary select-none font-editorial italic text-base leading-none">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Spa Reservation Form */}
      <section className="py-24 bg-[#FAF7F2]">
        <Container>
          <div className="max-w-xl mx-auto bg-white border border-primary border-opacity-5 p-8 sm:p-10 shadow-lg text-charcoal">
            <h2 className="font-playfair text-2xl font-light text-center tracking-wide mb-2 text-primary">Reserve Treatment</h2>
            <p className="text-xs text-charcoal text-opacity-65 text-center font-poppins max-w-sm mx-auto mb-8">
              Aaranya Crest therapies are custom-made based on skin and energy analysis. Request your appointment slots below.
            </p>

            {bookingSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col gap-4"
              >
                <h4 className="font-playfair text-xl text-primary font-medium">Request Submitted</h4>
                <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins">
                  Thank you. Your request for <strong>{spaTreatments.find(t => t.id === formData.treatment)?.name || spaPackages.find(p => p.id === formData.treatment)?.name || 'Therapy'}</strong> for {formData.guests} guest(s) on {formData.date} at {formData.time} has been registered. Our wellness concierge will contact you within 12 hours.
                </p>
                <Button onClick={() => setBookingSubmitted(false)} variant="outline" className="mt-4 !py-3">
                  Book Another Appointment
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4">
                {/* Select Treatment */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Therapy or Program</label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className="bg-bgLight border border-primary border-opacity-5 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary cursor-pointer font-medium text-charcoal"
                  >
                    <optgroup label="Ritual Massages">
                      <option value="aaranya-signature-massage">Aaranya Signature Massage (90 min / ₹6,500)</option>
                    </optgroup>
                    <optgroup label="Signature Facials">
                      <option value="deep-forest-detox-facial">Deep Forest Detox Facial (75 min / ₹4,500)</option>
                    </optgroup>
                    <optgroup label="Holistic & Body">
                      <option value="himalayan-sound-bath">Himalayan Sound Bath (60 min / ₹3,500)</option>
                      <option value="detoxifying-scrub-wrap">Coffee & Sea Salt Wrap (90 min / ₹5,500)</option>
                    </optgroup>
                    <optgroup label="Wellness Packages">
                      <option value="forest-renewal-package">Forest Renewal Sanctuary (3.5 hr / ₹15,000)</option>
                      <option value="prana-mindfulness-retreat">Prana Mindfulness Retreat (3 hr / ₹12,000)</option>
                    </optgroup>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium flex items-center gap-1">
                      <RiCalendarEventLine size={12} />
                      <span>Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="bg-bgLight border border-primary border-opacity-5 p-2 text-xs font-poppins focus:outline-none focus:border-secondary"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium flex items-center gap-1">
                      <RiTimeLine size={12} />
                      <span>Time</span>
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="bg-bgLight border border-primary border-opacity-5 p-2 text-xs font-poppins focus:outline-none focus:border-secondary"
                      required
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium flex items-center gap-1">
                    <RiUserLine size={12} />
                    <span>Guests</span>
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="bg-bgLight border border-primary border-opacity-5 p-2 text-xs font-poppins focus:outline-none focus:border-secondary cursor-pointer"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests (Couples room)</option>
                  </select>
                </div>

                {/* Contact info */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Sir/Madame"
                    className="bg-bgLight border border-primary border-opacity-5 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary"
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@domain.com"
                    className="bg-bgLight border border-primary border-opacity-5 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary"
                    required
                  />
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Special Request / Therapist preference</label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Male/Female therapist, focused muscle zones, injuries..."
                    className="bg-bgLight border border-primary border-opacity-5 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white border border-primary hover:bg-transparent hover:text-primary uppercase text-[9px] tracking-luxury py-4 px-4 font-semibold transition-all duration-500 font-poppins mt-2"
                >
                  Request Appointment Slot
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Spa;
