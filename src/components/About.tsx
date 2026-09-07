import React from 'react';
import { ArrowRight, Code, GraduationCap, Lightbulb, Puzzle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-title reveal show">
          <p>01 — ABOUT ME</p>
          <h2>
            Turning ideas into
            <br className="hidden sm:inline" /> <span>digital experiences.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal show">
            <p>
              I&apos;m {personalInfo.name}, a Computer Science student and web developer
              passionate about technology, coding, and creating intuitive digital
              experiences that balance performance with elegant design.
            </p>

            <p>
              I enjoy taking complex ideas and transforming them into clean, responsive,
              and user-friendly websites. I am constantly refining my skills, exploring
              modern web standards, and building products with attention to detail.
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

          <div className="about-cards reveal show">
            <div className="about-card-frosted" id="about-card-dev">
              <div className="mb-4 text-[#7182ff]">
                <Code className="w-6 h-6" />
              </div>
              <h3>Web Developer</h3>
              <p>Building modern, performant web experiences.</p>
            </div>

            <div className="about-card-frosted" id="about-card-student">
              <div className="mb-4 text-[#7182ff]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3>Student</h3>
              <p>Studying Computer Science and scalable systems.</p>
            </div>

            <div className="about-card-frosted" id="about-card-creative">
              <div className="mb-4 text-[#7182ff]">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3>Creative</h3>
              <p>Turning visionary ideas into pragmatic solutions.</p>
            </div>

            <div className="about-card-frosted" id="about-card-problem-solver">
              <div className="mb-4 text-[#7182ff]">
                <Puzzle className="w-6 h-6" />
              </div>
              <h3>Problem Solver</h3>
              <p>Writing clean, maintainable, and resilient code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
