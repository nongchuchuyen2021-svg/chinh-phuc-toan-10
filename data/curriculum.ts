import type { Topic } from "@/lib/types";

// Cấu trúc SGK Toán 10 — Bộ sách Kết nối tri thức với cuộc sống.
// Trọn vẹn 9 chương & 27 bài học: Mệnh đề, Tập hợp, BPT, Hệ thức lượng, Vectơ, Thống kê, Hàm số bậc hai, Toạ độ phẳng Oxy, Đại số tổ hợp và Xác suất.

export const CURRICULUM: Topic[] = [
  {
    id: "chuong-1",
    name: "Chương I. Mệnh đề và tập hợp",
    emoji: "📐",
    lessons: [
      { id: "bai-01", title: "Bài 1. Mệnh đề", desc: "Mệnh đề, mệnh đề phủ định, mệnh đề kéo theo, mệnh đề tương đương, kí hiệu ∀ và ∃.", available: true },
      { id: "bai-02", title: "Bài 2. Tập hợp và các phép toán trên tập hợp", desc: "Tập hợp, tập hợp con, hợp, giao, hiệu và phần bù của hai tập hợp.", available: true },
    ],
  },
  {
    id: "chuong-2",
    name: "Chương II. Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    emoji: "📊",
    lessons: [
      { id: "bai-03", title: "Bài 3. Bất phương trình bậc nhất hai ẩn", desc: "Khái niệm, biểu diễn miền nghiệm của BPT bậc nhất hai ẩn trên mặt phẳng toạ độ.", available: true },
      { id: "bai-04", title: "Bài 4. Hệ bất phương trình bậc nhất hai ẩn", desc: "Biểu diễn miền nghiệm của hệ BPT bậc nhất hai ẩn và bài toán tối ưu hoá thực tế.", available: true },
    ],
  },
  {
    id: "chuong-3",
    name: "Chương III. Hệ thức lượng trong tam giác",
    emoji: "🔺",
    lessons: [
      { id: "bai-05", title: "Bài 5. Giá trị lượng giác của một góc từ 0° đến 180°", desc: "Định nghĩa sin, cos, tan, cot trên nửa đường tròn đơn vị và quan hệ lượng giác phụ, bù.", available: true },
      { id: "bai-06", title: "Bài 6. Hệ thức lượng trong tam giác", desc: "Định lí côsin, định lí sin, các công thức tính diện tích tam giác và giải tam giác.", available: true },
    ],
  },
  {
    id: "chuong-4",
    name: "Chương IV. Vectơ",
    emoji: "↗️",
    lessons: [
      { id: "bai-07", title: "Bài 7. Các khái niệm mở đầu về vectơ", desc: "Vectơ, độ dài vectơ, hai vectơ cùng phương, cùng hướng, vectơ bằng nhau, vectơ-không.", available: true },
      { id: "bai-08", title: "Bài 8. Tổng và hiệu của hai vectơ", desc: "Quy tắc ba điểm, quy tắc hình bình hành, quy tắc hiệu và tính chất của phép cộng vectơ.", available: true },
      { id: "bai-09", title: "Bài 9. Tích của một vectơ với một số", desc: "Định nghĩa, tính chất, điều kiện để hai vectơ cùng phương, toạ độ trung điểm và trọng tâm.", available: true },
      { id: "bai-10", title: "Bài 10. Vectơ trong mặt phẳng toạ độ", desc: "Toạ độ của vectơ, toạ độ của điểm, các phép toán toạ độ trên hệ trục Oxy.", available: true },
      { id: "bai-11", title: "Bài 11. Tích vô hướng của hai vectơ", desc: "Góc giữa hai vectơ, định nghĩa tích vô hướng, biểu thức toạ độ và ứng dụng tính góc, độ dài.", available: true },
    ],
  },
  {
    id: "chuong-5",
    name: "Chương V. Các số đặc trưng của mẫu số liệu không ghép nhóm",
    emoji: "📈",
    lessons: [
      { id: "bai-12", title: "Bài 12. Số gần đúng và sai số", desc: "Số gần đúng, sai số tuyệt đối, sai số tương đối, quy tròn số gần đúng.", available: true },
      { id: "bai-13", title: "Bài 13. Các số đặc trưng đo xu thế trung tâm", desc: "Số trung bình, trung vị, tứ phân vị, mốt của mẫu số liệu.", available: true },
      { id: "bai-14", title: "Bài 14. Các số đặc trưng đo độ phân tán", desc: "Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn.", available: true },
    ],
  },
  {
    id: "chuong-6",
    name: "Chương VI. Hàm số, đồ thị và ứng dụng",
    emoji: "📉",
    lessons: [
      { id: "bai-15", title: "Bài 15. Hàm số", desc: "Khái niệm hàm số, tập xác định, tập giá trị, đồ thị và tính đơn điệu của hàm số.", available: true },
      { id: "bai-16", title: "Bài 16. Hàm số bậc hai", desc: "Đồ thị hàm số bậc hai parabol, đỉnh, trục đối xứng và sự biến thiên.", available: true },
      { id: "bai-17", title: "Bài 17. Dấu của tam thức bậc hai", desc: "Định lí về dấu của tam thức bậc hai và bất phương trình bậc hai một ẩn.", available: true },
      { id: "bai-18", title: "Bài 18. Phương trình quy về phương trình bậc hai", desc: "Phương trình chứa căn bậc hai dạng √(ax²+bx+c) = √(dx²+ex+f) và √(ax²+bx+c) = dx+e.", available: true },
    ],
  },
  {
    id: "chuong-7",
    name: "Chương VII. Phương pháp toạ độ trong mặt phẳng",
    emoji: "🎯",
    lessons: [
      { id: "bai-19", title: "Bài 19. Phương trình đường thẳng", desc: "Vectơ pháp tuyến, vectơ chỉ phương, PT tham số và PT tổng quát của đường thẳng.", available: true },
      { id: "bai-20", title: "Bài 20. Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách", desc: "Vị trí tương đối, công thức tính góc giữa hai đường thẳng và khoảng cách từ điểm đến đường thẳng.", available: true },
      { id: "bai-21", title: "Bài 21. Đường tròn trong mặt phẳng toạ độ", desc: "Phương trình đường tròn, tâm và bán kính, phương trình tiếp tuyến của đường tròn.", available: true },
      { id: "bai-22", title: "Bài 22. Ba đường conic", desc: "Định nghĩa, phương trình chính tắc và các yếu tố hình học của elip, hypebol, parabol.", available: true },
    ],
  },
  {
    id: "chuong-8",
    name: "Chương VIII. Đại số tổ hợp",
    emoji: "🎲",
    lessons: [
      { id: "bai-23", title: "Bài 23. Quy tắc đếm", desc: "Quy tắc cộng, quy tắc nhân và sơ đồ hình cây trong các bài toán đếm.", available: true },
      { id: "bai-24", title: "Bài 24. Hoán vị, chỉnh hợp và tổ hợp", desc: "Định nghĩa và công thức tính số hoán vị P_n, chỉnh hợp A_n^k, tổ hợp C_n^k.", available: true },
      { id: "bai-25", title: "Bài 25. Nhị thức Newton", desc: "Công thức khai triển nhị thức Newton (a+b)⁴ và (a+b)⁵.", available: true },
    ],
  },
  {
    id: "chuong-9",
    name: "Chương IX. Tính xác suất theo định nghĩa cổ điển",
    emoji: "🎯",
    lessons: [
      { id: "bai-26", title: "Bài 26. Biến cố và định nghĩa cổ điển của xác suất", desc: "Không gian mẫu, biến cố, định nghĩa cổ điển xác suất P(A) = n(A)/n(Ω).", available: true },
      { id: "bai-27", title: "Bài 27. Thực hành tính xác suất theo định nghĩa cổ điển", desc: "Sử dụng các quy tắc đếm, hoán vị, chỉnh hợp, tổ hợp để tính xác suất biến cố.", available: true },
    ],
  },
];

export function findLesson(lessonId: string) {
  for (const topic of CURRICULUM) {
    const found = topic.lessons.find((l) => l.id === lessonId);
    if (found) return { lesson: found, topic };
  }
  return null;
}
