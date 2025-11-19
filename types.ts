
export enum SlideType {
  INTRO = 'INTRO',
  ORGANS = 'ORGANS',
  SYMPTOMS = 'SYMPTOMS',
  PATHOLOGY = 'PATHOLOGY',
  QUIZ = 'QUIZ',
  SUMMARY = 'SUMMARY',
  // Yangming Specific
  YANGMING_INTRO = 'YANGMING_INTRO',
  YANGMING_ORGANS = 'YANGMING_ORGANS',
  YANGMING_PATHOLOGY = 'YANGMING_PATHOLOGY',
  // Shaoyang Specific
  SHAOYANG_INTRO = 'SHAOYANG_INTRO',
  SHAOYANG_PIVOT = 'SHAOYANG_PIVOT',
  SHAOYANG_ORGANS = 'SHAOYANG_ORGANS',
  SHAOYANG_PATHOLOGY = 'SHAOYANG_PATHOLOGY'
}

export interface SlideConfig {
  id: string;
  unit: string; // New field to group slides in sidebar
  title: string;
  type: SlideType;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
