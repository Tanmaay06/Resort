import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiCalendarEventLine, RiUserLine, RiHotelLine } from 'react-icons/ri';

export const BookingWidget = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('any');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/booking?in=${checkIn}&out=${checkOut}&guests=${guests}&room=${roomType}`);
  };

  return (
    <div id="booking-widget-anchor" className="relative z-[20] max-w-6xl mx-auto px-6 -mt-16 md:-mt-12 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0E2319] border border-secondary border-opacity-20 p-6 md:p-8 rounded-2xl shadow-2xl text-white"
      >
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-end">
          
          {/* Check-In */}
          <div className="flex flex-col gap-2">
            <label className="text-[9px] uppercase tracking-luxury text-secondary font-semibold font-inter flex items-center gap-1.5 pl-1">
              <RiCalendarEventLine size={13} />
              <span>Check-In</span>
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-xs font-inter text-white focus:outline-none focus:border-secondary transition-all duration-300 w-full cursor-pointer hover:bg-white/10"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col gap-2">
            <label className="text-[9px] uppercase tracking-luxury text-secondary font-semibold font-inter flex items-center gap-1.5 pl-1">
              <RiCalendarEventLine size={13} />
              <span>Check-Out</span>
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-xs font-inter text-white focus:outline-none focus:border-secondary transition-all duration-300 w-full cursor-pointer hover:bg-white/10"
              required
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2">
            <label className="text-[9px] uppercase tracking-luxury text-secondary font-semibold font-inter flex items-center gap-1.5 pl-1">
              <RiUserLine size={13} />
              <span>Guests</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-xs font-inter text-white focus:outline-none focus:border-secondary transition-all duration-300 w-full cursor-pointer hover:bg-white/10 appearance-none [&>option]:bg-[#0E2319] [&>option]:text-white"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5-8">5-8 Guests</option>
            </select>
          </div>

          {/* Room Type */}
          <div className="flex flex-col gap-2">
            <label className="text-[9px] uppercase tracking-luxury text-secondary font-semibold font-inter flex items-center gap-1.5 pl-1">
              <RiHotelLine size={13} />
              <span>Suite Class</span>
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-xs font-inter text-white focus:outline-none focus:border-secondary transition-all duration-300 w-full cursor-pointer hover:bg-white/10 appearance-none [&>option]:bg-[#0E2319] [&>option]:text-white"
            >
              <option value="any">Any Suite / Villa</option>
              <option value="crest-valley-villa">Crest Valley Villa</option>
              <option value="forest-sanctuary-villa">Forest Sanctuary Villa</option>
              <option value="jungle-canopy-suite">Jungle Canopy Suite</option>
              <option value="aaranya-presidential-reserve">Presidential Reserve</option>
            </select>
          </div>

          {/* Search Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-secondary text-charcoal border border-secondary hover:bg-white hover:text-[#0E2319] hover:border-white uppercase text-[9px] tracking-luxury py-4 px-6 font-bold transition-all duration-500 font-inter rounded-xl cursor-pointer shadow-md"
            >
              Check Availability
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default BookingWidget;
