import React, { useState } from 'react';
import { Language } from '../types';
import { translations, businessData } from '../data/content';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Facebook, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  AlertCircle 
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [medicineQuery, setMedicineQuery] = useState('');
  const t = translations[lang];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanMsg = `আসসালামু আলাইকুম। লাইফ কেয়ার মেডিসিন পয়েন্টে স্বাস্থ্যসেবা/ওষুধ অনুসন্ধান:
নাম: ${patientName || 'গ্রাহক'}
মোবাইল: ${patientPhone || 'প্রযোজ্য নয়'}
ওষুধের তালিকা / বার্তা:
${medicineQuery}`;

    const encoded = encodeURIComponent(cleanMsg);
    const waUrl = `https://wa.me/880198466410?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="contact" 
      className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.contact.subheading}
          </p>
        </div>

        {/* 2-Column Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Channel Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Primary Phone Card */}
            <a
              href={`tel:${businessData.phones.primary}`}
              id="contact-primary-phone-card"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-200 shadow-2xs hover:shadow-md flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {t.contact.phonePrimary}
                  </span>
                  <p className="text-lg sm:text-xl font-mono font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {businessData.phones.primary}
                  </p>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                    {lang === 'bn' ? '২৪ ঘণ্টা জরুরি কল সার্ভিস' : '24/7 Direct Call Service'}
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                {lang === 'bn' ? 'কল দিন' : 'Call'}
              </span>
            </a>

            {/* Alternative Phone Card */}
            <a
              href={`tel:${businessData.phones.alternative}`}
              id="contact-alt-phone-card"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-200 shadow-2xs hover:shadow-md flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {t.contact.phoneAlt}
                  </span>
                  <p className="text-lg sm:text-xl font-mono font-extrabold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {businessData.phones.alternative}
                  </p>
                </div>
              </div>

              <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                {lang === 'bn' ? 'কল দিন' : 'Call'}
              </span>
            </a>

            {/* WhatsApp Direct Card */}
            <a
              href={businessData.phones.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-card"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-green-400 dark:hover:border-green-600 transition-all duration-200 shadow-2xs hover:shadow-md flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {t.contact.whatsappTitle}
                  </span>
                  <p className="text-lg sm:text-xl font-mono font-extrabold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {businessData.phones.whatsapp}
                  </p>
                  <span className="text-[11px] text-green-700 dark:text-green-400 font-semibold">
                    {lang === 'bn' ? 'প্রেসক্রিপশনের ছবি পাঠান' : 'Send Prescription Photos'}
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-green-600 text-white">
                WhatsApp
              </span>
            </a>

            {/* Email & Facebook Horizontal Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`mailto:${businessData.email}`}
                id="contact-email-card"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center gap-3 shadow-2xs"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email</span>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                    {businessData.email}
                  </p>
                </div>
              </a>

              <a
                href={businessData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-facebook-card"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-700 transition-colors flex items-center gap-3 shadow-2xs"
              >
                <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Facebook</span>
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                    Mahbubul Alam
                  </p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Prescription / Medicine Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {t.contact.formDesc}
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patientName" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === 'bn' ? 'রোগী / গ্রাহকের নাম' : 'Patient / Customer Name'}
                    </label>
                    <input
                      id="patientName"
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="patientPhone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {lang === 'bn' ? 'মোবাইল নম্বর' : 'Phone Number'}
                    </label>
                    <input
                      id="patientPhone"
                      type="tel"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="medicineQuery" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'bn' ? 'প্রয়োজনীয় ওষুধ অথবা বার্তা' : 'Required Medicines / Message'}
                  </label>
                  <textarea
                    id="medicineQuery"
                    rows={4}
                    value={medicineQuery}
                    onChange={(e) => setMedicineQuery(e.target.value)}
                    placeholder={t.contact.msgPlaceholder}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-whatsapp-inquiry-btn"
                  className="w-full py-3.5 px-6 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.contact.sendWaBtn}</span>
                </button>

                {/* Medical Responsibility Disclaimer */}
                <div className="pt-2 flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p>{t.contact.disclaimer}</p>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
