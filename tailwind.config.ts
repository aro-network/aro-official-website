import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        container: "1440px",
      },
      screens: {
        sm: { max: "640px" },
        mo: { max: "1000px" },
        ng: { min: "1000px" },
        md: [{ min: "1001px", max: "1440px" }],
        smd: [{ min: "1001px", max: "1260px" }],
        lg: { min: "1000px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
