import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import { RiTimeLine } from 'react-icons/ri';

export const ActivityCard = ({ activity }) => {
  const { id, name, tagline, price, duration, difficulty, image } = activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-primary border-opacity-5 group overflow-hidden hover:shadow-lg transition-all duration-700 flex flex-col h-full"
    >
      {/* Excursion Image */}
      <div className="relative aspect-[3/2] overflow-hidden bg-primary-dark">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-primary text-white text-[9px] tracking-luxury uppercase font-medium py-1 px-2.5">
          ${price} / Guest
        </div>
      </div>

      {/* Info Body */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-5">
        <div>
          <span className="font-editorial text-accent text-xs italic mb-1 block tracking-wider">{difficulty} Intensity</span>
          <h3 className="text-lg font-light text-charcoal tracking-wide mb-2 font-playfair group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-xs text-charcoal text-opacity-65 line-clamp-2 leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Specs bar */}
        <div className="flex justify-between items-center py-2.5 border-t border-b border-primary border-opacity-5 text-[9px] text-charcoal text-opacity-50 uppercase tracking-widest font-poppins">
          <div className="flex items-center gap-1.5">
            <RiTimeLine className="text-accent" size={13} />
            <span>{duration}</span>
          </div>
          <span>Bespoke Arrangement</span>
        </div>

        <div className="flex items-center justify-between">
          <Button to={`/activities#${id}`} variant="text">
            Explore Experience
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
