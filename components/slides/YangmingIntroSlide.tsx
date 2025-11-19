import React, { useState } from 'react';
import { Lightbulb, ArrowDown, CloudFog, Sun } from 'lucide-react';
import { Modal } from '../Modal';

export const YangmingIntroSlide: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col items-center justify-start max-w-5xl mx-auto p-6 overflow-y-auto">
      
      {/* Hero Image Area */}
      <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 shadow-xl dark:shadow-2xl shadow-slate-300/50 dark:shadow-black/50 relative shrink-0 group border border-slate-200 dark:border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80" 
          alt="Desierto brillante" 
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent dark:from-slate-950 dark:via-slate-900/60 dark:to-transparent flex items-end p-8">
           <div>
              <div className="inline-block p-2 rounded-full bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 mb-2 text-white">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white serif shadow-sm">
                Yangming: Dos Yang se Unen
              </h2>
              <p className="text-slate-100 dark:text-slate-200 text-lg font-light">
                Brillo intenso, sequedad y cierre hacia el interior.
              </p>
           </div>
        </div>
      </div>

      <div className="text-center mb-8 animate-in slide-in-from-bottom-4 duration-700 fade-in">
        <p className="text-lg text-slate-500 italic mb-4">
          "Huang Di pregunta: ¿Qué se entiende por Yangming?"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
        {/* Concept Card 1: The Metaphor */}
        <div 
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-t-4 border-yellow-500 group ring-1 ring-slate-200 dark:ring-white/5"
          onClick={() => setActiveModal('brightness')}
        >
          <div className="flex justify-center mb-4 text-yellow-600 dark:text-yellow-500 group-hover:scale-110 transition-transform">
            <Lightbulb size={48} />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-slate-900 dark:text-white">El Brillo (Ming)</h3>
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            1 bombilla brilla. 2 bombillas brillan más.
          </p>
          <div className="mt-4 text-center">
             <span className="text-xs font-bold text-yellow-600 dark:text-yellow-500 uppercase tracking-widest bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded border border-yellow-200 dark:border-yellow-900/30">Leer metáfora</span>
          </div>
        </div>

        {/* Concept Card 2: The Movement */}
        <div 
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-t-4 border-slate-500 group ring-1 ring-slate-200 dark:ring-white/5"
          onClick={() => setActiveModal('closing')}
        >
          <div className="flex justify-center mb-4 text-slate-500 dark:text-slate-400 group-hover:translate-y-1 transition-transform">
            <ArrowDown size={48} />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-slate-900 dark:text-white">Converger y Cerrar</h3>
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            No es sumar (1+1), es consolidar.
          </p>
          <div className="mt-4 text-center">
             <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded border border-slate-200 dark:border-slate-600">Ver significado</span>
          </div>
        </div>

        {/* Concept Card 3: The Nature */}
        <div 
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-t-4 border-orange-500 group ring-1 ring-slate-200 dark:ring-white/5"
          onClick={() => setActiveModal('dryness')}
        >
          <div className="flex justify-center mb-4 text-orange-500 group-hover:scale-110 transition-transform">
            <Sun size={48} />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-slate-900 dark:text-white">Sequedad y Metal</h3>
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Otoño. Noroeste. Metal.
          </p>
          <div className="mt-4 text-center">
             <span className="text-xs font-bold text-orange-600 dark:text-orange-500 uppercase tracking-widest bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded border border-orange-200 dark:border-orange-900/30">Explorar clima</span>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border-l-4 border-slate-400 dark:border-slate-600 max-w-3xl text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex gap-4 items-start shadow-inner">
        <CloudFog size={24} className="shrink-0 mt-1 text-slate-400" />
        <div>
            <h4 className="font-bold mb-1 text-slate-900 dark:text-white">La Paradoja:</h4>
            "Yangming es la luminosidad que se ha expandido, que ha entrado al interior. Cuando el yang llega al cenit, el siguiente movimiento es descender."
            <br/>
            Aunque Yangming es "brillo" y calor, su función esencial es el <strong>enfriamiento y secado</strong> del Otoño para almacenar la energía.
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'brightness'} 
        onClose={() => setActiveModal(null)}
        title="La Metáfora de la Lámpara"
      >
        <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
            <img 
            src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80" 
            alt="Lámpara brillante" 
            className="w-full h-full object-cover"
            />
        </div>
        <p className="mb-4">
          El texto utiliza una analogía simple: "Es como una lámpara con más de una bombilla: enciende una bombilla y brilla; enciende dos bombillas y estará más brillante."
        </p>
        <p>
          Sin embargo, el texto aclara que <strong>"unir" no significa simplemente sumar</strong> matemáticamente. No se trata solo de cantidad, sino de una cualidad de concentración. El Yang Qi deja de dispersarse (como en Verano/Taiyang) y comienza a reunirse.
        </p>
      </Modal>

      <Modal 
        isOpen={activeModal === 'closing'} 
        onClose={() => setActiveModal(null)}
        title="Unir es Cerrar"
      >
        <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
            <img 
            src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80" 
            alt="Puerta cerrándose" 
            className="w-full h-full object-cover grayscale opacity-80"
            />
        </div>
        <p className="mb-4">
          La clave para entender Yangming está en la palabra "unir" (He). En este contexto, significa <strong>"converger", "juntarse", "cerrar"</strong>.
        </p>
        <p className="mb-4">
          Yangming es el opuesto a "dividir" o "abrir" (que sería función de Taiyang).
        </p>
        <ul className="bg-slate-100 dark:bg-slate-800 p-4 rounded list-disc list-inside border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
          <li><strong>Taiyang:</strong> Apertura.</li>
          <li><strong>Yangming:</strong> Cierre. Lleva el fuego hacia Ming Men.</li>
        </ul>
      </Modal>

      <Modal 
        isOpen={activeModal === 'dryness'} 
        onClose={() => setActiveModal(null)}
        title="Sequedad (Zao) y Metal"
      >
        <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
            <img 
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80" 
            alt="Hojas secas de otoño" 
            className="w-full h-full object-cover"
            />
        </div>
        <p className="mb-4">
          Yangming se asocia al <strong>Oeste</strong>, al <strong>Metal</strong> y al <strong>Otoño</strong>.
        </p>
        <p className="mb-2">
          ¿Por qué Metal Seco?
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>El Metal es pesado y desciende (se hunde en la tierra).</li>
          <li>Esta pesadez restringe el Yang Qi y evita que el agua ascienda, creando sequedad.</li>
          <li>La esencia de la sequedad es <strong>Frío</strong> (como una mañana de otoño), aunque la manifestación patológica suele ser Calor Seco.</li>
        </ul>
      </Modal>
    </div>
  );
};