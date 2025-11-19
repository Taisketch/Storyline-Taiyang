import React, { useState } from 'react';
import { Plus, Thermometer, Activity, User } from 'lucide-react';
import { Modal } from '../Modal';

export const SymptomsSlide: React.FC = () => {
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  const hotspots = [
    { id: 'head', x: 50, y: 10, label: 'Cabeza y Nuca' },
    { id: 'pulse', x: 80, y: 40, label: 'Pulso' },
    { id: 'skin', x: 30, y: 30, label: 'Piel/Aversión' },
  ];

  return (
    <div className="h-full flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold text-stone-800 mb-2 serif">El Diagnóstico de Taiyang</h2>
      <p className="text-stone-500 mb-8">Explora los síntomas clave haciendo clic en los marcadores (+).</p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
        
        {/* Interactive Figure representation */}
        <div className="relative h-[500px] w-[300px] bg-stone-200 rounded-3xl shadow-inner border-4 border-white">
            {/* Silhouette abstract */}
            <div className="absolute inset-0 flex items-center justify-center text-stone-300">
                <User size={200} />
            </div>

            {hotspots.map((spot) => (
              <button
                key={spot.id}
                style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                className="absolute z-10 w-10 h-10 bg-red-600 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-red-700 hover:scale-110 transition-all animate-bounce"
                onClick={() => setOpenPopup(spot.id)}
                aria-label={`Ver detalles de ${spot.label}`}
              >
                <Plus size={20} />
              </button>
            ))}
        </div>

        {/* Context Panel */}
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-md border-l-4 border-stone-800">
            <h3 className="text-lg font-bold mb-3 text-stone-800 uppercase tracking-wide">La Tríada de Diagnóstico</h3>
            <p className="text-stone-600 text-sm mb-4">
                Según la Línea 1 del Shan Han Lun, la enfermedad de Taiyang se confirma idealmente con tres elementos, aunque no siempre estén todos presentes simultáneamente.
            </p>
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-700">
                    <Activity size={18} className="text-red-600" /> <span>Pulso Flotante</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                    <User size={18} className="text-red-600" /> <span>Rigidez de Cabeza/Nuca</span>
                </div>
                 <div className="flex items-center gap-2 text-stone-700">
                    <Thermometer size={18} className="text-red-600" /> <span>Aversión al Frío</span>
                </div>
            </div>
        </div>
      </div>

      {/* Popups */}
      <Modal isOpen={openPopup === 'head'} onClose={() => setOpenPopup(null)} title="Rigidez y Dolor de Cabeza">
        <p className="mb-4">
          <strong>"Taiyang gobierna la cabeza y la nuca".</strong>
        </p>
        <p className="mb-2">
          El canal de la Vejiga asciende por la espalda hasta la nuca y la cabeza. Cuando el frío ataca, causa constricción muscular en esta zona.
        </p>
        <p>
          Esto provoca rigidez, tortícolis y dolor occipital. Es el punto de unión de los "ríos" de energía yang.
        </p>
      </Modal>

      <Modal isOpen={openPopup === 'pulse'} onClose={() => setOpenPopup(null)} title="Pulso Flotante (Fu)">
        <p className="mb-4">
          <strong>Metáfora: "Madera a la deriva en el agua".</strong>
        </p>
        <p className="mb-2">
          El pulso se siente con solo tocar la piel. Indica que el <strong>Yang Qi</strong> está luchando en la superficie contra el patógeno externo.
        </p>
        <p>
          No indica debilidad, sino la <em>ubicación</em> de la lucha: el Exterior.
        </p>
      </Modal>

      <Modal isOpen={openPopup === 'skin'} onClose={() => setOpenPopup(null)} title="Aversión al Frío">
        <p className="mb-4">
          <strong>Un síntoma subjetivo crucial.</strong>
        </p>
        <p className="mb-2">
          No significa que la temperatura ambiental sea baja, sino que el paciente <em>siente</em> un rechazo visceral al frío o al viento. Incluso si tiene fiebre, querrá taparse.
        </p>
        <p className="text-sm bg-stone-100 p-2 rounded italic">
          "Si hay aversión al frío, entonces es un síndrome exterior".
        </p>
      </Modal>
    </div>
  );
};
