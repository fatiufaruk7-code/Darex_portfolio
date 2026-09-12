import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  PieChart, 
  Sparkles, 
  Layers, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Target
} from 'lucide-react';
import { projectsData } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Keyboard escape key listener & body scroll lock for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'nexus-analytics':
        return <PieChart className="w-6 h-6 text-[#3B82F6]" />;
      case 'aura-creative':
        return <Sparkles className="w-6 h-6 text-[#22D3EE]" />;
      case 'devflow-workspace':
        return <Layers className="w-6 h-6 text-[#60A5FA]" />;
      default:
        return <PieChart className="w-6 h-6 text-[#3B82F6]" />;
    }
  };

  const hasRealLiveUrl = (url?: string) => {
    return Boolean(url && url !== '#' && (url.startsWith('http://') || url.startsWith('https://')));
  };

  const hasRealGithubUrl = (url?: string) => {
    return Boolean(url && url !== '#' && (url.startsWith('http://') || url.startsWith('https://')));
  };

  return (
    <section 
      className="projects section scroll-mt-24 sm:scroll-mt-28 !pt-12 sm:!pt-16 md:!pt-24 !pb-14 sm:!pb-20" 
      id="projects"
      style={{ scrollMarginTop: '96px' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="reveal mb-8 sm:mb-12 text-left">
          <p className="text-[11px] sm:text-xs font-bold text-[#3B82F6] tracking-[0.2em] uppercase mb-1.5 sm:mb-2">
            04 — SELECTED WORK
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            Featured Projects<span className="text-[#3B82F6]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl leading-relaxed">
            A selection of websites and digital experiences built with a focus on clean design, responsiveness and functionality.
          </p>
        </div>

        {/* Projects Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {projectsData.map((project, index) => {
            const hasLive = hasRealLiveUrl(project.liveUrl);
            const hasGithub = hasRealGithubUrl(project.githubUrl);

            return (
              <article 
                key={project.id} 
                className={`reveal-card stagger-${(index % 6) + 1} project-item-card group relative flex flex-col justify-between rounded-2xl bg-[#111827] border border-[#1E293B] shadow-xl shadow-black/50 overflow-hidden`}
                id={`project-${project.id}`}
              >
                {/* Visual Thumbnail / Preview Area */}
                <div 
                  className={`relative h-44 sm:h-48 ${project.previewClass} border-b border-[#1E293B] cursor-pointer overflow-hidden flex flex-col items-center justify-center p-4`}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  title={`View case study details for ${project.title}`}
                  aria-label={`Open details for ${project.title}`}
                >
                  {/* Subtle Background Glow */}
                  <div 
                    className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none" 
                    style={{ background: project.previewGradient }}
                    aria-hidden="true"
                  />

                  {/* Representative Interactive Visual Canvas */}
                  <div className="project-preview-inner relative z-10 w-full max-w-[220px] rounded-xl bg-[#0D1220]/90 border border-[#1E293B] p-3 shadow-2xl backdrop-blur-sm group-hover:border-[#3B82F6]/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                        <span className="text-[10px] font-mono text-[#94A3B8] font-medium truncate max-w-[120px]">
                          {project.id}
                        </span>
                      </div>
                      <div className="w-6 h-6 rounded-md bg-[#111827] border border-[#1E293B] flex items-center justify-center">
                        {getProjectIcon(project.id)}
                      </div>
                    </div>

                    {/* Preview Wireframe Indicator */}
                    {project.id === 'nexus-analytics' && (
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-3/4 rounded bg-[#1E293B]" />
                        <div className="flex items-end gap-1 h-7 pt-1">
                          <div className="w-1/4 h-[40%] bg-[#2563EB]/50 rounded-sm" />
                          <div className="w-1/4 h-[75%] bg-[#3B82F6]/80 rounded-sm" />
                          <div className="w-1/4 h-[55%] bg-[#60A5FA]/60 rounded-sm" />
                          <div className="w-1/4 h-[95%] bg-[#22D3EE] rounded-sm" />
                        </div>
                      </div>
                    )}

                    {project.id === 'aura-creative' && (
                      <div className="space-y-1.5">
                        <div className="h-2 w-full rounded bg-[#1E293B] flex items-center px-1">
                          <div className="h-1 w-1/3 bg-[#3B82F6]/70 rounded-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-1 pt-0.5">
                          <div className="h-6 rounded bg-[#111827] border border-[#1E293B]" />
                          <div className="h-6 rounded bg-[#111827] border border-[#3B82F6]/30" />
                        </div>
                      </div>
                    )}

                    {project.id === 'devflow-workspace' && (
                      <div className="space-y-1 font-mono text-[9px] text-[#64748B]">
                        <div className="flex gap-1 items-center text-[#94A3B8]">
                          <span className="text-[#3B82F6]">&gt;</span> devflow --sync
                        </div>
                        <div className="h-1.5 w-4/5 rounded bg-[#1E293B]" />
                        <div className="h-1.5 w-1/2 rounded bg-[#3B82F6]/30" />
                      </div>
                    )}
                  </div>

                  {/* Top Badge: Category & Project Type */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#0D1220]/90 border border-[#1E293B] text-[#60A5FA] backdrop-blur-md">
                      {project.category}
                    </span>

                    {project.projectType && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#0D1220]/80 border border-[#1E293B] text-[#94A3B8] backdrop-blur-md">
                        {project.projectType}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Project Title */}
                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#60A5FA] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Features (Brief preview) */}
                    <div className="mb-4 space-y-1.5">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        Key Highlights
                      </span>
                      {project.highlights.slice(0, 2).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#E2E8F0]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span className="leading-tight line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] px-2 py-0.5 rounded bg-[#0D1220] border border-[#1E293B] text-[#94A3B8] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between gap-3">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-md shadow-[#2563EB]/20 min-h-[40px] cursor-pointer"
                      title={`View full case study for ${project.title}`}
                      id={`project-details-${project.id}`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {hasLive && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#0D1220] border border-[#1E293B] hover:border-[#3B82F6]/50 text-xs font-medium text-[#94A3B8] hover:text-[#60A5FA] transition-colors min-h-[40px] min-w-[40px]"
                          title={`Open live demo for ${project.title}`}
                          aria-label={`Open live demo for ${project.title}`}
                        >
                          <span className="hidden sm:inline">Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {hasGithub && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-1 p-2 rounded-lg bg-[#0D1220] border border-[#1E293B] hover:border-[#3B82F6]/50 text-xs font-medium text-[#94A3B8] hover:text-[#60A5FA] transition-colors min-h-[40px] min-w-[40px]"
                          title={`View source code on GitHub for ${project.title}`}
                          aria-label={`View GitHub repository for ${project.title}`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Project Section CTA Banner */}
        <div className="reveal show mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-[#3B82F6]/40 transition-all text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#3B82F6] font-bold block mb-1">
              Custom Development
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#F8FAFC] tracking-tight">
              Have a project like this?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-lg leading-relaxed">
              Let's build something professional for your business.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#2563EB]/25 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shrink-0 min-h-[44px]"
            id="projects-cta-btn"
            title="Scroll to contact section to start a project"
          >
            <span>Start a Project</span>
            <span className="text-sm">→</span>
          </button>
        </div>
      </div>

      {/* Case Study / Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-3.5 sm:p-5 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-[#111827] border border-[#1E293B] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Visual Header */}
            <div className={`h-36 sm:h-44 ${selectedProject.previewClass} flex items-center justify-center relative border-b border-[#1E293B] shrink-0`}>
              <div 
                className="absolute inset-0 opacity-40 pointer-events-none" 
                style={{ background: selectedProject.previewGradient }}
                aria-hidden="true"
              />

              <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#0D1220]/90 border border-[#1E293B] flex items-center justify-center shadow-xl">
                {getProjectIcon(selectedProject.id)}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#0D1220]/90 border border-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6] transition-colors focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                aria-label="Close project modal"
                title="Close modal (Esc)"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Category & Project Type Pill */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#0D1220]/90 border border-[#1E293B] text-[#60A5FA]">
                  {selectedProject.category}
                </span>
                {selectedProject.projectType && (
                  <span className="text-[10px] font-medium px-2.5 py-0.5 rounded bg-[#0D1220]/90 border border-[#1E293B] text-[#94A3B8]">
                    {selectedProject.projectType}
                  </span>
                )}
              </div>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
              {/* Header Info */}
              <div>
                <h3 id="modal-project-title" className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] tracking-tight mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Section 1: PROJECT OVERVIEW */}
              {selectedProject.overview && (
                <div className="p-4 rounded-xl bg-[#0D1220] border border-[#1E293B]">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#3B82F6] mb-2 flex items-center gap-2">
                    <Target className="w-3.5 h-3.5" />
                    Project Overview
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#E2E8F0] leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>
              )}

              {/* Section 2: OBJECTIVE */}
              {selectedProject.objective && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                    Objective
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed">
                    {selectedProject.objective}
                  </p>
                </div>
              )}

              {/* Section 3: FEATURES */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#F8FAFC] mb-3">
                  Key Features Implemented
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#E2E8F0]">
                      <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                      <span className="leading-snug">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4: TECHNOLOGY */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#F8FAFC] mb-2.5 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0D1220] border border-[#1E293B] text-[#F8FAFC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="p-4 sm:p-5 bg-[#0D1220] border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                {hasRealLiveUrl(selectedProject.liveUrl) && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all min-h-[40px]"
                  >
                    <span>Live Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {hasRealGithubUrl(selectedProject.githubUrl) && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] border border-[#1E293B] hover:border-[#3B82F6]/50 text-xs font-medium text-[#F8FAFC] hover:text-[#60A5FA] transition-colors min-h-[40px]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="py-2 px-5 rounded-lg bg-[#162032] hover:bg-[#1E293B] text-xs font-semibold text-[#94A3B8] hover:text-white border border-[#1E293B] transition-colors min-h-[40px] ml-auto cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
