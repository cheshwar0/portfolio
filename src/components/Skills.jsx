import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiSpringboot, SiJavascript, SiTailwindcss, SiNodedotjs, SiMysql, SiMongodb, SiPython } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const skillCategories = {
  "Frontend": [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'HTML/CSS',
  ],
  "Backend": [
    'Java',
    'Spring Boot',
    'Python',
    'Node.js',
  ],
  "Databases & DevOps": [
    'MySQL',
    'MongoDB',
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
           className="text-center mb-20"
        >
          <h2 className="text-neon-cyan font-outfit font-bold uppercase tracking-[0.4em] mb-4 text-sm">Expertise</h2>
          <h3 className="text-5xl font-outfit font-extrabold text-slate-900 tracking-tighter">Technical Arsenal</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {Object.entries(skillCategories).flatMap(([category, skills]) => 
            skills.map((skillName) => {
              const skillData = [
                { name: 'React', icon: SiReact, color: '#61DAFB' },
                { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
                { name: 'Java', icon: FaJava, color: '#ED8B00' },
                { name: 'Python', icon: SiPython, color: '#3776AB' },
                { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
                { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
                { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
                { name: 'HTML/CSS', icon: SiPython, color: '#E34F26' },
              ].find(s => s.name === skillName) || { name: skillName, icon: SiPython, color: '#ccc' };

              return (
                <motion.div
                  key={skillName}
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                  className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-xl transition-all cursor-default"
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    {React.createElement(skillData.icon, { 
                      size: 48, 
                      style: { color: skillData.color } 
                    })}
                  </div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.3em] font-outfit">
                    {skillData.name}
                  </span>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
