import { LessonQuestions } from './types';

export async function getLessonQuestions(baiId: string): Promise<LessonQuestions | null> {
  try {
    const mod = await import(`@/data/questions/${baiId}`);
    return mod.default || mod.data;
  } catch (e) {
    // Return placeholder
    return {
      baiId,
      baiName: `Bài học ${baiId.toUpperCase()}`,
      multipleChoice: [
        {
          id: `${baiId}-mc1`,
          question: "Cho biểu thức $P = \\sqrt{x^2 - 4x + 4}$. Khẳng định nào sau đây là đúng với mọi $x \\in \\mathbb{R}$?",
          options: [
            "$P = x - 2$",
            "$P = |x - 2|$",
            "$P = -(x - 2)$",
            "$P = 2 - x$"
          ],
          correctAnswer: 1,
          explanation: "Ta có $x^2 - 4x + 4 = (x - 2)^2$, do đó $\\sqrt{(x-2)^2} = |x - 2|$ với mọi $x \\in \\mathbb{R}$."
        },
        {
          id: `${baiId}-mc2`,
          question: "Tập nghiệm của bất phương trình $x^2 - 5x + 6 \\le 0$ là:",
          options: [
            "$S = [2; 3]$",
            "$S = (2; 3)$",
            "$S = (-\\infty; 2] \\cup [3; +\\infty)$",
            "$S = \\mathbb{R}$"
          ],
          correctAnswer: 0,
          explanation: "Tam thức bậc hai $f(x) = x^2 - 5x + 6$ có hai nghiệm $x_1 = 2, x_2 = 3$. Hệ số $a = 1 > 0$, do đó $f(x) \\le 0 \\Leftrightarrow 2 \\le x \\le 3$."
        }
      ],
      trueFalse: [
        {
          id: `${baiId}-tf1`,
          context: "Cho hàm số bậc hai $y = f(x) = ax^2 + bx + c$ có đồ thị là một parabol đỉnh $I(1; -4)$ và đi qua điểm $A(0; -3)$.",
          statements: [
            {
              id: "s1",
              statement: "Hệ số $a > 0$ và bề lõm của parabol quay lên trên.",
              isCorrect: true,
              explanation: "Đỉnh $I(1; -4)$ và điểm $A(0; -3)$ nằm phía trên đỉnh nên $a > 0$."
            },
            {
              id: "s2",
              statement: "Trục đối xứng của parabol là đường thẳng $x = 1$.",
              isCorrect: true,
              explanation: "Hoành độ đỉnh $x_I = 1$ chính là trục đối xứng."
            },
            {
              id: "s3",
              statement: "Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng $-3$.",
              isCorrect: false,
              explanation: "Giá trị nhỏ nhất đạt tại đỉnh $y_I = -4$."
            },
            {
              id: "s4",
              statement: "Hàm số đồng biến trên khoảng $(1; +\\infty)$.",
              isCorrect: true,
              explanation: "Vì $a > 0$ nên hàm số đồng biến trên $(x_I; +\\infty) = (1; +\\infty)$."
            }
          ]
        }
      ],
      essay: [
        {
          id: `${baiId}-es1`,
          question: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = 2\\sin x + 3$ trên đoạn $[0; \\pi]$.",
          shortAnswer: "max = 5, min = 3",
          solution: "Với $x \\in [0; \\pi]$, ta có $0 \\le \\sin x \\le 1$. Nhân 2 và cộng 3 được: $3 \\le 2\\sin x + 3 \\le 5$. Vậy $\\max = 5$ khi $x = \\frac{\\pi}{2}$ và $\\min = 3$ khi $x = 0$ hoặc $x = \\pi$."
        }
      ]
    };
  }
}
