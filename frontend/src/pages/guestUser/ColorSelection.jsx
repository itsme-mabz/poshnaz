import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ColorSelection = () => {
  const navigate = useNavigate();

  const fabrics = [
    {
      type: 'Red',
      name: 'Red',
      image: 'https://placehold.co/600x400/png',
      price: 500,
    },
    {
      type: 'Blue',
      name: 'Blue',
      image: 'https://placehold.co/600x400/png',
      price: 350,
    },
    {
      type: 'Green',
      name: 'Green',
      image: 'https://placehold.co/600x400/png',
      price: 200,
    }
  ];

  // Variants for the card container
  const cardVariants = {
    rest: { scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' },
    hover: { 
      scale: 1.05,
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  // Variants for the description text
  const descVariants = {
    rest: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const handleSelect = (type) => {
    navigate('/design-selection');
  };

  return (
    <div 
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/black-luxury-cloth-background_46250-2422.jpg?semt=ais_hybrid")',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28, 27, 26, 0.89)' }}></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose your color</h1>
          <p className="text-lg md:text-xl text-white">Choose the perfect color for your garment</p>
        </div>

        {/* Fabric Cards (smaller size + 3 columns on larger screens) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {fabrics.map((fabric) => (
            <motion.div
              key={fabric.type}
              className="bg-white rounded-lg overflow-hidden cursor-pointer backdrop-blur-sm bg-opacity-90"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              onClick={() => handleSelect(fabric.type)}
            >
              {/* Fabric Image (reduced height) */}
              <img
                src={fabric.image}
                alt={fabric.name}
                className="w-full h-36 object-cover"
              />

              {/* Fabric Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 inter">{fabric.name}</h3>
                  <p className="text-lg text-gray-700 font-medium">${fabric.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSelection;
