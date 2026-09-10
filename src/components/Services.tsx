import React from 'react';
import { 
  Briefcase, 
  Target, 
  ShoppingBag, 
  GraduationCap, 
  Layers, 
  Smartphone 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData.ts';

export const Services: React.FC = () => {
  const scrollToContact = (projectType?: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });

      // Pre-select the inquiry project type if form is present
      if (projectType) {
        const selectEl = document.getElementById('inquiry-project-type') as HTMLSelectElement | null;
        if (selectEl) {
          selectEl.value = projectType;
          selectEl.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    }
  };

  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-[#FF6A00]";
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className={iconClass} />;
      case 'Target':
        return <Target className={iconClass} />;
      case 'ShoppingBag':
        return <ShoppingBag className={iconClass} />;
      case 'GraduationCap':
        return <GraduationCap className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'Smartphone':
        return <Smartphone className={iconClass} />;
      default:
        return <Briefcase className={iconClass} />;
    }
  };

  return (
    <section 
      className="section scroll-mt-24 sm:scroll-mt-28 !pt-12 sm:!pt-16 md:!pt-24 !pb-14 sm:!pb-20" 
      id="services"
      style={{ scrollMarginTop: '96px' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="reveal show mb-6 sm:mb-8 lg:mb-10 text-left">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-xs font-bold text-[#FF6A00] tracking-[0.2em] uppercase mb-1.5 sm:mb-2">
            SERVICES & EXPERTISE
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            What I Do<span className="text-[#FF6A00]">.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm text-[#A3A3A3] mt-2 max-w-xl leading-relaxed uppercase tracking-wide font-medium">
            DIGITAL SOLUTIONS DESIGNED TO HELP YOU LOOK PROFESSIONAL AND GROW ONLINE.
          </p>
        </div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="reveal show group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#FF6A00]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/60 active:scale-[0.99] active:bg-[#181818] flex flex-col justify-between"
              id={`service-card-${index + 1}`}
              role="article"
            >
              {/* Card Body */}
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#0D0D0D] border border-[#262626] group-hover:border-[#FF6A00]/40 flex items-center justify-center mb-3 sm:mb-3.5 transition-colors shrink-0">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:text-[#FF8C00] transition-colors leading-snug tracking-tight">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-[13px] text-[#A3A3A3] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer / CTA */}
              <div className="mt-4 pt-3 sm:mt-5 sm:pt-3.5 border-t border-[#1F1F1F]/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => scrollToContact(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#FF8C00] transition-colors py-1.5 px-0.5 rounded cursor-pointer min-h-[40px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6A00]"
                  title={`Get Started with ${service.title}`}
                  id={`service-cta-${service.id}`}
                >
                  <span>Get Started</span>
                  <span className="text-[#FF6A00] group-hover:translate-x-1 transition-transform inline-block text-sm" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
