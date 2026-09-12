import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';
import { PWAInstallButton } from './PWAInstallButton.tsx';

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''} id="main-header">
      {/* Mobile Backdrop Blur Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-backdrop-overlay sm:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className="navbar container">
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Champz Digital Home"
        >
          <span className="logo-badge animate-cd-logo">
            <span>C</span><span className="badge-d">D</span>
          </span>
          <span className="logo-title animate-brand-title">
            Champz<span className="title-digital">Digital</span>
          </span>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''} animate-nav-items`} id="navLinks">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
          {mobileMenuOpen && (
            <>
              <li className="pt-3 sm:hidden">
                <a
                  href="#contact"
                  className="nav-contact inline-flex items-center justify-center gap-2 w-full"
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Connect
                </a>
              </li>
              <li className="pt-2 sm:hidden">
                <PWAInstallButton variant="mobile" />
              </li>
            </>
          )}
        </ul>

        <div className="hidden sm:flex items-center gap-3 animate-nav-items">
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
          className="menu-btn"
          id="menuBtn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
    </header>
  );
};
