# HƯỚNG DẪN QUY CHUẨN SỐ HÓA SGK & PHÁT TRIỂN NỘI DUNG TOÁN 10
> **Dự án:** Chinh Phục Toán 10 — Trường THPT Na Rì, tỉnh Thái Nguyên  
> **Bộ sách:** Kết nối tri thức với cuộc sống (Tập 1 & Tập 2)  
> **Cấu trúc thi chuẩn:** Ma trận đề thi mới của Bộ Giáo dục & Đào tạo (2025+)

---

## 📌 I. TỔNG QUAN TIÊU CHUẨN MỖI BÀI HỌC

Để đảm bảo toàn bộ website đạt chất lượng cao cấp, đồng bộ và chuyên nghiệp, mỗi bài học khi số hóa và nâng cấp **BẮT BUỘC** phải hoàn thiện đầy đủ 4 hợp phần sau:

1. **Trang SGK HTML Nguyên bản (`public/sgk/bai-XX.html`):**
   - Đầy đủ 100% nội dung sách giáo khoa từ trang đầu đến trang cuối của bài.
   - Cắt ảnh minh họa độ nét cao (200 DPI) từ bản scan gốc lưu tại `public/sgk/images/bai-XX/`.
   - Đầy đủ Khởi động, Hoạt động, Ví dụ, Luyện tập, Vận dụng, Hộp kiến thức, và toàn bộ Bài tập cuối bài có lời giải chi tiết ẩn/hiện `<details>`.
   - Tích hợp KaTeX, Dark Mode responsive, thanh tiến trình đọc trang.

2. **Ngân hàng Trắc nghiệm 4 lựa chọn (`data/questions/bai-XX.ts`):**
   - Đầy đủ **12 câu hỏi trắc nghiệm** đa tầng nhận thức (4 Nhận biết, 4 Thông hiểu, 4 Vận dụng).
   - Công thức toán chuẩn LaTeX kẹp giữa `$..$` hoặc `$$..$$`.
   - Đáp án chính xác và lời giải chi tiết từng bước.

3. **Ngân hàng Câu hỏi Đúng/Sai & Trả lời ngắn (`lib/extras.ts`):**
   - **2 câu chùm Đúng / Sai** (mỗi câu 4 mệnh đề a, b, c, d = tổng 8 mệnh đề) theo format đề thi tốt nghiệp mới.
   - **3 câu Trả lời ngắn / Tự luận Toán học** tính toán ra số cụ thể hoặc biểu thức rút gọn, có đối chiếu đáp án và lời giải.

4. **Lý thuyết tương tác "Tóm tắt & Khắc sâu" (`lib/theory.ts`):**
   - Xây dựng **5 chuyên đề chuyên sâu** với thẻ Cards, Bảng So sánh Compare, Quy trình giải toán Steps, và Hộp Cảnh báo bẫy thi thường gặp / Mẹo vàng.
   - Tích hợp **4 – 5 câu hỏi kiểm tra nhanh (Quick Check)** tương tác trực tiếp, có âm thanh đúng/sai và lời giải thích.
   - Tóm tắt 5 điểm cốt lõi ngắn gọn, dễ nhớ.

---

## 🛠️ II. QUY TRÌNH KĨ THUẬT CHI TIẾT TỪNG BƯỚC

### BƯỚC 1: Trích xuất và Cắt ảnh từ PDF SGK gốc
- File scan PDF nằm tại: `Toan_10_Theo_Bai/Bai_XX_...pdf`.
- Sử dụng Python với thư viện `fitz` (PyMuPDF) và `PIL` để render các trang thành ảnh PNG độ phân giải cao (200 DPI):
  ```python
  import fitz
  doc = fitz.open('Toan_10_Theo_Bai/Bai_XX_....pdf')
  for i, page in enumerate(doc):
      pix = page.get_pixmap(dpi=200)
      pix.save(f'Toan_10_Theo_Bai/extracted_pages_baiX/page_{i+1}.png')
  ```
- Dùng `PIL.Image.crop((left, top, right, bottom))` để cắt chính xác các sơ đồ, đồ thị, biểu đồ Ven, hình chụp thực tế và lưu vào thư mục:
  `public/sgk/images/bai-XX/`

