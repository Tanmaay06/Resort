import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../../../data/gallery';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Container from '../../common/Container/Container';
import GalleryCard from '../../cards/GalleryCard/GalleryCard';
import Button from '../../common/Button/Button';
import { RiCloseLine } from 'react-icons/ri';

export const GalleryPreview = () => {
  // Show first 6 items
  const previewItems = galleryItems.slice(0, 6);
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Capturing the Essence"
          subtitle="Visual Gallery"
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setActiveImage(item.image)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </Container>

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
    </section>
  );
};

export default GalleryPreview;
