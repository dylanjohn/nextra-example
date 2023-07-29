const { fontFamily } = require('tailwindcss/defaultTheme')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "theme.jsx",
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // sans: [ 'IBM Plex Sans', ...fontFamily.sans],
      mono: [...fontFamily.mono],
    },
    extend: {
      colors: {},
      typography: (theme) => ({}),
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}