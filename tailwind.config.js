/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        'general-sans': ['General Sans', ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#4040F2',
          50: '#F7F7FB',
          100: '#D8D8FE',
          200: '#B3B3FD',
          300: '#8484F8',
          400: '#6E6EF7',
          500: '#4040F2',
          600: '#3333D1',
          700: '#2323BE',
          800: '#181894',
          900: '#0D0D54',
        },
        gray: {
          DEFAULT: '#717D8A',
          50: '#FAFAFA',
          100: '#F1F1F1',
          200: '#EAECEE',
          300: '#D6DADE',
          400: '#A8B0B9',
          500: '#717D8A',
          600: '#4F5B67',
          700: '#373F47',
          800: '#242D35',
          900: '#0C1116',
        },
        red: {
          DEFAULT: '#FF513A',
          50: '#FFF4EC',
          100: '#FFE8D7',
          200: '#FFCCB0',
          300: '#FFA988',
          400: '#FF886B',
          500: '#FF513A',
          600: '#DB302A',
          700: '#B71D23',
          800: '#931222',
          900: '#7A0B21',
        },
        green: {
          DEFAULT: '#44C13C',
          50: '#F6FFF0',
          100: '#E6FBD9',
          200: '#C9F8B4',
          300: '#A0EC8A',
          400: '#79D969',
          500: '#44C13C',
          600: '#2BA52E',
          700: '#1E8A29',
          800: '#0F5B1D',
          900: '#073E16',
        },
        yellow: {
          DEFAULT: '#FFCF0F',
          50: '#FFFEEC',
          100: '#FFF9CF',
          200: '#FFF19F',
          300: '#FFE86F',
          400: '#FFDE4B',
          500: '#FFCF0F',
          600: '#DBAD0A',
          700: '#B78D07',
          800: '#7B5C03',
          900: '#4F3903',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },

        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(-50%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        'fade-in': 'fadeIn 0.15s ease-in-out',
        'slide-up': 'slideUp 0.15s ease-in-out',
        'fade-in-up': 'fadeIn 0.15s ease-in-out, slideUp 0.15s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
