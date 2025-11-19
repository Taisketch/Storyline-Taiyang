import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { IntroSlide } from './components/slides/IntroSlide';
import { OrgansSlide } from './components/slides/OrgansSlide';
import { SymptomsSlide } from './components/slides/SymptomsSlide';
import { PathologySlide } from './components/slides/PathologySlide';
import { QuizSlide } from './components/slides/QuizSlide';
import { YangmingIntroSlide } from './components/slides/YangmingIntroSlide';
import { YangmingOrgansSlide } from './components/slides/YangmingOrgansSlide';
import { YangmingPathologySlide } from './components/slides/YangmingPathologySlide';
import { ShaoyangIntroSlide } from './components/slides/ShaoyangIntroSlide';
import { ShaoyangPivotSlide } from './components/slides/ShaoyangPivotSlide';
import { ShaoyangOrgansSlide } from './components/slides/ShaoyangOrgansSlide';
import { ShaoyangPathologySlide } from './components/slides/ShaoyangPathologySlide';
import { COURSE_STRUCTURE } from './constants';
import { SlideType } from './types';
import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

export const CoursePlayer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initial setup based on isDarkMode state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
      // Taiyang
      case SlideType.INTRO:
        return <IntroSlide />;
      case SlideType.ORGANS:
        return <OrgansSlide />;
      case SlideType.SYMPTOMS:
        return <SymptomsSlide />;
      case SlideType.PATHOLOGY:
        return <PathologySlide />;
      
      // Yangming
      case SlideType.YANGMING_INTRO:
        return <YangmingIntroSlide />;
      case SlideType.YANGMING_ORGANS:
        return <YangmingOrgansSlide />;
      case SlideType.YANGMING_PATHOLOGY:
        return <YangmingPathologySlide />;

      // Shaoyang
      case SlideType.SHAOYANG_INTRO:
        return <ShaoyangIntroSlide />;
      case SlideType.SHAOYANG_PIVOT:
        return <ShaoyangPivotSlide />;
      case SlideType.SHAOYANG_ORGANS:
        return <ShaoyangOrgansSlide />;
      case SlideType.SHAOYANG_PATHOLOGY:
        return <ShaoyangPathologySlide />;
        
      // Evaluation
      case SlideType.QUIZ:
        return <QuizSlide />;
      default:
        return <div className="p-10">Slide en construcción</div>;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden font-sans text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <Sidebar 
        slides={COURSE_STRUCTURE}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={setCurrentSlideIndex}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full md:ml-80 transition-all duration-300">
        
        {/* Top Bar */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shadow-md z-10 transition-colors duration-300">
          <div className="ml-10 md:ml-0">
            <h2 className="text-slate-500 dark:text-slate-500 text-xs md:text-sm uppercase tracking-wider font-bold">
               {COURSE_STRUCTURE[currentSlideIndex].unit}
            </h2>
            <p className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              {COURSE_STRUCTURE[currentSlideIndex].title}
            </p>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
            aria-label="Cambiar tema"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* Slide Container */}
        <main className="flex-1 overflow-y-auto relative p-4 md:p-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-2xl h-full min-h-[600px] overflow-hidden border border-slate-200 dark:border-slate-800 relative transition-colors duration-300">
            {/* Decorative watermark */}
            <div className="absolute bottom-4 right-4 opacity-[0.05] dark:opacity-[0.03] text-slate-900 dark:text-white text-9xl font-serif pointer-events-none select-none z-0">
              {currentSlideIndex >= 7 ? '少陽' : currentSlideIndex >= 4 ? '陽明' : '太陽'}
            </div>
            <div className="relative z-10 h-full">
              {renderSlideContent()}
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <footer className="h-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 md:px-10 z-10 transition-colors duration-300">
          <button 
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <ChevronLeft /> Anterior
          </button>

          {/* Progress dots */}
          <div className="hidden md:flex gap-1">
            {COURSE_STRUCTURE.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentSlideIndex ? 'bg-red-600' : 'bg-slate-200 dark:bg-slate-700'}`}
                />
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentSlideIndex === COURSE_STRUCTURE.length - 1}
            className="flex items-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-slate-400/50 dark:shadow-slate-900/50 transition-all active:scale-95 font-bold"
          >
            Siguiente <ChevronRight />
          </button>
        </footer>
      </div>
    </div>
  );
};