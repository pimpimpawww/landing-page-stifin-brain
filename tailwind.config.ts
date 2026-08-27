import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue base
        void: "#ffffff",
        "void-2": "#f0f6ff",
        "void-3": "#e8f1fd",
        "void-card": "#daeaf9",
        // Primary blues
        cyan: {
          DEFAULT: "#1565C0",
          dark: "#0d47a1",
          glow: "#1976D2",
        },
        // Accents from logo
        neon: {
          gold: "#F9A825",
          orange: "#E65100",
          purple: "#1565C0",
          green: "#2E7D32",
          red: "#C62828",
        },
        // Text
        "slate-light": "#1a2744",
        "slate-mid": "#334e7a",
        "slate-dim": "#64748b",
        // WhatsApp
        wa: {
          DEFAULT: "#25D366",
          deep: "#1DA851",
        },
        // Legacy aliases
        gold: "#F9A825",
        "gold-light": "#fcd07a",
        "gold-deep": "#e65100",
        parchment: "#1a2744",
        indigo: {
          DEFAULT: "#1565C0",
          deep: "#0d47a1",
          soft: "#1976D2",
        },
        "cream-card": "#e8f1fd",
        ink: "#1a2744",
        "ink-soft": "#334e7a",
        "parchment-deep": "#f0f6ff",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -10px rgba(21,101,192,0.2)",
        "neon-cyan": "0 0 20px rgba(21,101,192,0.3), 0 0 60px rgba(21,101,192,0.1)",
        "neon-gold": "0 0 20px rgba(249,168,37,0.4), 0 0 60px rgba(249,168,37,0.15)",
        "neon-purple": "0 0 20px rgba(21,101,192,0.3), 0 0 60px rgba(21,101,192,0.1)",
        "card-glow": "0 8px 32px rgba(21,101,192,0.15), 0 0 0 1px rgba(21,101,192,0.1)",
      },
      borderRadius: {
        "4xl": "28px",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(21,101,192,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(21,101,192,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
