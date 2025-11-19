
import { SlideConfig, SlideType, QuizQuestion } from './types';

export const COURSE_STRUCTURE: SlideConfig[] = [
  // UNIT 2: TAIYANG
  { id: '1', unit: 'Unidad 2: Fisiología Taiyang', title: 'Introducción a Taiyang', type: SlideType.INTRO },
  { id: '2', unit: 'Unidad 2: Fisiología Taiyang', title: 'Órganos y Canales', type: SlideType.ORGANS },
  { id: '3', unit: 'Unidad 2: Fisiología Taiyang', title: 'Diagnóstico y Pulsos', type: SlideType.SYMPTOMS },
  { id: '4', unit: 'Unidad 2: Fisiología Taiyang', title: 'Shang Han vs Zhong Feng', type: SlideType.PATHOLOGY },
  
  // UNIT 3: YANGMING
  { id: '5', unit: 'Unidad 3: Fisiología Yangming', title: 'El Significado: Dos Yang se Unen', type: SlideType.YANGMING_INTRO },
  { id: '6', unit: 'Unidad 3: Fisiología Yangming', title: 'Canales y la Familia del Estómago', type: SlideType.YANGMING_ORGANS },
  { id: '7', unit: 'Unidad 3: Fisiología Yangming', title: 'Patología: Los 4 Grandes', type: SlideType.YANGMING_PATHOLOGY },

  // UNIT 4: SHAOYANG (New Content)
  { id: '8', unit: 'Unidad 4: Fisiología Shaoyang', title: 'Naturaleza Dual: Madera y Fuego', type: SlideType.SHAOYANG_INTRO },
  { id: '9', unit: 'Unidad 4: Fisiología Shaoyang', title: 'El Mecanismo de Bisagra (Pivote)', type: SlideType.SHAOYANG_PIVOT },
  { id: '10', unit: 'Unidad 4: Fisiología Shaoyang', title: 'Vesícula Biliar y San Jiao', type: SlideType.SHAOYANG_ORGANS },
  { id: '11', unit: 'Unidad 4: Fisiología Shaoyang', title: 'Patología: Mitad Interno/Externo', type: SlideType.SHAOYANG_PATHOLOGY },

  // EVALUATION
  { id: '12', unit: 'Evaluación Final', title: 'Evaluación de Conocimientos', type: SlideType.QUIZ },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Taiyang Questions
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
  },
  // Yangming Questions
  {
    id: 5,
    question: "En el contexto de Yangming, ¿qué significa la frase 'Los dos yang se unen en brillo'?",
    options: [
      "Que el calor se duplica y explota",
      "Que el Yang se dispersa hacia afuera",
      "Que el Yang converge, se junta y cierra hacia el interior",
      "Que el paciente ve luces brillantes"
    ],
    correctAnswer: 2,
    explanation: "Según el texto, 'unir' significa converger y cerrarse. Es el Yang replegándose hacia el interior, asociado al Otoño y al Metal."
  },
  {
    id: 6,
    question: "¿Qué órganos constituyen la 'Familia del Estómago' (Wei Jia)?",
    options: [
      "Solo el Estómago",
      "El Estómago y el Bazo",
      "El Estómago y los 6 intestinos (Fu)",
      "El Estómago y el Corazón"
    ],
    correctAnswer: 2,
    explanation: "El término 'Wei Jia' o Familia del Estómago abarca todo el sistema digestivo hueco: el Estómago actuando como jefe junto con los intestinos."
  },
  {
    id: 7,
    question: "¿Cuáles son los '4 Grandes' síntomas típicos del Síndrome Yangming de exceso?",
    options: [
      "Gran frío, gran dolor, gran orina, gran sueño",
      "Gran fiebre, gran sed, gran sudoración, gran pulso",
      "Gran mareo, gran vómito, gran miedo, gran tos",
      "No existen los 4 grandes"
    ],
    correctAnswer: 1,
    explanation: "La patología de calor por exceso en Yangming se manifiesta con Gran Fiebre, Gran Sed (consume fluidos), Gran Sudoración (calor interno empuja líquidos) y Gran Pulso."
  },
  // Shaoyang Questions
  {
    id: 8,
    question: "Según el Su Wen, ¿cuál es la función de Shaoyang en relación a la apertura y el cierre?",
    options: [
      "Shaoyang abre",
      "Shaoyang cierra",
      "Shaoyang pivota (es la bisagra)",
      "Shaoyang no hace nada"
    ],
    correctAnswer: 2,
    explanation: "El texto clásico dice: 'Taiyang abre, Yangming cierra, y Shaoyang pivota'. Es el mecanismo que permite el movimiento entre el interior y el exterior."
  },
  {
    id: 9,
    question: "¿Qué métodos de tratamiento están CONTRAINDICADOS en síndromes Shaoyang?",
    options: [
      "Armonización",
      "Sudoración, Purgación y Vómito",
      "Acupuntura",
      "Fitoterapia"
    ],
    correctAnswer: 1,
    explanation: "Al estar en una posición 'mitad interno, mitad externo', no se puede sudar (dañaría los fluidos internos) ni purgar (hundiría el patógeno). Se debe armonizar."
  },
  {
    id: 10,
    question: "¿Cuáles son los tres signos clave (Línea 263) que definen el esquema Shaoyang?",
    options: [
      "Dolor de cabeza, dolor de cuello, fiebre",
      "Sabor amargo, garganta seca, visión borrosa",
      "Sudoración profusa, sed, pulso grande",
      "Frío en extremidades, diarrea, vómito"
    ],
    correctAnswer: 1,
    explanation: "La línea 263 del Shang Han Lun establece: 'En el Síndrome Shaoyang, hay sabor amargo en la boca, garganta seca y visión borrosa'. Reflejan el fuego subiendo por los orificios."
  }
];
