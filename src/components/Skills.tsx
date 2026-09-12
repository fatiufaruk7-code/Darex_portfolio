import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Atom, 
  ShieldCheck, 
  Palette, 
  Server, 
  GitBranch, 
  Smartphone, 
  Zap 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const getLucideIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'FileCode': return <FileCode className="w-6 h-6" />;
      case 'Atom': return <Atom className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Server': return <Server className="w-6 h-6" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-title reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p>TECH STACK</p>
            <h2>
              Technologies we
              <br className="hidden sm:inline" /> <span>work with.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 flex-wrap" id="skills-filter-group">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend' },
              { id: 'tools', label: 'Tools & Workflow' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2563EB] text-white font-bold shadow-md shadow-[#2563EB]/25'
                    : 'bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-grid reveal-group">
          {filteredSkills.map((skill, index) => (
            <div key={skill.id} className={`skill-card-frosted reveal-card stagger-${(index % 6) + 1}`} id={`skill-${skill.id}`}>
              <div className="skill-icon-frosted">
                {getLucideIcon(skill.lucideIconName)}
              </div>

              <h3>{skill.name}</h3>
              <p>{skill.description}</p>

              <div className="skill-level-frosted">
                <div className="skill-bar-frosted">
                  <div 
                    className="skill-fill-frosted" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="skill-pct-frosted">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
