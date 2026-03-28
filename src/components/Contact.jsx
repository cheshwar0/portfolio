import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-neon-cyan uppercase tracking-[0.3em] mb-4">Transmission</h2>
          <h3 className="text-4xl font-outfit font-bold">Contact <span className="text-glow-cyan text-neon-cyan">Base</span></h3>
        </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ y: -5 }} 
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center"
            >
              <div className="text-neon-cyan mb-4 flex justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h4 className="text-slate-900 font-bold mb-1">Email Me</h4>
              <p className="text-slate-500 text-sm">cheshwar4400@gmail.com</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ y: -5 }} 
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center"
            >
              <div className="text-neon-cyan mb-4 flex justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <h4 className="text-slate-900 font-bold mb-1">Call Me</h4>
              <p className="text-slate-500 text-sm">+91 7019034400</p>
            </motion.div>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
            className="space-y-6 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">Identity</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-cyan transition-colors text-slate-900 placeholder:text-slate-300 shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-cyan transition-colors text-slate-900 placeholder:text-slate-300 shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">Message</label>
              <textarea 
                rows="5"
                placeholder="How can I help you today?"
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-cyan transition-colors text-slate-900 placeholder:text-slate-300 shadow-sm resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-slate-900 text-white rounded-xl font-outfit font-bold uppercase tracking-[0.2em] relative overflow-hidden group shadow-xl"
            >
              <div className="absolute inset-0 bg-neon-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors">Send Message</span>
            </motion.button>
          </motion.form>

      </div>
    </section>
  );
};

export default Contact;
