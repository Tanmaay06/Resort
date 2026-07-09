import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  onClick,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-inter text-xs tracking-luxury uppercase transition-all duration-500 py-4 px-8 border text-center select-none font-medium';
  
  const variants = {
    primary: 'bg-primary text-white border-primary hover:bg-secondary hover:text-charcoal hover:border-secondary',
    secondary: 'bg-secondary text-charcoal border-secondary hover:bg-primary hover:text-white hover:border-primary',
    outline: 'bg-transparent text-primary border-primary hover:bg-secondary hover:text-charcoal hover:border-secondary',
    whiteOutline: 'bg-transparent text-white border-white hover:bg-secondary hover:text-charcoal hover:border-secondary',
    text: 'border-transparent text-primary hover:text-accent-dark !px-0 !py-1 border-b hover:border-accent-dark tracking-widest',
  };

  const finalClassName = `${baseStyle} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
