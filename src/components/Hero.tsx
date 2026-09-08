import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Twitter, MessageCircle, ChevronDown } from 'lucide-react';
import { personalInfo, codeSnippetString } from '../data/portfolioData.ts';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippetString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="reveal show">
          <div className="status-badge" id="hero-status">
            <div className="status-dot-orange"></div>
            <span className="status-text-orange">Ready for new projects</span>
          </div>

          <h1 className="tracking-tighter">
            {personalInfo.name}<span>.</span>
          </h1>

          <p className="hero-subhead">
            Full-Stack Developer &
            <br />
            <span>Digital Experience Architect</span>
          </p>

          <p className="hero-description">
            {personalInfo.shortDescription}
          </p>

          <div className="buttons">
            <button 
              onClick={() => scrollTo('projects')} 
              className="btn-frosted-primary"
              id="hero-work-btn"
            >
              Discover Portfolio
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <button 
              onClick={() => scrollTo('contact')} 
              className="btn-frosted-secondary"
              id="hero-contact-btn"
            >
              Contact Me
            </button>
          </div>

          {/* Frosted Proof Badges & Socials */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8 pt-6 border-t border-[#262626]">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full border-2 border-[#050505] bg-[#141414] border-[#262626] flex items-center justify-center text-[10px] font-bold text-[#FF8C00] shadow-md">React</div>
                <div className="w-9 h-9 rounded-full border-2 border-[#050505] bg-[#141414] border-[#262626] flex items-center justify-center text-[10px] font-bold text-[#FF6A00] shadow-md">Node</div>
                <div className="w-9 h-9 rounded-full border-2 border-[#050505] bg-[#141414] border-[#262626] flex items-center justify-center text-[10px] font-bold text-[#FFA04D] shadow-md">TS</div>
              </div>
              <span className="text-xs text-[#A3A3A3] font-medium">3+ years modern web experience</span>
            </div>

            <div className="socials sm:ml-auto">
              <a 
                href={personalInfo.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter / X Profile"
                title="Twitter / X Profile (@Toriblackm8j9)"
                id="social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a 
                href={personalInfo.socials.whatsapp} 
                target="_blank" 
                rel="noreferrer"
                aria-label={`Chat on WhatsApp (${personalInfo.socials.whatsappNumber})`}
                title={`Chat on WhatsApp (${personalInfo.socials.whatsappNumber})`}
                id="social-whatsapp"
              >
                <MessageCircle className="w-4 h-4 text-[#FF8C00]" />
              </a>
            </div>
          </div>
        </div>

        {/* FROSTED CODE WINDOW */}
        <div className="reveal show flex justify-center lg:justify-end">
          <div className="code-window-frosted code-font" id="hero-code-window">
            <div className="code-window-header">
              <div className="code-window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="code-window-filename">clarity.js</div>

              <button 
                onClick={handleCopyCode} 
                className="code-copy-btn"
                title="Copy code to clipboard"
                aria-label="Copy code snippet"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#FF8C00]" />
                    <span className="text-[#FF8C00]">Copied</span>
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
              <pre className="text-sm">
                <span className="syntax-p">const</span> <span className="syntax-b">profile</span> = &#123;{'\n'}
                {'  '}<span className="syntax-b">identity</span>: <span className="syntax-g">&quot;Creative Engineer&quot;</span>,{'\n'}
                {'  '}<span className="syntax-b">expertise</span>: [<span className="syntax-g">&quot;React&quot;</span>, <span className="syntax-g">&quot;TypeScript&quot;</span>, <span className="syntax-g">&quot;UI/UX&quot;</span>],{'\n'}
                {'  '}<span className="syntax-b">mindset</span>: <span className="syntax-g">&quot;Think, Code, Refine&quot;</span>{'\n'}
                &#125;;{'\n\n'}
                <span className="syntax-p">function</span> <span className="syntax-y">deliverMagic</span>(<span className="syntax-b">idea</span>) &#123;{'\n'}
                {'  '}<span className="syntax-p">return</span> <span className="syntax-b">idea</span>.<span className="syntax-y">transform</span>(&#123;{'\n'}
                {'    '}<span className="syntax-b">polish</span>: <span className="syntax-g">&quot;100%&quot;</span>,{'\n'}
                {'    '}<span className="syntax-b">performance</span>: <span className="syntax-y">Infinity</span>{'\n'}
                {'  '}&#125;);{'\n'}
                &#125;
              </pre>
            </div>

            <div className="code-ambient-glow" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div 
        className="scroll-indicator" 
        onClick={() => scrollTo('about')}
        title="Scroll to explore"
      >
        <span>Explore Experience</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </div>
    </section>
  );
};
