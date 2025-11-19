import React from 'react';
import { CheckCircle2, Circle, Menu, BookOpen } from 'lucide-react';
import { SlideConfig } from '../types';

interface SidebarProps {
  slides: SlideConfig[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  slides, 
  currentSlideIndex, 
  onSelectSlide,
  isOpen,
  toggleSidebar
}) => {
  // Group slides by unit
  const groupedSlides: Record<string, { slide: SlideConfig; index: number }[]> = {};
  
  slides.forEach((slide, index) => {
    if (!groupedSlides[slide.unit]) {
      groupedSlides[slide.unit] = [];
    }
    groupedSlides[slide.unit].push({ slide, index });
  });

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 md:hidden bg-white dark:bg-slate-800 text-slate-800 dark:text-white p-2 rounded-md shadow-md border border-slate-200 dark:border-slate-700"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 left-0 h-full bg-white dark:bg-slate-950 text-slate-800 dark:text-white z-30 transition-all duration-300 ease-in-out shadow-xl border-r border-slate-200 dark:border-slate-800
        w-80
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <h1 className="text-xl font-bold serif text-red-600 dark:text-red-400 tracking-wide">
            MEDICINA CHINA
          </h1>
          <h2 className="text-xs font-light text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
            Curso Interactivo
          </h2>
        </div>

        <div className="overflow-y-auto h-[calc(100%-80px)] py-4 scrollbar-hide">
          {Object.entries(groupedSlides).map(([unitName, unitSlides]) => (
            <div key={unitName} className="mb-6">
              <div className="px-6 py-2 flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                <BookOpen size={12} />
                {unitName}
              </div>
              <ul className="space-y-1 px-2">
                {unitSlides.map(({ slide, index }) => {
                  const isActive = currentSlideIndex === index;
                  const isCompleted = currentSlideIndex > index;

                  return (
                    <li key={slide.id}>
                      <button
                        onClick={() => {
                          onSelectSlide(index);
                          if (window.innerWidth < 768) toggleSidebar();
                        }}
                        className={`
                          w-full text-left px-4 py-3 rounded-md flex items-center gap-3 text-sm transition-colors
                          ${isActive 
                            ? 'bg-slate-100 dark:bg-slate-800 text-red-600 dark:text-red-400 shadow-sm font-medium border border-slate-200 dark:border-slate-700' 
                            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'}
                        `}
                      >
                        <span className="shrink-0">
                          {isCompleted ? (
                            <CheckCircle2 size={18} className="text-green-500" />
                          ) : isActive ? (
                            <div className="w-4 h-4 rounded-full border-2 border-red-600 dark:border-red-400 animate-pulse" />
                          ) : (
                            <Circle size={18} />
                          )}
                        </span>
                        <span className="line-clamp-2 leading-tight">{slide.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 dark:bg-black/80 z-20 md:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};