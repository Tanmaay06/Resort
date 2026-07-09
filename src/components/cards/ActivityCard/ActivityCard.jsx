import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RiDropLine, 
  RiWalkLine, 
  RiCompass3Line, 
  RiLeafLine, 
  RiRestaurantLine, 
  RiHeartsLine,
  RiArrowRightLine
} from 'react-icons/ri';

export const ActivityCard = ({ activity }) => {
  const { id, name, tagline, price, duration, image } = activity;

  // Icon mapping based on activity ID
  const getIcon = (activityId) => {
    switch (activityId) {
      case 'monsoon-waterfall':
        return <RiDropLine size={20} />;
      case 'trekking-expedition':
        return <RiWalkLine size={20} />;
      case 'mountain-cycling':
        return <RiCompass3Line size={20} />;
      case 'yoga-sessions':
        return <RiLeafLine size={20} />;
      case 'cooking-workshop':
        return <RiRestaurantLine size={20} />;
      case 'candlelight-dinner':
        return <RiHeartsLine size={20} />;
      default:
        return <RiCompass3Line size={20} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative group overflow-hidden rounded-xl aspect-[4/5] shadow-md hover:shadow-2xl transition-all duration-700 cursor-pointer bg-primary-dark"
    >
      <Link to={`/activities#booking-section`} className="absolute inset-0 z-10" />

      {/* Large Image Zoom */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
      />

      {/* Elegant Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/55 transition-all duration-500 z-[1]" />

      {/* Floating Info Elements */}
      <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md text-white text-[9px] tracking-luxury uppercase font-medium py-1.5 px-3 rounded-full z-[2]">
        ₹{price.toLocaleString('en-IN')}
      </div>

      {/* Bottom Content Panel */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col justify-end min-h-[50%] transition-transform duration-500">
        
        {/* Animated Category Icon */}
        <div className="w-10 h-10 border border-secondary border-opacity-40 rounded-full flex items-center justify-center text-secondary mb-4 transition-all duration-500 group-hover:bg-secondary group-hover:text-charcoal group-hover:scale-110 group-hover:border-secondary">
          {getIcon(id)}
        </div>

        {/* Title */}
        <h3 className="text-xl font-medium text-white tracking-wide mb-1 font-playfair transition-colors group-hover:text-secondary">
          {name}
        </h3>

        {/* Specs Line (Duration) */}
        <span className="text-[9px] uppercase tracking-widest text-white/50 font-inter block mb-2">
          {duration} &nbsp;•&nbsp; Guided Experience
        </span>

        {/* Short Description (reveal on hover) */}
        <p className="text-xs text-white/70 leading-relaxed font-inter line-clamp-2 max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 group-hover:mt-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
          {tagline}
        </p>

        {/* Explore Link Indicator */}
        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-luxury text-secondary font-semibold mt-3 max-h-0 opacity-0 group-hover:max-h-6 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
          <span>Arrange Experience</span>
          <RiArrowRightLine size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
