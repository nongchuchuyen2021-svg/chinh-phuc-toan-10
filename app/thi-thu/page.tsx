import type { Metadata } from "next";
import MockExamClient from "@/components/MockExamClient";

export const metadata: Metadata = {
  title: "Thi thử Trực tuyến Toán 10 — Chinh phục Toán 10",
  description:
    "Đề thi thử tổng hợp Toán 10 cấu trúc mới của Bộ Giáo dục và Đào tạo: Trắc nghiệm 4 lựa chọn, Đúng/Sai và Trả lời ngắn.",
};

export default function MockExamPage() {
  return <MockExamClient />;
}
