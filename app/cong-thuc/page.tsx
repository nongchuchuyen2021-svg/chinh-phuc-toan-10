import type { Metadata } from "next";
import FormulaClient from "@/components/FormulaClient";

export const metadata: Metadata = {
  title: "Sổ tay Công thức Toán 10 — Chinh phục Toán 10",
  description:
    "Tra cứu toàn diện công thức Toán 10 Kết nối tri thức: Đại số, Lượng giác, Hình học Vectơ, Toạ độ Oxy, Thống kê, Tổ hợp và Xác suất.",
};

export default function FormulaPage() {
  return <FormulaClient />;
}
