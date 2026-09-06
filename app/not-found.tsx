import Link from "next/link";

export default function NotFound() {
  return (
    <main className="cosmos flex min-h-[70vh] items-center justify-center p-4">
      <div className="glass max-w-md w-full rounded-3xl p-8 text-center space-y-5 shadow-xl border border-indigo-100">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-2xl font-bold font-display">
          404
        </div>
        <div className="space-y-1">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Trang không tìm thấy
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Nội dung bài học này không tồn tại hoặc đang được cập nhật kiến thức mới.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-nebula hover:bg-nebula-deep text-white font-semibold text-xs shadow-glow transition"
          >
            ← Về trang chủ bài học
          </Link>
        </div>
      </div>
    </main>
  );
}
