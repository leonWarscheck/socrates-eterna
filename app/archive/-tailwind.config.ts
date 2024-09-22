import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tiny: "374px",
        small: "490px",
      },
      colors: {
        dilred: "#CD0821",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
