import React from 'react';
import { Language } from '../types';
import { translations, businessData } from '../data/content';
import { 
  Code, 
  ExternalLink, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

interface DeveloperSectionProps {
  lang: Language;
  onOpenImageModal?: (src: string, title: string, subtitle?: string) => void;
}

export const DeveloperSection: React.FC<DeveloperSectionProps> = ({ 
  lang,
  onOpenImageModal 
}) => {
  const t = translations[lang];
  const devT = t.developerSection;

  return (
    <section 
      id="developer" 
      className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-slate-800"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
            <Code className="w-4 h-4 text-emerald-400" />
            <span>{devT.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
            {devT.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
            {devT.subheading}
          </p>
        </div>

        {/* Developer & Agency Profile Showcase Card */}
        <div 
          id="developer-profile-hero"
          className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-8 lg:p-10 relative backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Developer Portrait Box */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-emerald-500/40 shadow-2xl bg-slate-800 relative">
                  <img
                    src={businessData.developer.image}
                    alt={businessData.developer.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/images/developer_gh.png';
                    }}
                  />
                  {onOpenImageModal && (
                    <button
                      type="button"
                      onClick={() => onOpenImageModal(
                        businessData.developer.image, 
                        businessData.developer.name, 
                        lang === 'bn' ? businessData.developer.position : businessData.developer.positionEn
                      )}
                      aria-label="View developer portrait"
                      className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 cursor-pointer"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                      <span>{lang === 'bn' ? 'বড় করে দেখুন' : 'View Full Image'}</span>
                    </button>
                  )}
                </div>

                {/* Company Logo Badge */}
                <div className="absolute -bottom-3 -right-3 p-2 rounded-2xl bg-slate-900 border-2 border-emerald-500/80 shadow-2xl flex items-center gap-2">
                  <img
                    src={businessData.developer.logo}
                    alt="JH Soft Corporation Logo"
                    className="w-9 h-9 object-contain rounded-lg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/images/pwa_icon_512.png';
                    }}
                  />
                  <div className="pr-1.5 text-left hidden sm:block">
                    <p className="text-[11px] font-black text-white leading-tight">JH Soft</p>
                    <p className="text-[9px] font-bold text-emerald-400 leading-none">Corporation</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Full Stack Engineer</span>
                </span>
              </div>
            </div>

            {/* Developer Details & Biography */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold tracking-wide">
                  <span>{lang === 'bn' ? 'লিড ডেভেলপার ও প্রতিষ্ঠাতা' : 'Lead Developer & Founder'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {businessData.developer.name}
                </h3>
                <p className="text-emerald-400 font-bold text-base sm:text-lg">
                  {lang === 'bn' ? businessData.developer.position : businessData.developer.positionEn}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {devT.companyBio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <p className="text-xs text-slate-400 font-medium">{lang === 'bn' ? 'কোম্পানি' : 'Agency'}</p>
                  <p className="text-sm font-bold text-white mt-0.5">JH Soft Corporation</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <p className="text-xs text-slate-400 font-medium">{lang === 'bn' ? 'অফিসিয়াল পোর্টাল' : 'Official Portal'}</p>
                  <a 
                    href={businessData.developer.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-400 hover:underline flex items-center justify-center lg:justify-start gap-1 mt-0.5"
                  >
                    <span>www.jhsoft.online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
