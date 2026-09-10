import React from 'react';
import { 
  Briefcase, 
  Target, 
  ShoppingBag, 
  GraduationCap, 
  Layers, 
  Smartphone, 
  ArrowRight 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData.ts';

export const Services: React.FC = () => {
  const scrollToContact = (projectType?: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });

      // If projectType was provided, set the select value if possible
      if (projectType) {
        const selectEl = document.getElementById('inquiry-project-type') as HTMLSelectElement | null;
        if (selectEl) {
          selectEl.value = projectType;
          // Trigger change event so React state updates if listening
          selectEl.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#FF6A00]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#FF6A00]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#FF6A00]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#FF6A00]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#FF6A00]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#FF6A00]" />;
      default:
        return <Briefcase className="w-6 h-6 text-[#FF6A00]" />;
    }
  };

  return (
    <section className="section" id="services">
      <div className="container">
        {/* Section Title */}
        <div className="section-title reveal show">
          <p>02 — SERVICES & EXPERTISE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What I Do<span>.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A3A3A3] mt-3 max-w-2xl leading-relaxed">
            Digital solutions designed to help you look professional and grow online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="reveal show group relative p-7 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#FF6A00]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
              id={`service-card-${index + 1}`}
            >
              {/* Card Header & Content */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] border border-[#262626] group-hover:border-[#FF6A00]/30 flex items-center justify-center mb-5 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#FF8C00] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Optional Get Started Link */}
              <div className="mt-6 pt-5 border-t border-[#1F1F1F]">
                <button
                  type="button"
                  onClick={() => scrollToContact(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FF8C00] transition-colors cursor-pointer"
                  title={`Get Started with ${service.title}`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6A00] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
