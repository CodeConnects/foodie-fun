/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0B0C10',
        'secondary': '#1F2833',
        'tertiary': '#C5C6C7',
        'quaternary': '#66FCF1',
      },
    },
  },
  plugins: [],
}

