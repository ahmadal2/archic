import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center perspective-container">
      <div className="text-center">
        {/* Logo/Title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-space font-extralight tracking-[-0.02em] text-white mb-4">
            Ahmad architecture
          </h1>
          <p className="text-sm lg:text-base font-light tracking-[0.15em] uppercase text-white/80">
            Loading Experience
          </p>
        </motion.div>

        {/* Quantum Loader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="quantum-loader"></div>
        </motion.div>

        {/* Loading text with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-2"
        >
          <p className="text-gray-400 font-light">
            Preparing architectural experience
          </p>
          <div className="flex justify-center space-x-1">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 bg-cyan-500 rounded-full"
            />
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 bg-cyan-500 rounded-full"
            />
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 bg-cyan-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;