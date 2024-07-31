const { colors } = require('@mui/material')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Добавьте свои цвета здесь, если необходимо
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
      },
      // Переопределение стилей фокуса
      ringWidth: {
        DEFAULT: '0px',
      },
      ringColor: {
        DEFAULT: 'transparent',
      },
      ringOffsetWidth: {
        DEFAULT: '0px',
      },
      ringOffsetColor: {
        DEFAULT: 'transparent',
      },
      boxShadow: {
        DEFAULT: 'none',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // Используйте классы для стилизации форм
    }),
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.semibold') },
        'h3': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.semibold') },
      })
    })
  ],
}