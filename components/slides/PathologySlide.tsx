import React, { useState } from 'react';
import { Snowflake, Wind, ArrowRightCircle } from 'lucide-react';

export const PathologySlide: React.FC = () => {
  const [view, setView] = useState<'comparison' | 'detail'>('comparison');

  return (
    <div className="h-full flex flex-col p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 serif text-center">
        Dos Caras de la Patología Taiyang
      </h2>
      <p className="text-center text-slate-500 dark:text-slate-400 mb-8">Exceso (Frío) vs Deficiencia (Viento)</p>

      {view === 'comparison' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 items-center">
          {/* Shang Han Side */}
          <div className="bg-blue-50 dark:bg-blue-950/40 rounded-2xl p-8 border border-blue-200 dark:border-blue-900/50 shadow-lg hover:shadow-2xl hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-all group relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-blue-200 dark:text-blue-800/20 opacity-50 group-hover:scale-110 transition-transform duration-700">
               <Snowflake size={200} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
                <Snowflake size={32} />
                <h3 className="text-2xl font-bold serif">Shang Han</h3>
              </div>
              <p className="text-blue-800 dark:text-blue-200 font-bold text-lg mb-2">Daño por Frío</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                El frío bloquea los poros completamente. El Yang queda atrapado dentro.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 mb-6">
                <li>❄️ Sin sudoración (Anhidrosis)</li>
                <li>❄️ Pulso Tenso</li>
                <li>❄️ Dolores corporales severos</li>
              </ul>
            </div>
          </div>

          {/* Zhong Feng Side */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800/50 shadow-lg hover:shadow-2xl hover:bg-yellow-100 dark:hover:bg-yellow-900/10 transition-all group relative overflow-hidden">
             <div className="absolute -right-10 -bottom-10 text-yellow-200 dark:text-yellow-600/20 opacity-50 group-hover:scale-110 transition-transform duration-700">
               <Wind size={200} />
            </div>
             <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 text-yellow-600 dark:text-yellow-500">
                <Wind size={32} />
                <h3 className="text-2xl font-bold serif">Zhong Feng</h3>
              </div>
              <p className="text-yellow-800 dark:text-yellow-200 font-bold text-lg mb-2">Ataque de Viento</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                El viento debilita la defensa. Los poros se quedan "entreabiertos".
              </p>
               <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 mb-6">
                <li>🍃 Sudoración espontánea</li>
                <li>🍃 Pulso Flotante y Moderado</li>
                <li>🍃 Aversión al viento</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-8 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md">
        <h4 className="font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
            <ArrowRightCircle size={20}/> Principio Terapéutico
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="text-slate-700 dark:text-slate-300">
                <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">Para Shang Han:</span>
                Usar picantes y tibios para <strong>abrir</strong> fuertemente los poros (Diaforesis) y liberar el frío atrapado. (Ej: Ma Huang Tang).
            </div>
             <div className="text-slate-700 dark:text-slate-300">
                <span className="font-bold text-yellow-600 dark:text-yellow-500 block mb-1">Para Zhong Feng:</span>
                Usar picantes y dulces para <strong>armonizar</strong> el Wei Qi y los fluidos nutricios (Ying), deteniendo la fuga de sudor. (Ej: Guizhi Tang).
            </div>
        </div>
      </div>
    </div>
  );
};