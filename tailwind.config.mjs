/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md}'],
  theme: {
    extend: {
      colors: {
        primary: { 50:'#eff6ff',100:'#dbeafe',200:'#bfdbfe',500:'#1e5a8a',600:'#18507a',700:'#12406a',800:'#0c305a' },
        accent: { 50:'#fff7ed',100:'#ffedd5',400:'#f59e0b',500:'#d97706',600:'#b45309' },
      },
      fontFamily: {
        sans: ['Inter','system-ui','sans-serif'],
        heading: ['Playfair Display','Georgia','serif'],
      },
    },
  },
  plugins: [],
};
