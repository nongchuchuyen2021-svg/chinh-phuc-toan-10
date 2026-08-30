import { notFound } from 'next/navigation';
import LessonClient from '@/components/LessonClient';
import { getLessonQuestions } from '@/lib/questions';
import { getLessonTheory } from '@/lib/theory';
import { CURRICULUM } from '@/data/curriculum';

interface PageProps {
  params: { baiId: string };
}

export function generateStaticParams() {
  const params: { baiId: string }[] = [];
  CURRICULUM.forEach(ch => {
    ch.lessons.forEach(l => {
      params.push({ baiId: l.id });
    });
  });
  return params;
}

export default async function LessonPage({ params }: PageProps) {
  const { baiId } = params;
  const questions = await getLessonQuestions(baiId);
  const theory = await getLessonTheory(baiId);

  if (!questions || !theory) {
    notFound();
  }

  return <LessonClient baiId={baiId} questions={questions} theory={theory} />;
}
