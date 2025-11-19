import React, { useState } from 'react';
import { Shield, Sun, Wind } from 'lucide-react';
import { Modal } from '../Modal';
import { Button } from '../Button';

export const IntroSlide: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col items-center justify-center max-w-4xl mx-auto p-6">
      <div className="text-center mb-10 animate-in slide-in-from-bottom-10 duration-700 fade-in">
        <div className="inline-block p-3 rounded-full bg-red-100 mb-4">
          <span className="text-4xl">☀️</span>
        </div>
        <h2 className="text-4xl font-bold text-stone-800 mb-4 serif">
          Taiyang: El Gran Yang
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          La conformación más externa y superficial de las seis conformaciones. 
          Taiyang es la primera línea de defensa de tu cuerpo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Interactive Card 1 */}
        <div 
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border-b-4 border-red-800 group"
          onClick={() => setActiveModal('defense')}
        >
          <div className="flex justify-center mb-4 text-red-700 group-hover:scale-110 transition-transform">
            <Shield size={48} />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-stone-800">Defensa</h3>
          <p className="text-center text-sm text-stone-500">La muralla del cuerpo</p>
          <div className="mt-4 text-center">
            <span className="text-xs font-bold text-red-700 uppercase tracking-widest border border-red-200 px-2 py-1 rounded">Click para ver</span>
          </div>
        </div>

        {/* Interactive Card 2 */}
        <div 
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border-b-4 border-orange-600 group"
          onClick={() => setActiveModal('temperature')}
        >
          <div className="flex justify-center mb-4 text-orange-600 group-hover:scale-110 transition-transform">
            <Sun size={48} />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-stone-800">Calor y Yang</h3>
          <p className="text-center text-sm text-stone-500">Control de temperatura</p>
           <div className="mt-4 text-center">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest border border-orange-200 px-2 py-1 rounded">Click para ver</span>
          </div>
        </div>

         {/* Interactive Card 3 */}
        <div 
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border-b-4 border-blue-600 group"
          onClick={() => setActiveModal('water')}
        >
          <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
            <Wind size={48} />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-stone-800">Apertura</h3>
          <p className="text-center text-sm text-stone-500">Gestión de poros y fluidos</p>
           <div className="mt-4 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest border border-blue-200 px-2 py-1 rounded">Click para ver</span>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'defense'} 
        onClose={() => setActiveModal(null)}
        title="La Primera Línea de Defensa"
      >
        <p className="mb-4">
          Taiyang actúa como la frontera del cuerpo. Al igual que una muralla protege una ciudad, Taiyang protege al organismo de las influencias externas perversas (Xie Qi) como el Viento y el Frío.
        </p>
        <p className="font-bold text-stone-800">Concepto Clave:</p>
        <p>
          "Es fácil esquivar una lanza arrojada al aire libre, pero difícil esquivar una flecha disparada desde un escondite". Taiyang protege especialmente la espalda, el "Norte" del cuerpo, por donde suelen atacar los "vientos ladrones".
        </p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'temperature'} 
        onClose={() => setActiveModal(null)}
        title="Regulación Térmica (Yang)"
      >
        <p className="mb-4">
          Taiyang se relaciona con el <strong>"Yang Supremo"</strong>. Su función es mantener la temperatura interna constante mediante la circulación de sangre caliente hacia la periferia.
        </p>
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 italic text-stone-700">
          "El Yang Qi, donde es magnífico, lo llamamos Taiyang." - Wang Bing
        </div>
      </Modal>

      <Modal 
        isOpen={activeModal === 'water'} 
        onClose={() => setActiveModal(null)}
        title="Control de Apertura (Poros)"
      >
        <p className="mb-4">
          Taiyang gobierna la apertura y cierre de los poros (el intersticio). Esta es la mecánica principal para regular la temperatura y expulsar patógenos.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Abrir:</strong> Para sudar y refrescar (o expulsar viento).</li>
          <li><strong>Cerrar:</strong> Para conservar calor y evitar que entre el frío profundo.</li>
        </ul>
      </Modal>
    </div>
  );
};
