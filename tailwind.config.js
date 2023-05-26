/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
  },
  plugins: [],
}

