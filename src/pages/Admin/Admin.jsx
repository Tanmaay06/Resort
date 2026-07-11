import React, { useState } from 'react';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import Button from '../../components/common/Button/Button';
import { 
  RiHotelLine, 
  RiCompass3Line, 
  RiCoinsLine, 
  RiRestaurantLine, 
  RiImageLine, 
  RiLeafLine, 
  RiEditLine, 
  RiDeleteBinLine, 
  RiAddLine, 
  RiSaveLine,
  RiArrowLeftLine,
  RiCheckLine,
  RiCloseLine,
  RiMapPinLine,
  RiDownloadLine,
  RiUploadCloudLine
} from 'react-icons/ri';
import { landmarks } from '../../data/landmarks';

export const Admin = () => {
  // Authorization Gate
  const [isAuthorized, setIsAuthorized] = useState(
    sessionStorage.getItem('aaranya_admin_auth') === 'true'
  );
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);

  const [activeTab, setActiveTab] = useState('rooms');
  const [editItem, setEditItem] = useState(null); // The item currently being edited
  const [isAdding, setIsAdding] = useState(false); // True if creating a new item
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Load latest data from localStorage
  const getRooms = () => JSON.parse(localStorage.getItem('aaranya_rooms')) || [];
  const getActivities = () => JSON.parse(localStorage.getItem('aaranya_activities')) || [];
  const getOffers = () => JSON.parse(localStorage.getItem('aaranya_offers')) || [];
  const getDining = () => JSON.parse(localStorage.getItem('aaranya_dining')) || [];
  const getGallery = () => JSON.parse(localStorage.getItem('aaranya_gallery')) || [];
  const getSpa = () => JSON.parse(localStorage.getItem('aaranya_spa_treatments')) || [];
  const getLandmarks = () => JSON.parse(localStorage.getItem('aaranya_landmarks')) || [];

  const [roomsData, setRoomsData] = useState(getRooms());
  const [activitiesData, setActivitiesData] = useState(getActivities());
  const [offersData, setOffersData] = useState(getOffers());
  const [diningData, setDiningData] = useState(getDining());
  const [galleryData, setGalleryData] = useState(getGallery());
  const [spaData, setSpaData] = useState(getSpa());
  const [landmarksData, setLandmarksData] = useState(getLandmarks());

  const tabs = [
    { id: 'rooms', label: 'Rooms & Suites', icon: <RiHotelLine /> },
    { id: 'activities', label: 'Activities', icon: <RiCompass3Line /> },
    { id: 'offers', label: 'Exclusive Offers', icon: <RiCoinsLine /> },
    { id: 'dining', label: 'Dining Outlets', icon: <RiRestaurantLine /> },
    { id: 'spa', label: 'Spa Treatments', icon: <RiLeafLine /> },
    { id: 'landmarks', label: 'Nearby Attractions', icon: <RiMapPinLine /> },
    { id: 'gallery', label: 'Gallery Media', icon: <RiImageLine /> },
    { id: 'deployment', label: 'Export / Deploy', icon: <RiUploadCloudLine /> }
  ];

  const generateExportCode = (type) => {
    let dataVar = '';
    let defaultVarName = '';
    let storageKey = '';
    let exportVarName = '';

    if (type === 'rooms') {
      dataVar = JSON.stringify(roomsData, null, 2);
      defaultVarName = 'defaultRooms';
      storageKey = 'aaranya_rooms';
      exportVarName = 'rooms';
    } else if (type === 'activities') {
      dataVar = JSON.stringify(activitiesData, null, 2);
      defaultVarName = 'defaultActivities';
      storageKey = 'aaranya_activities';
      exportVarName = 'activities';
    } else if (type === 'offers') {
      dataVar = JSON.stringify(offersData, null, 2);
      defaultVarName = 'defaultOffers';
      storageKey = 'aaranya_offers';
      exportVarName = 'offers';
    } else if (type === 'dining') {
      dataVar = JSON.stringify(diningData, null, 2);
      defaultVarName = 'defaultDining';
      storageKey = 'aaranya_dining';
      exportVarName = 'dining';
    } else if (type === 'spa') {
      dataVar = JSON.stringify(spaData, null, 2);
      defaultVarName = 'defaultSpaTreatments';
      storageKey = 'aaranya_spa_treatments';
      exportVarName = 'spaTreatments';
    } else if (type === 'landmarks') {
      dataVar = JSON.stringify(landmarksData, null, 2);
      defaultVarName = 'defaultLandmarks';
      storageKey = 'aaranya_landmarks';
      exportVarName = 'landmarks';
    } else if (type === 'gallery') {
      dataVar = JSON.stringify(galleryData, null, 2);
      defaultVarName = 'defaultGallery';
      storageKey = 'aaranya_gallery';
      exportVarName = 'gallery';
    }

    if (type === 'spa') {
      return `// Aaranya Crest Spa Data
// Generated from Admin Console for Vercel Deployment

export const spaPhilosophy = {
  overview: "Located high in Lonavala's hills, the Spa at Aaranya Crest is a sanctuary of holistic wellness. We blend ancient Indian healing systems—including Ayurveda and Himalayan sound therapies—with modern organic skincare treatments. Each therapy is designed to rebalance the body's natural energetic fields (prana) and release emotional and physical blockages.",
  quote: "Quieten the mind, restore the body, realign the spirit.",
  images: [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "/images/spa-hero.jpg"
  ]
};

const defaultSpaTreatments = ${dataVar};

const defaultSpaPackages = [
  {
    id: "forest-renewal-package",
    name: "Forest Renewal Sanctuary",
    duration: "3.5 Hours",
    price: 15000,
    description: "A complete holistic journey designed to detoxify the physical body and quiet the mind. Includes a personalized herbal steam bath, a custom deep tissue massage, a natural forest detox facial, and a concluding sound therapy session.",
    treatments: [
      "Signature Herbal Steam & Forest Scrub",
      "90-minute Deep Forest Aromatherapy Massage",
      "Botanical Radiance Facial & Scalp treatment",
      "Singing Bowls Sound Meditation & Herbal Tea Service"
    ]
  },
  {
    id: "prana-mindfulness-retreat",
    name: "Prana Mindfulness Retreat",
    duration: "3 Hours",
    price: 12000,
    description: "Align your inner energies with a restorative program focusing on meditation, breathwork, and deep somatic release. Features custom breath coaching, a warm sesame oil flow (Abhyanga), and a relaxing sound bath session.",
    treatments: [
      "Guided Pranayama & Mindfulness session (45 min)",
      "75-minute Warm Sesame Abhyanga Massage",
      "45-minute Himalayan Sound Bath & Energy Balancing",
      "Custom herbal tonic & meditation coaching materials"
    ]
  }
];

const getStoredSpaTreatments = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('aaranya_spa_treatments');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      localStorage.setItem('aaranya_spa_treatments', JSON.stringify(defaultSpaTreatments));
    }
  } catch (e) {
    console.error("Error reading aaranya_spa_treatments", e);
  }
  return defaultSpaTreatments;
};

export const spaTreatments = getStoredSpaTreatments();
export const spaPackages = defaultSpaPackages;
`;
    }

    if (type === 'landmarks') {
      return `const defaultLandmarks = ${dataVar};

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
`;
    }

    const functionCapitalized = exportVarName.charAt(0).toUpperCase() + exportVarName.slice(1);
    
    return `const \${defaultVarName} = \${dataVar};

const getStored\${functionCapitalized} = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('\${storageKey}');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      localStorage.setItem('\${storageKey}', JSON.stringify(\${defaultVarName}));
    }
  } catch (e) {
    console.error("Error reading \${storageKey} from localStorage", e);
  }
  return \${defaultVarName};
};

export const \${exportVarName} = getStored\${functionCapitalized}();
export default \${exportVarName};
`;
  };

  const downloadJsFile = (type, content) => {
    let filename = `${type}.js`;
    const blob = new Blob([content], { type: 'text/javascript;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'aaranya@1234') {
      setIsAuthorized(true);
      sessionStorage.setItem('aaranya_admin_auth', 'true');
      setAuthError(false);
    } else {
      setAuthError(true);
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    sessionStorage.removeItem('aaranya_admin_auth');
  };

  // Multiple File Reader (Max 5 files)
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 5); // Limit to 5 files at a time
    if (files.length === 0) return;
    
    setUploading(true);
    const promises = files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then(base64Images => {
        // Filter out empty URLs and append the new base64 strings
        const currentImages = editItem.images ? editItem.images.filter(img => img !== '') : [];
        setEditItem({
          ...editItem,
          images: [...currentImages, ...base64Images]
        });
        setUploading(false);
      })
      .catch(() => {
        alert("Failed to process images. Please try different files.");
        setUploading(false);
      });
  };

  // Single File Reader
  const handleSingleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setEditItem({
        ...editItem,
        image: reader.result
      });
      setUploading(false);
    };
    reader.onerror = () => {
      alert("Failed to process image.");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  // Helper to sync to localStorage
  const saveToStorage = (key, data, setter) => {
    localStorage.setItem(key, JSON.stringify(data));
    setter(data);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleEditClick = (item) => {
    setEditItem({ ...item });
    setIsAdding(false);
  };

  const handleAddClick = () => {
    let newItem = {};
    if (activeTab === 'rooms') {
      newItem = { id: `room-${Date.now()}`, slug: '', name: '', shortName: '', price: 20000, size: '', occupancy: '', bed: '', view: '', tagline: '', description: '', featured: false, images: [''], amenities: [''] };
    } else if (activeTab === 'activities') {
      newItem = { id: `act-${Date.now()}`, name: '', tagline: '', price: 1000, duration: '', difficulty: 'Easy', description: '', image: '', inclusions: [''] };
    } else if (activeTab === 'offers') {
      newItem = { id: `offer-${Date.now()}`, name: '', tagline: '', description: '', badge: '', price: 50000, validUntil: '', image: '', inclusions: [''] };
    } else if (activeTab === 'dining') {
      newItem = { id: `dining-${Date.now()}`, name: '', tagline: '', cuisine: '', hours: '', description: '', image: '', signatures: [''], features: [''] };
    } else if (activeTab === 'spa') {
      newItem = { id: `spa-${Date.now()}`, name: '', category: 'Massages', duration: '', price: 5000, description: '', benefits: [''] };
    } else if (activeTab === 'landmarks') {
      newItem = { id: `land-${Date.now()}`, name: '', distance: '', description: '', image: '', images: [''] };
    } else if (activeTab === 'gallery') {
      newItem = { id: Date.now(), title: '', category: 'rooms', image: '' };
    }
    setEditItem(newItem);
    setIsAdding(true);
  };

  const handleDeleteClick = (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    if (activeTab === 'rooms') {
      const updated = roomsData.filter(r => r.id !== id);
      saveToStorage('aaranya_rooms', updated, setRoomsData);
    } else if (activeTab === 'activities') {
      const updated = activitiesData.filter(a => a.id !== id);
      saveToStorage('aaranya_activities', updated, setActivitiesData);
    } else if (activeTab === 'offers') {
      const updated = offersData.filter(o => o.id !== id);
      saveToStorage('aaranya_offers', updated, setOffersData);
    } else if (activeTab === 'dining') {
      const updated = diningData.filter(d => d.id !== id);
      saveToStorage('aaranya_dining', updated, setDiningData);
    } else if (activeTab === 'spa') {
      const updated = spaData.filter(s => s.id !== id);
      saveToStorage('aaranya_spa_treatments', updated, setSpaData);
    } else if (activeTab === 'landmarks') {
      const updated = landmarksData.filter(l => l.id !== id);
      saveToStorage('aaranya_landmarks', updated, setLandmarksData);
    } else if (activeTab === 'gallery') {
      const updated = galleryData.filter(g => g.id !== id);
      saveToStorage('aaranya_gallery', updated, setGalleryData);
    }
  };

  const handleSaveForm = (e) => {
    e.preventDefault();
    if (activeTab === 'rooms') {
      let updated;
      if (isAdding) {
        editItem.slug = editItem.name.toLowerCase().replace(/\s+/g, '-');
        updated = [...roomsData, editItem];
      } else {
        updated = roomsData.map(r => r.id === editItem.id ? editItem : r);
      }
      saveToStorage('aaranya_rooms', updated, setRoomsData);
    } else if (activeTab === 'activities') {
      const updated = isAdding
        ? [...activitiesData, editItem]
        : activitiesData.map(a => a.id === editItem.id ? editItem : a);
      saveToStorage('aaranya_activities', updated, setActivitiesData);
    } else if (activeTab === 'offers') {
      const updated = isAdding
        ? [...offersData, editItem]
        : offersData.map(o => o.id === editItem.id ? editItem : o);
      saveToStorage('aaranya_offers', updated, setOffersData);
    } else if (activeTab === 'dining') {
      const updated = isAdding
        ? [...diningData, editItem]
        : diningData.map(d => d.id === editItem.id ? editItem : d);
      saveToStorage('aaranya_dining', updated, setDiningData);
    } else if (activeTab === 'spa') {
      const updated = isAdding
        ? [...spaData, editItem]
        : spaData.map(s => s.id === editItem.id ? editItem : s);
      saveToStorage('aaranya_spa_treatments', updated, setSpaData);
    } else if (activeTab === 'landmarks') {
      const updated = isAdding
        ? [...landmarksData, editItem]
        : landmarksData.map(l => l.id === editItem.id ? editItem : l);
      saveToStorage('aaranya_landmarks', updated, setLandmarksData);
    } else if (activeTab === 'gallery') {
      const updated = isAdding
        ? [...galleryData, editItem]
        : galleryData.map(g => g.id === editItem.id ? editItem : g);
      saveToStorage('aaranya_gallery', updated, setGalleryData);
    }

    setEditItem(null);
    setIsAdding(false);
  };

  const handleArrayChange = (field, index, value) => {
    const updatedArray = [...editItem[field]];
    updatedArray[index] = value;
    setEditItem({ ...editItem, [field]: updatedArray });
  };

  const handleAddArrayItem = (field) => {
    setEditItem({ ...editItem, [field]: [...editItem[field], ''] });
  };

  const handleRemoveArrayItem = (field, index) => {
    const updatedArray = editItem[field].filter((_, idx) => idx !== index);
    setEditItem({ ...editItem, [field]: updatedArray });
  };

  // Auth screen layout
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#0E2319] flex items-center justify-center p-6 text-white font-inter">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl flex flex-col items-center gap-6">
          <span className="text-secondary text-[10px] tracking-ultra uppercase font-semibold font-inter">Aaranya Crest</span>
          <h2 className="font-playfair text-2xl font-light tracking-luxury uppercase text-center text-white">Staff Credentials</h2>
          <p className="text-xs text-white/55 text-center leading-relaxed font-inter max-w-xs -mt-2">
            This workspace is locked. Please authenticate with your staff passcode to manage resort settings.
          </p>
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-luxury text-secondary font-semibold">Passcode</label>
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-xs font-inter text-center tracking-widest text-white focus:outline-none focus:border-secondary transition-colors"
                required
              />
              {authError && (
                <span className="text-[10px] text-rose-400 text-center font-medium mt-1">
                  Access Denied. Mismatched Key.
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-charcoal border border-secondary hover:bg-white hover:text-[#0E2319] hover:border-white uppercase text-xs tracking-luxury py-3.5 px-6 font-bold transition-all duration-500 font-inter rounded-xl cursor-pointer shadow-md mt-2"
            >
              Verify Code
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden pt-24 bg-bgLight min-h-screen pb-24 font-inter text-charcoal">
      {/* Sub-Hero */}
      <section className="bg-primary py-12 text-white text-center shadow-md relative">
        <Container>
          <span className="editorial-sub tracking-luxury uppercase text-[10px] font-semibold block mb-1">Administrative Console</span>
          <h1 className="text-3xl font-light font-playfair tracking-luxury uppercase text-secondary">Website Management</h1>
          <button 
            onClick={handleLogout}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white border border-white/15 py-1.5 px-4 rounded-xl text-[10px] uppercase font-bold tracking-widest transition-colors cursor-pointer"
          >
            Lock Console
          </button>
        </Container>
      </section>

      <Container className="mt-12 max-w-6xl">
        {saveSuccess && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2 font-medium">
            <RiCheckLine size={16} />
            <span>Changes saved successfully! Changes are synced locally in real time.</span>
          </div>
        )}

        {/* Tab Navigator */}
        {!editItem && (
          <div className="flex flex-wrap gap-2.5 border-b border-primary border-opacity-5 pb-6 mb-8 justify-center lg:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-charcoal/80 border border-primary border-opacity-5 hover:border-secondary hover:text-secondary'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Dynamic Items Panel */}
        {!editItem ? (
          <div className="bg-white rounded-2xl border border-primary border-opacity-5 p-6 md:p-8 shadow-sm">
            {activeTab !== 'deployment' ? (
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-xl font-playfair font-medium text-primary">
                    {tabs.find(t => t.id === activeTab)?.label} List
                  </h2>
                  <p className="text-xs text-charcoal/50 mt-1">Add, edit, remove details and upload photos directly from your computer.</p>
                </div>
                <button
                  onClick={handleAddClick}
                  className="flex items-center gap-1.5 bg-secondary text-charcoal px-5 py-2.5 rounded-xl text-xs uppercase tracking-luxury font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <RiAddLine size={16} />
                  <span>Add New</span>
                </button>
              </div>
            ) : (
              <div className="mb-8">
                <h2 className="text-xl font-playfair font-medium text-primary">
                  Consolidated Configuration Export
                </h2>
                <p className="text-xs text-charcoal/50 mt-1">Sync your local browser adjustments with code files for GitHub & Vercel deployment.</p>
              </div>
            )}

            {/* List Table/Grid */}
            <div className="grid grid-cols-1 gap-4">
              {activeTab === 'rooms' && roomsData.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-primary border-opacity-5 rounded-xl hover:bg-bgLight/50 transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <img src={item.images[0]} alt={item.name} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" />
                    <div>
                      <h4 className="font-playfair font-medium text-sm text-charcoal">{item.name}</h4>
                      <span className="text-[10px] uppercase text-accent-dark tracking-wider block mt-0.5">{item.view} • Starting from ₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button onClick={() => handleEditClick(item)} className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer" title="Edit"><RiEditLine size={18} /></button>
                    <button onClick={() => handleDeleteClick(item.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer" title="Delete"><RiDeleteBinLine size={18} /></button>
                  </div>
                </div>
              ))}

              {activeTab === 'activities' && activitiesData.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-primary border-opacity-5 rounded-xl hover:bg-bgLight/50 transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" />
                    <div>
                      <h4 className="font-playfair font-medium text-sm text-charcoal">{item.name}</h4>
                      <span className="text-[10px] uppercase text-accent-dark tracking-wider block mt-0.5">{item.duration} • ₹{item.price.toLocaleString('en-IN')} per guest</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button onClick={() => handleEditClick(item)} className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer" title="Edit"><RiEditLine size={18} /></button>
                    <button onClick={() => handleDeleteClick(item.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer" title="Delete"><RiDeleteBinLine size={18} /></button>
                  </div>
                </div>
              ))}

              {activeTab === 'offers' && offersData.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-primary border-opacity-5 rounded-xl hover:bg-bgLight/50 transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" />
                    <div>
                      <h4 className="font-playfair font-medium text-sm text-charcoal">{item.name}</h4>
                      <span className="text-[10px] uppercase text-accent-dark tracking-wider block mt-0.5">{item.badge} • Valid until {item.validUntil}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button onClick={() => handleEditClick(item)} className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer" title="Edit"><RiEditLine size={18} /></button>
                    <button onClick={() => handleDeleteClick(item.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer" title="Delete"><RiDeleteBinLine size={18} /></button>
                  </div>
                </div>
              ))}

              {activeTab === 'dining' && diningData.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-primary border-opacity-5 rounded-xl hover:bg-bgLight/50 transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" />
                    <div>
                      <h4 className="font-playfair font-medium text-sm text-charcoal">{item.name}</h4>
                      <span className="text-[10px] uppercase text-accent-dark tracking-wider block mt-0.5">{item.cuisine} • {item.hours.split('|')[0]}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button onClick={() => handleEditClick(item)} className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer" title="Edit"><RiEditLine size={18} /></button>
                    <button onClick={() => handleDeleteClick(item.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer" title="Delete"><RiDeleteBinLine size={18} /></button>
                  </div>
                </div>
              ))}

              {activeTab === 'spa' && spaData.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-primary border-opacity-5 rounded-xl hover:bg-bgLight/50 transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary font-bold text-lg"><RiLeafLine /></div>
                    <div>
                      <h4 className="font-playfair font-medium text-sm text-charcoal">{item.name}</h4>
                      <span className="text-[10px] uppercase text-accent-dark tracking-wider block mt-0.5">{item.category} • {item.duration} • ₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button onClick={() => handleEditClick(item)} className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer" title="Edit"><RiEditLine size={18} /></button>
                    <button onClick={() => handleDeleteClick(item.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer" title="Delete"><RiDeleteBinLine size={18} /></button>
                  </div>
                </div>
              ))}

              {activeTab === 'gallery' && galleryData.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-primary border-opacity-5 rounded-xl hover:bg-bgLight/50 transition-colors gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-2/3">
                    <img src={item.image} alt={item.title} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" />
                    <div className="truncate">
                      <h4 className="font-playfair font-medium text-sm text-charcoal truncate">{item.title}</h4>
                      <span className="text-[10px] uppercase text-accent-dark tracking-wider block mt-0.5">{item.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button onClick={() => handleEditClick(item)} className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer" title="Edit"><RiEditLine size={18} /></button>
                    <button onClick={() => handleDeleteClick(item.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer" title="Delete"><RiDeleteBinLine size={18} /></button>
                  </div>
                </div>
              ))}

              {activeTab === 'landmarks' && landmarksData.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-primary border-opacity-5 rounded-xl hover:bg-bgLight/50 transition-colors gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-2/3">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" />
                    ) : (
                      <div className="w-16 h-12 bg-primary/5 rounded-lg shrink-0 flex items-center justify-center text-[10px]">No Pic</div>
                    )}
                    <div className="truncate">
                      <h4 className="font-playfair font-medium text-sm text-charcoal truncate">{item.name}</h4>
                      <span className="text-[10px] uppercase text-accent-dark tracking-wider block mt-0.5">{item.distance}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button onClick={() => handleEditClick(item)} className="p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer" title="Edit"><RiEditLine size={18} /></button>
                    <button onClick={() => handleDeleteClick(item.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer" title="Delete"><RiDeleteBinLine size={18} /></button>
                  </div>
                </div>
              ))}
            </div>

            {activeTab === 'deployment' && (
              <div className="flex flex-col gap-8">
                <div className="p-5 bg-primary/5 rounded-2xl border border-primary/5 flex flex-col gap-3">
                  <span className="text-[10px] uppercase font-bold tracking-luxury text-secondary">Vercel Deployment Synchronization</span>
                  <h3 className="text-base font-light font-playfair text-primary">How to publish your changes to the live website</h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-poppins">
                    Because Aaranya Crest is a secure static application, any changes or local photos you edit/upload in this admin console are stored directly in your browser's private storage (Local Storage).
                    <br /><br />
                    To sync these updates and photos to the live <strong>https://aaranya-resort.vercel.app</strong> site, select a module below to download its updated code file, replace the corresponding file in the codebase (in <strong>src/data/</strong>), and push the changes to GitHub!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { id: 'rooms', name: 'Rooms & Suites', file: 'src/data/rooms.js' },
                    { id: 'activities', name: 'Activities', file: 'src/data/activities.js' },
                    { id: 'dining', name: 'Dining Outlets', file: 'src/data/dining.js' },
                    { id: 'spa', name: 'Spa Treatments', file: 'src/data/spa.js' },
                    { id: 'offers', name: 'Exclusive Offers', file: 'src/data/offers.js' },
                    { id: 'landmarks', name: 'Nearby Attractions', file: 'src/data/landmarks.js' },
                    { id: 'gallery', name: 'Gallery Media', file: 'src/data/gallery.js' }
                  ].map((item) => {
                    const codeContent = generateExportCode(item.id);
                    return (
                      <div key={item.id} className="p-5 border border-primary/10 rounded-xl bg-white flex flex-col gap-4 shadow-xs">
                        <div>
                          <h4 className="font-playfair text-charcoal font-medium text-sm">{item.name}</h4>
                          <span className="text-[9px] font-mono text-accent-dark block mt-0.5">{item.file}</span>
                        </div>
                        <div className="flex gap-2.5 mt-auto">
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(codeContent);
                              alert(`${item.name} code copied to clipboard! Open ${item.file} and paste it.`);
                            }}
                            className="flex-grow bg-primary text-white text-[10px] uppercase font-bold py-2.5 px-3 rounded-lg hover:bg-secondary hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                          >
                            Copy JS Code
                          </button>
                          <button
                            type="button"
                            onClick={() => downloadJsFile(item.id, codeContent)}
                            className="bg-bgLight text-charcoal text-[10px] uppercase font-bold py-2.5 px-3 border border-primary/10 rounded-lg hover:bg-secondary hover:border-secondary transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                            title="Download file"
                          >
                            <RiDownloadLine size={14} /> Download File
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Detailed Form Editor Block */
          <div className="bg-white rounded-2xl border border-primary border-opacity-5 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-8">
              <button
                type="button"
                onClick={() => setEditItem(null)}
                className="p-2 hover:bg-bgLight text-charcoal rounded-xl transition-colors cursor-pointer"
              >
                <RiArrowLeftLine size={20} />
              </button>
              <div>
                <h3 className="text-xl font-playfair font-medium text-primary">
                  {isAdding ? 'Create New' : 'Edit Details of'} {editItem.name || 'Item'}
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-charcoal/40 font-semibold font-inter">Category: {activeTab}</span>
              </div>
            </div>

            <form onSubmit={handleSaveForm} className="flex flex-col gap-6 text-xs">
              
              {/* Rooms Form */}
              {activeTab === 'rooms' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Room Name</label>
                    <input type="text" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Price (₹ per Night)</label>
                    <input type="number" value={editItem.price} onChange={(e) => setEditItem({ ...editItem, price: parseInt(e.target.value) || 0 })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">View Category</label>
                    <input type="text" value={editItem.view} onChange={(e) => setEditItem({ ...editItem, view: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Villa Size</label>
                    <input type="text" value={editItem.size} placeholder="180 m² / 1,937 ft²" onChange={(e) => setEditItem({ ...editItem, size: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Occupancy limit</label>
                    <input type="text" value={editItem.occupancy} placeholder="Up to 3 Guests" onChange={(e) => setEditItem({ ...editItem, occupancy: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Bed Options</label>
                    <input type="text" value={editItem.bed} placeholder="King Size Bed" onChange={(e) => setEditItem({ ...editItem, bed: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Short Description (Tagline)</label>
                    <input type="text" value={editItem.tagline} onChange={(e) => setEditItem({ ...editItem, tagline: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Full Detailed Description</label>
                    <textarea rows="4" value={editItem.description} onChange={(e) => setEditItem({ ...editItem, description: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter resize-none" required />
                  </div>

                  {/* Rooms Local Upload + Photo List */}
                  <div className="col-span-2 flex flex-col gap-3 p-4 bg-bgLight/40 border border-primary/5 rounded-xl">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                      <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">
                        Resort Photos (JPEG/PNG, local uploads or web links)
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="rooms-local-upload"
                        />
                        <label
                          htmlFor="rooms-local-upload"
                          className="cursor-pointer bg-primary text-white text-[9px] uppercase tracking-luxury font-semibold py-2 px-4 rounded-lg hover:bg-secondary hover:text-charcoal transition-all duration-300 inline-flex items-center gap-1 shadow-sm"
                        >
                          <RiImageLine /> Upload Local (Max 5 at once)
                        </label>
                        <button type="button" onClick={() => handleAddArrayItem('images')} className="text-primary hover:text-secondary flex items-center gap-1 cursor-pointer font-bold uppercase text-[9px]"><RiAddLine /> Add URL Link</button>
                      </div>
                    </div>
                    {uploading && <div className="text-[10px] text-accent-dark animate-pulse">Encoding local photos...</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {editItem.images.map((img, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-2 border border-primary/5 rounded-xl shadow-xs">
                          {img ? (
                            <img src={img} className="w-12 h-9 object-cover rounded-lg bg-primary-dark shrink-0" alt="Preview" />
                          ) : (
                            <div className="w-12 h-9 bg-primary/5 rounded-lg shrink-0 flex items-center justify-center text-[10px]">No Pic</div>
                          )}
                          <input type="text" value={img} onChange={(e) => handleArrayChange('images', idx, e.target.value)} className="p-2 border border-primary/10 bg-bgLight/30 rounded-lg text-[10px] font-inter flex-grow" placeholder="Image URL / Base64 Data" required />
                          <button type="button" onClick={() => handleRemoveArrayItem('images', idx)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"><RiCloseLine size={15} /></button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="col-span-2 flex flex-col gap-3">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide flex items-center justify-between">
                      <span>Amenities & Specifications</span>
                      <button type="button" onClick={() => handleAddArrayItem('amenities')} className="text-primary hover:text-secondary flex items-center gap-1 cursor-pointer font-bold uppercase text-[9px]"><RiAddLine /> Add Amenity</button>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {editItem.amenities.map((am, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input type="text" value={am} onChange={(e) => handleArrayChange('amenities', idx, e.target.value)} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter flex-grow" required />
                          {editItem.amenities.length > 1 && (
                            <button type="button" onClick={() => handleRemoveArrayItem('amenities', idx)} className="p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl cursor-pointer"><RiCloseLine size={16} /></button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Activities Form */}
              {activeTab === 'activities' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Activity Name</label>
                    <input type="text" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Price (₹ per Guest)</label>
                    <input type="number" value={editItem.price} onChange={(e) => setEditItem({ ...editItem, price: parseInt(e.target.value) || 0 })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Duration Description</label>
                    <input type="text" value={editItem.duration} placeholder="3 Hours" onChange={(e) => setEditItem({ ...editItem, duration: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Intensity / Difficulty</label>
                    <select value={editItem.difficulty} onChange={(e) => setEditItem({ ...editItem, difficulty: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 rounded-xl focus:border-secondary focus:outline-none text-xs font-inter cursor-pointer">
                      <option value="Gentle">Gentle</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Strenuous">Strenuous</option>
                    </select>
                  </div>

                  {/* Local image upload for Activities */}
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Card Image</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSingleImageUpload}
                        className="hidden"
                        id="activities-local-upload"
                      />
                      <label
                        htmlFor="activities-local-upload"
                        className="cursor-pointer bg-primary text-white text-[9px] uppercase tracking-luxury font-semibold py-2.5 px-4 rounded-lg hover:bg-secondary hover:text-charcoal transition-all duration-300 inline-flex items-center gap-1 shadow-sm"
                      >
                        <RiImageLine /> Upload Local File
                      </label>
                      <span className="text-[10px] text-charcoal/40 font-medium">or specify URL below</span>
                    </div>
                    {uploading && <div className="text-[10px] text-accent-dark animate-pulse">Encoding photo...</div>}
                    <div className="flex items-center gap-3 mt-2 bg-white p-2.5 border border-primary/5 rounded-xl shadow-xs">
                      {editItem.image ? (
                        <img src={editItem.image} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" alt="Preview" />
                      ) : (
                        <div className="w-16 h-12 bg-primary/5 rounded-lg shrink-0 flex items-center justify-center text-[10px]">No Pic</div>
                      )}
                      <input type="text" value={editItem.image} onChange={(e) => setEditItem({ ...editItem, image: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/55 focus:bg-white rounded-xl focus:outline-none text-xs font-inter flex-grow" placeholder="Image URL / Base64 Data" required />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Short Tagline</label>
                    <input type="text" value={editItem.tagline} onChange={(e) => setEditItem({ ...editItem, tagline: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Excursion Description</label>
                    <textarea rows="4" value={editItem.description} onChange={(e) => setEditItem({ ...editItem, description: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter resize-none" required />
                  </div>

                  {/* Inclusions */}
                  <div className="col-span-2 flex flex-col gap-3">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide flex items-center justify-between">
                      <span>Package Inclusions</span>
                      <button type="button" onClick={() => handleAddArrayItem('inclusions')} className="text-primary hover:text-secondary flex items-center gap-1 cursor-pointer font-bold uppercase text-[9px]"><RiAddLine /> Add Inclusion</button>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {editItem.inclusions.map((inc, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input type="text" value={inc} onChange={(e) => handleArrayChange('inclusions', idx, e.target.value)} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter flex-grow" required />
                          {editItem.inclusions.length > 1 && (
                            <button type="button" onClick={() => handleRemoveArrayItem('inclusions', idx)} className="p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl cursor-pointer"><RiCloseLine size={16} /></button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Offers Form */}
              {activeTab === 'offers' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Offer Package Name</label>
                    <input type="text" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Starting Package Price (₹)</label>
                    <input type="number" value={editItem.price} onChange={(e) => setEditItem({ ...editItem, price: parseInt(e.target.value) || 0 })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Validity Period</label>
                    <input type="text" value={editItem.validUntil} placeholder="December 20, 2026" onChange={(e) => setEditItem({ ...editItem, validUntil: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Promo Badge / Tag</label>
                    <input type="text" value={editItem.badge} placeholder="Limited Stay Offer" onChange={(e) => setEditItem({ ...editItem, badge: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  {/* Local image upload for Offers */}
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Image Source</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSingleImageUpload}
                        className="hidden"
                        id="offers-local-upload"
                      />
                      <label
                        htmlFor="offers-local-upload"
                        className="cursor-pointer bg-primary text-white text-[9px] uppercase tracking-luxury font-semibold py-2.5 px-4 rounded-lg hover:bg-secondary hover:text-charcoal transition-all duration-300 inline-flex items-center gap-1 shadow-sm"
                      >
                        <RiImageLine /> Upload Local File
                      </label>
                      <span className="text-[10px] text-charcoal/40 font-medium">or specify URL below</span>
                    </div>
                    {uploading && <div className="text-[10px] text-accent-dark animate-pulse">Encoding photo...</div>}
                    <div className="flex items-center gap-3 mt-2 bg-white p-2.5 border border-primary/5 rounded-xl shadow-xs">
                      {editItem.image ? (
                        <img src={editItem.image} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" alt="Preview" />
                      ) : (
                        <div className="w-16 h-12 bg-primary/5 rounded-lg shrink-0 flex items-center justify-center text-[10px]">No Pic</div>
                      )}
                      <input type="text" value={editItem.image} onChange={(e) => setEditItem({ ...editItem, image: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:outline-none text-xs font-inter flex-grow" placeholder="Image URL / Base64 Data" required />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Tagline</label>
                    <input type="text" value={editItem.tagline} onChange={(e) => setEditItem({ ...editItem, tagline: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Detailed Description</label>
                    <textarea rows="4" value={editItem.description} onChange={(e) => setEditItem({ ...editItem, description: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter resize-none" required />
                  </div>

                  {/* Inclusions */}
                  <div className="col-span-2 flex flex-col gap-3">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide flex items-center justify-between">
                      <span>Package Inclusions</span>
                      <button type="button" onClick={() => handleAddArrayItem('inclusions')} className="text-primary hover:text-secondary flex items-center gap-1 cursor-pointer font-bold uppercase text-[9px]"><RiAddLine /> Add Inclusion</button>
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {editItem.inclusions.map((inc, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input type="text" value={inc} onChange={(e) => handleArrayChange('inclusions', idx, e.target.value)} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter flex-grow" required />
                          {editItem.inclusions.length > 1 && (
                            <button type="button" onClick={() => handleRemoveArrayItem('inclusions', idx)} className="p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl cursor-pointer"><RiCloseLine size={16} /></button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Dining Form */}
              {activeTab === 'dining' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Restaurant Name</label>
                    <input type="text" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Cuisine Type</label>
                    <input type="text" value={editItem.cuisine} placeholder="Mediterranean-Indian Fusion" onChange={(e) => setEditItem({ ...editItem, cuisine: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Operating Hours</label>
                    <input type="text" value={editItem.hours} placeholder="Lunch: 12:00 PM - 3:30 PM | Dinner: 7:00 PM - 11:00 PM" onChange={(e) => setEditItem({ ...editItem, hours: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  {/* Local image upload for Dining */}
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Header Image</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSingleImageUpload}
                        className="hidden"
                        id="dining-local-upload"
                      />
                      <label
                        htmlFor="dining-local-upload"
                        className="cursor-pointer bg-primary text-white text-[9px] uppercase tracking-luxury font-semibold py-2.5 px-4 rounded-lg hover:bg-secondary hover:text-charcoal transition-all duration-300 inline-flex items-center gap-1 shadow-sm"
                      >
                        <RiImageLine /> Upload Local File
                      </label>
                      <span className="text-[10px] text-charcoal/40 font-medium">or specify URL below</span>
                    </div>
                    {uploading && <div className="text-[10px] text-accent-dark animate-pulse">Encoding photo...</div>}
                    <div className="flex items-center gap-3 mt-2 bg-white p-2.5 border border-primary/5 rounded-xl shadow-xs">
                      {editItem.image ? (
                        <img src={editItem.image} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" alt="Preview" />
                      ) : (
                        <div className="w-16 h-12 bg-primary/5 rounded-lg shrink-0 flex items-center justify-center text-[10px]">No Pic</div>
                      )}
                      <input type="text" value={editItem.image} onChange={(e) => setEditItem({ ...editItem, image: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:outline-none text-xs font-inter flex-grow" placeholder="Image URL / Base64 Data" required />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Tagline</label>
                    <input type="text" value={editItem.tagline} onChange={(e) => setEditItem({ ...editItem, tagline: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Description</label>
                    <textarea rows="4" value={editItem.description} onChange={(e) => setEditItem({ ...editItem, description: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter resize-none" required />
                  </div>

                  {/* Signatures */}
                  <div className="col-span-2 flex flex-col gap-3">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide flex items-center justify-between">
                      <span>Signature Dishes / Drinks</span>
                      <button type="button" onClick={() => handleAddArrayItem('signatures')} className="text-primary hover:text-secondary flex items-center gap-1 cursor-pointer font-bold uppercase text-[9px]"><RiAddLine /> Add Signature</button>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {editItem.signatures.map((sig, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input type="text" value={sig} onChange={(e) => handleArrayChange('signatures', idx, e.target.value)} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter flex-grow" required />
                          {editItem.signatures.length > 1 && (
                            <button type="button" onClick={() => handleRemoveArrayItem('signatures', idx)} className="p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl cursor-pointer"><RiCloseLine size={16} /></button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="col-span-2 flex flex-col gap-3">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide flex items-center justify-between">
                      <span>Key Features</span>
                      <button type="button" onClick={() => handleAddArrayItem('features')} className="text-primary hover:text-secondary flex items-center gap-1 cursor-pointer font-bold uppercase text-[9px]"><RiAddLine /> Add Feature</button>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {editItem.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input type="text" value={feat} onChange={(e) => handleArrayChange('features', idx, e.target.value)} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter flex-grow" required />
                          {editItem.features.length > 1 && (
                            <button type="button" onClick={() => handleRemoveArrayItem('features', idx)} className="p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl cursor-pointer"><RiCloseLine size={16} /></button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Spa Treatments Form */}
              {activeTab === 'spa' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Treatment Name</label>
                    <input type="text" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Category</label>
                    <select value={editItem.category} onChange={(e) => setEditItem({ ...editItem, category: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 rounded-xl focus:border-secondary focus:outline-none text-xs font-inter cursor-pointer">
                      <option value="Massages">Massages</option>
                      <option value="Facials">Facials</option>
                      <option value="Holistic Therapies">Holistic Therapies</option>
                      <option value="Body Scrubs & Wraps">Body Scrubs & Wraps</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Duration</label>
                    <input type="text" value={editItem.duration} placeholder="90 Minutes" onChange={(e) => setEditItem({ ...editItem, duration: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Price (₹)</label>
                    <input type="number" value={editItem.price} onChange={(e) => setEditItem({ ...editItem, price: parseInt(e.target.value) || 0 })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Description</label>
                    <textarea rows="3" value={editItem.description} onChange={(e) => setEditItem({ ...editItem, description: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter resize-none" required />
                  </div>

                  {/* Benefits */}
                  <div className="col-span-2 flex flex-col gap-3">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide flex items-center justify-between">
                      <span>Therapeutic Benefits</span>
                      <button type="button" onClick={() => handleAddArrayItem('benefits')} className="text-primary hover:text-secondary flex items-center gap-1 cursor-pointer font-bold uppercase text-[9px]"><RiAddLine /> Add Benefit</button>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {editItem.benefits.map((ben, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input type="text" value={ben} onChange={(e) => handleArrayChange('benefits', idx, e.target.value)} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter flex-grow" required />
                          {editItem.benefits.length > 1 && (
                            <button type="button" onClick={() => handleRemoveArrayItem('benefits', idx)} className="p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl cursor-pointer"><RiCloseLine size={16} /></button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Form */}
              {activeTab === 'gallery' && (
                <div className="grid grid-cols-1 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Image Title Caption</label>
                    <input type="text" value={editItem.title} onChange={(e) => setEditItem({ ...editItem, title: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Image category</label>
                    <select value={editItem.category} onChange={(e) => setEditItem({ ...editItem, category: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 rounded-xl focus:border-secondary focus:outline-none text-xs font-inter cursor-pointer">
                      <option value="rooms">Rooms</option>
                      <option value="dining">Dining</option>
                      <option value="spa">Spa</option>
                      <option value="activities">Activities</option>
                      <option value="grounds">Grounds</option>
                    </select>
                  </div>

                  {/* Local image upload for Gallery */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Image Source</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSingleImageUpload}
                        className="hidden"
                        id="gallery-local-upload"
                      />
                      <label
                        htmlFor="gallery-local-upload"
                        className="cursor-pointer bg-primary text-white text-[9px] uppercase tracking-luxury font-semibold py-2.5 px-4 rounded-lg hover:bg-secondary hover:text-charcoal transition-all duration-300 inline-flex items-center gap-1 shadow-sm"
                      >
                        <RiImageLine /> Upload Local File
                      </label>
                      <span className="text-[10px] text-charcoal/40 font-medium">or specify URL below</span>
                    </div>
                    {uploading && <div className="text-[10px] text-accent-dark animate-pulse">Encoding photo...</div>}
                    <div className="flex items-center gap-3 mt-2 bg-white p-2.5 border border-primary/5 rounded-xl shadow-xs">
                      {editItem.image ? (
                        <img src={editItem.image} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" alt="Preview" />
                      ) : (
                        <div className="w-16 h-12 bg-primary/5 rounded-lg shrink-0 flex items-center justify-center text-[10px]">No Pic</div>
                      )}
                      <input type="text" value={editItem.image} onChange={(e) => setEditItem({ ...editItem, image: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter flex-grow" placeholder="Image URL / Base64 Data" required />
                    </div>
                  </div>
                </div>
              )}

              {/* Landmarks Form */}
              {activeTab === 'landmarks' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Attraction Name</label>
                    <input type="text" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Distance & Time</label>
                    <input type="text" value={editItem.distance} placeholder="1 KM • 5 Mins Drive" onChange={(e) => setEditItem({ ...editItem, distance: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter" required />
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Description</label>
                    <textarea rows="4" value={editItem.description} onChange={(e) => setEditItem({ ...editItem, description: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter resize-none" required />
                  </div>

                  {/* Main Image field */}
                  <div className="flex flex-col gap-1.5 col-span-2">
                    <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">Main Image</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSingleImageUpload}
                        className="hidden"
                        id="landmarks-single-upload"
                      />
                      <label
                        htmlFor="landmarks-single-upload"
                        className="cursor-pointer bg-primary text-white text-[9px] uppercase tracking-luxury font-semibold py-2 px-4 rounded-lg hover:bg-secondary hover:text-charcoal transition-all duration-300 inline-flex items-center gap-1 shadow-sm"
                      >
                        <RiImageLine /> Upload Local Main Image
                      </label>
                    </div>
                    {uploading && <div className="text-[10px] text-accent-dark animate-pulse">Encoding photo...</div>}
                    <div className="flex items-center gap-3 mt-2 bg-white p-2.5 border border-primary/5 rounded-xl shadow-xs">
                      {editItem.image ? (
                        <img src={editItem.image} className="w-16 h-12 object-cover rounded-lg bg-primary-dark shrink-0" alt="Preview" />
                      ) : (
                        <div className="w-16 h-12 bg-primary/5 rounded-lg shrink-0 flex items-center justify-center text-[10px]">No Pic</div>
                      )}
                      <input type="text" value={editItem.image || ''} onChange={(e) => setEditItem({ ...editItem, image: e.target.value })} className="p-3 border border-primary/10 bg-bgLight/50 focus:bg-white rounded-xl focus:border-secondary focus:outline-none text-xs font-inter flex-grow" placeholder="Image URL / Base64 Data" required />
                    </div>
                  </div>

                  {/* Gallery Images field */}
                  <div className="col-span-2 flex flex-col gap-3 p-4 bg-bgLight/40 border border-primary/5 rounded-xl">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                      <label className="font-semibold text-charcoal/70 uppercase text-[9px] tracking-wide">
                        Additional Gallery Photos (For the popout lightbox slider)
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="landmarks-local-upload"
                        />
                        <label
                          htmlFor="landmarks-local-upload"
                          className="cursor-pointer bg-primary text-white text-[9px] uppercase tracking-luxury font-semibold py-2 px-4 rounded-lg hover:bg-secondary hover:text-charcoal transition-all duration-300 inline-flex items-center gap-1 shadow-sm"
                        >
                          <RiImageLine /> Upload Local (Max 5)
                        </label>
                        <button type="button" onClick={() => handleAddArrayItem('images')} className="text-primary hover:text-secondary flex items-center gap-1 cursor-pointer font-bold uppercase text-[9px]"><RiAddLine /> Add URL Link</button>
                      </div>
                    </div>
                    {uploading && <div className="text-[10px] text-accent-dark animate-pulse">Encoding local photos...</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {editItem.images && editItem.images.map((img, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-2 border border-primary/5 rounded-xl shadow-xs">
                          {img ? (
                            <img src={img} className="w-12 h-9 object-cover rounded-lg bg-primary-dark shrink-0" alt="Preview" />
                          ) : (
                            <div className="w-12 h-9 bg-primary/5 rounded-lg shrink-0 flex items-center justify-center text-[10px]">No Pic</div>
                          )}
                          <input type="text" value={img} onChange={(e) => handleArrayChange('images', idx, e.target.value)} className="p-2 border border-primary/10 bg-bgLight/30 rounded-lg text-[10px] font-inter flex-grow" placeholder="Image URL / Base64 Data" required />
                          <button type="button" onClick={() => handleRemoveArrayItem('images', idx)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"><RiCloseLine size={15} /></button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Form Buttons */}
              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-primary border-opacity-5">
                <button
                  type="button"
                  onClick={() => setEditItem(null)}
                  className="bg-transparent border border-primary/10 text-charcoal px-6 py-3 rounded-xl hover:bg-bgLight text-xs uppercase tracking-luxury font-semibold transition-all duration-300 cursor-pointer"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  className="flex items-center gap-1.5 bg-primary text-white border border-primary px-6 py-3 rounded-xl hover:bg-secondary hover:text-charcoal hover:border-secondary text-xs uppercase tracking-luxury font-semibold transition-all duration-500 shadow-md cursor-pointer"
                >
                  <RiSaveLine size={16} />
                  <span>Save Changes</span>
                </button>
              </div>

            </form>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Admin;
