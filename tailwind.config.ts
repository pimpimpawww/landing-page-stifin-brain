import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Futuristic dark base
        void: "#050d1a",
        "void-2": "#071220",
        "void-3": "#0a1929",
        "void-card": "#0d2137",
        // Neon accents
        cyan: {
          DEFAULT: "#00d4ff",
          dark: "#0099bb",
          glow: "#00f0ff",
        },
        neon: {
          gold: "#fab432",
          orange: "#ff6b35",
          purple: "#7c3aed",
          green: "#00ff88",
        },
        // Text — lebih kontras
        "slate-light": "#f1f5f9",
        "slate-mid": "#cbd5e1",
        "slate-dim": "#64748b",
        // WhatsApp
        wa: {
          DEFAULT: "#25D366",
          deep: "#1DA851",
        },
        // Keep legacy for WaButton
        gold: "#fab432",
        "gold-light": "#fcd07a",
        "gold-deep": "#c8871e",
        parchment: "#e2e8f0",
        "parchment/80": "rgba(226,232,240,0.8)",
        indigo: {
          DEFAULT: "#0d2137",
          deep: "#071220",
          soft: "#0f2a45",
        },
        "cream-card": "#0d2137",
        ink: "#e2e8f0",
        "ink-soft": "#94a3b8",
        "parchment-deep": "#0a1929",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -10px rgba(0,212,255,0.25)",
        "neon-cyan": "0 0 20px rgba(0,212,255,0.5), 0 0 60px rgba(0,212,255,0.2)",
        "neon-gold": "0 0 20px rgba(250,180,50,0.5), 0 0 60px rgba(250,180,50,0.2)",
        "neon-purple": "0 0 20px rgba(124,58,237,0.5), 0 0 60px rgba(124,58,237,0.2)",
        "card-glow": "0 8px 32px rgba(0,212,255,0.12), 0 0 0 1px rgba(0,212,255,0.08)",
      },
      borderRadius: {
        "4xl": "28px",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at center, rgba(0,212,255,0.12) 0%, transparent 70%)",
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.06) 50%, transparent 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.04) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
