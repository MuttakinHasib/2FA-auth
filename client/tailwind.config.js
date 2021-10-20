module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // screens: {},
    container: {
      center: true,
      padding: '1rem',
      // screens: {},
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      // colors: {},
    },
  },
  variants: {
    extend: {
      display: ['group-hover', 'group-focus'],
      visibility: ['group-hover'],
      width: ['responsive', 'hover', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
