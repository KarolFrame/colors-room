/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#000000ff',
        'text-light': '#ebebebff', 
        'primary': '#fbd70a',
        'accent-main': '#fbd70a',
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