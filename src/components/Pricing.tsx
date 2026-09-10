import React from 'react';
import { Check, ArrowRight, Sparkles, Info } from 'lucide-react';
import { pricingPackagesData } from '../data/portfolioData.ts';

export const Pricing: React.FC = () => {
  const scrollToContact = (budgetRange?: string, packageName?: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });

      // Pre-select the budget range in the form
      if (budgetRange) {
        const budgetSelect = document.getElementById('inquiry-budget') as HTMLSelectElement | null;
        if (budgetSelect) {
          budgetSelect.value = budgetRange;
          budgetSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }

      // Pre-fill or append the package preference to message if empty
      if (packageName) {
        const messageEl = document.getElementById('inquiry-message') as HTMLTextAreaElement | null;
        if (messageEl && !messageEl.value) {
          messageEl.value = `Hi Fatiu, I'm interested in the ${packageName} package.`;
          messageEl.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    }
  };

  return (
    <section className="section" id="pricing">
      <div className="container">
        {/* Section Title */}
        <div className="section-title reveal show text-left">
          <p>03 — INVESTMENT</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Simple Pricing<span>.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A3A3A3] mt-3 max-w-2xl leading-relaxed">
            Flexible packages for different project needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {pricingPackagesData.map((pkg, index) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                id={`pricing-card-${pkg.id}`}
                className={`reveal show relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#121212] border-2 border-[#FF6A00] shadow-2xl shadow-[#FF6A00]/15 lg:-translate-y-2'
                    : 'bg-[#141414] border border-[#262626] hover:border-[#FF6A00]/40 shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FF6A00] text-[#050505] shadow-md shadow-[#FF6A00]/30">
                      <Sparkles className="w-3 h-3 fill-current text-[#050505]" />
                      {pkg.badge || 'Most Popular'}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Name & Best For */}
                  <div className="mb-5">
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#A3A3A3] mt-1.5 min-h-[34px] leading-relaxed">
                      {pkg.bestFor}
                    </p>
                  </div>

                  {/* Starting Price */}
                  <div className="py-4 my-2 border-y border-[#262626]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    <span className="block text-[11px] font-medium text-[#737373] mt-1 uppercase tracking-wider">
                      Starting price • One-time investment
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 mb-8 space-y-3">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#A3A3A3] mb-3">
                      Package Includes:
                    </span>
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3 text-xs sm:text-sm text-[#E5E5E5]">
                        <div className="w-4 h-4 rounded-full bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#FF8C00]">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => scrollToContact(pkg.budgetRange, pkg.name)}
                    id={`pricing-cta-${pkg.id}`}
                    className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-[#FF6A00] hover:bg-[#FF7A18] text-[#050505] font-extrabold shadow-lg shadow-[#FF6A00]/30 hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-[#0D0D0D] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#FF6A00]/50 text-white hover:text-[#FF8C00]'
                    }`}
                    title={`${pkg.ctaText} with ${pkg.name} package`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Note Below Pricing */}
        <div className="mt-10 p-4 rounded-xl bg-[#0D0D0D] border border-[#262626] max-w-xl mx-auto text-center flex items-center justify-center gap-2.5 text-xs text-[#A3A3A3]">
          <Info className="w-4 h-4 text-[#FF8C00] shrink-0" />
          <span>Final pricing depends on project scope, features and requirements.</span>
        </div>
      </div>
    </section>
  );
};
