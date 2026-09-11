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
            className="flex items-center gap-2 text-decoration-none"
            aria-label="Champz Digital"
          >
            <div className="w-7 h-7 rounded-lg bg-[#2563EB]/15 border border-[#3B82F6]/30 flex items-center justify-center font-black tracking-tighter text-[#3B82F6] text-xs">
              CD
            </div>
            <span className="font-extrabold tracking-tight text-white text-sm">
              Champz<span className="text-[#3B82F6]">Digital</span>
            </span>
          </a>
          <p className="text-[11px] uppercase tracking-wider text-[#64748B]">{personalInfo.brandName} — {personalInfo.tagline}</p>
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
            &copy; {new Date().getFullYear()} {personalInfo.brandName}. All rights reserved.
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
