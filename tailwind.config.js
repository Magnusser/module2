/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#590C2E',
        'secondary': '#151515',
        'tritary': '#300417',
        'attention': '#F3E116'
      },
      fontFamily: {
        primary: ['Koulen', 'sans']
      }
    },
  },
  plugins: [],
}