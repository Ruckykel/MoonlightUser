// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-center md:justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="/MoonlightRed.png" 
              alt="Moonlight" 
              className="h-8 w-auto md:h-10"
            />
          </motion.div>

          {/* Navigation Items - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              className="text-white font-medium hover:text-gray-300 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FAQs
            </motion.button>
            
            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-200 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;