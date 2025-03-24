import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiInfo, FiMail, FiPhone, FiMapPin, FiChevronDown, FiUsers, FiHelpCircle } from 'react-icons/fi';

export default function GuestNavbar({ isTransparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Variants for the navbar container (stagger children)
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  // Variants for individual nav items on load
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Variants for dropdown menu
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const dropdownItems = [
    {
      section: 'About',
      items: [
        { icon: <FiInfo className="mr-2" />, label: 'About Us', link: '/about' },
        { icon: <FiHelpCircle className="mr-2" />, label: 'FAQs', link: '/faqs' },
      ]
    },
    {
      section: 'Contact',
      items: [
        { icon: <FiPhone className="mr-2" />, label: 'Contact Us', link: '/contact' },
      ]
    }
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${
        isTransparent
          ? 'bg-transparent absolute top-0 left-0 w-full z-20'
          : 'bg-[#1A1A1D]'
      }`}
    >
      <div className="w-full mx-auto px-10 py-6 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <motion.a 
          href="/"
          className="text-3xl font-bold text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          POSHNAZ
        </motion.a>

        {/* Desktop Navigation Links */}
        <motion.ul className="hidden md:flex space-x-6 uppercase text-white" variants={containerVariants}>
          <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}>
            <a href="/" className="hover:text-gold transition-colors">Home</a>
          </motion.li>
          <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}>
            <a href="/fabrics" className="hover:text-gold transition-colors">Fabrics</a>
          </motion.li>
          <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}>
            <a href="/gallery" className="hover:text-gold transition-colors">Design Gallery</a>
          </motion.li>
          <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}>
            <a href="/style-guide" className="hover:text-gold transition-colors">Style Guide</a>
          </motion.li>
          {/* Dropdown Menu */}
          <motion.li 
            className="relative"
            variants={itemVariants}
            onHoverStart={() => setDropdownOpen(true)}
            onHoverEnd={() => setDropdownOpen(false)}
          >
            <button className="flex items-center uppercase hover:text-gold transition-colors">
              More <FiChevronDown className="ml-1" />
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                >
                  {dropdownItems.map((section, idx) => (
                    <div key={section.section} className={idx > 0 ? 'border-t border-gray-100' : ''}>
                      <div className="px-4 py-2 bg-gray-50 text-sm font-semibold text-gray-700">
                        {section.section}
                      </div>
                      {section.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.link}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {item.icon}
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        </motion.ul>

        {/* Desktop CTA */}
        <motion.button
          className="hidden md:block bg-gold uppercase text-[#1A1A1D] px-8 py-3 rounded font-medium hover:bg-white hover:text-[#1A1A1D] transition-colors"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Design your Kurta
        </motion.button>

        {/* Mobile Hamburger Icon */}
        <motion.div className="md:hidden" variants={itemVariants}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-[#1A1A1D] text-white"
          >
            <div className="px-4 py-6 space-y-4 uppercase">
              <a href="/" className="block hover:text-gold transition-colors">Home</a>
              <a href="/fabrics" className="block hover:text-gold transition-colors">Fabrics</a>
              <a href="/gallery" className="block hover:text-gold transition-colors">Design Gallery</a>
              
              {/* Mobile Dropdown Sections */}
              {dropdownItems.map((section) => (
                <div key={section.section} className="space-y-2">
                  <div className="text-sm font-semibold text-gray-400">{section.section}</div>
                  {section.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      className="flex items-center pl-4 py-2 text-sm hover:text-gold transition-colors"
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
              
              <button
                className="w-full bg-gold uppercase text-[#1A1A1D] px-8 py-3 rounded font-medium hover:bg-white transition-colors mt-4"
                onClick={() => setMenuOpen(false)}
              >
                Design your Kurta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
