import React from 'react';
import { motion } from 'framer-motion';
import { spaPhilosophy, spaTreatments } from '../../../data/spa';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';

export const SpaPreview = () => {
  // Get first 3 treatments
  const signatures = spaTreatments.slice(0, 3);

  return (
    <section className="py-24 bg-[#FAF7F2]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-5 -right-5 w-3/4 h-3/4 bg-primary bg-opacity-5 z-0" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full hover-zoom-img shadow-xl aspect-[3/4] bg-primary-dark"
            >
              <img
                src={spaPhilosophy.images[0]}
                alt="Spa Treatment Sanctuary"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Copy block (7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-5 sm:gap-6"
          >
            <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium">
              Sanctuary of Healing
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-playfair text-charcoal leading-tight">
              A Haven of Stillness <br />
              <span className="font-editorial text-accent italic">and Rebalance</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
              {spaPhilosophy.overview}
            </p>
            
            <blockquote className="border-l-2 border-secondary pl-4 my-1.5 text-sm sm:text-base font-editorial italic text-primary">
              "{spaPhilosophy.quote}"
            </blockquote>

            {/* List of select therapies */}
            <div className="flex flex-col gap-3.5 mt-2">
              <h4 className="text-[9px] uppercase tracking-luxury text-charcoal font-semibold font-poppins">
                Signature Experiences
              </h4>
              <div className="flex flex-col gap-2.5">
                {signatures.map((tr) => (
                  <div key={tr.id} className="flex justify-between items-baseline border-b border-primary border-opacity-5 pb-1.5 text-xs sm:text-sm font-poppins">
                    <span className="text-charcoal font-medium">{tr.name}</span>
                    <span className="text-accent italic font-editorial text-xs shrink-0 pl-4">{tr.duration} / ₹{tr.price.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <Button to="/spa" variant="outline">
                Explore Spa Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SpaPreview;
