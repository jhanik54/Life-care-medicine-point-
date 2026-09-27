import React from 'react';
import { Language } from '../types';
import { translations, businessData } from '../data/content';
import { 
  Award, 
  CheckCircle2, 
  Quote, 
  Facebook, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles,
  Stethoscope,
  Maximize2
} from 'lucide-react';

interface OwnerSectionProps {
  lang: Language;
  onOpenOwnerModal: () => void;
}

export const OwnerSection: React.FC<OwnerSectionProps> = ({
  lang,
  onOpenOwnerModal
}) => {
  const t = translations[lang];
  const p = businessData.pharmacist;

  return (
    <section 
      id="pharmacist" 
      className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.owner.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.owner.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.owner.subheading}
          </p>
        </div>

        {/* 2-Column Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Pharmacist Photograph */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div 
              id="owner-profile-card"
              className="w-full max-w-md bg-gradient-to-b from-slate-50 to-emerald-50/40 dark:from-slate-800 dark:to-slate-800/80 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-xl"
            >
              {/* Photo Frame */}
              <div 
                className="relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 cursor-pointer group"
                onClick={onOpenOwnerModal}
              >
                <img
                  src="/images/owner.png"
                  alt="Mahbubul Alam - Proprietor & C-Grade Pharmacist"
                  className="w-full h-88 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay with zoom action */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                    {lang === 'bn' ? 'ছবি বড় করে দেখুন' : 'View Full Image'}
                  </span>
                </div>

                {/* Badge top right */}
                <div className="absolute top-3 right-3 bg-blue-900/90 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-semibold flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
                  <span>DMLT Certified</span>
                </div>
              </div>

              {/* Title & Credentials */}
              <div className="mt-4 text-center">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {lang === 'bn' ? p.name : p.nameEn}
                </h3>
                <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">
                  {lang === 'bn' ? p.designation : p.designationEn}
                </p>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                  {lang === 'bn' ? p.title : p.titleEn}
                </p>
                <p className="text-xs text-blue-900 dark:text-blue-300 font-semibold mt-1">
                  {lang === 'bn' ? p.business : p.businessEn}
                </p>
              </div>

              {/* Social / Direct Connect Action Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-2">
                <a
                  href={businessData.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="pharmacist-facebook-link"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>

                <a
                  href={businessData.phones.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="pharmacist-wa-link"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-green-600 hover:bg-green-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Respectful Note */}
            <div className="mt-3 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'bn' ? p.regNote : p.regNoteEn}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Background, Roles & Activities, Message */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Experience Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Stethoscope className="w-4 h-4" />
                <span>{t.owner.expTitle}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {lang === 'bn' ? p.experience : p.experienceEn}
              </p>
            </div>

            {/* Professional Activities / Responsibilities Checklist */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                <span>{t.owner.activitiesTitle}</span>
              </div>

              <div className="space-y-3">
                {(lang === 'bn' ? p.activities : p.activitiesEn).map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Owner Quote Card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-white shadow-xl overflow-hidden">
              <Quote className="absolute -right-2 -bottom-2 w-28 h-28 text-white/5 pointer-events-none" />
              
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{t.owner.quoteTitle}</span>
                </div>

                <blockquote className="text-lg sm:text-xl font-bold tracking-tight text-emerald-50 leading-snug">
                  "{lang === 'bn' ? p.message : p.messageEn}"
                </blockquote>

                <div className="pt-2 flex items-center justify-between border-t border-emerald-800/60">
                  <div>
                    <p className="text-sm font-bold text-white">
                      {lang === 'bn' ? p.name : p.nameEn}
                    </p>
                    <p className="text-xs text-emerald-300">
                      {lang === 'bn' ? p.title : p.titleEn}
                    </p>
                  </div>

                  <a
                    href={`tel:${businessData.phones.primary}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{businessData.phones.primary}</span>
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
