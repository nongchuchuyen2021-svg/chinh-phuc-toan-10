"use client";

export default function VectorMissionLab() {
  return <section className="rounded-3xl border border-cyan/40 bg-void-card overflow-hidden">
    <div className="p-5 space-y-2"><h3 className="text-xl font-bold text-cyan-glow">Xưởng tự dựng vectơ</h3><p className="text-sm text-star-soft">Chọn nhiệm vụ, đặt điểm D, kiểm tra và sửa theo phản hồi. Cả ba nhiệm vụ dùng chung với bản trình chiếu.</p><a className="inline-block underline text-sm text-cyan-glow" href="/bai-07-trinh-chieu.html?lab=1" target="_blank" rel="noopener">Mở xưởng ở tab riêng ↗</a></div>
    <iframe title="Xưởng tự dựng vectơ Bài 7: ba nhiệm vụ có phản hồi" src="/bai-07-trinh-chieu.html?lab=1" className="w-full h-[1120px] md:h-[740px] border-0" loading="lazy" />
  </section>;
}
