/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      "font-sans": ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
