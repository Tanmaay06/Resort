const defaultOffers = [
  {
    id: "romantic-escape",
    name: "The Romantic Escape",
    tagline: "Celebrate special moments in absolute privacy and natural elegance.",
    description: "Indulge in a curated 4-night stay in our Crest Valley Villa, featuring private sunset lake cruises, cliffside candlelit dining, and couples wellness treatments designed to relax the mind.",
    badge: "Exclusive Romantic Package",
    inclusions: [
      "4 Nights in a Crest Valley Villa",
      "Daily breakfast served in-villa by a private host",
      "A 3-hour private sunset lake cruise with snacks on Pawna Lake",
      "Candlelit five-course dinner overlooking Bhushi Valley",
      "90-minute couples Signature Massage at the Spa"
    ],
    price: 95000,
    validUntil: "December 20, 2026",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "holistic-wellness-retreat",
    name: "Holistic Rebalance Retreat",
    tagline: "A restorative retreat dedicated to vitality and peace.",
    description: "Relax your mind and body with a 5-night wellness journey. Includes personalized dietary consultations, daily yoga, sound bath therapies, and custom spa packages.",
    badge: "Wellness Program",
    inclusions: [
      "5 Nights in a Jungle Canopy Suite",
      "Personalized organic meal plans at Luna & Sol",
      "Daily 90-minute customized spa treatments",
      "Private daily yoga and breathing (Pranayama) sessions",
      "A personal energy balancing sound bath therapy session"
    ],
    price: 75000,
    validUntil: "November 15, 2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "island-discovery",
    name: "Western Ghats Discovery",
    tagline: "The ultimate active stay package for the discerning traveler.",
    description: "Explore Lonavala by air and land with this 3-night active luxury package, complete with private helicopter flights, heritage cave safaris, and nature walks.",
    badge: "Adventure Package",
    inclusions: [
      "3 Nights in a Forest Sanctuary Villa",
      "45-minute scenic helicopter flight over Rajmachi Fort and valleys",
      "Guided Karla Caves safari tour with an expert guide",
      "Complimentary use of cycles, outdoor games, and trails",
      "Private transfers from Mumbai or Pune"
    ],
    price: 60000,
    validUntil: "October 30, 2026",
    image: "https://images.unsplash.com/photo-1505080856163-26759885867d?auto=format&fit=crop&w=800&q=80"
  }
];

if (!localStorage.getItem('aaranya_offers')) {
  localStorage.setItem('aaranya_offers', JSON.stringify(defaultOffers));
}

export const offers = JSON.parse(localStorage.getItem('aaranya_offers'));
export default offers;
