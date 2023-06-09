/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'nav': '0 4px 4px rgba(0,0,0,0.25)',
        'form': '5.18654px 5.18654px 255.437px rgba(0, 0, 0, 0.5)',
      },
      fontFamily:{
        'smythe':['Smythe', 'cursive'],
        'inter':['Inter', 'sans-serif'],
        'open-sans':['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

