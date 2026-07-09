import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { rooms } from '../../data/rooms';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import Button from '../../components/common/Button/Button';
import RoomCard from '../../components/cards/RoomCard/RoomCard';
import { RiExpandLeftRightLine, RiUserLine, RiHotelBedLine, RiCompassLine } from 'react-icons/ri';

export const RoomDetails = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return (
      <div className="py-32 text-center pt-40">
        <h2 className="text-3xl font-light font-playfair mb-6">Sanctuary Not Found</h2>
        <Button to="/rooms" variant="primary">Back to Suites</Button>
      </div>
    );
  }

  const { name, price, size, occupancy, bed, view, description, tagline, images, amenities } = room;

  const [activeImage, setActiveImage] = useState(images[0]);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: '',
    requests: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  // Recommend other rooms
  const recommendations = rooms.filter((r) => r.id !== id).slice(0, 2);

  return (
    <div className="overflow-x-hidden pt-20">
      {/* Sub-Hero Header */}
      <section className="relative h-[55vh] flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 w-full h-full opacity-60">
          <img
            src={activeImage}
            alt={name}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">{view}</span>
          <h1 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight">
            {name}
          </h1>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Media Gallery Grid */}
              <div className="flex flex-col gap-4">
                <div className="aspect-[16/10] overflow-hidden bg-primary-dark shadow-sm">
                  <img
                    src={activeImage}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`aspect-[3/2] cursor-pointer overflow-hidden border-2 ${
                        activeImage === img ? 'border-secondary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${name} gallery ${index}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="flex flex-col gap-5">
                <h2 className="text-xl sm:text-2xl font-light font-playfair text-primary leading-snug">
                  {tagline}
                </h2>
                <div className="h-[1px] w-16 bg-accent bg-opacity-30" />
                <p className="text-xs sm:text-sm text-charcoal text-opacity-70 leading-relaxed font-poppins">
                  {description}
                </p>
              </div>

              {/* Specifications Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-primary border-opacity-10 text-[9px] sm:text-[10px] text-charcoal uppercase tracking-widest font-poppins">
                <div className="flex flex-col gap-1">
                  <span className="text-charcoal text-opacity-40 font-normal">Suite Size</span>
                  <span className="font-semibold text-primary flex items-center gap-1.5 mt-1">
                    <RiExpandLeftRightLine size={14} className="text-accent" />
                    {size.split(' / ')[0]}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-charcoal text-opacity-40 font-normal">Occupancy</span>
                  <span className="font-semibold text-primary flex items-center gap-1.5 mt-1">
                    <RiUserLine size={14} className="text-accent" />
                    {occupancy}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-charcoal text-opacity-40 font-normal">Bed Configuration</span>
                  <span className="font-semibold text-primary flex items-center gap-1.5 mt-1">
                    <RiHotelBedLine size={14} className="text-accent" />
                    {bed}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-charcoal text-opacity-40 font-normal">Sanctuary View</span>
                  <span className="font-semibold text-primary flex items-center gap-1.5 mt-1">
                    <RiCompassLine size={14} className="text-accent" />
                    {view.split(' & ')[0]}
                  </span>
                </div>
              </div>

              {/* Luxury Amenities */}
              <div className="flex flex-col gap-5">
                <h3 className="text-lg font-light font-playfair text-charcoal tracking-wide border-b border-primary border-opacity-5 pb-3">
                  Sanctuary Inclusions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-poppins text-charcoal text-opacity-70">
                      <span className="text-secondary select-none font-editorial italic text-base leading-none">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar Form */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-[#FAF7F2] border border-primary border-opacity-5 p-8 shadow-sm flex flex-col gap-6 text-charcoal">
                <div className="text-center pb-4 border-b border-primary border-opacity-10">
                  <span className="text-[8px] sm:text-[9px] text-charcoal text-opacity-40 tracking-widest block uppercase font-poppins">Nightly Residence Rate</span>
                  <span className="text-2xl sm:text-3xl font-light font-playfair text-primary">₹{price.toLocaleString('en-IN')} <span className="text-xs text-charcoal text-opacity-50">/ Night</span></span>
                </div>

                {inquirySubmitted ? (
                  <div className="text-center py-8 flex flex-col gap-4">
                    <h4 className="font-playfair text-lg text-primary font-medium">Inquiry Received</h4>
                    <p className="text-xs text-charcoal text-opacity-70 leading-relaxed font-poppins">
                      Thank you for choosing Aaranya Crest. A dedicated villa host will contact you within 12 hours to coordinate your stay requirements.
                    </p>
                    <Button onClick={() => setInquirySubmitted(false)} variant="outline" className="mt-4 !py-3">
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
                    <h4 className="font-playfair text-sm text-charcoal font-medium text-center tracking-widest uppercase">Residence Inquiry</h4>
                    
                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Check-In</label>
                        <input
                          type="date"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          className="bg-white border border-primary border-opacity-10 p-2 text-xs font-poppins focus:outline-none focus:border-secondary"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Check-Out</label>
                        <input
                          type="date"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          className="bg-white border border-primary border-opacity-10 p-2 text-xs font-poppins focus:outline-none focus:border-secondary"
                          required
                        />
                      </div>
                    </div>

                    {/* Guests */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Guests</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="bg-white border border-primary border-opacity-10 p-2 text-xs font-poppins focus:outline-none focus:border-secondary cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5-8">5-8 Guests</option>
                      </select>
                    </div>

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Sir/Madame"
                        className="bg-white border border-primary border-opacity-10 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary"
                        required
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@domain.com"
                        className="bg-white border border-primary border-opacity-10 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary"
                        required
                      />
                    </div>

                    {/* Requests */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[8px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Special Preferences</label>
                      <textarea
                        name="requests"
                        rows="3"
                        value={formData.requests}
                        onChange={handleInputChange}
                        placeholder="Dietary choices, butler requests, helicopter transfers..."
                        className="bg-white border border-primary border-opacity-10 p-2.5 text-xs font-poppins focus:outline-none focus:border-secondary resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white border border-primary hover:bg-transparent hover:text-primary uppercase text-[9px] tracking-luxury py-3.5 px-4 font-semibold transition-all duration-500 font-poppins mt-2"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Recommendations */}
      <section className="py-24 bg-bgLight border-t border-primary border-opacity-5">
        <Container>
          <SectionTitle
            title="Other Private Sanctuaries"
            subtitle="Explore Accommodations"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recommendations.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RoomDetails;
