import React from 'react';
import { motion } from 'framer-motion';
import { RiZoomInLine } from 'react-icons/ri';

export const GalleryCard = ({ item, onClick }) => {
  const { title, category, image } = item;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-square group overflow-hidden border border-primary border-opacity-5 cursor-pointer bg-primary-dark"
      onClick={onClick}
    >
      {/* Photo */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
      {/* Zoom Hover Overlay */}
      <div className="absolute inset-0 bg-primary-dark bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white flex flex-col items-center gap-1.5 p-4 text-center">
          <RiZoomInLine size={20} className="text-secondary" />
          <span className="font-playfair text-xs tracking-wide">{title}</span>
          <span className="font-poppins text-[8px] uppercase tracking-luxury text-secondary">{category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
