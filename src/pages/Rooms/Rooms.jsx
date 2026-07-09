import React, { useState } from 'react';
import { rooms } from '../../data/rooms';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import RoomCard from '../../components/cards/RoomCard/RoomCard';
import { RiSearchLine } from 'react-icons/ri';

export const Rooms = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedView, setSelectedView] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // View checks
    const matchesView =
      selectedView === 'all' ||
      room.view.toLowerCase().includes(selectedView.toLowerCase()) ||
      (selectedView === 'valley' && room.view.toLowerCase().includes('valley')) ||
      (selectedView === 'forest' && (room.view.toLowerCase().includes('forest') || room.view.toLowerCase().includes('canopy')));

    // Price checks
    let matchesPrice = true;
    if (selectedPrice === 'under-20000') {
      matchesPrice = room.price < 20000;
    } else if (selectedPrice === '20000-40000') {
      matchesPrice = room.price >= 20000 && room.price <= 40000;
    } else if (selectedPrice === 'over-40000') {
      matchesPrice = room.price > 40000;
    }

    return matchesSearch && matchesView && matchesPrice;
  });

  return (
    <div className="overflow-x-hidden pt-20">
      {/* Header Banner */}
      <section className="relative h-[45vh] flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 w-full h-full opacity-60">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
            alt="Suites Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-overlay z-[1]" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="editorial-sub tracking-luxury uppercase text-xs md:text-sm font-medium mb-3 block">Accommodations</span>
          <h1 className="text-3xl sm:text-5xl font-light font-playfair tracking-wide leading-tight">
            Suites & Villas
          </h1>
        </div>
      </section>

      {/* Filters and List */}
      <section className="py-16 bg-bgLight min-h-screen">
        <Container>
          {/* Filtering Controls Bar */}
          <div className="bg-white border border-primary border-opacity-5 p-6 mb-12 flex flex-col md:flex-row gap-6 justify-between items-center shadow-sm">
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search sanctuaries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-primary border-opacity-10 py-2 pl-8 pr-4 text-xs font-poppins focus:outline-none focus:border-secondary transition-colors text-charcoal"
              />
              <RiSearchLine className="absolute left-2 top-2.5 text-charcoal text-opacity-40" size={14} />
            </div>

            {/* Select Menus */}
            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              {/* View Selection */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between">
                <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">View</span>
                <select
                  value={selectedView}
                  onChange={(e) => setSelectedView(e.target.value)}
                  className="bg-transparent border-b border-primary border-opacity-10 py-1.5 px-2 text-xs font-poppins focus:outline-none focus:border-secondary transition-colors cursor-pointer w-full sm:w-auto text-charcoal font-medium"
                >
                  <option value="all">Any View</option>
                  <option value="valley">Valley View</option>
                  <option value="forest">Forest View</option>
                </select>
              </div>

              {/* Price Selection */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between">
                <span className="text-[9px] uppercase tracking-luxury text-charcoal text-opacity-50 font-poppins font-medium">Nightly Rate</span>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="bg-transparent border-b border-primary border-opacity-10 py-1.5 px-2 text-xs font-poppins focus:outline-none focus:border-secondary transition-colors cursor-pointer w-full sm:w-auto text-charcoal font-medium"
                >
                  <option value="all">Any Rate</option>
                  <option value="under-20000">Under ₹20,000 / Night</option>
                  <option value="20000-40000">₹20,000 - ₹40,000 / Night</option>
                  <option value="over-40000">Over ₹40,000 / Night</option>
                </select>
              </div>
            </div>
          </div>

          {/* Rooms Grid */}
          {filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 font-editorial italic text-charcoal text-opacity-65 text-lg">
              No sanctuaries match your criteria. Please refine your filter options.
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Rooms;
