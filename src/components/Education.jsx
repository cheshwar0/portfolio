import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const Education = () => {
  return (
    <section id="education" className="py-32 relative bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
           className="text-center mb-20"
        >
          <h2 className="text-neon-cyan font-outfit font-bold uppercase tracking-[0.4em] mb-4 text-sm">Background</h2>
          <h3 className="text-5xl font-outfit font-extrabold text-slate-900 tracking-tighter text-center">Education</h3>
          <div className="w-20 h-1 bg-neon-cyan mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
            className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-neon-cyan to-neon-purple opacity-20" />
            
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white shadow-lg shrink-0">
                <HiAcademicCap size={40} />
              </div>
              
              <div className="flex-1">
                <h4 className="text-3xl font-outfit font-extrabold text-slate-900 mb-2 group-hover:text-neon-cyan transition-colors">
                  Bachelor of Engineering in Computer Science
                </h4>
                <p className="text-slate-500 font-medium text-lg mb-6">
                  Navodaya Institute of Technology, Raichur
                </p>
                
                <div className="flex flex-wrap gap-8 mb-8 text-slate-400 font-bold text-xs uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <HiCalendar className="text-neon-cyan" size={18} />
                    2022 — Present
                  </div>
                  <div className="flex items-center gap-2">
                    <HiLocationMarker className="text-neon-cyan" size={18} />
                    Raichur, Karnataka
                  </div>
                </div>


              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
