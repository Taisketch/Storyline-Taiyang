import React, { useState } from 'react';
import { ArrowLeftRight, DoorOpen, Lock } from 'lucide-react';

export const ShaoyangPivotSlide: React.FC = () => {
  const [pivotState, setPivotState] = useState<'neutral' | 'open' | 'close'>('neutral');

  return (
    <div className="h-full flex flex-col items-center p-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale invert dark:invert-0" alt="Puerta iluminada" />
      </div>

      <div className="relative z-10 flex flex-col items-center h-full">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 serif">Shaoyang: La Bisagra (Pivote)</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
            "Taiyang abre, Yangming cierra, y Shaoyang pivota".
            <br/>
            La salud depende de la capacidad de esta bisagra para moverse libremente.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center flex-1">
            
            {/* TAIYANG (Open) */}
            <div className={`transition-all duration-500 transform ${pivotState === 'open' ? 'opacity-100 scale-110' : 'opacity-30 scale-90'}`}>
                <div className="w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/30 flex flex-col items-center justify-center text-blue-600 dark:text-blue-300 border-4 border-blue-500 shadow-lg shadow-blue-200 dark:shadow-blue-900/40">
                    <DoorOpen size={40} />
                    <span className="font-bold mt-2">ABRIR</span>
                    <span className="text-xs">Taiyang</span>
                </div>
            </div>

            {/* THE PIVOT (Shaoyang) */}
            <div className="flex flex-col items-center z-10">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-full shadow-2xl border-4 border-slate-300 dark:border-slate-600 w-48 h-48 flex flex-col items-center justify-center relative overflow-hidden shadow-black/20 dark:shadow-black/50">
                    <div className={`absolute inset-0 rounded-full border-t-8 border-slate-400 dark:border-slate-500 transition-transform duration-700 ${pivotState === 'open' ? '-rotate-45' : pivotState === 'close' ? 'rotate-45' : 'rotate-0'}`} />
                    
                    <ArrowLeftRight size={48} className="text-slate-700 dark:text-slate-200 mb-2 relative z-10" />
                    <h3 className="text-xl font-bold serif text-slate-900 dark:text-white relative z-10">Pivote</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest relative z-10">Shaoyang</p>

                    {/* Controls */}
                    <div className="absolute -bottom-16 flex gap-2 w-64 justify-center">
                        <button 
                            onClick={() => setPivotState('open')}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors shadow-lg ${pivotState === 'open' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600'}`}
                        >
                            Hacia Afuera
                        </button>
                        <button 
                            onClick={() => setPivotState('close')}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors shadow-lg ${pivotState === 'close' ? 'bg-red-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600'}`}
                        >
                            Hacia Adentro
                        </button>
                    </div>
                </div>
            </div>

            {/* YANGMING (Close) */}
            <div className={`transition-all duration-500 transform ${pivotState === 'close' ? 'opacity-100 scale-110' : 'opacity-30 scale-90'}`}>
                <div className="w-32 h-32 rounded-full bg-red-100 dark:bg-red-900/30 flex flex-col items-center justify-center text-red-600 dark:text-red-300 border-4 border-red-500 shadow-lg shadow-red-200 dark:shadow-red-900/40">
                    <Lock size={40} />
                    <span className="font-bold mt-2">CERRAR</span>
                    <span className="text-xs">Yangming</span>
                </div>
            </div>

        </div>

        <div className="mt-20 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-l-4 border-yellow-500 dark:border-yellow-600 max-w-3xl w-full animate-in slide-in-from-bottom-4 shadow-lg border border-yellow-200 dark:border-yellow-900/30">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Patología de la Bisagra</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
                Si la bisagra se "congela" o se traba, no puede ni abrir ni cerrar correctamente. El patógeno queda atrapado en el medio.
                <br/>
                Esto genera la alternancia: <strong>Fiebre</strong> (lucha hacia afuera) y <strong>Escalofríos</strong> (retraimiento hacia adentro).
            </p>
        </div>
      </div>
    </div>
  );
};