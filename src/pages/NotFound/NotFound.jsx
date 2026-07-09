import React from 'react';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';

export const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary-dark text-white pt-20 text-center relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] border border-white rounded-full flex items-center justify-center" />
      </div>

      <Container className="relative z-10 py-16">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium text-secondary">
            Error 404
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-light font-playfair tracking-wide leading-tight text-white">
            Sanctuary <br />
            <span className="font-editorial text-secondary italic">Lost</span>
          </h1>

          <div className="h-[1px] w-16 bg-secondary bg-opacity-35 my-2" />

          <p className="text-xs sm:text-sm text-white text-opacity-65 leading-relaxed font-poppins max-w-sm">
            It appears you have strayed from the designated path. Let us guide you back to stillness.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <Button to="/" variant="secondary">
              Return to Home
            </Button>
            <Button to="/rooms" variant="whiteOutline">
              Explore Suites
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
