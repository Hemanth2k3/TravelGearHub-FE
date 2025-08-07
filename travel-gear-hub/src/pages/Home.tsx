import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/productgrid';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <main className="flex-grow">
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
