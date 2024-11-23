const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.warmGray,
      sky: colors.lightBlue,
      neutral: colors.trueGray,
      gray: colors.coolGray,
      slate: colors.blueGray,
      blue: colors.blue,

      'cadus-black': '#1E1E1E',
      'cadus-grey': '#757575',
      'cadus-green': '#94BFA7',
      'cadus-green-hover': '#9dc7b0',
      'cadus-card': '#FFF4FF',
    }
  },
  plugins: [],
}

