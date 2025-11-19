import React, { useState } from 'react';
import { Scale, Waves, Info } from 'lucide-react';
import { Modal } from '../Modal';

export const ShaoyangOrgansSlide: React.FC = () => {
  const [details, setDetails] = useState<'gb' | 'sj' | null>(null);

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 serif text-center">
        Órganos: Vesícula Biliar y San Jiao
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        
        {/* Gallbladder Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center hover:bg-slate-50 dark:hover:bg-slate-750 transition-all group relative overflow-hidden">
            {/* Background */}
            <img src="https://images.unsplash.com/photo-1531169509526-f8f1f7220df0?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none" alt="Balance texture" />
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform border border-emerald-200 dark:border-emerald-900/50">
                    <Scale size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Vesícula Biliar (Dan)</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                    "El Oficial de la Rectitud Centrada"
                </p>
                <ul className="text-left text-slate-600 dark:text-slate-300 space-y-3 mb-6 flex-1 w-full px-4">
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-emerald-500 rounded-full" />
                        <span>Órgano "Extraordinario": Es hueco (Yang) pero almacena bilis (Yin).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-emerald-500 rounded-full" />
                        <span>Emite decisiones y juicios.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-emerald-500 rounded-full" />
                        <span>Ayuda a Yangming a descender (digestión).</span>
                    </li>
                </ul>
                <button 
                    onClick={() => setDetails('gb')}
                    className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors flex items-center gap-2 text-sm font-bold shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30"
                >
                    <Info size={16} /> Más Detalles
                </button>
            </div>
        </div>

        {/* San Jiao Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center hover:bg-slate-50 dark:hover:bg-slate-750 transition-all group relative overflow-hidden">
             {/* Background */}
             <img src="https://images.unsplash.com/photo-1463194537334-39407847891c?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none" alt="Water texture" />

             <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform border border-orange-200 dark:border-orange-900/50">
                    <Waves size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">San Jiao (Triple Calentador)</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                    "El Oficial de la Irrigación"
                </p>
                <ul className="text-left text-slate-600 dark:text-slate-300 space-y-3 mb-6 flex-1 w-full px-4">
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-orange-500 rounded-full" />
                        <span>Los "espacios intermedios" (fascias, intersticios).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-orange-500 rounded-full" />
                        <span>Vía del Agua y del Fuego Ministerial.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 bg-orange-500 rounded-full" />
                        <span>Conecta los 3 Jiaos (Superior, Medio, Inferior).</span>
                    </li>
                </ul>
                <button 
                    onClick={() => setDetails('sj')}
                    className="bg-orange-600 dark:bg-orange-700 text-white px-6 py-2 rounded-full hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors flex items-center gap-2 text-sm font-bold shadow-lg shadow-orange-200 dark:shadow-orange-900/30"
                >
                    <Info size={16} /> Más Detalles
                </button>
            </div>
        </div>

      </div>

      <Modal 
        isOpen={details === 'gb'} 
        onClose={() => setDetails(null)} 
        title="Vesícula Biliar: El Juez Imparcial"
      >
        <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
            <img 
            src="https://images.unsplash.com/photo-1507835661088-ac1e219533af?auto=format&fit=crop&w=800&q=80" 
            alt="Piedras en equilibrio" 
            className="w-full h-full object-cover"
            />
        </div>
        <p className="mb-4">
            El texto clásico dice: <em>"La Vesícula Biliar mantiene el cargo de la rectitud centrada. Las decisiones y los juicios se originan de ella".</em>
        </p>
        <p className="mb-4">
            A diferencia de otros órganos Fu (que transportan pero no almacenan), la VB almacena una sustancia pura (bilis). Si la VB está sana, la persona es "brillante", decisiva e imparcial. Si está afectada, hay indecisión, miedo o juicios sesgados.
        </p>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded text-sm text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/30">
            <strong>Dato Curioso:</strong> El carácter chino para "Valiente" (Da Dan) literalmente significa "Gran Vesícula Biliar".
        </div>
      </Modal>

      <Modal 
        isOpen={details === 'sj'} 
        onClose={() => setDetails(null)} 
        title="San Jiao: Las Vías del Agua"
      >
        <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
            <img 
            src="https://images.unsplash.com/photo-1451906278231-17b8ff9a8880?auto=format&fit=crop&w=800&q=80" 
            alt="Canales de agua" 
            className="w-full h-full object-cover"
            />
        </div>
        <p className="mb-4">
            El San Jiao es difícil de definir anatómicamente porque <em>"tiene nombre pero no forma"</em>.
        </p>
        <p className="mb-4">
            Es el sistema de espacios vacíos por donde circulan los líquidos y el Qi original (Yuan Qi). Su función es "abrir los canales" y asegurar que el agua no se estanque.
        </p>
        <p className="mb-4">
            Está movilizado por el <strong>Fuego Ministerial</strong>. Sin este fuego, el agua se enfría y se estanca (humedad/flema).
        </p>
      </Modal>

    </div>
  );
};