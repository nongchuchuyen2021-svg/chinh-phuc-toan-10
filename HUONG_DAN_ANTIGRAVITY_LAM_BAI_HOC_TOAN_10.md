# Hướng dẫn Antigravity xây dựng trọn bộ bài học Toán 10

**Mẫu chất lượng: Bài 5 và Bài 6 trên website Chinh Phục Toán 10**  
**Đối tượng sử dụng:** Antigravity hoặc công cụ lập trình AI tiếp nhận dự án.  
**Ngày biên soạn:** 15/10/2026.  
**Thư mục dự án trên máy thầy:** `E:\du-an\chinh-phuc-toan-10`.  
**Website:** <https://chinh-phuc-toan-10.vercel.app>.

Tài liệu này là hướng dẫn thực hiện đầy đủ một bài học, không chỉ tạo slide. Mục tiêu là giúp học sinh **nhìn hình để hiểu, tự thao tác, tự tính, nhận phản hồi và sửa sai**; giúp giáo viên trình chiếu thuận tiện; giúp người phát triển kiểm chứng và duy trì nội dung.

Các đường dẫn bên dưới tính từ thư mục gốc dự án. Đọc mã nguồn hiện tại trước khi sửa vì nội dung có thể đã được bổ sung sau ngày biên soạn.

**Cách dùng nhanh cho thầy:** gửi tệp này cùng PDF SGK và tên bài cần làm; sao chép mẫu yêu cầu ở mục 15; ghi rõ làm bản xem trước hay cập nhật luôn GitHub/Vercel. Antigravity cần được mở đúng thư mục dự án để đọc các tệp mẫu.

**Ưu tiên đặc biệt về công thức:** đọc và thực hiện mục 17 trước khi viết nội dung toán. Build thành công và KaTeX không báo lỗi vẫn chưa đủ để kết luận công thức đúng.

