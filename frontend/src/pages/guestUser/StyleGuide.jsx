import React, { useState } from 'react';
import { Ruler, Info, ChevronDown, ChevronUp, Grape as Tape, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import GuestNavbar from '../../components/guestUser/GuestNavbar';

function SizeGuide() {
  const [activeTab, setActiveTab] = useState('men');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Container variants for overall content
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.15 } 
    },
  };

  // Variants for sections, headers, etc.
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  // Variants for list items (individual measurement instructions)
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  // Hover effect for icons
  const iconHover = { scale: 1.1 };

  return (
    <div className="min-h-screen bg-gray-50">
      <GuestNavbar isTransparent={false} />
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="bg-white rounded-lg shadow-md p-8 mb-8" variants={itemVariants}>
          <div className="flex items-center mb-6">
            <motion.div whileHover={iconHover}>
              <Ruler className="h-8 w-8 text-gold mr-3" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 inter">Size Guide</h1>
          </div>
<br />
          {/* Quick Tips */}
          <motion.div className="bg-[#1A1A1D] text-white p-6 rounded-lg mb-8" variants={itemVariants}>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Tape className="h-5 w-5 mr-2 text-gold inter" />
              Before You Start
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div className="flex items-start space-x-3" whileHover={iconHover}>
                <CheckCircle className="h-5 w-5 text-gold mt-1" />
                <span className="text-white inter">Use a fabric measuring tape</span>
              </motion.div>
              <motion.div className="flex items-start space-x-3" whileHover={iconHover}>
                <CheckCircle className="h-5 w-5 text-gold mt-1" />
                <span className="text-white inter">Wear light, fitted clothing</span>
              </motion.div>
              <motion.div className="flex items-start space-x-3" whileHover={iconHover}>
                <CheckCircle className="h-5 w-5 text-gold mt-1" />
                <span className="text-white inter">Stand naturally while measuring</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Measurement Sections */}
        <div className="space-y-4">
          {/* Upper Body */}
          <motion.div className="bg-white rounded-lg shadow-md overflow-hidden" variants={itemVariants}>
            <button
              className="w-full px-8 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => toggleSection('upper')}
            >
              <div className="flex items-center">
                <h2 className="text-xl font-semibold text-gray-900 inter">Upper Body Measurements</h2>
              </div>
              {expandedSection === 'upper' ? (
                <ChevronUp className="h-5 w-5 text-gold" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gold" />
              )}
            </button>
            
            {expandedSection === 'upper' && (
              <motion.div className="px-8 py-6 border-t border-gray-100" variants={itemVariants}>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Chest',
                      instruction: 'Measure around the fullest part of your chest, keeping the tape horizontal.',
                      tip: 'Keep the tape snug but not tight.'
                    },
                    {
                      title: 'Shoulders',
                      instruction: 'Measure from shoulder point to shoulder point across the back.',
                      tip: 'Ensure your shoulders are relaxed.'
                    },
                    {
                      title: 'Sleeve Length',
                      instruction: 'Measure from shoulder point to desired sleeve length.',
                      tip: 'Keep your arm slightly bent.'
                    },
                    {
                      title: 'Neck',
                      instruction: 'Measure around the base of your neck.',
                      tip: 'Allow for one finger of space.'
                    }
                  ].map((item, index) => (
                    <motion.div key={index} className="bg-gray-50 p-4 rounded-lg" variants={listItemVariants}>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 inter">{item.title}</h3>
                      <p className="text-gray-600 mb-2 inter">{item.instruction}</p>
                      <div className="flex items-center text-sm text-gold">
                        <Info className="h-4 w-4 mr-1" />
                        <span>{item.tip}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Lower Body */}
          <motion.div className="bg-white rounded-lg shadow-md overflow-hidden" variants={itemVariants}>
            <button
              className="w-full px-8 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => toggleSection('lower')}
            >
              <div className="flex items-center">
                <h2 className="text-xl font-semibold text-gray-900 inter">Lower Body Measurements</h2>
              </div>
              {expandedSection === 'lower' ? (
                <ChevronUp className="h-5 w-5 text-gold" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gold" />
              )}
            </button>
            
            {expandedSection === 'lower' && (
              <motion.div className="px-8 py-6 border-t border-gray-100" variants={itemVariants}>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Waist',
                      instruction: 'Measure around your natural waistline.',
                      tip: 'Locate the narrowest part of your torso.'
                    },
                    {
                      title: 'Hips',
                      instruction: 'Measure around the fullest part of your hips.',
                      tip: 'Include the fullest part of your buttocks.'
                    },
                    {
                      title: 'Inseam',
                      instruction: 'Measure from crotch to desired length.',
                      tip: 'Stand straight with feet slightly apart.'
                    },
                    {
                      title: 'Thigh',
                      instruction: 'Measure around the fullest part of your thigh.',
                      tip: 'Keep the tape parallel to the floor.'
                    }
                  ].map((item, index) => (
                    <motion.div key={index} className="bg-gray-50 p-4 rounded-lg" variants={listItemVariants}>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 inter">{item.title}</h3>
                      <p className="text-gray-600 mb-2 inter">{item.instruction}</p>
                      <div className="flex items-center text-sm text-gold">
                        <Info className="h-4 w-4 mr-1" />
                        <span>{item.tip}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Additional Tips */}
        <motion.div className="mt-8 bg-white rounded-lg shadow-md p-8" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 inter">Pro Tips for Perfect Measurements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Get Help',
                description: 'Having someone assist you will ensure more accurate measurements.'
              },
              {
                title: 'Double Check',
                description: 'Take each measurement twice to ensure accuracy.'
              },
              {
                title: 'Document Everything',
                description: 'Write down measurements immediately to avoid forgetting.'
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:border-gold transition-colors"
                variants={itemVariants}
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-900 inter">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SizeGuide;
