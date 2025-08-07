import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 p-4 mt-8">
      © {new Date().getFullYear()} TravelGearHub. All rights reserved.
    </footer>
  );
};

export default Footer;
