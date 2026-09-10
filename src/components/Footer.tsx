import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer">
      <div className="container footer">
        <div className="footer-brand">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            className="logo"
            aria-label="Clarity Creative"
          >
            <span>C</span>
            <span className="logo-exp">²</span>
            <span className="logo-sub hidden sm:inline">{personalInfo.brandName}</span>
          </a>
          <p className="text-[11px] uppercase tracking-wider text-[#64748b]">{personalInfo.brandName} Studios — {personalInfo.role}</p>
        </div>

        <ul className="footer-nav hidden md:flex">
          {['home', 'services', 'pricing', 'projects', 'about', 'contact'].map((sec) => (
            <li key={sec}>
              <a 
                href={`#${sec}`} 
                onClick={(e) => { e.preventDefault(); scrollTo(sec); }}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94a3b8] hover:text-white transition-colors"
              >
                {sec}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <p className="footer-text text-[11px] tracking-wider uppercase opacity-70">
            &copy; {new Date().getFullYear()} {personalInfo.name} Studios
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/30 transition-all cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
