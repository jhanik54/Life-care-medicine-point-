import React, { useState } from 'react';
import { Language } from '../types';
import { translations, businessData } from '../data/content';
import { 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink, 
  Navigation, 
  Phone, 
  Calendar,
  Building,
  Sparkles
} from 'lucide-react';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(businessData.address.plusCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="location" 
      className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.location.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.location.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.location.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Address, Operational Schedule & Plus Code */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            
            {/* Address Box */}
            <div 
              id="location-address-card"
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-4"
            >
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>{t.location.addressTitle}</span>
              </div>

              <div className="space-y-1 text-slate-800 dark:text-slate-200 text-sm sm:text-base font-medium">
                {(lang === 'bn' ? businessData.address.bangla : businessData.address.english).map((line, idx) => (
                  <p key={idx} className={idx === 0 || idx === 3 ? 'font-bold text-slate-900 dark:text-white' : ''}>
                    {line}
                  </p>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-emerald-800 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.location.landmark}</span>
                </p>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div 
              id="location-hours-card"
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>{t.location.hoursTitle}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                  {t.location.openEveryday}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  <span>{lang === 'bn' ? 'কাউন্টার সময়সূচি:' : 'Counter Hours:'}</span>
                  <span className="text-emerald-700 dark:text-emerald-400">{t.location.hoursTime}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-900/10 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-700/60 text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.location.nightService}</span>
                </div>
              </div>
            </div>

            {/* Plus Code & Directions */}
            <div 
              id="location-pluscode-card"
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold block">
                  {t.location.plusCodeTitle}
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-emerald-300 tracking-wide">
                  {businessData.address.plusCode}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleCopyPlusCode}
                  id="copy-pluscode-btn"
                  className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/20"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>{t.location.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.location.copyPlusCode}</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('X79R+WQ4 Sardagonj')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="open-google-maps-btn"
                  className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'ম্যাপ' : 'Map'}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Responsive Map Interface */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800 relative">
              
              {/* Map Header Bar */}
              <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between text-xs px-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="font-semibold">
                    Life Care Medicine Point • Sardagonj, Kashimpur, Gazipur
                  </span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('X79R+WQ4 Sardagonj')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
                >
                  <span>{t.location.getDirections}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-88 sm:h-96">
                <iframe
                  title="Life Care Medicine Point Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=90.2850%2C23.9780%2C90.3180%2C24.0060&amp;layer=mapnik&amp;marker=23.9923%2C90.3018"
                  className="w-full h-full border-0"
                  loading="lazy"
                />

                {/* Floating Map Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 max-w-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {lang === 'bn' ? businessData.banglaName : businessData.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {lang === 'bn' ? 'মিশন গেট, পাগলা মার্কেট রোড, সারদাগঞ্জ' : 'Mission Gate, Pagla Market Road, Sardagonj'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
