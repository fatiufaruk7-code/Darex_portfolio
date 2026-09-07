import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

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
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
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
      <nav className="navbar container">
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Clarity Creative Home"
        >
          <span>C</span>
          <span className="logo-exp">²</span>
          <span className="logo-sub hidden sm:inline">{personalInfo.brandName}</span>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="navLinks">
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
            <li className="pt-3 sm:hidden">
              <a
                href="#contact"
                className="nav-contact inline-flex items-center gap-2"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Connect
              </a>
            </li>
          )}
        </ul>

        <a 
          href="#contact" 
          className="nav-contact hidden sm:inline-flex"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Connect
        </a>

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
