/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        1: "hsl(179, 62%, 43%) ",
        2: "hsl(71, 73%, 54%)",
      },
    },
  },
  plugins: [],
};
