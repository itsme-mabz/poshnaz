import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white  text-gray-900 inter border-t border-gray-200 text-sm text-center py-3">
      <p>&copy; {new Date().getFullYear()} Poshnaz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
