// Quản lý đường dẫn slide bài giảng điện tử tương tác cho các bài học Toán 10

const SLIDE_MAP: Record<string, string> = {
  "bai-01": "/bai-01-trinh-chieu.html",
  "bai-02": "/bai-02-trinh-chieu.html",
  "bai-03": "/bai-03-trinh-chieu.html",
  "bai-04": "/bai-04-trinh-chieu.html",
  "bai-05": "/bai-05-trinh-chieu.html",
  "bai-06": "/bai-06-trinh-chieu.html",
  "bai-07": "/bai-07-trinh-chieu.html",
  "bai-08": "/bai-08-trinh-chieu.html",
};

export function getSlideUrl(lessonId: string): string | null {
  return SLIDE_MAP[lessonId] ?? null;
}
