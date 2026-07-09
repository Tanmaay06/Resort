import React from 'react';
import { motion } from 'framer-motion';
import { RiZoomInLine } from 'react-icons/ri';

export const GalleryCard = ({ item, onClick }) => {
  const { id, title, category, image } = item;

  // Generate varied magazine aspect ratios for the masonry layout
  const aspectRatios = [
    'aspect-[4/3]',
    'aspect-[3/4]',
    'aspect-square',
    'aspect-[16/10]',
    'aspect-[4/5]',
    'aspect-[3/2]',
  ];
  const aspectClass = aspectRatios[id % aspectRatios.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${aspectClass} w-full break-inside-avoid mb-4 overflow-hidden rounded-xl border border-primary border-opacity-5 cursor-pointer bg-primary-dark group`}
      onClick={onClick}
    >
      {/* Photo */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
      />
      {/* Zoom Hover Overlay with Captions */}
      <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-primary-dark/50 transition-all duration-500 flex items-end p-6 z-[2]">
        <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 text-white flex flex-col gap-1 w-full">
          <RiZoomInLine size={20} className="text-secondary mb-1" />
          <span className="font-playfair text-sm font-medium tracking-wide leading-tight">{title}</span>
          <span className="font-inter text-[8px] uppercase tracking-luxury text-secondary font-semibold">{category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
