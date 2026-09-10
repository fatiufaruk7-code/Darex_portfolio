import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Twitter, MessageCircle, ChevronDown, Briefcase } from 'lucide-react';
import { personalInfo, codeSnippetString } from '../data/portfolioData.ts';

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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="reveal show flex flex-col justify-center">
          {/* Subtle Professional Status Indicator */}
          <div className="status-badge inline-flex items-center gap-2 mb-4" id="hero-status">
            <div className="status-dot-orange"></div>
            <span className="status-text-orange text-xs font-medium">Available for freelance projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="tracking-tighter text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            {personalInfo.name}<span>.</span>
          </h1>

          {/* Supporting Title */}
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF8C00] uppercase font-mono mt-2 mb-3">
            {personalInfo.supportingTitle}
          </p>

          {/* Main Headline */}
          <p className="hero-subhead text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mt-2 mb-4">
            Modern Websites.
            <br className="hidden sm:inline" />{' '}
            <span className="text-[#FF6A00]">Clear Solutions.</span>
          </p>

          {/* Supporting Text */}
          <p className="hero-description text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-lg mb-6">
            {personalInfo.shortDescription}
          </p>

          {/* Two Primary CTA Buttons */}
          <div className="buttons flex flex-wrap gap-3.5">
            <button 
              onClick={() => scrollTo('contact')} 
              className="btn-frosted-primary"
              id="hero-hire-btn"
              title="Contact Fatiu Faruk for projects"
            >
              <Briefcase className="w-4 h-4 mr-1 text-[#050505]" />
              Hire Me
            </button>

            <button 
              onClick={() => scrollTo('projects')} 
              className="btn-frosted-secondary"
              id="hero-work-btn"
              title="View completed websites and projects"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-1.5" />
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

            <div className="socials sm:ml-auto flex items-center gap-3">
              <a 
                href={personalInfo.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter / X Profile (@Toriblackm8j9)"
                title="Twitter / X Profile (@Toriblackm8j9)"
                id="social-twitter"
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FF6A00] flex items-center justify-center text-[#A3A3A3] hover:text-[#FF8C00] transition-colors"
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
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FF6A00] flex items-center justify-center text-[#FF8C00] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
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

              <div className="code-window-filename">fatiu-faruk.ts</div>

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
                <span className="syntax-p">const</span> <span className="syntax-b">developer</span> = &#123;{'\n'}
                {'  '}<span className="syntax-b">name</span>: <span className="syntax-g">&quot;Fatiu Faruk&quot;</span>,{'\n'}
                {'  '}<span className="syntax-b">brand</span>: <span className="syntax-g">&quot;Clarity Creative&quot;</span>,{'\n'}
                {'  '}<span className="syntax-b">role</span>: <span className="syntax-g">&quot;Web Developer&quot;</span>,{'\n'}
                {'  '}<span className="syntax-b">status</span>: <span className="syntax-y">&quot;Available for projects&quot;</span>{'\n'}
                &#125;;{'\n\n'}
                <span className="syntax-p">function</span> <span className="syntax-y">buildWebsite</span>(<span className="syntax-b">client</span>) &#123;{'\n'}
                {'  '}<span className="syntax-p">return</span> &#123;{'\n'}
                {'    '}<span className="syntax-b">speed</span>: <span className="syntax-g">&quot;Blazing Fast&quot;</span>,{'\n'}
                {'    '}<span className="syntax-b">design</span>: <span className="syntax-g">&quot;Clean & Responsive&quot;</span>,{'\n'}
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
        className="scroll-indicator cursor-pointer" 
        onClick={() => scrollTo('services')}
        title="Scroll to explore services"
      >
        <span>Explore Services</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </div>
    </section>
  );
};
