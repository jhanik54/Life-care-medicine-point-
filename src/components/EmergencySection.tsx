import React from 'react';
import { Language } from '../types';
import { translations, businessData } from '../data/content';
import { 
  Clock, 
  Phone, 
  MessageCircle, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  Moon, 
  SunMedium, 
  HeartPulse 
} from 'lucide-react';

interface EmergencySectionProps {
  lang: Language;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section 
      id="emergency" 
      className="py-14 sm:py-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-blue-950 text-white relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 24h Logo Showcase & Visual Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div 
              id="emergency-logo-card"
              className="w-full max-w-sm bg-white/10 dark:bg-slate-900/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col items-center text-center relative group"
            >
              {/* Pulsing ring indicator */}
              <div className="absolute -top-3 px-4 py-1 rounded-full bg-emerald-500 text-white text-xs font-extrabold uppercase tracking-widest shadow-lg flex items-center gap-1.5 animate-pulse-gentle">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>24/7 OPEN SERVICE</span>
              </div>

              {/* Real 24 Hours Service Logo Asset */}
              <div className="my-4 relative">
                <img
                  src="/images/24hoursservice.png"
                  alt="24 Hours Medicine Service Logo"
                  className="w-44 sm:w-52 h-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-2">
                {lang === 'bn' ? '২৪ ঘণ্টা নিরবচ্ছিন্ন সেবা' : '24-Hour Continuous Service'}
              </h3>
              <p className="text-sm font-semibold text-emerald-300 mt-1">
                {t.emergency.subheading}
              </p>

              {/* Day & Night Indicator pills */}
              <div className="mt-6 w-full pt-4 border-t border-white/15 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1.5">
                  <SunMedium className="w-4 h-4 text-amber-300" />
                  <span>{lang === 'bn' ? 'সকাল ৭:০০ - রাত ১:৩০' : 'Day Service'}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1.5">
                  <Moon className="w-4 h-4 text-sky-300" />
                  <span>{lang === 'bn' ? 'গভীর রাতে অন-কল' : 'Night On-Call'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Emergency Details & Action Hub */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>{t.emergency.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {t.emergency.heading}
              </h2>
              <p className="text-lg font-bold text-emerald-300 mt-1">
                {t.emergency.subheading}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {t.emergency.desc}
            </p>

            {/* 3 Key 24h Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-white mb-1">
                  {t.emergency.feature1Title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.emergency.feature1Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 mb-2">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-white mb-1">
                  {t.emergency.feature2Title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.emergency.feature2Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-white mb-1">
                  {t.emergency.feature3Title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.emergency.feature3Desc}
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${businessData.phones.primary}`}
                id="emergency-direct-call-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/25 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>{t.emergency.callNowBtn}</span>
              </a>

              <a
                href={businessData.phones.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="emergency-direct-wa-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.emergency.waBtn}</span>
              </a>
            </div>

            {/* Alternative Number Note */}
            <p className="text-xs text-slate-400">
              {lang === 'bn' ? 'বিকল্প জরুরি নম্বর: ' : 'Alternative emergency line: '}
              <a href={`tel:${businessData.phones.alternative}`} className="text-emerald-300 underline font-semibold">
                {businessData.phones.alternative}
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
