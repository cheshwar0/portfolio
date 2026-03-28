import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Education', 'Skills', 'Certificates', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center p-6"
    >
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200 px-8 py-3 rounded-full flex items-center gap-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple p-[2px] group cursor-pointer hover:rotate-[360deg] transition-transform duration-700">
            <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                <path d="M35 30 A20 20 0 1 0 35 70" />
                <path d="M55 30 L55 70 M55 50 L80 50 M80 30 L80 70" />
              </svg>
            </div>
          </div>
          <div className="text-slate-900 font-outfit font-bold text-lg tracking-tight uppercase">
            C H ESHWAR <span className="text-neon-cyan">RAO</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 hover:text-neon-cyan font-outfit text-sm font-medium transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="md:hidden text-slate-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
