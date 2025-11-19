import React from 'react';
import { CheckCircle2, Circle, Menu } from 'lucide-react';
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
  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 md:hidden bg-white p-2 rounded-md shadow-md text-stone-700"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 left-0 h-full bg-stone-900 text-white z-30 transition-transform duration-300 ease-in-out shadow-xl
        w-72
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-stone-700 bg-red-900/20">
          <h1 className="text-xl font-bold serif text-red-100 tracking-wide">
            UNIDAD 2
          </h1>
          <h2 className="text-sm font-light text-red-200 mt-1 uppercase tracking-wider">
            Fisiología Taiyang
          </h2>
        </div>

        <div className="overflow-y-auto h-[calc(100%-80px)] py-4">
          <ul className="space-y-1 px-2">
            {slides.map((slide, index) => {
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
                      ${isActive ? 'bg-red-800 text-white shadow-lg font-medium' : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'}
                    `}
                  >
                    <span className="shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 size={18} className="text-green-500" />
                      ) : isActive ? (
                        <div className="w-4 h-4 rounded-full border-2 border-white animate-pulse" />
                      ) : (
                        <Circle size={18} />
                      )}
                    </span>
                    <span className="line-clamp-2">{slide.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};
