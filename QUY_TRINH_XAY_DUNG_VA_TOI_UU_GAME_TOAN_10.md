# 🎮 QUY TRÌNH KỸ THUẬT: XÂY DỰNG & TỐI ƯU ĐẤU TRƯỜNG GAME TOÁN 10
> **Phiên bản**: Chuẩn hóa toàn diện theo trải nghiệm Web Tin 10 (`luyen-trac-nghiem-tin-10`)  
> **Mục tiêu**: Tương tác mượt mà, phản hồi tức thì, triệt tiêu độ trễ, biến lý thuyết trừu tượng thành phản xạ tự nhiên.

---

## 🧭 I. TRIẾT LÝ THIẾT KẾ ĐẤU TRƯỜNG GAME TOÁN HỌC

1. **Sư phạm sâu sắc - Đánh trúng cạm bẫy**: Mini-game không tạo ra chỉ để bấm vui vẻ, mà mỗi trò chơi giải quyết triệt để 1 cạm bẫy kinh điển của bài học (Ví dụ: Bài 1 phân biệt Mệnh đề vs Không phải, Cần vs Đủ, Phủ định lượng từ $\forall \leftrightarrow \exists$).
2. **Vào chơi tức thì (Instant Access)**: Giản lược tối đa các bước xác nhận, giải thích dài dòng hay state trung gian; học sinh nhấn vào là thẻ game sẵn sàng hoạt động ngay.
3. **Đa kênh tương tác (Dual Controls)**: Hỗ trợ cả thao tác vuốt thẻ cảm ứng/kéo chuột mượt mà VÀ các nút bấm to rõ ngay bên dưới (phù hợp tuyệt đối cho học sinh dùng điện thoại).
4. **Hiển thị KaTeX chuẩn xác, chống giật (No Reconcile Glitch)**: Công thức Toán học luôn được render sạch, ổn định, không bị đọng lại công thức của câu trước khi chuyển thẻ.
5. **Khắc sâu kiến thức ngay sau mỗi thao tác**: Sau khi chọn, hộp giải thích bản chất toán học (`explain`) mở ra ngay lập tức kèm âm thanh phản hồi trực quan.

---

## 🕹️ II. HAI THỂ THỨC GAME CHUẨN MỰC

### 1. Thể thức Sort Game (Máy dò logic / Trọng tài phân loại)
- **Cơ chế**: Vuốt thẻ sang Trái/Phải hoặc bấm 1 trong 2 nút phân loại bên dưới.
- **Cấu trúc dữ liệu trong `data/games/bai-XX.ts`**:
  ```typescript
  export interface SortGame {
    kind: "sort";
    id: string;             // Định danh game (vd: "may-do-menh-de", "trong-tai-can-du")
    title: string;          // Tên game (vd: "Máy dò Mệnh đề Toán học")
    emoji: string;          // Biểu tượng (vd: "🧭")
    instructions: string;   // Hướng dẫn ngắn gọn (có thể chứa KaTeX)
    matchLabel: string;     // Nhãn đúng/thuộc về (vd: "Là Mệnh đề", "Đúng chiều")
    matchEmoji: string;     // Emoji nhãn đúng (vd: "✅")
    noMatchLabel: string;   // Nhãn sai/không thuộc (vd: "Không phải", "Đảo ngược")
    noMatchEmoji: string;   // Emoji nhãn sai (vd: "❌", "🔄")
    items: SortGameItem[];  // Danh sách thẻ câu hỏi (12 - 16 thẻ)
  }

  export interface SortGameItem {
    id: string;             // ID duy nhất của thẻ
    emoji: string;          // Icon minh họa cho câu hỏi
    label: string;          // Nội dung câu hỏi (chứa KaTeX kẹp giữa $..$)
    isMatch: boolean;       // true = matchLabel, false = noMatchLabel
    explain: string;        // Lời giải thích bản chất toán học chi tiết
  }
  ```

- **Kỹ thuật trọng tâm trong `components/SortGame.tsx`**:
  - **Pointer Events**: Dùng `onPointerDown`, `onPointerMove`, `onPointerUp` với `setPointerCapture` để mượt mà trên cả chuột và cảm ứng đa điểm di động.
  - **Swipe Threshold**: Đặt ngưỡng `SWIPE_THRESHOLD = 80px`. Khi thả tay qua ngưỡng, tự động gọi `commit(true/false)`.
  - **Khắc phục lỗi KaTeX khi chuyển câu**: Đặt `key={item.id}` trực tiếp tại `<MathText key={item.id} content={item.label} />` để React unmount/remount thẻ KaTeX, tuyệt đối không bị dính công thức cũ.
  - **Hộp giải thích tức thì**: Khi `answered` khác null, hiển thị ngay hộp giải thích viền xanh/đỏ với icon bóng bẩy và nút "Tiếp tục câu tiếp theo →".

---

