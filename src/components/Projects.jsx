import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiReact } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const projects = [
  {
    title: "AI tutor",
    year: "2026",
    desc: "Intelligent Personalized Learning System using Python to analyze student learning patterns.",
    features: [
      "AI-based tutoring platform",
      "Analyzing student patterns with NumPy/Pandas",
      "Integrated MongoDB/MySQL storage"
    ],
    tech: ["Python", "NumPy", "MongoDB"],
    icon: SiPython,
    color: "#3776AB"
  },
  {
    title: "E-Commerce Full Stack",
    year: "2023",
    desc: "A robust full-stack application with RESTful APIs and order management.",
    features: [
      "Full-stack e-commerce architecture",
      "RESTful API for product listing",
      "MySQL/MongoDB data management"
    ],
    tech: ["React.js", "Java", "MySQL"],
    icon: FaJava,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-neon-cyan font-outfit font-bold uppercase tracking-[0.4em] mb-4 text-sm">Selected Works</h2>
          <h3 className="text-5xl font-outfit font-extrabold text-slate-900 tracking-tighter">Project Showcase</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: idx * 0.1, duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-neon-cyan shadow-inner">
                  {React.createElement(project.icon, { size: 30 })}
                </div>
                <span className="text-slate-400 font-outfit font-bold text-xs uppercase tracking-widest">{project.year}</span>
              </div>
              
              <h4 className="text-3xl font-outfit font-extrabold text-slate-900 mb-4 group-hover:text-neon-cyan transition-colors">{project.title}</h4>
              <p className="text-slate-600 font-light text-lg mb-8 leading-relaxed italic">"{project.desc}"</p>
              
              <div className="space-y-4 mb-10">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 bg-slate-50 text-[10px] font-bold text-slate-500 rounded-full border border-slate-100 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
