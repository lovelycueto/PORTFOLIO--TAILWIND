/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        white:'#ffffff',
        lightgray:'#4F4F51',
        darkgray:'#2c2b30',
        lightred:'#F58F7C',
      }
    },
  },
  plugins: [],
}

