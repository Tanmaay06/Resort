import React from 'react';
import { facilities } from '../../../data/facilities';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Container from '../../common/Container/Container';
import FacilityCard from '../../cards/FacilityCard/FacilityCard';

export const Facilities = () => {
  return (
    <section id="facilities" className="py-24 bg-[#072E3A] text-white">
      <Container>
        <SectionTitle
          title="World-Class Conveniences"
          subtitle="Resort Facilities"
          align="center"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac) => (
            <FacilityCard key={fac.id} facility={fac} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Facilities;
