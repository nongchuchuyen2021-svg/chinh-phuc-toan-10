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

// Game 3: Trọng tài Cần & Đủ (Phân loại vuốt thẻ)
// Điểm hay bị nhầm nhất của mệnh đề kéo theo P ⇒ Q: trong định lí "Nếu P thì Q"
// (luôn đúng), P (đứng TRƯỚC mũi tên) là điều kiện ĐỦ để có Q; Q (đứng SAU mũi
// tên) là điều kiện CẦN để có P. Mỗi định lí dưới đây xuất hiện 2 lần liền
// nhau: một câu phát biểu ĐÚNG chiều, một câu ĐẢO NGƯỢC — cố tình đặt sát
// nhau để học sinh thấy rõ bẫy chỉ khác nhau ở chiều "cần/đủ".
const canDuGame: SortGame = {
  kind: "sort",
  id: "trong-tai-can-du",
  title: "Trọng tài Cần & Đủ",
  emoji: "⚖️",
  instructions:
    "Vuốt thẻ (hoặc bấm nút) để phân loại: câu phát biểu 'điều kiện cần / điều kiện đủ' này ĐÚNG chiều, hay bị ĐẢO NGƯỢC (P và Q bị đổi chỗ cho nhau)?",
  matchLabel: "Đúng chiều",
  matchEmoji: "✅",
  noMatchLabel: "Đảo ngược (Sai)",
  noMatchEmoji: "🔄",
  items: [
    {
      id: "cd-1",
      emoji: "🔷",
      label: "Định lí: 'Nếu tứ giác là hình vuông thì tứ giác có 4 góc vuông.' Phát biểu: 'Là hình vuông là điều kiện ĐỦ để có 4 góc vuông.'",
      isMatch: true,
      explain: "Đúng — 'là hình vuông' đứng TRƯỚC mũi tên nên là điều kiện ĐỦ để có kết luận '4 góc vuông'.",
    },
    {
      id: "cd-2",
      emoji: "🔶",
      label: "Cùng định lí trên. Phát biểu: 'Có 4 góc vuông là điều kiện ĐỦ để tứ giác là hình vuông.'",
      isMatch: false,
      explain: "Sai — đã đảo ngược! 'Có 4 góc vuông' đứng SAU mũi tên nên chỉ là điều kiện CẦN, không phải đủ (hình chữ nhật cũng có 4 góc vuông mà chưa chắc là hình vuông).",
    },
    {
      id: "cd-3",
      emoji: "🔢",
      label: "Định lí: 'Nếu n chia hết cho 6 thì n chia hết cho 3.' Phát biểu: 'n chia hết cho 6 là điều kiện ĐỦ để n chia hết cho 3.'",
      isMatch: true,
      explain: "Đúng — 'chia hết cho 6' đứng trước mũi tên nên là điều kiện đủ để suy ra 'chia hết cho 3'.",
    },
    {
      id: "cd-4",
      emoji: "🔢",
      label: "Cùng định lí trên. Phát biểu: 'n chia hết cho 3 là điều kiện ĐỦ để n chia hết cho 6.'",
      isMatch: false,
      explain: "Sai — đảo ngược. Phản ví dụ: $n = 3$ chia hết cho 3 nhưng không chia hết cho 6. 'Chia hết cho 3' chỉ là điều kiện CẦN.",
    },
    {
      id: "cd-5",
      emoji: "🔺",
      label: "Định lí: 'Nếu tam giác đều thì tam giác cân.' Phát biểu: 'Tam giác cân là điều kiện CẦN để tam giác đều.'",
      isMatch: true,
      explain: "Đúng — 'tam giác cân' đứng sau mũi tên nên đúng là điều kiện cần để có 'tam giác đều'.",
    },
    {
      id: "cd-6",
      emoji: "🔻",
      label: "Cùng định lí trên. Phát biểu: 'Tam giác cân là điều kiện ĐỦ để tam giác đều.'",
      isMatch: false,
      explain: "Sai — một tam giác cân (ví dụ cân nhưng góc ở đỉnh 100°) chưa chắc đã đều, nên 'cân' không đủ để suy ra 'đều'.",
    },
    {
      id: "cd-7",
      emoji: "✖️",
      label: "Định lí: 'Nếu x = 2 thì x² = 4.' Phát biểu: 'x = 2 là điều kiện ĐỦ để x² = 4.'",
      isMatch: true,
      explain: "Đúng — 'x = 2' đứng trước mũi tên nên là điều kiện đủ để có 'x² = 4'.",
    },
    {
      id: "cd-8",
      emoji: "➗",
      label: "Cùng định lí trên. Phát biểu: 'x² = 4 là điều kiện ĐỦ để x = 2.'",
      isMatch: false,
      explain: "Sai — đảo ngược. $x = -2$ cũng cho $x^2 = 4$ nhưng không phải $x = 2$, nên 'x² = 4' không đủ để suy ra 'x = 2'.",
    },
    {
      id: "cd-9",
      emoji: "🧮",
      label: "Định lí: 'Nếu n chia hết cho 4 thì n chia hết cho 2.' Phát biểu: 'n chia hết cho 2 là điều kiện CẦN để n chia hết cho 4.'",
      isMatch: true,
      explain: "Đúng — 'chia hết cho 2' đứng sau mũi tên nên đúng là điều kiện cần để có 'chia hết cho 4'.",
    },
    {
      id: "cd-10",
      emoji: "🧮",
      label: "Cùng định lí trên. Phát biểu: 'n chia hết cho 2 là điều kiện ĐỦ để n chia hết cho 4.'",
      isMatch: false,
      explain: "Sai — phản ví dụ: $n = 2$ chia hết cho 2 nhưng không chia hết cho 4. 'Chia hết cho 2' chỉ là điều kiện cần, không đủ.",
    },
    {
      id: "cd-11",
      emoji: "📐",
      label: "Định lí: 'Nếu ABCD là hình chữ nhật thì ABCD có hai đường chéo bằng nhau.' Phát biểu: 'Là hình chữ nhật là điều kiện ĐỦ để có hai đường chéo bằng nhau.'",
      isMatch: true,
      explain: "Đúng — 'là hình chữ nhật' đứng trước mũi tên nên là điều kiện đủ để có 'hai đường chéo bằng nhau'.",
    },
    {
      id: "cd-12",
      emoji: "📏",
      label: "Cùng định lí trên. Phát biểu: 'Có hai đường chéo bằng nhau là điều kiện ĐỦ để ABCD là hình chữ nhật.'",
      isMatch: false,
      explain: "Sai — đảo ngược. Hình thang cân cũng có hai đường chéo bằng nhau mà không phải hình chữ nhật, nên điều kiện này chưa đủ.",
    },
  ],
};

const games: LessonGame[] = [sortGame, matchGame, canDuGame];

export default games;
