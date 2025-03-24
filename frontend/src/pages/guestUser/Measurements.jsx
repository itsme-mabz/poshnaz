import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Measurements = () => {
  const navigate = useNavigate();
  const [measurementType, setMeasurementType] = useState('standard');
  const [selectedSize, setSelectedSize] = useState('M');
  const [customMeasurements, setCustomMeasurements] = useState({
    chest: 0,
    waist: 0,
    hips: 0,
    length: 0,
    shoulders: 0,
    sleeves: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store measurements and navigate to confirmation
    navigate('/order-confirmation');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://fashionfabricsclub.com/cdn/shop/files/APS5576D.jpg?v=1733343826"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Your Measurements
            </h1>
            <p className="text-xl text-gray-600">
              Choose your preferred measurement method
            </p>
          </div>

          {/* Measurement Type Toggle */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-6 py-2 rounded-lg ${
                measurementType === 'standard'
                  ? 'bg-gold text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setMeasurementType('standard')}
            >
              Standard Sizes
            </button>
            <button
              className={`px-6 py-2 rounded-lg ${
                measurementType === 'custom'
                  ? 'bg-gold text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setMeasurementType('custom')}
            >
              Custom Measurements
            </button>
          </div>

          {/* Measurement Form */}
          <form onSubmit={handleSubmit}>
            {measurementType === 'standard' ? (
              <div className="grid grid-cols-4 gap-4">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`p-4 text-center rounded-lg ${
                      selectedSize === size
                        ? 'bg-gold text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {Object.entries(customMeasurements).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {key.charAt(0).toUpperCase() + key.slice(1)} (inches)
                    </label>
                    <input
                      type="number"
                      value={value}

                      onChange={(e) =>
                        setCustomMeasurements({
                          ...customMeasurements,
                          [key]: parseFloat(e.target.value)
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                ))}
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-8 bg-gold text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Continue to Order Summary
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Measurements;
