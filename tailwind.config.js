/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'search': '#F4F5FB',
        'sidebar': '#F9FAFC',
  
      }
    },
  },
  plugins: [],
}