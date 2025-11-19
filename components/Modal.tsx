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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 dark:bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
          <div 
            className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl w-full max-w-lg border-t-4 border-red-600 dark:border-red-700 overflow-hidden animate-in zoom-in-95 duration-200 ring-1 ring-slate-200 dark:ring-slate-700"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <h3 className="text-lg font-bold text-red-600 dark:text-red-400 serif">{title}</h3>
              <button 
                onClick={onClose}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto text-slate-700 dark:text-slate-300 leading-relaxed scrollbar-hide">
              {children}
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button 
                onClick={onClose}
                className="text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 hover:underline"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        </div>
      );
    };