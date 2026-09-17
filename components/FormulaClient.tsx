"use client";

import { useState } from "react";
import Link from "next/link";
import { FORMULA_CATEGORIES } from "@/data/formulas";
import MathText from "@/components/MathText";
import { playClick } from "@/lib/sound";

export default function FormulaClient() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  function copyLatex(id: string, text: string) {
    playClick();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }

  const allCategories = FORMULA_CATEGORIES;

  return (
    <main className="relative min-h-screen py-8 sm:py-10 px-4 pb-20 max-w-6xl mx-auto">
      <div className="space-y-8">
        {/* Breadcrumbs & Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => playClick()}
            className="px-3.5 py-1.5 rounded-xl bg-void-card border border-void-border hover:border-cyan/40 text-xs font-mono font-bold text-star-soft hover:text-cyan-glow transition flex items-center gap-1.5 shadow-card"
          >
            ← Trang chủ
          </Link>
          <span className="text-xs font-mono font-bold text-cyan-glow px-3 py-1 rounded-full bg-cyan/15 border border-cyan/30 shadow-glow-cyan">
            📑 Tra cứu công thức nhanh
          </span>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl p-6 sm:p-8 border border-void-border bg-void-card/95 shadow-card backdrop-blur-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/15 text-cyan-glow border border-cyan/30 font-mono text-xs font-bold uppercase tracking-wider">
            <span>📐</span> Sổ tay Công thức Toán 10
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-star tracking-tight">
            Sổ Tay Công Thức Giải Nhanh{" "}
            <span className="bg-gradient-to-r from-cyan-glow via-violet-glow to-amber bg-clip-text text-transparent">
              Toán 10
            </span>
          </h1>
          <p className="text-sm sm:text-base text-star-soft leading-relaxed max-w-3xl">
            Tổng hợp toàn diện công thức Đại số, Lượng giác, Hình học Vectơ, Toạ độ phẳng Oxy, Thống kê và Xác suất bám sát bộ sách Kết nối tri thức. Hiển thị KaTeX sắc nét, hỗ trợ sao chép nhanh.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-star-mute text-sm">
              🔍
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm công thức (Cosin, Heron, Parabol, Tổ hợp...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-void-card/90 border border-void-border text-star placeholder:text-star-mute text-xs sm:text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition shadow-card"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => {
                playClick();
                setSelectedCat("all");
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCat === "all"
                  ? "bg-cyan/20 border border-cyan/40 text-cyan-glow shadow-glow-cyan font-bold"
                  : "bg-void-card/85 border border-void-border text-star-soft hover:border-cyan/30 hover:text-star"
              }`}
            >
              Tất cả chủ đề
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playClick();
                  setSelectedCat(cat.id);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                  selectedCat === cat.id
                    ? "bg-cyan/20 border border-cyan/40 text-cyan-glow shadow-glow-cyan font-bold"
                    : "bg-void-card/85 border border-void-border text-star-soft hover:border-cyan/30 hover:text-star"
                }`}
              >
                {cat.emoji} {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Formula Cards */}
        <div className="space-y-10">
          {allCategories.map((cat) => {
            if (selectedCat !== "all" && selectedCat !== cat.id) return null;

            const filteredItems = cat.formulas.filter(
              (it) =>
                it.name.toLowerCase().includes(search.toLowerCase()) ||
                (it.note && it.note.toLowerCase().includes(search.toLowerCase())) ||
                (it.tag && it.tag.toLowerCase().includes(search.toLowerCase())) ||
                it.latex.toLowerCase().includes(search.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={cat.id} className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{cat.emoji}</span>
                  <div>
                    <h2 className="font-display font-bold text-lg sm:text-xl text-star">
                      {cat.title}
                    </h2>
                    {cat.description && (
                      <p className="text-xs text-star-soft mt-0.5">{cat.description}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItems.map((f, fIdx) => {
                    const uniqueId = `${cat.id}-${f.id || fIdx}`;
                    const isCopied = copiedId === uniqueId;

                    return (
                      <div
                        key={f.id || fIdx}
                        className="rounded-3xl border border-void-border bg-void-card/90 p-5 sm:p-6 shadow-card hover:border-cyan/40 hover:shadow-glow-cyan transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div>
                              {f.tag && (
                                <span className="inline-block px-2 py-0.5 rounded-md bg-void-subtle border border-void-border text-[10px] font-mono text-cyan-glow uppercase tracking-wider mb-1">
                                  {f.tag}
                                </span>
                              )}
                              <h3 className="font-display font-bold text-sm sm:text-base text-star">
                                {f.name}
                              </h3>
                            </div>
                            <button
                              onClick={() => copyLatex(uniqueId, f.latex)}
                              className="px-2.5 py-1 rounded-lg bg-void-subtle border border-void-border text-[11px] font-mono text-star-soft hover:text-cyan-glow hover:border-cyan/40 transition shrink-0"
                            >
                              {isCopied ? "✓ Đã chép" : "Sao chép"}
                            </button>
                          </div>

                          {f.note && (
                            <div className="text-xs sm:text-sm text-star-soft leading-relaxed mb-3.5 pt-0.5">
                              <MathText content={f.note} />
                            </div>
                          )}
                        </div>

                        {/* Latex display box */}
                        <div className="p-3.5 rounded-2xl bg-void-subtle border border-void-border/80 overflow-x-auto text-center font-semibold text-star">
                          <MathText content={`$$${f.latex}$$`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
