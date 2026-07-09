import React from 'react';
import { RiDoubleQuotesR, RiStarFill } from 'react-icons/ri';

export const TestimonialCard = ({ testimonial }) => {
  const { name, location, quote, rating, avatar } = testimonial;

  return (
    <div className="bg-white border border-primary border-opacity-5 p-8 md:p-10 flex flex-col justify-between h-full relative">
      <RiDoubleQuotesR className="absolute top-6 right-6 text-accent opacity-10" size={44} />
      
      <div className="flex flex-col gap-5">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-secondary">
          {Array.from({ length: rating }).map((_, i) => (
            <RiStarFill key={i} size={13} />
          ))}
        </div>

        {/* Text */}
        <blockquote className="text-sm sm:text-base font-light font-cormorant italic text-charcoal leading-relaxed text-opacity-90">
          "{quote}"
        </blockquote>
      </div>

      {/* Guest Profile */}
      <div className="flex items-center gap-4 mt-8 pt-5 border-t border-primary border-opacity-5">
        <img
          src={avatar}
          alt={name}
          className="w-11 h-11 object-cover rounded-full border border-secondary border-opacity-30"
        />
        <div>
          <h4 className="font-playfair text-xs sm:text-sm text-charcoal font-medium tracking-wide">{name}</h4>
          <span className="font-poppins text-[9px] text-charcoal text-opacity-50 uppercase tracking-widest">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
