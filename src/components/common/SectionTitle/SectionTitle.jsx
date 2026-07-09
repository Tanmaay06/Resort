import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 md:mb-20 ${alignment[align]} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-sub tracking-luxury uppercase mb-3 text-xs md:text-sm font-medium"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`editorial-title font-light tracking-wide ${light ? 'text-white' : 'text-charcoal'}`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.3, scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`h-[1px] w-24 mt-6 origin-center ${light ? 'bg-secondary' : 'bg-primary'}`}
      />
    </div>
  );
};

export default SectionTitle;
