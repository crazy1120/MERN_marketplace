/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
    },
    colors: {
      primary: "#F5F3EA",
      brown: "#ff9966",
      pink: "#EDA6E6",
      yellow: "#FFF480",
      blue: "#A8EBEB",
      red: "#FC9298",
      green: "#66CCA0",
      black: "#1B1C1D",
      white: "#ffffff",
    },
    extend: {
      boxShadow: {
        md_50: "0 0 15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
