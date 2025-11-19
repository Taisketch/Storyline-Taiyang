import React, { useState } from 'react';
import { Flame, Sprout, Zap } from 'lucide-react';
import { Modal } from '../Modal';

export const ShaoyangIntroSlide: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col items-center justify-start max-w-5xl mx-auto p-6 overflow-y-auto">
      
      {/* Hero Image */}
      <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 shadow-xl dark:shadow-2xl shadow-slate-300/50 dark:shadow-black/50 relative shrink-0 group border border-slate-200 dark:border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80" 
          alt="Brote de primavera" 
          className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent dark:from-slate-950 dark:via-slate-900/60 dark:to-transparent flex items-end p-8">
           <div>
              <div className="inline-block p-2 rounded-full bg-green-600/20 backdrop-blur-md border border-green-500/30 mb-2 text-white">
                <span className="text-2xl">🌱</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white serif shadow-sm">
                Shaoyang: El Pequeño Yang
              </h2>
              <p className="text-slate-100 dark:text-slate-200 text-lg font-light">
                El inicio de la vida. La primavera. El fuego naciente.
              </p>
           </div>
        </div>
      </div>

      <div className="text-center mb-8 animate-in slide-in-from-bottom-4 duration-700 fade-in">
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          La fuerza de la Primavera que rompe el invierno. Es el "Joven Yang" que crece pero necesita libertad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
        {/* Card 1: Wood Nature */}
        <div 
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-b-8 border-green-500 dark:border-green-600 cursor-pointer hover:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all group ring-1 ring-slate-200 dark:ring-white/5"
          onClick={() => setActiveModal('wood')}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                <Sprout size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Naturaleza de Madera</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
             Relacionado con el Este, la Primavera y el crecimiento inicial. Es el "Dragón Verde".
          </p>
          <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/10 px-2 py-1 rounded">Ver detalles</span>
        </div>

        {/* Card 2: Fire Nature */}
        <div 
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-b-8 border-red-500 dark:border-red-600 cursor-pointer hover:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all group ring-1 ring-slate-200 dark:ring-white/5"
          onClick={() => setActiveModal('fire')}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                <Flame size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Fuego Ministerial</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
             A diferencia del Fuego Imperial (Corazón), este es el fuego funcional que genera movimiento.
          </p>
          <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10 px-2 py-1 rounded">Ver detalles</span>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border-l-4 border-slate-400 dark:border-slate-600 max-w-3xl text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-4 shadow-inner">
        <Zap size={32} className="shrink-0 text-slate-400 dark:text-slate-500"/>
        <div>
            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">El Fuego del Trueno</h4>
            "En la antigüedad, el fuego se obtenía de los rayos (Truenos) en primavera. El trueno pertenece a la madera pero crea fuego."
            <br/>
            Esta metáfora explica la <strong>dualidad</strong> de Shaoyang: tiene la forma de la Madera (inicio) pero la función del Fuego (movimiento y calor).
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'wood'} 
        onClose={() => setActiveModal(null)}
        title="Shaoyang y la Madera"
      >
        <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
            <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" 
            alt="Bosque verde" 
            className="w-full h-full object-cover"
            />
        </div>
        <p className="mb-4">
          Shaoyang significa "Pequeño Yang" (Xiao Yang). Representa el nacimiento del Yang, comparable al amanecer o a los brotes en primavera.
        </p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dirección:</strong> Este (Oriente).</li>
            <li><strong>Animal:</strong> Dragón Verde.</li>
            <li><strong>Cualidad:</strong> Expansión sin trabas. No le gusta ser restringido.</li>
        </ul>
      </Modal>

      <Modal 
        isOpen={activeModal === 'fire'} 
        onClose={() => setActiveModal(null)}
        title="Fuego Ministerial vs Fuego Imperial"
      >
        <div className="mb-6 rounded-lg overflow-hidden h-48 w-full shadow-md border border-slate-200 dark:border-slate-700">
            <img 
            src="https://images.unsplash.com/photo-1517054611199-9e9243b605f0?auto=format&fit=crop&w=800&q=80" 
            alt="Fuego pequeño y brasas" 
            className="w-full h-full object-cover"
            />
        </div>
        <p className="mb-4">
          Mientras que el Corazón es el Fuego Imperial (el Rey que se sienta quieto), Shaoyang (Vesícula Biliar/San Jiao) es el <strong>Fuego Ministerial</strong> (los ministros que ejecutan las órdenes).
        </p>
        <p className="mb-4">
          Es un "Fuego Funcional". Es el calor necesario para que los procesos biológicos ocurran, para que el agua se mueva y se transforme.
        </p>
        <p className="italic bg-red-50 dark:bg-red-900/20 p-2 rounded border border-red-200 dark:border-red-900/30">
            "Shaoyang es el pequeño fuego". Si este fuego se estanca, se convierte en "Fuego Patológico".
        </p>
      </Modal>
    </div>
  );
};