import type { LessonReview } from "./types";

export const REVIEWS_BANK: Record<string, LessonReview> = {
  "bai-01": {
    summary: "Mệnh đề, mệnh đề phủ định, mệnh đề kéo theo, mệnh đề tương đương, kí hiệu ∀ và ∃.",
    keyPoints: [
      "Mệnh đề toán học là khẳng định đúng hoặc sai, không thể vừa đúng vừa sai.",
      "Phủ định của ∀ là ∃ và ngược lại. Phủ định của > là ≤, của < là ≥.",
      "Mệnh đề P ⇒ Q chỉ sai khi P đúng mà Q sai.",
      "Mệnh đề P ⇔ Q đúng khi cả P và Q có cùng chân trị."
    ],
    commonMistakes: [
      {
        mistake: "Quên phủ định dấu bất đẳng thức khi phủ định mệnh đề chứa lượng từ ∀ hoặc ∃.",
        fix: "Khi phủ định '∀x, P(x) > 0', phải đổi cả lượng từ thành '∃x' và dấu '>' thành '≤ 0'."
      },
      {
        mistake: "Nhầm lẫn câu hỏi hoặc câu cảm thán là mệnh đề toán học.",
        fix: "Chỉ những câu khẳng định mang tính đúng/sai khách quan mới là mệnh đề."
      }
    ],
    tips: [
      "Để chứng minh mệnh đề '∀x ∈ X, P(x)' là sai, chỉ cần chỉ ra 1 phản ví dụ x₀ sao cho P(x₀) sai.",
      "Để chứng minh mệnh đề '∃x ∈ X, P(x)' là đúng, chỉ cần tìm ra 1 phần tử thoả mãn."
    ],
    flashcards: [
      {
        front: "Mệnh đề toán học là gì?",
        back: "Là một câu khẳng định có tính đúng hoặc sai rõ ràng. Không thể vừa đúng vừa sai."
      },
      {
        front: "Mệnh đề phủ định của '∀x ∈ ℝ, x² + 1 > 0' là gì?",
        back: "∃x ∈ ℝ, x² + 1 ≤ 0."
      },
      {
        front: "Mệnh đề P ⇒ Q sai trong trường hợp duy nhất nào?",
        back: "Khi giả thiết P đúng nhưng kết luận Q sai."
      },
      {
        front: "Trong mệnh đề P ⇒ Q, P được gọi là gì của Q?",
        back: "P là điều kiện đủ để có Q. Còn Q là điều kiện cần để có P."
      }
    ],
    checklist: [
      "Tôi phân biệt được câu nào là mệnh đề, câu nào không phải là mệnh đề.",
      "Tôi thành thạo phủ định mệnh đề chứa kí hiệu ∀ và ∃.",
      "Tôi hiểu rõ bản chất điều kiện cần và điều kiện đủ trong mệnh đề kéo theo.",
      "Tôi biết cách phát biểu mệnh đề đảo và mệnh đề tương đương."
    ]
  },

  "bai-02": {
    summary: "Tập hợp, tập hợp con, hợp, giao, hiệu và phần bù của hai tập hợp.",
    keyPoints: [
      "Tập hợp con: A ⊂ B khi mọi phần tử của A đều thuộc B.",
      "Giao A ∩ B: tập hợp các phần tử chung của A và B.",
      "Hợp A ∪ B: tập hợp các phần tử thuộc ít nhất một trong hai tập.",
      "Hiệu A \\ B: các phần tử thuộc A nhưng không thuộc B."
    ],
    commonMistakes: [
      {
        mistake: "Nhầm lẫn giữa ngoặc vuông [ ] (lấy đầu mút) và ngoặc tròn ( ) (không lấy đầu mút).",
        fix: "Luôn vẽ trục số và kiểm tra kĩ dấu bằng có thuộc tập hợp ban đầu hay không."
      },
      {
        mistake: "Quên trừ đi phần giao khi tính số phần tử của hợp hai tập hợp.",
        fix: "Luôn áp dụng công thức: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)."
      }
    ],
    tips: [
      "Vẽ trục số minh hoạ là cách nhanh nhất và chính xác nhất để tìm giao, hợp, hiệu của các khoảng, đoạn.",
      "Gạch bỏ các phần không thuộc tập hợp trên trục số để tìm kết quả."
    ],
    flashcards: [
      {
        front: "Tập hợp rỗng ∅ có phải là tập con của mọi tập hợp không?",
        back: "Đúng. ∅ ⊂ A với mọi tập hợp A."
      },
      {
        front: "Giao của hai tập hợp A ∩ B là gì?",
        back: "Là tập hợp các phần tử vừa thuộc A vừa thuộc B."
      },
      {
        front: "Công thức số phần tử của hợp hai tập hợp n(A ∪ B)?",
        back: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)."
      }
    ],
    checklist: [
      "Tôi biết cách biểu diễn tập hợp bằng cách liệt kê hoặc nêu tính chất đặc trưng.",
      "Tôi biểu diễn thành thạo các khoảng, đoạn trên trục số thực.",
      "Tôi làm chuẩn xác các phép toán giao, hợp, hiệu và phần bù."
    ]
  },

  "bai-06": {
    summary: "Định lí côsin, định lí sin, các công thức tính diện tích tam giác và giải tam giác.",
    keyPoints: [
      "Định lí côsin: a² = b² + c² - 2bc cos A.",
      "Định lí sin: a / sin A = b / sin B = c / sin C = 2R.",
      "Diện tích: S = 1/2 bc sin A = abc/(4R) = pr = √(p(p-a)(p-b)(p-c))."
    ],
    commonMistakes: [
      {
        mistake: "Quên dấu trừ trong công thức định lí côsin hoặc nhầm sang hàm sin.",
        fix: "Ghi nhớ: a² = b² + c² TRỪ 2bc COS A."
      },
      {
        mistake: "Nhầm bán kính ngoại tiếp R với 2R khi áp dụng định lí sin.",
        fix: "Ghi nhớ: Tỉ số a / sin A bằng 2R (đường kính), muốn tìm R phải chia cho 2."
      }
    ],
    tips: [
      "Biết 3 cạnh hoặc 2 cạnh và góc xen giữa -> Dùng định lí côsin.",
      "Biết 1 cạnh và góc đối diện -> Dùng định lí sin."
    ],
    flashcards: [
      {
        front: "Công thức định lí côsin tính cạnh a?",
        back: "a² = b² + c² - 2bc cos A."
      },
      {
        front: "Tỉ số a / sin A trong định lí sin bằng gì?",
        back: "Bằng 2R (với R là bán kính đường tròn ngoại tiếp tam giác)."
      },
      {
        front: "Công thức Heron tính diện tích tam giác?",
        back: "S = √(p(p-a)(p-b)(p-c)) với p = (a+b+c)/2 là nửa chu vi."
      }
    ],
    checklist: [
      "Tôi thuộc làu định lí côsin và định lí sin.",
      "Tôi nắm vững cả 5 công thức tính diện tích tam giác.",
      "Tôi biết vận dụng giải các bài toán thực tế (đo khoảng cách, chiều cao không thể tới được)."
    ]
  }
};

