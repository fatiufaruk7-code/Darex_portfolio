import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Check, 
  Sparkles, 
  ExternalLink, 
  Mail, 
  Copy, 
  ArrowRight,
  Minimize2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export const PopMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeTab, setActiveTab] = useState<'notice' | 'quickMessage'>('notice');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Auto-pop the message after a gentle delay on page visit
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('clarity_pop_message_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasInteracted(true);
    sessionStorage.setItem('clarity_pop_message_dismissed', 'true');
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setHasInteracted(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message) return;

    // Compose Gmail link with message
    const subject = encodeURIComponent(`Quick Pop Message from ${formData.name || 'Portfolio Visitor'}`);
    const bodyContent = `Hi Faruk,\n\n${formData.message}\n\n---\nSender: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${encodeURIComponent(bodyContent)}`;

    window.open(gmailUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      handleClose();
    }, 2500);
  };

  return (
    <>
      {/* Floating Trigger Launcher Pill */}
      <aside 
        aria-label="Portfolio notifications"
        className="fixed bottom-5 right-5 z-40 flex items-center"
      >
        <button
          type="button"
          id="pop-message-trigger"
          onClick={handleToggle}
          className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0b0f19]/90 hover:bg-[#121829] border border-white/15 hover:border-indigo-400/40 text-white shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer"
          title="Open Pop Message & Announcements"
          aria-expanded={isOpen}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <MessageCircle className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          <span className="text-xs font-semibold tracking-wide">
            {isOpen ? 'Close Note' : 'Pop Message'}
          </span>
          {!hasInteracted && !isOpen && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse border border-[#05070d]"></span>
          )}
        </button>
      </aside>

      {/* Pop Message Modal Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pop-message-title"
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-2xl bg-[#0b0f19]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Top Bar with Status and Close Action */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400 font-medium">
                Available for hire
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClose}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Minimize pop message"
                aria-label="Close pop message"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sub Navigation: Notice vs Quick Message */}
          <div className="flex p-1.5 mx-4 mt-3 rounded-lg bg-white/[0.04] border border-white/5">
            <button
              type="button"
              onClick={() => setActiveTab('notice')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'notice'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Notice
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('quickMessage')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'quickMessage'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Quick Note
            </button>
          </div>

          {/* Tab 1: Notice / Announcement */}
          {activeTab === 'notice' && (
            <div className="p-4 sm:p-5 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Clarity Creative</span>
                </div>
                <h3 id="pop-message-title" className="text-base font-bold text-white tracking-tight">
                  👋 Welcome to my portfolio!
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  I&apos;m currently taking on new web development projects, contract work, and collaboration opportunities.
                </p>
              </div>

              {/* Highlight Card */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Fast Turnaround</span>
                  <span className="font-mono text-indigo-300">&lt; 24h Response</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-200">
                  <span className="font-medium truncate">{personalInfo.email}</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="ml-2 text-[11px] text-indigo-400 hover:text-white inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-indigo-600/20"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/15 text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-white/10"
                >
                  <span>Work</span>
                  <ChevronRightIcon />
                </button>
              </div>

              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('quickMessage')}
                  className="text-[11px] text-slate-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Want to send a rapid message directly?</span>
                  <span className="underline font-medium">Click here</span>
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Quick Message Form */}
          {activeTab === 'quickMessage' && (
            <div className="p-4 sm:p-5">
              {submitted ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Opening Gmail...</h4>
                  <p className="text-xs text-slate-400">
                    Your message draft has been generated with direct delivery to Faruk!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="pop-name" className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="pop-name"
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full text-xs px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="pop-email" className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-1">
                      Your Email (optional)
                    </label>
                    <input
                      type="email"
                      id="pop-email"
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full text-xs px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="pop-message" className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-1">
                      Quick Message *
                    </label>
                    <textarea
                      id="pop-message"
                      required
                      rows={3}
                      placeholder="Hi Faruk, I'd like to discuss a project..."
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      className="w-full text-xs px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-3 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-indigo-600/20"
                  >
                    <span>Send Pop Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[10px] text-slate-500 text-center">
                    Dispatches directly to <span className="text-slate-400 font-mono">fatiufaruk7@gmail.com</span>
                  </p>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const ChevronRightIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
