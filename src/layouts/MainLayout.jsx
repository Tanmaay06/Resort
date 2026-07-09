import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';
import Loader from '../components/common/Loader/Loader';

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bgLight select-none">
      {/* Loader overlay */}
      <Loader />

      {/* Global Scroll Control */}
      <ScrollToTop />

      {/* Header Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Sitemap */}
      <Footer />
    </div>
  );
};

export default MainLayout;
