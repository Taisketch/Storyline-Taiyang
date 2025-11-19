import React, { useState } from 'react';
import { Thermometer, Activity, Droplets, GlassWater, AlertTriangle } from 'lucide-react';
import { Modal } from '../Modal';

export const YangmingPathologySlide: React.FC = () => {
  const [activeSymptom, setActiveSymptom] = useState<string | null>(null);

  const symptoms = [
    {
      id: 'fever',
      icon: <Thermometer size={32} />,
      title: 'Gran Fiebre',
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-900/30',
      desc: 'Calor intenso que no cede con el sudor.'
    },
    {
      id: 'sweat',
      icon: <Droplets size={32} />,
      title: 'Gran Sudoración',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-900/30',
      desc: 'El calor interno empuja los fluidos hacia afuera.'
    },
    {
      id: 'thirst',
      icon: <GlassWater size={32} />,
      title: 'Gran Sed',
      color: 'text-teal-600 dark:text-teal-400',
      bg: 'bg-teal-50 dark:bg-teal-900/20',
      border: 'border-teal-200 dark:border-teal-900/30',
      desc: 'Deseo de beber agua fría profusamente.'
    },
    {
      id: 'pulse',
      icon: <Activity size={32} />,
      title: 'Gran Pulso',
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-200 dark:border-purple-900/30',
      desc: 'Pulso amplio, desbordante y fuerte.'
    }
  ];

  return (
    <div className="h-full flex flex-col p-4 md:p-8 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 serif">Patología de Exceso Yangming</h2>
        <p className="text-slate-500 dark:text-slate-400">El calor interno consume los fluidos y genera los "4 Grandes".</p>
      </div>

      {/* Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {symptoms.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSymptom(s.id)}
            className={`${s.bg} p-6 rounded-xl border ${s.border} hover:border-slate-400 dark:hover:border-white/30 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center text-center h-full group`}
          >
            <div className={`mb-4 ${s.color} group-hover:scale-110 transition-transform`}>{s.icon}</div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg mb-2">{s.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">{s.desc}</p>
            <span className="mt-auto pt-4 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300">+ Info</span>
          </button>
        ))}
      </div>

      {/* Alert Box */}
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 dark:border-orange-600 p-6 rounded-r-lg flex gap-4 items-start border border-orange-200 dark:border-orange-900/30 shadow-inner">
        <AlertTriangle className="text-orange-500 shrink-0" />
        <div>
            <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-1">Calor y Sequedad</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                "La naturaleza del fuego es elevarse... la sequedad de la enfermedad Yangming es una sequedad caliente."
                <br/>
                Cuando el calor persiste, seca las heces en el intestino, llevando a la <strong>Constipación</strong> y al delirio (si afecta al Shen).
            </p>
        </div>
      </div>

      {/* Details Modal */}
      <Modal 
        isOpen={!!activeSymptom} 
        onClose={() => setActiveSymptom(null)}
        title={symptoms.find(s => s.id === activeSymptom)?.title || ''}
      >
        {activeSymptom === 'fever' && (
          <div>
            <p className="mb-4">A diferencia de Taiyang (donde hay aversión al frío), en Yangming hay <strong>aversión al calor</strong>.</p>
            <p>El paciente siente que arde por dentro. Es una fiebre alta y continua.</p>
          </div>
        )}
        {activeSymptom === 'sweat' && (
          <div>
            <p className="mb-4">El calor interno es tan fuerte que vaporiza los fluidos y fuerza a los poros a abrirse violentamente.</p>
            <p>Es una sudoración profusa que <strong>no baja la fiebre</strong>, sino que agota más los líquidos corporales (Jin Ye).</p>
          </div>
        )}
        {activeSymptom === 'thirst' && (
          <div>
            <p className="mb-4">Debido a la gran sudoración y al calor, los líquidos se dañan.</p>
            <p>El paciente tiene una sed insaciable y preferencia por bebidas muy frías para contrarrestar el fuego del estómago.</p>
          </div>
        )}
        {activeSymptom === 'pulse' && (
          <div>
            <p className="mb-4">El pulso es <strong>Grande (Da), Lleno, Desbordante</strong>.</p>
            <p>Refleja la lucha vigorosa entre un Qi antipatógeno fuerte y un factor patógeno fuerte (Exceso total).</p>
          </div>
        )}
      </Modal>
    </div>
  );
};