import React, { useState } from 'react';
import { Waves, CircleDot, Database } from 'lucide-react';

export const YangmingOrgansSlide: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<'family' | 'rivers' | 'connection'>('family');

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 serif text-center">
        Canales y Órganos: El Sistema Digestivo
      </h2>

      <div className="flex gap-4 mb-8 justify-center flex-wrap">
        <button 
          onClick={() => setSelectedTopic('family')}
          className={`px-6 py-2 rounded-full font-bold transition-all ${selectedTopic === 'family' ? 'bg-red-600 text-white shadow-lg shadow-red-200 dark:shadow-red-900/50' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-transparent'}`}
        >
          La Familia del Estómago
        </button>
        <button 
          onClick={() => setSelectedTopic('rivers')}
          className={`px-6 py-2 rounded-full font-bold transition-all ${selectedTopic === 'rivers' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/50' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-transparent'}`}
        >
          Ríos y Mares
        </button>
        <button 
          onClick={() => setSelectedTopic('connection')}
          className={`px-6 py-2 rounded-full font-bold transition-all ${selectedTopic === 'connection' ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/50' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-transparent'}`}
        >
          Conexión Cerebral
        </button>
      </div>

      <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 relative overflow-hidden min-h-[400px]">
        
        {/* Decorative Backgrounds */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full pointer-events-none opacity-10 dark:opacity-20">
           {selectedTopic === 'family' && (
                <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover mask-image-linear grayscale" alt="Campo de trigo" />
           )}
           {selectedTopic === 'rivers' && (
                <img src="https://images.unsplash.com/photo-1451906278231-17b8ff9a8880?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover mask-image-linear" alt="Río" />
           )}
           {selectedTopic === 'connection' && (
                <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover mask-image-linear" alt="Conexiones neuronales" />
           )}
        </div>

        {selectedTopic === 'family' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col relative z-10">
            <div className="flex items-start gap-6">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full text-red-600 dark:text-red-400 shrink-0 border border-red-200 dark:border-red-900/50">
                    <Database size={40} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Wei Jia (胃家): La Familia del Estómago</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                        "En enfermedad Yangming, el dominio del estómago es exceso".
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 dark:bg-slate-900/80 p-4 rounded-lg border-l-4 border-slate-400 dark:border-slate-500 backdrop-blur-sm shadow-sm">
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">El Jefe</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">El Estómago. Recibe y descompone.</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900/80 p-4 rounded-lg border-l-4 border-slate-400 dark:border-slate-500 backdrop-blur-sm shadow-sm">
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Los Miembros</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Los 6 Intestinos (Fu). Incluye Intestino Grueso (transporte/heces).</p>
                        </div>
                    </div>
                    <p className="mt-6 text-slate-500 italic">
                        Si el estómago y los intestinos están llenos al mismo tiempo, se rompe el ritmo fisiológico, generando enfermedad.
                    </p>
                </div>
            </div>
          </div>
        )}

        {selectedTopic === 'rivers' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col relative z-10">
             <div className="flex items-start gap-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full text-blue-600 dark:text-blue-400 shrink-0 border border-blue-200 dark:border-blue-900/50">
                    <Waves size={40} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Metáfora Hidráulica</h3>
                    <blockquote className="text-xl text-slate-700 dark:text-slate-300 font-serif italic border-l-4 border-blue-500 dark:border-blue-600 pl-4 mb-6 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-r">
                        "Los seis canales son los grandes ríos, y los intestinos y el estómago son los mares."
                    </blockquote>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Esta analogía explica por qué los métodos de <strong>purgación</strong> (hacer descender) son tan efectivos en Yangming.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>Las patologías de todo el cuerpo (ríos) pueden drenar hacia el estómago/intestinos (mar).</li>
                        <li>Desde allí, pueden ser expulsadas del cuerpo (heces).</li>
                        <li>Si no hay "flujo" hacia el mar, hay estancamiento.</li>
                    </ul>
                </div>
            </div>
          </div>
        )}

        {selectedTopic === 'connection' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col relative z-10">
             <div className="flex items-start gap-6">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full text-purple-600 dark:text-purple-400 shrink-0 border border-purple-200 dark:border-purple-900/50">
                    <CircleDot size={40} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Eje Intestino - Cerebro</h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                        Hay una conexión profunda entre Yangming y el estado mental.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl mb-6 backdrop-blur-sm border border-purple-100 dark:border-purple-900/30">
                        <p className="font-medium text-purple-700 dark:text-purple-300 mb-2">Medicina Clásica:</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                           El Estómago y los Intestinos son "Mares". El Cerebro es el "Mar de la Médula". Hay una resonancia entre ellos.
                        </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                         <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Implicación Clínica:</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Muchos trastornos mentales (delirio, manía, insomnio severo) se tratan purgando el Yangming (Estómago/Intestinos).
                            <br/>
                            <em>"Cuando el calor perturba el Shen ming, el Shen mismo se oscurece."</em>
                        </p>
                    </div>
                </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};