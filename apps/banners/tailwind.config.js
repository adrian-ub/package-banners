/* eslint-disable no-undef */
module.exports = (isProd) => ({
  purge: {
    enabled: isProd,
    content: ['./**/*.{html,ts}', '../../../libs/**/*.{html,ts}'],
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [require('./tailwindcss-forms')],
});
