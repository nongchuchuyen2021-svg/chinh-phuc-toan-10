import { UserProgress } from './types';

const STORAGE_KEY = 'toan_10_user_progress_v1';

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Error loading progress:', e);
    return {};
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Error saving progress:', e);
  }
}

export function updateLessonMCScore(baiId: string, correct: number, total: number, wrongIds: string[]): void {
  const progress = getProgress();
  const current = progress[baiId] || {};
  progress[baiId] = {
    ...current,
    mcScore: {
      correct,
      total,
      percent: Math.round((correct / total) * 100),
      date: new Date().toLocaleDateString('vi-VN')
    },
    wrongQuestions: wrongIds
  };
  saveProgress(progress);
}

export function updateLessonTFScore(baiId: string, correct: number, total: number, score: number): void {
  const progress = getProgress();
  const current = progress[baiId] || {};
  progress[baiId] = {
    ...current,
    tfScore: {
      correct,
      total,
      score: Math.round(score * 10) / 10,
      date: new Date().toLocaleDateString('vi-VN')
    }
  };
  saveProgress(progress);
}
