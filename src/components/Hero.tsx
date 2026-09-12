import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Twitter, MessageCircle, ChevronDown, Briefcase } from 'lucide-react';
import { personalInfo, codeSnippetString } from '../data/portfolioData.ts';
import { scrollToSection } from '../utils/navigation.ts';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippetString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollTo = (id: string) => {
    scrollToSection(id, true);
  };

  return (
    <section className="hero section relative overflow-hidden" id="home">
      {/* Extremely Subtle Ambient Background Orbs */}
      <div className="ambient-hero-orb-1" aria-hidden="true" />
      <div className="ambient-hero-orb-2" aria-hidden="true" />

      <div className="container hero-grid relative z-10">
        <div className="flex flex-col justify-center">
          {/* Subtle Professional Status Indicator */}
          <div className="status-badge relative z-10 inline-flex items-center gap-2 mb-2.5 sm:mb-4 animate-hero-status max-w-full" id="hero-status">
            <div className="status-dot-blue shrink-0"></div>
            <span className="status-text-blue text-[10px] xs:text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest whitespace-nowrap">
              AVAILABLE FOR FREELANCE PROJECTS
            </span>
          </div>

          {/* Main Heading with Masked Upward Reveal */}
          <div className="hero-headline-mask overflow-hidden py-1 min-h-0">
            <h1 className="tracking-tighter text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white animate-hero-headline break-words leading-tight sm:leading-none">
              {personalInfo.name}<span className="text-[#3B82F6]">.</span>
            </h1>
          </div>

          {/* Supporting Title */}
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#60A5FA] uppercase font-mono mt-1 mb-2 animate-hero-supporting-title">
            {personalInfo.supportingTitle}
          </p>

          {/* Main Headline with Masked Reveal */}
          <div className="hero-subhead-mask overflow-hidden my-1 min-h-0">
            <p className="hero-subhead text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight animate-hero-subhead">
              Modern Websites.{' '}
              <span className="text-[#3B82F6]">Digital Solutions.</span>
            </p>
          </div>

          {/* Supporting Text */}
          <p className="hero-description text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-lg mb-6 animate-hero-supporting">
            {personalInfo.shortDescription}
          </p>

          {/* Two Primary CTA Buttons: Staggered entrance */}
          <div className="buttons flex flex-wrap gap-3 sm:gap-3.5 items-center">
            <button 
              onClick={() => scrollTo('contact')} 
              className="btn-frosted-primary animate-hero-cta-1 w-full xs:w-auto"
              id="hero-hire-btn"
              title="Start a project with Champz Digital"
            >
              <Briefcase className="w-4 h-4 mr-1 text-white shrink-0" />
              <span>Start a Project</span>
            </button>

            <button 
              onClick={() => scrollTo('projects')} 
              className="btn-frosted-secondary animate-hero-cta-2 w-full xs:w-auto"
              id="hero-work-btn"
              title="View selected work and projects"
            >
              <span>View Selected Work</span>
              <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
            </button>
          </div>

          {/* Frosted Proof Badges & Socials with Staggered Entrance */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4 mt-4 sm:mt-6 pt-3.5 sm:pt-5 border-t border-[#1E293B]">
            <div className="flex items-center gap-3 animate-hero-proof-badges min-w-0">
              <div className="flex -space-x-2 shrink-0" aria-label="Technologies: React, Node.js, TypeScript">
                <div className="w-8 h-8 rounded-full border-2 border-[#080B14] bg-[#111827] flex items-center justify-center text-[10px] font-bold text-[#60A5FA] shadow-md shrink-0">React</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#080B14] bg-[#111827] flex items-center justify-center text-[10px] font-bold text-[#3B82F6] shadow-md shrink-0">Node</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#080B14] bg-[#111827] flex items-center justify-center text-[10px] font-bold text-[#22D3EE] shadow-md shrink-0">TS</div>
              </div>
              <span className="text-xs sm:text-sm text-[#94A3B8] font-medium leading-tight sm:leading-snug">
                Professional Web Development &amp; Solutions
              </span>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 animate-hero-proof-socials">
              <a 
                href={personalInfo.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter / X Profile (@Toriblackm8j9)"
                title="Twitter / X Profile (@Toriblackm8j9)"
                id="social-twitter"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#111827] border border-[#1E293B] hover:border-[#3B82F6] flex items-center justify-center text-[#94A3B8] hover:text-[#60A5FA] transition-colors shrink-0"
              >
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a 
                href={personalInfo.socials.whatsapp} 
                target="_blank" 
                rel="noreferrer"
                aria-label={`Chat on WhatsApp (${personalInfo.socials.whatsappNumber})`}
                title={`Chat on WhatsApp (${personalInfo.socials.whatsappNumber})`}
                id="social-whatsapp"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#111827] border border-[#1E293B] hover:border-[#3B82F6] flex items-center justify-center text-[#94A3B8] hover:text-[#3B82F6] transition-colors shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* FROSTED CODE WINDOW */}
        <div className="w-full flex justify-center lg:justify-end animate-hero-code min-w-0 max-w-full">
          <div className="code-window-frosted code-font w-full max-w-[500px] min-w-0" id="hero-code-window">
            <div className="code-window-header">
              <div className="code-window-dots" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="code-window-filename truncate">champz-digital.ts</div>

              <button 
                onClick={handleCopyCode} 
                className="code-copy-btn shrink-0"
                title="Copy code to clipboard"
                aria-label="Copy code snippet"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span className="text-[#3B82F6]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="code-window-body">
              <pre className="text-[11px] xs:text-xs sm:text-[13px] leading-relaxed">
                <span className="syntax-p">const</span> <span className="syntax-b">brand</span> = &#123;{'\n'}
                {'  '}<span className="syntax-b">name</span>: <span className="syntax-g">&quot;Champz Digital&quot;</span>,{'\n'}
                {'  '}<span className="syntax-b">focus</span>: <span className="syntax-g">&quot;Web Development&quot;</span>,{'\n'}
                {'  '}<span className="syntax-b">mission</span>: <span className="syntax-g">&quot;Modern Websites. Digital Solutions.&quot;</span>,{'\n'}
                {'  '}<span className="syntax-b">status</span>: <span className="syntax-y">&quot;Available for projects&quot;</span>{'\n'}
                &#125;;{'\n\n'}
                <span className="syntax-p">function</span> <span className="syntax-y">buildWebsite</span>(<span className="syntax-b">client</span>) &#123;{'\n'}
                {'  '}<span className="syntax-p">return</span> &#123;{'\n'}
                {'    '}<span className="syntax-b">speed</span>: <span className="syntax-g">&quot;Blazing Fast&quot;</span>,{'\n'}
                {'    '}<span className="syntax-b">design</span>: <span className="syntax-g">&quot;Clean &amp; Responsive&quot;</span>,{'\n'}
                {'    '}<span className="syntax-b">solution</span>: <span className="syntax-y">&quot;Tailored to Goals&quot;</span>{'\n'}
                {'  '}&#125;;{'\n'}
                &#125;
              </pre>
            </div>

            <div className="code-ambient-glow" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div 
        className="scroll-indicator cursor-pointer animate-scroll-indicator" 
        onClick={() => scrollTo('services')}
        title="Scroll to explore services"
      >
        <span>Explore Services</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </div>
    </section>
  );
};
