import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LessonClient from "@/components/LessonClient";
import { CURRICULUM, findLesson } from "@/data/curriculum";
import { getQuestions } from "@/lib/questions";
import { getTF, getEssay } from "@/lib/extras";
import { getLessonTheory } from "@/lib/theory";
import { getLessonReview } from "@/lib/reviews";
import { getLessonGames } from "@/lib/games";

interface PageProps {
  params: { baiId: string };
}

export function generateStaticParams() {
  return CURRICULUM.flatMap((topic) =>
    topic.lessons.map((lesson) => ({
      baiId: lesson.id,
    }))
  );
}

export function generateMetadata({ params }: PageProps): Metadata {
  const info = findLesson(params.baiId);
  if (!info) return { title: "Bài học không tồn tại" };
  return {
    title: `${info.lesson.title} — Chinh phục Toán 10`,
    description: info.lesson.desc || `Lý thuyết và bài tập trắc nghiệm ${info.lesson.title}`,
  };
}

export default function LessonPage({ params }: PageProps) {
  const { baiId } = params;
  const info = findLesson(baiId);

  if (!info) {
    notFound();
  }

  const theory = getLessonTheory(baiId);
  const mcq = getQuestions(baiId);
  const tf = getTF(baiId);
  const essay = getEssay(baiId);
  const review = getLessonReview(baiId);
  const games = getLessonGames(baiId);

  const sgkPath = path.join(process.cwd(), "public", "sgk", `${baiId}.html`);
  const hasSgk = fs.existsSync(sgkPath);

  return (
    <LessonClient
      lessonId={baiId}
      lessonTitle={info.lesson.title}
      topicName={info.topic.name}
      theory={theory}
      mcq={mcq}
      tf={tf}
      essay={essay}
      review={review}
      games={games}
      hasSgk={hasSgk}
    />
  );
}
