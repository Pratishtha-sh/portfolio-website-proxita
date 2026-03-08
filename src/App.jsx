import React, { useState } from 'react';
import Hero from './sections/Hero.jsx'
import Navbar from './sections/Navbar.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import ProjectDetail from './sections/ProjectDetail.jsx'
import Certifications from './sections/Certifications.jsx'
import Contact from './sections/Contact.jsx'

import Loader from './components/Loader.jsx'
import { useGSAP } from '@gsap/react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(() => {
    if (!isLoading) {
      const tl = gsap.timeline();
      gsap.set('section, nav', { opacity: 0, y: 20 });

      tl.to('nav', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        .to('section', {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          clearProps: 'all'
        }, "-=0.4");
    }
  }, [isLoading]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {isLoading && <Loader onFinished={() => setIsLoading(false)} />}
      <main className={`max-w-7xl mx-auto px-6 md:px-12 relative ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar
          selectedProject={selectedProject}
          onNavigateHome={() => setSelectedProject(null)}
        />

        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div id="hero"><Hero /></div>
              <div id="about"><About /></div>
              <div id="projects"><Projects onSelectProject={handleProjectSelect} /></div>
              <Certifications />
              <div id="contact"><Contact /></div>

            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectDetail
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
              />

            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}

export default App