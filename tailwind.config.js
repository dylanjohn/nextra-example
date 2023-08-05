const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

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
    colors: {
      'gray': {
        500: '#4a5568',
      },
      violet: colors.violet,
      gray: colors.gray,
      // ...
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '75ch', // add required value here
            color: theme('colors.gray.500'),
            code: {
              backgroundColor: theme('colors.gray.200'),
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              '&::before': {
                content: `"" !important`,
              },
              '&::after': {
                content: `"" !important`,
              },
              fontWeight: 'normal',
            },
            pre: {
              // opacity: 0.98,
              background: theme('colors.white'),
              borderColor: theme('colors.gray.200'),
              border: '1px solid',
            },
            h1: {
              // fontWeight:'700',
              letterSpacing: '-.015em',
            },
            // end css
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}