### 2. Thể thức Match Game (Thợ săn logic / Ghép đôi tương ứng)
- **Cơ chế**: Nhấp 1 thẻ cột trái $\rightarrow$ Nhấp 1 thẻ cột phải (Cơ chế *Tap-to-Pair*).
- **Cấu trúc dữ liệu trong `data/games/bai-XX.ts`**:
  ```typescript
  export interface MatchGame {
    kind: "match";
    id: string;             // vd: "tho-san-phu-dinh"
    title: string;          // vd: "Thợ săn Phủ định & Lượng từ"
    emoji: string;          // vd: "🏹"
    instructions: string;
    leftLabel?: string;     // Nhãn cột trái (vd: "📌 Mệnh đề $P$")
    rightLabel?: string;    // Nhãn cột phải (vd: "🔄 Mệnh đề Phủ định $\\overline{P}$")
    pairs: MatchPairItem[]; // Danh sách cặp ghép (6 - 8 cặp)
  }

  export interface MatchPairItem {
    id: string;
    left: string;           // Nội dung thẻ trái (có KaTeX)
    right: string;          // Nội dung thẻ phải (có KaTeX)
    explain: string;        // Giải thích logic vì sao hai vế ghép với nhau
  }
  ```

- **Kỹ thuật trọng tâm trong `components/MatchGame.tsx`**:
  - Tự động xáo trộn cột phải (`shuffle`) mỗi lần bắt đầu hoặc chơi lại.
  - **Phản hồi tức thì**:
    - Khi chọn: Viền phát sáng Cyan (cột trái) / Amber (cột phải).
    - Ghép sai: Cả 2 thẻ rung lắc (`animate-shake`), phát sáng đỏ Rose và tự mở khóa sau 700ms.
    - Ghép đúng: Đổi màu xanh Emerald, gạch ngang mờ và mở hộp giải thích chi tiết ngay bên dưới.
  - **Responsive 2 cột trên điện thoại**: Dùng `grid grid-cols-2 gap-2 sm:gap-4`, padding chữ vừa vặn, font KaTeX co dãn không tràn viền.

---

## ⚡ III. QUY CHUẨN ĐIỀU HƯỚNG TỨC THÌ (INSTANT REACTIVE VIEW)

Học hỏi trực tiếp từ ưu điểm chuyển cảnh của Web Tin 10:

1. **Tại `components/LessonClient.tsx`**:
   - Khi học sinh bấm vào tab **🎮 Đấu trường Game**, giao diện hiển thị ngay lập tức `<GameHub />` không có độ trễ tải trang hay state trung gian.
   - Breadcrumb và tiêu đề bài học được giữ gọn gàng phía trên, dễ dàng chuyển sang các phần khác (Lý thuyết, Trắc nghiệm, Ôn tập).

2. **Tại `components/GameHub.tsx`**:
   - **Trường hợp bài học có 1 Game**: Tự động mở thẳng màn chơi của game đó, nút "Trở về" đưa trực tiếp về bài học.
   - **Trường hợp bài học có 2 - 3 Game**:
     - Hiển thị danh sách thẻ game dạng card lớn, hiệu ứng hover glow neon.
     - Hiển thị huy hiệu kỷ lục điểm (`best%`) từ `localStorage`.
     - Nhấn vào game nào là chuyển sang màn chơi của game đó ngay lập tức (`setActive(g)`).
     - Trong màn chơi luôn có nút `← Trở về` góc trên bên trái để quay lại danh sách chọn game.

---

## 🔊 IV. HỆ THỐNG PHẢN HỒI, ÂM THANH & REVIEW THẺ SAI

1. **Hiệu ứng Âm thanh sống động (`lib/sound.ts`)**:
   - `playClick()`: Khi chạm nút, chọn thẻ.
   - `playCorrect()`: Khi chọn đúng hoặc ghép đúng cặp.
   - `playWrong()`: Khi chọn sai hoặc ghép nhầm.
   - `playStreak()`: Khi đạt chuỗi đúng liên tiếp từ 3 câu trở lên.
   - `playCelebration()`: Khi hoàn thành game với điểm số xuất sắc ($\ge 80\%$).

2. **Màn hình Tổng kết & Rút kinh nghiệm**:
   - Bắn pháo hoa Confetti chúc mừng khi đạt từ 80% trở lên.
   - **Mục "Xem lại các thẻ cần lưu ý rút kinh nghiệm"**: Hiển thị toàn bộ các thẻ mà học sinh đã chọn sai trong lượt chơi, chỉ rõ đáp án chuẩn và lời giải thích sâu sắc để học sinh khắc phục trước khi chơi lại.

---

## 📝 V. CHECKLIST 5 BƯỚC TRIỂN KHAI CHO BÀI HỌC MỚI

Khi triển khai Đấu trường Game cho một bài học mới (Bài 2, Bài 3,...), thực hiện tuần tự:

- [ ] **Bước 1**: Phân tích SGK và xác định 2 - 3 cạm bẫy / kỹ năng phản xạ cốt lõi của bài.
- [ ] **Bước 2**: Khởi tạo file `data/games/bai-XX.ts` gồm 2 đến 3 game (ít nhất 1 SortGame và 1 MatchGame).
- [ ] **Bước 3**: Soạn thảo các khẳng định và cặp ghép, đảm bảo công thức Toán kẹp trong `$..$` chuẩn KaTeX và có trường `explain` sâu sắc.
- [ ] **Bước 4**: Đăng ký game vào `lib/games.ts` tại `GAMES_MAP["bai-XX"] = baiXX`.
- [ ] **Bước 5**: Chạy `npm run build` kiểm tra biên dịch tĩnh, kiểm thử thao tác vuốt chạm trên cả máy tính lẫn chế độ Device Toolbar (F12) trên trình duyệt.
