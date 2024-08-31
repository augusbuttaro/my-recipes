/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange' : '#FF7D00',
        'brown' : '#78290F',
        'cream' : '#FFECD1',
        'turquoise' : '#15616D',
        'blue' : '#001524'
      },
      boxShadow:{
        "cream" : "0 35px 60px -15px #FFECD1"
      }
    },
  },
  plugins: [],
}