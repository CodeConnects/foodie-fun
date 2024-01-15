/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //'primary': '#2d545e',/*Night Blue: #2d545e*/
        'primary': '#2a6592',
        //'secondary': '#c89666',/*Sand Tan Shadow: #c89666*/
        'secondary': '#8ec3eb',
        //'tertiary': '#C5C6C7',/*Sand Tan: #e1b382*/
        'tertiary': '#7e9a9a',
        //'quaternary': '#12343b',/*Night Blue Shadow: #12343b*/
        'quaternary': '#f6d8ac',
      },
    },
  },
  plugins: [],
}
