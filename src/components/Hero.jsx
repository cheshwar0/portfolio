import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Glow Effect */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full -z-10 animate-pulse-glow" 
      />
      
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
       <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-32 pb-20">


        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl"
        >
          <h2 className="text-neon-cyan font-outfit font-bold tracking-[0.3em] uppercase mb-4 text-sm">Professional Full Stack Engineer</h2>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold text-slate-900 leading-tight mb-8 tracking-tighter">
            C H ESHWAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-purple-600 italic pr-2">RAO</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Architecting next-generation web systems with <span className="text-slate-900 font-medium">precision</span>, 
            <span className="text-slate-900 font-medium"> performance</span>, and <span className="text-slate-900 font-medium">premium design</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-colors flex items-center justify-center"
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Floating Indicator */}
    <motion.div 
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent" />
    </motion.div>
    </section>
  );
};

export default Hero;
