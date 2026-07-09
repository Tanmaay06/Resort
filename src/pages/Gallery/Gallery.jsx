import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../../data/gallery';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import GalleryCard from '../../components/cards/GalleryCard/GalleryCard';
import { RiCloseLine } from 'react-icons/ri';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const filters = ['all', 'rooms', 'dining', 'spa', 'activities', 'grounds'];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="overflow-x-hidden pt-20">
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
      <section className="py-24 bg-white min-h-screen">
        <Container>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-poppins text-[10px] tracking-luxury uppercase font-medium px-5 py-2.5 border transition-all duration-500 ${
                  activeFilter === f
                    ? 'bg-primary text-white border-primary'
                    : 'bg-transparent text-charcoal text-opacity-65 border-primary border-opacity-10 hover:border-secondary hover:text-secondary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid display with layout transitions */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  onClick={() => setActiveImage(item.image)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-[999] flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white hover:text-secondary transition-colors focus:outline-none"
            >
              <RiCloseLine size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              src={activeImage}
              alt="Enlarged View"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white border-opacity-5"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
