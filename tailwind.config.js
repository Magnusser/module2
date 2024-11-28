/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#590C2E',
        'secondary': '#151515',
        'tritary': '#300417',
        'attention': '#F3E116',
        '2ndary': '#232323',
        'bomb': '#CDBD0E'
      },
      fontFamily: {
        primary: ['Koulen', 'sans']
      },
      dropShadow: {
        'text': '0 -10px 0px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}