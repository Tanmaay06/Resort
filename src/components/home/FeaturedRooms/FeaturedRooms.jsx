import React from 'react';
import { rooms } from '../../../data/rooms';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Container from '../../common/Container/Container';
import RoomCard from '../../cards/RoomCard/RoomCard';
import Button from '../../common/Button/Button';

export const FeaturedRooms = () => {
  // Get featured rooms
  const featuredRooms = rooms.filter(room => room.featured);

  return (
    <section className="py-24 bg-bgLight">
      <Container>
        <SectionTitle
          title="Designed for Quiet Comfort"
          subtitle="Suites & Villas"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button to="/rooms" variant="outline">
            View All Suites & Villas
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedRooms;
