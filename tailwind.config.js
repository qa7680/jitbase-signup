/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-grey': '#E2E4E6',
        'light-grey': '#edf2f7',
      }
    },
  },
  plugins: [],
}