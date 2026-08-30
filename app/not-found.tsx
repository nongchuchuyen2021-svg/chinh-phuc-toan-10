export default function NotFound() {
  return (
    <div className="text-center py-20 space-y-4">
      <h2 className="text-4xl font-extrabold text-slate-800">404</h2>
      <p className="text-sm text-slate-500">Bài học không tồn tại hoặc đang được cập nhật.</p>
      <a href="/" className="inline-block px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition">
        Quay lại trang chủ
      </a>
    </div>
  );
}
