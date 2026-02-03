/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,html,md,js}",
    "./src/_includes/**/*.{njk,html}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        'brand-pink': '#fa7598',
        'brand-teal': '#62cbc9',
        'brand-pink-light': '#FFB6D1',
        'brand-pink-lighter': '#F5D4E1',
        
        // Text colors
        'text-primary': '#333333',
        'text-secondary': '#666666',
      },
      fontFamily: {
        'primary': ['Montserrat', 'Arial', 'sans-serif'],
        'accent': ['Cookie', 'Georgia', 'cursive'],
      },
    },
  },
  plugins: [],
}