### BƯỚC 2: Biên soạn file SGK HTML (`public/sgk/bai-XX.html`)
- File được lưu tại: `public/sgk/bai-XX.html` (ví dụ `bai-01.html`, `bai-02.html`, `bai-03.html`).
- **Cơ chế hoạt động:** Hệ thống Next.js tại `app/luyen/[baiId]/page.tsx` sẽ tự động kiểm tra `fs.existsSync(public/sgk/${baiId}.html)`. Nếu file tồn tại, tab **"Sách giáo khoa"** sẽ tự động kích hoạt và hiển thị qua iframe responsive!
- **Cấu trúc chuẩn của trang SGK HTML:**
  ```html
  <!doctype html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toán 10 - Bài X: ... (SGK Kết nối tri thức)</title>
    <!-- KaTeX CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"
      onload="renderMathInElement(document.body, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}], throwOnError: false });"></script>
    <style>
      /* Bộ theme Dark Mode đồng bộ với hệ thống: nền #090d16, thẻ #131b2e, viền #24324f */
    </style>
  </head>
  <body>
    <div id="progress-bar"></div>
    <div class="container">
      <!-- Header Banner & Objectives -->
      <!-- Tình huống mở đầu -->
      <!-- Các mục bài học 1, 2, 3... (HĐ, Hộp kiến thức, Ví dụ, Luyện tập, Vận dụng) -->
      <!-- Bài tập cuối bài (mỗi bài tập có <details><summary>Xem lời giải</summary>...</details>) -->
      <!-- Em có biết / Nhân vật lịch sử -->
      <!-- Nút quay lại học bài và luyện tập -->
    </div>
  </body>
  </html>
  ```

### BƯỚC 3: Mở rộng Ngân hàng Trắc nghiệm 4 lựa chọn (`data/questions/bai-XX.ts`)
- Mở rộng thành 12 câu hỏi chia đều 3 cấp độ:
  - **Câu 1 – 4 (Nhận biết):** Định nghĩa, công thức cơ bản, nhận diện mệnh đề, tập hợp, BPT.
  - **Câu 5 – 8 (Thông hiểu):** Thay số kiểm tra nghiệm, xác định miền nghiệm, phủ định lượng từ, giao/hợp khoảng.
  - **Câu 9 – 12 (Vận dụng):** Bài toán tham số $m$, bài toán kinh tế thực tế, đếm số nghiệm nguyên, tính diện tích miền nghiệm.
- Đảm bảo thuộc tính: `id`, `q`, `options` (4 phương án), `answer` (chỉ số 0, 1, 2 hoặc 3), `explain` (giải thích tỉ mỉ).

### BƯỚC 4: Bổ sung Ngân hàng Đúng/Sai & Tự luận (`lib/extras.ts`)
- Cấu trúc cho mỗi bài `bai-XX`:
  ```typescript
  "bai-XX": {
    tf: [
      {
        id: "bX-tf1",
        context: "Bối cảnh toán học cho 4 ý...",
        statements: [
          { text: "Ý a...", answer: true/false, explain: "..." },
          { text: "Ý b...", answer: true/false, explain: "..." },
          { text: "Ý c...", answer: true/false, explain: "..." },
          { text: "Ý d...", answer: true/false, explain: "..." }
        ]
      },
      {
        id: "bX-tf2",
        context: "Bối cảnh thứ hai...",
        statements: [ ... ]
      }
    ],
    essay: [
      { id: "bX-es1", q: "...", answer: "...", explain: "..." },
      { id: "bX-es2", q: "...", answer: "...", explain: "..." },
      { id: "bX-es3", q: "...", answer: "...", explain: "..." }
    ]
  }
  ```

### BƯỚC 5: Nâng cấp Lý thuyết "Tóm tắt & Khắc sâu" (`lib/theory.ts`)
- Cấu trúc cho mỗi bài `bai-XX`:
  - `intro`: Đoạn văn truyền cảm hứng và định hướng tư duy (2–3 câu).
  - `minutes`: 12.
  - `sections`: Mảng gồm **5 chuyên đề**, mỗi chuyên đề chứa các khối:
    - `kind: "text"`: Dẫn nhập ngắn gọn.
    - `kind: "cards"`: Phân loại kiến thức (tone: "nebula" | "plasma" | "cyber").
    - `kind: "compare"`: Đối sánh tương phản (Đúng vs Sai, Nên vs Tránh).
    - `kind: "steps"`: Quy trình 3 bước giải dạng toán điển hình.
    - `kind: "note"`: Hộp cảnh báo bẫy thi và mẹo vàng giải nhanh.
    - `kind: "check"`: Câu hỏi kiểm tra tương tác (có âm thanh Sound Effects và giải thích).
  - `summary`: 5 gạch đầu dòng cốt lõi cô đọng nhất của toàn bài.

