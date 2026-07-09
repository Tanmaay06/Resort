const defaultRooms = [
  {
    id: "crest-valley-villa",
    slug: "crest-valley-villa",
    name: "Crest Valley Villa",
    shortName: "Valley Villa",
    price: 25000,
    size: "180 m² / 1,937 ft²",
    occupancy: "Up to 3 Guests",
    bed: "King Size Bed",
    view: "Sahyadri Valley View",
    tagline: "Suspended above the mist-covered cliffs, where the sky and valleys merge.",
    description: "Our Crest Valley Villas offer an connection to the Sahyadri mountains. Cantilevered gently over the cliff edge, these sanctuaries feature private heated infinity plunge pools, extended outdoor wooden decks, and floor-to-ceiling glass panels that offer panoramic mountain views. The interior showcases organic stone, local woods, and a state-of-the-art marble bathroom with a deep soaking tub looking out to Lonavala's valleys.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Private Valley Infinity Pool",
      "24-Hour Dedicated Villa Host (Butler)",
      "Direct Nature Trail Access",
      "Outdoor Sun Deck & Daybed",
      "Soaking Tub with Valley View",
      "Nespresso Machine & Premium Tea Bar",
      "Walk-in Dressing Room",
      "State-of-the-art Sound System"
    ]
  },
  {
    id: "forest-sanctuary-villa",
    slug: "forest-sanctuary-villa",
    name: "Forest Sanctuary Villa",
    shortName: "Forest Sanctuary",
    price: 32000,
    size: "250 m² / 2,690 ft²",
    occupancy: "Up to 4 Guests",
    bed: "King Size Bed + Daybed",
    view: "Private Forest View",
    tagline: "A secluded woodland haven framed by lush trees and tranquil hills.",
    description: "Nestled amidst Lonavala's dense green flora, the Forest Sanctuary Villa provides absolute privacy and direct footsteps onto natural walking trails. The sprawling villa includes an extended timber terrace, a larger heated infinity pool, and a shaded outdoor pavilion with lounge seating and dining capabilities. Inside, a high-ceilinged lounge separates the master bedroom from the wellness bath area.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Secluded Forest Courtyard",
      "Private Shaded Dining Pavilion",
      "Outdoor Rain Forest Shower",
      "Heated 12-meter Infinity Pool",
      "Walk-in Wine Cellar Mini Bar",
      "24-Hour Butler & Chef Dining Privileges",
      "In-Villa Spa Treatment Area",
      "Premium Toiletries & Aromatherapy menu"
    ]
  },
  {
    id: "jungle-canopy-suite",
    slug: "jungle-canopy-suite",
    name: "Jungle Canopy Suite",
    shortName: "Canopy Suite",
    price: 18000,
    size: "120 m² / 1,291 ft²",
    occupancy: "Up to 2 Guests",
    bed: "King Size Bed",
    view: "Western Ghats Canopy View",
    tagline: "Hover above the treetops in a sanctuary of raw natural luxury.",
    description: "Elevated high on the hills, the Jungle Canopy Suite is an architectural masterpiece designed to harmonise with the surrounding rainforest. The suite features a dramatic cantilevered deck with a private plunge pool, offering views of the dense green canopy meeting the valley mist. Floor-to-ceiling glass screens slide away fully.",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1506461883276-594a12b11cc3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Cantilevered Heated Plunge Pool",
      "Elevated Forest Observation Deck",
      "Eco-Friendly Cooling System",
      "Hammock suspended over the forest floor",
      "Double Vanities & Stone Tub",
      "In-room binoculars for wildlife viewing",
      "Complimentary morning yoga setup",
      "Bose Sound System"
    ]
  },
  {
    id: "aaranya-presidential-reserve",
    slug: "aaranya-presidential-reserve",
    name: "The Aaranya Crest Presidential Reserve",
    shortName: "Presidential Reserve",
    price: 75000,
    size: "750 m² / 8,072 ft²",
    occupancy: "Up to 8 Guests",
    bed: "3 King Beds + 2 Twin Beds",
    view: "360-Degree Valley & Peak Vista",
    tagline: "The absolute pinnacle of luxury hospitality and total seclusion.",
    description: "Representing our most exclusive accommodation, the Aaranya Crest Presidential Reserve is a multi-structure compound situated on its own private cliffside peak. Accessible via a dedicated pathway or private helicopter shuttle, the estate comprises three master suites, multiple indoor-outdoor reception rooms, a private fitness studio, a cinema room, and a massive 25-meter infinity pool overlooking the valley.",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Private Cliffside Location & Helipad",
      "Dedicated Chef, Therapist & Butler Staff",
      "25-meter Private Olympic Infinity Pool",
      "Private Wellness Spa Suite & Gym",
      "Home Cinema & Executive Study",
      "Outdoor Dining Pavilion for 12",
      "Complimentary luxury airport transfer",
      "Custom loaded wine room and premium bar"
    ]
  }
];

if (!localStorage.getItem('aaranya_rooms')) {
  localStorage.setItem('aaranya_rooms', JSON.stringify(defaultRooms));
}

export const rooms = JSON.parse(localStorage.getItem('aaranya_rooms'));
export default rooms;
