/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF7F2',
          100: '#F5ECD7',
          200: '#E8D5B7',
          300: '#C4A882',
          400: '#A07850',
          500: '#8B6914',
          600: '#6B4F10',
          700: '#4A350A',
          800: '#3D2B1F',
          900: '#1F150A',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}