
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { useRive } from '@rive-app/react-canvas';

const ReasonsSection = () => {
  // Rive animation hook for the reasons cards
  const { RiveComponent } = useRive({
    src: '/reasons_to_watch.riv', // Replace with your actual Rive file name
    artboard: 'Main Reason to watch', // Replace with your artboard name
    stateMachines: 'reason to watch state machine', // Replace with your state machine name
    autoplay: true,
  });

  return (
    <section className="bg-[#222222] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Static Text */}
        <motion.h2 
          className="text-white text-2xl md:text-2xl font-bold mb-12 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Reasons To Sign Up Today
        </motion.h2>

        {/* Rive Animation Container - Contains all 4 cards */}
        <motion.div 
         className="w-full h-[500px] md:h-[600px]"
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.2 }}
        >
         <RiveComponent className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default ReasonsSection;