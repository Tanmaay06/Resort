import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonials } from '../../../data/testimonials';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Container from '../../common/Container/Container';
import TestimonialCard from '../../cards/TestimonialCard/TestimonialCard';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#FAF7F2] overflow-hidden">
      <Container>
        <SectionTitle
          title="Echoes of Perfection"
          subtitle="Guest Stories"
          align="center"
        />

        <div className="max-w-3xl mx-auto mt-4">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            className="!pb-14 testimonial-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="h-full px-2 sm:px-12">
                  <TestimonialCard testimonial={t} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
