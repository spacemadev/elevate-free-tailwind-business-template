/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
  },
  screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
  },
  fontFamily: {
     manrope: ['Manrope', 'sans-serif'],
  },
  colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#010717',
      primary: '#004cfd',
      secondary: '#5123f5', 
      gray: {
        lighter: '#FAF7F3',
        light: '#323232', 
        dark: '#010717',    
        txt: '#4c4d56',
      },
  },
    extend: {},
  },
  plugins: [],
}

