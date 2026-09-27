import React from 'react';
import { Language } from '../types';
import { translations, businessData } from '../data/content';
import { 
  CheckCircle2, 
  Calendar, 
  Store, 
  Sparkles, 
  Maximize2,
  ShieldCheck,
  Heart,
  ThermometerSnowflake
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenStoreModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenStoreModal
}) => {
  const t = translations[lang];

  return (
    <section 
      id="about" 
      className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.about.heading}
          </h2>
          <p className="text-sm sm:text-base text-emerald-800 dark:text-emerald-400 font-semibold mt-2">
            "{lang === 'bn' ? businessData.mainTagline : businessData.englishTagline}"
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Real Store Photo Showcase */}
          <div className="lg:col-span-6 relative">
            <div 
              id="about-store-image-card"
              className="relative group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl transition-all"
            >
              {/* Top tag */}
              <div className="absolute top-4 left-4 z-20 bg-emerald-800/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5 text-emerald-300" />
                <span>{lang === 'bn' ? 'বাস্তব মেডিসিন পয়েন্ট' : 'Real Pharmacy Outlet'}</span>
              </div>

              {/* Real Store Photo */}
              <div className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden cursor-pointer" onClick={onOpenStoreModal}>
                <img
                  src="/images/store.png"
                  alt="Life Care Medicine Point - Actual Shop Front and Pharmacy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Click to expand button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenStoreModal();
                  }}
                  id="about-zoom-store-btn"
                  className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs font-bold shadow-md hover:bg-white transition-all backdrop-blur-xs"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.gallery.viewFullBtn}</span>
                </button>
              </div>

              {/* Bottom store description */}
              <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {lang === 'bn' ? businessData.banglaName : businessData.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {businessData.address.fullBangla}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                      {lang === 'bn' ? '২৪/৭ সেবা' : '24/7 Open'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick trust pill below photo */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 shadow-2xs">
                <ThermometerSnowflake className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-slate-800 dark:text-slate-200">{lang === 'bn' ? 'কোল্ড চেইন' : 'Cold Chain'}</p>
                  <p className="text-slate-500">{lang === 'bn' ? 'সঠিক তাপমাত্রায় সংরক্ষিত' : 'Temperature controlled'}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-slate-800 dark:text-slate-200">{lang === 'bn' ? 'আসল ওষুধ' : '100% Genuine'}</p>
                  <p className="text-slate-500">{lang === 'bn' ? 'রেজিস্টার্ড সোর্স' : 'Licensed supply'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Description & Details */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Meta Cards Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{t.about.estLabel}</span>
                </div>
                <p className="text-base font-bold text-slate-900 dark:text-white">
                  {lang === 'bn' ? businessData.establishedDate : businessData.establishedDateEn}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {lang === 'bn' ? 'সারদাগঞ্জ ও কাশিমপুর' : 'Serving Sardarganj & Kashimpur'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 text-xs font-bold mb-1">
                  <Store className="w-4 h-4" />
                  <span>{t.about.typeLabel}</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {lang === 'bn' ? businessData.businessType : businessData.businessTypeEn}
                </p>
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-slate-100">
                {t.about.desc1}
              </p>
              <p>
                {t.about.desc2}
              </p>
            </div>

            {/* Key Commitment Checkpoints */}
            <div className="space-y-2.5 pt-2">
              {t.about.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlight Motto Quote Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-emerald-900 to-blue-950 text-white shadow-md">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>{t.about.mottoLabel}</span>
              </div>
              <p className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                "{businessData.mainTagline}"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
