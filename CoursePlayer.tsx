import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { IntroSlide } from './components/slides/IntroSlide';
import { OrgansSlide } from './components/slides/OrgansSlide';
import { SymptomsSlide } from './components/slides/SymptomsSlide';
import { PathologySlide } from './components/slides/PathologySlide';
import { QuizSlide } from './components/slides/QuizSlide';
import { COURSE_STRUCTURE } from './constants';
import { SlideType } from './types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CoursePlayer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar

  const handleNext = () => {
    if (currentSlideIndex < COURSE_STRUCTURE.length - 1) {
      setCurrentSlideIndex(curr => curr + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(curr => curr - 1);
    }
  };

  const renderSlideContent = () => {
    const slide = COURSE_STRUCTURE[currentSlideIndex];
    switch (slide.type) {
      case SlideType.INTRO:
        return <IntroSlide />;
      case SlideType.ORGANS:
        return <OrgansSlide />;
      case SlideType.SYMPTOMS:
        return <SymptomsSlide />;
      case SlideType.PATHOLOGY:
        return <PathologySlide />;
      case SlideType.QUIZ:
        return <QuizSlide />;
      default:
        return <div className="p-10">Slide en construcción</div>;
    }
  };

  return (
    <div className="flex h-screen bg-stone-100 overflow-hidden font-sans">
      <Sidebar 
        slides={COURSE_STRUCTURE}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={setCurrentSlideIndex}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full md:ml-72 transition-all duration-300">
        
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-6 shadow-sm z-10">
          <div className="ml-10 md:ml-0">
            <h2 className="text-stone-500 text-sm uppercase tracking-wider font-bold">
               Capítulo {currentSlideIndex + 1} / {COURSE_STRUCTURE.length}
            </h2>
            <p className="text-stone-800 font-semibold truncate">
              {COURSE_STRUCTURE[currentSlideIndex].title}
            </p>
          </div>
          <div className="h-8 w-8 bg-red-900 text-white rounded flex items-center justify-center font-serif font-bold">
            TM
          </div>
        </header>

        {/* Slide Container */}
        <main className="flex-1 overflow-y-auto relative p-4 md:p-6">
          <div className="bg-white rounded-2xl shadow-sm h-full min-h-[600px] overflow-hidden border border-stone-200 relative">
            {/* Decorative watermark */}
            <div className="absolute bottom-4 right-4 opacity-5 text-9xl font-serif pointer-events-none select-none">
              陽
            </div>
            {renderSlideContent()}
          </div>
        </main>

        {/* Bottom Navigation */}
        <footer className="h-20 bg-white border-t border-stone-200 flex items-center justify-between px-6 md:px-10 z-10">
          <button 
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className="flex items-center gap-2 text-stone-600 hover:text-red-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <ChevronLeft /> Anterior
          </button>

          {/* Progress dots for mobile visibility */}
          <div className="flex gap-1">
            {COURSE_STRUCTURE.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full ${idx === currentSlideIndex ? 'bg-red-800' : 'bg-stone-300'}`}
                />
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentSlideIndex === COURSE_STRUCTURE.length - 1}
            className="flex items-center gap-2 bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-900 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-stone-200 transition-all active:scale-95"
          >
            Siguiente <ChevronRight />
          </button>
        </footer>
      </div>
    </div>
  );
};
