import React, { useState } from 'react';
import { ExternalLink, Github, PieChart, Sparkles, Layers, X, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'nexus-analytics':
        return <PieChart className="w-7 h-7 text-[#FF8C00]" />;
      case 'aura-creative':
        return <Sparkles className="w-7 h-7 text-[#FF6A00]" />;
      case 'devflow-workspace':
        return <Layers className="w-7 h-7 text-[#FFA04D]" />;
      default:
        return <PieChart className="w-7 h-7 text-[#FF8C00]" />;
    }
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-title reveal show">
          <p>03 — FEATURED WORK</p>
          <h2>
            Recent work &
            <br className="hidden sm:inline" /> <span>experiments.</span>
          </h2>
        </div>

        <div className="projects-grid reveal show">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="project-card-frosted group" 
              id={`project-${project.id}`}
            >
              <div 
                className={`project-preview-frosted ${project.previewClass} cursor-pointer`}
                onClick={() => setSelectedProject(project)}
                title="Click to view details"
              >
                <div className="preview-icon-frosted">
                  {getProjectIcon(project.id)}
                </div>
              </div>

              <div className="project-content-frosted">
                <div className="tags-frosted">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-links-frosted">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-white cursor-pointer transition-colors"
                  >
                    <span>Details</span>
                  </button>

                  <a 
                    href={project.liveUrl} 
                    onClick={(e) => {
                      if (project.liveUrl === '#') {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-white"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-white"
                  >
                    <span>GitHub</span>
                    <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl transition-opacity"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-xl glass rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-44 ${selectedProject.previewClass} flex items-center justify-center relative`}>
              <div className="preview-icon-frosted scale-110">
                {getProjectIcon(selectedProject.id)}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-[#0D0D0D] border-t border-[#262626]">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {selectedProject.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] px-2.5 py-1 rounded-md bg-[#141414] border border-[#262626] text-[#A3A3A3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-1.5">{selectedProject.title}</h3>
              <p className="text-xs font-semibold text-[#FF6A00] uppercase tracking-wider mb-4">
                {selectedProject.category}
              </p>

              <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-3">
                  Key Technical Highlights
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#A3A3A3]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-5 border-t border-[#262626]">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-frosted-secondary flex-1 py-2.5 text-xs justify-center"
                >
                  <Github className="w-3.5 h-3.5" />
                  View Repository
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-frosted-primary px-6 py-2.5 text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
