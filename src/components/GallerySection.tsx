import React from 'react';
import { Language, GalleryItem } from '../types';
import { translations, businessData, galleryImages } from '../data/content';
import { 
  Camera, 
  Maximize2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Store, 
  Clock, 
  Sparkles,
  Layers
} from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
  onOpenImageModal: (src: string, title: string, subtitle?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  lang,
  onOpenImageModal
}) => {
  const t = translations[lang];

  return (
    <section 
      id="gallery" 
      className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/70 border border-teal-300 dark:border-teal-700 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.gallery.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.gallery.subheading}
          </p>
        </div>

        {/* Authentic Verified Business Photo Showcase */}
        <div className="max-w-4xl mx-auto">
          {galleryImages.map((item) => (
            <div 
              key={item.id}
              id={`gallery-card-${item.id}`}
              className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl group cursor-pointer flex flex-col justify-between"
              onClick={() => onOpenImageModal(
                item.src,
                lang === 'bn' ? item.title : item.titleEn,
                lang === 'bn' ? item.caption : item.captionEn
              )}
            >
              {/* Image Frame */}
              <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.src}
                  alt={lang === 'bn' ? item.title : item.titleEn}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
                
                {/* Badges on Top */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700/90 text-white text-xs font-bold shadow-md backdrop-blur-xs">
                    <Store className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? item.tag : item.tagEn}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/85 text-emerald-300 text-xs font-semibold backdrop-blur-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.gallery.realPhotoBadge}</span>
                  </span>
                </div>

                {/* Zoom Trigger Button Top Right */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenImageModal(
                      item.src,
                      lang === 'bn' ? item.title : item.titleEn,
                      lang === 'bn' ? item.caption : item.captionEn
                    );
                  }}
                  id={`gallery-zoom-btn-${item.id}`}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/90 hover:bg-white text-slate-900 text-xs font-bold shadow-lg transition-all flex items-center gap-1.5"
                  aria-label="Enlarge store image"
                >
                  <Maximize2 className="w-4 h-4 text-emerald-700" />
                  <span className="hidden sm:inline">{t.gallery.viewFullBtn}</span>
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                    {lang === 'bn' ? item.title : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-300 mt-1.5 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{lang === 'bn' ? item.caption : item.captionEn}</span>
                  </p>
                </div>
              </div>

              {/* Card Footer Features */}
              <div className="bg-slate-900/95 border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'সরাসরি পরিদর্শনযোগ্য ফার্মেসি ও সার্ভিস কাউন্টার' : 'Directly Verifiable Pharmacy & Service Counter'}</span>
                </span>
                <span className="text-slate-400 text-xs">
                  {lang === 'bn' ? '১০০% বাস্তব ছবি' : '100% Authentic Photo'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 Trust Features Strip */}
        <div className="mt-8 max-w-6xl mx-auto bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.gallery.features.map((feat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">{feat.label}</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">{feat.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Assurance Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {lang === 'bn' 
              ? '* আমাদের স্টোরে সংরক্ষিত সকল ওষুধ শতভাগ আসল এবং ড্রাগ রেগুলেশন আইন মেনে তাপমাত্রা নিয়ন্ত্রিত পরিবেশে সংরক্ষিত হয়।'
              : '* All pharmaceuticals at our facility are 100% authentic and stored in strictly regulated temperature-controlled conditions.'}
          </p>
        </div>

      </div>
    </section>
  );
};
