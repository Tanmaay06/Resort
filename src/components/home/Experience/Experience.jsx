import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';

export const Experience = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium">
              Bespoke Hospitality
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-playfair text-charcoal leading-tight">
              A Private Universe <br />
              <span className="font-editorial text-accent italic">Designed for You</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
              Aaranya Crest is not just a destination; it is a philosophy of living. Nestled amidst lush green hills and tranquil landscapes of Lonavala, our resort embraces architectural minimalist lines that dissolve into the surrounding forest and Bhushi Valley.
            </p>
            <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
              With a 3-to-1 staff-to-guest ratio, every request is silently anticipated. Whether it is a private sunrise yoga session on the cliffs, a custom spa lineage oil formulation, or a dining table set under a blanket of stars, your journey is curated by dedicated hosts.
            </p>
            <div className="mt-4">
              <Button to="/about" variant="outline">
                Our Story & Philosophy
              </Button>
            </div>
          </motion.div>

          {/* Visual block */}
          <div className="relative flex justify-center items-center">
            {/* Background block */}
            <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 bg-accent bg-opacity-5 z-0" />
            
            {/* Main Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full hover-zoom-img shadow-2xl border border-primary border-opacity-5 aspect-[4/3] bg-primary-dark"
            >
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
                alt="Infinity Pool"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlapping Picture */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-12 -right-8 w-2/5 aspect-square z-20 shadow-2xl border-4 border-white overflow-hidden hidden sm:block bg-primary-dark"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                alt="Sandy beach sunset"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
