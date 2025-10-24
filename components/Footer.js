import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white flex flex-col sm:flex-row items-center justify-center px-4 py-4 sm:py-6 gap-2">
      <p className="text-center text-sm sm:text-base">
        &copy; {currentYear} Get me a Pizza. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
