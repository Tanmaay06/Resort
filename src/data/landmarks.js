const defaultLandmarks = [
  {
    id: "bhushi-dam",
    name: "Bhushi Dam",
    distance: "1 KM • 5 Mins Drive",
    description: "A popular water reservoir where monsoon rains create scenic streams flowing over stone steps, surrounded by forest peaks.",
    image: "https://images.unsplash.com/photo-1590055531813-a38228ee75d1?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1590055531813-a38228ee75d1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "tiger-point",
    name: "Tiger Point",
    distance: "5 KM • 15 Mins Drive",
    description: "A high-altitude cliffside viewpoint offering panoramic views of deep gorges, clouds, and seasonal waterfalls.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "karla-caves",
    name: "Karla Caves",
    distance: "12 KM • 25 Mins Drive",
    description: "Ancient 2nd Century BC rock-cut Buddhist shrines featuring towering columns, arched roofs, and stupa halls.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "pawna-lake",
    name: "Pawna Lake",
    distance: "15 KM • 35 Mins Drive",
    description: "A serene lake surrounded by green mountain ridges and historic forts, ideal for boating and sunset views.",
    image: "https://images.unsplash.com/photo-1505080856163-26759885867d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505080856163-26759885867d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const getStoredLandmarks = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('aaranya_landmarks');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      localStorage.setItem('aaranya_landmarks', JSON.stringify(defaultLandmarks));
    }
  } catch (e) {
    console.error("Error reading aaranya_landmarks from localStorage", e);
  }
  return defaultLandmarks;
};

export const landmarks = getStoredLandmarks();
export default landmarks;
