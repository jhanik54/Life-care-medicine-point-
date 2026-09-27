import React from 'react';
import { Language } from '../types';
import { translations, businessData } from '../data/content';
import { 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Heart, 
  Calendar,
  Sparkles,
  MapPin
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenOwnerModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenOwnerModal }) => {
  const t = translations[lang];

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100 dark:border-slate-800"
    >
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0596690a_1px,transparent_1px),linear-gradient(to_bottom,#0596690a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headings, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 sm:space-y-6">
            
            {/* Badges strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div 
                id="hero-24h-badge"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold shadow-xs"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.hero.badge}</span>
              </div>

              <div 
                id="hero-est-badge"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-semibold"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? `প্রতিষ্ঠিত: ${businessData.establishedDate}` : `Est: ${businessData.establishedDateEn}`}</span>
              </div>
            </div>

            {/* Main Brand Title */}
            <div className="space-y-2">
              <h1 
                id="hero-main-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
              >
                {lang === 'bn' ? (
                  <>
                    <span className="text-emerald-700 dark:text-emerald-400">লাইফ কেয়ার</span>
                    <br />
                    <span>মেডিসিন পয়েন্ট</span>
                  </>
                ) : (
                  <>
                    <span className="text-emerald-700 dark:text-emerald-400">Life Care</span>
                    <br />
                    <span>Medicine Point</span>
                  </>
                )}
              </h1>

              {/* Main Taglines */}
              <p 
                id="hero-main-tagline"
                className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 leading-snug pt-1"
              >
                {lang === 'bn' ? businessData.mainTagline : businessData.englishTagline}
              </p>
              <p className="text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-400">
                {lang === 'bn' ? businessData.subTagline : `"${businessData.mainTagline}"`}
              </p>
            </div>

            {/* Description */}
            <p 
              id="hero-description"
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              {t.hero.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              {/* WhatsApp Button */}
              <a
                href={businessData.phones.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              {/* Call Button */}
              <a
                href={`tel:${businessData.phones.primary}`}
                id="hero-cta-call"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>{t.hero.ctaCall}</span>
              </a>

              {/* Learn More Button */}
              <a
                href="#services"
                id="hero-cta-learn-more"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base transition-all"
              >
                <span>{t.hero.ctaLearn}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Micro trust points */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{lang === 'bn' ? '১০০% আসল ওষুধ' : '100% Genuine Medicine'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{lang === 'bn' ? 'মিশন গেট, কাশিমপুর, গাজীপুর' : 'Mission Gate, Kashimpur'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>{lang === 'bn' ? 'মানবিক স্বাস্থ্যসেবা' : 'Compassionate Healthcare'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Owner / Pharmacist + 24H Service Badge Display */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Main Visual Card */}
            <div 
              id="hero-visual-card"
              className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 dark:border-slate-700 transition-all hover:shadow-2xl"
            >
              {/* Top bar with 24 Hours Logo Badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    {lang === 'bn' ? 'লাইসেন্সধারী ফার্মেসি' : 'Registered Pharmacy'}
                  </span>
                </div>

                {/* Real 24 Hours Service Logo */}
                <div className="relative group">
                  <img
                    src="/images/24hoursservice.png"
                    alt="24 Hours Medicine Service"
                    className="h-10 sm:h-12 w-auto object-contain drop-shadow-xs transition-transform group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Owner Real Photograph Container (Face preserved intact) */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-slate-50 to-emerald-50/50 dark:from-slate-900 dark:to-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                <img
                  src="/images/owner.png"
                  alt="Mahbubul Alam - Pharmacist & Proprietor, Life Care Medicine Point"
                  className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Floating 24h badge inside photo */}
                <div className="absolute top-3 left-3 bg-emerald-800/90 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-semibold flex items-center gap-1 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-emerald-300" />
                  <span>24/7 Active</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-4 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-white tracking-tight">
                        {lang === 'bn' ? businessData.pharmacist.name : businessData.pharmacist.nameEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-300 font-medium">
                        {lang === 'bn' ? businessData.pharmacist.designation : businessData.pharmacist.designationEn}
                      </p>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        {lang === 'bn' ? businessData.pharmacist.title : businessData.pharmacist.titleEn}
                      </p>
                    </div>

                    <a 
                      href="#pharmacist"
                      className="text-xs text-emerald-300 hover:text-white bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-1 rounded-md font-medium transition-colors"
                    >
                      {lang === 'bn' ? 'বিস্তারিত' : 'Profile'} →
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Card Strip */}
              <div className="mt-3 pt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {lang === 'bn' ? 'সি-গ্রেড ফার্মাসিস্টের তত্ত্বাবধান' : 'Supervised by C-Grade Pharmacist'}
                  </span>
                </div>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                  {lang === 'bn' ? 'সাপ্তাহিক ৭ দিন' : 'Open 7 Days'}
                </span>
              </div>

            </div>

            {/* Quick floating trust sticker */}
            <div className="mt-3 text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                "{lang === 'bn' ? businessData.mainTagline : businessData.englishTagline}"
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
