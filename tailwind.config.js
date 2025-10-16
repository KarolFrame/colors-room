/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1A1A2E',
        'text-light': '#E0E0E0', 
        'primary': '#0F3460',
        'accent-main': '#E94560',
        'accent-secondary': '#70F4D3',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'heading': ['Exo 2', 'sans-serif'], 
        'mono': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}