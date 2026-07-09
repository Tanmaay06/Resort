const defaultActivities = [
  {
    id: "monsoon-waterfall",
    name: "Monsoon Waterfall Trail",
    tagline: "Explore seasonal waterfalls and valley streams hidden in Lonavala's hills.",
    price: 1200,
    duration: "3 Hours",
    difficulty: "Moderate",
    description: "During the rainy season, the Sahyadri hills come alive with cascading waterfalls. Hike through forests and streams with our local guides, discover hidden pools, and enjoy hot tea and local snacks by the water.",
    image: "https://images.unsplash.com/photo-1590055531813-a38228ee75d1?auto=format&fit=crop&w=800&q=80",
    inclusions: [
      "Experienced local guide",
      "Rainwear and safety gear",
      "Hot tea and local snacks",
      "First aid and dry bags"
    ]
  },
  {
    id: "trekking-expedition",
    name: "Trekking Expeditions",
    tagline: "Explore scenic forest trails and nearby hills with experienced guides.",
    price: 1500,
    duration: "4 Hours",
    difficulty: "Moderate",
    description: "Hike along trails leading to panoramic viewpoints of Lonavala's valleys and historical fort ruins. Learn about regional plants and birds, and enjoy a fresh morning breakfast at the summit.",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cc3?auto=format&fit=crop&w=800&q=80",
    inclusions: [
      "Guided forest hike",
      "Packed trail breakfast",
      "Refillable water bottle",
      "Trekking poles"
    ]
  },
  {
    id: "mountain-cycling",
    name: "Mountain Cycling",
    tagline: "Ride premium mountain bikes across forest and valley trails.",
    price: 1000,
    duration: "2 Hours",
    difficulty: "Moderate",
    description: "Explore the rugged terrain surrounding the resort on our premium mountain bikes. Ride through shaded woods and open valley ridges with a safety instructor guiding the way.",
    image: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?auto=format&fit=crop&w=800&q=80",
    inclusions: [
      "Premium mountain bike",
      "Safety helmet and pads",
      "Energy drinks and bars",
      "Instructor assistance"
    ]
  },
  {
    id: "yoga-sessions",
    name: "Sunrise Yoga & Meditation",
    tagline: "Start your mornings with guided yoga overlooking serene valley landscapes.",
    price: 800,
    duration: "1.5 Hours",
    difficulty: "Gentle",
    description: "Join our early morning wellness sessions on the wooden sunset deck. Practice traditional breathing techniques (Pranayama) and gentle stretching to relax your mind in the fresh mountain air.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    inclusions: [
      "Certified yoga instructor",
      "Premium herbal mats and blocks",
      "Fresh organic juices",
      "Meditation cushion"
    ]
  },
  {
    id: "cooking-workshop",
    name: "Regional Cooking Workshop",
    tagline: "Learn to prepare authentic Maharashtrian delicacies with our chefs.",
    price: 2500,
    duration: "2.5 Hours",
    difficulty: "Gentle",
    description: "Walk through our organic garden to pick fresh herbs and spices. Then, join our chef in the open-air kitchen to learn step-by-step methods of cooking regional Indian dishes.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    inclusions: [
      "Organic garden harvest tour",
      "Hands-on cooking station",
      "Three-course lunch",
      "Printed recipe booklet"
    ]
  },
  {
    id: "candlelight-dinner",
    name: "Private Candlelight Dinner",
    tagline: "A private, fine-dining table set under the stars with custom decor.",
    price: 12000,
    duration: "3 Hours",
    difficulty: "Gentle",
    description: "Celebrate special occasions with a private table set in our quiet garden space. Enjoy a customized multi-course gourmet menu prepared by a personal chef with dedicated butler service.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    inclusions: [
      "Private decorated garden setup",
      "Customized five-course menu",
      "Personal chef & butler",
      "Welcome drinks and fresh flowers"
    ]
  }
];

const getStoredActivities = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('aaranya_activities');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      localStorage.setItem('aaranya_activities', JSON.stringify(defaultActivities));
    }
  } catch (e) {
    console.error("Error reading aaranya_activities from localStorage", e);
  }
  return defaultActivities;
};

export const activities = getStoredActivities();
export default activities;
