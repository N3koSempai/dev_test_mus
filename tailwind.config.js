/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'

// eslint-disable-next-line no-undef
module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
})
