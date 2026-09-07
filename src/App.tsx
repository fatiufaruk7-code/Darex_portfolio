/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Process } from './components/Process.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { PopMessage } from './components/PopMessage.tsx';

export default function App() {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    // Active navigation section observer
    const sectionIds = ['home', 'about', 'skills', 'projects', 'process', 'contact'];
    const handleSectionScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleSectionScroll, { passive: true });
    handleSectionScroll();

    return () => {
      reveals.forEach((el) => revealObserver.unobserve(el));
      window.removeEventListener('scroll', handleSectionScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#7182ff]/30 selection:text-white overflow-hidden">
      {/* Frosted Glass Ambient Mesh Gradients */}
      <div className="mesh-1" aria-hidden="true" />
      <div className="mesh-2" aria-hidden="true" />
      <div className="mesh-3" aria-hidden="true" />

      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
      <PopMessage />
    </div>
  );
}


