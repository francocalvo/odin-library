/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        168: "42rem",
      },
    },
  },
  plugins: [require("tailwind-nord"), require("flowbite/plugin")],
};
