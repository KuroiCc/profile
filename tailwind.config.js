/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        code: ['Cascadia Code', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
