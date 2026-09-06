"use client";

import { useState } from "react";
import Link from "next/link";
import { FORMULA_CATEGORIES } from "@/data/formulas";
import MathText from "@/components/MathText";

export default function FormulaClient() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  function copyLatex(id: string, text: string) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }

  const allCategories = FORMULA_CATEGORIES;

  return (
    <main className="cosmos relative min-h-screen py-8 sm:py-12 px-4 pb-20">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Breadcrumbs & Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="px-3.5 py-1.5 rounded-xl glass hover:bg-indigo-50 text-xs font-semibold text-slate-700 transition flex items-center gap-1.5"
          >
            ← Trang chủ
          </Link>
          <span className="text-xs font-bold text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            Tra cứu công thức nhanh
          </span>
        </div>

        {/* Hero Banner */}
        <div className="glass rounded-3xl p-6 sm:p-10 border border-indigo-100/80 shadow-md space-y-3 bg-gradient-to-br from-white via-indigo-50/20 to-sky-50/30">
          <span className="text-xs font-bold uppercase tracking-wider text-nebula">
            SỔ TAY TOÁN HỌC 10
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sổ Tay Công Thức Giải Nhanh Toán 10
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Tổng hợp toàn bộ công thức Đại số, Lượng giác, Hình học Vectơ, Toạ độ phẳng Oxy, Thống kê và Xác suất bám sát chương trình SGK Kết nối tri thức. Hiển thị KaTeX sắc nét, hỗ trợ sao chép công thức nhanh.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm công thức (Cosin, Heron, Parabol, Tổ hợp...)"
              className="w-full px-4 py-3 pl-11 rounded-2xl glass text-sm focus:outline-none focus:ring-2 focus:ring-nebula shadow-sm border border-slate-200"
            />
            <svg
              className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCat("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCat === "all"
                  ? "bg-nebula text-white shadow-glow"
                  : "glass text-slate-700 hover:bg-indigo-50/70"
              }`}
            >
              Tất cả chủ đề
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                  selectedCat === cat.id
                    ? "bg-nebula text-white shadow-glow"
                    : "glass text-slate-600 hover:bg-indigo-50/70"
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

            const filteredFormulas = cat.formulas.filter(
              (f) =>
                f.name.toLowerCase().includes(search.toLowerCase()) ||
                f.latex.toLowerCase().includes(search.toLowerCase()) ||
                (f.note && f.note.toLowerCase().includes(search.toLowerCase()))
            );

            if (filteredFormulas.length === 0) return null;

            return (
              <section key={cat.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.emoji}</span>
                  <div>
                    <h2 className="font-display font-bold text-xl text-slate-900">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-slate-500">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {filteredFormulas.map((f) => {
                    const isCopied = copiedId === f.id;

                    return (
                      <div
                        key={f.id}
                        className="glass rounded-2xl p-5 sm:p-6 space-y-4 border border-indigo-100 hover:border-indigo-300 hover:shadow-glass-hover transition flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700">
                              {f.tag}
                            </span>
                            <button
                              onClick={() => copyLatex(f.id, f.latex)}
                              className="text-[11px] font-semibold text-slate-400 hover:text-indigo-600 transition flex items-center gap-1"
                              title="Sao chép mã công thức"
                            >
                              {isCopied ? "✓ Đã sao chép" : "📋 Sao chép"}
                            </button>
                          </div>

                          <h3 className="font-display font-bold text-base text-slate-900">
                            {f.name}
                          </h3>

                          {/* KaTeX Display Box */}
                          <div className="p-4 rounded-xl bg-indigo-50/40 border border-indigo-100/70 text-center overflow-x-auto text-slate-900 font-medium text-base sm:text-lg">
                            <MathText content={`$$${f.latex}$$`} />
                          </div>

                          {f.note && (
                            <p className="text-xs text-slate-500 italic">
                              * <MathText content={f.note} />
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
