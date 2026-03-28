import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AtmosphericBackground from './components/AtmosphericBackground';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';

import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="min-h-screen relative bg-white selection:bg-neon-cyan selection:text-white cursor-none">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <AtmosphericBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Projects />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
