/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily:{
        'cabin': ['Cabin', 'sans-serif']
      },
      colors: {
        'navy': '#2f4156',
        'sky': '#c8d9e6',
        'dark-sky':'#a0c9e7',
        'beige': '#f5efeb',
        'white': '#ffffff'
      },
      screens: {
        'xs':'440px'
      }
    },
  },
  plugins: [],
}

