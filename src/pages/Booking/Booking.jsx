import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { rooms } from '../../data/rooms';
import { offers } from '../../data/offers';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { RiCheckLine, RiArrowRightSLine, RiArrowLeftSLine, RiShieldCheckLine } from 'react-icons/ri';

export const Booking = () => {
  const [searchParams] = useSearchParams();
  
  // States
  const [step, setStep] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(rooms[0].id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available upgrades
  const addonsList = [
    { id: 'heli-transfer', name: 'Private Helicopter Airport Transfer', price: 45000, detail: ' Disembark at our private cliffside helipad (per flight)' },
    { id: 'chef-service', name: 'Bespoke In-Villa Private Chef Service', price: 8500, detail: 'Daily custom menus prepared in your suite kitchen (per day)' },
    { id: 'catamaran-cruise', name: 'Private Pawna Lake Sunset Cruise', price: 18000, detail: '4-hour cruise with private host and champagne (one-time)' },
    { id: 'champagne-welcome', name: 'Veuve Clicquot Welcome Arrival Ritual', price: 6500, detail: 'Chilled welcome bottle, custom appetizers, and fresh fruits in suite (one-time)' }
  ];

  // Prepopulate state from query params on mount
  useEffect(() => {
    const qRoom = searchParams.get('room');
    const qIn = searchParams.get('in');
    const qOut = searchParams.get('out');
    const qGuests = searchParams.get('guests');
    const qPackage = searchParams.get('package');

    if (qRoom && rooms.some(r => r.id === qRoom)) {
      setSelectedRoomId(qRoom);
    }
    if (qIn) setCheckIn(qIn);
    if (qOut) setCheckOut(qOut);
    if (qGuests) setGuests(qGuests);

    // If package/offer, prepopulate dates and package addons
    if (qPackage) {
      const selectedPkg = offers.find(o => o.id === qPackage);
      if (selectedPkg) {
        // Set room if it matches view
        if (selectedPkg.id === 'romantic-escape') {
          setSelectedRoomId('crest-valley-villa');
        } else if (selectedPkg.id === 'holistic-wellness-retreat') {
          setSelectedRoomId('jungle-canopy-suite');
        } else if (selectedPkg.id === 'island-discovery') {
          setSelectedRoomId('forest-sanctuary-villa');
        }
      }
    }
  }, [searchParams]);

  // Calculations
  const selectedRoom = rooms.find(r => r.id === selectedRoomId) || rooms[0];
  
  // Calculate nights
  const getNights = () => {
    if (!checkIn || !checkOut) return 4; // Default to 4 nights for estimate
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    const nights = Math.ceil(diff / (1000 * 3600 * 24));
    return nights > 0 ? nights : 4;
  };
  const nights = getNights();

  // Pricing
  const roomTotal = selectedRoom.price * nights;
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = addonsList.find(a => a.id === addonId);
    if (!addon) return acc;
    // Chef service is per day
    if (addonId === 'chef-service') {
      return acc + (addon.price * nights);
    }
    return acc + addon.price;
  }, 0);
  const estTotal = roomTotal + addonsTotal;

  const handleAddonToggle = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmReservation = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleNextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const handlePrevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="overflow-x-hidden pt-20 bg-bgLight min-h-screen pb-24">
      {/* sub-hero header */}
      <section className="bg-[#0E2319] py-12 text-white border-b border-secondary border-opacity-15 text-center">
        <Container>
          <span className="editorial-sub tracking-luxury uppercase text-[10px] font-medium block mb-1">Stay Customizer</span>
          <h1 className="text-xl sm:text-2xl font-light font-playfair tracking-luxury uppercase">Reserve Your Sanctuary</h1>
        </Container>
      </section>

      <Container className="mt-12">
        {/* Reservation Builder wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main steps (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-primary border-opacity-5 p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 border-2 border-secondary rounded-full flex items-center justify-center text-secondary">
                  <RiShieldCheckLine size={36} />
                </div>
                <h2 className="font-playfair text-2xl sm:text-3xl font-light text-primary">Stay Scheduled</h2>
                <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins max-w-lg">
                  Your reservation request for the <strong>{selectedRoom.name}</strong> ({nights} nights) has been received. A dedicated Aaranya Crest concierge host has been assigned to your booking and will email you the booking code, secure payment gateway link, and arrival details within 6 hours.
                </p>
                <div className="border-t border-primary border-opacity-5 w-full pt-6 text-[10px] text-charcoal text-opacity-40 uppercase tracking-widest font-poppins">
                  Aaranya Crest Resort & Spa &nbsp;•&nbsp; Booking ID: ARC-{Math.floor(Math.random() * 90000) + 10000}
                </div>
                <Button to="/" variant="primary" className="mt-4">
                  Return to Home
                </Button>
              </motion.div>
            ) : (
              <div>
                {/* Step indicator bar */}
                <div className="flex justify-between items-center pb-6 border-b border-primary border-opacity-5 mb-8 text-[9px] text-charcoal font-medium font-poppins uppercase tracking-wider text-opacity-50">
                  <span className={step >= 1 ? 'text-primary font-semibold border-b border-secondary pb-1' : ''}>1. Sanctuary</span>
                  <span className={step >= 2 ? 'text-primary font-semibold border-b border-secondary pb-1' : ''}>2. Dates</span>
                  <span className={step >= 3 ? 'text-primary font-semibold border-b border-secondary pb-1' : ''}>3. Upgrades</span>
                  <span className={step >= 4 ? 'text-primary font-semibold border-b border-secondary pb-1' : ''}>4. Register</span>
                </div>

                <AnimatePresence mode="wait">
                  {/* STEP 1: Select Room */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-lg font-light font-playfair text-charcoal tracking-wide mb-2">Select Your Private Sanctuary</h3>
                      <div className="flex flex-col gap-4">
                        {rooms.map((room) => (
                          <div
                            key={room.id}
                            onClick={() => setSelectedRoomId(room.id)}
                            className={`p-5 border cursor-pointer flex flex-col sm:flex-row gap-5 items-center transition-all duration-300 ${
                              selectedRoomId === room.id
                                ? 'border-secondary bg-[#FAF7F2]'
                                : 'border-primary border-opacity-10 hover:border-accent'
                            }`}
                          >
                            <img
                              src={room.images[0]}
                              alt={room.name}
                              className="w-full sm:w-1/4 aspect-[3/2] object-cover"
                            />
                            <div className="flex-grow text-center sm:text-left">
                              <span className="font-editorial text-accent text-xs italic">{room.view}</span>
                              <h4 className="font-playfair text-base text-charcoal font-medium">{room.name}</h4>
                              <p className="text-[10px] text-charcoal text-opacity-50 uppercase tracking-widest mt-1 font-poppins">
                                {room.size.split(' / ')[0]} &nbsp;•&nbsp; {room.bed}
                              </p>
                            </div>
                            <div className="text-center sm:text-right shrink-0">
                              <span className="text-lg font-light font-playfair text-primary block">₹{room.price.toLocaleString('en-IN')}</span>
                              <span className="text-[9px] text-charcoal text-opacity-40 uppercase tracking-widest font-poppins">Per Night</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Select Dates & Guests */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-lg font-light font-playfair text-charcoal tracking-wide mb-2">Specify Stay Details</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Check-In Date</label>
                          <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="bg-bgLight border border-primary border-opacity-5 p-3 text-xs font-poppins focus:outline-none focus:border-secondary text-charcoal font-medium"
                            required
                          />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <label className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Check-Out Date</label>
                          <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="bg-bgLight border border-primary border-opacity-5 p-3 text-xs font-poppins focus:outline-none focus:border-secondary text-charcoal font-medium"
                            required
                          />
                        </div>

                        <div className="flex flex-col gap-2 col-span-2">
                          <label className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Number of Guests</label>
                          <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="bg-bgLight border border-primary border-opacity-5 p-3 text-xs font-poppins focus:outline-none focus:border-secondary cursor-pointer font-medium text-charcoal"
                          >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5-8">5-8 Guests (Requires Presidential Reserve or Villa layout)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Enhance Stay (Upgrades) */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-lg font-light font-playfair text-charcoal tracking-wide mb-2">Enhance Your Stay (Optional)</h3>
                      <p className="text-xs text-charcoal text-opacity-60 leading-relaxed font-poppins -mt-4">
                        Add curated experiences and services to be prepared ahead of your island arrival.
                      </p>

                      <div className="flex flex-col gap-4">
                        {addonsList.map((addon) => {
                          const isSelected = selectedAddons.includes(addon.id);
                          return (
                            <div
                              key={addon.id}
                              onClick={() => handleAddonToggle(addon.id)}
                              className={`p-4 border cursor-pointer flex justify-between items-center transition-all duration-300 ${
                                isSelected ? 'border-secondary bg-[#FAF7F2]' : 'border-primary border-opacity-10 hover:border-accent'
                              }`}
                            >
                              <div className="flex items-center gap-4">
                                <div className={`w-5 h-5 border flex items-center justify-center transition-all duration-300 shrink-0 ${
                                  isSelected ? 'bg-secondary border-secondary text-charcoal' : 'border-primary border-opacity-20'
                                }`}>
                                  {isSelected && <RiCheckLine size={16} />}
                                </div>
                                <div>
                                  <h4 className="font-playfair text-xs sm:text-sm text-charcoal font-medium">{addon.name}</h4>
                                  <span className="text-[9px] text-charcoal text-opacity-40 font-poppins block mt-0.5">{addon.detail}</span>
                                </div>
                              </div>
                              <span className="text-xs font-poppins font-medium text-primary shrink-0 pl-4">
                                +₹{addon.price.toLocaleString('en-IN')}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: Guest Registration */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-lg font-light font-playfair text-charcoal tracking-wide mb-2">Guest Registration</h3>
                      
                      <form onSubmit={handleConfirmReservation} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={contactInfo.firstName}
                            onChange={handleInputChange}
                            placeholder="e.g. John"
                            className="bg-bgLight border border-primary border-opacity-5 p-3 text-xs font-poppins focus:outline-none focus:border-secondary text-charcoal font-medium"
                            required
                          />
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={contactInfo.lastName}
                            onChange={handleInputChange}
                            placeholder="e.g. Smith"
                            className="bg-bgLight border border-primary border-opacity-5 p-3 text-xs font-poppins focus:outline-none focus:border-secondary text-charcoal font-medium"
                            required
                          />
                        </div>

                        <div className="flex flex-col gap-1.5 col-span-2">
                          <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={contactInfo.email}
                            onChange={handleInputChange}
                            placeholder="john.smith@domain.com"
                            className="bg-bgLight border border-primary border-opacity-5 p-3 text-xs font-poppins focus:outline-none focus:border-secondary text-charcoal font-medium"
                            required
                          />
                        </div>

                        <div className="flex flex-col gap-1.5 col-span-2">
                          <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={contactInfo.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 019-2834"
                            className="bg-bgLight border border-primary border-opacity-5 p-3 text-xs font-poppins focus:outline-none focus:border-secondary text-charcoal font-medium"
                            required
                          />
                        </div>

                        <div className="flex flex-col gap-1.5 col-span-2">
                          <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Arrival Details / Requests</label>
                          <textarea
                            name="notes"
                            rows="4"
                            value={contactInfo.notes}
                            onChange={handleInputChange}
                            placeholder="Tell us about allergies, preferred pillow types, champagne arrival time, or helicopter flight numbers..."
                            className="bg-bgLight border border-primary border-opacity-5 p-3 text-xs font-poppins focus:outline-none focus:border-secondary resize-none text-charcoal"
                          />
                        </div>

                        <button
                          type="submit"
                          className="col-span-2 w-full bg-secondary text-charcoal border border-secondary hover:bg-transparent hover:text-secondary uppercase text-[10px] tracking-luxury py-4 px-6 font-semibold transition-all duration-500 font-poppins mt-2"
                        >
                          Confirm & Schedule Stay
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Back / Next controls */}
                {step < 4 && (
                  <div className="flex justify-between items-center pt-8 border-t border-primary border-opacity-5 mt-10">
                    <button
                      onClick={handlePrevStep}
                      disabled={step === 1}
                      className="flex items-center gap-1.5 font-poppins text-[10px] tracking-luxury uppercase font-medium text-charcoal text-opacity-50 hover:text-primary disabled:opacity-0 transition-all duration-300"
                    >
                      <RiArrowLeftSLine size={16} />
                      <span>Back</span>
                    </button>

                    <button
                      onClick={handleNextStep}
                      className="flex items-center gap-1.5 bg-primary text-white py-3.5 px-6 font-poppins text-[9px] tracking-luxury uppercase font-semibold hover:bg-transparent hover:text-primary border border-primary transition-all duration-500"
                    >
                      <span>Continue</span>
                      <RiArrowRightSLine size={16} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Checkout summary panel (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-[#FAF7F2] border border-primary border-opacity-5 p-8 shadow-sm flex flex-col gap-6 text-charcoal">
              <h3 className="font-playfair text-base font-medium tracking-widest text-center uppercase border-b border-primary border-opacity-5 pb-3">
                Estimated Summary
              </h3>

              {/* Room details */}
              <div className="flex gap-4 items-center">
                <img
                  src={selectedRoom.images[0]}
                  alt={selectedRoom.name}
                  className="w-16 h-16 object-cover border border-primary border-opacity-5"
                />
                <div>
                  <h4 className="font-playfair text-sm font-medium">{selectedRoom.name}</h4>
                  <span className="text-[9px] text-accent tracking-wider font-poppins uppercase">{selectedRoom.view}</span>
                </div>
              </div>

              {/* Stay specs */}
              <div className="flex flex-col gap-3 py-4 border-t border-b border-primary border-opacity-5 text-[10px] font-poppins text-charcoal text-opacity-70 uppercase tracking-wide">
                <div className="flex justify-between">
                  <span>Nightly Rate</span>
                  <span className="font-semibold text-primary">₹{selectedRoom.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration Selected</span>
                  <span className="font-semibold text-primary">{nights} Nights</span>
                </div>
                <div className="flex justify-between">
                  <span>Occupancy</span>
                  <span className="font-semibold text-primary">{guests} Guests</span>
                </div>
              </div>

              {/* Upgrades details */}
              {selectedAddons.length > 0 && (
                <div className="flex flex-col gap-2 text-[9px] font-poppins text-charcoal text-opacity-60 uppercase border-b border-primary border-opacity-5 pb-4">
                  <span className="font-semibold text-[10px] text-charcoal text-opacity-40 tracking-wider">Stay Upgrades</span>
                  {selectedAddons.map((addonId) => {
                    const addon = addonsList.find(a => a.id === addonId);
                    if (!addon) return null;
                    return (
                      <div key={addonId} className="flex justify-between items-baseline gap-4 text-xs font-poppins">
                        <span className="truncate leading-normal">{addon.name}</span>
                        <span className="font-semibold shrink-0 text-primary">
                          +₹{(addonId === 'chef-service' ? addon.price * nights : addon.price).toLocaleString('en-IN')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Bill totals */}
              <div className="flex flex-col gap-2 pt-2 text-charcoal">
                <div className="flex justify-between items-baseline font-poppins text-[10px] text-charcoal text-opacity-40 uppercase tracking-widest">
                  <span>Total Base Stay</span>
                  <span className="font-semibold text-primary text-sm">₹{roomTotal.toLocaleString('en-IN')}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between items-baseline font-poppins text-[10px] text-charcoal text-opacity-40 uppercase tracking-widest">
                    <span>Upgrades Sum</span>
                    <span className="font-semibold text-primary text-sm">₹{addonsTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between items-baseline pt-4 border-t border-primary border-opacity-10 mt-2">
                  <span className="font-poppins text-[10px] uppercase tracking-widest font-semibold text-accent">Total Estimated</span>
                  <span className="font-playfair text-2xl font-light text-primary">₹{estTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Booking;
