import type { LessonGame } from "./types";
import bai01 from "@/data/games/bai-01";
import bai02 from "@/data/games/bai-02";

const GAMES_MAP: Record<string, LessonGame[]> = {
  "bai-01": bai01,
  "bai-02": bai02,
};

export function getLessonGames(lessonId: string): LessonGame[] {
  return GAMES_MAP[lessonId] ?? [];
}
