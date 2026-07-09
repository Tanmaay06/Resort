import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import Badge from '../../common/Badge/Badge';

export const OfferCard = ({ offer }) => {
  const { id, name, tagline, description, badge, inclusions, price, validUntil, image } = offer;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-primary border-opacity-5 group overflow-hidden hover:shadow-lg transition-all duration-700 flex flex-col md:flex-row"
    >
      {/* Image Block */}
      <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-primary-dark shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#072E3A] text-white bg-opacity-90">{badge}</Badge>
        </div>
      </div>

      {/* Description & List of Inclusions */}
      <div className="p-7 sm:p-8 md:w-3/5 flex flex-col justify-between gap-5">
        <div>
          <span className="text-[9px] text-accent tracking-luxury uppercase font-medium block mb-1">
            Valid until {validUntil}
          </span>
          <h3 className="text-lg sm:text-xl font-light font-playfair text-charcoal tracking-wide mb-3 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-xs text-charcoal text-opacity-65 leading-relaxed mb-4">
            {description}
          </p>

          <ul className="flex flex-col gap-2 border-t border-primary border-opacity-5 pt-4">
            {inclusions.slice(0, 3).map((inc, i) => (
              <li key={i} className="text-[10px] sm:text-[11px] text-charcoal text-opacity-80 flex items-start gap-2">
                <span className="text-secondary select-none font-editorial text-sm leading-none">•</span>
                <span>{inc}</span>
              </li>
            ))}
            {inclusions.length > 3 && (
              <li className="text-[9px] text-accent font-medium italic pl-3">
                + {inclusions.length - 3} more exclusive package benefits
              </li>
            )}
          </ul>
        </div>

        {/* Pricing and Action */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-primary border-opacity-5 mt-auto">
          <div>
            <span className="text-[8px] sm:text-[9px] text-charcoal text-opacity-40 tracking-widest block uppercase">Package Rate From</span>
            <span className="text-lg font-light font-playfair text-primary">₹{price.toLocaleString('en-IN')} <span className="text-xs text-charcoal text-opacity-50">/ Total</span></span>
          </div>
          <Button to={`/booking?package=${id}`} variant="primary" className="!py-3 !px-5 text-[9px] w-full sm:w-auto">
            Book Package
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferCard;
