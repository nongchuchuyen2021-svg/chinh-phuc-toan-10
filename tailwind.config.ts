import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Quantum Deep Void Theme
        void: "#080D1A",
        "void-card": "#0F172A",
        "void-subtle": "#162036",
        "void-border": "#24324D",
        star: "#F8FAFC",
        "star-soft": "#94A3B8",
        "star-mute": "#64748B",

        // Quantum math neon colors
        cyan: {
          DEFAULT: "#06B6D4",
          deep: "#0891B2",
          glow: "#22D3EE",
          soft: "rgba(6, 182, 212, 0.15)",
        },
        emerald: {
          DEFAULT: "#10B981",
          deep: "#059669",
          glow: "#34D399",
          soft: "rgba(16, 185, 129, 0.15)",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          deep: "#7C3AED",
          glow: "#A78BFA",
          soft: "rgba(139, 92, 246, 0.15)",
        },
        amber: {
          DEFAULT: "#F59E0B",
          deep: "#D97706",
          glow: "#FBBF24",
          soft: "rgba(245, 158, 11, 0.15)",
        },
        rose: {
          DEFAULT: "#F43F5E",
          deep: "#E11D48",
          glow: "#FB7185",
          soft: "rgba(244, 63, 94, 0.15)",
        },
        indigo: {
          DEFAULT: "#6366F1",
          deep: "#4F46E5",
          glow: "#818CF8",
          soft: "rgba(99, 102, 241, 0.15)",
        },

        // Backward compatibility
        sky: "#06B6D4",
        "sky-deep": "#0891B2",
        sun: "#F59E0B",
        "sun-deep": "#D97706",
        leaf: "#10B981",
        "leaf-deep": "#059669",
        gold: "#FBBF24",
        "gold-deep": "#D97706",
        berry: "#F43F5E",
        correct: "#10B981",
        "correct-deep": "#059669",
        wrong: "#F43F5E",
        "wrong-deep": "#E11D48",
        photon: "#F59E0B",
        "photon-deep": "#D97706",
        nebula: "#8B5CF6",
        "nebula-deep": "#7C3AED",
        "nebula-glow": "#A78BFA",
        plasma: "#06B6D4",
        "plasma-deep": "#0891B2",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glow-cyan": "0 0 25px -3px rgba(6, 182, 212, 0.35), 0 0 10px -2px rgba(6, 182, 212, 0.2)",
        "glow-violet": "0 0 25px -3px rgba(139, 92, 246, 0.35), 0 0 10px -2px rgba(139, 92, 246, 0.2)",
        "glow-emerald": "0 0 25px -3px rgba(16, 185, 129, 0.35), 0 0 10px -2px rgba(16, 185, 129, 0.2)",
        "glow-amber": "0 0 25px -3px rgba(245, 158, 11, 0.35), 0 0 10px -2px rgba(245, 158, 11, 0.2)",
        "glow-rose": "0 0 25px -3px rgba(244, 63, 94, 0.35), 0 0 10px -2px rgba(244, 63, 94, 0.2)",
        glow: "0 0 25px -3px rgba(139, 92, 246, 0.35), 0 0 10px -2px rgba(139, 92, 246, 0.2)",
        "glow-hover": "0 0 35px -2px rgba(6, 182, 212, 0.5), 0 0 15px -1px rgba(6, 182, 212, 0.3)",
      },
      keyframes: {
        "pop-in": {
          "0%": { opacity: "0", transform: "translateY(12px) scale(0.97)" },
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
          "0%, 100%": { boxShadow: "0 0 15px rgba(6, 182, 212, 0.25)" },
          "50%": { boxShadow: "0 0 30px rgba(6, 182, 212, 0.55)" },
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
