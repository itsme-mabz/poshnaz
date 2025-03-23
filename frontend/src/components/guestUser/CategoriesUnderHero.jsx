import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

export default function CategoriesUnderHero() {
  // Data for each card
  const products = [
    {
      title: 'KURTA',
      description:
        'Par ther theob fitda ihaex. Rade htar cnoton. Lorem ipsum text for demonstration only.',
      image: 'https://edge.pk/cdn/shop/products/45.jpg?v=1618666066',
    },
    {
      title: 'SHALWAR KAMEEZ',
      description:
        'Rawf int meha frsut laisf di eande. Lorem ipsum text for demonstration only.',
      image: 'https://xmilano.com/cdn/shop/files/AY5A3478_7b51bcbb-f394-4e76-8682-fc1b59454308.jpg',
    },
    {
      title: 'MEN PRINCE COAT',
      description:
        'Par thas fitdable ihaex. Rade htar cnoton. Lorem ipsum text for demonstration only.',
      image: 'https://i.pinimg.com/736x/1e/76/aa/1e76aa5b88bbb86cf613437142cdbc28.jpg',
    },
    {
      title: 'SHIRTS',
      description:
        'Par thos fitdable ihaex. Rade htar cnoton. Lorem ipsum text for demonstration only.',
      image: 'https://i0.wp.com/infomazza.com/wp-content/uploads/2015/07/Men-Eid-Dresses-2015-32.jpg',
    },
  ];

  // Animation variants for the entire section container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="w-full bg-black py-16" // Full-width, dark background
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center text-center bg-[#2E2E2E] text-white p-6"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }} // Slight hover scale
          >
            {/* Image Wrapper */}
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {/* Icon Button (top-right) */}
              <button className="absolute top-3 right-3 bg-black text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors">
                <FiPlus />
              </button>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mt-5 mb-2 uppercase inter">
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-sm mb-5 px-2">
              {product.description}
            </p>

            {/* Button */}
            <button className="bg-gold text-black px-4 py-2 font-medium uppercase hover:bg-white hover:text-black transition-colors">
              Customize Now
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
