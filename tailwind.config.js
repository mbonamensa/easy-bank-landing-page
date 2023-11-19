/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Public Sans']
      },
      keyframes: {
        rotateR: {
          '0%': { transform: 'rotate(45deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(135deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        rotateL: {
          '0%': { transform: 'rotate(180deg)' },
          '25%': { transform: 'rotate(135deg)' },
          '50%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        easeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        easeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        rotateR: 'rotateR 0.5s ease-in-out',
        rotateL: 'rotateL 0.5s ease-in-out',
        easeIn: 'easeIn 1s ease-in-out',
        easeOut: 'easeOut 1s ease-in-out',
      }
    },
  },
  plugins: [],
}

