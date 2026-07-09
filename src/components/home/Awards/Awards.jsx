import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';

export const Awards = () => {
  const awardsList = [
    {
      year: "2026",
      title: "Forbes Five-Star Award",
      issuer: "Forbes Travel Guide",
      detail: "Recognized for impeccable service, attention to detail, and ultra-luxury wellness facilities."
    },
    {
      year: "2025",
      title: "Gold List Sanctuary",
      issuer: "Condé Nast Traveler",
      detail: "Voted among the Top 10 Private Island Resorts globally by elite travelers."
    },
    {
      year: "2025",
      title: "Sustainable Resort Star",
      issuer: "EcoGlobal Hospitality",
      detail: "Awarded for 100% carbon-neutral energy initiatives and coral reef conservation."
    },
    {
      year: "2024",
      title: "World Culinary Pinnacle",
      issuer: "Michelin Guide Key",
      detail: "Acknowledged for exceptional gastronomy and chef-in-residence excellence."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-b border-primary border-opacity-5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Header */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium">
              Elite Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-playfair text-charcoal leading-tight">
              Prestige <br />
              <span className="font-editorial text-accent italic">and Accolades</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal text-opacity-60 leading-relaxed font-poppins mt-2">
              Our continuous pursuit of hospitality perfection is reflected in the honors bestowed upon Aaranya Crest by the world's most prestigious travel arbiters.
            </p>
          </div>

          {/* Accolades grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {awardsList.map((aw, index) => (
              <motion.div
                key={aw.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2 p-5 border-l border-secondary border-opacity-40 pl-6 hover:bg-bgLight transition-colors"
              >
                <span className="text-[10px] uppercase font-poppins text-accent tracking-widest font-semibold">{aw.year} &nbsp;•&nbsp; {aw.issuer}</span>
                <h3 className="text-lg font-light font-playfair text-charcoal tracking-wide">{aw.title}</h3>
                <p className="text-xs text-charcoal text-opacity-65 leading-relaxed font-poppins">{aw.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Awards;
