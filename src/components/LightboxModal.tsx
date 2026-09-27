import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="lightbox-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white">{title}</h4>
            {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Area */}
        <div className="relative p-2 sm:p-4 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-auto">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Life Care Medicine Point • Kashimpur, Gazipur</span>
          <a
            href={imageSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
          >
            <span>Open Original</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
