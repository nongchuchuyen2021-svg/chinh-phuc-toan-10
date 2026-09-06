import type { LessonProgress, ProgressMap } from "./types";

const KEY = "cptoan10:progress";

export function getProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
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
  const key = theoryKey(lessonId);
  if (all[key]?.best === 100) return;
  all[key] = {
    best: 100,
    attempts: (all[key]?.attempts ?? 0) + 1,
    lastAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function saveAttempt(lessonId: string, scorePercent: number) {
  if (typeof window === "undefined") return;
  const all = getProgress();
  const prev = all[lessonId];
  all[lessonId] = {
    best: Math.max(prev?.best ?? 0, scorePercent),
    attempts: (prev?.attempts ?? 0) + 1,
    lastAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify(all));
}
