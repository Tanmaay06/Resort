import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import { RiExpandLeftRightLine, RiUserLine } from 'react-icons/ri';

export const RoomCard = ({ room }) => {
  const { id, name, price, size, occupancy, view, tagline, images } = room;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white group overflow-hidden border border-primary border-opacity-5 hover:shadow-lg transition-all duration-700 flex flex-col h-full"
    >
      {/* Card Image */}
      <div className="relative aspect-[3/2] overflow-hidden bg-primary-dark">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-[9px] tracking-luxury uppercase font-medium py-1.5 px-3">
          From ₹{price.toLocaleString('en-IN')} / Night
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between gap-5">
        <div>
          <span className="font-editorial text-accent-dark text-xs italic mb-1.5 block tracking-wider">{view}</span>
          <h3 className="text-lg font-light text-charcoal tracking-wide mb-2.5 font-playfair group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-xs text-charcoal text-opacity-65 line-clamp-2 leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Suite Details Bar */}
        <div className="flex justify-between items-center py-3 border-t border-b border-primary border-opacity-5 text-[9px] text-charcoal text-opacity-50 uppercase tracking-widest font-poppins">
          <div className="flex items-center gap-1.5">
            <RiExpandLeftRightLine className="text-accent" size={13} />
            <span>{size.split(' / ')[0]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RiUserLine className="text-accent" size={13} />
            <span>{occupancy}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-1">
          <Button to={`/rooms/${id}`} variant="text">
            Discover Suite
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
