import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Rooms from '../pages/Rooms/Rooms';
import RoomDetails from '../pages/Rooms/RoomDetails';
import Dining from '../pages/Dining/Dining';
import Spa from '../pages/Spa/Spa';
import Activities from '../pages/Activities/Activities';
import Gallery from '../pages/Gallery/Gallery';
import Offers from '../pages/Offers/Offers';
import Booking from '../pages/Booking/Booking';
import Contact from '../pages/Contact/Contact';
import FAQ from '../pages/FAQ/FAQ';
import Admin from '../pages/Admin/Admin';
import NotFound from '../pages/NotFound/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/:id" element={<RoomDetails />} />
        <Route path="dining" element={<Dining />} />
        <Route path="spa" element={<Spa />} />
        <Route path="activities" element={<Activities />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="offers" element={<Offers />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
