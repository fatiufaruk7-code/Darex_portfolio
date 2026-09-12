import React from 'react';
import { ArrowRight, Code, Layers, Lightbulb, Puzzle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';
import { scrollToSection } from '../utils/navigation.ts';

export const About: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('contact', true);
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-title reveal">
          <p>ABOUT CHAMPZ DIGITAL</p>
          <h2>
            Turning ideas into
            <br className="hidden sm:inline" /> <span>digital experiences.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              At {personalInfo.brandName}, we build fast, responsive and professional websites and digital solutions for businesses, organizations and individuals.
            </p>

            <p>
              We transform complex ideas into clean, high-performance, and user-friendly digital experiences. Every project is developed with modern web standards, meticulous attention to detail, and a focus on measurable results.
            </p>

            <a 
              href="#contact" 
              className="about-link" 
              onClick={scrollToContact}
              id="about-cta-link"
            >
              Let&apos;s build something
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="about-cards reveal-group">
            <div className="about-card-frosted reveal-card stagger-1" id="about-card-dev">
              <div className="mb-4 text-[#3B82F6]">
                <Code className="w-6 h-6" />
              </div>
              <h3>Web Development</h3>
              <p>Building modern, performant web experiences.</p>
            </div>

            <div className="about-card-frosted reveal-card stagger-2" id="about-card-solutions">
              <div className="mb-4 text-[#3B82F6]">
                <Layers className="w-6 h-6" />
              </div>
              <h3>Digital Solutions</h3>
              <p>Designing tailored systems that scale with your goals.</p>
            </div>

            <div className="about-card-frosted reveal-card stagger-3" id="about-card-creative">
              <div className="mb-4 text-[#3B82F6]">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3>Creative UI/UX</h3>
              <p>Turning ambitious visions into intuitive interfaces.</p>
            </div>

            <div className="about-card-frosted reveal-card stagger-4" id="about-card-problem-solver">
              <div className="mb-4 text-[#3B82F6]">
                <Puzzle className="w-6 h-6" />
              </div>
              <h3>Clean Code</h3>
              <p>Writing clean, maintainable, and resilient codebases.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
