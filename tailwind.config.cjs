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
      scale: {
        '120': '1.2',
        '130': '1.3',
        '135': '1.35',
        '140': '1.4',
        '160': '1.6',
        '170': '1.7',
        '180': '1.8',
        '190': '1.9',
        '200': '2',
      },
    },
  },
  plugins: [],
}
