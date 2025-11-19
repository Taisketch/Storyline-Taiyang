import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../../constants';
import { Button } from '../Button';

export const QuizSlide: React.FC = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const checkAnswer = () => {
    setIsAnswered(true);
    if (selectedOption === currentQ.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in">
        <div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-2xl text-center max-w-md w-full border-t-8 border-red-600 ring-1 ring-slate-200 dark:ring-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 serif">Resultados</h2>
          <div className="text-6xl font-black text-red-600 dark:text-red-500 mb-4">
            {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Has respondido correctamente {score} de {QUIZ_QUESTIONS.length} preguntas.
          </p>
          <Button onClick={resetQuiz} icon={<RefreshCw size={18} />}>
            Intentar de nuevo
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col max-w-3xl mx-auto p-4 md:p-8">
      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full mb-8">
        <div 
          className="bg-red-600 h-2 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
          style={{ width: `${((currentQIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
        />
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex-1 flex flex-col relative overflow-hidden">
        <h3 className="text-xl font-bold text-slate-400 dark:text-slate-500 mb-6 serif">
          Pregunta {currentQIndex + 1} de {QUIZ_QUESTIONS.length}
        </h3>
        
        <p className="text-lg text-slate-800 dark:text-slate-100 mb-8 font-medium leading-relaxed">
          {currentQ.question}
        </p>

        <div className="space-y-3 mb-8 flex-1">
          {currentQ.options.map((option, idx) => {
            let buttonStyle = "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 hover:border-slate-300 dark:hover:border-slate-600";
            let icon = null;

            if (isAnswered) {
              if (idx === currentQ.correctAnswer) {
                buttonStyle = "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-300";
                icon = <CheckCircle size={20} />;
              } else if (idx === selectedOption) {
                buttonStyle = "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-300";
                icon = <XCircle size={20} />;
              } else {
                buttonStyle = "border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-600 opacity-50";
              }
            } else if (selectedOption === idx) {
              buttonStyle = "bg-slate-100 dark:bg-slate-700 border-red-500 text-slate-900 dark:text-white ring-1 ring-red-500";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all flex justify-between items-center ${buttonStyle}`}
              >
                <span>{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6 animate-in fade-in slide-in-from-top-2 border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <span className="font-bold block mb-1 text-slate-900 dark:text-white">Explicación:</span>
              {currentQ.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-end mt-auto">
          {!isAnswered ? (
            <Button onClick={checkAnswer} disabled={selectedOption === null}>
              Confirmar Respuesta
            </Button>
          ) : (
            <Button onClick={nextQuestion}>
              {currentQIndex < QUIZ_QUESTIONS.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};