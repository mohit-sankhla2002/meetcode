/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./public/index.html", "./src/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontY: '"Ysabeau", sans-serif'
      },
      colors: {
        'primary': '#fc037f',
        'primaryhover': '#'
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.2) 0px 0px 20px;'
      }
    },
  },
  plugins: [],
}

