import React from 'react';
import { motion } from 'framer-motion';
import { dining } from '../../../data/dining';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';

export const DiningPreview = () => {
  // Take first 2 venues
  const previewVenues = dining.slice(0, 2);

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Culinary Journeys"
          subtitle="Fine Gastronomy"
          align="center"
        />

        <div className="flex flex-col gap-20 lg:gap-24">
          {previewVenues.map((venue, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={venue.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden hover-zoom-img shadow-lg border border-primary border-opacity-5 bg-primary-dark"
                >
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-1/2 flex flex-col gap-4"
                >
                  <span className="font-editorial text-accent text-xs sm:text-sm italic tracking-wider">
                    {venue.cuisine}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light font-playfair text-charcoal tracking-wide">
                    {venue.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
                    {venue.description}
                  </p>
                  
                  <div className="border-t border-primary border-opacity-5 pt-4 flex flex-col gap-1 text-[10px] text-charcoal text-opacity-50 uppercase tracking-widest font-poppins">
                    <span><strong>Operating Hours:</strong> {venue.hours}</span>
                  </div>

                  <div className="mt-2">
                    <Button to="/dining" variant="text">
                      Discover Menus & reserve
                    </Button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default DiningPreview;
