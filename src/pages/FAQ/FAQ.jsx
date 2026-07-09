import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

export const FAQ = () => {
  const faqData = [
    {
      category: "Reservations & Rates",
      questions: [
        {
          q: "What is your booking cancellation policy?",
          a: "Due to our intimate scale and remote private island location, cancellations must be registered at least 30 days prior to your planned arrival date for a full refund of deposit. Cancellations within 30 days forfeit the deposit, though we allow rescheduling to other dates within 12 months based on rate adjustments."
        },
        {
          q: "What is included in the nightly suite rate?",
          a: "All room rates include luxury return speedboat transfers from the international airport jetty, daily organic farm-to-table breakfast served in-villa or at Luna & Sol, dedicated 24-hour Villa Host (butler) services, daily wellness setup, and complimentary non-motorized water sports (paddleboards, kayaking)."
        },
        {
          q: "Are flights included in the booking rate?",
          a: "No, international flights are not included. However, once you land at Mahé International Airport (SEZ), our airport representative will greet you at customs and escort you directly to our private speedboat transfer or helicopter charter terminal."
        }
      ]
    },
    {
      category: "Stay Details & Rules",
      questions: [
        {
          q: "What are your check-in and check-out times?",
          a: "Check-in begins at 2:00 PM, and check-out is scheduled for 11:00 AM. If your arrival or departure falls outside these hours, please inform your Villa Host ahead of time so we can arrange library lounge access or custom suite adjustments."
        },
        {
          q: "Does Aaranya Crest welcome children?",
          a: "Yes, we welcome guests of all ages. We offer a dedicated kids' ecological discovery club, 'Aaranya Crest Seedlings', and can arrange professional in-villa babysitting services. Some suites, like the Jungle Canopy, are limited to adult guests due to cliff elevations."
        },
        {
          q: "Is there a guest dress code at the resort?",
          a: "We embrace elegant resort comfort. The daytime dress code is light resort casual. For dinner at The Cliffside Grill and Luna & Sol, we request sophisticated smart-casual attire (collared shirts, elegant dresses, closed footwear)."
        }
      ]
    },
    {
      category: "Travel & Helipad Access",
      questions: [
        {
          q: "How do I arrange a private helicopter arrival?",
          a: "Helicopter transfers can be selected in the upgrades section of our stay builder or scheduled through your butler. The flight takes approximately 20 minutes from Mumbai or Pune Airport and lands on our private northern cliff helipad. Rates start at ₹45,000 per flight path (max 4 passengers with standard luggage)."
        },
        {
          q: "Do you offer medical facilities at the resort?",
          a: "Yes, Aaranya Crest has a fully equipped first-aid clinic with a resident medical responder available 24/7. For advanced medical emergencies, rapid road or air evacuation to the nearest multi-specialty hospital in Pune is available."
        }
      ]
    }
  ];

  // Accordion open tracker: categoryIdx-questionIdx (e.g. '0-1')
  const [openIndex, setOpenIndex] = useState('0-0');

  const toggleAccordion = (indexStr) => {
    setOpenIndex(openIndex === indexStr ? null : indexStr);
  };

  return (
    <div className="overflow-x-hidden pt-20 bg-white min-h-screen pb-24">
      {/* Sub-Hero Header */}
      <section className="relative h-[45vh] flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 w-full h-full opacity-65">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
            alt="FAQ Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">Guest support</span>
          <h1 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight">
            Frequently Answered
          </h1>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-24 bg-bgLight">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-12 text-charcoal">
            {faqData.map((cat, catIdx) => (
              <div key={cat.category} className="flex flex-col gap-4">
                {/* Category Header */}
                <h3 className="font-playfair text-lg text-primary tracking-wide font-normal border-b border-primary border-opacity-5 pb-3">
                  {cat.category}
                </h3>
                
                {/* Questions list */}
                <div className="flex flex-col gap-3">
                  {cat.questions.map((faq, faqIdx) => {
                    const idxStr = `${catIdx}-${faqIdx}`;
                    const isOpen = openIndex === idxStr;

                    return (
                      <div
                        key={faq.q}
                        className="bg-white border border-primary border-opacity-5 overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleAccordion(idxStr)}
                          className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none hover:bg-bgLight transition-colors cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm font-poppins font-medium pr-4 leading-normal">
                            {faq.q}
                          </span>
                          <span className="text-accent shrink-0">
                            {isOpen ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden bg-[#FAF7F2]"
                            >
                              <p className="p-6 text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins border-t border-primary border-opacity-5">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FAQ;
