import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] bg-space-900 flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-2 border-neon-cyan/20 border-t-neon-cyan rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-neon-cyan text-[10px] font-mono animate-pulse">INIT...</div>
        </div>
      </div>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-[1px] bg-neon-cyan mt-8"
      />
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: 2 }}
        className="text-white/40 text-[10px] uppercase tracking-[0.5em] mt-4"
      >
        Synchronizing Gravity
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
