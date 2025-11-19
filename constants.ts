import { SlideConfig, SlideType, QuizQuestion } from './types';

export const COURSE_STRUCTURE: SlideConfig[] = [
  { id: '1', title: 'Introducción a Taiyang', type: SlideType.INTRO },
  { id: '2', title: 'Órganos y Canales', type: SlideType.ORGANS },
  { id: '3', title: 'Diagnóstico y Pulsos', type: SlideType.SYMPTOMS },
  { id: '4', title: 'Shang Han vs Zhong Feng', type: SlideType.PATHOLOGY },
  { id: '5', title: 'Evaluación de Conocimientos', type: SlideType.QUIZ },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál es la función principal de Taiyang en relación con el entorno?",
    options: [
      "Almacenar sangre en el hígado",
      "Actuar como primera línea de defensa y gobernar la apertura",
      "Transformar los alimentos en Qi",
      "Regular el ciclo menstrual"
    ],
    correctAnswer: 1,
    explanation: "Como la conformación más superficial, Taiyang actúa como la primera línea de defensa contra influencias externas y gobierna la apertura y cierre de los poros."
  },
  {
    id: 2,
    question: "¿Qué órganos conforman el sistema Taiyang?",
    options: [
      "Corazón y Pulmón",
      "Hígado y Vesícula Biliar",
      "Vejiga e Intestino Delgado",
      "Riñón y Bazo"
    ],
    correctAnswer: 2,
    explanation: "El Taiyang del pie corresponde a la Vejiga y el Taiyang de la mano corresponde al Intestino Delgado."
  },
  {
    id: 3,
    question: "¿Qué indica un 'Pulso Flotante' en el diagnóstico de Taiyang?",
    options: [
      "Una enfermedad interna grave",
      "Deficiencia de Sangre",
      "El Yang Qi luchando en la superficie contra un patógeno",
      "Estancamiento de alimentos"
    ],
    correctAnswer: 2,
    explanation: "El pulso flotante indica que la enfermedad está en la superficie (biao). El Yang Qi se dirige hacia el exterior para contrarrestar al patógeno."
  },
  {
    id: 4,
    question: "¿Cuál es la diferencia clave entre Shang Han y Zhong Feng?",
    options: [
      "Shang Han es calor, Zhong Feng es frío",
      "Shang Han no tiene sudoración (poros cerrados), Zhong Feng tiene sudoración (poros abiertos)",
      "Shang Han afecta al hígado, Zhong Feng al corazón",
      "No hay diferencia, son lo mismo"
    ],
    correctAnswer: 1,
    explanation: "Shang Han (Daño por Frío) bloquea los poros impidiendo el sudor. Zhong Feng (Ataque de Viento) causa una apertura patológica, provocando sudoración."
  }
];
