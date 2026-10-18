export interface SubQuestion {
  label: string; // e.g. "(i)"
  statement: string;
  given?: string;
  formula?: string;
  working: string[]; // Step-by-step LaTeX lines / explanations
  finalAnswer: string;
  explanation?: string;
}

export interface Question {
  id: string;
  chapterId: number;
  chapterNumber: number;
  chapterTitle: string;
  exerciseId: string; // e.g., "1.1", "Review 1"
  exerciseTitle: string;
  questionNumber: string; // e.g. "Question 1"
  topic: string;
  statement: string;
  subQuestions?: SubQuestion[];
  given?: string;
  formula?: string;
  workingSteps?: string[];
  finalAnswer: string;
  notes?: string;
  officialAnswer?: string;
  diagramType?: 'number-line' | 'venn' | 'triangle' | 'pyramid' | 'cone' | 'histogram' | 'box' | 'spinner' | 'coordinate';
  diagramData?: any;
}

export interface Exercise {
  id: string;
  number: string;
  title: string;
  page: number;
  description: string;
  questions: Question[];
}

export interface Chapter {
  id: number;
  number: number;
  title: string;
  page: number;
  iconName: string;
  summary: string;
  keyFormulas: { name: string; formula: string; note?: string }[];
  exercises: Exercise[];
}

export interface Bookmark {
  questionId: string;
  savedAt: number;
  note?: string;
}
