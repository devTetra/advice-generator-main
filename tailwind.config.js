/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(193, 38%, 86%)",
        secondary: "hsl(150, 100%, 66%)",
        neutral: {
          50: "hsl(217, 19%, 38%)",
          100: "hsl(217, 19%, 24%)",
          200: "hsl(218, 23%, 16%)",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
