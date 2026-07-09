import React from 'react';

export const Badge = ({ children, className = '', ...props }) => {
  return (
    <span
      className={`inline-block bg-accent/10 text-accent-dark text-[10px] tracking-luxury uppercase font-inter px-3 py-1 font-medium border border-accent/20 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
