import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignSelection = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const designs = [
    {
      id: '1',
      name: 'Classic',
      image:
        'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      name: 'Modern',
      image:
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      name: 'Traditional',
      image:
        'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80'
    }
  ];

  const handleSelect = (designId) => {
    // Store selection and navigate to next step
    navigate('/measurements');
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleUploadDesign = () => {
    if (selectedFile) {
      // Typically, you would upload the file here.
      navigate('/measurements');
    }
  };

  // Framer Motion variants
  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 0.5, transition: { duration: 0.3 } }
  };

  const textVariants = {
    rest: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://www.shutterstock.com/image-photo/beautiful-dark-blue-silk-satin-600nw-2019336026.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Select Your Design
          </h1>
          <p className="text-xl text-white">
            Choose a design that matches your style or upload your own
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designs.map((design) => (
            <motion.div
              key={design.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer relative"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              onClick={() => handleSelect(design.id)}
            >
              <div className="relative">
                <img
                  src={design.image}
                  alt={design.name}
                  className="w-full h-64 object-cover"
                />
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black"
                  variants={overlayVariants}
                />
                {/* Hover Text */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  variants={textVariants}
                >
                  <span className="text-white text-lg font-semibold">
                    View Designs
                  </span>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {design.name}
                </h3>
              </div>
            </motion.div>
          ))}

          {/* Upload Design Option */}
          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <motion.div
              className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer relative ${
                !previewUrl ? 'border-2 border-dashed border-gray-300' : ''
              }`}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              onClick={handleUploadClick}
            >
              <div className="relative">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Uploaded design"
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center p-6">
                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Upload Your Design
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                      Click to upload your own design
                    </p>
                  </div>
                )}
                {/* Overlay for upload card */}
                <motion.div
                  className="absolute inset-0 bg-black"
                  variants={overlayVariants}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  variants={textVariants}
                >
                  <span className="text-white text-lg font-semibold">
                    {previewUrl ? 'Select This Design' : 'Upload Design'}
                  </span>
                </motion.div>
              </div>
              {previewUrl && (
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Your Design
                  </h3>
                </div>
              )}
            </motion.div>
            {selectedFile && (
              <button
                onClick={handleUploadDesign}
                className="mt-4 w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Continue with Your Design
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSelection;
