/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Pricing } from './components/Pricing.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Process } from './components/Process.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { PWAInstallBanner } from './components/PWAInstallBanner.tsx';
import { OfflineIndicator } from './components/OfflineIndicator.tsx';

export default function App() {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll reveal observer with smooth staggering support
    const reveals = document.querySelectorAll('.reveal, .reveal-card, .reveal-group');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach((el) => revealObserver.observe(el));

    // Active navigation section observer
    const handleSectionScroll = () => {
      // Bottom of page detection -> highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Top of page detection -> highlight home
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Check section bounding boxes with 140px header offset
      const sections = ['contact', 'process', 'skills', 'about', 'projects', 'pricing', 'services', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom > 140) {
            // Map sub-sections (skills, process) under the 'about' navigation item
            if (id === 'skills' || id === 'process') {
              setActiveSection('about');
            } else {
              setActiveSection(id);
            }
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
    <div className="relative min-h-screen selection:bg-[#2563EB]/30 selection:text-white overflow-hidden">
      {/* Frosted Glass Ambient Mesh Gradients */}
      <div className="mesh-1" aria-hidden="true" />
      <div className="mesh-2" aria-hidden="true" />
      <div className="mesh-3" aria-hidden="true" />

      <OfflineIndicator />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Pricing />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
      <PWAInstallBanner />
    </div>
  );
}


