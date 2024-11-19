/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3932",
        primary_1: "#008248",
        secondary: "#d4e9e2",
        secondary_1: "#f1f8f6",
        text: "#000000",
      },
    },
    plugins: [],
  },
};
