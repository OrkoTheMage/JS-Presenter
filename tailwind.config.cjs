const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        covered: ['"Covered By Your Grace"', 'cursive'],
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        quantico: ['Quantico', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
