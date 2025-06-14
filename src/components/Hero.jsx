// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRive } from '@rive-app/react-canvas';

const Hero = () => {
  const [email, setEmail] = useState('');

  // Rive animation hook
  const { RiveComponent } = useRive({
    src: '/for_users (9).riv', // Place your Rive file in public folder
    artboard: 'splash screen', // Replace with your artboard name
    stateMachines: 'splash screen state machine', // Replace with your state machine name
    autoplay: true,
  });

  const handleEmailSubmit = () => {
    if (email.trim()) {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/MovieBg.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Rive Animation */}
        <motion.div 
          className="mb-8 w-full max-w-3xl mx-auto h-64 md:h-80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <RiveComponent className="w-full h-full" />
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-white text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Sign Up Today For ₦2500 To Watch Movies/Series From Various Producers On Either Your Phone, Laptop Or TV
        </motion.p>

        {/* Email Signup Section */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-6 py-4 rounded-lg text-white placeholder-gray-300 bg-black bg-opacity-80 border border-gray-600 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 focus:border-red-500 transition-all duration-300 text-lg"
              />
            </div>
            <motion.button
              onClick={handleEmailSubmit}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl text-lg whitespace-nowrap min-w-[120px]"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(220, 38, 38, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;