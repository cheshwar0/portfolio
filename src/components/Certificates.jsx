import React from 'react';
import { motion } from 'framer-motion';
import { HiBadgeCheck } from 'react-icons/hi';

const Certificates = () => {
  const certifications = [
    {
      title: "Machine Learning for All",
      issuer: "University of London",
      platform: "Coursera",
      status: "Completed",
      date: "2026"
    },
    {
      title: "Java Programming Certificate",
      issuer: "Great Learning",
      platform: "Great Learning Academy",
      status: "Earned",
      date: "2023"
    }
  ];

  return (
    <section id="certificates" className="py-32 relative bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
           className="text-center mb-20"
        >
          <h2 className="text-neon-purple font-outfit font-bold uppercase tracking-[0.4em] mb-4 text-sm">Credentials</h2>
          <h3 className="text-5xl font-outfit font-extrabold text-slate-900 tracking-tighter text-center">Professional Certifications</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: idx * 0.1, duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple shrink-0 group-hover:bg-neon-purple group-hover:text-white transition-colors">
                <HiBadgeCheck size={32} />
              </div>
              <div>
                <h4 className="text-xl font-outfit font-bold text-slate-900 mb-2 group-hover:text-neon-purple transition-colors">{cert.title}</h4>
                <p className="text-slate-500 font-medium mb-4">{cert.issuer}</p>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-slate-50 text-[10px] font-bold text-slate-400 rounded-full border border-slate-100 uppercase tracking-widest">{cert.platform}</span>
                  <span className="text-[10px] font-bold text-neon-purple uppercase tracking-widest">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
