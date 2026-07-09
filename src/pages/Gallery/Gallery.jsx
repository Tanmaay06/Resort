import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../../data/gallery';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import GalleryCard from '../../components/cards/GalleryCard/GalleryCard';
import { RiCloseLine, RiCompass3Line } from 'react-icons/ri';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeItem, setActiveItem] = useState(null);

  const filters = ['all', 'rooms', 'dining', 'spa', 'activities', 'grounds'];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="overflow-x-hidden pt-20 bg-bgLight">
      {/* Sub-Hero Header */}
      <section className="relative h-[45vh] flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 w-full h-full opacity-65">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
            alt="Gallery Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">Media Library</span>
          <h1 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight">
            Visual Chronicles
          </h1>
        </div>
      </section>

      {/* Gallery Explorer */}
      <section className="py-24 bg-bgLight min-h-screen">
        <Container>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-4xl mx-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-inter text-[10px] tracking-luxury uppercase font-semibold px-5 py-2.5 rounded-full border transition-all duration-500 cursor-pointer ${
                  activeFilter === f
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white/60 text-charcoal text-opacity-80 border-primary border-opacity-5 hover:border-secondary hover:text-secondary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry Layout columns */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setActiveItem(item)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal with Captions */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveItem(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 text-white hover:text-secondary transition-colors focus:outline-none z-50 cursor-pointer"
            >
              <RiCloseLine size={32} />
            </button>

            {/* Photo Container */}
            <div className="relative max-w-5xl w-full flex flex-col items-center gap-4">
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                src={activeItem.image}
                alt={activeItem.title}
                className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded-lg border border-white/5"
              />

              {/* Caption Overlay */}
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-white max-w-xl px-4"
              >
                <h3 className="font-playfair text-lg sm:text-xl text-secondary mb-1">{activeItem.title}</h3>
                <span className="font-inter text-[9px] uppercase tracking-luxury text-white/55 font-semibold flex items-center justify-center gap-1.5">
                  <RiCompass3Line size={12} />
                  Category: {activeItem.category}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
