const defaultDining = [
  {
    id: "the-cliffside-grill",
    name: "The Cliffside Grill",
    tagline: "Flame-grilled delicacies from the charcoal spit, served directly above the gorge.",
    cuisine: "Contemporary Fusion & Hillside Grill",
    hours: "Lunch: 12:00 PM - 3:30 PM | Dinner: 7:00 PM - 11:00 PM",
    description: "Suspended on timber decking directly over Lonavala's green ravines, The Cliffside Grill celebrates local gastronomy. Our culinary team works alongside regional farms to secure organic ingredients. Savour signature wood-fired meats, fresh herbs, and premium cuts prepared over charcoal. The open kitchen lets guests watch culinary artistry unfold against a backdrop of the setting sun over the Western Ghats.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    signatures: [
      "Smoked Himalayan Red Trout",
      "Wood-Fired Tandoori Lamb Chops",
      "Seared Wagyu A5 Striploin with Wild Honey Emulsion",
      "Aaranya Crest Signature Caviar & Champagne Pairing"
    ],
    features: [
      "Cliffside seating overlooking the valley",
      "Organic regional spice pairings",
      "Interactive open grill kitchen",
      "Extensive red wine & single malt cellar"
    ]
  },
  {
    id: "saarang",
    name: "Saarang",
    tagline: "A majestic culinary journey showcasing the rich heritage of Indian royal cuisines.",
    cuisine: "Royal Awadhi, Mughlai & Coastal Indian Fine Dining",
    hours: "Lunch: 12:30 PM - 3:30 PM | Dinner: 7:00 PM - 11:30 PM",
    description: "Located inside a royal court-inspired pavilion overlooking the valleys, Saarang offers a premium Indian dining experience. We celebrate the rich heritage of spices, slow-cooking techniques, and heirloom recipes passed down through generations. From hand-crafted Awadhi kebabs to rich coastal fish curries and slow-dum biryanis, each dish is a tribute to regional Indian gastronomy.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80",
    signatures: [
      "Slow-Dum Awadhi Goat Biryani",
      "Tandoori Lobster with Saffron Butter Emulsion",
      "Saarang Signature Dal Makhani (slow-cooked for 24 hours)",
      "Cardamom Infused Shahi Tukda with Rose Petal Rabri"
    ],
    features: [
      "Royal court-inspired indoor-outdoor setting",
      "Heritage slow-cooking & live charcoal spit",
      "Interactive chef tables & spice-pairing vault",
      "Handcrafted copper & gold tableware"
    ]
  },
  {
    id: "the-sunset-lounge",
    name: "The Sunset Lounge",
    tagline: "Sophisticated mixology and rare spirits atop the hill's highest peak.",
    cuisine: "Artisan Tapas & Signature Mixology",
    hours: "4:00 PM - 11:00 PM",
    description: "The Sunset Lounge is an open-air pavilion located at the resort's highest elevation point. Designed with low-slung, luxurious daybeds and a central glowing stone bar, it is the perfect spot for pre-dinner aperitifs or late-night stargazing. Sip curated cocktails infused with local forest herbs and spices, or explore our collection of single malts and cognacs.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    signatures: [
      "The Aaranya Negroni (aged in oak barrels)",
      "Spiced Mango & Ginger Collins",
      "Truffle-Infused Slider Slits",
      "Bespoke Cigar Selection"
    ],
    features: [
      "Panoramic valley views",
      "Live ambient acoustic & lounge beats",
      "Custom smoke cocktails & mixology classes",
      "Stargazing telescope deck"
    ]
  }
];

const getStoredDining = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('aaranya_dining');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      localStorage.setItem('aaranya_dining', JSON.stringify(defaultDining));
    }
  } catch (e) {
    console.error("Error reading aaranya_dining from localStorage", e);
  }
  return defaultDining;
};

export const dining = getStoredDining();
export default dining;
