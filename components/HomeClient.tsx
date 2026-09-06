"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getProgress } from "@/lib/progress";
import type { LessonCounts, ProgressMap } from "@/lib/types";
import MathText from "@/components/MathText";

/* ─── Particle Canvas Background ─────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 16000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        a: Math.random() * 0.5 + 0.25,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(99, 102, 241, ${p.a * 0.4})`;
        ctx!.fill();
      }

      // Đường liên kết giữa các hạt gần nhau
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(2, 132, 199, ${0.12 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

/* ─── Progress Ring ───────────────────────────────────────────────────────── */
function ProgressRing({ done, total, size = 72 }: { done: number; total: number; size?: number }) {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = total > 0 ? done / total : 0;
  const offset = circumference * (1 - pct);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="drop-shadow-sm">
        <circle
          stroke="rgba(99, 102, 241, 0.15)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="url(#purpleGradient)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%", transition: "stroke-dashoffset 0.8s ease" }}
        />
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="font-display text-xs font-bold text-slate-900">{Math.round(pct * 100)}%</span>
      </div>
    </div>
  );
}

export default function HomeClient({ counts }: { counts: Record<string, LessonCounts> }) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [search, setSearch] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const totalLessons = CURRICULUM.reduce((acc, t) => acc + t.lessons.length, 0);
  const completedLessons = CURRICULUM.flatMap((t) => t.lessons).filter(
    (l) => (progress[l.id]?.best ?? 0) >= 80
  ).length;

  return (
    <main className="cosmos relative min-h-screen pb-20">
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 space-y-10">
        {/* ─── Hero Section ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-sky-700 p-6 sm:p-10 text-white shadow-xl shadow-indigo-900/10">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-wide uppercase text-indigo-100 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              THPT Na Rì • Môn Toán 10 • KNTT
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Chinh Phục Toán 10
            </h1>

            <p className="text-sm sm:text-base text-indigo-100 leading-relaxed max-w-2xl font-normal">
              Không gian tự học thế hệ mới theo bộ sách <strong>Kết nối tri thức với cuộc sống</strong>. Tích hợp KaTeX sắc nét, ngân hàng câu hỏi 3 dạng thức thi mới của Bộ GD&ĐT, Sổ tay công thức tra cứu tức thì và Phòng thi thử trực tuyến.
            </p>

            {/* Quick Metrics */}
            <div className="pt-3 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <ProgressRing done={completedLessons} total={totalLessons} />
                <div>
                  <div className="text-xl font-bold font-display text-white">
                    {completedLessons} / {totalLessons} bài
                  </div>
                  <div className="text-xs text-indigo-200">Đạt thành tích cao (≥ 80%)</div>
                </div>
              </div>

              <div className="h-10 w-px bg-white/20 hidden sm:block"></div>

              <div className="flex gap-3">
                <Link
                  href="/cong-thuc"
                  className="px-4 py-2.5 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-semibold text-xs sm:text-sm shadow-md transition flex items-center gap-2"
                >
                  📖 Sổ tay công thức
                </Link>
                <Link
                  href="/thi-thu"
                  className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs sm:text-sm shadow-md transition flex items-center gap-2"
                >
                  ⏱️ Phòng thi thử
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute right-12 top-8 text-white/10 font-mono text-8xl font-black select-none pointer-events-none hidden lg:block">
            ∑ ∫ √π
          </div>
        </section>

        {/* ─── Filter & Search Bar ───────────────────────────────────────── */}
        <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm bài học, khái niệm (Mệnh đề, Parabol, Vectơ...)"
              className="w-full px-4 py-3 pl-11 rounded-2xl glass text-sm focus:outline-none focus:ring-2 focus:ring-nebula shadow-sm border border-slate-200 placeholder:text-slate-400"
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
              onClick={() => setSelectedChapter("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedChapter === "all"
                  ? "bg-nebula text-white shadow-glow"
                  : "glass text-slate-700 hover:bg-indigo-50/70"
              }`}
            >
              Tất cả 9 chương
            </button>
            {CURRICULUM.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedChapter(topic.id)}
                className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                  selectedChapter === topic.id
                    ? "bg-nebula text-white shadow-glow"
                    : "glass text-slate-600 hover:bg-indigo-50/70"
                }`}
              >
                {topic.emoji} {topic.name.split(".")[0]}
              </button>
            ))}
          </div>
        </section>

        {/* ─── Chapter List & Lessons ────────────────────────────────────── */}
        <section className="space-y-8">
          {CURRICULUM.map((topic) => {
            if (selectedChapter !== "all" && selectedChapter !== topic.id) return null;

            const filteredLessons = topic.lessons.filter(
              (l) =>
                l.title.toLowerCase().includes(search.toLowerCase()) ||
                (l.desc && l.desc.toLowerCase().includes(search.toLowerCase()))
            );

            if (filteredLessons.length === 0) return null;

            return (
              <div key={topic.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100/80 text-indigo-700 flex items-center justify-center text-lg shadow-sm">
                    {topic.emoji}
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-slate-900 text-lg sm:text-xl">
                      {topic.name}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {filteredLessons.map((lesson) => {
                    const c = counts[lesson.id] ?? { mcq: 0, tf: 0, essay: 0, theory: true };
                    const prog = progress[lesson.id];
                    const bestScore = prog?.best ?? null;

                    return (
                      <Link
                        key={lesson.id}
                        href={`/luyen/${lesson.id}`}
                        className="group relative flex flex-col justify-between p-5 rounded-2xl glass hover:border-indigo-300 hover:shadow-glass-hover transition duration-200"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                              {lesson.id.toUpperCase()}
                            </span>

                            {bestScore !== null ? (
                              <span
                                className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                                  bestScore >= 80
                                    ? "bg-emerald-100 text-emerald-800"
                                    : bestScore >= 50
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-rose-100 text-rose-800"
                                }`}
                              >
                                Đã đạt: {bestScore}%
                              </span>
                            ) : (
                              <span className="text-[11px] text-slate-400 font-medium">Chưa học</span>
                            )}
                          </div>

                          <h3 className="mt-3 font-display font-bold text-slate-900 text-base group-hover:text-nebula transition leading-snug">
                            {lesson.title}
                          </h3>

                          {lesson.desc && (
                            <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                              {lesson.desc}
                            </p>
                          )}
                        </div>

                        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                            <span className="inline-flex items-center gap-1">
                              📝 {c.mcq} trắc nghiệm
                            </span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-1">
                              ⚖️ {c.tf} đúng/sai
                            </span>
                          </div>

                          <span className="text-xs font-semibold text-nebula flex items-center gap-1 group-hover:translate-x-0.5 transition">
                            Học ngay →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
