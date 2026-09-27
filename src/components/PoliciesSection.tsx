import React, { useState } from 'react';
import { Language } from '../types';
import { policiesData, translations } from '../data/content';
import { 
  FileText, 
  ChevronDown, 
  HeartHandshake, 
  RotateCcw, 
  ShieldCheck, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';

interface PoliciesSectionProps {
  lang: Language;
}

export const PoliciesSection: React.FC<PoliciesSectionProps> = ({ lang }) => {
  const [openPolicy, setOpenPolicy] = useState<string>('customer-service');
  const t = translations[lang];

  const getPolicyIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'RotateCcw':
        return <RotateCcw className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const togglePolicy = (id: string) => {
    setOpenPolicy(openPolicy === id ? '' : id);
  };

  return (
    <section 
      id="policies" 
      className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>{t.policies.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.policies.heading}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            {t.policies.subheading}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {policiesData.map((policy) => {
            const isOpen = openPolicy === policy.id;

            return (
              <div
                key={policy.id}
                id={`policy-item-${policy.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-slate-900 border-emerald-300 dark:border-emerald-700 shadow-md'
                    : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => togglePolicy(policy.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                      {getPolicyIcon(policy.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                        {lang === 'bn' ? policy.title : policy.titleEn}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {lang === 'bn' ? policy.summary : policy.summaryEn}
                      </p>
                    </div>
                  </div>

                  <div className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Body Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 space-y-2.5">
                    {(lang === 'bn' ? policy.details : policy.detailsEn).map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
