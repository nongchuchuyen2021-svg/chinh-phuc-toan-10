import type { Question } from "@/lib/types";

const bai05: Question[] = [
  {
    id: "b5-q1",
    q: "Trong mặt phẳng toạ độ $Oxy$, cho điểm $M(x_0; y_0)$ nằm trên nửa đường tròn đơn vị sao cho $\\widehat{xOM} = \\alpha$. Khẳng định nào sau đây là đúng?",
    options: [
      "$\\sin \\alpha = x_0$ và $\\cos \\alpha = y_0$",
      "$\\sin \\alpha = y_0$ và $\\cos \\alpha = x_0$",
      "$\\sin \\alpha = y_0$ và $\\cos \\alpha = -x_0$",
      "$\\sin \\alpha = -y_0$ và $\\cos \\alpha = x_0$"
    ],
    answer: 1,
    explain: "Theo định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị: tung độ của điểm $M$ là $\\sin \\alpha = y_0$ và hoành độ của điểm $M$ là $\\cos \\alpha = x_0$."
  },
  {
    id: "b5-q2",
    q: "Cho góc tù $\\alpha$ ($90^\\circ < \\alpha < 180^\\circ$). Khẳng định nào sau đây là đúng về dấu của các giá trị lượng giác?",
    options: [
      "$\\sin \\alpha > 0$ và $\\cos \\alpha > 0$",
      "$\\sin \\alpha < 0$ và $\\cos \\alpha < 0$",
      "$\\sin \\alpha > 0$ và $\\cos \\alpha < 0$",
      "$\\sin \\alpha < 0$ và $\\cos \\alpha > 0$"
    ],
    answer: 2,
    explain: "Với góc tù $\\alpha$ ($90^\\circ < \\alpha < 180^\\circ$), điểm $M(x_0; y_0)$ nằm ở góc phần tư thứ II nên hoành độ $x_0 < 0$ (tức $\\cos\\alpha < 0$) và tung độ $y_0 > 0$ (tức $\\sin\\alpha > 0$)."
  },
  {
    id: "b5-q3",
    q: "Giá trị của $\\cos 120^\\circ$ bằng:",
    options: [
      "$\\frac{1}{2}$",
      "$-\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$-\\frac{\\sqrt{3}}{2}$"
    ],
    answer: 1,
    explain: "Theo công thức hai góc bù nhau: $\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$."
  },
  {
    id: "b5-q4",
    q: "Với mọi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), hệ thức nào sau đây luôn đúng?",
    options: [
      "$\\sin^2 \\alpha - \\cos^2 \\alpha = 1$",
      "$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$",
      "$\\sin \\alpha + \\cos \\alpha = 1$",
      "$\\sin^2 \\alpha + \\cos^2 \\alpha = 0$"
    ],
    answer: 1,
    explain: "Áp dụng định lí Pythagore trong tam giác vuông hình chiếu trên nửa đường tròn đơn vị: $x_0^2 + y_0^2 = 1 \\implies \\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
  },
  {
    id: "b5-q5",
    q: "Với mọi góc $\\alpha$ thoả mãn $0^\\circ \\le \\alpha \\le 180^\\circ$, khẳng định nào sau đây là SAI?",
    options: [
      "$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$",
      "$\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$",
      "$\\tan(180^\\circ - \\alpha) = -\\tan \\alpha \\quad (\\alpha \\ne 90^\\circ)$",
      "$\\cot(180^\\circ - \\alpha) = \\cot \\alpha \\quad (0^\\circ < \\alpha < 180^\\circ)$"
    ],
    answer: 3,
    explain: "Hai góc bù nhau có sin bằng nhau, còn côsin, tang và côtang đều đối dấu nhau: $\\cot(180^\\circ - \\alpha) = -\\cot \\alpha$. Do đó khẳng định $\\cot(180^\\circ - \\alpha) = \\cot \\alpha$ là sai."
  },
  {
    id: "b5-q6",
    q: "Cho góc tù $\\alpha$ thoả mãn $\\sin \\alpha = \\frac{4}{5}$. Giá trị của $\\cos \\alpha$ bằng:",
    options: [
      "$\\frac{3}{5}$",
      "$-\\frac{3}{5}$",
      "$\\frac{1}{5}$",
      "$-\\frac{1}{5}$"
    ],
    answer: 1,
    explain: "Vì $\\alpha$ là góc tù nên $90^\\circ < \\alpha < 180^\\circ \\implies \\cos \\alpha < 0$. Ta có: $\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\frac{16}{25} = \\frac{9}{25} \\implies \\cos \\alpha = -\\sqrt{\\frac{9}{25}} = -\\frac{3}{5}$."
  },
  {
    id: "b5-q7",
    q: "Giá trị của biểu thức $P = \\cos 20^\\circ + \\cos 40^\\circ + \\cos 140^\\circ + \\cos 160^\\circ$ bằng:",
    options: [
      "$0$",
      "$1$",
      "$-1$",
      "$2$"
    ],
    answer: 0,
    explain: "Ta nhóm các cặp góc bù nhau:\n• $\\cos 160^\\circ = \\cos(180^\\circ - 20^\\circ) = -\\cos 20^\\circ$\n• $\\cos 140^\\circ = \\cos(180^\\circ - 40^\\circ) = -\\cos 40^\\circ$\nDo đó: $P = (\\cos 20^\\circ - \\cos 20^\\circ) + (\\cos 40^\\circ - \\cos 40^\\circ) = 0$."
  },
  {
    id: "b5-q8",
    q: "Cho góc nhọn $\\alpha$ thoả mãn $\\tan \\alpha = 2$. Giá trị của $\\cos^2 \\alpha$ bằng:",
    options: [
      "$\\frac{1}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{5}$"
    ],
    answer: 0,
    explain: "Áp dụng hệ thức cơ bản: $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha} \\implies 1 + 2^2 = \\frac{1}{\\cos^2 \\alpha} \\implies 5 = \\frac{1}{\\cos^2 \\alpha} \\implies \\cos^2 \\alpha = \\frac{1}{5}$."
  },
  {
    id: "b5-q9",
    q: "Cho góc $\\alpha$ thoả mãn $\\tan \\alpha = -3$. Giá trị của biểu thức $P = \\frac{2\\sin \\alpha - 3\\cos \\alpha}{3\\sin \\alpha + 2\\cos \\alpha}$ bằng:",
    options: [
      "$\\frac{9}{7}$",
      "$-\\frac{9}{7}$",
      "$\\frac{7}{9}$",
      "$1$"
    ],
    answer: 0,
    explain: "Vì $\\tan \\alpha = -3$ xác định nên $\\cos \\alpha \\ne 0$. Chia cả tử và mẫu cho $\\cos \\alpha$:\n$P = \\frac{2\\tan \\alpha - 3}{3\\tan \\alpha + 2} = \\frac{2(-3) - 3}{3(-3) + 2} = \\frac{-6 - 3}{-9 + 2} = \\frac{-9}{-7} = \\frac{9}{7}$."
  },
  {
    id: "b5-q10",
    q: "Cho góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$) thoả mãn $\\sin \\alpha + \\cos \\alpha = \\frac{\\sqrt{5}}{2}$. Giá trị của tích $P = \\sin \\alpha \\cdot \\cos \\alpha$ bằng:",
    options: [
      "$\\frac{1}{8}$",
      "$\\frac{1}{4}$",
      "$\\frac{5}{8}$",
      "$\\frac{3}{8}$"
    ],
    answer: 0,
    explain: "Bình phương hai vế:\n$(\\sin \\alpha + \\cos \\alpha)^2 = \\left(\\frac{\\sqrt{5}}{2}\\right)^2 \\iff \\sin^2 \\alpha + \\cos^2 \\alpha + 2\\sin \\alpha \\cos \\alpha = \\frac{5}{4}$\n$\\iff 1 + 2P = \\frac{5}{4} \\iff 2P = \\frac{1}{4} \\iff P = \\frac{1}{8}$."
  },
  {
    id: "b5-q11",
    q: "Cho $0^\\circ < \\alpha < 90^\\circ$. Rút gọn biểu thức $M = \\sin(90^\\circ - \\alpha) \\cos(180^\\circ - \\alpha) + \\cos(90^\\circ - \\alpha) \\sin(180^\\circ - \\alpha)$ ta được:",
    options: [
      "$\\cos^2 \\alpha - \\sin^2 \\alpha$",
      "$\\sin^2 \\alpha - \\cos^2 \\alpha$",
      "$-1$",
      "$1$"
    ],
    answer: 1,
    explain: "Theo công thức phụ và bù:\n• $\\sin(90^\\circ - \\alpha) = \\cos \\alpha$\n• $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$\n• $\\cos(90^\\circ - \\alpha) = \\sin \\alpha$\n• $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$\nThay vào: $M = (\\cos \\alpha)(-\\cos \\alpha) + (\\sin \\alpha)(\\sin \\alpha) = -\\cos^2 \\alpha + \\sin^2 \\alpha = \\sin^2 \\alpha - \\cos^2 \\alpha$."
  },
  {
    id: "b5-q12",
    q: "Có bao nhiêu số đo góc $\\alpha \\in [0^\\circ; 180^\\circ]$ thoả mãn phương trình $2\\cos \\alpha + 1 = 0$?",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "Vô số"
    ],
    answer: 1,
    explain: "Ta có $2\\cos \\alpha + 1 = 0 \\iff \\cos \\alpha = -\\frac{1}{2}$. Trên nửa đường tròn đơn vị ($0^\\circ \\le \\alpha \\le 180^\\circ$), hoành độ $x_0 = -\\frac{1}{2}$ cắt nửa đường tròn tại duy nhất một điểm $M$ tương ứng với góc $\\alpha = 120^\\circ$. Vậy chỉ có đúng 1 số đo góc thỏa mãn."
  }
];

export default bai05;
