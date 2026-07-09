/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C5C',
          light: '#1B6A7F',
          dark: '#072E3A',
        },
        secondary: {
          DEFAULT: '#E9C46A',
          light: '#F2D38A',
          dark: '#C8A23C',
        },
        accent: {
          DEFAULT: '#D4A373',
          light: '#DFBD9B',
          dark: '#A6794D',
        },
        bgLight: '#F8F9FA',
        charcoal: '#222222',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        luxury: '0.15em',
        ultra: '0.25em',
      },
    },
  },
  plugins: [],
}
