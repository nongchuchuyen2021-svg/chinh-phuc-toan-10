"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import MathText from "@/components/MathText";
import { playClick } from "@/lib/sound";
import { CASIO_TIPS } from "@/data/casio-tips";
import { CURRICULUM } from "@/data/curriculum";
import { getCasioBookmarks, toggleCasioBookmark } from "@/lib/casioBookmarks";

const LESSON_LOOKUP = new Map<string, string>();
CURRICULUM.forEach((topic) => {
  topic.lessons.forEach((lesson) => {
    LESSON_LOOKUP.set(lesson.id, lesson.title.replace(/^Bài\s*\d+\.\s*/, ""));
  });
});

export default function CasioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setBookmarks(getCasioBookmarks());
  }, []);

  const categories = useMemo(
    () => ["Tất cả", ...Array.from(new Set(CASIO_TIPS.map((t) => t.category)))],
    []
  );

  const filteredTips = useMemo(() => {
    const query = search.trim().toLowerCase();
    return CASIO_TIPS.filter((tip) => {
      if (selectedCategory !== "Tất cả" && tip.category !== selectedCategory) return false;
      if (showBookmarkedOnly && !bookmarks.includes(tip.id)) return false;
      if (!query) return true;
      const haystack = [
        tip.title,
        tip.category,
        tip.model,
        tip.shortcut,
        tip.description,
        tip.example.problem,
        ...tip.lessonIds.map((id) => LESSON_LOOKUP.get(id) ?? ""),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [search, selectedCategory, showBookmarkedOnly, bookmarks]);

  const handleToggleBookmark = (tipId: string) => {
    playClick();
    setBookmarks(toggleCasioBookmark(tipId));
  };

  const handleCopyShortcut = async (tip: (typeof CASIO_TIPS)[number]) => {
    playClick();
    let copied = false;
    try {
      await navigator.clipboard.writeText(tip.shortcut);
      copied = true;
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = tip.shortcut;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        copied = document.execCommand("copy");
        document.body.removeChild(textarea);
      } catch (e) {
        console.error("Không thể sao chép:", e);
      }
    }
    if (copied) {
      setCopiedId(tip.id);
      setTimeout(() => setCopiedId((cur) => (cur === tip.id ? null : cur)), 1500);
    }
  };

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-glow-amber">
          <span>⚡</span> Bí Kíp Giải Nhanh Trắc Nghiệm Toán 10
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-star tracking-tight mb-4">
          Cẩm Nang{" "}
          <span className="bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Bấm Máy Casio fx-580VNX & fx-880BTG
          </span>
        </h1>
        <p className="text-star-soft max-w-2xl mx-auto text-sm sm:text-base">
          Tuyển tập {CASIO_TIPS.length} thủ thuật bấm máy tính cầm tay giải nhanh trắc nghiệm Toán 10: Phương trình & Đỉnh Parabol, Bất phương trình bậc 2, Hệ PT, Tích vô hướng Vectơ, Lượng giác, Bảng Table Min/Max, Thống kê và Đại số tổ hợp.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-void-card/90 border border-void-border rounded-3xl p-4 sm:p-5 shadow-card backdrop-blur-xl mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-star-mute text-sm">
              🔍
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm thủ thuật, bài học..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-void-subtle border border-void-border text-star placeholder:text-star-mute focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition"
            />
          </div>

          {/* Bookmark Toggle Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                playClick();
                setShowBookmarkedOnly((prev) => !prev);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition ${
                showBookmarkedOnly
                  ? "bg-amber/20 border-amber/40 text-amber-glow shadow-glow-amber"
                  : "bg-void-subtle border-void-border text-star-soft hover:text-star hover:border-amber/30"
              }`}
            >
              <span>⭐</span>
              <span>Đã lưu ({bookmarks.length})</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-cyan/20 border border-cyan/40 text-cyan-glow shadow-glow-cyan font-bold"
                  : "bg-void-subtle border border-void-border text-star-soft hover:border-cyan/30 hover:text-star"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tips Grid */}
      {filteredTips.length === 0 ? (
        <div className="text-center py-16 bg-void-card/60 border border-void-border rounded-3xl p-8">
          <p className="text-4xl mb-3">🔍</p>
          <h3 className="text-lg font-bold text-star mb-1">Không tìm thấy thủ thuật phù hợp</h3>
          <p className="text-xs text-star-mute">Hãy thử từ khoá khác hoặc bỏ lọc để xem tất cả.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTips.map((tip) => {
            const isBookmarked = bookmarks.includes(tip.id);
            return (
              <div
                key={tip.id}
                className="group rounded-3xl border border-void-border bg-void-card/90 p-5 sm:p-6 shadow-card hover:border-cyan/40 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl p-2 rounded-2xl bg-void-subtle border border-void-border group-hover:scale-105 transition">
                        {tip.icon}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-glow">
                          {tip.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-star group-hover:text-cyan-glow transition">
                          <MathText content={tip.title} />
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => handleToggleBookmark(tip.id)}
                      title={isBookmarked ? "Bỏ lưu thủ thuật" : "Lưu thủ thuật"}
                      className={`p-2 rounded-xl text-sm transition ${
                        isBookmarked
                          ? "bg-amber/20 text-amber-glow border border-amber/40"
                          : "text-star-mute hover:text-amber-glow hover:bg-void-subtle"
                      }`}
                    >
                      {isBookmarked ? "⭐" : "☆"}
                    </button>
                  </div>

                  {/* Shortcut Banner */}
                  <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-void-subtle border border-void-border my-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-star">
                      <span className="text-amber-glow font-bold">Phím bấm:</span>
                      <span className="text-cyan-glow font-semibold select-all">
                        <MathText content={tip.shortcut} />
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyShortcut(tip)}
                      className="text-[11px] font-mono px-2 py-1 rounded-lg bg-void-border text-star-soft hover:text-star hover:bg-cyan/20 transition flex items-center gap-1"
                    >
                      {copiedId === tip.id ? "✓ Đã chép" : "Sao chép"}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-star-soft mb-4 leading-relaxed">
                    <MathText content={tip.description} />
                  </p>

                  {/* Step by step */}
                  <div className="space-y-2 mb-4 bg-void-subtle/50 p-3.5 rounded-2xl border border-void-border/70">
                    <p className="text-[11px] font-bold text-star uppercase tracking-wider">
                      Các bước thao tác:
                    </p>
                    {tip.steps.map((st, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs">
                        <span className="px-2 py-0.5 rounded-md bg-void-border text-cyan-glow font-mono font-bold text-[10px] shrink-0 mt-0.5">
                          <MathText content={st.key} />
                        </span>
                        <span className="text-star-soft leading-relaxed">
                          <MathText content={st.note} />
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Example Box */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan/10 to-violet/10 border border-cyan/20 text-xs space-y-1.5 mb-3">
                    <p className="font-bold text-star flex items-center gap-1.5">
                      <span>💡</span>
                      <span>Ví dụ áp dụng:</span>
                    </p>
                    <p className="text-star-soft">
                      <strong>Đề bài:</strong> <MathText content={tip.example.problem} />
                    </p>
                    <p className="text-star-soft">
                      <strong>Bấm máy:</strong> <MathText content={tip.example.action} />
                    </p>
                    <p className="text-emerald-glow font-semibold">
                      <strong>Kết quả:</strong> <MathText content={tip.example.result} />
                    </p>
                  </div>

                  {/* Pitfall note */}
                  {tip.pitfall && (
                    <div className="p-3 rounded-2xl bg-amber/10 border border-amber/25 text-[11px] text-amber-200/90 leading-relaxed flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">⚠️</span>
                      <div>
                        <strong>Lưu ý tránh bẫy:</strong> <MathText content={tip.pitfall} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Lesson Tags Footer */}
                <div className="pt-4 mt-3 border-t border-void-border/80 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] text-star-mute uppercase font-bold">Bài học liên quan:</span>
                  {tip.lessonIds.map((lId) => (
                    <Link
                      key={lId}
                      href={`/luyen/${lId}`}
                      onClick={() => playClick()}
                      className="text-[11px] px-2 py-0.5 rounded-lg bg-void-subtle border border-void-border text-star-soft hover:text-cyan-glow hover:border-cyan/40 transition"
                    >
                      {LESSON_LOOKUP.get(lId) || lId}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
