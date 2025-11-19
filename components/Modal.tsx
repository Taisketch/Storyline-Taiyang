import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-lg border-t-4 border-red-800 overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-4 border-b border-stone-200 bg-stone-50">
          <h3 className="text-lg font-bold text-red-900 serif">{title}</h3>
          <button 
            onClick={onClose}
            className="text-stone-500 hover:text-red-700 hover:bg-stone-200 p-1 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 max-h-[70vh] overflow-y-auto text-stone-700 leading-relaxed">
          {children}
        </div>
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button 
            onClick={onClose}
            className="text-sm font-semibold text-red-800 hover:underline"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};
