import type { LessonGame } from "./types";
import bai01 from "@/data/games/bai-01";
import bai02 from "@/data/games/bai-02";
import bai03 from "@/data/games/bai-03";
import bai04 from "@/data/games/bai-04";
import bai05 from "@/data/games/bai-05";
import bai06 from "@/data/games/bai-06";
import bai07 from "@/data/games/bai-07";

const GAMES_MAP: Record<string, LessonGame[]> = {
  "bai-01": bai01,
  "bai-02": bai02,
  "bai-03": bai03,
  "bai-04": bai04,
  "bai-05": bai05,
  "bai-06": bai06,
  "bai-07": bai07,
};

export function getLessonGames(lessonId: string): LessonGame[] {
  return GAMES_MAP[lessonId] ?? [];
}
