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
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(18deg)' },
          '20%': { transform: 'rotate(36deg)' },
          '30%': { transform: 'rotate(54deg)' },
          '40%': { transform: 'rotate(72deg)' },
          '50%': { transform: 'rotate(90deg)' },
          '60%': { transform: 'rotate(108deg)' },
          '70%': { transform: 'rotate(126deg)' },
          '80%': { transform: 'rotate(144deg)' },
          '90%': { transform: 'rotate(162deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        rotateL: {
          '0%': { transform: 'rotate(180deg)' },
          '10%': { transform: 'rotate(162deg)' },
          '20%': { transform: 'rotate(144deg)' },
          '30%': { transform: 'rotate(126deg)' },
          '40%': { transform: 'rotate(108deg)' },
          '50%': { transform: 'rotate(90deg)' },
          '60%': { transform: 'rotate(72deg)' },
          '70%': { transform: 'rotate(54deg)' },
          '80%': { transform: 'rotate(36deg)' },
          '90%': { transform: 'rotate(18deg)' },
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
        easeIn: 'easeIn 0.5s ease-in-out',
        easeOut: 'easeOut 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}

