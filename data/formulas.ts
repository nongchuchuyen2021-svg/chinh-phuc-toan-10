import type { FormulaCategory } from "@/lib/types";

export const FORMULA_CATEGORIES: FormulaCategory[] = [
  {
    id: "he-thuc-luong",
    title: "Hệ thức lượng trong tam giác",
    emoji: "🔺",
    description: "Bộ công thức định lí côsin, định lí sin, độ dài đường trung tuyến và 5 công thức tính diện tích tam giác.",
    formulas: [
      {
        id: "cosin",
        name: "Định lí Côsin",
        latex: "a^2 = b^2 + c^2 - 2bc \\cos A",
        note: "Hệ quả tính góc: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$",
        tag: "Hình học"
      },
      {
        id: "sin",
        name: "Định lí Sin",
        latex: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
        note: "R là bán kính đường tròn ngoại tiếp tam giác",
        tag: "Hình học"
      },
      {
        id: "dien-tich-sin",
        name: "Diện tích theo sin góc xen giữa",
        latex: "S = \\frac{1}{2}ab \\sin C = \\frac{1}{2}bc \\sin A = \\frac{1}{2}ca \\sin B",
        note: "Áp dụng khi biết 2 cạnh và góc kẹp giữa",
        tag: "Diện tích"
      },
      {
        id: "dien-tich-heron",
        name: "Công thức Hê-rông (Heron)",
        latex: "S = \\sqrt{p(p-a)(p-b)(p-c)}",
        note: "với $p = \\frac{a+b+c}{2}$ là nửa chu vi",
        tag: "Diện tích"
      },
      {
        id: "dien-tich-r-lon",
        name: "Diện tích theo bán kính ngoại tiếp $R$",
        latex: "S = \\frac{abc}{4R} \\implies R = \\frac{abc}{4S}",
        tag: "Diện tích"
      },
      {
        id: "dien-tich-r-nho",
        name: "Diện tích theo bán kính nội tiếp $r$",
        latex: "S = p \\cdot r \\implies r = \\frac{S}{p}",
        tag: "Diện tích"
      }
    ]
  },
  {
    id: "hinh-hoc-vecto",
    title: "Vectơ & Toạ độ Oxy",
    emoji: "↗️",
    description: "Các quy tắc cộng, trừ vectơ, toạ độ điểm, toạ độ vectơ, tích vô hướng và khoảng cách góc.",
    formulas: [
      {
        id: "quy-tac-3-diem",
        name: "Quy tắc ba điểm & Hình bình hành",
        latex: "\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}, \\quad \\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC} \\text{ (hình bình hành)}",
        tag: "Vectơ"
      },
      {
        id: "quy-tac-hieu",
        name: "Quy tắc hiệu hai vectơ",
        latex: "\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}, \\quad \\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}",
        tag: "Vectơ"
      },
      {
        id: "trung-diem-trong-tam",
        name: "Công thức Trung điểm & Trọng tâm",
        latex: "\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}, \\quad \\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}",
        note: "$I$ là trung điểm đoạn thẳng $AB$, $G$ là trọng tâm $\\Delta ABC$",
        tag: "Vectơ"
      },
      {
        id: "tich-vo-huong",
        name: "Tích vô hướng hai vectơ",
        latex: "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})",
        note: "$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$",
        tag: "Tích vô hướng"
      },
      {
        id: "toa-do-vecto",
        name: "Toạ độ của vectơ theo hai điểm",
        latex: "\\overrightarrow{AB} = (x_B - x_A; y_B - y_A), \\quad |\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}",
        tag: "Toạ độ Oxy"
      },
      {
        id: "toa-do-tich-vo-huong",
        name: "Biểu thức toạ độ tích vô hướng & Góc",
        latex: "\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2, \\quad \\cos(\\vec{u}, \\vec{v}) = \\frac{x_1 x_2 + y_1 y_2}{\\sqrt{x_1^2 + y_1^2} \\cdot \\sqrt{x_2^2 + y_2^2}}",
        note: "với $\\vec{u} = (x_1; y_1)$, $\\vec{v} = (x_2; y_2)$",
        tag: "Toạ độ Oxy"
      },
      {
        id: "do-dai-vecto",
        name: "Độ dài vectơ & Khoảng cách hai điểm",
        latex: "|\\vec{u}| = \\sqrt{x^2 + y^2}, \\quad AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}",
        tag: "Toạ độ Oxy"
      },
      {
        id: "khoang-cach-diem-duong-thang",
        name: "Khoảng cách từ điểm đến đường thẳng",
        latex: "d(M_0, \\Delta) = \\frac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}",
        note: "với $M_0(x_0; y_0)$ và $\\Delta: ax + by + c = 0$",
        tag: "Đường thẳng"
      }
    ]
  },
  {
    id: "ham-so-bac-hai",
    title: "Hàm số & Tam thức bậc hai",
    emoji: "📉",
    description: "Đỉnh parabol, trục đối xứng, bảng biến thiên, định lí dấu tam thức bậc hai và bất phương trình bậc hai.",
    formulas: [
      {
        id: "dinh-parabol",
        name: "Toạ độ đỉnh Parabol",
        latex: "I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)",
        note: "với $y = ax^2 + bx + c\\ (a \\neq 0)$, $\\Delta = b^2 - 4ac$",
        tag: "Parabol"
      },
      {
        id: "truc-doi-xung",
        name: "Trục đối xứng của Parabol",
        latex: "x = -\\frac{b}{2a}",
        tag: "Parabol"
      },
      {
        id: "dau-tam-thuc",
        name: "Định lí về dấu của tam thức bậc hai",
        latex: "\\Delta < 0 \\implies a \\cdot f(x) > 0 \\quad (\\forall x \\in \\mathbb{R})",
        note: "Tam thức cùng dấu hệ số a với mọi số thực x khi biệt thức âm",
        tag: "Bất phương trình"
      }
    ]
  },
  {
    id: "to-hop-xac-suat",
    title: "Đại số tổ hợp & Xác suất",
    emoji: "🎲",
    description: "Hoán vị, chỉnh hợp, tổ hợp, khai triển nhị thức Newton và định nghĩa xác suất cổ điển.",
    formulas: [
      {
        id: "hoan-vi",
        name: "Số hoán vị ($P_n$)",
        latex: "P_n = n! = n \\times (n-1) \\times \\dots \\times 1",
        note: "Quy ước: $0! = 1$",
        tag: "Tổ hợp"
      },
      {
        id: "chinh-hop",
        name: "Số chỉnh hợp ($A_n^k$)",
        latex: "A_n^k = \\frac{n!}{(n-k)!} \\quad (1 \\le k \\le n)",
        note: "Chọn k phần tử trong n phần tử CÓ XẾP THỨ TỰ",
        tag: "Tổ hợp"
      },
      {
        id: "to-hop",
        name: "Số tổ hợp ($C_n^k$)",
        latex: "C_n^k = \\frac{n!}{k!(n-k)!} \\quad (0 \\le k \\le n)",
        note: "Chọn k phần tử trong n phần tử KHÔNG KỂ THỨ TỰ",
        tag: "Tổ hợp"
      },
      {
        id: "nhi-thuc-newton-4",
        name: "Khai triển Nhị thức Newton bậc 4",
        latex: "(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4",
        tag: "Nhị thức"
      },
      {
        id: "nhi-thuc-newton-5",
        name: "Khai triển Nhị thức Newton bậc 5",
        latex: "(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5",
        tag: "Nhị thức"
      },
      {
        id: "xac-suat-co-dien",
        name: "Định nghĩa cổ điển của xác suất",
        latex: "P(A) = \\frac{n(A)}{n(\\Omega)}",
        note: "$n(A)$ là số kết quả thuận lợi, $n(\\Omega)$ là số phần tử không gian mẫu",
        tag: "Xác suất"
      }
    ]
  },
  {
    id: "thong-ke",
    title: "Thống kê không ghép nhóm",
    emoji: "📊",
    description: "Số trung bình, trung vị, tứ phân vị, mốt, khoảng biến thiên, phương sai và độ lệch chuẩn.",
    formulas: [
      {
        id: "so-trung-binh",
        name: "Số trung bình cộng ($\\bar{x}$)",
        latex: "\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{1}{n} \\sum_{i=1}^k m_i x_i",
        tag: "Số đo xu thế"
      },
      {
        id: "phuong-sai",
        name: "Phương sai mẫu ($s^2$)",
        latex: "s^2 = \\frac{1}{n} \\sum_{i=1}^n (x_i - \\bar{x})^2 = \\frac{1}{n} \\sum_{i=1}^n x_i^2 - (\\bar{x})^2",
        tag: "Độ phân tán"
      },
      {
        id: "do-lech-chuan",
        name: "Độ lệch chuẩn ($s$)",
        latex: "s = \\sqrt{s^2}",
        note: "Đơn vị cùng đơn vị với mẫu số liệu ban đầu",
        tag: "Độ phân tán"
      },
      {
        id: "khoang-bien-thien",
        name: "Khoảng biến thiên & Khoảng tứ phân vị",
        latex: "R = x_{\\max} - x_{\\min}, \\quad \\Delta_Q = Q_3 - Q_1",
        tag: "Độ phân tán"
      }
    ]
  }
];
