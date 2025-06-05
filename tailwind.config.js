/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#CB2729',
        secondary: '#770000',
        third: '#BD3435',
        golden: '#D89C00',
        darkness: '#151415',
        lightness: '#FFFAED',
      },
      fontFamily: {
        khula: ['Khula', 'sans'],
        beardbone: ['Beardbone', 'sans'],
      }
    },
  },
  plugins: [],
}