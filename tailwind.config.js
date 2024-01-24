/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
        grayishBlue: "hsl(217, 19%, 38%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        monrope: ["Monrope", "sans-serif"],
      },
      letterSpacing: {
        advice: "0.2rem",
      },
      boxShadow: {
        button: "0 0 1rem 0.5rem hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};