export function getLessonReview(lessonId: string): LessonReview {
  return (
    REVIEWS_BANK[lessonId] ?? {
      summary: "Tổng kết kiến thức trọng tâm, ghi nhớ công thức và phòng tránh lỗi sai trong bài kiểm tra.",
      keyPoints: [
        "Nắm vững các định nghĩa, định lí và hệ quả được nêu trong SGK.",
        "Ghi nhớ các công thức tính toán và phạm vi ứng dụng.",
        "Rèn luyện kĩ năng giải trắc nghiệm nhanh và bấm máy tính cầm tay."
      ],
      commonMistakes: [
        {
          mistake: "Không kiểm tra điều kiện xác định trước khi tính toán.",
          fix: "Luôn tìm tập xác định hoặc điều kiện nghiệm trước khi biến đổi."
        }
      ],
      tips: [
        "Dùng phương pháp loại trừ đáp án vô lí trong câu hỏi trắc nghiệm.",
        "Vẽ hình phác thảo để có trực quan hình học chính xác."
      ],
      flashcards: [
        {
          front: "Phương pháp học tốt môn Toán 10 là gì?",
          back: "Hiểu bản chất lý thuyết, làm nhiều dạng bài tập và tự tổng hợp sơ đồ tư duy sau mỗi chương."
        },
        {
          front: "Cách tránh mất điểm đáng tiếc trong bài thi?",
          back: "Đọc kĩ đề bài, kiểm tra điều kiện và bấm lại máy tính để soát đáp số."
        }
      ],
      checklist: [
        "Tôi đã nắm vững kiến thức lý thuyết của bài học.",
        "Tôi đã hoàn thành các câu trắc nghiệm 4 lựa chọn.",
        "Tôi đã vượt qua các câu hỏi đúng/sai và tự luận."
      ]
    }
  );
}
