import React, { useState } from 'react';
import { Eye, CloudRain, Frown, XCircle, AlertOctagon } from 'lucide-react';
import { Modal } from '../Modal';

export const ShaoyangPathologySlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'location' | 'symptoms' | 'treatment'>('location');

  return (
    <div className="h-full flex flex-col p-4 md:p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 serif text-center">Patología de Shaoyang</h2>
      <div className="flex justify-center mb-8">
        <div className="flex bg-white dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700">
            <button 
                onClick={() => setActiveTab('location')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'location' ? 'bg-slate-800 dark:bg-slate-600 shadow text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
                Localización
            </button>
            <button 
                onClick={() => setActiveTab('symptoms')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'symptoms' ? 'bg-slate-800 dark:bg-slate-600 shadow text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
                Síntomas (Línea 263)
            </button>
            <button 
                onClick={() => setActiveTab('treatment')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'treatment' ? 'bg-slate-800 dark:bg-slate-600 shadow text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
                Tratamiento
            </button>
        </div>
      </div>

      <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
        
        {activeTab === 'location' && (
            <div className="animate-in fade-in duration-300 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-80 bg-slate-50 dark:bg-slate-900 rounded-3xl border-4 border-slate-300 dark:border-slate-600 flex items-center justify-center shadow-inner overflow-hidden group">
                        {/* Fascia / Tissue Background Image */}
                        <img 
                          src="https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=600&q=80" 
                          alt="Tejido Fascia" 
                          className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30 pointer-events-none mix-blend-multiply dark:mix-blend-overlay scale-150 group-hover:scale-125 transition-transform duration-1000"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/50 dark:via-yellow-900/20 to-transparent w-full h-full z-10" />
                        
                        <div className="relative z-20 text-center p-4">
                          <span className="font-bold text-slate-800 dark:text-white text-lg drop-shadow-md">
                              Mitad Interno<br/>Mitad Externo
                          </span>
                          <br/><br/>
                          <span className="text-slate-600 dark:text-slate-300 font-medium bg-white/50 dark:bg-black/50 px-2 py-1 rounded">
                            (Ban Biao Ban Li)
                          </span>
                        </div>
                        
                        {/* Ribs visualization overlay */}
                        <div className="absolute top-1/4 w-full h-24 border-y-2 border-dashed border-slate-400/50 dark:border-slate-400/50 opacity-50 z-10" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">El Patógeno Atrapado</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        El factor patógeno ha superado la barrera de Taiyang, pero no ha penetrado completamente a Yangming (interior). Se queda luchando en la zona costal (hipocondrios), atrapado en los tejidos conectivos y las membranas (San Jiao).
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border-l-4 border-slate-400 dark:border-slate-500 shadow-sm">
                        <strong className="text-slate-800 dark:text-slate-200">Consecuencia:</strong> <span className="text-slate-600 dark:text-slate-400">El organismo no puede expulsarlo sudando (está muy profundo) ni purgando (no está en intestinos).</span>
                    </div>
                </div>
            </div>
        )}

        {activeTab === 'symptoms' && (
            <div className="animate-in fade-in duration-300 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl flex flex-col items-center text-center border-t-4 border-red-500 dark:border-red-600 shadow-lg">
                    <Frown size={48} className="text-red-500 mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Sabor Amargo</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">El Fuego de la VB asciende a la boca.</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl flex flex-col items-center text-center border-t-4 border-orange-500 dark:border-orange-600 shadow-lg">
                    <CloudRain size={48} className="text-orange-500 mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Garganta Seca</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">El Fuego consume los fluidos en la vía superior.</p>
                </div>
                 <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl flex flex-col items-center text-center border-t-4 border-yellow-500 dark:border-yellow-600 shadow-lg">
                    <Eye size={48} className="text-yellow-500 mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Visión Borrosa</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">La Madera (Hígado/VB) se abre en los ojos. El calor perturba la visión.</p>
                </div>
            </div>
        )}

        {activeTab === 'treatment' && (
            <div className="animate-in fade-in duration-300 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">Los 3 Métodos Prohibidos</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="flex flex-col items-center text-slate-500">
                        <XCircle size={40} className="text-red-600 mb-2" />
                        <span className="font-bold line-through decoration-red-600">SUDORACIÓN</span>
                    </div>
                    <div className="flex flex-col items-center text-slate-500">
                         <XCircle size={40} className="text-red-600 mb-2" />
                        <span className="font-bold line-through decoration-red-600">VÓMITO</span>
                    </div>
                    <div className="flex flex-col items-center text-slate-500">
                         <XCircle size={40} className="text-red-600 mb-2" />
                        <span className="font-bold line-through decoration-red-600">PURGACIÓN</span>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 text-center shadow-lg">
                    <h4 className="text-blue-700 dark:text-blue-300 font-bold text-lg mb-2 flex items-center justify-center gap-2">
                        <AlertOctagon /> La Solución: Armonizar
                    </h4>
                    <p className="text-blue-800 dark:text-blue-200">
                        Se debe usar la fórmula <strong>Xiao Chai Hu Tang</strong> (Decocción Menor de Bupleurum) para pivotar el mecanismo y liberar el patógeno.
                    </p>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};