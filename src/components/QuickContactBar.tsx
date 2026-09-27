import React from 'react';
import { Language } from '../types';
import { translations, businessData } from '../data/content';
import { Phone, MessageCircle, Navigation, Clock } from 'lucide-react';

interface QuickContactBarProps {
  lang: Language;
}

export const QuickContactBar: React.FC<QuickContactBarProps> = ({ lang }) => {
  return (
    <aside 
      aria-label="Emergency quick action bar"
      id="mobile-quick-emergency-bar" 
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Quick Call */}
        <a
          href={`tel:${businessData.phones.primary}`}
          id="bar-call-btn"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white shadow-xs"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">
            {lang === 'bn' ? 'কল দিন' : 'Call'}
          </span>
        </a>

        {/* Quick WhatsApp */}
        <a
          href={businessData.phones.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="bar-whatsapp-btn"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-green-600 active:bg-green-700 text-white shadow-xs"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">
            WhatsApp
          </span>
        </a>

        {/* Quick Location / Directions */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=X79R%2BWQ4+Sardagonj"
          target="_blank"
          rel="noopener noreferrer"
          id="bar-direction-btn"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-slate-800 active:bg-slate-700 text-slate-200 border border-slate-700"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-emerald-400" />
          <span className="text-[11px] font-bold tracking-tight">
            {lang === 'bn' ? 'লোকেশন' : 'Directions'}
          </span>
        </a>

      </div>
    </aside>
  );
};
