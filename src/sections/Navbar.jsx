import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ selectedProject, onNavigateHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const glowRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple intersection detection
      if (!selectedProject) {
        const sections = ['hero', 'about', 'projects', 'certifications', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        setActiveSection('projects');
      }
    };

    const handleMouseMove = (e) => {
      if (glowRef.current && navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div ref={glowRef} className="nav-cursor-glow" />
      <div className="nav-inner">
        <a
          href="#hero"
          onClick={(e) => {
            if (selectedProject) {
              onNavigateHome();
              setTimeout(() => {
                const element = document.querySelector('#hero');
                if (element) element.scrollIntoView();
              }, 100);
            }
          }}
          className="nav-logo"
        >
          Pratishtha<span className="text-accent-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  if (selectedProject) {
                    onNavigateHome();
                    // Let react render home, then scroll to the hash
                    setTimeout(() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView();
                    }, 100);
                  }
                }}
                className={`nav-link ${(!selectedProject && activeSection === link.id) || (selectedProject && link.id === 'projects') ? 'active' : ''}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Trigger (Simplified for this style) */}
        <div className="md:hidden flex items-center">
          <span className="text-accent-secondary text-xs font-mono uppercase tracking-widest opacity-50">Menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
