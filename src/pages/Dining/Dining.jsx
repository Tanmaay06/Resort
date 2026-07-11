import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { dining } from '../../data/dining';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import Button from '../../components/common/Button/Button';
import { RiCalendarEventLine, RiUserLine, RiTimeLine } from 'react-icons/ri';

export const Dining = () => {
  const [reservationSubmitted, setReservationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: 'the-cliffside-grill',
    date: '',
    time: '19:30',
    guests: '2',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setReservationSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden pt-20">
      {/* 1. Sub-Hero Header */}
      <section className="relative h-[45vh] flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 w-full h-full opacity-65">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80"
            alt="Dining Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">Gastronomy</span>
          <h1 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight">
            Luxurious Dining
          </h1>
        </div>
      </section>

      {/* 2. Restaurant Directory */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col gap-24">
            {dining.map((venue, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={venue.id}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Photo container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden hover-zoom-img shadow-xl border border-primary border-opacity-5 bg-primary-dark"
                  >
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Info block */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 flex flex-col gap-5 text-charcoal"
                  >
                    <span className="font-editorial text-accent text-xs sm:text-sm italic tracking-wider">
                      {venue.cuisine}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light font-playfair tracking-wide">
                      {venue.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
                      {venue.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-primary border-opacity-5 text-xs font-poppins">
                      {/* Features */}
                      <div className="flex flex-col gap-2">
                        <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-40 font-semibold">Features</span>
                        <ul className="flex flex-col gap-1 text-charcoal text-opacity-70 text-[11px]">
                          {venue.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-secondary select-none font-editorial italic text-base leading-none">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Signatures */}
                      <div className="flex flex-col gap-2">
                        <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-40 font-semibold">Signature Creations</span>
                        <ul className="flex flex-col gap-1 text-charcoal text-opacity-70 text-[11px]">
                          {venue.signatures.map((s, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-secondary select-none font-editorial italic text-base leading-none">•</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-primary border-opacity-5 pt-4 text-[10px] text-charcoal text-opacity-50 uppercase tracking-widest font-poppins">
                      <strong>Operating Hours:</strong> {venue.hours}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Table Bookings Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <Container>
          <div className="max-w-xl mx-auto bg-white border border-primary border-opacity-5 p-8 sm:p-10 shadow-lg text-charcoal">
            <h2 className="font-playfair text-2xl font-light text-center tracking-wide mb-2 text-primary">Table Reservation</h2>
            <p className="text-xs text-charcoal text-opacity-65 text-center font-poppins max-w-sm mx-auto mb-8">
              Bespoke culinary experiences require careful preparation. Please register your table preferences below.
            </p>

            {reservationSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col gap-4"
              >
                <h4 className="font-playfair text-xl text-primary font-medium">Reservation Requested</h4>
                <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins">
                  Thank you. Your dining request at <strong>{dining.find(v => v.id === formData.restaurant)?.name}</strong> for {formData.guests} guests on {formData.date} at {formData.time} has been registered. Our culinary host will contact you shortly to confirm.
                </p>
                <Button onClick={() => setReservationSubmitted(false)} variant="outline" className="mt-4 !py-3">
                  Book Another Table
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="flex flex-col gap-4">
                {/* Select Restaurant */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Dining Venue</label>
                  <select
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleInputChange}
                    className="bg-bgLight border border-primary border-opacity-5 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary cursor-pointer font-medium"
                  >
                    <option value="the-cliffside-grill">The Cliffside Grill</option>
                    <option value="saarang">Saarang</option>
                    <option value="the-sunset-lounge">The Sunset Lounge</option>
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
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6-10">6-10 Guests (Requires contact)</option>
                  </select>
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

                {/* Dietary Notes */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Dietary Requirements / Occasion</label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Vegetarian, seafood allergy, birthday celebration details..."
                    className="bg-bgLight border border-primary border-opacity-5 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white border border-primary hover:bg-transparent hover:text-primary uppercase text-[9px] tracking-luxury py-4 px-4 font-semibold transition-all duration-500 font-poppins mt-2"
                >
                  Request Reservation
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Dining;
