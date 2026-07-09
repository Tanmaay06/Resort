import React from 'react';
import { RiDoubleQuotesR, RiStarFill } from 'react-icons/ri';

export const TestimonialCard = ({ testimonial }) => {
  const { name, location, quote, rating, avatar, date } = testimonial;

  return (
    <div className="bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl p-8 md:p-10 flex flex-col justify-between h-full relative shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group">
      {/* Decorative quote icon */}
      <RiDoubleQuotesR className="absolute top-6 right-6 text-accent opacity-20 group-hover:scale-110 transition-transform duration-500" size={40} />
      
      <div className="flex flex-col gap-5">
        {/* Rating Stars & Date */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-1 text-secondary">
            {Array.from({ length: 5 }).map((_, i) => (
              <RiStarFill key={i} size={13} className={i < rating ? "text-secondary" : "text-charcoal/10"} />
            ))}
          </div>
          {date && (
            <span className="font-inter text-[8px] uppercase tracking-widest text-charcoal/40 font-medium">
              {date}
            </span>
          )}
        </div>

        {/* Text */}
        <blockquote className="text-sm sm:text-base font-medium font-cormorant italic text-charcoal leading-relaxed text-opacity-90">
          "{quote}"
        </blockquote>
      </div>

      {/* Guest Profile */}
      <div className="flex items-center gap-4 mt-8 pt-5 border-t border-primary border-opacity-5">
        <img
          src={avatar}
          alt={name}
          className="w-11 h-11 object-cover rounded-full border border-secondary border-opacity-30 group-hover:scale-105 transition-transform duration-500"
        />
        <div>
          <h4 className="font-playfair text-xs sm:text-sm text-charcoal font-medium tracking-wide">{name}</h4>
          <span className="font-inter text-[9px] text-charcoal text-opacity-50 uppercase tracking-widest block mt-0.5">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
