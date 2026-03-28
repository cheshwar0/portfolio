import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 relative p-4 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/5 to-neon-purple/5" />
              <div className="h-full w-full flex items-center justify-center relative">
                <div className="w-full h-full bg-white rounded-2xl border border-slate-100 flex items-center justify-center relative overflow-hidden group">
                  <img 
                    src="/profile.jpg.jpeg" 
                    alt="Professional Headshot" 
                    className="w-full h-full object-cover object-top relative z-10 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
            

          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <h4 className="text-neon-cyan font-outfit font-bold uppercase tracking-[0.4em] mb-6 text-sm">The Engineer</h4>
            <h2 className="text-5xl font-outfit font-extrabold text-slate-900 mb-8 leading-tight tracking-tighter">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">next generation</span> of web systems.
            </h2>
            
            <div className="space-y-6 text-slate-600 font-light text-lg leading-relaxed">
              <p>
                I am a B.E. Computer Science student at <span className="text-slate-900 font-medium">Navodaya Institute of Technology</span> with a focus on Full Stack Development and Machine Learning. 
                My passion lies in creating efficient, scalable, and visually compelling applications.
              </p>
              <p>
                With experience as a Java Full Stack Developer at <span className="text-slate-900 font-medium">Tap Academy</span>, I've honed my skills in Java, React.js, and modern databases. 
                I bridge the gap between complex backend logic and immersive frontend experiences.
              </p>
            </div>

            <div className="mt-12 flex gap-12">
              <div>
                <div className="text-3xl font-outfit font-bold text-slate-900 italic">2022 - 2026</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">Batch (NIT)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
