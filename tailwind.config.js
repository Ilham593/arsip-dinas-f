/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('/img/bg-login.png')",
      }
    },
  },
  plugins: [],
}

