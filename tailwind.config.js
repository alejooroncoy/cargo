const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./**/*.js", "./dashboard/index.html", "index.html", "./nuevo-envio/index.html", "./envios/index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: [
          "Inter",
          ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        primary: "#FAEFE0",
        stroke: "#E4B274",
        secondary: "#373737",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

