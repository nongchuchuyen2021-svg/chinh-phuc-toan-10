import { LessonTheory } from './types';

export async function getLessonTheory(baiId: string): Promise<LessonTheory | null> {
  try {
    const mod = await import(`@/data/theory/${baiId}`);
    return mod.default || mod.data;
  } catch (e) {
    return {
      baiId,
      baiName: `Tóm tắt kiến thức ${baiId.toUpperCase()}`,
      summary: [
        "Nắm vững các định nghĩa, khái niệm và định lí cốt lõi trong sách giáo khoa.",
        "Rèn luyện kĩ năng biến đổi công thức và lập luận logic trong giải toán.",
        "Chú ý điều kiện xác định và các trường hợp đặc biệt khi giải phương trình, bất phương trình."
      ],
      keyFormulas: [
        "$(a+b)^2 = a^2 + 2ab + b^2$",
        "\\Delta = b^2 - 4ac",
        "\\sin^2 x + \\cos^2 x = 1",
        "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})"
      ]
    };
  }
}
