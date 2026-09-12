import React from 'react';
import { Check, ArrowRight, Sparkles, Info } from 'lucide-react';
import { pricingPackagesData } from '../data/portfolioData.ts';
import { scrollToSection } from '../utils/navigation.ts';

export const Pricing: React.FC = () => {
  const scrollToContact = (budgetRange?: string, packageName?: string) => {
    scrollToSection('contact', true);

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
        messageEl.value = `Hi Champz Digital, I'm interested in the ${packageName} package.`;
        messageEl.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  };

  return (
    <section className="section" id="pricing">
      <div className="container">
        {/* Section Title */}
        <div className="section-title reveal text-left">
          <p>PACKAGES &amp; PRICING</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Simple Pricing<span>.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A3A3A3] mt-3 max-w-2xl leading-relaxed">
            Flexible packages for different project needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="reveal-group grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {pricingPackagesData.map((pkg, index) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                id={`pricing-card-${pkg.id}`}
                className={`reveal-card stagger-${index + 1} ${isPopular ? 'pricing-card-popular' : ''} relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#111827] border-2 border-[#3B82F6] shadow-xl shadow-[#2563EB]/10 lg:-translate-y-2'
                    : 'bg-[#111827] border border-[#1E293B] hover:border-[#3B82F6]/40 shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <>
                    <div className="pricing-popular-accent-line" aria-hidden="true" />
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2563EB] text-white border border-[#60A5FA]/40 shadow-md">
                        <Sparkles className="w-3 h-3 text-[#22D3EE]" />
                        {pkg.badge || 'Most Popular'}
                      </span>
                    </div>
                  </>
                )}

                <div>
                  {/* Package Name & Best For */}
                  <div className="mb-5">
                    <h3 className="text-xl font-extrabold text-[#F8FAFC] tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#94A3B8] mt-1.5 min-h-[34px] leading-relaxed">
                      {pkg.bestFor}
                    </p>
                  </div>

                  {/* Starting Price */}
                  <div className="py-4 my-2 border-y border-[#1E293B]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    <span className="block text-[11px] font-medium text-[#64748B] mt-1 uppercase tracking-wider">
                      Starting price • One-time investment
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 mb-8 space-y-3">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                      Package Includes:
                    </span>
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3 text-xs sm:text-sm text-[#F8FAFC]">
                        <div className="w-4 h-4 rounded-full bg-[#2563EB]/15 border border-[#3B82F6]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#60A5FA]">
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
                        ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-lg shadow-[#2563EB]/25 hover:scale-[1.01] active:scale-[0.99]'
                        : 'bg-[#0D1220] hover:bg-[#162032] border border-[#1E293B] hover:border-[#3B82F6]/50 text-[#F8FAFC] hover:text-[#60A5FA]'
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
        <div className="mt-10 p-4 rounded-xl bg-[#0D1220] border border-[#1E293B] max-w-xl mx-auto text-center flex items-center justify-center gap-2.5 text-xs text-[#94A3B8]">
          <Info className="w-4 h-4 text-[#3B82F6] shrink-0" />
          <span>Final pricing depends on project scope, features and requirements.</span>
        </div>
      </div>
    </section>
  );
};
