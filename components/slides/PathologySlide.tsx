import React, { useState } from 'react';
import { Snowflake, Wind, ArrowRightCircle } from 'lucide-react';

export const PathologySlide: React.FC = () => {
  const [view, setView] = useState<'comparison' | 'detail'>('comparison');

  return (
    <div className="h-full flex flex-col p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-stone-800 mb-2 serif text-center">
        Dos Caras de la Patología Taiyang
      </h2>
      <p className="text-center text-stone-500 mb-8">Exceso (Frío) vs Deficiencia (Viento)</p>

      {view === 'comparison' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 items-center">
          {/* Shang Han Side */}
          <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-blue-100 opacity-50 group-hover:scale-110 transition-transform duration-700">
               <Snowflake size={200} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 text-blue-800">
                <Snowflake size={32} />
                <h3 className="text-2xl font-bold serif">Shang Han</h3>
              </div>
              <p className="text-blue-900 font-bold text-lg mb-2">Daño por Frío</p>
              <p className="text-stone-600 mb-6">
                El frío bloquea los poros completamente. El Yang queda atrapado dentro.
              </p>
              <ul className="space-y-2 text-sm text-stone-700 mb-6">
                <li>❄️ Sin sudoración (Anhidrosis)</li>
                <li>❄️ Pulso Tenso</li>
                <li>❄️ Dolores corporales severos</li>
              </ul>
            </div>
          </div>

          {/* Zhong Feng Side */}
          <div className="bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-200 shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
             <div className="absolute -right-10 -bottom-10 text-yellow-100 opacity-50 group-hover:scale-110 transition-transform duration-700">
               <Wind size={200} />
            </div>
             <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 text-yellow-700">
                <Wind size={32} />
                <h3 className="text-2xl font-bold serif">Zhong Feng</h3>
              </div>
              <p className="text-yellow-800 font-bold text-lg mb-2">Ataque de Viento</p>
              <p className="text-stone-600 mb-6">
                El viento debilita la defensa. Los poros se quedan "entreabiertos".
              </p>
               <ul className="space-y-2 text-sm text-stone-700 mb-6">
                <li>🍃 Sudoración espontánea</li>
                <li>🍃 Pulso Flotante y Moderado</li>
                <li>🍃 Aversión al viento</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-8 bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
        <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
            <ArrowRightCircle size={20}/> Principio Terapéutico
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
                <span className="font-bold text-blue-800 block mb-1">Para Shang Han:</span>
                Usar picantes y tibios para <strong>abrir</strong> fuertemente los poros (Diaforesis) y liberar el frío atrapado. (Ej: Ma Huang Tang).
            </div>
             <div>
                <span className="font-bold text-yellow-800 block mb-1">Para Zhong Feng:</span>
                Usar picantes y dulces para <strong>armonizar</strong> el Wei Qi y los fluidos nutricios (Ying), deteniendo la fuga de sudor. (Ej: Guizhi Tang).
            </div>
        </div>
      </div>
    </div>
  );
};
