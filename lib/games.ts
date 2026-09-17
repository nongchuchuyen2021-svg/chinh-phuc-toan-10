import type { LessonGame } from "./types";
import bai01 from "@/data/games/bai-01";

const GAMES_MAP: Record<string, LessonGame[]> = {
  "bai-01": bai01,
};

export function getLessonGames(lessonId: string): LessonGame[] {
  return GAMES_MAP[lessonId] ?? [];
}
