import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { activities } from '../../data/activities';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import Button from '../../components/common/Button/Button';
import { RiCalendarEventLine, RiUserLine, RiTimeLine } from 'react-icons/ri';

export const Activities = () => {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    activity: 'monsoon-waterfall',
    date: '',
    guests: '2',
    notes: ''
  });

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
            src="https://images.unsplash.com/photo-1505080856163-26759885867d?auto=format&fit=crop&w=1920&q=80"
            alt="Activities Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">Archipelago Discovery</span>
          <h1 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight">
            Excursions & Experiences
          </h1>
        </div>
      </section>

      {/* 2. Roster Details */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col gap-24">
            {activities.map((act, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  id={act.id}
                  key={act.id}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Photo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden hover-zoom-img shadow-xl border border-primary border-opacity-5 bg-primary-dark"
                  >
                    <img
                      src={act.image}
                      alt={act.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 flex flex-col gap-5 text-charcoal"
                  >
                    <span className="font-editorial text-accent text-xs sm:text-sm italic tracking-wider">
                      {act.difficulty} Intensity &nbsp;•&nbsp; {act.duration}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light font-playfair tracking-wide">
                      {act.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
                      {act.description}
                    </p>

                    {/* Inclusions */}
                    <div className="flex flex-col gap-3 pt-4 border-t border-primary border-opacity-5">
                      <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-40 font-semibold font-poppins">Inclusions</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-charcoal text-opacity-75 text-[11px]">
                        {act.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-secondary select-none font-editorial italic text-base leading-none">•</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-primary border-opacity-5 pt-4 text-[10px] text-charcoal text-opacity-50 uppercase tracking-widest font-poppins">
                      <strong>Rates From:</strong> ₹{act.price.toLocaleString('en-IN')} / Experience
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Excursion Booking Form */}
      <section className="py-24 bg-[#FAF7F2]">
        <Container>
          <div className="max-w-xl mx-auto bg-white border border-primary border-opacity-5 p-8 sm:p-10 shadow-lg text-charcoal">
            <h2 className="font-playfair text-2xl font-light text-center tracking-wide mb-2 text-primary">Arrange Excursion</h2>
            <p className="text-xs text-charcoal text-opacity-65 text-center font-poppins max-w-sm mx-auto mb-8">
              Excursions are arranged as private charters or small groups. Tell us your date and guest preferences.
            </p>

            {bookingSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col gap-4"
              >
                <h4 className="font-playfair text-xl text-primary font-medium">Excursion Registered</h4>
                <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins">
                  Thank you. Your inquiry for the <strong>{activities.find(a => a.id === formData.activity)?.name}</strong> excursion for {formData.guests} guests on {formData.date} has been registered. A marine host will contact you shortly to configure.
                </p>
                <Button onClick={() => setBookingSubmitted(false)} variant="outline" className="mt-4 !py-3">
                  Book Another Excursion
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4">
                {/* Select Activity */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Select Experience</label>
                  <select
                    name="activity"
                    value={formData.activity}
                    onChange={handleInputChange}
                    className="bg-bgLight border border-primary border-opacity-5 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary cursor-pointer font-medium"
                  >
                    <option value="monsoon-waterfall">Monsoon Waterfall Trail (₹1,200 / guest)</option>
                    <option value="trekking-expedition">Trekking Expeditions (₹1,500 / guest)</option>
                    <option value="mountain-cycling">Mountain Cycling (₹1,000 / guest)</option>
                    <option value="yoga-sessions">Sunrise Yoga & Meditation (₹800 / guest)</option>
                    <option value="cooking-workshop">Regional Cooking Workshop (₹2,500 / guest)</option>
                    <option value="candlelight-dinner">Private Candlelight Dinner (₹12,000 / couple)</option>
                  </select>
                </div>

                {/* Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                    <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium flex items-center gap-1">
                      <RiCalendarEventLine size={12} />
                      <span>Preferred Date</span>
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
                  <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
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
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5-8">5-8 Guests (Group charter)</option>
                    </select>
                  </div>
                </div>

                {/* Contact */}
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
                  <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Special instructions / Requests</label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Physical requirements, custom catering preferences, champagne brands..."
                    className="bg-bgLight border border-primary border-opacity-5 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white border border-primary hover:bg-transparent hover:text-primary uppercase text-[9px] tracking-luxury py-4 px-4 font-semibold transition-all duration-500 font-poppins mt-2"
                >
                  Submit Arrangement Request
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Activities;
