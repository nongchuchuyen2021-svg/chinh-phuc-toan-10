import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EXAM_PAPERS, getExamPaper } from "@/data/mockExam";
import MockExamClient from "@/components/MockExamClient";

export function generateStaticParams() {
  return EXAM_PAPERS.map((p) => ({ examId: p.id }));
}

export function generateMetadata({ params }: { params: { examId: string } }): Metadata {
  const paper = getExamPaper(params.examId);
  return {
    title: paper ? `${paper.title} — Chinh phục Toán 10` : "Đề kiểm tra không tồn tại",
    description: paper?.subtitle,
  };
}

export default function ExamPaperPage({ params }: { params: { examId: string } }) {
  const paper = getExamPaper(params.examId);
  if (!paper) return notFound();
  return <MockExamClient paper={paper} />;
}
