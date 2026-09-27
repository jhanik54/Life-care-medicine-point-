import React from 'react';
import { Language } from '../types';
import { trustPillars, translations } from '../data/content';
import { 
  Clock, 
  UserCheck, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles 
} from 'lucide-react';

interface TrustStripProps {
  lang: Language;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ lang }) => {
  const t = translations[lang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section 
      id="trust-strip" 
      className="bg-white dark:bg-slate-900 py-10 sm:py-12 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t.trust.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.trust.subheading}
          </p>
        </div>

        {/* 5-Item Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {trustPillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              id={`trust-pillar-${pillar.id}`}
              className="group p-4 sm:p-5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:bg-emerald-50/50 dark:hover:bg-slate-800 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all duration-200 shadow-2xs hover:shadow-sm flex flex-col items-start"
            >
              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200/80 dark:border-slate-600 shadow-2xs mb-3 group-hover:scale-105 transition-transform">
                {getIcon(pillar.icon)}
              </div>

              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {lang === 'bn' ? pillar.title : pillar.titleEn}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {lang === 'bn' ? pillar.desc : pillar.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
