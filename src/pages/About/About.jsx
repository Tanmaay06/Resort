import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { landmarks } from '../../data/landmarks';
import { RiCloseLine, RiCompass3Line } from 'react-icons/ri';

export const About = () => {
  const getStoredLandmarks = () => {
    try {
      const stored = localStorage.getItem('aaranya_landmarks');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return landmarks;
  };

  const [landmarksList] = useState(getStoredLandmarks());
  const [activeLandmark, setActiveLandmark] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
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
            {landmarksList.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  setActiveLandmark(item);
                  setActivePhotoIndex(0);
                }}
                className="bg-[#FAF7F2] border border-primary border-opacity-5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full cursor-pointer group"
              >
                {/* Image Header */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-primary-dark relative">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/40 text-xs font-inter"><RiCompass3Line size={24} /></div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-primary bg-opacity-95 backdrop-blur-xs text-white text-[9px] uppercase tracking-luxury font-medium py-1 px-2.5 rounded-sm">
                    {item.distance}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col gap-2 flex-grow">
                  <h3 className="text-base font-medium font-playfair text-charcoal group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins line-clamp-3">
                    {item.description}
                  </p>
                  <span className="text-[9px] uppercase tracking-widest text-accent-dark font-semibold mt-auto flex items-center gap-1">
                    Explore Details & Photos →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {activeLandmark && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4 overflow-y-auto cursor-zoom-out"
            onClick={() => setActiveLandmark(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full bg-white border border-primary/5 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 text-charcoal cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLandmark(null)}
                className="absolute top-4 right-4 text-charcoal/40 hover:text-primary transition-colors focus:outline-none z-50 cursor-pointer p-1.5 hover:bg-bgLight rounded-full"
              >
                <RiCloseLine size={24} />
              </button>

              {/* Left Column: Slideshow / Media */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                {/* Main Large Photo */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-primary-dark rounded-xl shadow-inner relative">
                  <img
                    src={activeLandmark.images && activeLandmark.images[activePhotoIndex] ? activeLandmark.images[activePhotoIndex] : activeLandmark.image}
                    alt={activeLandmark.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-white text-[9px] uppercase tracking-luxury font-medium py-1.5 px-3 rounded-sm shadow-md">
                    {activeLandmark.distance}
                  </div>
                </div>

                {/* Thumbnails grid */}
                {activeLandmark.images && activeLandmark.images.length > 1 && (
                  <div className="flex gap-2.5 overflow-x-auto py-1">
                    {activeLandmark.images.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`w-16 h-12 rounded-lg cursor-pointer overflow-hidden border-2 shrink-0 ${
                          activePhotoIndex === idx ? 'border-secondary' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${activeLandmark.name} thumb ${idx}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Information Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
                <span className="editorial-sub tracking-luxury uppercase text-xs font-semibold text-accent-dark">
                  Landmark Attraction
                </span>
                <h2 className="text-2xl sm:text-3xl font-light font-playfair text-primary leading-tight">
                  {activeLandmark.name}
                </h2>
                <div className="h-[1.5px] w-12 bg-secondary" />
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-poppins">
                  {activeLandmark.description}
                </p>
                <div className="mt-2.5 p-4 bg-bgLight rounded-xl border border-primary/5 text-[10px] uppercase tracking-luxury text-charcoal/60 font-semibold font-poppins">
                  📍 Distance: {activeLandmark.distance}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
