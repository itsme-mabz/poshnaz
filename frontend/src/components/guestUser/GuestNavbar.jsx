import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function GuestNavbar({ isTransparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${
        isTransparent
          ? 'bg-transparent absolute top-0 left-0 w-full z-20'
          : 'bg-black'
      }`}
    >
      <div className="w-full mx-auto px-10 py-6 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <motion.a 
        href="/"
          className="text-3xl font-bold"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          POSHNAZ
        </motion.a>

        {/* Desktop Navigation Links */}
        <motion.ul className="hidden md:flex space-x-6 uppercase" variants={containerVariants}>
          {['Home', 'Fabrics', 'Design Gallery', 'About us', 'Contact us'].map((item, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <a href="#" className="hover:text-gold transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop CTA */}
        <motion.button
          className="hidden md:block bg-gold uppercase text-black px-8 py-3 rounded font-medium hover:bg-white hover:text-black transition-colors"
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
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-black flex flex-col space-y-4 px-4 py-6 uppercase"
          >
            {['Home', 'Fabrics', 'Design Gallery', 'About us', 'Contact us'].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.05 }}
                onClick={() => setMenuOpen(false)}
              >
                <a
                  href="#"
                  className="block hover:text-gold transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
            {/* Mobile CTA Button */}
            <motion.li whileHover={{ scale: 1.05 }}>
              <button
                className="w-full bg-gold uppercase text-black px-8 py-3 rounded font-medium hover:bg-white hover:text-black transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Design your Kurta
              </button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
