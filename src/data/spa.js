const defaultSpaTreatments = [
  {
    id: "aaranya-signature-massage",
    name: "Aaranya Signature Massage",
    category: "Massages",
    duration: "90 Minutes",
    price: 6500,
    description: "A rhythmic, flowing full-body massage utilizing warm herbal oils and polished volcanic stones. Helps release deep muscular tension, promotes circulation, and balances energetic flow.",
    benefits: ["Releases chronic muscle tension", "Aids lymphatic drainage", "Deep relaxation through heat therapy"]
  },
  {
    id: "deep-forest-detox-facial",
    name: "Deep Forest Detox Facial",
    category: "Facials",
    duration: "75 Minutes",
    price: 4500,
    description: "A purified treatment utilizing mineral-rich volcanic silt, organic floral waters, and cold-pressed herbal extracts. Restores natural radiance and hydrates the deeper skin layers.",
    benefits: ["Exfoliates & extracts impurities", "Plumps fine lines", "Boosts collagen production"]
  },
  {
    id: "himalayan-sound-bath",
    name: "Himalayan Sound Bath & Energy Balancing",
    category: "Holistic Therapies",
    duration: "60 Minutes",
    price: 3500,
    description: "A meditative sound therapy utilizing authentic hand-hammered Tibetan singing bowls. Vibrational frequencies align brainwaves to delta state, restoring inner tranquility.",
    benefits: ["Calms the nervous system", "Reduces mental anxiety", "Restores vibrational harmony"]
  },
  {
    id: "detoxifying-scrub-wrap",
    name: "Organic Coffee & Sea Salt Wrap",
    category: "Body Scrubs & Wraps",
    duration: "90 Minutes",
    price: 5500,
    description: "A dynamic exfoliation using freshly ground organic highland coffee beans and fine sea salt, followed by a warm volcanic clay cocoon wrap to draw out impurities.",
    benefits: ["Combats cellulite appearance", "Intensely hydrates and tones skin", "Stimulates cellular regeneration"]
  }
];

const defaultSpaPackages = [
  {
    id: "forest-renewal-package",
    name: "Forest Renewal Sanctuary",
    duration: "3.5 Hours",
    price: 15000,
    treatments: ["Coffee Body Exfoliation", "Signature Volcanic Mud Wrap", "Aaranya Signature Massage", "Custom Oxygen Hydrating Facial"],
    description: "A spa program designed to restore cellular vitality. Includes a light healthy lunch served in our forest relaxation garden."
  },
  {
    id: "prana-mindfulness-retreat",
    name: "Prana Mindfulness Retreat",
    duration: "3 Hours",
    price: 12000,
    treatments: ["60-minute Private Yoga & Pranayama", "Himalayan Sound Bath", "90-minute Ayurvedic Abhyanga Massage"],
    description: "Designed for mental decompression and resetting. Conducted in our open-air valley viewpoint pavilion."
  }
];

const defaultSpaPhilosophy = {
  quote: "Stillness of mind is the source of health.",
  overview: "Aaranya Crest Wellness is built upon three pillars: mountain air, herbal cures, and sound resonance. Nestled on a quiet forest ridge in Lonavala, the spa features open-air suites, a hydrotherapy steam circuit, and relaxation gardens overlooking the green valley.",
  images: [
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80"
  ]
};

if (!localStorage.getItem('aaranya_spa_treatments')) {
  localStorage.setItem('aaranya_spa_treatments', JSON.stringify(defaultSpaTreatments));
}
if (!localStorage.getItem('aaranya_spa_packages')) {
  localStorage.setItem('aaranya_spa_packages', JSON.stringify(defaultSpaPackages));
}
if (!localStorage.getItem('aaranya_spa_philosophy')) {
  localStorage.setItem('aaranya_spa_philosophy', JSON.stringify(defaultSpaPhilosophy));
}

export const spaTreatments = JSON.parse(localStorage.getItem('aaranya_spa_treatments'));
export const spaPackages = JSON.parse(localStorage.getItem('aaranya_spa_packages'));
export const spaPhilosophy = JSON.parse(localStorage.getItem('aaranya_spa_philosophy'));
