const colors = require('tailwindcss/colors.js');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
      width: {
        'wide': '95vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};