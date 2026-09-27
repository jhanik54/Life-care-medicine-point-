import React from 'react';
import { Language } from '../types';
import { translations, businessData } from '../data/content';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Heart, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer 
      id="main-footer" 
      className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Life Care Medicine Point Logo"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-extrabold text-lg text-white tracking-tight">
                  {lang === 'bn' ? businessData.banglaName : businessData.name}
                </h3>
                <p className="text-xs text-emerald-400 font-semibold">
                  {lang === 'bn' ? businessData.subTagline : businessData.englishTagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              "{businessData.mainTagline}"
            </p>

            <div className="pt-1 flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{lang === 'bn' ? '২৪ ঘণ্টা নিরবচ্ছিন্ন সেবা' : '24/7 Service Active'}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="p-2 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors border border-slate-800"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={businessData.phones.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="p-2 rounded-lg bg-slate-900 hover:bg-green-600 text-slate-400 hover:text-white transition-colors border border-slate-800"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${businessData.email}`}
                aria-label="Send Email"
                className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white transition-colors border border-slate-800"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#pharmacist" className="hover:text-emerald-400 transition-colors">
                  {t.nav.pharmacist}
                </a>
              </li>
              <li>
                <a href="#emergency" className="hover:text-emerald-400 transition-colors">
                  {t.nav.service24h}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-emerald-400 transition-colors">
                  {t.nav.policies}
                </a>
              </li>
              <li>
                <a href="#developer" className="hover:text-emerald-400 transition-colors font-medium text-emerald-400/90">
                  {t.nav.developer}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operational Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              {t.footer.serviceHours}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <p className="font-semibold text-slate-200">{businessData.hours.days}</p>
              <p className="text-emerald-400 font-bold">{businessData.hours.openTime} — {businessData.hours.closeTime}</p>
              <div className="pt-1 text-xs text-slate-400">
                <span className="text-emerald-300 font-semibold">জরুরি সাপোর্ট:</span>
                <p>২৪ ঘণ্টা অন-কল চালু</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{businessData.address.fullBangla}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${businessData.phones.primary}`} className="hover:text-white transition-colors">
                  {businessData.phones.primary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <a href={businessData.phones.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {businessData.phones.whatsapp} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="truncate">{businessData.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Life Care Medicine Point (লাইফ কেয়ার মেডিসিন পয়েন্ট). {t.footer.allRights}
          </p>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Powered by</span>
            <a
              href={businessData.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-semibold"
            >
              JH Soft Corporation
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
