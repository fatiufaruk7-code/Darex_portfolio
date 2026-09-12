import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';
import { PWAInstallButton } from './PWAInstallButton.tsx';
import { scrollToSection } from '../utils/navigation.ts';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle initial URL hash scroll on mount
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        scrollToSection(hashId, false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle browser Back / Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hashId = window.location.hash ? window.location.hash.replace('#', '') : 'home';
      scrollToSection(hashId, false);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(id, true);
  };

  return (
    <>
      {/* Mobile Backdrop Blur Overlay — only mounted and visible when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div 
          className="mobile-backdrop-overlay md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className={`fixed top-0 left-0 w-full z-[1000] ${isScrolled ? 'scrolled' : ''}`} id="main-header">
        {/* STEP 4: Thin blue light line sweep across header area */}
        <div className="header-light-sweep" aria-hidden="true" />

        <nav className="navbar container relative flex items-center justify-between">
          <a 
            href="#home" 
            className="logo flex items-center gap-2.5 z-10" 
            onClick={(e) => handleNavClick(e, 'home')}
            aria-label="Champz Digital Home"
          >
            <span className="logo-badge animate-cd-logo shrink-0" role="img" aria-label="Champz Digital logo">
              <span>C</span><span className="badge-d">D</span>
            </span>
            <span className="logo-title animate-brand-title whitespace-nowrap">
              Champz<span className="title-digital">Digital</span>
            </span>
          </a>

          {/* Nav links: hidden on mobile by default, displayed as dropdown when open */}
          <ul 
            className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} 
            id="navLinks"
            role="menu"
          >
            {navItems.map((item) => (
              <li key={item.id} role="none">
                <a
                  href={`#${item.id}`}
                  role="menuitem"
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {mobileMenuOpen && (
              <>
                <li className="pt-3 md:hidden w-full max-w-[240px]" role="none">
                  <a
                    href="#contact"
                    role="menuitem"
                    className="nav-contact inline-flex items-center justify-center gap-2 w-full text-center"
                    onClick={(e) => handleNavClick(e, 'contact')}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Connect
                  </a>
                </li>
                <li className="pt-2 md:hidden w-full max-w-[240px] flex justify-center" role="none">
                  <PWAInstallButton variant="mobile" />
                </li>
              </>
            )}
          </ul>

          <div className="hidden md:flex items-center gap-3 animate-nav-items">
            <PWAInstallButton variant="nav" />
            <a 
              href="#contact" 
              className="nav-contact inline-flex items-center gap-2"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Connect
            </a>
          </div>

          <button
            type="button"
            className="menu-btn md:hidden"
            id="menuBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="navLinks"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </nav>
      </header>
    </>
  );
};
