/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-black': '#333333', 
        'dark-charcoal-gray': '#1A1A1A',
        'crimson-red': '#DC143C',
        'gunmetal-gray': '#2A2A2A',
        'iron-gray': '#4C4C4C',
        'burgundy': '#800020',
        'platinum': '#E5E5E5',
      },
    },
  },
  plugins: [],
}


