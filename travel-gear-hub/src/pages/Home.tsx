// src/pages/Home.tsx

import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-teal-100 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold mb-4">👋 Welcome to TravelGearHub</h1>
      <p className="text-lg text-center max-w-md">
        Rent or lend your travel gear with ease. Whether you're off to the mountains or the beach,
        we've got your gear covered hehe.
      </p>
    </div>
  );
};

export default Home;
