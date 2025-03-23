import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scissors, Shirt, Heart, Crown, Coffee } from 'lucide-react';

const ChooseYourStyle = () => {
  const navigate = useNavigate();

  const clothingTypes = [
    {
      type: 'shalwar-kameez',
      name: 'Shalwar Kameez',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80',
      icon: <Scissors className="w-6 h-6" />
    },
    {
      type: 'kurta',
      name: 'Kurta',
      image: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&q=80',
      icon: <Heart className="w-6 h-6" />
    },
    {
      type: 'shirt',
      name: 'Shirt',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80',
      icon: <Shirt className="w-6 h-6" />
    },
    {
      type: 'waistcoat',
      name: 'Waistcoat',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
      icon: <Coffee className="w-6 h-6" />
    },
    {
      type: 'prince-coat',
      name: 'Prince Coat',
      image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80',
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const handleSelect = (type) => {
    navigate('/fabric-selection');
  };

  return (
    <div className="min-h-screen bg-secondary-400 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-500/10 rounded-full transform rotate-45" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent-400/10 rounded-full transform -rotate-45" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://t3.ftcdn.net/jpg/09/84/65/64/360_F_984656427_hxl1G4stXbWNs2WmR65JTptyrjlx9see.jpg')] bg-fixed bg-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-primary-500 mb-4">Choose Your Style</h1>
          <p className="text-xl text-primary-400">Select the type of clothing you want to design</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clothingTypes.map((item, index) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleSelect(item.type)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/90 via-primary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-dark rounded-full text-dark">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-dark">{item.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark group-hover:opacity-0 transition-opacity duration-300">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseYourStyle;