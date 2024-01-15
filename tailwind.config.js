/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2d545e',/*Night Blue: #2d545e*/
        'secondary': '#c89666',/*Sand Tan Shadow: #c89666*/
        'tertiary': '#C5C6C7',/*Sand Tan: #e1b382*/
        'quaternary': '#12343b',/*Night Blue Shadow: #12343b*/
      },
    },
  },
  plugins: [],
}

