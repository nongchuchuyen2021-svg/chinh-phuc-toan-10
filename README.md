# THPT Na Rì — Chinh Phục Toán 10

Hệ thống Website Học tập, Ôn luyện & Thi thử trắc nghiệm môn **Toán 10** theo SGK **Kết nối tri thức với cuộc sống** dành cho học sinh **Trường THPT Na Rì, tỉnh Thái Nguyên**.

---

## 📖 Tài liệu & Quy chuẩn Số hóa SGK
> 📄 Xem toàn bộ hướng dẫn quy chuẩn số hóa và phát triển nội dung chi tiết tại:  
> 👉 **[HUONG_DAN_SO_HOA_VA_PHAT_TRIEN.md](./HUONG_DAN_SO_HOA_VA_PHAT_TRIEN.md)**

Tài liệu trên bao gồm:
- Quy chuẩn cắt và tối ưu hình ảnh từ PDF gốc sang `public/sgk/images/bai-XX/`.
- Tiêu chuẩn trang SGK HTML nguyên bản 100% nội dung `public/sgk/bai-XX.html`.
- Ma trận 12 câu hỏi trắc nghiệm MCQ 3 mức độ nhận thức trong `data/questions/bai-XX.ts`.
- Ngân hàng Đúng/Sai (2 câu chùm, 8 mệnh đề) và Tự luận (3 câu) trong `lib/extras.ts`.
- Cấu trúc "Tóm tắt & Khắc sâu" 5 phần chuyên sâu, bẫy thi và câu hỏi Quick Check tương tác trong `lib/theory.ts`.
- Bảng tiến độ số hóa từng bài và quy trình build/deploy.

---

## 🌟 Tính năng nổi bật
* **Tích hợp KaTeX Math Rendering**: Hiển thị công thức Toán học ($\sqrt{x}$, $\vec{a}$, $\Delta$, phân số, hệ phương trình, khoảng/đoạn) siêu sắc nét.
* **Tích hợp SGK HTML nguyên bản**: Đọc trực tiếp toàn văn sách giáo khoa kèm hình vẽ gốc, hoạt động khám phá và lời giải bài tập cuối bài.
* **Đầy đủ 3 dạng thức câu hỏi chuẩn cấu trúc mới của Bộ GD&ĐT (2025+)**:
  1. Trắc nghiệm 4 lựa chọn (đảo ngẫu nhiên đáp án, giải thích chi tiết từng bước).
  2. Trắc nghiệm Đúng/Sai 4 mệnh đề (chấm điểm chuẩn barem 0.1 - 0.25 - 0.5 - 1.0 điểm).
  3. Trả lời ngắn / Tự luận Toán học có đối chiếu đáp số & phương pháp giải.
* **Tóm tắt & Khắc sâu tương tác**: Thẻ ghi nhớ trực quan, bảng so sánh đối sánh, các bước giải toán, cảnh báo bẫy thi thường gặp và câu hỏi kiểm tra nhanh có âm thanh phản hồi.
* **Sổ tay Công thức Toán 10 (`/cong-thuc`)**: Tra cứu tức thì công thức Đại số, Lượng giác, Hình học Vectơ, Toạ độ Oxy, Thống kê và Xác suất.
* **Phòng Thi thử Trực tuyến (`/thi-thu`)**: Đề thi thử giữa kì & cuối kì có đồng hồ đếm ngược, tự động chấm điểm chi tiết.
* **Lưu tiến độ Client-side**: Toàn bộ điểm số, lịch sử và câu sai lưu trên `localStorage` (không cần database hay đăng nhập).

---

## 🚀 Hướng dẫn chạy thử nghiệm
```bash
npm install
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:3010`

Build kiểm tra sản phẩm:
```bash
npm run build
```
