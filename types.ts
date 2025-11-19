export enum SlideType {
  INTRO = 'INTRO',
  ORGANS = 'ORGANS',
  SYMPTOMS = 'SYMPTOMS',
  PATHOLOGY = 'PATHOLOGY',
  QUIZ = 'QUIZ',
  SUMMARY = 'SUMMARY'
}

export interface SlideConfig {
  id: string;
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
