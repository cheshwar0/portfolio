import React from 'react';
import { motion } from 'framer-motion';
import { HiTranslate } from 'react-icons/hi';

const Languages = () => {
  const languages = [
    { name: "English", level: "Professional working proficiency" },
    { name: "Hindi", level: "Native or bilingual proficiency" },
    { name: "Telugu", level: "Native or bilingual proficiency" },
    { name: "Kannada", level: "Native or bilingual proficiency" }
  ];

  return (
    <section id="languages" className="py-32 relative bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-neon-cyan font-outfit font-bold uppercase tracking-[0.4em] mb-4 text-sm">Linguistics</h2>
          <h3 className="text-5xl font-outfit font-extrabold text-slate-900 tracking-tighter text-center">Languages</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {languages.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 text-center hover:border-neon-cyan/30 transition-all shadow-sm group"
            >
              <div className="w-12 h-12 rounded-full bg-white mx-auto mb-4 flex items-center justify-center text-neon-cyan shadow-sm group-hover:bg-neon-cyan group-hover:text-white transition-all">
                <HiTranslate size={24} />
              </div>
              <h4 className="text-xl font-outfit font-bold text-slate-900 mb-2 uppercase tracking-tighter">{lang.name}</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
