import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Nền sáng thanh lịch, chống mỏi mắt khi học toán
        void: "#F8FAFC",          // slate-50 nền chính sáng dịu
        "void-light": "#FFFFFF",   // trắng tinh tế
        "void-card": "#FFFFFF",    // nền thẻ trắng ngọc cao cấp
        // Chữ tương phản cao, sắc nét cho công thức toán
        star: "#0F172A",          // slate-900 đen navy đậm
        "star-soft": "#334155",   // slate-700 chữ phụ rõ ràng
        "star-mute": "#64748B",   // slate-500 chữ chú thích
        // Điểm nhấn Toán học: Tím Logic & Xanh Sapphire
        nebula: "#6366F1",        // indigo-500 tím logic rực rỡ
        "nebula-deep": "#4338CA", // indigo-700
        "nebula-glow": "#818CF8", // indigo-400
        // Xanh Hình học & Đại số
        plasma: "#0284C7",        // sky-600 xanh sapphire
        "plasma-deep": "#0369A1", // sky-700
        // Năng lượng & chú ý
        photon: "#D97706",        // hổ phách nổi bật
        "photon-deep": "#B45309",
        // Trạng thái kết quả
        correct: "#059669",       // emerald-600 xanh ngọc chuẩn
        "correct-deep": "#047857",
        wrong: "#DC2626",         // red-600 đỏ nổi bật
        "wrong-deep": "#B91C1C",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        glow: "0 4px 20px -2px rgba(99, 102, 241, 0.25), 0 2px 6px -1px rgba(99, 102, 241, 0.15)",
        "glow-hover": "0 8px 30px -4px rgba(99, 102, 241, 0.35), 0 4px 12px -2px rgba(99, 102, 241, 0.2)",
        "glow-blue": "0 4px 20px -2px rgba(2, 132, 199, 0.25), 0 2px 6px -1px rgba(2, 132, 199, 0.15)",
        "glow-gold": "0 4px 20px -2px rgba(217, 119, 6, 0.25), 0 2px 6px -1px rgba(217, 119, 6, 0.15)",
        glass: "0 4px 20px -2px rgba(15, 23, 42, 0.07), 0 2px 6px -1px rgba(15, 23, 42, 0.04)",
        "glass-hover": "0 10px 30px -4px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.06)",
      },
      keyframes: {
        "pop-in": {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(99, 102, 241, 0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(99, 102, 241, 0.35)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.35s ease-out both",
        wiggle: "wiggle 0.3s ease-in-out",
        float: "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out both",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
