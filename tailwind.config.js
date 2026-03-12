/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT:'#9e2020', dark:'#7a1515', light:'#fdf2f2', soft:'#f5dada' },
        ink: { DEFAULT:'#1a1410', soft:'#3d3530' },
        cream: '#faf8f5',
        warm: '#f5f0eb',
        border: '#ede7e0',
        muted: '#8a7e79',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
