/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        DTP: '1440px',
      },
    extend: {
      colors:{
        exblack: '#1c202b'
      }
    },
  },
  plugins: [],
}

