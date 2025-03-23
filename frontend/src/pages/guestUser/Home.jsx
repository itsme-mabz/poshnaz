import { motion } from 'framer-motion';
import GuestNavbar from '../../components/guestUser/GuestNavbar';
import image from '../../assets/homebg.jpeg';
import CategoriesUnderHero from '../../components/guestUser/CategoriesUnderHero';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  // Change these values to adjust overlay color and opacity
  const overlayColor = '#000000'; // Overlay color
  const overlayOpacity = 0.5;     // Overlay opacity (0 to 1)
  const navigate = useNavigate();
  // Animation variants for the container and its children
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="w-full min-h-screen bg-black text-white relative">
      {/* Transparent Navbar on the Hero */}
      <GuestNavbar isTransparent />

      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-start px-4 relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
        ></div>

        {/* Hero Content with on-load animations */}
        <motion.div
          className="w-full px-10 mx-auto mt-20 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-7xl md:text-7xl font-bold font-serif mb-7"
            variants={itemVariants}
          >
            From concept to masterpiece
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-7"
            variants={itemVariants}
          >
            We offer customized kurta designs for men.
          </motion.p>
          <motion.button
            className="bg-gold rounded text-black px-10 py-5 font-medium transition-colors"
            onClick={() => navigate('/choose-your-style')}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            DESIGN YOUR KURTA
          </motion.button>
        </motion.div>
      </div>
        <CategoriesUnderHero />
    </div>
  );
}
