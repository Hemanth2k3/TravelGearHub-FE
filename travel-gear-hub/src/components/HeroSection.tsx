import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-blue-50 py-16 px-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Rent the Best Travel Gear</h1>
      <p className="text-lg text-gray-600 mb-6">
        Find and rent top-quality gear for your next adventure.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Explore Gears
      </button>
    </div>
  );
};

export default HeroSection;
