/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{vue,html,js}",
    "./src/components/**/*.{vue,html,js}",
    "./src/layouts/**/*.{vue,html,js}",
    "./src/**/*.js",
  ],
  theme: {
    colors: {
      light: "#FFFFFF",
      primary: {
        400: "rgba(57,0,180,0.85)",
        300: "#6327e1f0",
        200: "#B054EA",
      },
      text: "#000000",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    extend: {
      rotate: {},
    },
  },
  plugins: [],
  darkMode: "class",
};
