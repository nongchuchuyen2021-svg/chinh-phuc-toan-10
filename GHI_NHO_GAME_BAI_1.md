# 📝 Ghi Nhớ: Tối Ưu & Sửa Lỗi Game Bài 1 (So Với Web Tin 10)

> **Thời điểm lưu**: Tối 17/09/2026
> **Mục tiêu phiên tiếp theo**: Đưa trải nghiệm tương tác, độ mượt mà và tính dễ dùng của phần Game & Ôn tập Toán 10 tiệm cận / vượt trội so với Web Tin 10 (`luyen-trac-nghiem-tin-10`).

---

## 📌 Các vấn đề & Phản hồi từ trải nghiệm thực tế

### 1. Điều hướng Tab / Chuyển màn hình chưa tức thì (Trọng tâm)
- **Hiện tượng**: Khi nhấn vào mục nào đó (như Trung tâm Game, Ôn tập tổng kết, hoặc chọn loại game), giao diện chưa hiển thị ngay, có độ trễ hoặc luồng trung gian rườm rà.
- **Chuẩn từ Web Tin 10**: Nhấn vào tab hay mục nào là giao diện chuyển đổi mượt mà, phản hồi lập tức, trực quan và không gây ngắt quãng cảm xúc học tập.
- **Giải pháp cần làm**:
  - Rà soát lại `LessonClient.tsx` và `GameHub.tsx` ở `chinh-phuc-toan-10/components/`.
  - Giản lược state trung gian không cần thiết, cho phép chuyển đổi tức thì (instant switch / reactive view) giống luồng của Tin 10.

---

### 2. Trải nghiệm thao tác (UX) và độ dễ dùng của Game Bài 1
- **Hiện tượng**: Các game bài 1 (Kéo thả nối cặp MatchGame, sắp xếp SortGame, trắc nghiệm nhanh SpeedMatch...) còn khá nhiều điểm cấn, chưa thân thiện và dễ dùng như Tin 10 (đặc biệt khi dùng chuột hoặc chạm trên điện thoại/màn cảm ứng).
- **So sánh chuẩn đối chiếu**:
  - `luyen-trac-nghiem-tin-10/components/GameHub.tsx`
  - `luyen-trac-nghiem-tin-10/components/SortGame.tsx`
  - `luyen-trac-nghiem-tin-10/components/QuizReview.tsx`
- **Giải pháp cần làm**:
  - Kiểm tra kích thước nút bấm, font chữ công thức toán trong thẻ game (phải rõ nét, dễ đọc, không bị tràn khung).
  - Tối ưu thao tác vuốt chạm / click chọn thẻ: thao tác chọn 1 thẻ bên trái -> chọn 1 thẻ bên phải (tap-to-pair) đơn giản, dễ trúng hơn là bắt buộc kéo thả phức tạp trên điện thoại.
  - Tinh gọn phần giới thiệu để học sinh vào chơi được ngay mà không phải qua quá nhiều bước xác nhận.

---

### 3. Danh sách file liên quan cần xử lý trong buổi tới

| Thành phần | Đường dẫn file |
|---|---|
| **Điều hướng bài học** | `e:\du-an\chinh-phuc-toan-10\components\LessonClient.tsx` |
| **Sảnh chọn Game** | `e:\du-an\chinh-phuc-toan-10\components\GameHub.tsx` |
| **Game Nối Cặp** | `e:\du-an\chinh-phuc-toan-10\components\MatchGame.tsx` |
| **Game Sắp Xếp** | `e:\du-an\chinh-phuc-toan-10\components\SortGame.tsx` |
| **Ôn Tập Tổng Kết** | `e:\du-an\chinh-phuc-toan-10\components\SummaryReview.tsx` |
| **Dữ liệu Game Bài 1** | `e:\du-an\chinh-phuc-toan-10\data\games\bai-01.ts` |
| **Tham chiếu chuẩn Tin 10** | `e:\du-an\luyen-trac-nghiem-tin-10\components\GameHub.tsx` & `SortGame.tsx` |

---

> 💡 *Khi mở lại dự án, chỉ cần yêu cầu: "Tiếp tục sửa lỗi và tối ưu UX game bài 1 theo ghi nhớ" là có thể bắt tay xử lý ngay!*
>
> 📖 *Tài liệu quy trình chi tiết*: Xem tại [`QUY_TRINH_XAY_DUNG_VA_TOI_UU_GAME_TOAN_10.md`](./QUY_TRINH_XAY_DUNG_VA_TOI_UU_GAME_TOAN_10.md).
