import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center p-4">
      <div className="max-w-md w-full rounded-3xl p-8 text-center space-y-5 shadow-card border border-void-border bg-void-card/95 backdrop-blur-xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan/15 text-cyan-glow border border-cyan/30 flex items-center justify-center text-2xl font-bold font-mono shadow-glow-cyan">
          404
        </div>
        <div className="space-y-1">
          <h2 className="font-display text-xl font-bold text-star">
            Trang không tìm thấy
          </h2>
          <p className="text-xs sm:text-sm text-star-soft">
            Nội dung bài học hoặc đường dẫn này không tồn tại hoặc đã được chuyển dời.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan to-violet text-white font-mono font-bold text-xs shadow-glow-cyan hover:opacity-95 transition transform hover:scale-105"
          >
            ← Về trang chủ bài học
          </Link>
        </div>
      </div>
    </main>
  );
}
