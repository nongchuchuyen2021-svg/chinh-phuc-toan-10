// Quản lý đường dẫn slide bài giảng điện tử tương tác cho các bài học Toán 10

const SLIDE_MAP: Record<string, string> = {
  "bai-01": "/bai-01-trinh-chieu.html",
};

export function getSlideUrl(lessonId: string): string | null {
  return SLIDE_MAP[lessonId] ?? null;
}
