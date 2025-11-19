import React, { useState } from 'react';
import { Shield, Sun, Wind } from 'lucide-react';
import { Modal } from '../Modal';

export const IntroSlide: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col items-center justify-start max-w-5xl mx-auto p-6 overflow-y-auto">
      
      {/* Hero Image Area */}
      <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 shadow-xl dark:shadow-2xl shadow-slate-300/50 dark:shadow-black/50 relative shrink-0 group border border-slate-200 dark:border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" 
          alt="Amanecer en las montañas" 
          className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent dark:from-slate-950 dark:via-slate-900/50 dark:to-transparent flex items-end p-8">
           <div>
              <div className="inline-block p-2 rounded-full bg-red-600/20 backdrop-blur-md border border-red-500/30 mb-2 text-white">
                <span className="text-2xl">☀️</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white serif shadow-sm">
                Taiyang: El Gran Yang
              </h2>
              <p className="text-slate-100 dark:text-slate-300 text-lg font-light">
                La primera barrera. La defensa exterior.
              </p>
           </div>
        </div>
      </div>

      <div className="text-center mb-10 animate-in slide-in-from-bottom-4 duration-700 fade-in">
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          La conformación más externa y superficial de las seis conformaciones. 
          Taiyang es la primera línea de defensa de tu cuerpo, gobernando la superficie y la regulación térmica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
        {/* Interactive Card 1 */}
        <div 
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-750 transition-all cursor-pointer border-b-4 border-red-600 dark:border-red-700 group ring-1 ring-slate-200 dark:ring-white/5"
          onClick={() => setActiveModal('defense')}
        >
          <div className="flex justify-center mb-4 text-red-600 dark:text-red-500 group-hover:scale-110 transition-transform">
            <Shield size={48} />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-slate-800 dark:text-slate-100">Defensa</h3>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">La muralla del cuerpo</p>
          <div className="mt-4 text-center">
            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 px-2 py-1 rounded">Click para ver</span>
          </div>
        </div>

        {/* Interactive Card 2 */}
        <div 
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-750 transition-all cursor-pointer border-b-4 border-orange-500 dark:border-orange-600 group ring-1 ring-slate-200 dark:ring-white/5"
          onClick={() => setActiveModal('temperature')}
        >
          <div className="flex justify-center mb-4 text-orange-500 group-hover:scale-110 transition-transform">
            <Sun size={48} />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-slate-800 dark:text-slate-100">Calor y Yang</h3>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">Control de temperatura</p>
           <div className="mt-4 text-center">
            <span className="text-xs font-bold text-orange-600 dark:text-orange-500 uppercase tracking-widest border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-900/10 px-2 py-1 rounded">Click para ver</span>
          </div>
        </div>

         {/* Interactive Card 3 */}
        <div 
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-50 dark:hover:bg-slate-750 transition-all cursor-pointer border-b-4 border-blue-500 dark:border-blue-600 group ring-1 ring-slate-200 dark:ring-white/5"
          onClick={() => setActiveModal('water')}
        >
          <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform">
            <Wind size={48} />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-slate-800 dark:text-slate-100">Apertura</h3>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">Gestión de poros y fluidos</p>
           <div className="mt-4 text-center">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest border border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/10 px-2 py-1 rounded">Click para ver</span>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'defense'} 
        onClose={() => setActiveModal(null)}
        title="La Primera Línea de Defensa"
      >
        <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
           <img 
              src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=800&q=80" 
              alt="Muralla de piedra" 
              className="w-full h-full object-cover"
           />
        </div>
        <p className="mb-4">
          Taiyang actúa como la frontera del cuerpo. Al igual que una muralla protege una ciudad, Taiyang protege al organismo de las influencias externas perversas (Xie Qi) como el Viento y el Frío.
        </p>
        <p className="font-bold text-slate-800 dark:text-slate-200">Concepto Clave:</p>
        <p>
          "Es fácil esquivar una lanza arrojada al aire libre, pero difícil esquivar una flecha disparada desde un escondite". Taiyang protege especialmente la espalda, el "Norte" del cuerpo, por donde suelen atacar los "vientos ladrones".
        </p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'temperature'} 
        onClose={() => setActiveModal(null)}
        title="Regulación Térmica (Yang)"
      >
        <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
           <img 
              src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=800&q=80" 
              alt="Amanecer" 
              className="w-full h-full object-cover"
           />
        </div>
        <p className="mb-4">
          Taiyang se relaciona con el <strong>"Yang Supremo"</strong>. Su función es mantener la temperatura interna constante mediante la circulación de sangre caliente hacia la periferia.
        </p>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500 dark:border-orange-600 italic text-orange-800 dark:text-orange-200">
          "El Yang Qi, donde es magnífico, lo llamamos Taiyang." - Wang Bing
        </div>
      </Modal>

      <Modal 
        isOpen={activeModal === 'water'} 
        onClose={() => setActiveModal(null)}
        title="Control de Apertura (Poros)"
      >
         <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
           <img 
              src="https://images.unsplash.com/photo-1431440869543-efaf3388c585?auto=format&fit=crop&w=800&q=80" 
              alt="Vapor y Niebla" 
              className="w-full h-full object-cover"
           />
        </div>
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