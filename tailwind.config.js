/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        mo: { max: "900px" },
        ng: { min: "900px" },
      },
    },
  },
  plugins: [],
};
