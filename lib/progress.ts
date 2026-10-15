import type { LessonProgress, ProgressMap } from "./types";

const KEY = "cptoan10:progress";

export function getProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    const data: ProgressMap = raw ? JSON.parse(raw) : {};

    // Đồng bộ nếu có dữ liệu cũ key `:lt`
    for (const key of Object.keys(data)) {
      if (key.endsWith(":lt") && data[key]?.best === 100) {
        const lessonId = key.replace(":lt", "");
        if (data[lessonId]) {
          data[lessonId].completedTheory = true;
        } else {
          data[lessonId] = { completedTheory: true };
        }
      }
    }
    return data;
  } catch {
    return {};
  }
}

export function saveProgress(progress: ProgressMap): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Error saving progress:", e);
  }
}

export function getLessonProgress(lessonId: string): LessonProgress | null {
  return getProgress()[lessonId] ?? null;
}

export function theoryKey(lessonId: string) {
  return `${lessonId}:lt`;
}

export function tfKey(lessonId: string) {
  return `${lessonId}:ds`;
}

export function essayKey(lessonId: string) {
  return `${lessonId}:tl`;
}

export function markTheoryRead(lessonId: string) {
  if (typeof window === "undefined") return;
  const all = getProgress();
  const current = all[lessonId] || {};
  all[lessonId] = {
    ...current,
    completedTheory: true,
    lastAt: new Date().toISOString(),
  };
  const key = theoryKey(lessonId);
  all[key] = {
    best: 100,
    attempts: (all[key]?.attempts ?? 0) + 1,
    lastAt: new Date().toISOString(),
  };
  saveProgress(all);
}

export function saveAttempt(lessonId: string, scorePercent: number, correct?: number, total?: number) {
  if (typeof window === "undefined") return;
  const all = getProgress();
  const prev = all[lessonId] || {};
  const newBest = Math.max(prev.best ?? 0, scorePercent);
  all[lessonId] = {
    ...prev,
    best: newBest,
    attempts: (prev.attempts ?? 0) + 1,
    lastAt: new Date().toISOString(),
    mcScore: {
      correct: correct ?? Math.round((scorePercent / 100) * 10),
      total: total ?? 10,
      percent: scorePercent,
      date: new Date().toLocaleDateString("vi-VN"),
    },
  };
  saveProgress(all);
}

export function updateLessonMCScore(lessonId: string, correct: number, total: number, wrongIds?: string[]) {
  if (typeof window === "undefined") return;
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  const all = getProgress();
  const prev = all[lessonId] || {};
  all[lessonId] = {
    ...prev,
    best: Math.max(prev.best ?? 0, percent),
    attempts: (prev.attempts ?? 0) + 1,
    lastAt: new Date().toISOString(),
    mcScore: {
      correct,
      total,
      percent,
      date: new Date().toLocaleDateString("vi-VN"),
    },
    wrongQuestions: wrongIds ?? prev.wrongQuestions,
  };
  saveProgress(all);
}

export function updateLessonTFScore(lessonId: string, correct: number, total: number, score: number) {
  if (typeof window === "undefined") return;
  const all = getProgress();
  const prev = all[lessonId] || {};
  all[lessonId] = {
    ...prev,
    lastAt: new Date().toISOString(),
    tfScore: {
      correct,
      total,
      score: Math.round(score * 100) / 100,
      date: new Date().toLocaleDateString("vi-VN"),
    },
  };
  saveProgress(all);
}
