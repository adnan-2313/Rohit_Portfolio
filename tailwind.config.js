/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'Poppins':['Poppins'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'core-sans-a':['core-sans-a']
    },
    colors:{
      'navy':'#000080',
      'dark_blue':'#051650',
    }
    },
  },
  plugins: [],
}
