import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/ri';

export const FacilityCard = ({ facility }) => {
  const { name, tagline, description, image, icon } = facility;
  const IconComponent = Icons[icon] || Icons.RiWaterFlashLine;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-[4/5] group overflow-hidden border border-white border-opacity-10 cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />

      {/* Luxury overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/45 to-transparent opacity-85 transition-opacity duration-700 group-hover:opacity-95" />

      {/* Card Content */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
        {/* Floating Icon */}
        <div className="w-10 h-10 border border-secondary border-opacity-30 rounded-full flex items-center justify-center text-secondary self-end transition-all duration-700 group-hover:border-opacity-100 group-hover:bg-primary">
          <IconComponent size={18} />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2">
          <span className="font-editorial text-secondary text-xs italic tracking-wider">{tagline}</span>
          <h3 className="text-xl font-light text-white tracking-wide font-playfair">{name}</h3>
          
          <div className="h-0 overflow-hidden opacity-0 group-hover:h-16 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pt-1">
            <p className="text-[11px] text-white text-opacity-75 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
