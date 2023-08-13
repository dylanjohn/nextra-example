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
  darkMode: 'class',
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
      // 'gray': {
      //   500: '#4a5568',
      // },
      violet: colors.violet,
      gray: colors.gray,
      // ...
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            // color: theme('colors.gray.700'),
            main: {
              paddingBottom: '5rem',
            },
            p: {
              marginTop: '6px',
              marginBottom: '6px',
            },
            h1: {
              letterSpacing: theme('letterSpacing.tight'),
            },
            pre: {
              backgroundColor: theme('colors.gray.100'),
            },
            code: {
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
         // Invert (for dark mode)
        invert: {
          css: {
            color: theme('colors.gray.00'),
            pre: {
              backgroundColor: theme('colors.gray.800'),
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}