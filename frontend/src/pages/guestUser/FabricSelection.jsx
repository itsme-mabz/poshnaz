import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FabricSelection = () => {
  const navigate = useNavigate();

  const fabrics = [
    {
      type: 'silk',
      name: 'Silk',
      description: 'Luxurious and smooth with a natural sheen',
      image: 'https://placehold.co/600x400/png',
      price: 500,
    },
    {
      type: 'boski',
      name: 'Boski',
      description: 'Premium cotton blend with a soft, smooth finish',
      image: 'https://placehold.co/600x400/png',
      price: 350,
    },
    {
      type: 'cotton',
      name: 'Cotton',
      description: 'Breathable and comfortable for everyday wear',
      image: 'https://placehold.co/600x400/png',
      price: 200,
    },
    {
      type: 'washing-wear',
      name: 'Washing Wear',
      description: 'Durable and easy to maintain',
      image: 'https://placehold.co/600x400/png',
      price: 250,
    },
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
    navigate('/color');
  };

  return (
    <div 
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2070&auto=format&fit=crop")',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28, 27, 26, 0.89)' }}></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Select Your Fabric</h1>
          <p className="text-lg md:text-xl text-white">Choose the perfect material for your garment</p>
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
                <motion.p
                  className="text-gray-600 text-sm"
                  variants={descVariants}
                >
                  {fabric.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FabricSelection;
