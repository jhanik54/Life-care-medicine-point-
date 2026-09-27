import React, { useState, useEffect } from 'react';
import { Language, Theme } from '../types';
import { translations, businessData } from '../data/content';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Globe, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  theme,
  toggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#pharmacist', label: t.nav.pharmacist },
    { href: '#emergency', label: t.nav.service24h },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#policies', label: t.nav.policies },
    { href: '#location', label: t.nav.location },
    { href: '#developer', label: t.nav.developer },
  ];

  return (
    <>
      {/* Top micro-announcement bar for 24h & phone */}
      <div id="top-announcement-bar" className="bg-emerald-800 text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
              <Clock className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? '২৪ ঘণ্টা নিরবচ্ছিন্ন মেডিসিন সেবা' : '24/7 Emergency Pharmacy Service'}</span>
            </span>
            <span className="hidden md:inline text-emerald-200">|</span>
            <span className="hidden md:inline text-emerald-100">
              {lang === 'bn' ? 'কাশিমপুর, গাজীপুর' : 'Kashimpur, Gazipur'}
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <a 
              href={`tel:${businessData.phones.primary}`} 
              id="top-emergency-call"
              className="inline-flex items-center gap-1 text-emerald-100 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{businessData.phones.primary}</span>
            </a>
            <a 
              href={businessData.phones.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              id="top-emergency-whatsapp"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-100 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        id="main-sticky-header"
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200 dark:border-slate-800'
            : 'bg-white dark:bg-slate-900 py-3.5 border-b border-slate-100 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#home" id="brand-logo-link" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Life Care Medicine Point Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg leading-tight text-slate-900 dark:text-white tracking-tight">
                {lang === 'bn' ? businessData.banglaName : businessData.name}
              </span>
              <span className="text-[11px] sm:text-xs text-emerald-700 dark:text-emerald-400 font-medium leading-none mt-0.5">
                {lang === 'bn' ? businessData.subTagline : businessData.englishTagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                id={`nav-link-${item.href.replace('#', '')}`}
                className="px-2.5 xl:px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls: Language, Theme & CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Language Switcher */}
            <div 
              id="lang-switcher-container"
              className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 bg-slate-100 dark:bg-slate-800 text-xs font-semibold"
            >
              <button
                type="button"
                id="lang-btn-bn"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === 'bn'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="Switch to Bengali language"
              >
                বাংলা
              </button>
              <button
                type="button"
                id="lang-btn-en"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === 'en'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="Switch to English language"
              >
                EN
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Quick Call Button Desktop */}
            <a
              href={`tel:${businessData.phones.primary}`}
              id="header-call-cta"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all hover:shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.nav.callBtn}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-drawer" 
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-fadeIn"
          >
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  id={`mobile-nav-link-${item.href.replace('#', '')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2">
              <a
                href={`tel:${businessData.phones.primary}`}
                id="mobile-drawer-call-btn"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{t.nav.callBtn}</span>
              </a>
              <a
                href={businessData.phones.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-drawer-wa-btn"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.nav.whatsappBtn}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