### BƯỚC 6: Kiểm tra (Build) & Triển khai (Deploy)
1. **Kiểm thử cục bộ:**
   ```bash
   npm run build
   ```
   Yêu cầu: Biên dịch thành công 100%, 0 lỗi TypeScript, tất cả các trang `/luyen/bai-XX` được tạo tĩnh.
2. **Commit và Push lên GitHub:**
   ```bash
   git add .
   git commit -m "feat: hoan thien SGK HTML, trac nghiem va tom tat khac sau bai XX toan 10"
   git push origin main
   ```
3. **Kiểm tra trên Vercel:** Vercel tự động build và cập nhật phiên bản production trong vòng 1–2 phút.

---

## 📊 III. BẢNG TIẾN ĐỘ SỐ HÓA TOÁN 10 (SGK KẾT NỐI TRI THỨC)

| Bài | Tên bài học | SGK HTML & Ảnh | 12 Trắc nghiệm MCQ | 2 Chùm Đúng/Sai (8 ý) | 3 Câu Tự luận | Tóm tắt & Khắc sâu | Trạng thái |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Bài 1** | Mệnh đề | ✅ (9 ảnh) | ✅ 12 câu | ✅ 2 câu | ✅ 3 câu | ✅ 5 phần + 4 check | **HOÀN THÀNH 100%** |
| **Bài 2** | Tập hợp và các phép toán | ✅ (14 ảnh) | ✅ 12 câu | ✅ 2 câu | ✅ 3 câu | ✅ 5 phần + 4 check | **HOÀN THÀNH 100%** |
| **Bài 3** | Bất phương trình bậc nhất hai ẩn | ✅ (9 ảnh) | ✅ 12 câu | ✅ 2 câu | ✅ 3 câu | ✅ 5 phần + 5 check | **HOÀN THÀNH 100%** |
| **Bài 4** | Hệ bất phương trình bậc nhất hai ẩn | ⏳ Chờ làm | ⏳ 5 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Kế tiếp* |
| **Bài 5** | Giá trị lượng giác của một góc từ $0^\circ$ đến $180^\circ$ | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Chờ số hóa* |
| **Bài 6** | Hệ thức lượng trong tam giác | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Cơ bản | *Chờ số hóa* |
| **Bài 7** | Các khái niệm mở đầu (Vectơ) | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Chờ số hóa* |
| **Bài 8** | Tổng và hiệu của hai vectơ | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Chờ số hóa* |
| **Bài 9** | Tích của một vectơ với một số | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Chờ số hóa* |
| **Bài 10**| Vectơ trong mặt phẳng toạ độ | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Chờ số hóa* |
| **Bài 11**| Tích vô hướng của hai vectơ | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Chờ số hóa* |
| **Bài 12**| Số gần đúng và sai số | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Chờ số hóa* |
| **Bài 13**| Các số đặc trưng đo xu thế trung tâm | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Chờ số hóa* |
| **Bài 14**| Các số đặc trưng đo độ phân tán | ⏳ Chờ làm | ⏳ 6 câu | ⏳ 1 câu | ⏳ 1 câu | ⏳ Chưa có | *Chờ số hóa* |

---

## 🎯 IV. LƯU Ý KHI LÀM CÁC BÀI TIẾP THEO

1. **Font chữ và công thức KaTeX:** Không sử dụng dấu ngoặc đơn hay ngoặc vuông ngoài LaTeX khi viết công thức, luôn đưa toàn bộ công thức vào bên trong `$..$`.
2. **Kích thước ảnh:** Khi cắt ảnh từ trang PDF, loại bỏ viền thừa, căn đều 4 cạnh để ảnh hiển thị sắc nét nhất trên cả điện thoại và máy tính.
3. **Lời giải bài tập SGK:** Luôn trình bày đầy đủ các bước giải, từ việc đặt ẩn, đổi đơn vị đến kết luận cuối cùng.
4. **Deploy liên tục:** Sau mỗi bài hoàn thành, chạy `npm run build` kiểm tra trước khi push lên `origin main` để Vercel tự động cập nhật ngay cho học sinh sử dụng.
