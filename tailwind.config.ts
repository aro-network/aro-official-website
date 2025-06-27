import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
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
        xsm: { min: "640px" },
        mo: { max: "1000px" },
        ng: { min: "1000px" },
        md: [{ min: "1001px", max: "1440px" }],
        smd: [{ min: "1001px", max: "1260px" }],
        lg: { min: "1000px" },
        llg: { min: "1440px" },
      },
      fontFamily: {
        Ubuntu: "var(--font-ubuntu)",
        Poppins: "var(--font-poppins)",
      },

      backgroundImage: {
        btn: "linear-gradient(90deg, #71FF6C 0%, #C1F967 100%)",
        // border-width: 1px, 1px, 1px, 1px;border-style: solid;border-image-source: linear-gradient(90deg, #71FF6C 0%, #C1F967 100%);
        btnHover: "linear-gradient(to right, #000, #000),linear-gradient(90deg, #71FF6C 0%, #C1F967 100%)",
      },

      keyframes: {
        "bg-in": {
          "0%": { "background-size": "0% 100%" },
          "100%": { "background-size": "100% 100%" },
        },
      },
      animation: {
        "x-loop": "x-loop var(--x-loop-time) linear infinite",
        "bg-in": "bg-in var(--bg-in-time,500ms) ease",
      },
    },
  },
  plugins: [],
} satisfies Config;
