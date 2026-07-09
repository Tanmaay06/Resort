import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import { 
  RiExpandLeftRightLine, 
  RiUserLine, 
  RiHotelBedLine,
  RiWifiLine, 
  RiWindyLine, 
  RiCupLine 
} from 'react-icons/ri';

export const RoomCard = ({ room }) => {
  const { id, name, price, size, occupancy, bed, view, tagline, images } = room;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white group overflow-hidden rounded-xl border border-primary border-opacity-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full"
    >
      {/* Card Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-primary-dark">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-[9px] tracking-luxury uppercase font-medium py-1.5 px-3 rounded-sm shadow-md">
          Starting from ₹{price.toLocaleString('en-IN')} / Night
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between gap-5">
        <div>
          <span className="font-editorial text-accent-dark text-xs italic mb-1.5 block tracking-wider">{view}</span>
          <h3 className="text-xl font-medium text-charcoal tracking-wide mb-2.5 font-playfair group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-xs text-charcoal text-opacity-70 line-clamp-2 leading-relaxed mb-4 font-inter">
            {tagline}
          </p>

          {/* Quick Specifications */}
          <div className="flex flex-col gap-2.5 py-4 border-t border-primary border-opacity-5">
            <div className="grid grid-cols-2 gap-y-2 text-[10px] text-charcoal text-opacity-60 uppercase tracking-widest font-inter">
              <div className="flex items-center gap-2">
                <RiExpandLeftRightLine className="text-accent-dark" size={14} />
                <span>{size.split(' / ')[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <RiUserLine className="text-accent-dark" size={14} />
                <span>{occupancy}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <RiHotelBedLine className="text-accent-dark" size={14} />
                <span>{bed}</span>
              </div>
            </div>
          </div>

          {/* Luxury Inclusions Tag Bar */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-primary border-opacity-5">
            <span className="inline-flex items-center gap-1 text-[9px] font-medium tracking-wide text-primary bg-primary/8 py-1 px-2.5 rounded-full font-inter">
              <RiCupLine size={11} />
              Breakfast
            </span>
            <span className="inline-flex items-center gap-1 text-[9px] font-medium tracking-wide text-primary bg-primary/8 py-1 px-2.5 rounded-full font-inter">
              <RiWifiLine size={11} />
              Free WiFi
            </span>
            <span className="inline-flex items-center gap-1 text-[9px] font-medium tracking-wide text-primary bg-primary/8 py-1 px-2.5 rounded-full font-inter">
              <RiWindyLine size={11} />
              Air Cond.
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-4 mt-2 pt-4 border-t border-primary border-opacity-5">
          <Button to={`/rooms/${id}`} variant="text" className="!py-2">
            View Details
          </Button>
          <Button to={`/booking?room=${id}`} variant="primary" className="!py-2.5 !px-5 text-[9px] tracking-widest">
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
