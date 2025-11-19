import React, { useState } from 'react';
import { Droplets, Flame } from 'lucide-react';

export const OrgansSlide: React.FC = () => {
  const [selectedOrgan, setSelectedOrgan] = useState<'bladder' | 'smallIntestine'>('bladder');

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 serif text-center">
        Los Órganos de Taiyang
      </h2>

      <div className="flex-1 flex flex-col md:flex-row gap-8">
        {/* Sidebar Selection */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <button
            onClick={() => setSelectedOrgan('bladder')}
            className={`p-6 rounded-xl text-left transition-all border flex items-center gap-4 overflow-hidden relative group
              ${selectedOrgan === 'bladder' 
                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 shadow-md shadow-blue-100 dark:shadow-blue-900/20' 
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-400/50 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-500 dark:text-slate-400'}
            `}
          >
            <img 
                src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=400&q=80" 
                alt="Agua" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${selectedOrgan === 'bladder' ? 'opacity-10 dark:opacity-20' : 'opacity-0 dark:opacity-5 group-hover:opacity-10'}`}
            />
            <div className="relative z-10 flex items-center gap-4">
                <div className={`p-3 rounded-full ${selectedOrgan === 'bladder' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                <Droplets size={24} />
                </div>
                <div>
                <h3 className={`font-bold text-lg ${selectedOrgan === 'bladder' ? 'text-blue-700 dark:text-blue-200' : 'text-slate-700 dark:text-slate-300'}`}>Vejiga</h3>
                <p className="text-xs text-slate-500">Taiyang del Pie</p>
                </div>
            </div>
          </button>

          <button
            onClick={() => setSelectedOrgan('smallIntestine')}
            className={`p-6 rounded-xl text-left transition-all border flex items-center gap-4 overflow-hidden relative group
              ${selectedOrgan === 'smallIntestine' 
                ? 'bg-red-50 dark:bg-red-900/20 border-red-500 shadow-md shadow-red-100 dark:shadow-red-900/20' 
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-red-400/50 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-500 dark:text-slate-400'}
            `}
          >
             <img 
                src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=400&q=80" 
                alt="Fuego" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${selectedOrgan === 'smallIntestine' ? 'opacity-10 dark:opacity-20' : 'opacity-0 dark:opacity-5 group-hover:opacity-10'}`}
            />
             <div className="relative z-10 flex items-center gap-4">
                <div className={`p-3 rounded-full ${selectedOrgan === 'smallIntestine' ? 'bg-red-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                <Flame size={24} />
                </div>
                <div>
                <h3 className={`font-bold text-lg ${selectedOrgan === 'smallIntestine' ? 'text-red-700 dark:text-red-200' : 'text-slate-700 dark:text-slate-300'}`}>Intestino Delgado</h3>
                <p className="text-xs text-slate-500">Taiyang de la Mano</p>
                </div>
            </div>
          </button>
        </div>

        {/* Content Area */}
        <div className="md:w-2/3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 relative overflow-hidden min-h-[400px]">
          
          {selectedOrgan === 'bladder' && (
            <div className="animate-in fade-in slide-in-from-right-5 duration-500 space-y-5 relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-bold uppercase border border-blue-200 dark:border-blue-800">Agua Fría</span>
                <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-bold uppercase border border-slate-200 dark:border-slate-600">Norte</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white serif">La Vejiga (Zu Taiyang)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Es el canal más largo del cuerpo (67 puntos). Comienza en el ojo, sube por la cabeza y recorre <strong>toda la espalda</strong>.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Función Clave: Almacén del Agua</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                  "La Vejiga es el rectificador regional. Los líquidos se almacenan en ella y gracias a la transformación del Qi se generan los líquidos corporales." (Su Wen 8)
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                La vejiga recibe el agua que desciende, pero gracias a Taiyang, tiene la capacidad de <strong>evaporarla</strong> de nuevo hacia arriba, creando una capa protectora de "vapor" o fluidos defensivos en la superficie.
              </p>
            </div>
          )}

          {selectedOrgan === 'smallIntestine' && (
            <div className="animate-in fade-in slide-in-from-right-5 duration-500 space-y-5 relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-bold uppercase border border-red-200 dark:border-red-800">Fuego</span>
                <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-bold uppercase border border-slate-200 dark:border-slate-600">Separación</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white serif">Intestino Delgado (Shou Taiyang)</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A diferencia de la Vejiga (Agua), el Intestino Delgado se asocia al <strong>Fuego</strong>. Trabaja en el Jiao Inferior generando el calor necesario para procesos metabólicos.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">Función Clave: Separar lo Puro de lo Impuro</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                  "El Intestino Delgado tiene el rol de aceptar. La transformación de las cosas depende de él."
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Recibe (Shou Sheng) los residuos del estómago. Actúa como una fuente de calor debajo del estómago ("la olla"), facilitando la digestión y separando los fluidos claros (para reciclar) de los turbios (para excretar).
              </p>
            </div>
          )}

          {/* Background Decorative Elements */}
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none w-64 h-64">
             {selectedOrgan === 'bladder' 
                ? <img src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover rounded-tl-full blur-sm" alt="decoration" />
                : <img src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover rounded-tl-full blur-sm" alt="decoration" />
             }
          </div>
        </div>
      </div>
    </div>
  );
};