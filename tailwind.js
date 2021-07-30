module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'green':'#1DB954',
        'dark':'#121212',
        'light':'#282828',
        'lighttest':'#B3B3B3',
        'darktest':'#191414'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
