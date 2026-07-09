import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';

export const About = () => {
  return (
    <div className="overflow-x-hidden pt-20">
      {/* 1. Sub-Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 w-full h-full opacity-60">
          <img
            src="/images/about-hero.jpg"
            alt="Resort Grounds"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">Our Heritage</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light font-playfair tracking-wide leading-tight">
            The Story of <span className="font-editorial text-secondary italic">Aaranya Crest</span>
          </h1>
        </div>
      </section>

      {/* 2. Brand Story / Philosophy */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium">Bespoke Sanctuary</span>
              <h2 className="text-2xl sm:text-4xl font-light font-playfair text-charcoal">
                Designed to Exist in Harmony
              </h2>
              <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
                Founded in 2018, Aaranya Crest was conceived as a space where guests could disconnect fully from the accelerating tempo of modern life. The choice of Lonavala's misty valleys was deliberate—a location where the raw forces of the monsoons meet the tranquil hills of the Sahyadris.
              </p>
              <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
                Our name, derived from the Sanskrit word for 'Forest', governs our guest philosophy. We believe that true luxury is not loud or ostentatious; it is the gift of space, of silence, and of tailored encounters that leave a lasting imprint on the soul.
              </p>
            </motion.div>
            
            <div className="relative hover-zoom-img shadow-xl aspect-[4/3] bg-primary-dark">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Tropical Island Villa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Architecture & Design */}
      <section className="py-24 bg-[#FAF7F2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="order-2 lg:order-1 relative hover-zoom-img shadow-xl aspect-[4/3] bg-primary-dark">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
                alt="Teak Wood Interior"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 flex flex-col gap-6"
            >
              <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium">Tropical Minimalism</span>
              <h2 className="text-2xl sm:text-4xl font-light font-playfair text-charcoal">
                Architectural Simplicity
              </h2>
              <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
                The villas of Aaranya Crest are a study in tropical modernism. Created using local volcanic stone, honey-toned teak, and structural steel, the buildings enable wide cantilevered spaces that open up to dramatic mountain views.
              </p>
              <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
                By designing open-sided pavilions that utilize natural airflow instead of rigid concrete partitions, the boundaries between the interior spaces and the wild external flora are dissolved.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4. Nearby Locations */}
      <section id="nearby-locations" className="py-24 bg-white">
        <Container>
          <SectionTitle
            title="Explore Lonavala's Landmarks"
            subtitle="Nearby Attractions"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#FAF7F2] border border-primary border-opacity-5 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-accent-dark font-editorial italic text-xs block">1 KM • 5 Mins Drive</span>
              <h3 className="text-base font-medium font-playfair text-charcoal">Bhushi Dam</h3>
              <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins">
                A popular water reservoir where monsoon rains create scenic streams flowing over stone steps, surrounded by forest peaks.
              </p>
            </div>
            
            <div className="bg-[#FAF7F2] border border-primary border-opacity-5 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-accent-dark font-editorial italic text-xs block">5 KM • 15 Mins Drive</span>
              <h3 className="text-base font-medium font-playfair text-charcoal">Tiger Point</h3>
              <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins">
                A high-altitude cliffside viewpoint offering panoramic views of deep gorges, clouds, and seasonal waterfalls.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-primary border-opacity-5 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-accent-dark font-editorial italic text-xs block">12 KM • 25 Mins Drive</span>
              <h3 className="text-base font-medium font-playfair text-charcoal">Karla Caves</h3>
              <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins">
                Ancient 2nd Century BC rock-cut Buddhist shrines featuring towering columns, arched roofs, and stupa halls.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-primary border-opacity-5 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-accent-dark font-editorial italic text-xs block">15 KM • 35 Mins Drive</span>
              <h3 className="text-base font-medium font-playfair text-charcoal">Pawna Lake</h3>
              <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins">
                A serene lake surrounded by green mountain ridges and historic forts, ideal for boating and sunset views.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
