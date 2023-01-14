/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center: true,
      padding : "60px"
    },
    extend: {
      colors : {
        secondary :"#64748b",
        primary : "#3b82f6",
        dark : "#0f172a"
      },
      screens : {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
