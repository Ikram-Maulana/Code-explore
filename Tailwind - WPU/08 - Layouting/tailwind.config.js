module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      }
    },
  },
  plugins: [],
}