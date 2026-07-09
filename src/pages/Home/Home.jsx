import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';

// Section Components
import Hero from '../../components/home/Hero/Hero';
import BookingWidget from '../../components/home/BookingWidget/BookingWidget';
import FeaturedRooms from '../../components/home/FeaturedRooms/FeaturedRooms';
import Facilities from '../../components/home/Facilities/Facilities';
import SpaPreview from '../../components/home/SpaPreview/SpaPreview';
import GalleryPreview from '../../components/home/GalleryPreview/GalleryPreview';
import Offers from '../../components/home/Offers/Offers';
import Newsletter from '../../components/home/Newsletter/Newsletter';

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Banner */}
      <Hero />

      {/* Booking Widget */}
      <BookingWidget />

      {/* About Resort (Direct, Non-AI style) */}
      <section className="py-24 bg-white text-center">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium"
            >
              Lonavala, Maharashtra
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-title font-light tracking-wide text-charcoal text-2xl sm:text-4xl"
            >
              A Quiet Escape in <br />
              <span className="font-editorial text-accent italic">The Sahyadri Hills</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 0.2, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] w-16 bg-primary my-2"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins max-w-2xl"
            >
              Aaranya Crest Resort & Spa is situated near Bhushi Valley in Lonavala. Surrounded by green hills and misty seasonal waterfalls, the resort offers private villas built with natural timber and local stones. Designed to sit quietly within the landscape, it is a comfortable space to rest, walk nature trails, and enjoy Lonavala's cooler climate.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-2"
            >
              <Button to="/about" variant="text">
                Read Our Story
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Rooms */}
      <FeaturedRooms />

      {/* Resort Facilities */}
      <Facilities />

      {/* Spa & Wellness Preview */}
      <SpaPreview />

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Exclusive Offers */}
      <Offers />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
