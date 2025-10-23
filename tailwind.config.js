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
        'primary': '#fbcf0aff',
        'accent-main': '#fbd70a',
        'accent-secondary': '#ecececff',
        'border-color': '#1a1e2e',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'heading': ['Exo 2', 'sans-serif'], 
        'mono': ['Roboto Mono', 'monospace'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    }
  },
}