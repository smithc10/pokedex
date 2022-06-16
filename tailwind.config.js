/** @type {import('tailwindcss').Config} */
module.exports = {
  // need to add when enable dark mode toggle button
  // darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
}
