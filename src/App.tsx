/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { businessData } from './data/content';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { OwnerSection } from './components/OwnerSection';
import { ServicesSection } from './components/ServicesSection';
import { EmergencySection } from './components/EmergencySection';
import { GallerySection } from './components/GallerySection';
import { PoliciesSection } from './components/PoliciesSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { DeveloperSection } from './components/DeveloperSection';
import { Footer } from './components/Footer';
import { QuickContactBar } from './components/QuickContactBar';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [theme, setTheme] = useState<Theme>('light');
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
    subtitle: ''
  });

  // Sync language with HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Sync theme with HTML root class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openStoreModal = () => {
    setLightbox({
      isOpen: true,
      imageSrc: '/images/store.png',
      title: lang === 'bn' ? 'লাইফ কেয়ার মেডিসিন পয়েন্ট - মূল স্টোর' : 'Life Care Medicine Point - Main Store',
      subtitle: businessData.address.fullBangla
    });
  };

  const openOwnerModal = () => {
    setLightbox({
      isOpen: true,
      imageSrc: '/images/owner.png',
      title: lang === 'bn' ? 'মাহবুবুল আলম' : 'Mahbubul Alam',
      subtitle: lang === 'bn' ? 'স্বত্বাধিকারী ও সি-গ্রেড ফার্মাসিস্ট (DMLT)' : 'Proprietor & C-Grade Pharmacist (DMLT)'
    });
  };

  const openImageModal = (src: string, title: string, subtitle?: string) => {
    setLightbox({
      isOpen: true,
      imageSrc: src,
      title,
      subtitle
    });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Navigation Header */}
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="grow pb-16 lg:pb-0">
        <Hero
          lang={lang}
          onOpenOwnerModal={openOwnerModal}
        />

        <TrustStrip
          lang={lang}
        />

        <AboutSection
          lang={lang}
          onOpenStoreModal={openStoreModal}
        />

        <OwnerSection
          lang={lang}
          onOpenOwnerModal={openOwnerModal}
        />

        <ServicesSection
          lang={lang}
        />

        <EmergencySection
          lang={lang}
        />

        <GallerySection
          lang={lang}
          onOpenImageModal={openImageModal}
        />

        <PoliciesSection
          lang={lang}
        />

        <LocationSection
          lang={lang}
        />

        <ContactSection
          lang={lang}
        />

        <DeveloperSection
          lang={lang}
          onOpenImageModal={openImageModal}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
      />

      {/* Mobile Emergency Quick Bar */}
      <QuickContactBar
        lang={lang}
      />

      {/* High Resolution Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        imageSrc={lightbox.imageSrc}
        title={lightbox.title}
        subtitle={lightbox.subtitle}
      />

    </div>
  );
}
