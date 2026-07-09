import React from 'react';
import { offers } from '../../../data/offers';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Container from '../../common/Container/Container';
import OfferCard from '../../cards/OfferCard/OfferCard';
import Button from '../../common/Button/Button';

export const Offers = () => {
  // Show first 2 packages
  const previewOffers = offers.slice(0, 2);

  return (
    <section className="py-24 bg-bgLight">
      <Container>
        <SectionTitle
          title="Exclusive Privileges"
          subtitle="Offers & Packages"
          align="center"
        />

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {previewOffers.map((off) => (
            <OfferCard key={off.id} offer={off} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button to="/offers" variant="outline">
            View All Offers
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Offers;
