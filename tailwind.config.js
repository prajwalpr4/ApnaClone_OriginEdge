/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { 
          primary: '#127b6c', // Teal/green used for CTA buttons
          dark: '#1a0f2e', // Dark purple for bottom footer
          blue: '#1e40af', // Blue used in promo card
          orange: '#f97316', // Orange for 'New' badges
          red: '#ef4444', // Red for expired banner
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
