import type { LessonGame, SortGame, MatchGame } from "@/lib/types";

// Game 1: Máy dò Mệnh đề Toán học (Phân loại vuốt thẻ)
// Định nghĩa SGK: Mệnh đề toán học là khẳng định mang tính đúng hoặc sai khách quan,
// không thể vừa đúng vừa sai. Câu cảm thán, câu hỏi, câu mệnh lệnh hay mệnh đề chứa biến
// (chưa xác định giá trị của biến) KHÔNG phải là mệnh đề toán học.
const sortGame: SortGame = {
  kind: "sort",
  id: "may-do-menh-de",
  title: "Máy dò Mệnh đề Toán học",
  emoji: "🧭",
  instructions:
    "Vuốt thẻ (hoặc bấm nút) để phân loại: Khẳng định có tính đúng hoặc sai rõ ràng khách quan mới là MỆNH ĐỀ TOÁN HỌC.",
  matchLabel: "Là Mệnh đề",
  matchEmoji: "✅",
  noMatchLabel: "Không phải",
  noMatchEmoji: "❌",
  items: [
    {
      id: "md-1",
      emoji: "🔢",
      label: "Số 17 là số nguyên tố.",
      isMatch: true,
      explain: "Là mệnh đề ĐÚNG vì 17 chỉ chia hết cho 1 và chính nó.",
    },
    {
      id: "no-1",
      emoji: "🌤️",
      label: "Hôm nay trời đẹp quá!",
      isMatch: false,
      explain: "Câu cảm thán, mang tính chủ quan cảm xúc, không có chân trị đúng/sai.",
    },
    {
      id: "md-2",
      emoji: "📐",
      label: "$\\sqrt{2}$ là một số hữu tỉ.",
      isMatch: true,
      explain: "Là mệnh đề SAI (vì $\\sqrt{2}$ là số vô tỉ), nhưng vẫn là mệnh đề vì xác định rõ tính đúng/sai.",
    },
    {
      id: "no-2",
      emoji: "❓",
      label: "Bạn đã làm bài tập về nhà chưa?",
      isMatch: false,
      explain: "Câu hỏi, không khẳng định một sự việc nên không thể xét tính đúng/sai.",
    },
    {
      id: "no-3",
      emoji: "🔍",
      label: "$x^2 - 4 = 0$",
      isMatch: false,
      explain: "Đây là mệnh đề chứa biến $P(x)$, chưa biết giá trị của $x$ nên chưa thể khẳng định đúng hay sai.",
    },
    {
      id: "md-3",
      emoji: "🔺",
      label: "Tổng ba góc trong một tam giác bằng $180^\\circ$.",
      isMatch: true,
      explain: "Là mệnh đề ĐÚNG theo định lí hình học Euclide.",
    },
    {
      id: "no-4",
      emoji: "📢",
      label: "Hãy chú ý lắng nghe thầy cô giảng bài!",
      isMatch: false,
      explain: "Câu cầu khiến / mệnh lệnh, không phải câu khẳng định.",
    },
    {
      id: "md-4",
      emoji: "0️⃣",
      label: "Số 0 là số tự nhiên nhỏ nhất.",
      isMatch: true,
      explain: "Là mệnh đề ĐÚNG ($0 \\in \\mathbb{N}$ và $0 \\le n, \\forall n \\in \\mathbb{N}$).",
    },
    {
      id: "no-5",
      emoji: "🎨",
      label: "Toán học là môn học thú vị nhất trong các môn!",
      isMatch: false,
      explain: "Ý kiến / quan điểm cá nhân mang tính sở thích, không phải chân lý khách quan.",
    },
    {
      id: "md-5",
      emoji: "⚡",
      label: "Phương trình $x^2 + 1 = 0$ có nghiệm thực.",
      isMatch: true,
      explain: "Là mệnh đề SAI (vì $x^2 + 1 \\ge 1 > 0, \\forall x \\in \\mathbb{R}$), nhưng có chân trị rõ ràng nên là mệnh đề.",
    },
    {
      id: "md-6",
      emoji: "⭕",
      label: "Số $\\pi$ là một số vô tỉ.",
      isMatch: true,
      explain: "Là mệnh đề ĐÚNG (số thập phân vô hạn không tuần hoàn).",
    },
    {
      id: "no-6",
      emoji: "⚖️",
      label: "$2x + 3 > 5$",
      isMatch: false,
      explain: "Mệnh đề chứa biến, đúng hay sai phụ thuộc vào giá trị của biến $x$.",
    },
    {
      id: "md-7",
      emoji: "🏛️",
      label: "Hà Nội là thủ đô của Việt Nam.",
      isMatch: true,
      explain: "Là mệnh đề ĐÚNG (khẳng định thực tế khách quan xác thực).",
    },
    {
      id: "md-8",
      emoji: "📏",
      label: "Mọi hình vuông đều là hình chữ nhật.",
      isMatch: true,
      explain: "Là mệnh đề ĐÚNG vì hình vuông có đủ 4 góc vuông.",
    },
    {
      id: "no-7",
      emoji: "🤔",
      label: "Số $n$ có chia hết cho 3 không?",
      isMatch: false,
      explain: "Câu hỏi nghi vấn, không phải mệnh đề.",
    },
    {
      id: "md-9",
      emoji: "⭐",
      label: "$\\forall x \\in \\mathbb{R}, x^2 \\ge 0$.",
      isMatch: true,
      explain: "Là mệnh đề ĐÚNG với lượng từ 'với mọi' $\\forall$.",
    },
  ],
};

