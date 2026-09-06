// ─── 1. Trắc nghiệm 4 lựa chọn (MCQ) ──────────────────────────────────────────
export type Question = {
  id: string;
  q: string;
  code?: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explain: string;
};

// ─── 2. Trắc nghiệm Đúng / Sai (Bộ GD&ĐT 4 mệnh đề) ──────────────────────────
export type TFStatement = {
  text: string;
  answer: boolean;
  explain: string;
};

export type TFQuestion = {
  id: string;
  context: string;
  code?: string;
  statements: TFStatement[];
};

// ─── 3. Trả lời ngắn / Tự luận Toán học ─────────────────────────────────────
export type EssayQuestion = {
  id: string;
  q: string;
  code?: string;
  answer: string;
  explain?: string;
};

export type LessonExtra = {
  tf: TFQuestion[];
  essay: EssayQuestion[];
};

// ─── 4. Lý thuyết Tự học Tương tác ──────────────────────────────────────────
export type Tone = "nebula" | "plasma" | "correct" | "photon" | "wrong";

export type TheoryCard = {
  emoji: string;
  title: string;
  text: string;
};

export type TheoryBlock =
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "cards"; tone?: Tone; items: TheoryCard[] }
  | {
      kind: "compare";
      left: { title: string; emoji: string; items: string[] };
      right: { title: string; emoji: string; items: string[] };
    }
  | { kind: "steps"; items: { label: string; title: string; text: string }[] }
  | { kind: "figure"; diagram: string; caption: string }
  | { kind: "code"; code: string; caption?: string; preview?: boolean; tall?: boolean }
  | { kind: "example"; title: string; text: string; solution?: string }
  | { kind: "note"; text: string }
  | { kind: "update"; title: string; text: string; items?: TheoryCard[] }
  | {
      kind: "check";
      q: string;
      options: string[];
      answer: number;
      explain: string;
    };

export type TheorySection = {
  id: string;
  emoji: string;
  heading: string;
  blocks: TheoryBlock[];
};

export type LessonTheory = {
  intro: string;
  minutes: number;
  sections: TheorySection[];
  summary: string[];
};

// ─── 5. Tiến độ & Số lượng nội dung bài học ──────────────────────────────────
export type LessonCounts = {
  mcq: number;
  tf: number;
  essay: number;
  theory: boolean;
};

export type Lesson = {
  id: string;
  title: string;
  desc?: string;
  available: boolean;
};

export type Topic = {
  id: string;
  name: string;
  emoji: string;
  lessons: Lesson[];
};

export type LessonProgress = {
  best: number;
  attempts: number;
  lastAt: string;
};

export type ProgressMap = Record<string, LessonProgress>;

// ─── 6. Flashcards & Ôn tập Ghi nhớ ─────────────────────────────────────────
export type FlashcardItem = {
  front: string;
  back: string;
};

export type CommonMistakeItem = {
  mistake: string;
  fix: string;
};

export type LessonReview = {
  summary: string;
  keyPoints: string[];
  commonMistakes: CommonMistakeItem[];
  tips: string[];
  flashcards: FlashcardItem[];
  checklist: string[];
};

// ─── 7. Sổ tay Công thức Toán 10 ───────────────────────────────────────────
export type FormulaItem = {
  id: string;
  name: string;
  latex: string;
  note?: string;
  tag: string;
};

export type FormulaCategory = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  formulas: FormulaItem[];
};

// ─── 8. Đề thi thử Trực tuyến (Mock Exam) ───────────────────────────────────
export type MockExamQuestion = {
  id: string;
  part: 1 | 2 | 3; // Phần 1: MCQ (0.25đ), Phần 2: Đúng/Sai (1.0đ), Phần 3: Trả lời ngắn (0.5đ)
  q: string;
  options?: [string, string, string, string];
  answer?: number | string;
  statements?: TFStatement[];
  explain: string;
};
