/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#111318",
        "text-main": "#F5F5F5",
        "accent": "#A3E635"
      }
    }
  },
  plugins: [],
}