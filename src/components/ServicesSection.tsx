import React, { useState } from 'react';
import { Language } from '../types';
import { servicesData, translations, businessData } from '../data/content';
import { 
  Stethoscope, 
  Clock, 
  Pill, 
  Users, 
  Activity, 
  Droplet, 
  Wind, 
  Bandage, 
  Scissors, 
  Award, 
  Smartphone, 
  FlaskConical, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = translations[lang];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Pill':
        return <Pill className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-red-600 dark:text-red-400" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
      case 'Bandage':
        return <Bandage className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      default:
        return <Stethoscope className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  const filterTabs = [
    { id: 'all', label: t.services.filterAll },
    { id: 'medicine', label: t.services.filterMedicine },
    { id: 'diagnostic', label: t.services.filterDiagnostic },
    { id: 'care', label: t.services.filterCare },
    { id: 'surgical', label: t.services.filterSurgical },
  ];

  return (
    <section 
      id="services" 
      className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.services.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.services.subheading}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              id={`service-tab-${tab.id}`}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === tab.id
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (12 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="relative group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-200 shadow-2xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 shadow-2xs group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>

                  <div className="flex items-center gap-2">
                    {service.is24h && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                        <Clock className="w-3 h-3" />
                        24/7
                      </span>
                    )}
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                      #{String(service.number).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  {lang === 'bn' ? service.title : service.titleEn}
                </h3>

                {/* Service Category Tag */}
                <span className="inline-block text-[11px] font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md mb-3">
                  {lang === 'bn' ? service.categoryLabel : service.categoryLabelEn}
                </span>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {lang === 'bn' ? service.shortDesc : service.shortDescEn}
                </p>

                {/* Key Points Bullet list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 mb-4">
                  {(lang === 'bn' ? service.features : service.featuresEn).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer: Professional status badge & subtle inquiry link without repetitive phone strings */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {service.is24h
                    ? (lang === 'bn' ? '২৪ ঘণ্টা উপলব্ধ' : '24/7 Available')
                    : (lang === 'bn' ? 'নিয়মিত স্বাস্থ্যসেবা' : 'Standard Care')}
                </span>

                <a
                  href={businessData.phones.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 flex items-center gap-1 transition-colors group-hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                  <span>{lang === 'bn' ? 'পরামর্শ / তথ্য' : 'Inquire'}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Emergency Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-800 via-teal-900 to-blue-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight">
              {t.services.contactHelp}
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200">
              {lang === 'bn' ? 'সরাসরি কল অথবা হোয়াটসঅ্যাপে প্রেসক্রিপশন পাঠান' : 'Direct Call or Send your prescription on WhatsApp'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${businessData.phones.primary}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-xs sm:text-sm shadow hover:bg-emerald-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{businessData.phones.primary}</span>
            </a>
            <a
              href={businessData.phones.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs sm:text-sm shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