// Game 2: Thợ săn Phủ định & Lượng từ (Ghép cặp logic)
// Ghép đôi mệnh đề P với mệnh đề phủ định P_bar chuẩn xác nhất
const matchGame: MatchGame = {
  kind: "match",
  id: "tho-san-phu-dinh",
  title: "Thợ săn Phủ định & Lượng từ",
  emoji: "🏹",
  instructions:
    "Chọn một thẻ Mệnh đề $P$ ở cột trái và ghép với Mệnh đề phủ định $\\overline{P}$ chính xác tương ứng ở cột phải.",
  pairs: [
    {
      id: "pair-1",
      left: "$\\forall x \\in \\mathbb{R},\\ x^2 > 0$",
      right: "$\\exists x \\in \\mathbb{R},\\ x^2 \\le 0$",
      explain: "Phủ định của lượng từ $\\forall$ là $\\exists$, và phủ định của dấu $>$ là $\\le$. (Lưu ý: $x = 0$ làm cho $x^2 = 0$).",
    },
    {
      id: "pair-2",
      left: "$\\exists x \\in \\mathbb{Q},\\ x^2 = 2$",
      right: "$\\forall x \\in \\mathbb{Q},\\ x^2 \\ne 2$",
      explain: "Phủ định của lượng từ $\\exists$ là $\\forall$, và phủ định của dấu $=$ là $\\ne$.",
    },
    {
      id: "pair-3",
      left: "Mọi số nguyên tố đều là số lẻ.",
      right: "Tồn tại một số nguyên tố không phải là số lẻ (số chẵn).",
      explain: "Phủ định của 'Mọi...' là 'Tồn tại ít nhất một...', và số 2 chính là số nguyên tố chẵn.",
    },
    {
      id: "pair-4",
      left: "Tam giác $ABC$ là tam giác đều.",
      right: "Tam giác $ABC$ không phải là tam giác đều.",
      explain: "Mệnh đề phủ định của một khẳng định đơn giản là thêm từ 'không' hoặc 'không phải'.",
    },
    {
      id: "pair-5",
      left: "$\\forall n \\in \\mathbb{N},\\ 2^n \\ge n$",
      right: "$\\exists n \\in \\mathbb{N},\\ 2^n < n$",
      explain: "Phủ định của 'với mọi' là 'tồn tại', phủ định của $\\ge$ là $<$.",
    },
    {
      id: "pair-6",
      left: "Mọi hình thoi đều là hình vuông.",
      right: "Có ít nhất một hình thoi không phải là hình vuông.",
      explain: "Phủ định của 'Mọi' là 'Có ít nhất một... không phải'.",
    },
  ],
};

const games: LessonGame[] = [sortGame, matchGame];

export default games;
