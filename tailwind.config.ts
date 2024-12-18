import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary1: "#7e22ce",
        "purple-1000": "#230b36",
      },
      animation: {
        "border-pulse": "pulse-border 16s infinite",
        "bg-pulse-slow": "backgroundPulse 8s infinite",
        "bg-pulse-slow2": "backgroundPulse2 6s infinite",
      },
      keyframes: {
        "pulse-border": {
          "0%, 100%": { borderColor: "#7e22ce" },
          "50%": { borderColor: "#c084fc" },
        },
        backgroundPulse: {
          "0%, 100%": { backgroundColor: "#6b21a8" },
          "50%": { backgroundColor: "#9333ea" },
        },
        backgroundPulse2: {
          "0%, 100%": { backgroundColor: "#7e22ce" },
          "50%": { backgroundColor: "#a855f7" },
        },
      },
      fontFamily: {
        socrates: ["Toxigenesis", "sans-serif"],
      },
      screens: {
        xs1: "360px",
        sm1: "490px",
        md1: "667px",
        md2: "769px",
        lg1: "1024px",
        xl1: "1110px",
        xl2: "1280px",
        "landscape1": {
          raw: "(max-width: 940px) and (max-height: 430px )",
        },
        "landscape2": {
          raw: "(max-height: 375px) and (orientation: landscape)",
        },
        "screen-h-sm": { raw: "(max-height: 800px)" },
      },
    },
  },
  plugins: [typography, animate],
};

export default config;