**Bản tham chiếu trực quan:** [Slide Bài 5](https://chinh-phuc-toan-10.vercel.app/bai-05-trinh-chieu.html), [Slide Bài 6](https://chinh-phuc-toan-10.vercel.app/bai-06-trinh-chieu.html), [Bài học theo SGK Bài 5](https://chinh-phuc-toan-10.vercel.app/sgk/bai-05.html). Xem cả các trang giữa và các hoạt động, không chỉ bìa.

## 1. Yêu cầu đầu ra và nguyên tắc quyết định

Một bài hoàn chỉnh có tám phân hệ:

| Phân hệ | Sản phẩm cần có | Học sinh làm được gì? |
|---|---|---|
| Tóm tắt & Khắc sâu | Lý thuyết có hình, ví dụ, điều kiện áp dụng, câu kiểm tra nhanh | Tự đọc, giải thích công thức và nhận diện sai lầm |
| Slide trình chiếu | Bài giảng HTML tương tác, hiện từng ý, mục lục, mô phỏng | Quan sát, dự đoán, thao tác, kiểm tra kết luận |
| Bài học theo SGK | Trang HTML bám sách, hình gốc, bài tập đúng đề, lời giải bổ sung có nhãn | Đối chiếu sách và tự học |
| Trò chơi | Phân loại, ghép đôi hoặc hoạt động phù hợp nội dung | Luyện phản xạ có giải thích |
| Trắc nghiệm | Ngân hàng khoảng 12 câu trở lên, có lời giải, đúng một đáp án | Luyện từ nhận biết đến vận dụng |
| Đúng/Sai | Tối thiểu hai tình huống, mỗi tình huống bốn ý | Đọc giả thiết, kiểm tra từng nhận định |
| Trả lời ngắn/Tự luận | Khoảng ba bài có đáp số và lời giải | Tự tính rồi đối chiếu |
| Ôn tập tổng kết | Sơ đồ kiến thức, lỗi thường gặp, flashcard, checklist | Tự đánh giá và biết phần cần ôn |

Số lượng câu trên là mốc thiết kế cho bài mới. Nếu bài hiện tại đã có nhiều câu tốt hơn, giữ và kiểm tra chúng; không cắt cho vừa số lượng. **Số slide cũng phụ thuộc kiến thức, không tăng số trang chỉ để trông nhiều hơn.** Bài 5 có 20 slide, Bài 6 có 26 slide.

### Nguyên tắc phải giữ

1. Đúng kiến thức và đúng đề SGK trước khi trang trí.
2. Mỗi tương tác phải trả lời được một câu hỏi học tập cụ thể.
3. Hình phải được tính từ cùng số liệu với công thức, không vẽ một tam giác rồi gắn số của tam giác khác.
4. Đáp án, lời giải, phản hồi và điểm số phải nhất quán.
5. Phân biệt rõ nội dung lấy từ sách với ví dụ, gợi ý, mô phỏng do người soạn bổ sung.
6. Kiểm tra sản phẩm thật trong trình duyệt, ở màn hình chiếu và điện thoại.
7. Hoàn thành cả đường dẫn tích hợp trong bài học, không chỉ tạo một tệp HTML nằm riêng.

## 2. Đọc gì trước khi làm?

### 2.1. Tệp tham chiếu trong dự án

| Mục đích | Tệp/thư mục tham chiếu |
|---|---|
| Nội dung và danh sách bài | `data/curriculum.ts` |
| Kiểu dữ liệu chính xác | `lib/types.ts` |
| Trang ghép các phân hệ | `app/luyen/[baiId]/page.tsx` |
| Danh mục, chế độ iframe, mô tả số slide | `components/LessonClient.tsx` |
| Lý thuyết | `lib/theory.ts`, `components/TheoryViewer.tsx` |
| Phòng khám phá lượng giác trong lý thuyết Bài 5 | `components/TrigUnitCircleLab.tsx` |
| Phòng giải tam giác trong lý thuyết Bài 6 | `components/TriangleSolverLab.tsx` |
| Trắc nghiệm | `data/questions/bai-05.ts`, `data/questions/bai-06.ts`, `lib/questions.ts` |
| Đúng/Sai và tự luận | `lib/extras.ts` |
| Ôn tập | `lib/reviews.ts` |
| Trò chơi và đăng ký trò chơi | `data/games/bai-05.ts`, `data/games/bai-06.ts`, `lib/games.ts` |
| Hiển thị trò chơi | `components/GameHub.tsx`, `components/SortGame.tsx`, `components/MatchGame.tsx` |
| Chấm điểm và lưu tiến độ | `components/QuizClient.tsx`, `components/TrueFalseQuiz.tsx`, `components/EssayViewer.tsx`, `lib/progress.ts` |
| Công thức và mẹo máy tính | `lib/formulas.ts` nếu có, `data/casio-tips.ts`, các trang `/cong-thuc`, `/casio` |
| Đăng ký slide | `lib/slides.ts` |
| Nguồn slide Bài 5 | `scripts/slide-bai-05/` |
| Nguồn slide Bài 6 | `scripts/slide-bai-06/` |
| Tạo tệp slide | `scripts/build_slide_bai_05.mjs`, `scripts/build_slide_bai_06.mjs` |
| Tạo bài học theo SGK Bài 5 | `scripts/build_sgk_bai_05.mjs` |
| Kiểm tra toán học Bài 5 | `scripts/check_lesson_bai_05.mjs` |
| Kiểm tra mô phỏng và slide Bài 6 | `scripts/check_slide_bai_06.mjs` |

Hai phòng thí nghiệm React nằm trong phần lý thuyết và các mô phỏng của slide là **hai nơi triển khai khác nhau**. Sửa một nơi không tự động sửa nơi còn lại. Cần kiểm tra tính nhất quán khi thay công thức hay dữ kiện.

### 2.2. Tài liệu nguồn

- Bài 5: `Toan_10_Theo_Bai/Bai_05_Gia_tri_luong_giac_cua_mot_goc_tu_0_den_180.pdf`, SGK trang 33–37.
- Bài 6: `Toan_10_Theo_Bai/Bai_06_He_thuc_luong_trong_tam_giac.pdf`, SGK trang 38–43.
- Bài mới: tìm đúng PDF tương ứng trong `Toan_10_Theo_Bai/` hoặc tài liệu thầy cung cấp.

Đọc hướng dẫn cũ của dự án để hiểu bối cảnh, nhưng không sao chép máy móc các khẳng định như “nguyên bản 100%” hay mẫu dùng CDN. Mẫu Bài 5 đã sửa dùng nhãn minh bạch về phần biên soạn và đóng gói công thức để dùng ngoại tuyến.

Nếu cần soạn theo một bộ sách khác, phải xác nhận bộ sách và tên bài từ tài liệu, không suy đoán theo số thứ tự.

## 3. Quy trình thực hiện từ đầu đến cuối

### Bước 1 — Khảo sát và bảo toàn công việc hiện có

```powershell
Set-Location 'E:\du-an\chinh-phuc-toan-10'
git status --short
git log -3 --oneline
```

- Đọc `AGENTS.md` nếu có trong thư mục dự án hoặc thư mục cha.
- Ghi lại các tệp đã có thay đổi trước khi bắt đầu.
- Không ghi đè, khôi phục hoặc commit các thay đổi không thuộc công việc được giao.
- Kiểm tra giao diện và nội dung hiện có; bổ sung phần thiếu thay vì viết lại toàn bộ không cần thiết.
- Không đọc, in hoặc đưa khóa bí mật trong `.env*`, thông tin đăng nhập, khóa dịch vụ vào tài liệu hoặc Git.

### Bước 2 — Đọc SGK và lập bảng bao phủ nội dung

Lập bảng trước khi viết giao diện:

| Trang | Mục/hoạt động trong sách | Dữ kiện gốc | Nội dung đưa lên web | Tương tác phù hợp | Đã đối chiếu? |
|---|---|---|---|---|---|
| … | Khởi động/Hoạt động/Ví dụ/Luyện tập/Vận dụng/Bài tập | Chép chính xác | SGK, lý thuyết, slide, bài tập | Kéo góc/chọn đáp án/nhập số… | Có/Chưa |

PDF scan có thể không trích xuất được chữ. Kết quả rỗng không có nghĩa sách không có nội dung. Phải render trang thành ảnh và đọc trực quan.

Ví dụ dùng PyMuPDF khi môi trường có thư viện:

```python
from pathlib import Path
import fitz

source = Path('Toan_10_Theo_Bai/Bai_06_He_thuc_luong_trong_tam_giac.pdf')
target = Path('tmp/bai-06/sgk-review')
target.mkdir(parents=True, exist_ok=True)
with fitz.open(source) as doc:
    for i, page in enumerate(doc):
        page.get_pixmap(dpi=140).save(target / f'page-{i+1}.png')
```

Đối với hình cắt riêng, ưu tiên khoảng 180–220 DPI. Kiểm tra cả nhãn điểm, số liệu, chú thích, đầu mũi tên và phần sát mép ảnh. Không cắt mất dữ kiện để hình trông gọn hơn.

### Bước 3 — Chốt đáp án trước khi lập trình

- Tính độc lập từng ví dụ và bài tập.
- Lập bảng gồm giả thiết, điều kiện áp dụng, kết quả chính xác, kết quả làm tròn, đơn vị.
- Với biểu thức phức tạp, kiểm tra bằng cách tính số độc lập.
- Với công thức có tham số, thử nhiều giá trị và các trường hợp biên.
- Chốt quy tắc chấm trước khi viết lời giải và trò chơi.

Không lấy nội dung đang có trên web làm nguồn đúng duy nhất. Bài 5 từng có đề bài SGK bị thay bằng đề khác và một câu có hai phương án tương đương cùng đúng.

### Bước 4 — Thiết kế hành trình học

Một chặng kiến thức nên đi theo trình tự:

1. Nêu một câu hỏi hoặc tình huống rõ ràng.
2. Cho học sinh dự đoán.
3. Cho thao tác hoặc quan sát hình biến đổi.
4. Chốt công thức và điều kiện.
5. Giải một ví dụ theo từng bước.
6. Cho bài tự làm với phản hồi cụ thể.
7. Chỉ ra một lỗi dễ mắc và cách kiểm tra lại.

Viết kế hoạch này thành đề cương trước khi dựng slide. Tách slide khi có hai nhiệm vụ nhận thức khác nhau, không chia một câu ngắn thành nhiều trang để tăng số lượng.

### Bước 5 — Làm đầy đủ tám phân hệ

Thực hiện theo hướng dẫn các mục 4–10 dưới đây. Dùng chung dữ kiện, cách gọi tên, công thức và kết quả giữa các phân hệ.

### Bước 6 — Tích hợp, kiểm tra và bàn giao

Thực hiện mục 11–14. Không kết luận “hoàn thành” chỉ vì mã không báo lỗi hoặc trang đầu nhìn đẹp.

## 4. Thiết kế hình thức giống tinh thần Bài 5–6

### 4.1. Màu sắc và bố cục

Mẫu Bài 6 dùng nền tối, chữ sáng và màu nhấn có ý nghĩa:

| Vai trò | Màu tham khảo |
|---|---|
| Nền | `#081321` |
| Chữ chính | `#eef5ff` |
| Chữ phụ | `#b3c5d8` |
| Nhấn xanh | `#79e3d1` |
| Nhấn vàng | `#ffd28b` |
| Nhấn hồng | `#ffacbd` |
| Phản hồi đúng | `#9de4b6` |

- Duy trì ý nghĩa màu xuyên suốt: ví dụ cạnh a màu vàng, b màu xanh, c màu hồng trong mô hình Bài 6.
- Một slide thường có tiêu đề, một câu dẫn, một vùng hình lớn và một vùng giải thích/thao tác.
- Tỉ lệ hai cột xấp xỉ `1.08fr 1fr` hoặc `1fr 1fr`; trên điện thoại chuyển một cột.
- Hình phải đủ lớn để học sinh nhìn từ xa; nhãn đặt gần cạnh hoặc điểm liên quan.
- Không dùng toàn bộ slide làm nhiều thẻ nhỏ giống bảng điều khiển. Dùng khoảng trống và hình làm trọng tâm.
- Không đưa thuật ngữ triển khai vào giao diện học sinh, như “state”, “API”, “render”, “deploy”.

### 4.2. Cỡ chữ và khả năng đọc

- Tiêu đề trên máy chiếu thường khoảng 30–44 px tùy chiều dài.
- Nội dung chính thường khoảng 19–24 px; công thức có thể lớn hơn.
- Chú thích phụ khoảng 14–17 px; không đặt kiến thức bắt buộc vào dòng chữ quá nhỏ.
- Nếu chật: rút gọn câu, bỏ phần lặp, chia nhiệm vụ hoặc chuyển sang hiện từng bước trước khi giảm cỡ chữ.
- Mặc định kiểm tra ở 1280 × 720 và thêm một màn hình lớn hơn; điện thoại khoảng 390 × 844.
- Mục tiêu là nội dung chính vừa màn hình chiếu sau khi hiện hết. Điện thoại được cuộn dọc, nhưng không tràn ngang toàn trang.

### 4.3. Hiệu ứng có mục đích

Nên dùng: hiện ý, vẽ đường, làm nổi phần đang giải thích, chuyển điểm theo thao tác, phản hồi đáp án, tiến trình giải bài.

- Hiện ý thường khoảng 0,3–0,5 giây; không để giáo viên phải đợi hiệu ứng dài.
- Âm thanh mặc định tắt, chỉ phát sau thao tác bật của người dùng.
- Có nút bật/tắt hiệu ứng và tôn trọng `prefers-reduced-motion`.
- Khi tắt animation, hình vẫn phải hiện đủ. Với SVG có `stroke-dashoffset`, cần đặt về 0 khi tắt hiệu ứng.
- Mô phỏng tự chạy phải có tạm dừng; dừng khi rời slide hoặc ẩn tab.
- Không dùng nhấp nháy, âm thanh liên tục hoặc chuyển động trang trí làm phân tán nội dung.

## 5. Cách xây dựng slide HTML tương tác

### 5.1. Cấu trúc nguồn

Giữ cách tách nguồn đã dùng trong hai bài:

```text
scripts/
  slide-bai-XX/
    base.css        # Bố cục, thanh điều khiển, typography, responsive
    deck.css        # Kiểu riêng của bài
    content.js      # Đề cương sections[], nội dung, ngân hàng quiz
    engine.js       # Chuyển slide, hiện ý, mục lục, âm thanh, quiz
    activities.js   # Tính toán, vẽ hình, tương tác của bài
  build_slide_bai_XX.mjs
  check_slide_bai_XX.mjs
public/
  bai-XX-trinh-chieu.html
```

Đọc engine của bài mẫu trước khi tạo bài mới. Khi sao chép, đổi toàn bộ tiêu đề, số bài, mô tả, số slide, liên kết, nội dung `noscript`, ID hoạt động và vị trí các slide được tham chiếu trong mã.

Không sửa riêng bản HTML đã tạo rồi bỏ quên nguồn. **Sửa nguồn, chạy builder, kiểm tra lại tệp sinh ra.** Builder hiện tại còn tạo một bản HTML ở thư mục gốc để dùng riêng; bản phục vụ website nằm trong `public/`.

### 5.2. Mẫu một slide

Ví dụ theo cấu trúc Bài 6, sử dụng các helper đã định nghĩa trong `content.js`:

```javascript
{
  tag: '03 · PHÒNG KHÁM PHÁ',
  title: 'Hai cạnh cố định, góc mở ra thì sao?',
  lead: 'Giữ b = 8, c = 5. Kéo góc A và quan sát cạnh a.',
  note: 'Cho học sinh dự đoán trước. So sánh tại 45°, 90°, 120°.',
  html: `
    <div class="split">
      ${graph('cosine-lab', 'Tam giác có góc A thay đổi')}
      <div class="lab">
        <label class="control" for="cos-angle">
          Góc A <output id="cos-angle-value">60°</output>
          <input id="cos-angle" type="range" min="15" max="155" value="60">
        </label>
        <div id="cos-result" class="metric" aria-live="polite"></div>
      </div>
    </div>
  `
}
```

Đây là mẫu cấu trúc, không phải một tệp độc lập có thể chạy ngay. Phải bổ sung hàm cập nhật, giá trị ban đầu và phần đăng ký sự kiện trong `activities.js`.

### 5.3. Tính năng trình chiếu cần giữ

- Trang trước/trang sau, số trang thực tế, thanh tiến trình.
- Hiện ý tiếp, hiện hết, ẩn lại ý; không chỉ làm chữ mờ mà vẫn cho bấm nội dung chưa hiện.
- Mục lục nhảy đến từng slide, đóng được bằng thao tác rõ ràng.
- Bàn phím: phím mũi tên/Space để trình chiếu, F cho toàn màn hình, M cho âm thanh theo engine mẫu.
- Không chặn phím mũi tên và Space khi người dùng đang nhập liệu hoặc kéo slider bằng bàn phím.
- Gợi ý cho giáo viên từng slide: câu hỏi gợi mở, thời điểm dừng, điều cần kiểm tra; Bài 6 có nút gợi ý và phím N.
- Quiz có phản hồi, câu trước/sau, tổng điểm và làm lại; chọn lặp không cộng điểm hai lần.
- Đồng hồ hoạt động nhóm có bắt đầu, dừng, tiếp tục, đặt lại. Dùng thời điểm kết thúc để tính thời gian thay vì trừ cứng mỗi nhịp.
- Mỗi input có nhãn; nút chỉ có biểu tượng phải có tên truy cập được.
- Dùng `<button>` cho thao tác; có focus rõ khi dùng bàn phím.

### 5.4. Đóng gói để dùng ngoại tuyến

Hai builder mẫu nhúng KaTeX, CSS, JavaScript và phông công thức từ `node_modules/katex/dist/` vào một HTML. Hình tương tác được vẽ bằng SVG.

- Không tạo phụ thuộc CDN cho nội dung cốt lõi của slide.
- Sau khi tạo tệp, thử mở HTML tải về khi không có mạng.
- Các nút mở website luyện tập là liên kết trực tuyến; không gọi chúng là chức năng ngoại tuyến.
- Xử lí chuỗi chứa `</script>` khi ghép JavaScript vào HTML để không kết thúc thẻ sớm.
- Không đổi toàn bộ dấu gạch chéo hoặc dùng thay thế chuỗi mù quáng làm hỏng LaTeX.

## 6. Mẫu chi tiết Bài 5

**Tên bài:** Giá trị lượng giác của một góc từ 0° đến 180°.

### 6.1. Hành trình 20 slide

| Trang | Trọng tâm | Hành động học tập |
|---|---|---|
| 1 | Mở bài | Nêu mối liên hệ giữa điểm chuyển động và giá trị lượng giác |
| 2 | Câu hỏi về góc 120° | Dự đoán dấu rồi nhận phản hồi |
| 3 | Nửa đường tròn đơn vị | Kéo góc, đọc M và bốn giá trị |
| 4 | Định nghĩa | Hiện từng công thức và điều kiện |
| 5 | Dấu lượng giác | Phân loại dương, âm, 0 hoặc không xác định theo hoạt động |
| 6 | Các mốc 0°, 90°, 180° | Chọn mốc và kiểm tra mẫu số |
| 7 | Bảng góc đặc biệt | Chọn cột, liên hệ tọa độ và dấu |
| 8 | Ví dụ 135° | Hiện từng bước, giải thích dấu |
| 9 | Hai góc bù | Hiện điểm đối xứng qua Oy |
| 10 | Luyện góc bù | Chọn đáp án và đọc lí do |
| 11 | Hai góc phụ | Quan sát tọa độ hoán đổi |
| 12 | Hệ thức cơ bản | Theo dõi tổng sin² + cos² |
| 13 | Biết sin, tìm cos | Đổi điều kiện nhọn/tù để chọn dấu |
| 14 | Độ–phút–giây, DEG | Nhập dữ kiện và tính có kiểm tra |
| 15 | Tìm góc từ sin | Tìm đủ nghiệm trong đoạn quy định |
| 16 | Vòng quay | Kéo thời gian, xem độ cao và lời giải |
| 17 | Bài tập SGK | Hiện phép biến đổi theo từng bước |
| 18 | Thử thách 90 giây | Làm theo cặp, mở gợi ý có chủ đích |
| 19 | 10 câu quiz | Chốt đáp án, phản hồi, xem tổng điểm |
| 20 | Tự đánh giá | Đánh dấu khả năng và giao bài tiếp nối |

### 6.2. Mô hình và các điều kiện không được sai

Với góc tính bằng độ, đổi sang radian trước khi gọi hàm JavaScript:

```javascript
const r = alpha * Math.PI / 180;
const x = Math.cos(r);
const y = Math.sin(r);
// Điểm toán học M(x, y).
// Khi vẽ SVG: screenX = originX + scale*x;
//              screenY = originY - scale*y;
```

Trục y màn hình hướng xuống nên cần dấu trừ. Điểm phải thật sự nằm trên đường tròn, hình chiếu phải trùng tọa độ, nhãn không che điểm.

| Nội dung | Điều cần kiểm tra |
|---|---|
| sin | Không âm trên [0°; 180°], bằng 0 tại hai đầu mút |
| cos | Dương ở phía phải Oy, âm ở phía trái, bằng 0 tại 90° |
| tan | sin/cos, không xác định tại 90° |
| cot | cos/sin, không xác định tại 0° và 180°; cot 90° = 0 |
| Hiển thị dấu | Giá trị 0 phải được ghi là 0, không gắn nhãn “dương” |
| Góc bù | M′ = (−x; y), sin giữ nguyên, cos đổi dấu |
| Góc phụ | Trong góc phần tư thứ nhất, đối xứng qua y = x, tọa độ đổi vai |
| Nghịch đảo tan/cot | Chỉ dùng khi cả hai cùng xác định và khác 0 |
| sin α = c | Ngoài [0;1] vô nghiệm; c=0 có 0°,180°; c=1 có 90°; 0<c<1 có hai góc |
| Tìm dấu cos | cos α < 0 trên miền bài học gồm 90° < α ≤ 180°, không tự loại 180° |

Đối với công thức góc phụ của tan/cot, có thể dùng miền an toàn `0° < α < 90°` và xét riêng các đầu mút theo điều kiện xác định. Đừng tuyên bố tất cả công thức đều áp dụng ở mọi góc.

Các số gần 0 do sai số máy cần được định dạng hợp lí, tránh hiện `−0` hoặc một số cực nhỏ thay cho giá trị đặc biệt. Không làm tròn sớm trong phép tính trung gian.

### 6.3. Mốc đáp án đối chiếu

- sin 135° = √2/2; cos 135° = −√2/2; tan 135° = cot 135° = −1.
- sin α = 3/5: cos α = 4/5 nếu góc nhọn, −4/5 nếu góc tù.
- tan α = −4/3, α tù: sin α = 4/5, cos α = −3/5.
- sin 48°50′40″ ≈ 0,7529256291.
- cos 112°12′45″ ≈ −0,3780427715.
- Vòng quay bán kính 75 m, tâm cao 90 m, chu kì 30 phút, bắt đầu ở đáy: tại 20 phút cao 127,5 m.
- Mô hình vòng quay có thể tính `h(t) = 90 − 75 cos(2πt/30)`; trong đó đối số cos ở công thức này dùng radian.
- Với Bài 3.4 đúng đề SGK, tan α = 3 và `P = (2sin α − 3cos α)/(3sin α + 2cos α)`: P = 3/11.

Các mốc trên dùng để đối chiếu, không thay cho việc đọc lại toàn bộ đề trong PDF.

## 7. Mẫu chi tiết Bài 6

**Tên bài:** Hệ thức lượng trong tam giác.

### 7.1. Hành trình 26 slide

| Trang | Trọng tâm | Tương tác chính |
|---|---|---|
| 1 | Mở bài | Mục tiêu đo đạc từ tam giác |
| 2 | Đo qua hồ | Chọn dữ kiện đủ để xác định khoảng cách |
| 3 | Kí hiệu | Chọn cặp cạnh và góc đối diện |
| 4 | Khám phá côsin | Kéo góc A với hai cạnh cố định; có tự chạy/tạm dừng |
| 5 | Giải thích côsin | Hình chiếu và phép biến đổi từng bước |
| 6 | Ví dụ SGK A=120° | Tính cạnh, kiểm tra dấu cos |
| 7 | Pythagore | So sánh góc nhọn, vuông, tù |
| 8 | Biết ba cạnh | Phân loại theo góc lớn nhất; có bộ cạnh không hợp lệ |
| 9 | Định lí sin | Di chuyển A trên đường tròn, đổi cung |
| 10 | Chứng minh sin | Đường kính và tam giác vuông |
| 11 | Ví dụ A=135°, C=15° | Giải tam giác bằng sin |
| 12 | Chọn cách giải | Dữ kiện nào dùng côsin, sin hoặc cần xét thêm |
| 13 | Máy giải tam giác | Nhập ba chế độ dữ kiện và kiểm tra lỗi |
| 14 | Đo qua hồ | Hiện từng bước đo rồi tính khoảng cách |
| 15 | Tàu đổi hướng | Phân biệt góc đổi hướng với góc trong tam giác |
| 16 | Diện tích từ chiều cao | Kéo góc để theo dõi h và S |
| 17 | Chọn công thức diện tích | Chọn theo dữ kiện, xem hình giải thích |
| 18 | Tam giác 13–14–15 | Hai cách tìm diện tích, hiện từng bước |
| 19 | r, R, đường cao | Bật hình và công thức tương ứng |
| 20 | Góc không xen giữa | Xem hai tam giác cùng thỏa mãn dữ kiện |
| 21 | Sửa sai | Ba tình huống, phản hồi theo đáp án |
| 22 | Thử thách 90 giây | Tìm r, R và hₐ, gợi ý từng bước |
| 23 | 12 câu quiz | Chấm từng câu, tổng điểm, làm lại |
| 24 | Phép đo của học sinh | Thiết kế sơ đồ và cách thu thập dữ kiện |
| 25 | Tự đánh giá | Checklist kiến thức có thể giải thích |
| 26 | Tổng kết | Công thức cốt lõi và bài tập tiếp nối |

### 7.2. Dữ liệu hình phải được tính thật

Quy ước: a = BC, b = CA, c = AB; A, B, C là các góc đối diện tương ứng.

Một cách dựng thuận tiện:

```javascript
const t = angleA * Math.PI / 180;
const A = { x: 0, y: 0 };
const B = { x: c, y: 0 };
const C = { x: b * Math.cos(t), y: b * Math.sin(t) };
const a = Math.hypot(C.x - B.x, C.y - B.y);
```

Sau đó tính khung bao, chọn cùng một hệ số phóng cho x và y rồi chuyển sang tọa độ SVG. Không co giãn riêng chiều ngang và dọc làm sai góc.

- Nhãn a đặt gần BC, b gần CA, c gần AB.
- Góc tô tại đúng đỉnh, đúng hướng hai cạnh.
- Chân đường cao được tính bằng hình chiếu lên đúng cạnh đáy.
- Khi A tù, chân đường cao có thể nằm ngoài đoạn cạnh; hình phải thể hiện điều đó.
- Với S = ½ch꜀, hình phải là chiều cao xuống cạnh c. Nếu công thức ghi hₐ thì hình phải hạ xuống a = BC.
- Tâm ngoại tiếp và nội tiếp phải được tính từ tam giác, không chọn vị trí bằng mắt.

### 7.3. Máy giải tam giác trong slide

Ba chế độ mẫu:

| Chế độ | Nhập | Quy trình |
|---|---|---|
| Hai cạnh và góc xen giữa | b, c, A | Côsin tìm a, tìm các góc còn lại |
| Ba cạnh | a, b, c | Kiểm tra bất đẳng thức tam giác, côsin tìm góc |
| Một cạnh và hai góc | a, A, B | Tính C rồi dùng sin tìm b, c |

Kiểm tra trước khi tính:

- Không bỏ trống; các số phải hữu hạn, độ dài dương.
- Góc trong tam giác lớn hơn 0° và nhỏ hơn 180°.
- Tổng hai góc đã nhập nhỏ hơn 180°.
- Với ba cạnh, tổng hai cạnh bất kì lớn hơn cạnh còn lại.
- Không nhận bộ 2, 3, 5 là tam giác.
- Không cho `NaN` hoặc `Infinity` xuất hiện trên giao diện.
- Chặn nhiễu số rất nhỏ quanh [−1;1] khi đưa kết quả hợp lệ vào `acos`; không dùng clamp để biến dữ kiện vô lí thành hợp lệ.
- Thông báo trường hợp quá gần suy biến hoặc vượt phạm vi tính ổn định.

Nên tách hàm tính toán thuần khỏi việc vẽ hình để kiểm tra độc lập như `solveTriangle()` trong nguồn Bài 6. Không lấy con số đã làm tròn trên màn hình để tính tiếp.

### 7.4. Các công thức và mốc kiểm tra

```text
a² = b² + c² − 2bc cos A
cos A = (b² + c² − a²)/(2bc)
a/sin A = b/sin B = c/sin C = 2R
S = ½ahₐ = ½bc sin A = abc/(4R) = pr
p = (a+b+c)/2
S = √[p(p−a)(p−b)(p−c)]
r = S/p
R = abc/(4S)
hₐ = 2S/a
```

| Dữ kiện | Kết quả đối chiếu |
|---|---|
| AB=5, AC=8, A=120° | BC=√129≈11,358 |
| A=135°, C=15°, b=12 | B=30°, a=12√2, c≈6,212, R=12 |
| a=13, b=14, c=15 | p=21, S=84, cos A=0,6, sin A=0,8 |
| Cũng tam giác trên | r=4, R=65/8=8,125, hₐ=168/13≈12,923 |
| b=6, c=4, A=150° | S=6 |
| AB=50 m, A=50°, B=70° | C=60°, AC≈54,253 m; đây là số liệu bổ sung trong mô phỏng |
| Tàu đi đông 20 km, rồi đông nam 10 km | Góc trong ở chỗ rẽ là 135°, khoảng cách cuối ≈27,979 km |
| a=8, b=10, A=30° | Hai khả năng B≈38,682° hoặc 141,318°, đều phải xét tổng góc |

Định lí sin không tự bảo đảm góc duy nhất khi biết hai cạnh và góc không xen giữa. Cần xét góc do arcsin trả về và góc bù, loại trường hợp tổng góc không hợp lệ.

Trong mô phỏng đường tròn, khi cố định B, C và bán kính R, di chuyển A trên cùng một cung thì góc chắn dây BC không đổi. Khi chuyển sang cung kia, góc bù nhưng sin bằng nhau. Đây là kết luận toán học cần giải thích, không phải lỗi thanh trượt.

## 8. Biên soạn bài học theo SGK và lý thuyết tự học

### 8.1. Trang SGK HTML

Đường dẫn: `public/sgk/bai-XX.html`; ảnh: `public/sgk/images/bai-XX/`.

Phải có tên bài, phạm vi trang nguồn, các mục kiến thức, hoạt động/ví dụ/luyện tập/vận dụng liên quan và bài tập cuối bài. Bài tập cần đúng số thứ tự, giả thiết, biểu thức, đơn vị và yêu cầu của sách.

Mỗi lời giải bổ sung nên nằm trong:

```html
<details class="answer">
  <summary>Xem lời giải gợi ý</summary>
  <div>...</div>
</details>
```

Ghi rõ: **“Biên soạn theo SGK; lời giải gợi ý và ghi chú là phần bổ sung.”** Chỉ gọi phần scan là trang gốc; không gọi nội dung viết lại là “nguyên bản 100%”. Nếu giữ nguyên đề bài, phải đối chiếu thực tế với nguồn.

- Có ảnh trang gốc để đối chiếu khi phù hợp.
- Ảnh tải trễ chưa xuất hiện khi chưa cuộn đến không tự động là lỗi: phải cuộn hoặc mở mục rồi kiểm tra tải ảnh.
- Bảng dài được cuộn ngang bên trong bảng; toàn trang không tràn ngang.
- LaTeX phải render đúng, không để lộ ký tự điều khiển.
- Công thức và ảnh không phụ thuộc vào đường dẫn trên máy cá nhân.

### 8.2. Tóm tắt & Khắc sâu

Viết trong đúng khóa bài ở `lib/theory.ts`. Bám kiểu `LessonTheory` và `TheoryBlock` trong `lib/types.ts`.

Mỗi mục kiến thức nên có định nghĩa/công thức, điều kiện, hình, ví dụ và một lỗi thường gặp. Thêm câu hỏi kiểm tra nhanh ở vị trí vừa học xong nội dung đó.

Ví dụ khối bước giải đúng kiểu:

```typescript
{
  kind: "steps",
  items: [
    { label: "1", title: "Đọc dữ kiện", text: "Xác định cạnh và góc đã biết." },
    { label: "2", title: "Chọn công thức", text: "Nêu điều kiện trước khi thay số." },
    { label: "3", title: "Đối chiếu", text: "Kiểm tra đơn vị và độ hợp lí." }
  ]
}
```

Không thay `items` bằng `steps`, không thay `label` bằng `num` nếu kiểu hiện tại không hỗ trợ. Những lỗi này từng làm build thất bại.

Với các phòng mô phỏng React, gắn đúng bài trong `TheoryViewer.tsx`; không đặt mã riêng của một bài chạy cho mọi bài. Dùng `MathText` cho công thức trong JSX, tránh đặt chuỗi LaTeX thô vào phần chữ thông thường.

## 9. Biên soạn ngân hàng câu hỏi và trò chơi

### 9.1. Trắc nghiệm bốn lựa chọn

Mốc khởi đầu: khoảng 12 câu, chia hợp lí giữa nhận biết, thông hiểu và vận dụng. Mỗi câu phải có đúng một đáp án.

```typescript
import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "b6-q-example",
    q: "Cho $b=6$, $c=4$, $A=150^\\circ$. Diện tích tam giác bằng bao nhiêu?",
    options: ["$6$", "$12$", "$6\\sqrt{3}$", "$24$"],
    answer: 0,
    explain: "Dùng $S=\\frac12bc\\sin A$.\nThay số được $S=6$."
  }
];
export default questions;
```

Đăng ký tệp trong `lib/questions.ts`. Đừng chỉ tạo tệp rồi quên đưa vào ngân hàng.

Phương án nhiễu nên xuất phát từ lỗi thật: nhầm dấu, thiếu hệ số 2, dùng chu vi thay nửa chu vi, nhập sai đơn vị góc. Kiểm tra cả khả năng hai biểu thức khác hình thức nhưng cùng giá trị hoặc đồng nhất.

### 9.2. Đúng/Sai và trả lời ngắn

Thêm đúng khóa bài trong `lib/extras.ts`:

- Hai tình huống trở lên, mỗi tình huống bốn ý; không viết bốn câu rời nhau không liên quan bối cảnh.
- `answer` là boolean và phải khớp hoàn toàn với phần giải thích.
- Khoảng ba câu trả lời ngắn/tự luận có bước giải rõ, điều kiện, đơn vị và yêu cầu làm tròn.
- Với bài cần nhập đáp số, ghi rõ định dạng được chấp nhận.

**Giới hạn hiện tại cần biết:** `EssayViewer.tsx` đang đối chiếu chuỗi sau khi bỏ khoảng trắng đầu/cuối và đổi chữ thường. Nó chưa tự hiểu mọi biểu thức toán tương đương. Không tuyên bố hệ thống chấp nhận `1/2`, `0.5`, `0,5` như nhau nếu chưa bổ sung và kiểm tra bộ so sánh. Nếu nâng cấp, ưu tiên xử lí số/phân số an toàn; không dùng `eval()` với dữ liệu học sinh.

### 9.3. Trò chơi phải đúng nội dung bài

- Dùng `SortGame` cho phân loại, `MatchGame` cho ghép cặp; chọn loại khác khi kiểu dữ liệu và giao diện hỗ trợ thật.
- Mỗi thẻ có lời giải thích, không chỉ một dấu đúng/sai.
- Có thể thao tác bằng nút hoặc chạm, không bắt buộc phải kéo mới chơi được.
- Có tiến trình và cách làm lại.
- Nội dung nâng cao ngoài bài được ghi rõ là mở rộng.

Với ghép đôi, đặt rõ `leftLabel` và `rightLabel`. Nếu bỏ trống, giao diện cũ có thể hiện “Mệnh đề P” và “Mệnh đề phủ định” trên một bài lượng giác.

Ví dụ nhãn đúng:

```typescript
leftLabel: "📌 Biểu thức lượng giác",
rightLabel: "🔄 Giá trị tương ứng",
```

Đăng ký trò chơi trong `lib/games.ts`. Mô tả trên danh mục và trang trò chơi phải nói đúng trò đang có; không quảng cáo kéo co nếu bài chỉ có phân loại và ghép thẻ.

### 9.4. Ôn tập tổng kết

Điền trong `lib/reviews.ts` theo `LessonReview`:

- Các ý kiến thức thực sự của bài, không dùng câu chung như “nắm vững công thức”.
- Sơ đồ kiến thức có quan hệ rõ.
- Bảng lỗi và cách sửa.
- Flashcard hỏi ở mặt trước, trả lời ở mặt sau.
- Checklist viết theo hành động: “Tôi giải thích được…”, “Tôi chọn được…”, “Tôi kiểm tra được…”.

## 10. Chấm điểm, lưu tiến độ và phản hồi

### 10.1. Quy tắc ứng dụng đang dùng

Phần Đúng/Sai tính điểm cho mỗi câu bốn ý theo bảng: đúng 0 ý được 0; đúng 1 ý được 0,1; đúng 2 ý được 0,25; đúng 3 ý được 0,5; đúng 4 ý được 1. Đây là mô tả cơ chế hiện tại của ứng dụng, không phải tuyên bố riêng về quy định kiểm tra Toán 10.

- Giữ ít nhất hai chữ số thập phân khi lưu/hiển thị tổng điểm để 0,25 không biến thành 0,3.
- Khi hoàn thành lượt làm, gọi đúng hàm lưu tiến độ, giữ số ý đúng và tổng số ý.
- Trắc nghiệm phải truyền số câu thực tế, không mặc định là 10 khi bài có 12 hoặc nhiều hơn.
- Đọc `lib/progress.ts` trước khi sửa để giữ dữ liệu cũ và tránh tăng số lượt làm hai lần.
- Thử tải lại trang, quay về danh mục và kiểm tra điểm còn đúng.
- Quiz trong slide hiện chủ yếu giữ trạng thái của phiên trình chiếu. Không quảng cáo nó đã đồng bộ với tiến độ toàn website nếu chưa triển khai.

### 10.2. Phản hồi có ích

Phản hồi tốt trả lời đủ ba câu:

1. Em đã làm đúng hoặc sai ở đâu?
2. Vì sao?
3. Tiếp theo cần kiểm tra hoặc sửa điều gì?

Ví dụ: “Chưa đúng. A là góc tù nên cos A âm. Kiểm tra lại dấu khi thay vào −2bc cos A.”

Với mô phỏng nhập liệu, nêu lỗi cụ thể: “Tổng A+B phải nhỏ hơn 180°”, “Ba cạnh 2,3,5 chưa tạo thành tam giác”, không chỉ hiện “Sai dữ liệu”.

Khi học sinh đổi dữ kiện, xóa hoặc đánh dấu kết quả cũ cần cập nhật. Không để con số xanh của dữ kiện trước xuất hiện như kết quả của dữ kiện mới.

## 11. Tích hợp bài học vào website

Luồng hiện tại:

```text
data/curriculum.ts
        |
app/luyen/[baiId]/page.tsx
        |
        +-- getLessonTheory() --> lib/theory.ts
        +-- getQuestions() ----> lib/questions.ts --> data/questions/
        +-- getTF()/getEssay() -> lib/extras.ts
        +-- getLessonReview() -> lib/reviews.ts
        +-- getLessonGames() --> lib/games.ts --> data/games/
        +-- getSlideUrl() ----> lib/slides.ts
        +-- kiểm tra public/sgk/bai-XX.html
        |
components/LessonClient.tsx --> các phân hệ và iframe
```

- Bài có slide phải được đăng ký trong `lib/slides.ts`.
- Tệp HTML phục vụ phải ở `public/`, không dùng đường dẫn ổ E hoặc đường dẫn `file://` trong website.
- Trang SGK được phát hiện bằng tệp tồn tại; vẫn phải build lại để bản triển khai có đầy đủ các trang tĩnh.
- Cập nhật mô tả số slide và số trò chơi đúng thực tế.
- Kiểm tra đường dẫn trực tiếp **và** thao tác mở từ danh mục bài học.
- Không thay nhãn/mô tả của tất cả các bài chỉ để sửa một bài.

## 12. Các lỗi từng gặp và yêu cầu phòng tránh

| Lỗi | Cách phòng tránh |
|---|---|
| Gắn số bài SGK cho một đề đã tự thay dữ kiện | Đối chiếu từng đề với ảnh sách, ghi rõ ví dụ bổ sung |
| Hai lựa chọn trắc nghiệm tương đương cùng đúng | Rút gọn biểu thức, thử nhiều góc hoặc dùng kiểm tra đại số |
| Giải thích kết luận đúng nhưng boolean để false | Tính độc lập và đối chiếu từng `answer` với `explain` |
| Nói sin luôn dương cả hai đầu mút | Thử 0°,180°, phân biệt không âm với dương |
| tan 90° hoặc cot 0° bị hiển thị 0 | Kiểm tra mẫu số, hiển thị “Không xác định” |
| Bỏ góc 180° khi cos âm | Viết đúng miền và kiểm tra đầu mút |
| Bỏ nghiệm góc bù hoặc kết luận SSA luôn duy nhất | Xét tất cả góc hợp lệ và tổng góc |
| Công thức một đường cao, hình một đường cao khác | Đối chiếu chân đường cao, cạnh đáy và chỉ số |
| Điểm 0,25 lưu thành 0,3 | Giữ hai chữ số thập phân |
| Bài 12 câu nhưng tiến độ ghi tổng 10 | Truyền độ dài danh sách thực tế |
| LaTeX thô xuất hiện trên trang | Dùng renderer hiện có, kiểm tra lỗi KaTeX |
| Chuỗi `\\n` hiện nguyên trên giao diện | Dùng ký tự xuống dòng đúng ngữ cảnh trong chuỗi nguồn |
| Build lỗi do sai cấu trúc `TheoryBlock` | Đọc `lib/types.ts`, chạy kiểm tra TypeScript |
| Dùng cùng hướng dẫn phím cho mọi máy Casio | Xác minh theo đúng model từ tài liệu hãng trước khi ghi |
| Tắt animation làm mất nét SVG | Đặt trạng thái hình hoàn chỉnh khi hiệu ứng tắt |
| Bộ đếm hoặc mô phỏng chạy sau khi rời slide | Dọn timer/animation khi chuyển trang và ẩn tab |
| Tệp HTML mới nhưng web vẫn cũ | Kiểm tra commit, trạng thái triển khai, domain và nội dung thật |

## 13. Kiểm thử và tiêu chí nghiệm thu

### 13.1. Kiểm tra tự động sẵn có

Từ thư mục gốc:

```powershell
node scripts/build_slide_bai_05.mjs
node scripts/build_sgk_bai_05.mjs
node scripts/build_slide_bai_06.mjs
node scripts/check_lesson_bai_05.mjs
node scripts/check_slide_bai_06.mjs
node node_modules/typescript/bin/tsc --noEmit
npm run build
git diff --check
```

Chỉ chạy các builder của bài thực sự thay đổi để không tạo nhiễu cho bài khác. Danh sách trên mô tả cách tái tạo và kiểm tra hai bài mẫu, không phải yêu cầu luôn chạy cả ba builder.

Với bài mới, viết kiểm tra tương ứng cho phần toán học và chấm điểm quan trọng. Ví dụ:

- Giá trị biên, điều kiện không xác định, dữ kiện sai.
- Kết quả chính xác và sai số chấp nhận được.
- Tọa độ hình nằm trên đúng đường/cạnh.
- Bài có một hay hai nghiệm.
- Số lượng câu, đáp án duy nhất, tổng điểm và lưu tiến độ.
- Công thức render được; tệp ngoại tuyến không cần CDN.

Kiểm tra có ý nghĩa phải có khả năng phát hiện kết quả sai, không chỉ đếm số phần tử hoặc kiểm tra một chuỗi vừa được sao chép từ chính phần triển khai.

### 13.2. Kiểm tra trong trình duyệt

| Nhóm | Phải thử |
|---|---|
| Trình chiếu | Duyệt mọi slide, hiện hết mọi ý, đọc được toàn bộ nội dung |
| Điều khiển | Trang trước/sau, mục lục, phím tắt, focus, toàn màn hình hoặc hướng dẫn mở tab riêng |
| Mô phỏng | Đầu mút slider, preset, nhập số hợp lệ/sai/trống, đổi dữ kiện liên tiếp |
| Hình | Nhãn đúng cạnh/đỉnh, tỉ lệ đúng, đường cao và đường tròn chính xác |
| Tương tác | Đúng/sai đều có phản hồi; chọn lặp không cộng điểm; làm lại hoạt động được |
| Đồng hồ | Bắt đầu, tạm dừng, tiếp tục, đặt lại, rời slide, ẩn tab |
| Bài tập | Trắc nghiệm, Đúng/Sai, trả lời ngắn, lời giải mở/đóng |
| Tiến độ | Về danh mục và tải lại vẫn đúng số câu và điểm |
| Màn hình | Máy chiếu 1280×720, máy lớn hơn, điện thoại khoảng 390×844 |
| Ngoại tuyến | Tệp slide tải về vẫn có hình, công thức và hoạt động cốt lõi |
| Tích hợp | Mở được từ `/luyen/bai-XX`, không chỉ URL HTML riêng |
| Triển khai | Mở domain chính sau khi Vercel báo thành công và thử tương tác mới |

Đừng chỉ nhìn ảnh đầu bài. Chụp lại các slide nhiều công thức, slider ở vị trí góc tù, phản hồi sai và phần cuối sau khi hiện hết.

### 13.3. Điều kiện hoàn thành

- [ ] Tên bài, bộ sách, trang nguồn và đề bài đúng.
- [ ] Đủ các phân hệ được giao; không còn nội dung mẫu của bài khác.
- [ ] Công thức có điều kiện áp dụng; không còn lỗi toán học đã biết.
- [ ] Các mô hình dùng chung dữ kiện với lời giải và hình.
- [ ] Mỗi hoạt động có mục tiêu và phản hồi cụ thể.
- [ ] Đáp án và giải thích nhất quán; không có hai phương án cùng đúng.
- [ ] Bộ chấm và lưu điểm đã thử cả đúng/sai, tải lại trang.
- [ ] Không tràn ngang điện thoại; nội dung chính đọc được khi chiếu lớp.
- [ ] Tắt hiệu ứng vẫn đủ hình; bộ đếm và animation dừng đúng.
- [ ] Builder, kiểm tra nội dung và build ứng dụng chạy thành công.
- [ ] Có ảnh xác nhận từ bản cuối cùng.
- [ ] Nếu được giao xuất bản: commit đúng tệp, push thành công, triển khai sẵn sàng, domain chính hiện bản mới.

Không dùng cụm “không còn bất kỳ lỗi nào”. Nêu đã kiểm tra những gì và giới hạn còn lại nếu có.

## 14. Đưa lên GitHub và Vercel khi được giao xuất bản

Không mặc định quyền xuất bản chỉ vì được giao viết tài liệu. Khi nhiệm vụ có yêu cầu cập nhật web, triển khai sau khi hoàn thành các kiểm tra.

```powershell
git status --short
git diff --check
```

Stage bằng danh sách tệp cụ thể thuộc nhiệm vụ. Tránh `git add .` khi trong dự án có công việc khác hoặc tài liệu nguồn lớn.

```powershell
# Thay danh sách bằng đúng các tệp đã thay đổi của bài.
git add scripts/slide-bai-XX scripts/build_slide_bai_XX.mjs public/bai-XX-trinh-chieu.html
git commit -m "Improve lesson XX interactive content"
git push origin main
```

`main` là nhánh dùng trong quy trình hiện tại; kiểm tra nhánh và remote thực tế trước khi chạy. Nếu builder có bản HTML gốc đang được Git theo dõi thì cập nhật cả bản đó, không đưa một bản cũ vào commit.

Khi Vercel CLI đã được cấu hình đúng dự án:

```powershell
vercel deploy --prod --yes
```

Nếu CLI chưa có, dùng cách cài/chạy phù hợp với môi trường; không sao chép đường dẫn cache hoặc thông tin tài khoản trên một máy khác.

- Kiểm tra `.vercelignore`: loại `.git`, `.next`, `node_modules`, `.env*`, thư mục PDF nguồn, tệp tạm và tài liệu không cần phục vụ.
- Không xóa một biến môi trường hoặc dịch vụ đang dùng để “làm sạch” triển khai.
- Nếu đang có thay đổi ngoài nhiệm vụ, phát hành từ bản mã đã kiểm tra và commit; không vô tình tải công việc dở của người khác lên web.
- Đợi build và triển khai hoàn tất. Ghi nhận trạng thái sẵn sàng, không coi URL vừa được cấp là bằng chứng thành công.
- Mở domain chính và kiểm tra số slide, một hoạt động mới, đường dẫn tích hợp.
- Có thể thêm `?v=<mã-commit>` vào liên kết bàn giao để hỗ trợ nhận biết phiên bản; vẫn phải kiểm tra domain thật, không chỉ dựa vào tham số này.

Nếu build lỗi do một phần khác của dự án, xác định nguyên nhân. Chỉ sửa phần tối thiểu cần thiết trong phạm vi được phép; không tắt kiểm tra TypeScript hoặc lint để đẩy bản lỗi lên web.

## 15. Mẫu yêu cầu thầy có thể gửi cho Antigravity

Sao chép khối dưới đây, thay các phần trong ngoặc vuông và gửi kèm PDF hoặc chỉ rõ tệp nguồn:

```text
Hãy xây dựng/nâng cấp đầy đủ Bài [số bài, tên bài] trên dự án
E:\du-an\chinh-phuc-toan-10 theo tài liệu
HUONG_DAN_ANTIGRAVITY_LAM_BAI_HOC_TOAN_10.md.

SGK nguồn: [đường dẫn PDF hoặc tài liệu gửi kèm].
Phạm vi: [toàn bộ bài học / chỉ những phân hệ được nêu rõ].
Xuất bản: [có, đẩy GitHub và Vercel sau khi kiểm tra / chỉ làm bản xem trước].

Lấy Bài 5 và Bài 6 làm mẫu chất lượng. Đọc các tệp nguồn mẫu trước khi làm.
Tôi cần nội dung đúng SGK, hình tính đúng theo dữ kiện, giao diện đẹp và dễ đọc,
chứ không chỉ nhiều hiệu ứng.

Hãy hoàn thiện các phân hệ trong phạm vi: lý thuyết có mô phỏng, slide tương tác,
bài học theo SGK, trò chơi, trắc nghiệm, Đúng/Sai, trả lời ngắn và ôn tập.

Ưu tiên học sinh tự dự đoán, tự thao tác, tự tính và nhận phản hồi cụ thể.
Các lời giải hiện từng bước, có mục lục, phím tắt, bật/tắt hiệu ứng, hoạt động
nhóm có đồng hồ và gợi ý cho giáo viên ở từng chặng.

Không bịa đề bài SGK, không bỏ điều kiện xác định, không chấm điểm theo một
giá trị mặc định sai. Chỉ sửa các tệp liên quan; giữ công việc đang có của tôi.

Bắt buộc thực hiện quy trình chống lỗi công thức ở mục 17: phân biệt chuỗi
JavaScript với String.raw, dùng đúng renderer, kiểm tra LaTeX ở chế độ báo lỗi,
đối chiếu hình công thức với SGK và kiểm chứng giá trị toán học. Không bỏ dấu
gạch chéo, không đổi công thức thành ảnh hoặc chữ thường chỉ để hết báo lỗi.
Không báo hoàn thành nếu còn công thức đỏ, lộ mã, mất phân số, mất căn hay sai số mũ.

Quy trình: khảo sát → bảng bao phủ SGK → kiểm chứng đáp án → thiết kế hoạt động
→ triển khai tất cả phân hệ → kiểm tra tự động và trình duyệt → bàn giao.

Hãy tự kiểm tra trên màn hình chiếu và điện thoại, thử cả đáp án sai, dữ kiện
không hợp lệ, trường hợp biên, làm lại và tải lại trang. Sau cùng cung cấp
đường dẫn mở bài, ảnh bản cuối, các kiểm tra đã chạy và giới hạn còn lại.
Không báo hoàn thành khi mới tạo giao diện hoặc chỉ mở được trang đầu.
```

## 16. Báo cáo bàn giao mẫu

```text
Đã hoàn thiện Bài [X] gồm [các phân hệ thực tế].

Hoạt động mới:
- [Tương tác giúp học sinh hiểu điều gì]
- [Tự làm, phản hồi và cách sửa]

Đã kiểm tra:
- [Đáp án, mô hình, trường hợp biên]
- [Chấm điểm và lưu tiến độ]
- [Toàn bộ slide, máy chiếu, điện thoại]
- [Kết quả build và kiểm tra tự động]

Mở bài: [URL thật đã kiểm tra]
Mã phiên bản: [commit nếu có]
Ảnh xác nhận: [ảnh của bản cuối]
Còn giới hạn: [ghi đúng thực tế, nếu có]
```

## 17. Quy trình chống lỗi công thức dành riêng cho Antigravity

Đây là bước nghiệm thu bắt buộc của công việc thực hiện theo hướng dẫn này. Phải phân biệt ba loại lỗi:

1. **Lỗi chuỗi nguồn:** JavaScript đã làm mất hoặc đổi ký tự trước khi KaTeX đọc.
2. **Lỗi trình bày:** công thức đúng mã nhưng thiếu renderer, CSS, font, bị cắt hoặc render hai lần.
3. **Lỗi toán học:** công thức hiện rất đẹp nhưng sai dấu, thiếu điều kiện, sai giả thiết hoặc sai đáp án.

Không có một công cụ kiểm tra duy nhất bảo đảm phát hiện cả ba loại. Cần đủ các bước dưới đây.

### 17.1. Chọn đúng cách viết theo nơi lưu công thức

Một công thức `\frac{1}{2}` đi qua JavaScript/JSON có quy tắc khác với khi viết trực tiếp trong HTML.

| Nơi viết | Cách viết đúng | Ghi nhớ |
|---|---|---|
| Chuỗi JS/TS thường, đưa vào MathText | `"$\\frac{1}{2}$"` | Hai dấu gạch chéo trong tệp nguồn để lúc chạy còn một |
| Template literal JS thông thường | `` `$\\frac{1}{2}$` `` | Vẫn phải thoát gạch chéo |
| String.raw, đưa vào MathText | `` String.raw`$\frac{1}{2}$` `` | Một dấu gạch chéo, giữ nguyên khi chạy |
| Chuỗi JS/TS đưa thẳng vào KaTeX | `"\\frac{1}{2}"` | Không thêm `$` vì gọi renderer trực tiếp |
| JSON hợp lệ | `{"formula":"\\frac{1}{2}"}` | JSON cũng cần hai dấu gạch chéo |
| HTML thô dùng auto-render | `$\frac{1}{2}$` | Đây là HTML thật, chưa nằm trong chuỗi JavaScript |
| SVG `<text>` | `α = 60°` | Dùng nhãn Unicode đơn giản; `<text>` không tự hiểu LaTeX |

**Lưu ý quan trọng:** một đoạn “HTML” nằm trong dấu nháy hoặc backtick JavaScript vẫn là chuỗi JavaScript. Áp dụng quy tắc chuỗi đó, không áp dụng quy tắc HTML thô.

Với dữ liệu mới, có thể ưu tiên `String.raw` để dễ đọc, nhưng phải dùng nhất quán. Không đổi hàng loạt hai gạch chéo thành một trong các tệp đang có.

### 17.2. Mẫu React đúng cho dự án này

```tsx
import MathText from "@/components/MathText";

// Hai mẫu dưới tương đương, chọn một cách viết nhất quán.
<MathText content={"$a^2=b^2+c^2-2bc\\cos A$"} />
<MathText content={String.raw`$a^2=b^2+c^2-2bc\cos A$`} />
```

Không viết LaTeX trực tiếp trong phần chữ JSX rồi chờ trình duyệt tự xử lí:

```tsx
// Sai cách tích hợp: chỉ hiện chữ, không có renderer toán.
<p>{String.raw`$\frac{1}{2}$`}</p>
```

`MathText` hiện có cơ chế tự chuẩn hóa một số trường hợp và đang dùng `throwOnError: false` khi hiển thị. Đây là hỗ trợ giao diện, **không phải bằng chứng công thức đã hợp lệ**. Không dựa vào việc nó tự bọc dấu `$` để bỏ bước chuẩn bị nội dung đúng.

Giữ tiếng Việt ngoài vùng toán khi có thể:

```typescript
const explanation = String.raw`Diện tích là $S=\frac{1}{2}bc\sin A$, với A là góc xen giữa.`;
```

Không bọc cả đoạn văn dài thành một biểu thức toán chỉ để tránh chữ LaTeX thô.

### 17.3. Mẫu đúng cho slide HTML và SGK HTML

Đối với helper gọi KaTeX trực tiếp:

```javascript
const m = (tex) => katex.renderToString(tex, {
  throwOnError: true,
  trust: false,
  output: 'htmlAndMathml'
});

const rendered = m(String.raw`S=\frac{1}{2}bc\sin A`);
// Chèn HTML đã render vào vùng công thức một lần.
```

- `m()` nhận phần LaTeX thuần, không nhận chuỗi đã bọc `$...$`.
- Không HTML-escape lần nữa kết quả từ `renderToString()`, nếu không sẽ hiện mã `<span...>` thay cho công thức.
- Không chạy auto-render lại toàn bộ phần đã được dựng bằng `renderToString()`.
- Với công thức thay đổi theo slider, cập nhật từ dữ liệu gốc rồi render lại vào đúng vùng; không nối tiếp công thức mới vào kết quả cũ.
- Nếu dùng HTML thô có `$...$`, phải có auto-render và cấu hình delimiter phù hợp. Một trang không có renderer sẽ chỉ hiện dấu `$`.
- Đối với tệp tạo bởi builder, sửa nguồn rồi chạy builder; không sửa riêng HTML đầu ra.

### 17.4. Các lỗi ký tự đặc biệt phải kiểm tra

| Viết sai trong chuỗi JS thường | Nguy cơ |
|---|---|
| `"\frac{1}{2}"` | `\f` trở thành ký tự điều khiển, mất lệnh phân số |
| `"\tan A"`, `"\theta"`, `"\text{m}"` | `\t` trở thành ký tự tab |
| `"\begin{aligned}"` | `\b` trở thành ký tự backspace |
| `"\vec{AB}"` | `\v` trở thành ký tự điều khiển |
| `"\alpha"`, `"\sin A"` | Dấu gạch chéo có thể bị mất; KaTeX vẫn có thể nhận chữ còn lại mà không báo lỗi |
| `String.raw` rồi viết `\\frac` | Có thể biến dấu gạch chéo đôi thành lệnh khác, không còn là phân số mong muốn |

Vì vậy, chỉ kiểm tra `.katex-error` là chưa đủ: chữ `alpha` có thể vẫn render nhưng không còn là ký hiệu α.

Quy ước giúp hạn chế nhầm:

- Viết đủ nhóm: `\frac{a+b}{2}`, `\sqrt{x+1}`, `a_{n+1}`, `x^{n+1}`.
- Dùng `\sin`, `\cos`, `\tan`, `\cot`; không để tên hàm thành tích các chữ s, i, n.
- Phân biệt `\sin^{2}\alpha` với `\sin(\alpha^{2})`.
- Dùng `\overrightarrow{AB}` cho vectơ hai điểm, không tự ghép ký hiệu mũi tên vào chữ.
- Dùng `\text{cm}^{2}` cho đơn vị; số thập phân dùng dấu phẩy có thể viết `0{,}6`.
- Cân bằng dấu `{}`, môi trường `\begin`/`\end` và cặp `\left`/`\right`.
- Không thêm gạch chéo để “sửa thử” mà không biết chuỗi lúc chạy chứa gì.

### 17.5. Kiểm tra nghiêm ngặt trước khi mở trình duyệt

Các đoạn dưới phải được kiểm tra bằng phiên bản KaTeX đang cài trong dự án, không chỉ bằng một công cụ xem LaTeX ở nơi khác.

Ví dụ một tệp `.mjs` kiểm tra chuỗi sau khi JavaScript đã diễn giải:

```javascript
import assert from 'node:assert/strict';
import katex from 'katex';

const samples = [
  ['phân số', String.raw`\frac{1}{2}`],
  ['căn', String.raw`\sqrt{x+1}`],
  ['chỉ số', String.raw`a_{n+1}`],
  ['lượng giác', String.raw`\sin^{2}\alpha+\cos^{2}\alpha=1`],
  ['vectơ', String.raw`\overrightarrow{AB}`],
  ['góc và đơn vị', String.raw`A=120^\circ,\quad S=6\,\text{cm}^{2}`]
];

for (const [context, tex] of samples) {
  // Công thức trong quy ước này dùng dấu cách; tab cũng cần được kiểm tra
  // vì rất có thể xuất phát từ lệnh \tan hoặc \theta viết sai chuỗi.
  assert.ok(!/[\u0000-\u0009\u000B-\u001F]/.test(tex),
    `${context}: có ký tự điều khiển, kiểm tra lại cách thoát gạch chéo`);
  assert.ok(katex.renderToString(tex, {
    throwOnError: true, trust: false, output: 'htmlAndMathml'
  }).includes('class="katex"'), `${context}: chưa có kết quả KaTeX`);
}
```

**Sáu mẫu trên chỉ kiểm tra cách tích hợp, không kiểm tra toàn bộ bài.** Antigravity phải thu thập và kiểm tra cả các công thức thật trong:

- Đề, phương án, đáp án và lời giải trắc nghiệm.
- Bối cảnh, từng ý và lời giải Đúng/Sai.
- Bài trả lời ngắn, lý thuyết, ôn tập, flashcard, trò chơi.
- Toàn bộ slide, lời giải ẩn, tab thay thế, thông báo đúng/sai.
- Các công thức được tạo động khi thay góc, đổi chế độ hoặc nhập số.

Chạy thêm các kiểm tra đã có của Bài 5–6. Với bài mới, tạo bộ kiểm tra tương ứng. Không thay tất cả lỗi bằng `throwOnError: false`, không xóa công thức hỏng khỏi bài và không tuyên bố đã kiểm tra toàn bộ nếu chỉ thử sáu mẫu.

### 17.6. Kiểm tra trực quan sau khi render

- [ ] Phân số có tử và mẫu đúng, gạch phân số đầy đủ.
- [ ] Căn phủ đúng biểu thức, không bỏ sót dấu cộng hoặc số hạng.
- [ ] Mũ và chỉ số dưới gắn đúng ký hiệu, không dính thành một số khác.
- [ ] Góc có dấu độ; vectơ có mũi tên và đúng tên hai điểm.
- [ ] Không có công thức đỏ, `.katex-error`, chữ LaTeX thô hoặc dấu `$` chưa xử lí.
- [ ] KaTeX CSS và font công thức được tải; công thức không hiện hai bản chồng nhau.
- [ ] Công thức dài không bị cắt bởi `overflow: hidden`, không vượt mép slide/điện thoại.
- [ ] Các lời giải ẩn được mở ra kiểm tra, không chỉ nhìn trạng thái ban đầu.
- [ ] Đổi slider/tab/đáp án sai vẫn cập nhật đúng công thức.
- [ ] Tệp ngoại tuyến vẫn hiện công thức sau khi tải về.

Nếu MathML phục vụ khả năng truy cập và bản HTML cùng hiện bằng mắt, kiểm tra CSS KaTeX trước. Không xóa MathML chỉ để che hiện tượng hiển thị đôi.

### 17.7. Kiểm chứng toán học sau khi công thức hiển thị đúng

Đối chiếu với nguồn SGK từng dấu, số mũ, chỉ số, mẫu số và điều kiện. Tính độc lập ví dụ, thử các góc đặc biệt, dữ kiện biên, đơn vị và các phương án tương đương. **KaTeX chấp nhận cú pháp không có nghĩa định lí hay đáp án đúng.**

Chỉ hoàn thành khi đồng thời đạt:

1. Chuỗi lúc chạy giữ đúng lệnh LaTeX.
2. KaTeX ở chế độ kiểm tra không báo lỗi cho công thức được dùng.
3. Công thức trên giao diện giống ý nghĩa trong sách, không cắt hoặc mất ký hiệu.
4. Giá trị, dấu, điều kiện áp dụng và lời giải đã được kiểm chứng.

Bàn giao kèm ít nhất một ảnh phân số/căn, một ảnh công thức hình học hoặc lượng giác và một ảnh công thức sau khi tương tác. Báo rõ phần công thức động chưa kiểm tra nếu còn; không hứa “bảo đảm tuyệt đối không lỗi”.

**Tiêu chí cuối cùng:** một học sinh phải nhìn hình hiểu được ý nghĩa, tự thử được, biết vì sao mình sai và có cách làm lại; một giáo viên phải mở lên dạy được; một người phát triển khác phải tái tạo được sản phẩm từ các tệp nguồn.
