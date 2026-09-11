import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Copy, 
  MessageCircle, 
  Twitter, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Loader2 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';
import { ContactFormData } from '../types.ts';

const PROJECT_TYPES = [
  'Business Website',
  'Landing Page',
  'Portfolio',
  'E-commerce',
  'School Portal',
  'Web Application',
  'PWA',
  'Website Redesign',
  'Other',
];

const BUDGET_RANGES = [
  '₦30k – ₦50k',
  '₦50k – ₦80k',
  '₦80k – ₦100k',
  '₦100k+',
  'Not sure yet',
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    whatsapp: '',
    projectType: 'Business Website',
    budget: '₦50k – ₦80k',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback'>('idle');

  const defaultWhatsAppText = encodeURIComponent(
    "Hello Champz Digital, I'd like to discuss a website project."
  );

  const getCustomWhatsAppUrl = () => {
    let text = "Hello Champz Digital, I'd like to discuss a website project.";
    if (formData.name || formData.projectType) {
      text = `Hello Champz Digital,\nMy name is ${formData.name || 'a visitor'}. I'm interested in a ${formData.projectType || 'website'} project.\nBudget: ${formData.budget || 'Not specified'}.\n\nMessage: ${formData.message || 'I would like to discuss working together.'}`;
    }
    return `https://wa.me/2348137941486?text=${encodeURIComponent(text)}`;
  };

  const getCustomMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType || 'Website'} - ${formData.name || 'Client'}`
    );
    const body = encodeURIComponent(
      `Hi Champz Digital,\n\nName: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nWhatsApp: ${formData.whatsapp || 'N/A'}\nProject Type: ${formData.projectType || 'N/A'}\nBudget: ${formData.budget || 'N/A'}\n\nProject Details:\n${formData.message || 'I would like to discuss a project with you.'}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const copyWhatsAppNumber = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.socials.whatsappNumber);
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2000);
    } catch {
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Full Name': formData.name,
          'Email Address': formData.email,
          'WhatsApp Number': formData.whatsapp || 'Not provided',
          'Project Type': formData.projectType || 'General Website',
          'Budget Range': formData.budget || 'Not sure yet',
          'Project Description': formData.message,
          _subject: `New Project Inquiry: ${formData.projectType} from ${formData.name}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        // Graceful fallback to direct links without technical error text
        setSubmitStatus('fallback');
      }
    } catch {
      // In case of network disconnect or offline mode
      setSubmitStatus('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      projectType: 'Business Website',
      budget: '₦50k – ₦80k',
      message: '',
    });
    setSubmitStatus('idle');
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-box-frosted reveal show" id="contact-container">
          {/* ===================================================
              LEFT COLUMN: CONTACT INFO & DIRECT CTAS
          =================================================== */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="contact-label-frosted">GET IN TOUCH</span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-3 mb-3 leading-[1.1]">
                Have a project in mind?
              </h2>

              <p className="text-base sm:text-lg text-[#A3A3A3] font-medium leading-relaxed max-w-md">
                Let&apos;s build something great together.
              </p>

              {/* Clean Contact Information Card */}
              <div className="mt-8 p-6 rounded-2xl bg-[#0D1220] border border-[#1E293B] space-y-4 shadow-xl">
                {/* Email */}
                <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-[#1E293B]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#2563EB]/15 border border-[#3B82F6]/30 flex items-center justify-center shrink-0 text-[#3B82F6]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        Email
                      </span>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-xs sm:text-sm font-mono text-[#F8FAFC] hover:text-[#60A5FA] transition-colors truncate block"
                        title="Send email"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1.5 rounded-md text-[#64748B] hover:text-[#60A5FA] hover:bg-[#162032] transition-colors shrink-0"
                    title="Copy email"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#3B82F6]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-[#1E293B]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#2563EB]/15 border border-[#3B82F6]/30 flex items-center justify-center shrink-0 text-[#3B82F6]">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        WhatsApp
                      </span>
                      <a 
                        href={`https://wa.me/2348137941486?text=${defaultWhatsAppText}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs sm:text-sm font-mono text-[#F8FAFC] hover:text-[#60A5FA] transition-colors truncate block"
                        title="Open WhatsApp chat"
                      >
                        {personalInfo.socials.whatsappNumber}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyWhatsAppNumber}
                    className="p-1.5 rounded-md text-[#64748B] hover:text-[#60A5FA] hover:bg-[#162032] transition-colors shrink-0"
                    title="Copy WhatsApp number"
                    aria-label="Copy WhatsApp number"
                  >
                    {copiedWhatsApp ? (
                      <Check className="w-3.5 h-3.5 text-[#3B82F6]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* X / Twitter */}
                <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-[#1E293B]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#2563EB]/15 border border-[#3B82F6]/30 flex items-center justify-center shrink-0 text-[#3B82F6]">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        X / Twitter
                      </span>
                      <a 
                        href={personalInfo.socials.twitter} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs sm:text-sm font-mono text-[#F8FAFC] hover:text-[#60A5FA] transition-colors truncate block"
                        title="View profile on X (Twitter)"
                      >
                        @Toriblackm8j9
                      </a>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-[#1E293B]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#2563EB]/15 border border-[#3B82F6]/30 flex items-center justify-center shrink-0 text-[#3B82F6]">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        Availability
                      </span>
                      <span className="text-xs sm:text-sm text-[#E2E8F0] font-medium">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#2563EB]/15 text-[#60A5FA] border border-[#3B82F6]/30 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
                    Open
                  </span>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB]/15 border border-[#3B82F6]/30 flex items-center justify-center shrink-0 text-[#3B82F6]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                      Response Time
                    </span>
                    <span className="text-xs sm:text-sm text-[#E2E8F0] font-medium">
                      Usually within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary CTA: WhatsApp */}
              <a
                href={`https://wa.me/2348137941486?text=${defaultWhatsAppText}`}
                target="_blank"
                rel="noreferrer"
                id="whatsapp-primary-cta"
                className="flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-sm tracking-wide shadow-md shadow-[#2563EB]/25 transition-all hover:scale-[1.02] active:scale-[0.98] no-underline cursor-pointer"
                title="Chat on WhatsApp (08137941486)"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Secondary CTA: Email */}
              <a
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent("Project Inquiry - Champz Digital")}`}
                id="email-secondary-cta"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1220] hover:bg-[#162032] border border-[#1E293B] hover:border-[#3B82F6]/50 text-[#F8FAFC] hover:text-[#60A5FA] font-semibold text-sm transition-all no-underline cursor-pointer"
                title="Email Champz Digital"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* ===================================================
              RIGHT COLUMN: START A PROJECT INQUIRY FORM
          =================================================== */}
          <div className="flex flex-col justify-center">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1220] border border-[#1E293B] shadow-2xl relative">
              {/* Form Title & Short Description */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
                  Start a Project
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5 leading-relaxed">
                  Tell me a little about what you need and I&apos;ll get back to you.
                </p>
              </div>

              {submitStatus === 'success' ? (
                /* Success Confirmation State */
                <div className="py-8 px-4 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#2563EB]/15 border border-[#3B82F6]/30 text-[#3B82F6] mx-auto flex items-center justify-center shadow-md shadow-[#2563EB]/20">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-[#F8FAFC]">Inquiry Sent Successfully!</h4>
                    <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="text-[#F8FAFC] font-semibold">{formData.name || 'Friend'}</span>! I have received your inquiry and will review your project details shortly.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-col gap-2.5 max-w-xs mx-auto">
                    <a
                      href={getCustomWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2563EB] text-white font-bold text-xs shadow-md shadow-[#2563EB]/25 transition-all hover:bg-[#1D4ED8]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp to Expedite</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs text-[#64748B] hover:text-[#F8FAFC] transition-colors py-2 cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              ) : submitStatus === 'fallback' ? (
                /* Seamless Direct Dispatch Fallback */
                <div className="py-6 px-2 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#2563EB]/15 border border-[#3B82F6]/30 text-[#3B82F6] mx-auto flex items-center justify-center">
                    <Send className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#F8FAFC]">Project Inquiry Ready</h4>
                    <p className="text-xs text-[#94A3B8] max-w-xs mx-auto leading-relaxed">
                      Your details are ready. Choose your preferred platform below to dispatch directly:
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col gap-2.5 max-w-xs mx-auto">
                    <a
                      href={getCustomWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2563EB] text-white font-bold text-xs shadow-md shadow-[#2563EB]/25 transition-all hover:bg-[#1D4ED8]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={getCustomMailtoUrl()}
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111827] border border-[#1E293B] text-[#F8FAFC] hover:text-[#60A5FA] font-semibold text-xs transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitStatus('idle')}
                      className="text-[11px] text-[#64748B] hover:text-[#F8FAFC] transition-colors pt-2 cursor-pointer"
                    >
                      Back to edit form
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Interactive Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4" id="project-inquiry-form">
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="inquiry-name">Full Name *</label>
                    <input
                      type="text"
                      id="inquiry-name"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="name"
                    />
                  </div>

                  {/* Email & WhatsApp Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="inquiry-email">Email *</label>
                      <input
                        type="email"
                        id="inquiry-email"
                        name="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        autoComplete="email"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="inquiry-whatsapp">WhatsApp Number</label>
                      <input
                        type="tel"
                        id="inquiry-whatsapp"
                        name="whatsapp"
                        placeholder="e.g. 08137941486"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="inquiry-project-type">Project Type</label>
                      <select
                        id="inquiry-project-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="inquiry-budget">Budget</label>
                      <select
                        id="inquiry-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        {BUDGET_RANGES.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="form-group">
                    <label htmlFor="inquiry-message">Project Description *</label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your goals, features you need, or preferred timeline..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  {/* Primary Form Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-inquiry-button"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-sm tracking-wide shadow-md shadow-[#2563EB]/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Secondary Option: Prefer WhatsApp? */}
                  <div className="pt-2 text-center">
                    <span className="text-xs text-[#64748B]">
                      Prefer WhatsApp?{' '}
                      <a
                        href={getCustomWhatsAppUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#3B82F6] hover:text-[#60A5FA] font-medium inline-flex items-center gap-1 transition-colors underline-offset-2 hover:underline"
                      >
                        <span>Chat directly</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
