/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      satoshi: ["Satoshi", "sans-serif"],
      heading: ["heading", "sans-serif"],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
    },
    colors: {
      primary: "#F7F5FF",
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
