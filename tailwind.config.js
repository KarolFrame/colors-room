/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0b0d19',
        'text-light': '#d0d0d5', 
        'primary': '#0F3460',
        'accent-main': '#0069b4',
        'accent-secondary': '#ecececff',
        'border-color': '#1a1e2e',
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