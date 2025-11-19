import React, { useState } from 'react';
import { Droplets, Flame, ArrowRight } from 'lucide-react';

export const OrgansSlide: React.FC = () => {
  const [selectedOrgan, setSelectedOrgan] = useState<'bladder' | 'smallIntestine'>('bladder');

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-stone-800 mb-6 serif text-center">
        Los Órganos de Taiyang
      </h2>

      <div className="flex-1 flex flex-col md:flex-row gap-8">
        {/* Sidebar Selection */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <button
            onClick={() => setSelectedOrgan('bladder')}
            className={`p-6 rounded-xl text-left transition-all border-2 flex items-center gap-4
              ${selectedOrgan === 'bladder' 
                ? 'bg-blue-50 border-blue-500 shadow-md' 
                : 'bg-white border-stone-200 hover:border-blue-200 text-stone-500 opacity-70 hover:opacity-100'}
            `}
          >
            <div className={`p-3 rounded-full ${selectedOrgan === 'bladder' ? 'bg-blue-500 text-white' : 'bg-stone-100 text-stone-400'}`}>
              <Droplets size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Vejiga</h3>
              <p className="text-xs">Taiyang del Pie</p>
            </div>
          </button>

          <button
            onClick={() => setSelectedOrgan('smallIntestine')}
            className={`p-6 rounded-xl text-left transition-all border-2 flex items-center gap-4
              ${selectedOrgan === 'smallIntestine' 
                ? 'bg-red-50 border-red-500 shadow-md' 
                : 'bg-white border-stone-200 hover:border-red-200 text-stone-500 opacity-70 hover:opacity-100'}
            `}
          >
             <div className={`p-3 rounded-full ${selectedOrgan === 'smallIntestine' ? 'bg-red-500 text-white' : 'bg-stone-100 text-stone-400'}`}>
              <Flame size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Intestino Delgado</h3>
              <p className="text-xs">Taiyang de la Mano</p>
            </div>
          </button>
        </div>

        {/* Content Area */}
        <div className="md:w-2/3 bg-white rounded-2xl shadow-lg p-8 border border-stone-100 relative overflow-hidden min-h-[400px]">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
             {selectedOrgan === 'bladder' ? <Droplets size={300} /> : <Flame size={300} />}
          </div>

          {selectedOrgan === 'bladder' && (
            <div className="animate-in fade-in slide-in-from-right-5 duration-500 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase">Agua Fría</span>
                <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm font-bold uppercase">Norte</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 serif">La Vejiga (Zu Taiyang)</h3>
              <p className="text-stone-600 leading-relaxed">
                Es el canal más largo del cuerpo (67 puntos). Comienza en el ojo, sube por la cabeza y recorre <strong>toda la espalda</strong>.
              </p>
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-2">Función Clave: Almacén del Agua</h4>
                <p className="text-sm text-stone-700 italic">
                  "La Vejiga es el rectificador regional. Los líquidos se almacenan en ella y gracias a la transformación del Qi se generan los líquidos corporales." (Su Wen 8)
                </p>
              </div>
              <p className="text-stone-600">
                La vejiga recibe el agua que desciende, pero gracias a Taiyang, tiene la capacidad de <strong>evaporarla</strong> de nuevo hacia arriba, creando una capa protectora de "vapor" o fluidos defensivos en la superficie.
              </p>
            </div>
          )}

          {selectedOrgan === 'smallIntestine' && (
            <div className="animate-in fade-in slide-in-from-right-5 duration-500 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold uppercase">Fuego</span>
                <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm font-bold uppercase">Separación</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 serif">Intestino Delgado (Shou Taiyang)</h3>
              <p className="text-stone-600 leading-relaxed">
                A diferencia de la Vejiga (Agua), el Intestino Delgado se asocia al <strong>Fuego</strong>. Trabaja en el Jiao Inferior generando el calor necesario para procesos metabólicos.
              </p>
              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-red-900 mb-2">Función Clave: Separar lo Puro de lo Impuro</h4>
                <p className="text-sm text-stone-700 italic">
                  "El Intestino Delgado tiene el rol de aceptar. La transformación de las cosas depende de él."
                </p>
              </div>
              <p className="text-stone-600">
                Recibe (Shou Sheng) los residuos del estómago. Actúa como una fuente de calor debajo del estómago ("la olla"), facilitando la digestión y separando los fluidos claros (para reciclar) de los turbios (para excretar).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
