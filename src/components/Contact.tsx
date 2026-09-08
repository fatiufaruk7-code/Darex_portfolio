import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, Check, Copy, ExternalLink, Sparkles, MessageCircle, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';
import { ContactFormData } from '../types.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'gmail' | 'webform'>('gmail');
  const [webFormSubmitted, setWebFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getGmailLink = () => {
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const bodyContent = `Hi Faruk,\n\n${formData.message || '(Write your message here...)'}\n\n---\nSender Name: ${formData.name || 'N/A'}\nSender Email: ${formData.email || 'N/A'}`;
    const body = encodeURIComponent(bodyContent);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const bodyContent = `Hi Faruk,\n\n${formData.message || ''}\n\n---\nSender: ${formData.name || ''} (${formData.email || ''})`;
    const body = encodeURIComponent(bodyContent);
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleGmailClick = (e: React.MouseEvent) => {
    if (!formData.name && !formData.message) {
      // If fields are empty, still open Gmail directly
      return;
    }
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

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-box-frosted reveal show" id="contact-container">
          <div className="contact-text">
            <span className="contact-label-frosted">05 — GET IN TOUCH</span>

            <h2>
              Have a project in mind?
              <br />
              <span>Let&apos;s talk.</span>
            </h2>

            <p>
              Send a direct message to <strong className="text-white">fatiufaruk7@gmail.com</strong>.
              You can compose directly in Gmail for 100% instant delivery or submit through the web form.
            </p>

            <div className="contact-info">
              <div className="contact-info-item">
                <Mail className="w-4 h-4 text-[#7182ff]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline font-mono text-xs">
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="ml-2 text-xs text-[#7182ff] hover:text-white p-1 rounded transition-colors inline-flex items-center gap-1 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-sans">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-sans">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="contact-info-item">
                <MessageCircle className="w-4 h-4 text-[#FF8C00]" />
                <a 
                  href={personalInfo.socials.whatsapp} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:underline font-mono text-xs text-white"
                  title="Chat directly on WhatsApp"
                >
                  WhatsApp: {personalInfo.socials.whatsappNumber}
                </a>
              </div>

              <div className="contact-info-item">
                <Twitter className="w-4 h-4 text-[#FF6A00]" />
                <a 
                  href={personalInfo.socials.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:underline font-mono text-xs text-white"
                  title="Connect on X (Twitter)"
                >
                  Twitter / X: @Toriblackm8j9
                </a>
              </div>

              <div className="contact-info-item">
                <MapPin className="w-4 h-4 text-[#FF6A00]" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="contact-info-item">
                <Clock className="w-4 h-4 text-[#FF6A00]" />
                <span>Typical Response Time: &lt; 24 Hours</span>
              </div>
            </div>

            {/* Notice about FormSubmit Activation */}
            <div className="mt-8 p-4 rounded-xl bg-[#0D0D0D] border border-[#262626] text-xs text-[#A3A3A3] leading-relaxed">
              <div className="flex items-center gap-2 text-[#FF8C00] font-semibold mb-1">
                <Sparkles className="w-4 h-4 text-[#FF6A00]" />
                <span>Why was there an error previously?</span>
              </div>
              FormSubmit sends a one-time activation email to <span className="text-white font-mono">fatiufaruk7@gmail.com</span> with an <strong className="text-white">&quot;Activate Form&quot;</strong> button. Please check your Gmail (and Spam/Updates folder) and click that button once to enable the web form permanently. Alternatively, use the <strong className="text-white">&quot;Send via Gmail&quot;</strong> option below for instant delivery with zero activation!
            </div>
          </div>

          <div className="contact-form-container">
            {/* Tab switch between Direct Gmail (Guaranteed) and Web Form */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0D0D0D] border border-[#262626] mb-5">
              <button
                type="button"
                onClick={() => setActiveTab('gmail')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'gmail'
                    ? 'bg-[#FF6A00] text-[#050505] font-bold shadow-md shadow-[#FF6A00]/25'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                <span>Direct to Gmail</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                  activeTab === 'gmail' ? 'bg-black/20 text-[#050505]' : 'bg-[#FF6A00]/15 text-[#FF8C00]'
                }`}>100% Reliable</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('webform')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'webform'
                    ? 'bg-[#FF6A00] text-[#050505] font-bold shadow-md shadow-[#FF6A00]/25'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                <span>Web Form (FormSubmit)</span>
              </button>
            </div>

            {activeTab === 'gmail' ? (
              /* DIRECT GMAIL FORM */
              <div className="contact-form">
                <div className="form-group">
                  <label htmlFor="gmail-name">YOUR NAME</label>
                  <input
                    type="text"
                    id="gmail-name"
                    name="name"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gmail-email">YOUR EMAIL (FOR REPLY)</label>
                  <input
                    type="email"
                    id="gmail-email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gmail-subject">PROJECT OR TOPIC</label>
                  <input
                    type="text"
                    id="gmail-subject"
                    name="subject"
                    placeholder="Web Development / Collaboration"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gmail-message">YOUR MESSAGE</label>
                  <textarea
                    id="gmail-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me what you'd like to build..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-1">
                  <a
                    href={getGmailLink()}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleGmailClick}
                    className="form-submit-btn-frosted flex-1 justify-center no-underline"
                    id="open-gmail-btn"
                  >
                    <span>Open & Send via Gmail</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={getMailtoLink()}
                    title="Open in Apple Mail, Outlook or default app"
                    className="btn-frosted-secondary text-xs py-3.5 px-4 justify-center no-underline"
                    id="open-mailto-btn"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FF6A00]" />
                    <span>Other Mail App</span>
                  </a>
                </div>

                <p className="text-[11px] text-[#A3A3A3] text-center mt-2">
                  Opens Gmail directly with recipient <span className="text-white font-mono">fatiufaruk7@gmail.com</span> pre-filled.
                </p>
              </div>
            ) : (
              /* STANDARD WEB FORM POST (FormSubmit) */
              <div>
                {webFormSubmitted && (
                  <div className="mb-4 p-4 rounded-xl bg-[#141414] border border-[#FF6A00]/40 text-xs text-[#A3A3A3] flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-medium">Form submitted!</strong>
                      If you haven&apos;t yet activated FormSubmit, please check your inbox at <span className="underline text-white">fatiufaruk7@gmail.com</span> to click the one-time activation link.
                    </div>
                  </div>
                )}

                <form
                  action={`https://formsubmit.co/${personalInfo.email}`}
                  method="POST"
                  target="_blank"
                  onSubmit={() => setWebFormSubmitted(true)}
                  className="contact-form"
                  id="contact-form"
                >
                  {/* FormSubmit Config Parameters */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value={formData.subject || `New message from ${formData.name || 'Portfolio Visitor'}`}
                  />
                  <input type="hidden" name="_template" value="table" />

                  <div className="form-group">
                    <label htmlFor="contact-name">YOUR NAME *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">YOUR EMAIL *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">PROJECT OR TOPIC</label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="Web Development / Collaboration"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">YOUR MESSAGE *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project, timeline, or inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="form-submit-btn-frosted w-full"
                    id="submit-contact-btn"
                  >
                    <span>Submit via Web Form</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-[#64748b] text-center mt-2">
                    Submits to <span className="text-white font-mono">fatiufaruk7@gmail.com</span> via FormSubmit in a new tab.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
