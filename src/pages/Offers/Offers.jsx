import React from 'react';
import { offers } from '../../data/offers';
import Container from '../../components/common/Container/Container';
import OfferCard from '../../components/cards/OfferCard/OfferCard';

export const Offers = () => {
  return (
    <div className="overflow-x-hidden pt-20">
      {/* Sub-Hero Header */}
      <section className="relative h-[45vh] flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 w-full h-full opacity-65">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            alt="Offers Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">Exclusive Privileges</span>
          <h1 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight">
            Special Packages & Offers
          </h1>
        </div>
      </section>

      {/* Offers List */}
      <section className="py-24 bg-bgLight min-h-screen">
        <Container>
          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {offers.map((off) => (
              <OfferCard key={off.id} offer={off} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Offers;
