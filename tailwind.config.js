/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#050505',
        panel: '#151515',
        panel2: '#1d1d1d',
      },
    },
  },
  plugins: [],
}
