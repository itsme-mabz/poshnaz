import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiBarChart2, FiPieChart, FiSettings } from 'react-icons/fi';
import { AiOutlineProduct } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoIosPricetag } from 'react-icons/io';

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'tween',
      duration: 0.3,
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.1,
      type: 'tween',
      duration: 0.3,
    },
  }),
};

const Sidebar = () => {
  // Define top links (displayed at the top)
  const topLinks = [
    { label: 'Home', to: '/admin', icon: <FiHome /> },
    { label: 'Products', to: '/admin/products', icon: <AiOutlineProduct /> },
    { label: 'Orders', to: '/admin/orders', icon: <IoIosPricetag /> },
    { label: 'Customers', to: '/admin/customers', icon: <BsFillPersonFill /> },
    { label: 'Analytics', to: '/admin/analytics', icon: <FiBarChart2 /> },
  ];

  // Define bottom links (displayed at the bottom)
  const bottomLinks = [
    // { label: 'Settings', to: '/admin/settings', icon: <FiSettings /> },
  ];

  return (
    <aside className="bg-white inter text-gray-900 border-r border-gray-200 h-full p-8 w-72 flex flex-col justify-between">
      {/* Top Navigation */}
      <nav>
        <ul className="space-y-4">
          {topLinks.map((link, index) => (
            <motion.li
              key={link.to}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center font-semibold space-x-3 p-3 rounded-lg"
            >
              <motion.span
                custom={index}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                className="text-xl"
              >
                {link.icon}
              </motion.span>
              <Link
                to={link.to}
                className="hover:text-light inter transition-colors duration-200"
              >
                <h2 className="inter">{link.label}</h2>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Bottom Navigation for Settings */}
      <nav>
        <ul className="space-y-2">
          {bottomLinks.map((link, index) => (
            <motion.li
              key={link.to}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center font-semibold space-x-3 p-3 rounded-lg"
            >
              <motion.span
                custom={index}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                className="text-xl"
              >
                {link.icon}
              </motion.span>
              <Link
                to={link.to}
                className="hover:text-light transition-colors duration-200"
              >
                <h2 className="inter">{link.label}</h2>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
