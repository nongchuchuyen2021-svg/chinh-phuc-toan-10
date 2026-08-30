export interface MultipleChoiceQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
}

export interface TrueFalseStatement {
  id: string;
  statement: string;
  isCorrect: boolean;
  explanation: string;
}

export interface TrueFalseQuestion {
  id: string;
  context: string;
  statements: TrueFalseStatement[];
}

export interface EssayQuestion {
  id: string;
  question: string;
  shortAnswer?: string;
  solution: string;
}

export interface LessonQuestions {
  baiId: string;
  baiName: string;
  multipleChoice: MultipleChoiceQuestion[];
  trueFalse: TrueFalseQuestion[];
  essay: EssayQuestion[];
}

export interface LessonTheory {
  baiId: string;
  baiName: string;
  summary: string[];
  keyFormulas?: string[];
  examples?: {
    title: string;
    question: string;
    solution: string;
  }[];
}

export interface LessonItem {
  id: string;
  name: string;
  desc: string;
}

export interface ChapterItem {
  id: string;
  title: string;
  lessons: LessonItem[];
}

export interface UserProgress {
  [baiId: string]: {
    mcScore?: { correct: number; total: number; percent: number; date: string };
    tfScore?: { correct: number; total: number; score: number; date: string };
    completedTheory?: boolean;
    wrongQuestions?: string[];
  };
}
